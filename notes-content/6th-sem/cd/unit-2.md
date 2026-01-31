# Unit 2: Syntax Analysis

## Section 1: Syntax Analysis

Syntax analysis is the second phase of compilation, following lexical analysis. It checks the syntactic correctness of the token stream produced by the lexical analyzer and constructs a parse tree or abstract syntax tree (AST) that represents the hierarchical structure of the program.
The syntax analyzer (parser) uses a formal grammar to define the valid structures of the programming language. This section covers the role of parsers, context-free grammars, and the basic concepts of parsing techniques.

### 1.1 Role of Parsers

Parsers form the heart of the syntax analysis phase in a compiler. They play several crucial roles:

1. **Structural Validation**: Verify that the token sequence follows the grammatical rules of the language, detecting syntax errors if they don't.

2. **Parse Tree Construction**: Generate a hierarchical representation (parse tree or syntax tree) that captures the syntactic structure of the program.

3. **Error Detection and Recovery**: Identify syntax errors, report them meaningfully, and attempt to continue parsing despite errors.

4. **Integration with Semantic Analysis**: Provide a structured foundation for semantic analysis by organizing tokens into meaningful structures.

5. **Intermediate Code Generation**: Guide the generation of intermediate code based on the recognized program structure.

The parser operates as a critical bridge between lexical analysis and later compilation phases:

```text
     Tokens                      Parse Tree/AST
     ┌─────┐                     ┌─────────────┐
     │     │                     │             |
────>|     ├────────────────────>│   Parser    ├────>
     │     │                     │             │
     └─────┘                     └─────────────┘
  From Lexical                   To Semantic Analysis
    Analyzer                     or Intermediate Code
```

A parser must handle various challenges including:
- Ambiguous grammar constructs
- Complex nested structures
- Operator precedence and associativity
- Error detection with meaningful diagnostics
- Recovery from syntax errors to continue compilation

### 1.2 Context-Free Grammars

Context-Free Grammars (CFGs) are formal grammars that define the syntax of programming languages. They consist of a set of production rules that describe how symbols can be combined to form valid strings in the language.
CFGs are widely used in compiler design because they can express the syntax of most programming languages in a clear and concise manner.

#### Components of a Context-Free Grammar:

1. **Terminal Symbols (T)**: The basic symbols of the language (tokens from the lexical analyzer).

2. **Nonterminal Symbols (N)**: Syntactic variables that represent language constructs.

3. **Production Rules (P)**: Rules that define how nonterminals can be replaced by sequences of terminals and nonterminals.

4. **Start Symbol (S)**: A special nonterminal from which parsing begins.

Formally, a CFG is defined as a 4-tuple G = (N, T, P, S).

#### Example of a Context-Free Grammar:

A simple grammar for arithmetic expressions:

```text
E → E + T | E - T | T
T → T * F | T / F | F
F → ( E ) | id
```

Where:
- E, T, and F are nonterminals representing Expression, Term, and Factor
- +, -, *, /, (, ), and id are terminals
- E is the start symbol

#### Derivations:

Derivations show how a grammar generates a string. There are two main types:

1. **Leftmost Derivation**: Always replace the leftmost nonterminal first.
   
   Example:
   ```text
   E ⇒ E + T ⇒ T + T ⇒ F + T ⇒ id + T ⇒ id + F ⇒ id + id
   ```

2. **Rightmost Derivation**: Always replace the rightmost nonterminal first.
   
   Example:
   ```text
   E ⇒ E + T ⇒ E + F ⇒ E + id ⇒ T + id ⇒ F + id ⇒ id + id
   ```

#### Parse Trees:

A parse tree visually represents the hierarchical structure of a derivation:

```text
       E
      / \
     E   T
     |   |
     T   F
     |   |
     F   id
     |
    id
```

This tree represents "id + id".

#### Parse Tree and Abstract Syntax Tree (AST):
A parse tree represents the complete syntactic structure of a string derived from a grammar. It includes all the details of the derivation, including intermediate nonterminals.
An Abstract Syntax Tree (AST) is a simplified version of the parse tree that omits unnecessary details, focusing on the essential structure and relationships. The AST is often used in later stages of compilation, such as semantic analysis and code generation.

#### Ambiguity in CFGs:

A grammar is ambiguous if it produces more than one parse tree for the same sentence. Otherwise, it is unambiguous. Ambiguity can lead to multiple interpretations of the same input, which is undesirable in programming languages.
Ambiguous grammars can arise from constructs like operator precedence and associativity. For example, the grammar for arithmetic expressions can be ambiguous if it doesn't specify operator precedence.

```text
Consider the grammar:

```text
E → E + E | E * E | ( E ) | id
```

The string "id + id * id" has two possible parse trees:

```text
    E               E
   / \             / \
  E   E           E   E
  |  / \         / \  |
 id E   E       E   E id
    |   |      / \  
    id  id   id   id
```

Ambiguous grammars are problematic for parsers because they can lead to unpredictable interpretations. Solutions include:

1. **Grammar Rewriting**: Restructure the grammar to eliminate ambiguity.
2. **Precedence Rules**: Define explicit precedence for operations.
3. **Associativity Rules**: Specify how operators of equal precedence should associate.

## Section 2: Parsing Techniques

Parsing techniques are essential for analyzing the structure of token sequences. They can be broadly classified into two main categories: top-down parsing and bottom-up parsing. Each category includes several specific methods with their own advantages and applications.

```mathematica
Parsing Techniques
├── Top-Down Parsing
│   ├── Recursive Descent Parsing
│   ├── Backtracking Parsing
│   └── Predictive Parsing
│       └── LL(1) Parsing
│           ├── Table-Driven Parser
│           └── Non-Recursive Parser
│
└── Bottom-Up Parsing
    ├── Shift-Reduce Parsing
    ├── Operator Precedence Parsing
    └── LR Parsing
        ├── SLR (Simple LR)
        ├── Canonical LR
        └── LALR (Look-Ahead LR)
```

### 2.1 Top-Down Parsing

Top-down parsing starts with the start symbol and attempts to derive the input string by constructing the parse tree from the root downward. It's an intuitive approach that mimics how humans often understand language.

### 2.1 Top-Down Parsing

Top-down parsing starts with the start symbol and attempts to derive the input string by constructing the parse tree from the root downward. It's an intuitive approach that mimics how humans often understand language.

#### Characteristics of Top-Down Parsing:

1. **Construction Direction**: Builds parse tree from root (start symbol) to leaves (terminals).
2. **Derivation Type**: Uses leftmost derivations.
3. **Parsing Strategy**: Prediction-based - tries to predict which production to apply.
4. **Common Methods**: Recursive Descent and LL parsing.
5. **Lookahead**: Typically uses one token of lookahead (LL(1)).

#### Recursive Descent Parsing:

A direct implementation of top-down parsing where each nonterminal in the grammar has a corresponding function. The parser functions are structured to mirror the grammar productions directly.

For example, for our expression grammar, the recursive descent parser would have functions for E, T, and F that recursively call each other according to the production rules. Each function handles one nonterminal and its productions, checking the next input token (lookahead) to decide which production to apply.

This implementation directly reflects the previously defined expression grammar, with explicit handling for operator precedence and associativity.

#### LL(1) Parsing:

LL(1) parsers are table-driven top-down parsers that use one token of lookahead:

1. **Construction**:
   - Compute FIRST and FOLLOW sets for each nonterminal.
   - Build a parsing table where rows are nonterminals, columns are terminals.
   - Each cell contains the production to use (or error).

2. **Parsing Process**:
   - Initialize a stack with the start symbol and $ (endmarker).
   - Repeatedly:
     - If top of stack matches current input, pop and advance.
     - If top is nonterminal, replace with right side of appropriate production.
     - If no move is possible, report an error.

Example LL(1) parsing table for the expression grammar:

```text
        |  id  |  +   |  *   |  (   |  )   |  $   |
--------|------|------|------|------|------|------|
   E    | E→T  |      |      | E→T  |      |      |
--------|------|------|------|------|------|------|
   E'   |      | E'→+T|      |      | E'→ε | E'→ε |
        |      |  E'  |      |      |      |      |
--------|------|------|------|------|------|------|
   T    | T→F  |      |      | T→F  |      |      |
--------|------|------|------|------|------|------|
   T'   |      | T'→ε | T'→*F|      | T'→ε | T'→ε |
        |      |      |  T'  |      |      |      |
--------|------|------|------|------|------|------|
   F    | F→id |      |      | F→(E)|      |      |
--------|------|------|------|------|------|------|
```

Where E → TE' and T → FT' are left-factored forms of our original grammar.

#### Advantages of Top-Down Parsing:
- Intuitive and easy to implement by hand (recursive descent)
- Good error reporting capabilities
- Efficient implementation possible

#### Limitations:
- Cannot handle left-recursive grammars directly
- Requires grammar transformations like left factoring
- Backtracking may be necessary for some grammars

### 2.2 Predictive Parsing

Predictive parsing is a specialized form of top-down parsing that doesn't require backtracking. It's particularly efficient because it can determine which production to use by looking at the current input token.

#### Characteristics:

1. **Deterministic**: Always knows which production to apply based on current input.
2. **Non-Backtracking**: Never needs to backtrack or try alternative productions.
3. **Limited Lookahead**: Usually uses just one token of lookahead (LL(1)).

#### Requirements for LL(1) Predictive Parsing:

A grammar must satisfy specific conditions to be LL(1):

1. **No Left Recursion**: Productions like A → A α must be eliminated.
2. **Left Factored**: Common prefixes in alternative productions must be factored out.
3. **Disjoint First Sets**: For any nonterminal A with productions A → α | β, the FIRST sets of α and β must be disjoint.
4. **FIRST/FOLLOW Condition**: If A → ε is a production and A → β is another production, then FIRST(β) and FOLLOW(A) must be disjoint.

#### FIRST and FOLLOW Sets:

These sets are crucial for constructing predictive parsing tables:

- **FIRST(α)**: The set of terminals that can appear as the first symbols of strings derived from α.
- **FOLLOW(A)**: The set of terminals that can appear immediately after nonterminal A in some sentential form.

Example:
```text
For grammar:
E → TE'
E' → +TE' | ε
T → FT'
T' → *FT' | ε
F → (E) | id

FIRST(E) = FIRST(T) = FIRST(F) = {(, id}
FIRST(E') = {+, ε}
FIRST(T') = {*, ε}

FOLLOW(E) = FOLLOW(E') = {$, )}
FOLLOW(T) = FOLLOW(T') = {+, $, )}
FOLLOW(F) = {*, +, $, )}
```

#### Predictive Parser Algorithm:

The predictive parser follows these steps:
1. Initialize a stack with the end marker and start symbol
2. Get the first input token
3. While the top of stack is not the end marker:
   - If top is a terminal, match it with current input token
   - If top is a nonterminal, look up the production to use in the parsing table
   - If no production exists, report an error
4. Accept if both the stack and input are empty, otherwise report an error
```

#### Parsing Example:

For input "id + id * id" with our expression grammar:

```text
Stack           Input           Action
$E              id+id*id$       Expand E → TE'
$E'T            id+id*id$       Expand T → FT'
$E'T'F          id+id*id$       Expand F → id
$E'T'id         id+id*id$       Match id
$E'T'            +id*id$        Expand T' → ε
$E'              +id*id$        Expand E' → +TE'
$E'T+            +id*id$        Match +
$E'T              id*id$        Expand T → FT'
$E'T'F            id*id$        Expand F → id
$E'T'id           id*id$        Match id
$E'T'              *id$         Expand T' → *FT'
$E'T'F*            *id$         Match *
$E'T'F              id$         Expand F → id
$E'T'id             id$         Match id
$E'T'                $          Expand T' → ε
$E'                  $          Expand E' → ε
$                    $          Accept
```

### 2.3 Shift-Reduce Parsing

Shift-reduce parsing is a bottom-up approach that works by building the parse tree from leaves to root. It attempts to reduce a string to the start symbol by identifying and replacing the right-hand sides of productions with their corresponding left-hand nonterminals.

#### Characteristics of Shift-Reduce Parsing:

1. **Construction Direction**: Builds parse tree from leaves (terminals) to root (start symbol).
2. **Derivation Type**: Uses rightmost derivations in reverse.
3. **Parsing Strategy**: Recognition-based - recognizes handles (rightmost sentential forms) in the input.
4. **Common Methods**: LR parsing and its variants.

#### Basic Shift-Reduce Operations:

1. **Shift**: Push the next input symbol onto the stack.
2. **Reduce**: Replace a handle (RHS of a production) on top of the stack with the corresponding LHS nonterminal.
3. **Accept**: Declare successful completion when the start symbol is the only symbol on the stack and the input is empty.
4. **Error**: Declare an error when no other action can be taken.

#### Handles:

A handle is a substring that matches the right side of a production and whose reduction represents a step in the reverse of a rightmost derivation. Finding handles correctly is the key challenge in shift-reduce parsing.

#### Parse Stack and Actions:

Shift-reduce parsers maintain a parse stack to track partially recognized phrases:

```text
stack: X₁X₂...Xₘ
input: aᵢaᵢ₊₁...aₙ$
```

Actions at each step:
- **Shift**: Push aᵢ onto the stack
- **Reduce by A → β**: If X_{m-r+1}...Xₘ = β, replace with A
- **Accept**: If stack contains just S$ (S is start symbol)
- **Error**: If no other action applies

#### Example Shift-Reduce Parsing:

For the input "id + id * id" with our expression grammar:

```text
Stack            Input           Action
                 id+id*id$       
id               +id*id$         Shift
F                +id*id$         Reduce by F → id
T                +id*id$         Reduce by T → F
E                +id*id$         Reduce by E → T
E+               id*id$          Shift
E+id             *id$            Shift
E+F              *id$            Reduce by F → id
E+T              *id$            Reduce by T → F
E+T*             id$             Shift
E+T*id           $               Shift
E+T*F            $               Reduce by F → id
E+T              $               Reduce by T → T*F
E                $               Reduce by E → E+T
                                 Accept
```

### 2.4 Operator Precedence Parsing

Operator precedence parsing is a specialized bottom-up parsing technique focused on expressions with binary operators. It's simpler than full LR parsing but applies only to a subset of grammars where operator relationships can be clearly defined.

#### Key Concepts:

1. **Precedence Relations**: Three possible relations between terminals:
   - ⋖ (yields precedence to): a ⋖ b means a has lower precedence than b
   - ⋗ (takes precedence over): a ⋗ b means a has higher precedence than b
   - ≐ (has equal precedence with): a ≐ b means a and b are part of the same handle

2. **Precedence Functions**: Functions that assign numeric precedence values to operators.
   - g(a) > g(b) implies a ⋗ b
   - g(a) < g(b) implies a ⋖ b
   - g(a) = g(b) implies comparison by associativity

#### Building Precedence Tables:

Precedence relations are typically shown in a matrix:

```text
        |  id  |   +  |   *  |   (  |   )  |   $  |
--------|------|------|------|------|------|------|
  id    |      |  ⋗   |  ⋗   |      |  ⋗   |  ⋗   |
--------|------|------|------|------|------|------|
   +    |  ⋖   |  ⋗   |  ⋖   |  ⋖   |  ⋗   |  ⋗   |
--------|------|------|------|------|------|------|
   *    |  ⋖   |  ⋗   |  ⋗   |  ⋖   |  ⋗   |  ⋗   |
--------|------|------|------|------|------|------|
   (    |  ⋖   |  ⋖   |  ⋖   |  ⋖   |  ≐   |      |
--------|------|------|------|------|------|------|
   )    |      |  ⋗   |  ⋗   |      |  ⋗   |  ⋗   |
--------|------|------|------|------|------|------|
   $    |  ⋖   |  ⋖   |  ⋖   |  ⋖   |      |      |
--------|------|------|------|------|------|------|
```

#### Parsing Algorithm:

1. Initialize stack with $ and input buffer with input string followed by $.
2. Repeat:
   - If stack top ⋖ next input symbol or stack top ≐ next input symbol: Shift
   - If stack top ⋗ next input symbol: Reduce (find handle and reduce)
   - If stack contains $ and next input is $: Accept
   - Otherwise: Error

#### Example of Operator Precedence Parsing:

For input "id + id * id" with traditional operator precedence:

```text
Stack            Input           Action
$                id+id*id$       Shift ($ ⋖ id)
$id              +id*id$         Shift (id ⋖ +)
$id+             id*id$          Shift (+ ⋖ id)
$id+id           *id$            Shift (id ⋖ *)
$id+id*          id$             Shift (* ⋖ id)
$id+id*id        $               Reduce (id ⋗ $)
$id+id*F         $               Reduce (* ⋗ $)
$id+T            $               Reduce (+ ⋗ $)
$E               $               Accept
```

#### Advantages and Limitations:

**Advantages**:
- Simple implementation for expression grammars
- Efficient parsing of arithmetic expressions
- Naturally handles operator precedence and associativity

**Limitations**:
- Only works for a subset of grammars (operator grammars)
- Cannot handle many programming language constructs
- Limited error reporting capabilities

### 2.5 LR Parsing

LR parsing is a powerful bottom-up parsing technique that can handle a wide range of grammars. The "L" stands for left-to-right scanning of input, and "R" stands for constructing rightmost derivation in reverse.

#### Types of LR Parsers:

1. **Simple LR (SLR)**: The most basic form, using FOLLOW sets to resolve reduce decisions.
2. **Canonical LR (CLR)**: The most powerful but complex LR parser.
3. **Look-Ahead LR (LALR)**: A compromise between SLR and CLR, offering good power with reasonable table size.

#### LR Parsing Components:

1. **Parsing Table**: Consists of ACTION and GOTO functions:
   - ACTION[s,a]: Action to take in state s with terminal a
   - GOTO[s,A]: State to transition to after reducing to nonterminal A

2. **Actions**:
   - shift s: Push current input and go to state s
   - reduce A → β: Replace β on stack with A
   - accept: Parsing complete
   - error: Syntax error detected

#### LR Parsing Algorithm:

The LR parsing algorithm follows these steps:
1. Initialize stack with state 0
2. While not done:
   - Let s be the state on top of stack
   - Let a be the current input symbol
   - Based on ACTION[s,a]:
     - If "shift s'": Push a and state s' onto stack, advance input
     - If "reduce A → β": Pop 2*|β| items (symbols and states), 
                          push A and GOTO[new_top_state, A]
     - If "accept": Parsing successful
     - If "error": Report error and attempt recovery
```

#### Example of LR Parsing:

For input "id + id * id" with a simplified LR parsing table:

```text
Stack             Input           Action
0                 id+id*id$       shift 5
0 id 5            +id*id$         reduce F → id
0 F 3             +id*id$         reduce T → F
0 T 2             +id*id$         reduce E → T
0 E 1             +id*id$         shift 6
0 E 1 + 6         id*id$          shift 5
0 E 1 + 6 id 5    *id$            reduce F → id
0 E 1 + 6 F 3     *id$            reduce T → F
0 E 1 + 6 T 9     *id$            shift 7
0 E 1 + 6 T 9 * 7 id$             shift 5
0 E 1 + 6 T 9 * 7 id 5 $          reduce F → id
0 E 1 + 6 T 9 * 7 F 10 $          reduce T → T*F
0 E 1 + 6 T 9     $               reduce E → E+T
0 E 1             $               accept
```
