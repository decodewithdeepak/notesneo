# Unit 4: Symbol Table and Code Generation

**Syllabus :** *\[PCC-CSE-302G\]*                                           
**Compiled By:** *Deepak Modi (223100)*  

**Symbol Table & Error Detection and Recovery:** Symbol tables: its contents and data structure for symbol tables; trees, arrays, linked lists, hash tables. Errors, lexical phase error, syntactic phase error, Semantic error.  

**Code Optimization & Code Generation:** Code generation, forms of objects code, machine dependent code, optimization, register allocation for temporary and user defined variables.

---

## Section 1: Symbol Tables and Error Detection

### 1.1 Symbol Tables: Overview and Purpose

Symbol tables are essential data structures that store and organize information about program entities (variables, functions, classes, etc.) during the compilation process. They serve as the compiler's "memory" about the source program.

#### Core Functions of Symbol Tables:

1. **Name Management**: Store identifiers and their associated attributes
2. **Scope Management**: Track visibility and lifetime of identifiers
3. **Type Checking**: Enable verification of type compatibility
4. **Memory Allocation**: Facilitate assignment of memory locations
5. **Reference Resolution**: Support linking of declarations and references

#### Symbol Table Operations:

1. **Insert**: Add a new symbol with its attributes
2. **Lookup**: Find a symbol and retrieve its attributes
3. **Delete**: Remove symbols (usually when their scope ends)
4. **Modify**: Update symbol attributes during compilation

#### Symbol Table Entries:

Each entry in a symbol table typically contains:
- **Name**: Identifier of the symbol
- **Type**: Data type (int, float, etc.)
- **Scope**: Scope level (global, local, etc.)
- **Memory Location**: Address or offset in memory
- **Line Number**: Source line where the symbol is declared
- **Parameter Count**: For functions, the number of parameters
- **Other Attributes**: Additional information (e.g., dimensions for arrays, access specifiers for classes)

```text
Symbol Record
+------------------+------------------+
| Name             | "sum"            |
| Type             | int              |
| Scope            | function_scope   |
| Memory Location  | offset: 8        |
| Line Number      | 42               |
| Parameter Count  | 2                |
| Other Attributes | ...              |
+------------------+------------------+
```

A symbol table may track various attributes depending on the language and entity type:

| Entity Type | Typical Attributes |
|-------------|-------------------|
| Variables   | Name, Type, Scope, Memory location, Dimensions (for arrays), Constant value (if known) |
| Functions   | Name, Return type, Parameter types/counts, Scope, Entry point address, Local variable space |
| Classes     | Name, Member variables, Methods, Inheritance relationships, Access specifiers |
| Types       | Name, Size, Component types, Alignment requirements |

#### Role of Symbol Table in Compiler Phases:

The symbol table interacts with all phases of the compiler:
1. **Lexical Analysis**: Identifies tokens and populates the symbol table
2. **Syntax Analysis**: Validates structure and checks for duplicate declarations
3. **Semantic Analysis**: Performs type checking and scope resolution
4. **Intermediate Code Generation**: Generates code using symbol table information
5. **Code Optimization**: Uses symbol table for optimization decisions
6. **Code Generation**: Maps symbols to memory locations and generates final code
7. **Error Handling**: Provides context for error messages and recovery

### 1.2 Data Structures for Symbol Tables

Symbol tables can be implemented using various data structures, each with its own advantages and disadvantages. The choice of data structure depends on the language features, expected program size, and performance requirements. 

The most common data structures for symbol tables include trees, arrays, linked lists, hash tables.

#### 1.2.1 Trees

Trees are hierarchical structures that can represent scopes and nested symbols effectively.
- **Binary Tree**: Each node has at most two children, suitable for simple symbol tables.
- **Binary Search Tree (BST)**: Efficient for sorted data, supports fast insertion/search.
- **AVL Tree**: Balanced BST, maintains O(log n) operations.
- **Red-Black Tree**: Balanced tree with better performance for frequent insertions/deletions.

**Advantages**:
- Sorted order allows in-order traversal
- Supports efficient searching and insertion

**Disadvantages**:
- Complexity of balancing operations
- Overhead of maintaining tree structure

#### 1.2.2 Arrays

Arrays can be used for fixed-size symbol tables, where each index corresponds to a symbol.
- **Static Arrays**: Fixed size, suitable for small symbol tables.
- **Dynamic Arrays**: Resizable, can grow as needed.
- **Multidimensional Arrays**: Can represent multi-level scopes.
- **Sparse Arrays**: Can be used for large symbol tables with many empty slots.

**Advantages**:
- Fast access time (O(1))
- Simple implementation

**Disadvantages**:
- Fixed size limits flexibility
- Inefficient for large or dynamic symbol tables

#### 1.2.3 Linked Lists

Linked lists can be used for dynamic symbol tables, where each entry points to the next.
- **Singly Linked List**: Each node points to the next, simple structure.
- **Doubly Linked List**: Each node points to both next and previous nodes, allows bidirectional traversal.
- **Circular Linked List**: Last node points to the first, useful for circular scopes.
  
**Advantages**:
- Dynamic size, easy to grow/shrink
- Simple implementation

**Disadvantages**:
- Slower access time (O(n))
- Requires more memory for pointers

#### 1.2.4 Hash Tables

Hash tables use a hash function to map symbols to indices, allowing for fast access.
- **Chaining**: Each index points to a linked list of entries with the same hash value.
- **Open Addressing**: Probes for the next available slot in case of collisions.
- **Double Hashing**: Uses a second hash function to resolve collisions.
- **Perfect Hashing**: Guarantees no collisions with a perfect hash function.
  
**Advantages**:
- Fast average-case access time (O(1))
- Handles large symbol sets efficiently

**Disadvantages**:
- Collision resolution needed (chaining, open addressing)
- Complexity of hash function design

### 1.3 Error Detection and Recovery

Errors are problems in the code that prevent successful compilation or execution. These are detected at various compiler phases.

#### Types of Errors by Compiler Phases
| Phase                            | Type of Error                      | Description & Example                                                                                              |
| -------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Lexical Analysis**             | **Lexical Errors**                 | Errors related to invalid tokens or characters.<br>🔹 *Example:* `int @num = 5;` → `@` is invalid.                 |
| **Syntax Analysis**              | **Syntax Errors**                  | Errors in grammar or structure of the program.<br>🔹 *Example:* `if (x > 5` → Missing closing parenthesis.         |
| **Semantic Analysis**            | **Semantic Errors**                | Errors in meaning, type compatibility, or undeclared variables.<br>🔹 *Example:* `int x = "abc";` → Type mismatch. |
| **Intermediate Code Generation** | **Internal Representation Errors** | Incorrect construction of intermediate representation like TAC. Not always user-visible.                           |
| **Code Optimization**            | **Optimization Errors**            | Rare. May result in inefficient or incorrect optimizations.<br>Handled internally.                                 |
| **Code Generation**              | **Runtime Errors**                 | Errors due to invalid operations in generated code.<br>🔹 *Example:* Division by zero, null pointer access.        |


#### Errors in the Lexical Phase:

- **Lexical Errors**: Invalid tokens or characters
  - Example: `int 123abc;` (identifier cannot start with a digit)
- **Unrecognized Tokens**: Characters not part of the language grammar
  - Example: `@variable;` (invalid character)
- **Invalid Number Formats**: Incorrectly formatted numbers
   - Example: `int x = 12.34.56;` (multiple decimal points)
- **Invalid String Literals**: Unmatched quotes or escape sequences
   - Example: `char* str = "Hello;` (missing closing quote)
- **Invalid Comments**: Unclosed or malformed comments
   - Example: `/* This is a comment` (missing closing `*/`)

#### Errors in the Syntactic Phase:

- **Syntax Errors**: Violations of grammar rules
  - Example: `if (x > 0) x = 1; else;` (extra semicolon)
- **Missing Tokens**: Expected tokens not found
   - Example: `if (x > 0 x = 1;` (missing `)`)
- **Extra Tokens**: Unexpected tokens found
   - Example: `if (x > 0) x = 1; else x = 2; extra;` (extra `extra`)
- **Incorrect Nesting**: Mismatched parentheses or braces
   - Example: `if (x > 0) { if (y < 0) }` (missing outer brace)
  
#### Errors in the Semantic Phase:

- **Semantic Errors**: Violations of meaning or context
  - Example: `int x; x = "hello";` (type mismatch)
- **Type Errors**: Incompatible types in expressions
   - Example: `int x; x = 5 + "hello";` (adding int and string)
- **Scope Errors**: Using undeclared or out-of-scope variables
   - Example: `int x; { int y; x = y; }` (y is out of scope)
- **Function Call Errors**: Incorrect number or types of arguments
   - Example: `int func(int a, float b); func(5);` (missing argument)
  
#### Error Recovery Strategies:
When errors are detected, compilers try to recover and continue analysis rather than stopping completely.

1. **Panic Mode Recovery**: Skip tokens until a known good state is reached
   - Example: When finding `int x = 5 @ 10;`, skip tokens until the semicolon
   - Pros: Simple and fast
   - Cons: May skip important code, leading to further errors

2. **Phrase Level Recovery**: Attempt to correct the error at the current phrase level
   - Example: For `if (x > 0 y = 1;`, insert the missing closing parenthesis
   - Pros: More precise recovery
   - Cons: Complex and may not always work

3. **Error Productions**: Extend grammar to include error rules
   - Example: Adding a rule like `expr → expr + error` to handle malformed expressions
   - Pros: Can provide detailed error messages
   - Cons: Increases grammar complexity

4. **Global Recovery**: Analyze the entire program to find and fix errors
   - Example: Detecting that `print(x)` uses an undefined variable `x` and suggesting alternatives
   - Pros: Comprehensive error detection
   - Cons: Time-consuming and may require significant resources

5. **Error Reporting**: Provide meaningful error messages to the user
   - Example: "Line 42: Variable 'counter' used before declaration" instead of "Error at line 42"
   - Pros: Helps users understand and fix errors
   - Cons: Requires careful design to avoid overwhelming users with information


## Section 2: Code Optimization and Generation

### 2.1 Code Optimization

Code optimization transforms the intermediate representation into more efficient code while preserving the program's semantics. The goal is to improve performance (speed, size) without changing the program's behavior.

#### Optimization Levels:

1. **Local Optimization**: Within a basic block
2. **Global Optimization**: Across basic blocks within a function
3. **Inter-procedural Optimization**: Across function boundaries
4. **Machine-dependent Optimization**: Specific to target architecture

#### Common Optimization Techniques:

1. **Constant Folding**: Evaluate constant expressions at compile time

   ```text
   Original: x = 5 + 3 * 2
   Optimized: x = 11
   ```

2. **Constant Propagation**: Replace variables with their constant values

   ```text
   Original: x = 5; y = x + 3;
   Optimized: x = 5; y = 8;
   ```

3. **Common Subexpression Elimination**: Compute expressions once, reuse results

   ```text
   Original: a = b * c + d; e = b * c + f;
   Optimized: temp = b * c; a = temp + d; e = temp + f;
   ```

4. **Dead Code Elimination**: Remove unreachable or unneeded code

   ```text
   Original: x = 10; x = 20; y = x;
   Optimized: x = 20; y = x;
   ```

5. **Loop Optimizations**:
   - Loop Invariant Code Motion (move calculations out of loops)
   - Loop Unrolling (reduce loop control overhead)
   - Strength Reduction (replace expensive operations with cheaper ones)

   ```text
   Original:
   for (i = 0; i < n; i++) {
       x = y * 4;
       a[i] = x + i;
   }
   
   Optimized:
   x = y * 4;  // Moved outside loop
   for (i = 0; i < n; i++) {
       a[i] = x + i;
   }
   ```

6. **Algebraic Simplifications**:
   - x + 0 → x
   - x * 1 → x
   - x * 0 → 0
   - x - x → 0

7. **Peephole Optimization**: Replace instruction sequences with more efficient ones

   ```text
   Original:
   load R1, X
   add R1, 0
   store R1, Y
   
   Optimized:
   load R1, X
   store R1, Y
   ```

#### Data-Flow Analysis:

Many optimizations rely on data-flow analysis to determine how values propagate:

1. **Reaching Definitions**: Which assignments may reach a point in the program
2. **Live Variables**: Which variables may be used before redefinition
3. **Available Expressions**: Which expressions have been computed and not modified

Example of reaching definitions:

```text
(1) a = 3
(2) b = a + c
(3) if (b > 10) {
(4)     a = b - 10
    } else {
(5)     a = 0
    }
(6) d = a + b

Reaching definitions at (6): a from (4) or (5), b from (2)
```

#### Control-Flow Analysis:

Optimizations also require understanding the program's control flow:

1. **Control-Flow Graph (CFG)**: Represents possible execution paths
2. **Basic Blocks**: Maximal sequences of instructions with no branches
3. **Dominator Analysis**: Determines which blocks must be executed before others

### 2.2 Forms of Object Code

The output of the compilation process is object code, which is a low-level representation of the source program. Object code can be in various forms, including machine code, assembly code, bytecode, or intermediate representations, depending on the target platform and deployment requirements.

#### Types of Object Code:

1. **Machine Code**: Native binary code directly executable by the processor
   - Most efficient execution
   - Platform-specific
   - No runtime interpreter needed

2. **Assembly Code**: Human-readable representation of machine instructions
   - Intermediate step before machine code
   - Useful for debugging and manual optimization
   - Must be assembled into machine code

3. **Bytecode**: Intermediate representation for virtual machines
   - Platform-independent
   - Requires a runtime interpreter or JIT compiler
   - Examples: Java bytecode, Python bytecode, .NET IL

4. **P-code**: Portable code for abstract stack machines
   - Used in some Pascal compilers and educational settings
   - Higher-level than bytecode
   - Interpreted at runtime

#### Object File Formats:

1. **Relocatable Object Files**: Contains code and data sections needing relocation
   - Generated by compilers
   - Input to linkers
   - Examples: ELF .o files, Windows .obj files

2. **Executable Object Files**: Ready-to-run program
   - Memory addresses resolved
   - System dependencies resolved
   - Examples: ELF executables, Windows .exe files

3. **Shared Library Files**: Code meant to be linked at load-time or runtime
   - Position-independent code
   - Shared among multiple programs
   - Examples: Linux .so files, Windows .dll files

#### Object File Components:

Object files typically consist of several sections, each serving a specific purpose:

1. **Header**: Metadata about the file format and contents
2. **Code Section**: Executable instructions
3. **Data Section**: Initialized global/static variables
4. **BSS Section**: Uninitialized global/static variables -> BSS (Block Started by Symbol)
5. **Symbol Table**: External symbols defined or referenced
6. **Relocation Information**: Where and how to modify addresses
7. **Debugging Information**: Source line mapping, etc.

```text
+------------------+
| Header           |
+------------------+
| Code Section     |
+------------------+
| Data Section     |
+------------------+
| BSS Section      |
+------------------+
| Symbol Table     |
+------------------+
| Relocation Info  |
+------------------+
| Debug Info       |
+------------------+
```

### 2.3 Code Generation Basics

Code generation transforms the optimized intermediate representation into target machine code. This phase is crucial as it directly affects the performance and efficiency of the final executable file.

#### Code Generation Steps:
1. **Instruction Selection**: Choose appropriate machine instructions for each intermediate operation.
   - Map high-level constructs to assembly/machine instructions.
   - Use instruction selection tables or algorithms.

2. **Register Allocation**: Assign variables to CPU registers or memory locations.
   - Use register allocation techniques (graph coloring, linear scan).
   - Consider register pressure and calling conventions.

3. **Instruction Scheduling**: Reorder instructions to improve performance.
   - Minimize pipeline stalls and maximize instruction-level parallelism.
   - Use techniques like list scheduling or software pipelining.

4. **Addressing Mode Selection**: Choose the best addressing modes for memory access.
   - Optimize memory access patterns to reduce cache misses.
   - Use immediate, direct, indirect, or indexed addressing as needed.

5. **Output Generation**: Produce the final object code in the target format.
   - Generate binary instructions and data sections.
   - Include relocation information and symbol tables.

#### Example of Code Generation:

```text
Intermediate Representation:
x = a + b;
y = x * c;

Code Generation:
LOAD R1, a
LOAD R2, b
ADD R1, R2
STORE R1, x

LOAD R3, c
MUL R1, R3
STORE R1, y
```

The above example illustrates how high-level operations are translated into low-level machine instructions

### 2.4 Register Allocation

Register allocation is a critical optimization that decides which variables to keep in CPU registers and which to store in memory. Efficient register allocation can significantly improve program performance by reducing memory access times.

#### Register Allocation for Temporary and User-Defined Variables

Register allocation is essential for both temporary variables (created during intermediate code generation) and user-defined variables (declared in the source code).

#### Temporary Variables:
Temporary variables are often created during the compilation process to hold intermediate results. They are typically short-lived and can be allocated to registers more flexibly.
```text
t1 = a + b
t2 = t1 * c
```
In this example, `t1` and `t2` can be allocated to registers since they are only used within a limited scope.

#### User-Defined Variables:
User-defined variables are declared by the programmer and may have a longer lifetime. They need to be allocated carefully to ensure that their values are preserved across function calls and other operations.
```text
int x = 5;
int y = x + 10;
```
In this case, `x` and `y` need to be allocated in registers or memory, depending on the available resources.

#### Register Allocation Challenges:

1. **Limited Register Supply**: CPUs have a fixed number of registers
2. **High Register Pressure**: Programs often need more variables than available registers
3. **Different Value Lifetimes**: Some values are used for longer periods than others
4. **Calling Conventions**: Need to preserve certain registers across calls

#### Register Allocation Techniques:

1. **Graph Coloring**: Model register allocation as a graph coloring problem
   - Variables are nodes
   - Edges connect variables that are live at the same time
   - Colors represent registers

2. **Linear Scan**: Simpler but less optimal algorithm
   - Sort variables by live ranges
   - Allocate registers in order of first use

3. **Local Register Allocation**: Allocate within basic blocks only
   - Simpler algorithm
   - Less efficient across blocks
   - Requires stores/reloads at block boundaries

#### Register Spilling:

When there aren't enough registers, some values must be "spilled" to memory:

1. **Cost-based Spilling**: Spill variables with lowest usage frequency
2. **Priority-based Spilling**: Keep most critical variables in registers
3. **Split Live Ranges**: Spill a variable for only part of its lifetime
4. **Stack Allocation**: Use stack space for spilled variables

### 2.5 Machine-Dependent Optimizations

These optimizations take advantage of specific features of the target architecture.

#### Target-Specific Optimizations:

1. **Instruction Selection**: Choose instructions optimal for the target CPU
   - Use specialized instructions (SIMD, FMA, etc.)
   - Select addressing modes minimizing memory accesses

2. **Instruction Scheduling**: Order instructions for pipeline efficiency
   - Avoid pipeline stalls (data hazards)
   - Maximize instruction-level parallelism
   - Schedule around long-latency operations

3. **Peephole Optimizations**: Processor-specific instruction patterns
   - Replace sequences with more efficient equivalents
   - Eliminate redundant operations

4. **Memory Alignment**: Optimize data layout
   - Align data for efficient memory access
   - Reduce cache misses