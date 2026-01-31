# Unit 1: Compilers and Lexical Analysis

**Syllabus :** *\[PCC-CSE-302G\]*                                           
**Compiled By:** *Deepak Modi (223100)*  

**Introduction to Compilers:** Language Processors, The Structure of compiler: its different phases, Compiler Construction Tools, Applications of Compiler Technology.   

**Lexical Analysis:** Role of lexical analyzer, Input Buffering, Specification and recognition of tokens, design of lexical analyzer, regular expressions, A language specifying lexical analyzer, Finite automata, conversion from regular expression to finite automata, and vice versa, minimizing number of states of DFA, Implementation of lexical analyzer.   

---

## **Section 1 : Introduction to Compilers**

### **1.1 Language Processors**

A **Language Processor** is a system software that helps in converting one form of language (usually high-level programming language) into another (like machine code) These are essential for developing and running programs, as computers can only understand machine-level instructions (binary code).

Diagrammatically, a language processor can be represented as:
```
+---------------------+
| High-Level Language | (Source Code)
+---------------------+
          |
          |  (Language Processor)
          v
+---------------------+
|   Machine Code      | (Executable Code)
+---------------------+
            |
            |  (Execution)
            v   
+---------------------+
|  Computer Hardware  |
+---------------------+
```

#### **Types of Language Processors:**

1. **Compiler**  
   * Translates the **entire source code** (high-level program) into machine code **before execution**.  
   * Faster execution compared to an interpreter.  
   * Example: C, C++, and Java compilers.  
2. **Interpreter**  
   * Translates and executes the program code **line by line**.  
   * Slower than compilers but useful for debugging.  
   * Example: Python, JavaScript use interpreters.  
3. **Assembler**  
   * Converts **assembly language** (low-level human-readable code) into **machine code** (binary format).  
   * Example: MASM (Microsoft Macro Assembler) for x86 assembly.

#### **Compiler:**

A **compiler** is a program that converts source code written in a high-level language (C, Java, etc.) into machine code (binary format) that a computer can understand.

##### **Features of a Compiler:**

 * Translates the entire code at once.  
 * Provides a list of errors after compilation.  
 * Generates optimized executable machine code.  
 * Improves execution speed compared to interpreters.

### **1.2 Language Processing System**

A **Language Processing System** is a collection of tools that convert a **high-level programming language** into **executable machine code.** It ensures that programs are **translated correctly, optimized for performance, and ready for execution**.

* It consists of various components such as **Preprocessors**, **Compilers, Interpreters, Assemblers, Linkers, and Loaders**.  
* The entire process involves **multiple stages**, each performing a specific task to generate the final executable file.

#### **Components of the Language Processing System**

```
High-Level Source Code (Input)
          |
+---------▼-----------+
|   Preprocessor      | (Handles macros, file inclusion)
+---------------------+
          |  Preprocessed Source code
+---------▼-----------+
|     Compiler        | (Translates high-level code to assembly)
+---------------------+
          |  Assembly Code
+---------▼-----------+
|     Assembler       | (Converts assembly code to machine code)
+---------------------+
          |  Machine Code (Object File)
+---------▼-----------+
|     Linker          | (Links object files and libraries)
+---------------------+
          |  Binary Code (Executable File)
+---------▼-----------+
|     Loader          | (Loads executable into memory)
+---------------------+
          |
          ▼
Execution of Program (Output)
```



#### **Working of the Language Processing System**

The **step-by-step process** of converting source code into an executable file:

`High-Level Code → Preprocessing → Compilation → Assembly → Linking → Loading → Execution`

##### **Step 1: High-Level Code (Source Code)**

* The programmer writes code in a **high-level language** such as **C, Java, or Python**.  
 * **Example:**  
`int sum = a + b;`

##### **Step 2: Preprocessing**

* The **preprocessor** processes the source code before compilation.  
 * Handles **macro expansion** and **file inclusion** (`#include` in C).  
 * Removes **comments** and expands **preprocessor directives**.  
 * **Example:**  
`#include <stdio.h>`  
`#define PI 3.14`

* The preprocessor **replaces** `#define PI 3.14` wherever `PI` is used.

##### **Step 3: Compilation**

* The **compiler** translates the preprocessed source code into **assembly language**.  
 * **Checks for syntax errors**.  
 * Generates the assembly code.

* **Compiler vs. Interpreter**

* The Compiler converts the high-level code into assembly language or machine code.   
* The Interpreter executes the code line by line without converting it to machine code first.

| Feature | Compiler | Interpreter |
| ----- | ----- | ----- |
| **Execution** | Translates **entire program** before running. | Translates & executes **line by line**. |
| **Speed** | Faster execution. | Slower execution. |
| **Example Languages** | C, C++ | Python, JavaScript |

##### **Step 4: Assembly**

📌 The **assembler** converts assembly code into **machine code (binary format)**.  
 ✔ The output is an **object file** (`.o` or `.obj`).  
 ✔ This file contains **machine or low-level instructions** understandable by the processor.

🔹 **Example of Assembly Code → Machine Code**  
`MOV R1, a`    
`ADD R1, b`    
`MOV sum, R1`  
✔ This is **translated into binary (machine code)**:  
`01010110 11001001 10000010`

##### **Step 5: Linking**

📌 The **linker** combines multiple object files and **resolves function calls**.  
 ✔ Links **library functions** (e.g., `printf()` from `stdio.h`).  
 ✔ Produces a **final executable file** (`.exe`, `.out`).

🔹 **Example:**  
 If a program calls `printf()`, the linker **fetches its definition** from the C standard library (`libc`).

##### **Step 6: Loading**

📌 The **loader** loads the **executable file** into **RAM** and hands over control to the **CPU**.  
 ✔ Assigns memory space for **variables and functions**.  
 ✔ Starts **program execution**.

🔹 **Example Execution:**

`User clicks "Run" → Loader loads the program into RAM → CPU executes instructions.`

### **1.3 Structure of a Compiler**

A compiler works in multiple phases, which are broadly divided into **two main parts**:

#### **I. Analysis Phase (Front-End)**

The front-end processes the source code and checks for correctness.

1. **Lexical Analysis**: Converts source code into tokens (keywords, identifiers, literals).  
2. **Syntax Analysis (Parsing)**: Checks whether the token sequence follows grammar rules.  
3. **Semantic Analysis**: Checks for logical errors (e.g., type mismatches).

#### **II. Synthesis Phase (Back-End)**

The back-end generates optimized machine code.

4. **Intermediate Code Generation**: Converts code into an intermediate form (Three-Address Code).  
5. **Code Optimization**: Improves performance by reducing execution time and memory usage.  
6. **Code Generation**: Translates optimized intermediate code and produces final machine code (binary).

#### **Compiler Structure Diagram**

```plaintext
Input Source Code (High Level)
          | Characters
+---------▼-----------+
|   Lexical Analysis  |
|   (Tokenization)    |
+---------------------+
          | Tokens
+---------▼-----------+
|   Syntax Analysis   |
|     (Parsing)       |
+---------------------+
          | Parse / Syntax Tree
+---------▼-----------+
|   Semantic Analysis |
|   (Type Checking)   |
+---------------------+
          | Abstract Syntax / Semantic Tree
+---------▼-----------+
| Intermediate Code   |
|    Generation       |
+---------------------+
          | Intermediate Code (TAC)
+---------▼-----------+
|   Code Optimization |
+---------------------+
          | Optimized Intermediate Code
+---------▼-----------+
|   Code Generation   |
+---------------------+
          | Assembly Code
          ▼
Executable Machine Code (Low-Level)
```

#### **Phases of a Compiler**

A **compiler** is a program that translates source code written in a high-level language into assembly code or machine code. The compilation process is divided into **six main phases**, supported by components like **symbol table** and **error handling**.

| Phase | Input | Process | Output |
| :---: | :---: | :---: | :---: |
| **Lexical Analysis** | Source Code | Tokenization, comment removal | Tokens |
| **Syntax Analysis** | Tokens | Grammar checking, Parse Tree creation | Parse Tree |
| **Semantic Analysis** | Parse Tree | Type and scope checking | Validated AST |
| **Intermediate Code Gen.** | Valid AST | Convert to IR | Intermediate Code |
| **Code Optimization** | Intermediate Code | Remove redundancies, speed up code | Optimized Code |
| **Code Generation** | Optimized Code | Generate machine-level code | Machine Code |
| **Error Handling** | All phases | Detect & report errors | Error messages |
| **Symbol Table** | Source Identifiers | Store and manage symbol info | Symbol metadata (name, type) |

##### **1\. Lexical Analysis (Tokenization)**

* **Input:** Raw source code || **Output:** Sequence of **tokens**  
* Reads **characters** from source code.  
* Groups them into **tokens** (keywords, identifiers, literals, operators).  
* Removes **whitespace and comments**.

Example:   
**For input:** `int sum = a + 1;`  
**Output Tokens:** `int`, `sum`, `=`, `a`, `+`, `1`, `;`

##### **2\. Syntax Analysis (Parsing)**

* **Input:** Token stream || **Output:** Parse Tree / Syntax Tree  
* Checks if the sequence of tokens follows **grammatical rules** of the language.  
* Creates a **Parse Tree** or **Abstract Syntax Tree (AST)**.  
* Detects **syntax errors** (e.g., missing semicolon).

Example (Valid & Invalid Syntax in C):  
`int x = 10 + ;  // ❌ Error (invalid syntax)`  
`int x = 10 + 5; // ✅ Correct syntax`

📌 **Example:** Syntax tree for `int sum = a + b;`

      `=`  
     `/ \`  
  `sum   +`  
       `/ \`  
      `a   b`

🚀 **If syntax is incorrect**, it reports **syntax errors** (e.g., missing semicolon).

##### **3\. Semantic Analysis**

* **Input:** Syntax Tree || **Output:** Annotated syntax tree (with semantic info)  
* Checks **meaning of statements** (logical correctness).  
* Checks **logical errors** (e.g., type mismatches, scope resolution, undefined variables).  
* Uses **Symbol Table** to verify variable declarations and types.

Example (Valid & Invalid Semantics in C):  
`int sum = "ten";  // ❌ Type mismatch (String assigned to int)`  
`int sum = 10;      // ✅ Correct`

🚀 **If semantic errors exist, compilation stops here.**

##### **4\. Intermediate Code Generation**

* **Input:** Validated syntax/semantic tree || **Output:** Intermediate Code (e.g., TAC or AST)  
* Converts code into an **intermediate representation** (IR) that is **independent of machine architecture**. Easier to optimize and port between systems.  
* Common forms:  
    * **Three-Address Code (TAC)**  
    * **Quadruples**
    * **Triples**
* Example:  
  `int sum = a + b;`

➡️ Intermediate Code:  
`T1 = a + b`  
`sum = T1`

##### **5\. Code Optimization**

* **Input:** Intermediate Code || **Output:** Optimized Intermediate Code  
* Improves efficiency by reducing **execution time** or **memory usage**.  
* Removes **redundant computations** and **dead code**.  
* Performs optimizations like **constant folding**, **dead code elimination**, **loop unrolling**, etc.

📌 **Example:**

Before optimization: int a = 10 * 2;  // Computed at runtime  
After optimization: int a = 20;  // Computed at compile-time (constant folding)

🚀 **This step is crucial for performance in large programs.**

##### **6\. Code Generation**

* **Input:** Optimized Intermediate Code || **Output:** Executable machine code  
* Converts optimized code into **machine code** (binary).  
* Converts **intermediate code → assembly code → machine code**.  
* Allocates **registers** and **memory locations** for variables.

**Example:** `sum = a + b;`  
The generated assembly code might be:  
`MOV R1, a`  
`ADD R1, b`  
`MOV sum, R1`

🚀 This final step produces an executable file.

##### **7\. Error Handling**

* Detects and manages errors in all phases:  
  * **Lexical Errors:** Invalid characters  
  * **Syntax Errors:** Grammar violations  
  * **Semantic Errors:** Type mismatches, undeclared variables  
  * **Runtime Errors:** Division by zero  
* **Input:** Output of each phase  
* **Output:** Error messages and recovery actions

📌 **Examples:**

`int @var = 5;       // ❌ Lexical Error – invalid character`    
`printf("Hello);     // ❌ Syntax Error – missing quote`  
`if (x > 10) { ... } // ❌ Semantic Error – undeclared variable`    
`int a = 5 / 0;      // ❌ Runtime Error – division by zero`

🚀  Compilation stops or error is reported for correction.

##### **8\. Symbol Table**

* Data structure used throughout compilation to store metadata of identifiers like Variable/function names, Data types, Scope and memory locations.  
* **Used by:** Semantic Analyzer, Intermediate Code Generator, Optimizer, Code Generator.

📌 **Example:**

`int x = 5;`

➡️ Symbol Table:

| Name | Type | Scope | Memory Location |
| :---: | :---: | :---: | :---: |
| x | int | main | 0x1000 |

### **1.4 Compiler Construction Tools:**

The compilation process is divided into **6 main phases** (along with supporting components like error handling and symbol table). Each phase can use specific tools to ease the compiler development process.

These Compiler construction tools help automate different phases of compiler development.

| Phase | Purpose | Tool / Technique Used | Full Form |
| ----- | ----- | ----- | ----- |
| **1\. Lexical Analysis** | Convert source code into tokens | **Lex / Flex** | Lex \= *Lexical Analyzer Generator* Flex \= *Fast Lexical Analyzer Generator* |
| **2\. Syntax Analysis** | Check grammar structure and generate parse tree | **Yacc / Bison**, **Parser Generators (ANTLR, JavaCC, CUP)** | Yacc \= *Yet Another Compiler Compiler* Bison \= *GNU Parser Generator* ANTLR \= *Another Tool for Language Recognition* JavaCC \= *Java Compiler Compiler* CUP \= *Constructor of Useful Parsers* |
| **3\. Semantic Analysis** | Ensure logical correctness | **Syntax-Directed Translation (SDT)**, **Symbol Table Manager** | SDT \= *Syntax-Directed Translation* |
| **4\. Intermediate Code Generation** | Convert syntax tree into IR | **Three-Address Code (TAC)** Generator, SDT Engines | TAC \= *Three-Address Code* IR \= *Intermediate Representation* |
| **5\. Code Optimization** | Optimize code for performance | **LLVM**, Custom Optimization Algorithms (e.g., CFG, DFA) | LLVM \= *Low Level Virtual Machine* |
| **6\. Code Generation** | Generate machine/assembly code | **LLVM**, **GCC Backend**, Code Generator Modules | GCC \= *GNU Compiler Collection* |
|  **Supporting Tools** |  |  |  |
| **Symbol Table Manager** | Store and manage identifiers | Hash Tables, Tries, Trees | — |
| **Error Handling Tools** | Catch and recover from errors in all phases | Embedded in Lex/Yacc/Parsers | — |

#### **Common Compiler Construction Tools**

##### **1\. Lexical Analyzer Generators**

**Tools:** `Lex`, `Flex`

* These tools help generate a **Lexical Analyzer** (also called a scanner or tokenizer).  
* They read **regular expressions** and generate C code to match tokens.  
* **Input:** Token patterns (like identifiers, keywords, numbers).  
* **Output:** C code that scans and produces tokens from source code.

**Use in Compiler:** Converts source code into tokens for the parser.

##### **2\. Parser Generators**

**Tools:** `Yacc`, `Bison`, `ANTLR`, `JavaCC`

* These tools generate **Syntax Analyzers** (parsers) from **Context-Free Grammars (CFGs)**.  
* **Yacc/Bison:** For C/C++ code, supports LALR parsing.  
* **ANTLR:** Advanced parser supporting LL(\*) grammars, widely used in Java.  
* **JavaCC:** Parser generator for Java applications.

**Use in Compiler:** Builds parse tree or abstract syntax tree (AST) by analyzing token structure.

##### **3\. Syntax-Directed Translation Engines**

**Used in:** Semantic Analysis and Intermediate Code Generation

* Allows attaching **semantic actions** to grammar rules.  
* Supports type checking, scope resolution, and generates intermediate code like **Three-Address Code (TAC)**.

**Use in Compiler:** Adds meaning to the parse tree by evaluating expressions and types.

##### **4\. Abstract Syntax Tree (AST) Generators**

* Represent code in a **tree format** where each node is a language construct.  
* ASTs are easier to analyze and optimize than parse trees.

**Use in Compiler:** Basis for semantic analysis and code generation.

##### **5\. Symbol Table Managers**

* A **symbol table** stores information about variables, functions, scopes, and types.  
* Often implemented using **hash tables** or **linked lists**.

**Use in Compiler:** Maintains declarations and identifiers across different scopes.

##### **6\. Intermediate Code Generators**

* Produce machine-independent **Intermediate Representations (IR)** like:  
  * Three-Address Code (TAC)  
  * Quadruples or Triples

**Use in Compiler:** Makes optimization and platform-independent transformations easier.

##### **7\. Code Optimizers**

**Tools:** LLVM Optimizer, Custom Optimizers

* Applies transformations to improve performance or reduce memory.  
* Examples: Dead code elimination, constant folding, loop optimization.

**Use in Compiler:** Produces efficient intermediate or target code.

##### **8\. Code Generators**

**Tools:** LLVM, GCC backend

* Converts optimized IR into **target machine code**.  
* Takes into account register allocation, instruction selection, and target architecture.

**Use in Compiler:** Final output of compilation—ready to run on hardware.

##### **9\. Error Handling and Debugging Tools**

* Built-in within `Lex` and `Yacc`.  
* Tools like **gdb**, **valgrind**, or **custom debugging modules** assist in identifying compiler bugs.

### **1.5 Applications of Compiler Technology:**

1. **Programming Languages**: Every language (C, C++, Java, Python) has a compiler or interpreter.  
2. **Operating Systems**: Kernel and system programs require optimized compiled code.  
3. **Database Management Systems (DBMS)**: SQL query execution uses a compiler to generate execution plans.  
4. **AI & Machine Learning**: Neural networks use compiled models for fast execution.  
5. **Embedded Systems**: Microcontrollers (Arduino, Raspberry Pi) require compilers for code translation.  
6. **Web Browsers:** JavaScript engines like **V8 (Chrome)** and **SpiderMonkey (Firefox)** compile JS code into machine code for fast execution.  
7. **Security & Malware Analysis:** Compilers help in reverse engineering malware.  
8. **Cloud Computing & Virtual Machines:** Cloud platforms (AWS, Google Cloud) use Just-In-Time (JIT) compilers to optimize execution.  
9. **High-Performance Computing (HPC):** Supercomputers and scientific simulations rely on optimized compilers to enhance execution speed and resource efficiency.  
10. **Game Development:** Modern game engines (Unity, Unreal Engine) use compilers to optimize graphics rendering and physics calculations for smooth gameplay.

---

## **Section 2 : Lexical Analysis**

### **2.1 Role of the Lexical Analyzer:**

The **Lexical Analyzer** is the first phase of a compiler. It reads the source code **character by character** and groups them into **tokens**.

#### **Functions of Lexical Analyzer:**

* Converts source code into **tokens** (keywords, identifiers, literals, etc.).  
* Removes **whitespaces, comments, and newlines**.  
* Detects **lexical errors** (invalid characters, unclosed strings).  
* Passes tokens to the **syntax analyzer (parser)**.

> Input Source Code → Character Stream → Lexical Analyzer → Token Stream

🔹 **Example**: 

* For this input (C statement): `int sum = a + b;`  
* Lexical Analyzer Output (Tokens generated):  
  * `int` (Keyword)  
  * `sum` (Identifier)  
  * `=` (Assignment Operator)  
  * `a`, `b` (Identifiers)  
  * `+` (Operator)

### **2.2 Input Buffering:**

Reading the source code character by character is **slow**. To improve performance, **buffering techniques** are used.

* **Problem**: Character-by-character reading slows down the compilation process.  
* **Solution**: Use **input buffering** to read blocks of text instead of individual characters.  
* **Double Buffering Technique**: Uses two buffers to speed up processing.

#### **Techniques for Efficient Input Handling**

##### **🔹 1\. Naive Approach (One Character at a Time)**

* Reads **one character** at a time from the source code.  
* **Slow** because of frequent disk I/O.

Example:  
`i → n → t →   → a → =`

##### **🔹 2\. Input Buffering (Two Buffer Scheme)**

* Uses **two buffers** to read data in blocks.  
* When one buffer is **being processed**, the other **loads new data**.  
* **Improves speed by reducing I/O operations**.

📌 **Example of Two-Buffer System:**

`Buffer 1: [ i   n   t       a   =   ]`    
`Buffer 2: [ 1   0   ;  ... (next input) ]`

**Advantages:**  
 ✔ Faster than character-by-character reading.  
 ✔ Reduces the number of disk accesses.

### **2.3 Specification and Recognition of Tokens:**

A **token** is the **smallest meaningful unit** of a program. The **Lexical Analyzer** identifies tokens using **Regular Expressions** and **Finite Automata**.

#### **Types of Tokens**

| Token Type | Example |
| :---: | :---: |
| **Keywords** | `if`, `while`, `return`, `int` |
| **Identifiers** | `sum`, `totalValue`, `x` |
| **Operators** | `+`, `-`, `*`, `/`, `=` |
| **Literals** | `10`, `3.14`, `'A'`, `"Hello"` |
| **Punctuation/Symbols** | `;`, `()`, `{}` |

#### **Token Recognition Using Regular Expressions**

Regular expressions **define token patterns** in lexical analysis.

| Token | Regular Expression |
| :---: | :---: |
| **Identifier** | `[a-zA-Z_][a-zA-Z0-9_]*` |
| **Integer** | `[0-9]+` |
| **Floating Point** | `[0-9]+\.[0-9]+` |
| **Operators** | `[+\-*/=]` |

* **Tokens**: Label for a sequence of characters. 
* **Pattern**: Regular expression that defines the structure of a token.
* **Lexeme**: Actual string in source code that matches a token pattern.

🔹 **Common Token Patterns**:

* **Identifiers**: `[a-zA-Z_][a-zA-Z0-9_]*`  
* **Numbers**: `[0-9]+(\.[0-9]+)?`  
* **Operators**: `+`, `-`, `*`, `/`, `=`

### **2.4 Design of Lexical Analyzer**

A **Lexical Analyzer (Lexer)** is the **first phase** of a compiler that **scans** the source code and **converts it into tokens**.

#### **Working of a Lexical Analyzer**

The **Lexical Analyzer** follows these steps:

 🔹 **Step 1: Read Input Code** → The Lexer reads **character sequences** from source file.  
 🔹 **Step 2: Match Patterns** → Uses **Regular Expressions** to recognize tokens.  
 🔹 **Step 3: Generate Tokens** → Converts recognized sequences into **tokens**.  
 🔹 **Step 4: Ignore Whitespace & Comments** → They are removed.  
 🔹 **Step 5: Send Tokens to Parser** → The tokens are passed to the **Syntax Analyzer**.

#### **Components of a Lexical Analyzer**

1. **Input Buffer** → Stores input code for efficient reading.  
2. **Scanner** → Reads characters, groups them into **lexemes** (words, numbers, symbols).  
3. **Pattern Matcher** → Uses **Regular Expressions** to classify lexemes.  
4. **Symbol Table** → Stores identifiers (variable names, function names).  
5. **Error Handler** → Detects **invalid characters, unclosed strings, or unknown symbols**.

#### **Example: Design of a Lexical Analyzer**

For the input code:

`int sum = a + b * 10;`

📌 **Lexical Analyzer Processing:**

1. **Reads** the input code.  
2. **Identifies Tokens**:  
   * `int` → **Keyword**  
   * `sum` → **Identifier**  
   * `=` → **Operator**  
   * `a` → **Identifier**  
   * `+` → **Operator**  
   * `b` → **Identifier**  
   * `*` → **Operator**  
   * `10` → **Number**  
   * `;` → **Symbol**

**Outputs Token Stream**:  
`(Keyword, int)`  
`(Identifier, sum)`  
`(Operator, =)`  
`(Identifier, a)`  
`(Operator, +)`  
`(Identifier, b)`  
`(Operator, *)`  
`(Number, 10)`  
`(Symbol, ;)`

#### **Implementation of Lexical Analyzer Using Lex (Lex Tool Example)**

🔹 **Lex is a tool for creating lexical analyzers in C.**  
🔹 **Example Lex Code for Identifiers and Numbers:**

`%{`  
`#include <stdio.h>`  
`%}`  
`%%`  
`[a-zA-Z_][a-zA-Z0-9_]*   { printf("IDENTIFIER\n"); }`  
`[0-9]+                   { printf("NUMBER\n"); }`  
`"+" | "-" | "*" | "/"    { printf("OPERATOR\n"); }`  
`%%`  
`int main() {`  
    `yylex();  // Call Lex function`  
    `return 0;`  
`}`

✅ This program detects **identifiers, numbers, and operators** in an input file.

### **2.5 Regular Expressions:**

A **Regular Expression (RegEx)** is a **sequence of characters** that defines a search pattern. In **lexical analysis**, regular expressions help identify **tokens** like keywords, identifiers, numbers, and operators.

 ✔ **Used in Lexical Analyzers** to match **patterns** in source code.  
 ✔ Helps in **token recognition** for keywords, variables, numbers, etc.  
 ✔ Can be **converted into finite automata** for efficient processing.

#### **Basic Components of Regular Expressions**

Regular expressions use **symbols** to represent different types of character sequences.

| Symbol | Meaning | Example | Matches |
| ----- | ----- | ----- | ----- |
| `a, b, c...` | Single character | `a` | `a` |
| `.` | Any single character | `c.t` | `cat`, `cut` |
| `*` | 0 or more repetitions | `a*` | `""`, `a`, `aa`, `aaa` |
| `+` | 1 or more repetitions | `a+` | `a`, `aa`, `aaa` |
| `?` | 0 or 1 occurrence | `a?b` | `b`, `ab` |
| `[ ]` | Character set | `[abc]` | `a`, `b`, `c` |
| `[^ ]` | Negation of set | `[^abc]` | Any character except `a, b, c` |
| `[a-z]` | Range of characters | `[a-z]` | Any lowercase letter |
| `( )` | Grouping | `(ab)+` | `ab`, `abab`, `ababab` |
| \` | \` | OR operator | \`a |

#### **Regular Expressions for Different Token Types**

##### **1\. Keywords**

* **Definition:** Fixed words in a programming language.  
* **Regular Expression:** if | else | while | for | return | int | float  
* **Example Matches:** `if`, `else`, `while`, `int`

##### **2\. Identifiers (Variable Names & Function Names)**

* **Definition:** Names given to variables, functions, classes, etc.  
* **Rules:**  
  * Can contain **letters (a-z, A-Z), digits (0-9), and underscores (\_)**   
  * Cannot start with a **digit**  
* **Regular Expression:** \[a-zA-Z\_\]\[a-zA-Z0-9\_\]\*  
* **Example Matches:** `sum`, `total_value`, `_main`, `A12`  
* **Does NOT Match:** `123abc`, `9num` (Because they start with a digit)

##### **3\. Constants (Numbers)**

* **Definition:** Numeric values used in calculations.

###### ***a) Integer Numbers***

* **Regular Expression:** \[0-9\]+  
* **Example Matches:** `10`, `500`, `0`, `123456`

###### ***b) Floating Point Numbers***

* **Regular Expression:** \[0-9\]+\\.\[0-9\]+  
* **Example Matches:** `3.14`, `0.5`, `100.00`

##### **4\. Operators**

* **Definition:** Mathematical, logical, and relational operators.  
* **Regular Expression:** \[+\\-\*/=\<\>\!\]  
* **Example Matches:** `+`, `-`, `*`, `/`, `=`, `<`, `>`

##### **5\. Strings (Text in Quotes)**

* **Definition:** Sequence of characters enclosed in quotes.  
* **Regular Expression:** ".\*"  
* **Example Matches:** `"hello"`, `"123"`, `"C programming"`

#### **Implementation of Regular Expressions in a Lexical Analyzer**

✔ **Lex tool (Lexical Analyzer Generator)** helps convert **regular expressions into token generators.**  
✔ Example **Lex Program to Identify Identifiers and Numbers**

`%{`  
`#include <stdio.h>`  
`%}`  
`%%`  
`[a-zA-Z_][a-zA-Z0-9_]*    { printf("IDENTIFIER\n"); }`  
`[0-9]+                    { printf("NUMBER\n"); }`  
`"+" | "-" | "*" | "/"      { printf("OPERATOR\n"); }`  
`%%`  
`int main() {`  
    `yylex();  // Call Lex function`  
    `return 0;`  
`}`

✅ **This Lex program automatically recognizes identifiers, numbers, and operators**

### **2.6 Finite Automata:**

A **Finite Automaton (FA)** is a **mathematical model** used to **recognize patterns** in text, such as **tokens** in a programming language. It helps a **Lexical Analyzer** identify **keywords, identifiers, numbers, and operators**.

✔ **Finite Automata is used in Lexical Analysis** to match input with predefined **patterns**.  
✔ It can be represented using **state diagrams** and **transition tables**.  
✔ **Regular Expressions are converted into Finite Automata** for efficient matching.

#### **Types of Finite Automata**

Finite Automata can be of **two types**:

| Type | Definition | Example |
| ----- | ----- | ----- |
| **1\. DFA (Deterministic Finite Automata)** | One transition per input symbol, no ε (empty) transitions. | Used for fast lexical analysis in compilers. |
| **2\. NFA (Nondeterministic Finite Automata)** | Multiple transitions per input symbol, allows ε (empty) transitions. | Easier to design but requires conversion to DFA. |

##### **1\. Deterministic Finite Automata (DFA)**

 ✔ **Each state has exactly one transition per input symbol.**  
 ✔ **No ε (empty) transitions are allowed.**  
 ✔ Used in **lexical analyzers** for **fast pattern matching**.

###### ***DFA Example: Recognizing Binary Strings (0s and 1s)***

📌 **DFA for the Regular Expression `0+1*` (Strings starting with `0`)**

   (q0) \--0--\> (q1) \--0,1--\> (q1) 

| State | Input 0 | Input 1 | Final State? |
| :---: | :---: | :---: | :---: |
| `q0` (Start) | → `q1` | ❌ (Invalid) | No |
| `q1` | `q1` | `q1` | ✅ Yes |

✔ Accepts `0`, `01`, `0001`, `01010`, etc.  
🚫 Rejects `1`, `110`, `101`.

##### **2\. Non-deterministic Finite Automata (NFA)**

 ✔ **Allows multiple transitions for the same input symbol.**  
 ✔ **Can have ε (empty) transitions**, meaning it can move to a new state without consuming input.  
 ✔ Easier to construct than DFA but needs **conversion to DFA** for practical use.

###### ***NFA Example: Recognizing ab\* (Strings starting with a, followed by zero or more bs)***

   (q0) \--a--\> (q1) \--b--\> (q1) 

| State | Input `a` | Input `b` | ε-Transition | Final State? |
| ----- | ----- | ----- | ----- | ----- |
| `q0` (Start) | → `q1` | ❌ (Invalid) | ❌ | No |
| `q1` | ❌ | `q1` | ❌ | ✅ Yes |

✔ Accepts `a`, `ab`, `abb`, `abbbb`, etc.  
 🚫 Rejects `b`, `ba`, `bb`.

#### **Conversion: NFA to DFA**

Since **NFA is less efficient**, it is converted into **DFA** using the **Subset Construction Method**.

 ✔ **DFA ensures one transition per input** → makes processing **faster**.  
 ✔ Example: **Regular Expression `a(b|c)*`**

* **NFA:** Can go to `b` or `c` from `a`.  
* **DFA:** Creates **separate states** for each possibility (`ab*`, `ac*`).

📌 **Lexical Analyzers use DFA because it's faster and easier to implement.**

#### **Finite Automata in Lexical Analysis**

 ✔ **Regular Expressions → NFA → DFA** → Used for token recognition.  
 ✔ Every **token type** (keywords, identifiers, numbers) has a **separate DFA**.  
 ✔ DFA **eliminates backtracking**, making **compilation efficient**.

##### **Example: DFA for Identifiers in C (\[a-zA-Z\_\]\[a-zA-Z0-9\_\]\*)**

📌 **Valid Identifiers:** `sum`, `total_1`, `_count`  
📌 **Invalid Identifiers:** `1variable`, `@test`, `#num`

###### ***DFA Diagram for Identifiers***

   (q0) \--\[a-zA-Z\_\]--\> (q1) \--\[a-zA-Z0-9\_\]\*--\> (q1)

| State | Input: Letter (`a-z, A-Z, _`) | Input: Digit (`0-9`) | Other Characters (`@, #, etc.`) | Final State? |
| ----- | ----- | ----- | ----- | ----- |
| `q0` (Start) | → `q1` | ❌ (Invalid) | ❌ (Invalid) | No |
| `q1` | `q1` | `q1` | ❌ (Invalid) | ✅ Yes |

✔ Accepts: `sum`, `total_1`, `_count`  
🚫 Rejects: `1variable`, `@test`, `#num`

### **2.7 Conversion Between Regular Expressions and Finite Automata:**

* Regular expressions can be converted to NFA using **Thompson’s construction**  
* NFA can then be converted to DFA for easier implementation using **subset construction method**.

#### **Why Convert Regular Expressions to Finite Automata?**

✔ **Lexical Analyzers use Finite Automata** to recognize tokens efficiently.  
 ✔ **Regular Expressions define token patterns**, but **Finite Automata implement them** for fast matching.  
 ✔ The **conversion process** allows compilers to **automatically generate lexers** from regular expressions.

#### **Steps to Convert Regular Expressions to Finite Automata**

1. **Convert Regular Expression to an NFA (Nondeterministic Finite Automaton)**  
2. **Convert NFA to DFA (Deterministic Finite Automaton)**  
3. **Minimize DFA** for efficiency

##### **Step 1: Convert Regular Expression to NFA (Thompson's Construction)**

📌 **Thompson's Construction** is used to build an **NFA** from a **regular expression**.

✔ **NFA allows multiple transitions for the same input** (non-deterministic).  
✔ Uses **ε-transitions** (empty transitions) for flexibility.

###### ***Basic Rules for Constructing NFA***

| Regular Expression | NFA Representation |
| :---- | :---- |
| a | A single state transition for a. |
| \`a | b\` (Union) |
| ab (Concatenation) | Connect a state to b state. |
| a\* (Kleene Star) | Adds loops for zero or more repetitions of a. |

###### ***Example 1: NFA for ab (Concatenation)***

(q0) \--a--\> (q1) \--b--\> (q2)

✔ Accepts `ab`, but not `a` or `b`.

##### **Step 2: Convert NFA to DFA (Subset Construction Method)**

📌 **NFA is converted to DFA because DFA is faster and easier to implement.**

✔ **NFA has multiple transitions for the same input** → DFA has **only one transition per input**.  
 ✔ **ε-transitions are removed**.  
 ✔ The **Subset Construction Method** is used to create **deterministic states**.

###### ***Example 2: NFA for (a|b)c***

(q0) \--a--\> (q1) \--c--\> (q3)

(q0) \--b--\> (q2) \--c--\> (q3)

🚀 **Converting to DFA**:

* `q0` has two possible transitions (`q1` or `q2`).  
* Create a **new DFA state (`q1q2`)** that combines them.  
* Resulting DFA ensures **only one transition per input**.

##### **Step 3: Minimize DFA**

📌 **Minimization reduces the number of states, making lexical analysis faster.**

✔ **Equivalent states are merged**.  
 ✔ **Unreachable states are removed**.  
 ✔ **Final DFA is optimized for performance**.

###### ***Example 3: Minimizing DFA for Identifiers (\[a-zA-Z\_\]\[a-zA-Z0-9\_\]\*)***

1. Initial DFA contains **extra states for each character transition**.  
2. Equivalent states (`q2, q3, q4, ...`) are merged into a **single state**.  
3. The minimized DFA recognizes **identifiers efficiently** with fewer transitions.

#### **Practical Example in a Lexical Analyzer**

✔ **Lex (Lexical Analyzer Generator)** uses **regular expressions** to create **Finite Automata** for token recognition.

##### **Lex Program Example for Identifiers and Numbers**

`%{`  
`#include <stdio.h>`  
`%}`  
`%%`  
`[a-zA-Z_][a-zA-Z0-9_]*    { printf("IDENTIFIER\n"); }`  
`[0-9]+                    { printf("NUMBER\n"); }`  
`"+" | "-" | "*" | "/"      { printf("OPERATOR\n"); }`  
`%%`  
`int main() {`  
    `yylex();  // Call Lex function`  
    `return 0;`  
`}`

✔ Lex **automatically converts regular expressions into an optimized DFA** for fast lexical analysis.

### **2.8 Minimizing DFA States:**

DFA can be optimized by reducing the number of states without changing functionality using **state minimization algorithms**.

#### **Why Minimize DFA?**

✔ **DFA Minimization** reduces the number of states, making lexical analysis **faster and more efficient**.  
✔ A **smaller DFA** consumes **less memory** and executes **faster**.  
✔ **Unnecessary states are removed**, but the DFA **still recognizes the same language**.

#### **Steps to Minimize DFA**

1️⃣ **Remove Unreachable States** (States that are never reached from the start state).  
2️⃣ **Merge Equivalent States** (States that behave identically for all inputs).  
3️⃣ **Construct the Minimized DFA** using the **Partition Method** or **Table-Filling Method**.

##### **Step 1: Removing Unreachable States**

✔ If a state **has no incoming transitions**, or if no path leads to it from the start state, it can be **removed**.  
 ✔ Example:

(q0) \--a--\> (q1) \--b--\> (q2)  ✅ (reachable)

(q3) \--b--\> (q4)              ❌ (unreachable)

📌 **Remove `q3` and `q4` since they are never reached.**

##### **Step 2: Merging Equivalent States**

✔ **Two states are equivalent if** they always lead to the same output for any input.  
 ✔ These states can be **merged into one** to simplify the DFA.

###### ***Example DFA Before Minimization***

(q0) \--a--\> (q1) \--b--\> (q2)

(q0) \--b--\> (q3) \--b--\> (q2)

(q1) \--b--\> (q2)

(q3) \--b--\> (q2)

📌 **Observation:**

* `q1` and `q3` behave the same way → They can be **merged**.  
* The minimized DFA now has **fewer states**.

##### **Step 3: Constructing the Minimized DFA (Partition Method)**

The **Partition Method** is a systematic way to group equivalent states and merge them.

###### ***Partition Method Steps***

1. **Group states into two sets**:  
   * **Final states** (accepting states).  
   * **Non-final states** (non-accepting states).  
2. **Check each state's behavior**: If two states transition to different groups, they are not equivalent.  
3. **Keep splitting states into smaller groups until no further split is possible.**  
4. **Each final group represents a state in the minimized DFA.**

##### **Alternative: Table-Filling Method**

✔ Uses a **state table** to check **which states are distinguishable**.  
 ✔ The table helps eliminate **redundant states** step by step.

#### **Example: DFA Minimization**

**Given DFA:**

States: {q0, q1, q2, q3}  

Final States: {q2}  

Transitions:  

(q0) \--a--\> (q1)    
(q0) \--b--\> (q3)    
(q1) \--b--\> (q2)    
(q3) \--b--\> (q2)  

📌 **Minimized DFA:**

* `q1` and `q3` behave identically → Merge them.  
* Final minimized DFA: `{q0, q1q3, q2}`.

### **2.9 Implementation of Lexical Analyzer:**

#### **Steps to Implement a Lexical Analyzer**

 1️⃣ **Read the source code** character by character.  
 2️⃣ **Match character sequences** to token patterns using **Regular Expressions**.  
 3️⃣ **Generate tokens** (keywords, identifiers, numbers, etc.).  
 4️⃣ **Ignore whitespace and comments**.  
 5️⃣ **Handle lexical errors** (invalid characters, unclosed strings).  
 6️⃣ **Pass tokens to the syntax analyzer (parser)**.

#### **Lexical Analyzer Implementation Methods**

**1\. Manual Implementation (Hardcoded in C, Java, Python, etc.)**  
**2\. Using Lexical Analyzer Generators (Lex, Flex, ANTLR, etc.)**

##### **1\. Manual Implementation (Using C)**

###### ***Example: Simple Lexer in C***

`#include <stdio.h>`  
`#include <ctype.h>`  
`#include <string.h>`

`void identify_token(char *word) {`  
    `// Keywords list`  
    `char *keywords[] = {"int", "float", "if", "else", "return"};`  
    `int num_keywords = 5;`  
      
    `// Check if the word is a keyword`  
    `for (int i = 0; i < num_keywords; i++) {`  
        `if (strcmp(word, keywords[i]) == 0) {`  
            `printf("Keyword: %s\n", word);`  
            `return;`  
        `}`  
    `}`

    `// If not a keyword, it's an identifier`  
    `printf("Identifier: %s\n", word);`  
`}`

`void lexical_analyzer(char *code) {`  
    `char buffer[50];`  
    `int i = 0, j = 0;`

    `while (code[i] != '\0') {`  
        `if (isalnum(code[i])) {`  
            `buffer[j++] = code[i];`  
        `} else {`  
            `if (j > 0) {`  
                `buffer[j] = '\0';`  
                `identify_token(buffer);`  
                `j = 0;`  
            `}`  
            `if (ispunct(code[i])) {`  
                `printf("Operator/Symbol: %c\n", code[i]);`  
            `}`  
        `}`  
        `i++;`  
    `}`  
`}`

`int main() {`  
    `char code[] = "int sum = 10 + 20;";`  
    `printf("Lexical Analysis Output:\n");`  
    `lexical_analyzer(code);`  
    `return 0;`  
`}`

###### ***Output:***

`Lexical Analysis Output:`  
`Keyword: int`  
`Identifier: sum`  
`Operator/Symbol: =`  
`Identifier: 10`  
`Operator/Symbol: +`  
`Identifier: 20`  
`Operator/Symbol: ;`

##### **2\. Using Lex Tool (Lex Program for Lexical Analysis)**

✔ **Lex is a lexical analyzer generator** that automatically **creates lexers** from **regular expressions**.  
 ✔ It generates **C code** that scans and **tokenizes input**.

###### ***Lex Program Example***

`%{`  
`#include <stdio.h>`  
`%}`  
`%%`  
`"int"|"float"|"if"|"else"|"return"   { printf("Keyword: %s\n", yytext); }`  
`[a-zA-Z_][a-zA-Z0-9_]*               { printf("Identifier: %s\n", yytext); }`  
`[0-9]+                               { printf("Number: %s\n", yytext); }`  
`[+\-*/=;]                            { printf("Operator/Symbol: %s\n", yytext); }`  
`%%`  
`int main() {`  
    `yylex(); // Calls the lexer`  
    `return 0;`  
`}`

###### ***Steps to Run Lex Code:***

1. Save the code as `lexer.l`.  
2. Compile using:  
   `lex lexer.l`  
   `gcc lex.yy.c -o lexer -ll`  
3. Run the lexer:  
    `./lexer < input.txt`  
4. Lex automatically converts regular expressions into a DFA-based scanner.