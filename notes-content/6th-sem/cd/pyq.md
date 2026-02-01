---
title: "Compiler Design Previous Year Questions"
description: "Previous year question papers for Compiler Design"
author: "Deepak Modi"
date: "2025-06-15"
pdfUrl: ""
---

**Course Title**: Compiler Design  
**Course Code**: PCC-CSE-302-G  
**Semester**: B.Tech. 6th Semester (CSE)

---

## July 2021 Examination

Q.1. (6 x 2.5 = 15)
(a) Write a short note on ambiguous grammar.
(b) Compiler.
(c) Differcntiate betwccn tokens, patterns and lexemes.
(d) Role of regular expression.
(e) What is phrase level error recovery ?
(f) What is register allocation in code generation ?

### UNIT - I
Q.2. Explain different phases of compiler. (15)
Q.3. What is Finite Automata ? Convert NFA (a|b)* abb into equivalent DFA.  (15)

### UNIT - II
Q.4. (a) Vhat is CFG ? (7.5)
(b) Explain how regular expressions arc used for token specification. (7.5)

Q.5. Perform shift-reduce parsing for string id1 + id2 + id3 for the grammar E → E + E | E * E | id. (15)

### UNIT - III
Q.6. (a) Explain the concept of syntax directed translation scheme. (6)
(b) Explain three address codes, quadruples and triples. (9)

Q.7. Consider the following grammar :
E → E + T | T
T → T * F | F
F → (E) | id
Construct the SLR parsing table for the grammar. (15)

### UNIT - IV
Q.8. (a) List the various errors recovered strategies. (7)
(b) Explain the importance of symbol tables in compiler design. (8)

Q.9. What is code generation ? Explain the various strategies for code generation. (15)# Compiler Design Question Papers

**Examination**: July 2022  
**Paper**: PCC-CSE-302-G

### Question 1
Write short notes on : (6 x 2.5 = 15)
- (a) Applications of compiler
- (b) Notations for regular expressions
- (c) Compiler construction tools
- (d) Benefits of Intermediate code generation
- (e) Ambiguous grammar
- (f) Code generation

## UNIT - I

### Question 2
Describe the phases of compiler. (15)

### Question 3
(a) What is Lexical analysis? (9)
(b) What is the role of input buffer in lexical analysis? (6)

## UNIT - II

### Question 4
Calculate the first and follow for the following grammar: (15)
E → E+E | E*E | (E) | id

### Question 5
Explain top-down parsing with a suitable example. (15)

## UNIT - III

### Question 6
Explain the making of LR (0) parsing table for the following grammar : (15)
E → E*B | E+B | B, B → 0 | 1

### Question 7
How CLR parser differs from LALR parser ? Please explain. (15)

## UNIT - IV

### Question 8
What are the various strategies for code optimization ? (15)

### Question 9
Explain code generation in detail. (15)# Compiler Design Question Papers

**Examination**: May 2023  
**Paper**: PCC-CSE-302-G

### Question 1
Explain the following questions: (6 x 2.5 = 15)
- (a) Role of lexical analyzer
- (b) Language Processors
- (c) Recursive Descent Parser
- (d) Handle pruning
- (e) Rules to construct the LR(0) items
- (f) Forms of objects code

## SECTION - A

### Question 2
(a) What do you mean by Compiler? Explain various Phases of Compiler. (10)  
(b) Explain various compiler construction tools. (5)

### Question 3
(a) Construct a Finite Automata equivalent to the regular expression: (a|b)* | (ab)*b | a*(bb)* (10)
(b) Explain implementation of lexical analyzer. (5)

## SECTION - B

### Question 4
(a) Explain the parsing techniques with a hierarchical diagram. (7.5)  
(b) What are the problems associated with Top Down Parsing? (7.5)

### Question 5
Explain operator precedence parsing in detail. Explain with the help of example. (15)

## SECTION - C

### Question 6
(a) Prepare a canonical parsing table for the given grammar: S→CC, C→cC/d (10)  
(b) Explain three address code, quadruples and triples. (5)

### Question 7
(a) Construct SLR parsing table for the following grammar: R→R+a|b (7.5)  
(b) Write Rules to construct FIRST Function and FOLLOW Function. Consider Grammar: E→E+T|T, T→T*F|F, F→(E)|id (7.5)

## SECTION - D

### Question 8
(a) What is the use of symbol table? Explain the various data structures associated with symbol table. (8)  
(b) Explain the various types of errors generated during the various phases of the compiler. How do we recover from these errors? (7)

### Question 9
Explain the following with example: (2 x 7.5 = 15)
- (a) Various machine independent code optimization techniques.
- (b) Register allocation for temporary and user defined variables.
# Compiler Design Question Papers

**Examination**: May 2024  
**Paper**: PCC-CSE-302-G

1. Briefly explain the following terms: [6 x 2.5 = 15]
    - (a) Language Processor
    - (b) Predictive Parsing
    - (c) Three address code
    - (d) Syntax Tree
    - (e) Hash Table
    - (f) Machine dependent code

## Section-A

2. Discuss the working of different phases of compiler in detail. [15]

3. Explain the following: [15]
    - (a) Compiler Construction Tools
    - (b) Input Buffering

## Section-B

4. Explain the top-down parsing with a suitable example. [15]

5. To check whether the given grammar is LL(1) or not. [15]
    S → (L)
    S → a
    L → S L'
    L' → ε'
    L' → , S L

## Section-C

6. What is Syntax directed Translation Scheme? Also explain the implementation of Syntax directed translation. [15]

7. Explain the following parsers in detail: [15]
    - (a) LR parser
    - (b) Canonical LR parser

## Section-D

8. Write a short note on the following: [15]
    - (a) Symbol Table
    - (b) Code optimization

9. Explain the various types of errors generated during the various phases of the compiler. How do we recover from these errors? [15]

# Compiler Design Previous Year Questions

This file contains previous years' questions from Compiler Design exams (2021-2024) organized by unit.

## UNIT 1: Introduction to Compilers

### Short Questions (2.5 Marks)

1. **Language Processor** (2023, 2024)
   - Explain Language Processors (2023)
   - Briefly explain Language Processor (2024)

2. **Applications of Compiler** (2022)
   - Write short notes on Applications of compiler

3. **Compiler Definition** (2021)
   - Write short notes on Compiler

4. **Compiler Construction Tools** (2022)
   - Write short notes on Compiler construction tools

5. **Input Buffering** (2022, 2024)
   - What is the role of input buffer in lexical analysis? (2022)
   - Explain Input Buffering (2024)

6. **Role of Lexical Analyzer** (2023)
   - Explain the Role of lexical analyzer

7. **Tokens, Patterns and Lexemes** (2021)
   - Differentiate between tokens, patterns and lexemes

8. **Regular Expression** (2021, 2022)
   - Explain the role of regular expression (2021)
   - Write short notes on Notations for regular expressions (2022)

### Long Questions (15 Marks)

1. **Phases of Compiler** (2021, 2022, 2023, 2024)
   - "Explain different phases of compiler." (2021)
   - "Describe the phases of compiler." (2022)
   - "What do you mean by Compiler? Explain various Phases of Compiler." (2023, 10 marks)
   - "Discuss the working of different phases of compiler in detail." (2024)

2. **Lexical Analysis**
   - "What is Lexical analysis?" (2022, 9 marks)
   - "Explain implementation of lexical analyzer." (2023, 5 marks)

3. **Finite Automata and Regular Expressions**
   - "What is Finite Automata? Convert NFA (a|b)* abb into equivalent DFA." (2021)
   - "Construct a Finite Automata equivalent to the regular expression: (a|b)* | (ab)*b | a*(bb)*" (2023, 10 marks)

4. **Compiler Construction Tools**
   - "Explain various compiler construction tools." (2023, 5 marks)
   - "Explain Compiler Construction Tools." (2024)

## UNIT 2: Syntax Analysis

### Short Questions (2.5 Marks)

1. **Ambiguous Grammar** (2021, 2022)
   - Write a short note on ambiguous grammar (2021)
   - Write short notes on Ambiguous grammar (2022)

2. **Predictive Parsing** (2024)
   - Briefly explain Predictive Parsing

3. **Recursive Descent Parser** (2023)
   - Explain Recursive Descent Parser

4. **Handle Pruning** (2023)
   - Explain Handle pruning

### Long Questions (15 Marks)

1. **Top-Down Parsing** (2022, 2023, 2024)
   - "Explain top-down parsing with a suitable example." (2022)
   - "What are the problems associated with Top Down Parsing?" (2023, 7.5 marks)
   - "Explain the top-down parsing with a suitable example." (2024)

2. **Context-Free Grammar (CFG)** (2021)
   - "What is CFG?" (7.5 marks)
   - "Explain how regular expressions are used for token specification." (7.5 marks)

3. **Parsing Techniques**
   - "Explain the parsing techniques with a hierarchical diagram." (2023, 7.5 marks)
   - "Perform shift-reduce parsing for string id1 + id2 + id3 for the grammar E → E + E | E * E | id." (2021)
   - "Explain operator precedence parsing in detail. Explain with the help of example." (2023)

4. **FIRST and FOLLOW Functions** (2022, 2023)
   - "Calculate the first and follow for the following grammar: E → E+E | E*E | (E) | id" (2022)
   - "Write Rules to construct FIRST Function and FOLLOW Function. Consider Grammar: E→E+T|T, T→T*F|F, F→(E)|id" (2023, 7.5 marks)

5. **LL(1) Grammar** (2024)
   - "To check whether the given grammar is LL(1) or not. 
     S → (L)
     S → a
     L → S L'
     L' → ε'
     L' → , S L" (2024)

## UNIT 3: Syntax-Directed Translation and LR Parsing

### Short Questions (2.5 Marks)

1. **Three Address Code** (2024)
   - Briefly explain Three address code

2. **Syntax Tree** (2024)
   - Briefly explain Syntax Tree

3. **Rules to Construct LR(0) Items** (2023)
   - Explain Rules to construct the LR(0) items

### Long Questions (15 Marks)

1. **Syntax-Directed Translation** (2021, 2024)
   - "Explain the concept of syntax directed translation scheme." (2021, 6 marks)
   - "What is Syntax directed Translation Scheme? Also explain the implementation of Syntax directed translation." (2024)

2. **Three Address Code, Quadruples, and Triples** (2021, 2023)
   - "Explain three address codes, quadruples and triples." (2021, 9 marks)
   - "Explain three address code, quadruples and triples." (2023, 5 marks)

3. **LR Parsing** (2021, 2022, 2023, 2024)
   - "Construct the SLR parsing table for the grammar: E → E + T | T, T → T * F | F, F → (E) | id" (2021)
   - "Explain the making of LR (0) parsing table for the following grammar: E → E*B | E+B | B, B → 0 | 1" (2022)
   - "Prepare a canonical parsing table for the given grammar: S→CC, C→cC/d" (2023, 10 marks)
   - "Construct SLR parsing table for the following grammar: R→R+a|b" (2023, 7.5 marks)
   - "Explain the following parsers in detail: LR parser and Canonical LR parser" (2024)

4. **Comparison of LR Parser Variants** (2022)
   - "How CLR parser differs from LALR parser? Please explain." (2022)

## UNIT 4: Code Generation and Optimization

### Short Questions (2.5 Marks)

1. **Machine Dependent Code** (2024)
   - Briefly explain Machine dependent code

2. **Hash Table** (2024)
   - Briefly explain Hash Table

3. **Forms of Object Code** (2023)
   - Explain Forms of objects code

4. **Register Allocation** (2021)
   - What is register allocation in code generation?

5. **Phrase Level Error Recovery** (2021)
   - What is phrase level error recovery?

6. **Benefits of Intermediate Code Generation** (2022)
   - Write short notes on Benefits of Intermediate code generation

7. **Code Generation** (2022)
   - Write short notes on Code generation

### Long Questions (15 Marks)

1. **Symbol Table** (2021, 2023, 2024)
   - "Explain the importance of symbol tables in compiler design." (2021, 8 marks)
   - "What is the use of symbol table? Explain the various data structures associated with symbol table." (2023, 8 marks)
   - "Write a short note on Symbol Table." (2024)

2. **Error Detection and Recovery** (2021, 2023, 2024)
   - "List the various errors recovered strategies." (2021, 7 marks)
   - "Explain the various types of errors generated during the various phases of the compiler. How do we recover from these errors?" (2023, 7 marks)
   - "Explain the various types of errors generated during the various phases of the compiler. How do we recover from these errors?" (2024)

3. **Code Generation** (2021, 2022)
   - "What is code generation? Explain the various strategies for code generation." (2021)
   - "Explain code generation in detail." (2022)

4. **Code Optimization** (2022, 2023, 2024)
   - "What are the various strategies for code optimization?" (2022)
   - "Various machine independent code optimization techniques." (2023, 7.5 marks)
   - "Write a short note on Code optimization." (2024)

5. **Register Allocation** (2023)
   - "Register allocation for temporary and user defined variables." (2023, 7.5 marks)
