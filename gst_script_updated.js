(() => {
  const $ = s => document.querySelector(s);
  const screens = {start: $('#startScreen'), exam: $('#examScreen'), result: $('#resultScreen')};
  let state = {questions:[], index:0, answers:{}, flags:new Set(), secondsLeft:0, totalSeconds:0, elapsedSeconds:0, timerId:null, submitted:false, student:''};
  const letters=['A','B','C','D'];
  const countSelect=$('#countSelect');

  function show(name){Object.values(screens).forEach(x=>x.classList.remove('active')); screens[name].classList.add('active'); window.scrollTo({top:0,behavior:'smooth'});}
  function shuffle(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}return arr}
  function prepareQuestions(source){
    const qs=source.map(q=>({...q,options:[...q.options]}));
    const targets=[];
    for(let i=0;i<qs.length;i++) targets.push(letters[i%4]);
    shuffle(targets);
    qs.forEach((q,idx)=>{
      const correctIndex=letters.indexOf(q.answer);
      const correctText=q.options[correctIndex];
      const distractors=q.options.filter((_,i)=>i!==correctIndex);
      shuffle(distractors);
      const opts=[...distractors];
      opts.splice(letters.indexOf(targets[idx]),0,correctText);
      q.options=opts;
      q.answer=targets[idx];
    });
    return qs;
  }
  function formatTime(sec){const m=Math.floor(sec/60).toString().padStart(2,'0');const s=(sec%60).toString().padStart(2,'0');return `${m}:${s}`}
  function updatePreview(){const n=+countSelect.value,total=n*30;$('#timePreview').textContent=`${Math.floor(total/60)}m ${total%60}s total (30s per question)`;}
  countSelect.addEventListener('change',updatePreview);updatePreview();

  function startTest(){
    const count=+countSelect.value;
    state.questions=prepareQuestions(shuffle([...QUESTION_BANK]).slice(0,Math.min(count,QUESTION_BANK.length)));
    state.index=0;state.answers={};state.flags=new Set();state.student=$('#studentName').value.trim()||'Student';state.totalSeconds=state.questions.length*30;state.secondsLeft=state.totalSeconds;state.elapsedSeconds=0;state.submitted=false;
    $('#candidateName').textContent=state.student;$('#examTitle').textContent=`GST 212 • ${state.questions.length} Questions`;$('#timer').textContent=formatTime(state.secondsLeft);$('#timer').style.color='';
    buildNavigator();renderQuestion();show('exam');clearInterval(state.timerId);state.timerId=setInterval(tick,1000);
  }
  function tick(){
    if(state.submitted)return;
    state.secondsLeft--;state.elapsedSeconds++;
    $('#timer').textContent=formatTime(Math.max(0,state.secondsLeft));
    if(state.secondsLeft<=5)$('#timer').style.color='var(--danger)';
    if(state.secondsLeft<=0){
      state.secondsLeft=0;
      clearInterval(state.timerId);
      submitTest(true);
    }
  }
  function renderQuestion(){
    const card=document.querySelector('.question-card');
    if(card && !card.dataset.transitioning){
      card.dataset.transitioning='1';
      card.classList.add('question-changing');
      setTimeout(()=>{ card.classList.remove('question-changing'); delete card.dataset.transitioning; },120);
    }
    const q=state.questions[state.index];
    const scrollArea=document.querySelector('#examScreen .exam-layout');
    if(scrollArea) scrollArea.scrollTo({top:0,behavior:'smooth'});
    $('#qNumber').textContent=`Question ${state.index+1}`;$('#questionText').textContent=q.q;
    $('#options').innerHTML=q.options.map((o,i)=>`<button class="option ${state.answers[q.id]===letters[i]?'selected':''}" data-answer="${letters[i]}"><span class="option-letter">${letters[i]}</span><span>${escapeHtml(o)}</span></button>`).join('');
    $('#options').querySelectorAll('.option').forEach(btn=>btn.addEventListener('click',()=>choose(btn.dataset.answer)));
    $('#prevBtn').disabled=state.index===0;$('#prevBtn').style.opacity=state.index===0?.5:1;
    $('#nextBtn').textContent=state.index===state.questions.length-1?'Finish review →':'Next →';
    $('#flagBtn').classList.toggle('active',state.flags.has(q.id));$('#flagBtn').textContent=state.flags.has(q.id)?'⚑ Flagged':'⚑ Flag';
    updateProgress();buildNavigator();
  }
  function choose(letter){const q=state.questions[state.index];state.answers[q.id]=letter;renderQuestion()}
  function updateProgress(){const total=state.questions.length,answered=Object.keys(state.answers).length;$('#progressText').textContent=`Question ${state.index+1} of ${total}`;$('#answeredText').textContent=`${answered} answered`;$('#navCount').textContent=`${answered}/${total}`;$('#progressBar').style.width=`${((state.index+1)/total)*100}%`}
  function buildNavigator(){const g=$('#questionGrid');g.innerHTML=state.questions.map((q,i)=>`<button class="q-dot ${i===state.index?'current':''} ${state.answers[q.id]?'answered':''} ${state.flags.has(q.id)?'flagged':''}" data-i="${i}">${i+1}</button>`).join('');g.querySelectorAll('.q-dot').forEach(b=>b.addEventListener('click',()=>{state.index=+b.dataset.i;renderQuestion()}))}
  function submitTest(auto=false){if(state.submitted)return;if(!auto&&!confirm('Submit this test now? You can review your answers after submission.'))return;state.submitted=true;clearInterval(state.timerId);const correct=state.questions.filter(q=>state.answers[q.id]===q.answer).length;const unanswered=state.questions.filter(q=>!state.answers[q.id]).length;const wrong=state.questions.length-correct-unanswered;renderResults(correct,wrong,unanswered);show('result')}
  function renderResults(correct,wrong,unanswered){const total=state.questions.length,pct=Math.round(correct/total*100),used=state.elapsedSeconds;$('#resultTitle').textContent=pct>=70?'Excellent work!':pct>=50?'Good effort!':'Keep practising!';$('#resultSubtitle').textContent=`${state.student}, you completed ${total} GST 212 practice questions with a 30-second-per-question exam time.`;$('#scorePercent').textContent=`${pct}%`;$('#correctStat').textContent=correct;$('#wrongStat').textContent=wrong;$('#unansweredStat').textContent=unanswered;$('#timeUsedStat').textContent=`${Math.floor(used/60)}m ${used%60}s`;$('#scoreFraction').textContent=`${correct} / ${total}`;$('#scoreBar').style.width=`${pct}%`;$('#performanceMessage').textContent=pct>=70?'Strong performance. Review the missed questions to reinforce the details.':pct>=50?'You are on the right track. Revisit the questions marked wrong and try another batch.':'Use the review below as a study guide, then take the test again.';document.querySelector('.score-ring').style.background=`conic-gradient(var(--primary) ${pct}%, #dfeae7 ${pct}%)`;renderReview('all')}
  function renderReview(filter){const list=$('#reviewList');list.innerHTML='';state.questions.forEach((q,i)=>{const got=state.answers[q.id];const ok=got===q.answer;const empty=!got;if(filter==='wrong'&&(!got||ok))return;if(filter==='unanswered'&&!empty)return;const div=document.createElement('div');div.className='review-item';div.innerHTML=`<h4>${i+1}. ${escapeHtml(q.q)}</h4><div class="review-answer ${ok?'correct':empty?'empty':'wrong'}"><b>Your answer:</b> ${got?got+'. '+escapeHtml(q.options[letters.indexOf(got)]):'Not answered'} ${ok?'✓':got?'✕':''}</div><div class="review-answer correct"><b>Correct:</b> ${q.answer}. ${escapeHtml(q.options[letters.indexOf(q.answer)])}</div>`;list.appendChild(div)})}
  function escapeHtml(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
  $('#startBtn').addEventListener('click',startTest);$('#prevBtn').addEventListener('click',()=>{if(state.index>0){state.index--;renderQuestion()}});$('#nextBtn').addEventListener('click',()=>{if(state.index<state.questions.length-1){state.index++;renderQuestion()}else{submitTest(false)}});$('#flagBtn').addEventListener('click',()=>{const id=state.questions[state.index].id;state.flags.has(id)?state.flags.delete(id):state.flags.add(id);renderQuestion()});$('#submitBtn').addEventListener('click',()=>submitTest(false));$('#reviewFilter').addEventListener('change',e=>renderReview(e.target.value));$('#newTestBtn').addEventListener('click',()=>{clearInterval(state.timerId);show('start')});$('#resetBtn').addEventListener('click',()=>{clearInterval(state.timerId);state={questions:[],index:0,answers:{},flags:new Set(),secondsLeft:0,totalSeconds:0,elapsedSeconds:0,timerId:null,submitted:false,student:''};show('start')});$('#themeBtn').addEventListener('click',()=>document.body.classList.toggle('dark'));
  function startLoadingScreen(){
    const screen=$('#loadingScreen');
    const message=$('#loadingMessage');
    const progress=$('#loadingProgress');
    const countdown=$('#loadingCountdown');
    if(!screen||!message||!progress||!countdown) return;

    const text='As you study with this practice CBT exam, let God give you exam success and excellence in your real exam. A is the goal 🔥';
    const duration=15000;
    const started=performance.now();
    let typed=0;
    let lastType=started;

    function frame(now){
      const elapsed=now-started;
      const pct=Math.min(elapsed/duration,1);
      progress.style.width=(pct*100)+'%';
      countdown.textContent=pct<1 ? `Preparing your practice exam… ${Math.ceil((duration-elapsed)/1000)}s` : 'Ready!';

      if(typed<text.length && now-lastType>Math.max(18,Math.min(55,45-(pct*18)))){
        message.textContent+=text[typed++];
        lastType=now;
      }

      if(pct<1){ requestAnimationFrame(frame); }
      else{
        screen.classList.add('hide');
        setTimeout(()=>{screen.remove();},700);
      }
    }
    requestAnimationFrame(frame);
  }

  updatePreview();
  startLoadingScreen();
})();
