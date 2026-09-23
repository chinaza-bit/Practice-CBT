const QUESTION_BANK = [
  {
    "id": 1,
    "q": "What does CPU stand for?",
    "options": [
      "Central Process Utility",
      "Central Processing Unit",
      "Core Processing Unit",
      "Computer Processing Utility"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 2,
    "q": "Which functional unit performs arithmetic and logic operations?",
    "options": [
      "Control Unit",
      "Arithmetic and Logic Unit (ALU)",
      "Register",
      "Bus"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 3,
    "q": "Which CPU unit fetches and decodes instructions and directs operations?",
    "options": [
      "ALU",
      "Control Unit (CU)",
      "Cache",
      "MAR"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 4,
    "q": "Which CPU component is small but very fast, holding data temporarily during processing?",
    "options": [
      "Cache",
      "Register",
      "RAM",
      "ROM"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 5,
    "q": "What does MAR stand for?",
    "options": [
      "Memory Address Register",
      "Main Address Register",
      "Memory Access Router",
      "Multiple Address Register"
    ],
    "answer": "A",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 6,
    "q": "What does MDR stand for?",
    "options": [
      "Memory Data Register",
      "Main Data Router",
      "Memory Direct Register",
      "Multiple Data Register"
    ],
    "answer": "A",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 7,
    "q": "What is ACC in CPU registers?",
    "options": [
      "Access Control Counter",
      "Accumulator",
      "Active Cache Controller",
      "Address Cache Counter"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 8,
    "q": "What does IR stand for among CPU registers?",
    "options": [
      "Interrupt Register",
      "Instruction Register",
      "Index Register",
      "Internal Register"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 9,
    "q": "What does PC stand for?",
    "options": [
      "Program Counter",
      "Processor Clock",
      "Peripheral Controller",
      "Primary Cache"
    ],
    "answer": "A",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 10,
    "q": "Which bus carries the actual data being transferred?",
    "options": [
      "Address bus",
      "Control bus",
      "Data bus",
      "System bus"
    ],
    "answer": "C",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 11,
    "q": "Which bus carries memory addresses?",
    "options": [
      "Data bus",
      "Address bus",
      "Control bus",
      "I/O bus"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 12,
    "q": "Which bus carries signals like read/write, clock, and interrupt?",
    "options": [
      "Data bus",
      "Address bus",
      "Control bus",
      "Local bus"
    ],
    "answer": "C",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 13,
    "q": "An interrupt is best described as:",
    "options": [
      "A permanent halt of the CPU",
      "A signal that causes the CPU to temporarily stop and respond to an urgent event",
      "A type of memory",
      "An addressing mode"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 14,
    "q": "In an instruction, the part that specifies the operation to perform is the:",
    "options": [
      "Operand",
      "Opcode",
      "Address",
      "Mode bit"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 15,
    "q": "In an instruction, the operands specify:",
    "options": [
      "The opcode",
      "The data or addresses the operation works on",
      "The clock speed",
      "The interrupt type"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 16,
    "q": "In 'ADD X1, X2', which part is the opcode?",
    "options": [
      "X1",
      "X2",
      "ADD",
      "X1,X2"
    ],
    "answer": "C",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 17,
    "q": "Which instruction format takes operands implicitly from the top of the stack?",
    "options": [
      "One-address",
      "Two-address",
      "Zero-address",
      "Three-address"
    ],
    "answer": "C",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 18,
    "q": "Which instruction format uses an accumulator implicitly for one of its operands?",
    "options": [
      "Zero-address",
      "One-address",
      "Two-address",
      "Three-address"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 19,
    "q": "Which instruction format specifies all three operands explicitly?",
    "options": [
      "Zero-address",
      "One-address",
      "Two-address",
      "Three-address"
    ],
    "answer": "D",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 20,
    "q": "LOAD, STORE, and MOVE are examples of:",
    "options": [
      "Arithmetic instructions",
      "Data transfer instructions",
      "Logical instructions",
      "Control instructions"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 21,
    "q": "ADD, SUB, MUL, DIV are examples of:",
    "options": [
      "Data transfer instructions",
      "Arithmetic instructions",
      "I/O instructions",
      "Control instructions"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 22,
    "q": "AND, OR, NOT, XOR are examples of:",
    "options": [
      "Arithmetic instructions",
      "Logical instructions",
      "Control instructions",
      "I/O instructions"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 23,
    "q": "CALL, RETURN, and JUMP are examples of:",
    "options": [
      "Data transfer instructions",
      "Arithmetic instructions",
      "Control instructions",
      "I/O instructions"
    ],
    "answer": "C",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 24,
    "q": "IN and OUT are examples of:",
    "options": [
      "Control instructions",
      "I/O instructions",
      "Arithmetic instructions",
      "Logical instructions"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 25,
    "q": "An addressing mode is best defined as:",
    "options": [
      "A type of memory chip",
      "How an instruction specifies the location of its operand",
      "A CPU clock cycle",
      "A type of bus"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 26,
    "q": "In 'LOAD 5', the value 5 is used directly as the operand. This is:",
    "options": [
      "Direct addressing",
      "Immediate addressing",
      "Indirect addressing",
      "Register addressing"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 27,
    "q": "When an instruction directly contains the memory address of the operand, this is:",
    "options": [
      "Immediate addressing",
      "Direct addressing",
      "Indirect addressing",
      "Indexed addressing"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 28,
    "q": "'LOAD (500)', which fetches the address stored at location 500 and then loads the value from there, is:",
    "options": [
      "Direct addressing",
      "Immediate addressing",
      "Indirect addressing",
      "Register addressing"
    ],
    "answer": "C",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 29,
    "q": "'LOAD X1', where the operand is inside a register, is:",
    "options": [
      "Register addressing",
      "Register indirect addressing",
      "Indexed addressing",
      "Direct addressing"
    ],
    "answer": "A",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 30,
    "q": "'LOAD (X1)', where the register contains the address of the operand, is:",
    "options": [
      "Register addressing",
      "Register indirect addressing",
      "Indirect addressing",
      "Immediate addressing"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 31,
    "q": "Indexed addressing calculates the effective address using:",
    "options": [
      "Only the opcode",
      "A base address and an index register",
      "Only the accumulator",
      "The stack pointer only"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 32,
    "q": "In 'LOAD R1, X(R2)', what does X represent?",
    "options": [
      "Index register",
      "Base address",
      "Opcode",
      "Accumulator"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 33,
    "q": "Which instructions allow transfer of data between registers and memory, including synchronization and cache management?",
    "options": [
      "I/O instructions",
      "Memory instructions",
      "Control instructions",
      "Logical instructions"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 34,
    "q": "Which I/O instruction reads data from an input device?",
    "options": [
      "OUT",
      "IN",
      "START",
      "STOP"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 35,
    "q": "Which I/O instruction sends data from a CPU register to an output device?",
    "options": [
      "IN",
      "OUT",
      "TEST",
      "HALT"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 36,
    "q": "In Von Neumann architecture, instructions and data:",
    "options": [
      "Are stored in separate memories",
      "Share the same memory and bus",
      "Are never stored",
      "Bypass memory entirely"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 37,
    "q": "In Harvard architecture, instructions and data:",
    "options": [
      "Share a single memory and bus",
      "Use separate memories, allowing simultaneous access",
      "Are never used together",
      "Require virtual memory"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 38,
    "q": "Which architecture is more prone to the 'Von Neumann bottleneck'?",
    "options": [
      "Harvard architecture",
      "Von Neumann architecture",
      "Both equally",
      "Neither"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 39,
    "q": "Which architecture generally offers higher throughput due to separate data and instruction access?",
    "options": [
      "Von Neumann",
      "Harvard",
      "Both are identical",
      "Neither"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 40,
    "q": "Which architecture is typically cheaper and simpler to implement?",
    "options": [
      "Harvard",
      "Von Neumann",
      "Both cost the same",
      "Neither"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 41,
    "q": "Which type of systems commonly use Harvard architecture?",
    "options": [
      "General-purpose PCs and servers",
      "Embedded systems and digital signal processors (DSPs)",
      "Mainframe servers only",
      "Cloud servers only"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 42,
    "q": "x86 is best classified as:",
    "options": [
      "RISC (Reduced Instruction Set Computer)",
      "CISC (Complex Instruction Set Computer)",
      "A memory type",
      "A cache level"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 43,
    "q": "MIPS is best classified as:",
    "options": [
      "CISC",
      "RISC (Reduced Instruction Set Computer)",
      "A type of memory",
      "A bus protocol"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 44,
    "q": "Which instruction set architecture typically uses a fixed 32-bit instruction length?",
    "options": [
      "x86",
      "MIPS",
      "Both vary equally",
      "Neither has fixed length"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 45,
    "q": "Which instruction set architecture uses variable instruction length (1-15 bytes)?",
    "options": [
      "MIPS",
      "x86",
      "Both are fixed",
      "Neither"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 46,
    "q": "In MIPS assembly, 'add $t0, $t1, $t2' uses how many explicit operands?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "answer": "C",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 47,
    "q": "In x86 Intel syntax, 'add eax, ebx' means:",
    "options": [
      "eax = ebx",
      "eax = eax + ebx (destination is also a source)",
      "ebx = eax + ebx",
      "Both registers are cleared"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 48,
    "q": "Which architecture is typically favoured for embedded systems and teaching due to its simplicity?",
    "options": [
      "x86",
      "MIPS",
      "Both equally",
      "Neither"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 49,
    "q": "Which architecture is typically favoured for desktops and high-performance computing due to its rich instruction set?",
    "options": [
      "MIPS",
      "x86",
      "Both equally",
      "Neither"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 50,
    "q": "Comparing machine language and high-level language, which offers the fastest execution?",
    "options": [
      "High-level language",
      "Machine language",
      "Both are equal",
      "Neither executes"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 51,
    "q": "Which is easier to develop and maintain, machine language or high-level language?",
    "options": [
      "Machine language",
      "High-level language",
      "Both equally difficult",
      "Neither"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 52,
    "q": "Computer Architecture is best compared to:",
    "options": [
      "The construction plan of a house",
      "The blueprint of a house, showing what it should look like and how it functions",
      "A finished, painted house",
      "A house's electricity bill"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 53,
    "q": "Computer Organization is best compared to:",
    "options": [
      "The blueprint of a house",
      "The construction plan showing how plumbing, wiring, and materials are arranged",
      "A house's paint colour",
      "A house's furniture"
    ],
    "answer": "B",
    "batch": 1,
    "topic": "Computer Hardware & Instruction Set Architecture"
  },
  {
    "id": 54,
    "q": "Dataflow refers to:",
    "options": [
      "The physical size of the CPU",
      "The pathway through which data moves inside the CPU and between CPU, memory, and I/O",
      "A type of register",
      "A programming language"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 55,
    "q": "The instruction cycle consists mainly of which three phases?",
    "options": [
      "Load, Store, Execute",
      "Fetch, Decode, Execute",
      "Read, Write, Compute",
      "Start, Run, Stop"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 56,
    "q": "In the fetch phase, the CPU:",
    "options": [
      "Interprets the instruction",
      "Gets the instruction from memory",
      "Performs the operation",
      "Handles an interrupt"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 57,
    "q": "In the decode phase:",
    "options": [
      "The ALU performs the operation",
      "The Control Unit interprets the instruction",
      "Data is stored in memory",
      "An interrupt is generated"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 58,
    "q": "In the execute phase:",
    "options": [
      "The instruction is fetched",
      "The instruction is decoded",
      "The ALU or I/O system performs the operation",
      "Nothing happens"
    ],
    "answer": "C",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 59,
    "q": "Control instructions are used to:",
    "options": [
      "Perform arithmetic",
      "Change the sequence of execution of instructions",
      "Store data in cache",
      "Transfer data to I/O"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 60,
    "q": "Which control instruction forces the CPU to jump to another address no matter what?",
    "options": [
      "JZ",
      "JNZ",
      "JMP (unconditional jump)",
      "CALL"
    ],
    "answer": "C",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 61,
    "q": "A conditional jump such as JZ or JNZ occurs:",
    "options": [
      "Always",
      "Only if a specific condition is met",
      "Never",
      "Only during interrupts"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 62,
    "q": "Which instruction jumps to a function while saving the current address?",
    "options": [
      "RETURN",
      "CALL",
      "HALT",
      "PUSH"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 63,
    "q": "Which instruction returns the CPU to a previously saved address?",
    "options": [
      "CALL",
      "RETURN",
      "JMP",
      "POP"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 64,
    "q": "Which instruction stops execution completely until restarted?",
    "options": [
      "HALT",
      "JMP",
      "CALL",
      "NOP"
    ],
    "answer": "A",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 65,
    "q": "A stack works on which principle?",
    "options": [
      "FIFO (First In, First Out)",
      "LIFO (Last In, First Out)",
      "Random access",
      "Round robin"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 66,
    "q": "Which stack instruction places data on top of the stack?",
    "options": [
      "POP",
      "PUSH",
      "CALL",
      "RET"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 67,
    "q": "Which stack instruction removes data from the stack into a register?",
    "options": [
      "PUSH",
      "POP",
      "JMP",
      "CALL"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 68,
    "q": "An interrupt is:",
    "options": [
      "A permanent shutdown",
      "A signal indicating immediate attention is required by the CPU",
      "A memory address",
      "A type of bus"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 69,
    "q": "Interrupts generated by external devices like a keyboard or mouse are called:",
    "options": [
      "Software interrupts",
      "Hardware interrupts",
      "Maskable interrupts only",
      "Non-maskable interrupts only"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 70,
    "q": "Interrupts generated by running programs, such as a division-by-zero error, are called:",
    "options": [
      "Hardware interrupts",
      "Software interrupts",
      "External interrupts",
      "I/O interrupts"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 71,
    "q": "Interrupts that can be ignored by the CPU, such as 'printer ready', are called:",
    "options": [
      "Non-maskable interrupts",
      "Maskable interrupts",
      "Hardware interrupts only",
      "Software interrupts only"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 72,
    "q": "Interrupts that cannot be ignored and must be handled, such as power failure, are called:",
    "options": [
      "Maskable interrupts",
      "Non-maskable interrupts",
      "Software interrupts",
      "I/O interrupts"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 73,
    "q": "What is the correct first step in interrupt handling?",
    "options": [
      "Jump to the ISR",
      "CPU completes the current atomic instruction",
      "Restore saved state",
      "Execute the ISR"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 74,
    "q": "What does ISR stand for?",
    "options": [
      "Instruction Service Register",
      "Interrupt Service Routine",
      "Internal System Reset",
      "Instruction Set Register"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 75,
    "q": "After completing its current instruction during an interrupt, what does the CPU do next?",
    "options": [
      "Executes the ISR immediately",
      "Saves the current state in a stack",
      "Restores the saved state",
      "Ignores the interrupt"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 76,
    "q": "What is the final step of interrupt handling?",
    "options": [
      "Save the state",
      "Jump to the ISR",
      "Restore saved state and resume the program",
      "Halt the CPU"
    ],
    "answer": "C",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 77,
    "q": "Which of the following is an arithmetic instruction?",
    "options": [
      "AND",
      "ADD",
      "JMP",
      "PUSH"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 78,
    "q": "Which instruction increments a value by 1?",
    "options": [
      "DEC",
      "INC",
      "ADD",
      "SUB"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 79,
    "q": "Which instruction decrements a value by 1?",
    "options": [
      "INC",
      "DEC",
      "ADD",
      "MUL"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 80,
    "q": "Which best describes the Control Unit's role during the instruction cycle?",
    "options": [
      "It stores data permanently",
      "It fetches, decodes, and directs the execution of instructions",
      "It performs arithmetic only",
      "It handles power supply"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 81,
    "q": "Which of the following is NOT a phase of the instruction cycle?",
    "options": [
      "Fetch",
      "Decode",
      "Compile",
      "Execute"
    ],
    "answer": "C",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 82,
    "q": "During 'ADD T1, T2, T3', which unit executes the addition after decoding?",
    "options": [
      "Control Unit",
      "ALU",
      "Cache",
      "Bus"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 83,
    "q": "A stack pointer is used to:",
    "options": [
      "Store the opcode",
      "Keep track of the top of the stack",
      "Store interrupt vectors",
      "Hold the program counter"
    ],
    "answer": "B",
    "batch": 2,
    "topic": "Dataflow & Control Instructions"
  },
  {
    "id": 84,
    "q": "CPU Design refers to:",
    "options": [
      "How software is compiled",
      "How the CPU is built internally and how it controls execution",
      "How networks are configured",
      "How files are stored"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 85,
    "q": "The Data Path is best described as:",
    "options": [
      "A software algorithm",
      "The hardware components inside the CPU that perform data processing tasks",
      "A type of interrupt",
      "A memory address"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 86,
    "q": "Which of these is NOT a component of the data path?",
    "options": [
      "Registers",
      "ALU",
      "Buses",
      "Compiler"
    ],
    "answer": "D",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 87,
    "q": "Which unit performs arithmetic and logic operations within the data path?",
    "options": [
      "Memory Interface",
      "ALU",
      "Control bus",
      "Cache"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 88,
    "q": "Which data path component connects the CPU for load operations?",
    "options": [
      "Memory Interface",
      "Register",
      "ALU",
      "PC"
    ],
    "answer": "A",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 89,
    "q": "The Control Unit's main role is to:",
    "options": [
      "Store large amounts of data",
      "Generate control signals that coordinate CPU operations",
      "Perform arithmetic operations",
      "Manage secondary storage"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 90,
    "q": "Register Transfer Level (RTL) design describes:",
    "options": [
      "Only the CPU clock speed",
      "The flow of data between registers and logical operations performed within a digital circuit",
      "Only software instructions",
      "Only memory hierarchy"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 91,
    "q": "In RTL, 'TEMP <- X2 + X3' means:",
    "options": [
      "X2 is stored in X3",
      "The ALU adds X2 and X3, storing the result in TEMP",
      "TEMP is deleted",
      "X3 is loaded from memory"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 92,
    "q": "In RTL, 'R1 = R2' means:",
    "options": [
      "Compare R1 and R2",
      "Transfer the content of register R2 to R1",
      "Add R1 and R2",
      "Multiply R1 by R2"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 93,
    "q": "In RTL, 'R3 <- R1 + R2' means:",
    "options": [
      "R3 is compared to R1 and R2",
      "R1 and R2 are added and the result stored in R3",
      "R3 is deleted",
      "R1 is copied to R2"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 94,
    "q": "In RTL, 'MAR <- PC' means:",
    "options": [
      "PC is deleted",
      "The Program Counter's value is transferred to the Memory Address Register",
      "MAR is copied to PC",
      "PC is incremented"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 95,
    "q": "In RTL, 'IR <- M[MAR]' means:",
    "options": [
      "An instruction is fetched from memory at the address in MAR into the IR",
      "IR is stored into memory",
      "MAR is cleared",
      "PC is updated"
    ],
    "answer": "A",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 96,
    "q": "Hardwired control signals are generated by:",
    "options": [
      "A control memory storing microinstructions",
      "Fixed electronic circuits like logic gates and flip-flops",
      "A compiler",
      "An operating system"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 97,
    "q": "Hardwired control is generally used in which type of CPUs?",
    "options": [
      "CISC",
      "RISC",
      "GPU",
      "DSP only"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 98,
    "q": "Which is an advantage of hardwired control?",
    "options": [
      "Easy to update",
      "High speed",
      "Supports complex instructions easily",
      "Requires more memory"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 99,
    "q": "Which is a disadvantage of hardwired control?",
    "options": [
      "It's very fast",
      "Inflexible; adding new instructions requires redesign",
      "It's cheap to change",
      "It uses microcode"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 100,
    "q": "Microprogrammed control uses:",
    "options": [
      "Fixed logic gates only",
      "A control memory to store microinstructions",
      "Only hardwired circuits",
      "No memory at all"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 101,
    "q": "Microprogrammed control is typically used for which CPU type?",
    "options": [
      "RISC",
      "CISC",
      "Embedded microcontrollers only",
      "None"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 102,
    "q": "Which is an advantage of microprogrammed control?",
    "options": [
      "It's always faster than hardwired control",
      "It's easy to design, update, and debug",
      "It requires less memory than hardwired control",
      "It cannot support complex instructions"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 103,
    "q": "Which is a disadvantage of microprogrammed control?",
    "options": [
      "High speed",
      "Slower than hardwired control",
      "Difficult to update",
      "Cannot be debugged"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 104,
    "q": "Comparing speed, which control type is generally faster?",
    "options": [
      "Microprogrammed",
      "Hardwired",
      "Both are equal",
      "Neither"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 105,
    "q": "Comparing flexibility, which control type is easier to update?",
    "options": [
      "Hardwired",
      "Microprogrammed",
      "Both equally",
      "Neither"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 106,
    "q": "Which CPU internal register stores flags such as Zero Flag or Carry Flag after an operation?",
    "options": [
      "Status/Flag register",
      "Data bus",
      "Cache",
      "ROM"
    ],
    "answer": "A",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 107,
    "q": "Which of these is a key datapath element?",
    "options": [
      "Multiplexer",
      "Compiler",
      "Operating system",
      "Hard disk"
    ],
    "answer": "A",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 108,
    "q": "What is the function of a multiplexer in the datapath?",
    "options": [
      "Perform arithmetic",
      "Select inputs based on control signals",
      "Store instructions permanently",
      "Generate clock pulses"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 109,
    "q": "The Intel 8085 is best described as:",
    "options": [
      "A 32-bit RISC processor",
      "An 8-bit processor with 6 general-purpose registers",
      "A 64-bit CISC processor",
      "A memory chip"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 110,
    "q": "The Intel 8085 uses which type of control logic?",
    "options": [
      "Microprogrammed control",
      "Hardwired control",
      "Neither",
      "Both equally"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 111,
    "q": "In the Intel 8085 case study, 'MOV A, B' at the register-transfer level means:",
    "options": [
      "Register B's content moves to the Accumulator",
      "The Accumulator's content moves to Register B",
      "Both registers are cleared",
      "PC is incremented"
    ],
    "answer": "A",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 112,
    "q": "Modern processors like Intel x86 tend to use which control type for complex instruction decoding?",
    "options": [
      "Hardwired control only",
      "Microprogrammed control",
      "No control unit",
      "Manual control"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 113,
    "q": "Which best summarises the difference between datapath and control logic?",
    "options": [
      "Datapath handles data movement; control logic manages sequencing and activation",
      "Datapath manages memory only; control logic executes arithmetic",
      "They are the same thing",
      "Datapath is software; control logic is hardware only"
    ],
    "answer": "A",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 114,
    "q": "'IF opcode == 0001 THEN Load_Reg = 1, ALU_Op <- ADD' illustrates:",
    "options": [
      "Microprogrammed control",
      "Hardwired control logic",
      "RTL notation only",
      "An addressing mode"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 115,
    "q": "A microinstruction such as 'Load_Reg <- 1, ALU_Op <- ADD, PC <- PC + 1' is an example of:",
    "options": [
      "Hardwired control",
      "Microprogrammed control",
      "An addressing mode",
      "A data bus signal"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 116,
    "q": "Which statement correctly compares hardwired and microprogrammed control?",
    "options": [
      "Hardwired uses logic circuits; microprogrammed uses control memory and microcode",
      "Both use control memory",
      "Both use only logic circuits",
      "Neither uses control signals"
    ],
    "answer": "A",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 117,
    "q": "Which control type is best suited for simple, fixed instruction sets?",
    "options": [
      "Microprogrammed control",
      "Hardwired control",
      "Virtual memory",
      "Cache memory"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 118,
    "q": "Which control type is best suited for supporting complex instruction sets that may need future updates?",
    "options": [
      "Hardwired control",
      "Microprogrammed control",
      "Cache memory",
      "Virtual memory"
    ],
    "answer": "B",
    "batch": 3,
    "topic": "CPU Design"
  },
  {
    "id": 119,
    "q": "Assembly language is best described as:",
    "options": [
      "A high-level, platform-independent language",
      "A low-level language using mnemonics to represent machine instructions",
      "A type of database",
      "A markup language"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 120,
    "q": "Which of the following is a characteristic of assembly language?",
    "options": [
      "It is platform-independent",
      "It is hardware-dependent; each CPU has its own assembly language",
      "It requires no knowledge of CPU registers",
      "It is identical across all CPUs"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 121,
    "q": "In assembly programming, one assembly instruction typically corresponds to:",
    "options": [
      "Multiple machine instructions",
      "One machine instruction",
      "No machine instruction",
      "An entire program"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 122,
    "q": "Which section of an assembly program is where variables are declared?",
    "options": [
      "Code section",
      "Data section",
      "Stack section",
      "End statement"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 123,
    "q": "Which section of an assembly program contains the actual instructions?",
    "options": [
      "Data section",
      "Code section",
      "Stack section",
      "Header section"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 124,
    "q": "The stack section in an assembly program is used for:",
    "options": [
      "Declaring variables",
      "PUSH/POP operations",
      "Writing comments",
      "Naming the program"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 125,
    "q": "What marks the end of an assembly program?",
    "options": [
      "DATA ENDS",
      "CODE ENDS",
      "The END statement",
      "STACK ENDS"
    ],
    "answer": "C",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 126,
    "q": "'MOV R1, R2' performs which action?",
    "options": [
      "Adds R1 and R2",
      "Copies data from R2 into R1",
      "Compares R1 and R2",
      "Subtracts R2 from R1"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 127,
    "q": "'LOAD R1, X' performs which action?",
    "options": [
      "Loads the value from memory location X into R1",
      "Stores R1 into memory X",
      "Adds X to R1",
      "Jumps to X"
    ],
    "answer": "A",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 128,
    "q": "'STORE R1, X' performs which action?",
    "options": [
      "Loads X into R1",
      "Stores the value from R1 into memory X",
      "Compares R1 and X",
      "Clears R1"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 129,
    "q": "What does 'AND R1, R2' perform?",
    "options": [
      "Bitwise OR",
      "Bitwise AND of R1 and R2",
      "Bitwise negation",
      "Addition"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 130,
    "q": "What does 'XOR R1, R2' perform?",
    "options": [
      "Logical AND",
      "Exclusive OR of R1 and R2",
      "Bitwise NOT",
      "Subtraction"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 131,
    "q": "'JZ LABEL' means:",
    "options": [
      "Jump unconditionally to LABEL",
      "Jump to LABEL if the result is zero",
      "Jump to LABEL if not zero",
      "Call subroutine LABEL"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 132,
    "q": "'JNZ LABEL' means:",
    "options": [
      "Jump if zero",
      "Jump to LABEL if the result is not zero",
      "Jump unconditionally",
      "Return from subroutine"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 133,
    "q": "'CALL SUBR' performs:",
    "options": [
      "Jumps unconditionally with no return address saved",
      "Calls the subroutine SUBR, saving the return address",
      "Returns from a subroutine",
      "Halts the program"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 134,
    "q": "'RET' performs:",
    "options": [
      "Calls a subroutine",
      "Returns from a subroutine to the saved return address",
      "Pushes a value to the stack",
      "Loads a register"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 135,
    "q": "'PUSH R1' performs:",
    "options": [
      "Removes R1 from the stack",
      "Saves register R1 onto the stack",
      "Loads R1 from memory",
      "Clears R1"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 136,
    "q": "'POP R1' performs:",
    "options": [
      "Saves R1 to the stack",
      "Retrieves the last saved value from the stack into R1",
      "Adds 1 to R1",
      "Compares R1 to zero"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 137,
    "q": "Assembly language mnemonics are best described as:",
    "options": [
      "Random binary codes",
      "Symbolic instruction names that correspond to CPU operations",
      "High-level function names",
      "File extensions"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 138,
    "q": "Which of the following is an assembler directive rather than a CPU instruction?",
    "options": [
      "MOV",
      ".DATA",
      "ADD",
      "JMP"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 139,
    "q": "What is the purpose of the .MODEL directive?",
    "options": [
      "Starts the data segment",
      "Specifies the memory model",
      "Ends the program",
      "Declares a label"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 140,
    "q": "What is the purpose of the .DATA directive?",
    "options": [
      "Starts the data segment",
      "Starts the code segment",
      "Reserves stack space",
      "Marks the program end"
    ],
    "answer": "A",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 141,
    "q": "What is the purpose of the .CODE directive?",
    "options": [
      "Starts the data segment",
      "Starts the code segment",
      "Reserves stack space",
      "Ends the program"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 142,
    "q": "What is the purpose of the .STACK directive?",
    "options": [
      "Starts the data segment",
      "Starts the code segment",
      "Reserves stack space",
      "Declares a variable"
    ],
    "answer": "C",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 143,
    "q": "What is the purpose of the END directive?",
    "options": [
      "Starts the program",
      "Marks the end of the program",
      "Declares a label",
      "Starts a loop"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 144,
    "q": "A label in assembly language is used to:",
    "options": [
      "Declare a directive",
      "Mark a memory location or a jump target in a program",
      "Perform arithmetic",
      "Store data permanently"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 145,
    "q": "In 'ADD AL, 02H', what does '02H' represent?",
    "options": [
      "A hexadecimal operand value",
      "A register name",
      "A label",
      "A directive"
    ],
    "answer": "A",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 146,
    "q": "In 'NUM1 DB 05H' inside a data segment, 'DB' declares:",
    "options": [
      "A double word",
      "A byte",
      "A directive only",
      "A label"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 147,
    "q": "What does the interrupt 'INT 21H' invoke in DOS assembly programming?",
    "options": [
      "A BIOS hardware interrupt for video",
      "DOS interrupt services for I/O, memory, and file handling",
      "A software crash",
      "A hardware reset"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 148,
    "q": "What does 'INT 10H' typically handle?",
    "options": [
      "DOS file operations",
      "Text/video display (BIOS)",
      "Keyboard input only",
      "Disk formatting"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 149,
    "q": "Which interrupt function is used to create a file in low-level file handling?",
    "options": [
      "Function 3Dh",
      "Function 3Ch",
      "Function 3Eh",
      "Function 40h"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 150,
    "q": "Which interrupt function is used to open a file?",
    "options": [
      "Function 3Ch",
      "Function 3Dh",
      "Function 3Fh",
      "Function 40h"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 151,
    "q": "Which interrupt function is used to close a file?",
    "options": [
      "Function 3Ch",
      "Function 3Dh",
      "Function 3Eh",
      "Function 40h"
    ],
    "answer": "C",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 152,
    "q": "Which interrupt function is used to write to a file?",
    "options": [
      "Function 3Fh",
      "Function 40h",
      "Function 3Ch",
      "Function 3Eh"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 153,
    "q": "Which interrupt function is used to read from a file?",
    "options": [
      "Function 40h",
      "Function 3Fh",
      "Function 3Ch",
      "Function 3Dh"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 154,
    "q": "A batch file (.BAT) is best described as:",
    "options": [
      "A compiled binary program",
      "A text file containing a sequence of MS-DOS commands",
      "A type of hardware interrupt",
      "A memory address"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 155,
    "q": "Which command in a batch file suppresses the display of commands as they run?",
    "options": [
      "PAUSE",
      "@ECHO OFF",
      "ECHO",
      "INT 21H"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 156,
    "q": "Which tool is used to create and test .COM files by entering assembly instructions interactively in DOS?",
    "options": [
      "TASM",
      "MASM",
      "DEBUG",
      "LINK"
    ],
    "answer": "C",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 157,
    "q": "What is the correct order of steps when assembling a program with TASM?",
    "options": [
      "Link, Assemble, Run",
      "Assemble (TASM file.asm), Link (TLINK file.obj), Run (file.exe)",
      "Run, Assemble, Link",
      "Assemble, Run, Link"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 158,
    "q": "How does MASM syntax compare to TASM?",
    "options": [
      "MASM is stricter in some ways; TASM supports an ideal mode that simplifies syntax",
      "MASM and TASM are identical in every way",
      "MASM cannot assemble .asm files",
      "TASM is a high-level language"
    ],
    "answer": "A",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 159,
    "q": "In the assembly loop example using 'MOV CX, 10 ; loop count', what role does CX serve?",
    "options": [
      "A loop counter register",
      "An accumulator only",
      "A stack pointer",
      "A flag register"
    ],
    "answer": "A",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 160,
    "q": "In 'LOOP LOOP_START', the LOOP instruction:",
    "options": [
      "Halts the program",
      "Decrements CX and jumps to LOOP_START if CX is not zero",
      "Always jumps regardless of CX",
      "Clears the stack"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 161,
    "q": "In the conditional example 'CMP AL, 3' followed by 'JGE GREATER', JGE means:",
    "options": [
      "Jump if equal",
      "Jump if greater than or equal",
      "Jump if less than",
      "Jump if not zero"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 162,
    "q": "What is the purpose of the CMP instruction?",
    "options": [
      "Copies one register to another",
      "Compares two operands, typically setting flags for a subsequent conditional jump",
      "Multiplies two values",
      "Clears the stack"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 163,
    "q": "Which best describes the purpose of DEBUG, TASM, and MASM in assembly programming?",
    "options": [
      "They are hardware chips",
      "They are tools used for writing, assembling, linking, and testing assembly programs",
      "They are I/O devices",
      "They are types of interrupts"
    ],
    "answer": "B",
    "batch": 4,
    "topic": "Assembly Language Programming"
  },
  {
    "id": 164,
    "q": "Memory hierarchy organizes memory types according to:",
    "options": [
      "Colour and brand",
      "Speed, cost per bit, and capacity",
      "Only capacity",
      "Only manufacturer"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 165,
    "q": "Which memory level is the fastest, smallest, and most expensive?",
    "options": [
      "Cache",
      "Registers",
      "Main memory",
      "Secondary storage"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 166,
    "q": "Which memory level is fast, small, and expensive, sitting between registers and main memory?",
    "options": [
      "Cache memory",
      "Secondary storage",
      "Tertiary storage",
      "ROM"
    ],
    "answer": "A",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 167,
    "q": "Which memory type has medium speed and cost, e.g. RAM?",
    "options": [
      "Registers",
      "Cache",
      "Main memory",
      "Tertiary storage"
    ],
    "answer": "C",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 168,
    "q": "Which memory type is slower, cheaper, and larger, e.g. hard disk or SSD?",
    "options": [
      "Registers",
      "Cache",
      "Secondary storage",
      "Main memory"
    ],
    "answer": "C",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 169,
    "q": "Which memory type is the slowest, cheapest, and largest, e.g. magnetic tapes?",
    "options": [
      "Secondary storage",
      "Tertiary storage",
      "Cache",
      "Registers"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 170,
    "q": "Which cache level is closest to the CPU and smallest, typically 32-128 KB?",
    "options": [
      "L1 cache",
      "L2 cache",
      "L3 cache",
      "Main memory"
    ],
    "answer": "A",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 171,
    "q": "Which cache level is larger and slower than L1, typically 256KB to 8MB?",
    "options": [
      "L1 cache",
      "L2 cache",
      "Registers",
      "Main memory"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 172,
    "q": "Which cache level is shared by CPU cores and is even larger?",
    "options": [
      "L1 cache",
      "L2 cache",
      "L3 cache",
      "Secondary storage"
    ],
    "answer": "C",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 173,
    "q": "What does AMAT stand for?",
    "options": [
      "Average Main Access Time",
      "Average Memory Access Time",
      "Active Memory Address Table",
      "Average Memory Address Time"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 174,
    "q": "AMAT is calculated as:",
    "options": [
      "Hit Time - Miss Rate",
      "Hit Time + (Miss Rate x Miss Penalty)",
      "Miss Rate / Hit Time",
      "Miss Penalty - Hit Time"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 175,
    "q": "Virtual memory is best described as:",
    "options": [
      "A physical chip inside the CPU",
      "A memory management technique giving programs the illusion of a large contiguous memory space",
      "A type of cache",
      "A type of I/O bus"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 176,
    "q": "Which of these is a benefit of virtual memory?",
    "options": [
      "Slower processing always",
      "Convenient memory management and support for multitasking",
      "It eliminates the need for RAM",
      "It removes the OS from memory management"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 177,
    "q": "What does TLB stand for?",
    "options": [
      "Total Load Buffer",
      "Translation Lookaside Buffer",
      "Transfer Logic Block",
      "Temporary Local Bus"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 178,
    "q": "The TLB is best described as:",
    "options": [
      "A large, slow disk cache",
      "A small, fast cache for recent virtual-to-physical address translations",
      "A type of ALU",
      "A register for arithmetic operations"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 179,
    "q": "Which strategy reduces cache miss rate?",
    "options": [
      "Using smaller caches",
      "Using larger caches",
      "Removing the cache",
      "Reducing CPU speed"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 180,
    "q": "Which strategy reduces cache miss penalty?",
    "options": [
      "Using hierarchical caches",
      "Removing L1 cache",
      "Slowing down RAM",
      "Disabling virtual memory"
    ],
    "answer": "A",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 181,
    "q": "Which strategy reduces cache hit time?",
    "options": [
      "Making L1 cache large and complex",
      "Keeping L1 cache small and simple",
      "Removing L1 cache",
      "Increasing miss rate"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 182,
    "q": "For virtual memory optimization, it is important to:",
    "options": [
      "Ensure the working set fits the memory and maintain a high TLB hit rate",
      "Disable the TLB",
      "Increase miss penalty",
      "Remove secondary storage"
    ],
    "answer": "A",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 183,
    "q": "Loop tiling (blocking) is a technique used for:",
    "options": [
      "Reducing CPU voltage",
      "Data and loop transformations to improve cache efficiency",
      "Increasing interrupt frequency",
      "Formatting a hard disk"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 184,
    "q": "Which of these is a compiler technique for cache efficiency related to loops?",
    "options": [
      "Loop Fusion",
      "Interrupt masking",
      "Register renaming only",
      "BIOS configuration"
    ],
    "answer": "A",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 185,
    "q": "Software prefetching is a technique used to:",
    "options": [
      "Reduce cache and memory latency by loading data before it's needed",
      "Slow down instruction execution",
      "Increase miss penalty",
      "Disable the cache"
    ],
    "answer": "A",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 186,
    "q": "Register Tiling is associated with:",
    "options": [
      "I/O organization",
      "Compiler support for cache efficiency",
      "Interrupt handling",
      "Assembly directives"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 187,
    "q": "Stream Buffers are associated with which optimization area?",
    "options": [
      "Prefetching and control flow",
      "Stack operations",
      "Defining addressing modes",
      "I/O organization only"
    ],
    "answer": "A",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 188,
    "q": "CPU registers are used to store:",
    "options": [
      "Long-term backup data",
      "Data currently being processed, offering the fastest access",
      "Only program files",
      "Only OS files"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 189,
    "q": "Which best orders memory from fastest to slowest?",
    "options": [
      "Registers > Cache > Main Memory > Secondary > Tertiary",
      "Tertiary > Secondary > Main Memory > Cache > Registers",
      "Cache > Registers > Main Memory > Tertiary > Secondary",
      "Main Memory > Cache > Registers > Secondary > Tertiary"
    ],
    "answer": "A",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 190,
    "q": "Which best orders memory from largest to smallest capacity?",
    "options": [
      "Registers > Cache > Main Memory > Secondary > Tertiary",
      "Tertiary > Secondary > Main Memory > Cache > Registers",
      "Cache > Main Memory > Registers > Secondary > Tertiary",
      "Secondary > Tertiary > Main Memory > Cache > Registers"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 191,
    "q": "Why is main memory (RAM) described as volatile?",
    "options": [
      "It never loses data",
      "It loses its data when the system loses power",
      "It is the slowest memory",
      "It has unlimited capacity"
    ],
    "answer": "B",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 192,
    "q": "Which memory type is typically used for backups despite being slow, due to its low cost and huge capacity?",
    "options": [
      "Cache",
      "Registers",
      "Tertiary storage",
      "Main memory"
    ],
    "answer": "C",
    "batch": 5,
    "topic": "Memory Hierarchy"
  },
  {
    "id": 193,
    "q": "I/O Organization refers to:",
    "options": [
      "How data is stored in the cloud",
      "The design and structure enabling the CPU to communicate and transfer data with external devices",
      "The organization of file systems only",
      "Assembly directive structure"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 194,
    "q": "Which hardware unit acts as a bridge between the CPU and peripheral devices?",
    "options": [
      "System Bus",
      "I/O Module/Controller",
      "ALU",
      "Cache"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 195,
    "q": "Which of these is NOT a function typically handled by the I/O module?",
    "options": [
      "Control and timing signals",
      "Processor communication",
      "Compiling source code",
      "Device communication and error detection"
    ],
    "answer": "C",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 196,
    "q": "The System Bus is best described as:",
    "options": [
      "A shared communication pathway used by CPU, memory, and I/O modules to transfer information",
      "A type of register",
      "A cache memory level",
      "A programming directive"
    ],
    "answer": "A",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 197,
    "q": "Control and Data Registers in I/O systems are used for all of the following EXCEPT:",
    "options": [
      "Indicating device readiness or error states",
      "Sending commands to the device",
      "Transferring data between CPU and device",
      "Compiling assembly code"
    ],
    "answer": "D",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 198,
    "q": "In Programmed I/O (Polling), the CPU:",
    "options": [
      "Ignores the device entirely",
      "Continuously checks the device's status register until it indicates readiness",
      "Uses a DMA controller",
      "Never communicates with the device"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 199,
    "q": "In Interrupt-driven I/O:",
    "options": [
      "The CPU constantly polls the device",
      "The device sends an interrupt signal when ready, prompting the CPU to pause, service it, and resume",
      "Data transfers without CPU or device involvement",
      "The CPU shuts down"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 200,
    "q": "Direct Memory Access (DMA) allows:",
    "options": [
      "The CPU to poll continuously",
      "A DMA controller to transfer data directly between I/O devices and main memory, avoiding constant CPU involvement",
      "Data to skip memory entirely",
      "The elimination of all buses"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 201,
    "q": "Which I/O data transfer method is most efficient for large transfers, minimizing CPU involvement?",
    "options": [
      "Programmed I/O",
      "Interrupt-driven I/O",
      "Direct Memory Access (DMA)",
      "Polling"
    ],
    "answer": "C",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 202,
    "q": "In Memory-Mapped I/O (MMIO), devices are:",
    "options": [
      "Assigned a completely separate address space",
      "Treated like memory locations so the CPU uses standard load instructions to access them",
      "Never addressable",
      "Only accessible via DMA"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 203,
    "q": "In Port-Mapped I/O (PMIO), I/O devices:",
    "options": [
      "Share the same address space as memory",
      "Are assigned a separate, dedicated address space from main memory, accessed using special instructions",
      "Cannot be addressed at all",
      "Only work with DMA"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 204,
    "q": "Which instructions are typically used to access devices in Port-Mapped I/O on x86 architectures?",
    "options": [
      "MOV and ADD",
      "IN and OUT",
      "PUSH and POP",
      "CALL and RET"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 205,
    "q": "Latency in I/O operations refers to:",
    "options": [
      "The rate of data transfer",
      "The time taken to complete an I/O operation",
      "The number of devices connected",
      "The type of bus used"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 206,
    "q": "For latency, which is more desirable?",
    "options": [
      "Higher latency",
      "Lower latency",
      "Latency doesn't matter",
      "Latency equals bandwidth"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 207,
    "q": "Bandwidth (throughput) in I/O refers to:",
    "options": [
      "The time taken to complete an operation",
      "The rate of data transfer",
      "The number of interrupts",
      "The type of addressing mode"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 208,
    "q": "For bandwidth, which is more desirable?",
    "options": [
      "Lower bandwidth",
      "Higher bandwidth",
      "Zero bandwidth",
      "It doesn't matter"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 209,
    "q": "Which I/O method requires the CPU to waste cycles continuously checking a status register?",
    "options": [
      "DMA",
      "Programmed I/O (polling)",
      "Interrupt-driven I/O",
      "MMIO"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 210,
    "q": "Which I/O method is triggered by a signal from the device itself rather than the CPU checking repeatedly?",
    "options": [
      "Programmed I/O",
      "Interrupt-driven I/O",
      "Polling",
      "None of the above"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 211,
    "q": "Which addressing method for I/O uses standard load/store instructions shared with memory access?",
    "options": [
      "Port-mapped I/O",
      "Memory-mapped I/O",
      "DMA-mapped I/O",
      "Direct I/O"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 212,
    "q": "Which addressing method for I/O uses special instructions like IN/OUT, separate from memory access?",
    "options": [
      "Memory-mapped I/O",
      "Port-mapped I/O",
      "DMA",
      "Polling"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 213,
    "q": "Which best distinguishes I/O organization from CPU design?",
    "options": [
      "I/O organization focuses on external device communication; CPU design focuses on internal execution and control",
      "They are exactly the same",
      "I/O organization is only about memory hierarchy",
      "CPU design only deals with I/O devices"
    ],
    "answer": "A",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 214,
    "q": "What is a key disadvantage of Programmed I/O (polling)?",
    "options": [
      "It wastes CPU cycles waiting for device readiness",
      "It's the fastest possible method",
      "It never works",
      "It eliminates status registers"
    ],
    "answer": "A",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 215,
    "q": "What is a key advantage of DMA over interrupt-driven I/O for large transfers?",
    "options": [
      "It requires more CPU cycles",
      "It reduces CPU involvement, freeing it for other tasks during large data transfers",
      "It cannot transfer data at all",
      "It disables the system bus"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 216,
    "q": "Devices like keyboards, disk drives, and monitors are examples of:",
    "options": [
      "Internal CPU registers",
      "External devices communicating through I/O organization",
      "Cache memory",
      "Types of buses"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  },
  {
    "id": 217,
    "q": "I/O modules handle control and timing signals, processor communication, and:",
    "options": [
      "Cache management",
      "Device communication and error detection",
      "Compiler optimization",
      "Virtual memory mapping"
    ],
    "answer": "B",
    "batch": 6,
    "topic": "I/O Organization"
  }
];
