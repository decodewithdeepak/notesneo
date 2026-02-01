---
title: "Unit 4: Associative Memory"
description: "Auto-associative and hetero-associative memory, Hebb rule, and bidirectional memory"
author: "Deepak Modi"
date: "2025-06-15"
pdfUrl: ""
---

## Syllabus:

**Associative Memory:** Auto associative and Hetero associative memory and their architecture, training (insertion) and testing (Retrieval) algorithm using Hebb rule and Outer Product rule. Storage capacity, Testing of associative memory for missing and mistaken data, Bidirectional memory.

---

## **PYQ Analysis**

### **High Priority Topics** (15 marks questions)

1. **Auto Associative Memory** - (2024: 15 marks, 2023: 15 marks, 2022: 15 marks with practical)
2. **Hetero Associative Memory** - (2023: 15 marks, 2024: 2.5 marks)
3. **Storage and Retrieval Algorithm** - (2023: 15 marks)
4. **Testing with Missing/Mistaken Data** - (2024: 15 marks, 2022: 15 marks with all cases)
5. **Associative Memory Concept** - (2024: 15 marks, 2022: 15 marks)

### **Medium Priority Topics** (Short answers)

1. **Hetero Associative Memory** - 2024 (2.5 marks)
2. **Storage Capacity** - 2022 (short answer)

### **Important Notes:**
- Unit 4 is highly practical with numerical problems
- Must practice weight matrix calculations
- Testing with errors is frequently asked
- 2022 paper has complete practical problem (all 6 parts)

---

## **Section 1: Introduction to Associative Memory**

### **1.1 What is Associative Memory?**

> PYQ: What is Associative Memory? (2024, 2022, 15 marks)  
> PYQ: How does associative memory handle errors in data, such as missing or mistaken inputs? (2024, 15 marks)

**Definition:**

**Associative Memory** is a type of neural network that can store patterns and retrieve them based on partial or noisy input. It works like human memory - when you see part of something, you can recall the complete thing.

**Simple Explanation:**

Think of how your brain works:
- You hear a few notes of a song → You remember the entire song
- You see someone's face → You remember their name
- You smell a perfume → You remember a person or place

Associative memory does the same thing - it associates inputs with stored patterns and retrieves the complete information.

**Real-Life Analogy:**

Like a library system:
- **Input:** Part of a book title
- **Process:** Search through stored books
- **Output:** Complete book information

Or like autocomplete:
- You type "goo" → System suggests "google"
- Partial input → Complete output

---

### **1.2 Types of Associative Memory**

**1. Auto-Associative Memory:**
- Stores patterns and retrieves the **same pattern**
- Input = Output (when perfect)
- Used for pattern completion and error correction
- Example: Store "HELLO" → Input "HE__O" → Output "HELLO"

**2. Hetero-Associative Memory:**
- Associates one pattern with a **different pattern**
- Input ≠ Output
- Used for pattern association and transformation
- Example: Store (Face → Name), Input Face → Output Name

**Comparison:**

| Aspect | Auto-Associative | Hetero-Associative |
|--------|------------------|-------------------|
| **Input-Output** | Same pattern | Different patterns |
| **Purpose** | Pattern completion | Pattern association |
| **Example** | Restore corrupted image | Face → Name |
| **Weight Matrix** | Square (n×n) | Rectangular (m×n) |
| **Use** | Error correction | Mapping/Translation |

---

### **1.3 Key Concepts**

**Storage (Training/Insertion):**
- Process of storing patterns in the network
- Creates weight matrix from training patterns
- Like writing information to memory

**Retrieval (Testing/Recall):**
- Process of recalling stored patterns
- Given input, find matching stored pattern
- Like reading information from memory

**Content-Addressable Memory:**
- Can retrieve information based on content (not address)
- Like searching by keywords, not file location
- Partial input can retrieve complete pattern

**Error Tolerance:**
- Can handle noisy or incomplete inputs
- Retrieves correct pattern even with errors
- Robust to missing or mistaken data

---

### **1.4 How Associative Memory Handles Errors**

> PYQ: How does associative memory handle errors in data, such as missing or mistaken inputs? (2024, 15 marks)

**Mechanisms for Error Handling:**

**1. Pattern Completion (Missing Data):**

```
Stored Pattern: [1, 1, -1, -1]
Input with missing: [1, 0, -1, -1]  (0 = missing)
Output: [1, 1, -1, -1]  (Completes the pattern)
```

**How it works:**
- Missing values represented as 0
- Network uses stored weights
- Reconstructs missing information
- Based on correlation with stored patterns

**2. Error Correction (Mistaken Data):**

```
Stored Pattern: [1, 1, -1, -1]
Input with mistake: [1, -1, -1, -1]  (2nd bit wrong)
Output: [1, 1, -1, -1]  (Corrects the error)
```

**How it works:**
- Noisy input presented to network
- Network calculates similarity with stored patterns
- Converges to closest stored pattern
- Corrects the errors

**3. Iterative Refinement:**

```
Iteration 1: Noisy input → Partial correction
Iteration 2: Improved input → Better correction
Iteration 3: Further improved → Converges to stored pattern
```

**4. Energy Minimization:**

- Network has an energy function
- Stored patterns are energy minima (valleys)
- Noisy input is at higher energy (hill)
- Network "rolls down" to nearest minimum
- Retrieves closest stored pattern

**Limitations:**

- Can only correct limited errors
- Too many errors → Wrong pattern retrieved
- Depends on storage capacity
- Similar patterns may interfere

---

## **Section 2: Auto-Associative Memory**

### **2.1 Introduction to Auto-Associative Memory**

> PYQ: Describe Auto Associative Memory (2023, 15 marks)  
> PYQ: Explain Auto Associative Memory with its architecture, training (insertion), and testing (retrieval) algorithm. (2022, 15 marks)

**Definition:**

**Auto-Associative Memory** is a type of associative memory where the network stores patterns and retrieves the **same pattern** when presented with a partial or noisy version of it.

**Purpose:**

- Pattern completion (fill in missing parts)
- Error correction (fix corrupted data)
- Noise removal (clean up noisy input)
- Pattern recognition (identify stored patterns)

**Characteristics:**

- Input and output have same dimensions
- Weight matrix is square (n×n)
- Symmetric weight matrix (wᵢⱼ = wⱼᵢ)
- Diagonal elements are zero (wᵢᵢ = 0)
- Feedback connections

---

### **2.2 Architecture of Auto-Associative Memory**

**Structure:**

```
Input Layer          Output Layer
                     (Same as input)
    
    x₁ ──────┐
          ╱  │  ╲
    x₂ ──────┼────── y₁
        ╱    │    ╲
    x₃ ──────┼────── y₂
          ╲  │  ╱
    x₄ ──────┘────── y₃
                     
                     y₄

Fully connected (all-to-all)
Feedback connections
```

**Detailed Architecture:**

```
┌────────────────────────────────────┐
│         Input Vector (x)           │
│         [x₁, x₂, x₃, x₄]           │
└──────────────┬─────────────────────┘
               │
    ┌──────────▼──────────┐
    │   Weight Matrix W   │
    │   (Learned from     │
    │   stored patterns)  │
    └──────────┬──────────┘
               │
    ┌──────────▼──────────┐
    │  Matrix Multiply    │
    │      y = W × x      │
    └──────────┬──────────┘
               │
    ┌──────────▼──────────┐
    │ Activation Function │
    │   (Bipolar step)    │
    └──────────┬──────────┘
               │
┌──────────────▼─────────────────────┐
│        Output Vector (y)           │
│        [y₁, y₂, y₃, y₄]            │
└────────────────────────────────────┘
```

**Components:**

1. **Input Layer:** Receives input pattern (complete or partial)
2. **Weight Matrix:** Stores information about patterns
3. **Output Layer:** Produces retrieved pattern
4. **Activation Function:** Usually bipolar step function

**Weight Matrix Properties:**

```
For n-dimensional patterns:
- Size: n × n (square matrix)
- Symmetric: W = Wᵀ (wᵢⱼ = wⱼᵢ)
- Zero diagonal: wᵢᵢ = 0
```

---

### **2.3 Training Algorithm (Hebb Rule)**

**Hebb Rule for Auto-Associative Memory:**

```
Step 1: Initialize
    Set all weights to 0
    W = 0 (n×n matrix)

Step 2: For each pattern x to be stored:
    
    Step 2a: Calculate weight update
        ΔW = x × xᵀ  (Outer product)
        
        Or element-wise:
        Δwᵢⱼ = xᵢ × xⱼ
    
    Step 2b: Update weight matrix
        W = W + ΔW
        
        Or:
        wᵢⱼ = wᵢⱼ + xᵢ × xⱼ

Step 3: Set diagonal to zero
    For i = 1 to n:
        wᵢᵢ = 0

Step 4: Weight matrix W is ready
```

**Why Zero Diagonal?**

- Prevents self-feedback (neuron feeding back to itself)
- Avoids amplification of input
- Ensures stability
- Standard practice in associative memory

---

### **2.4 Training Algorithm (Outer Product Rule)**

**Outer Product Rule:**

More general than Hebb rule, can store multiple patterns at once.

```
Step 1: For multiple patterns x¹, x², ..., xᵐ:
    
    W = Σ (xᵏ × (xᵏ)ᵀ)  for k = 1 to m
    
    Or:
    W = x¹(x¹)ᵀ + x²(x²)ᵀ + ... + xᵐ(xᵐ)ᵀ

Step 2: Set diagonal to zero
    wᵢᵢ = 0 for all i

Step 3: Weight matrix W is ready
```

**Difference from Hebb Rule:**

| Aspect | Hebb Rule | Outer Product Rule |
|--------|-----------|-------------------|
| **Update** | Incremental | Batch |
| **Formula** | W += x×xᵀ | W = Σ(xᵏ×(xᵏ)ᵀ) |
| **Process** | One pattern at a time | All patterns together |
| **Result** | Same (for single pattern) | Same |

---

### **2.5 Testing/Retrieval Algorithm**

**Retrieval Algorithm:**

```
Step 1: Present input pattern x
    (Can be complete, partial, or noisy)

Step 2: Calculate net input
    y_in = W × x
    
    Or element-wise:
    y_in(i) = Σⱼ wᵢⱼ × xⱼ

Step 3: Apply activation function
    For each output i:
        If y_in(i) > 0:  y(i) = +1
        If y_in(i) < 0:  y(i) = -1
        If y_in(i) = 0:  y(i) = previous value or random

Step 4: Output y is the retrieved pattern

Step 5: (Optional) Iterate if needed
    If y ≠ x:
        Set x = y
        Go to Step 2
    Else:
        Converged (stable state reached)
```

**Activation Function:**

```
Bipolar Step Function:
f(x) = +1  if x > 0
f(x) = -1  if x < 0
f(x) = 0   if x = 0 (keep previous or use 0)
```

---

### **2.6 Complete Example: Auto-Associative Memory**

> PYQ: Store the vector (1 1 -1 -1) in Auto Associative Network (2022, 15 marks with all test cases)

**Problem:** Store the pattern x = [1, 1, -1, -1] in auto-associative memory and test it.

**Step 1: Training (Storage)**

**Given Pattern:**
```
x = [1, 1, -1, -1]ᵀ
```

**Calculate Weight Matrix using Outer Product:**

```
W = x × xᵀ

x × xᵀ = [1]   [1  1  -1  -1]
         [1] ×
         [-1]
         [-1]

W = [1×1   1×1   1×(-1)  1×(-1) ]
    [1×1   1×1   1×(-1)  1×(-1) ]
    [-1×1  -1×1  -1×(-1) -1×(-1)]
    [-1×1  -1×1  -1×(-1) -1×(-1)]

W = [ 1   1  -1  -1]
    [ 1   1  -1  -1]
    [-1  -1   1   1]
    [-1  -1   1   1]
```

**Set Diagonal to Zero:**

```
W = [ 0   1  -1  -1]
    [ 1   0  -1  -1]
    [-1  -1   0   1]
    [-1  -1   1   0]
```

**Final Weight Matrix:**
```
W = [ 0   1  -1  -1]
    [ 1   0  -1  -1]
    [-1  -1   0   1]
    [-1  -1   1   0]
```

---

**Step 2: Testing**

**Test Case (a): Test with Input Vector (Perfect Recall)**

> PYQ: Test the net with input vector (2022)

**Input:** x = [1, 1, -1, -1]ᵀ

**Calculate y_in = W × x:**

```
y_in = [ 0   1  -1  -1] [1 ]
       [ 1   0  -1  -1] [1 ]
       [-1  -1   0   1] [-1]
       [-1  -1   1   0] [-1]

y_in[1] = 0×1 + 1×1 + (-1)×(-1) + (-1)×(-1) = 0 + 1 + 1 + 1 = 3
y_in[2] = 1×1 + 0×1 + (-1)×(-1) + (-1)×(-1) = 1 + 0 + 1 + 1 = 3
y_in[3] = (-1)×1 + (-1)×1 + 0×(-1) + 1×(-1) = -1 - 1 + 0 - 1 = -3
y_in[4] = (-1)×1 + (-1)×1 + 1×(-1) + 0×(-1) = -1 - 1 - 1 + 0 = -3

y_in = [3, 3, -3, -3]ᵀ
```

**Apply Activation Function:**

```
y[1] = sign(3) = +1
y[2] = sign(3) = +1
y[3] = sign(-3) = -1
y[4] = sign(-3) = -1

y = [1, 1, -1, -1]ᵀ
```

**Result:** Output = Input ✓ (Perfect recall!)

---

**Test Case (b): Test with One Mistake in Input**

> PYQ: Test with one mistake in input (2022)

**Input:** x = [1, **-1**, -1, -1]ᵀ (2nd element is wrong, should be 1)

**Calculate y_in = W × x:**

```
y_in = [ 0   1  -1  -1] [1 ]
       [ 1   0  -1  -1] [-1]
       [-1  -1   0   1] [-1]
       [-1  -1   1   0] [-1]

y_in[1] = 0×1 + 1×(-1) + (-1)×(-1) + (-1)×(-1) = 0 - 1 + 1 + 1 = 1
y_in[2] = 1×1 + 0×(-1) + (-1)×(-1) + (-1)×(-1) = 1 + 0 + 1 + 1 = 3
y_in[3] = (-1)×1 + (-1)×(-1) + 0×(-1) + 1×(-1) = -1 + 1 + 0 - 1 = -1
y_in[4] = (-1)×1 + (-1)×(-1) + 1×(-1) + 0×(-1) = -1 + 1 - 1 + 0 = -1

y_in = [1, 3, -1, -1]ᵀ
```

**Apply Activation Function:**

```
y = [1, 1, -1, -1]ᵀ
```

**Result:** Error corrected! ✓ Retrieved correct pattern.

---

**Test Case (c): Test with One Missing in Input**

> PYQ: Test with one missing in input (2022)

**Input:** x = [1, **0**, -1, -1]ᵀ (2nd element is missing, represented as 0)

**Calculate y_in = W × x:**

```
y_in = [ 0   1  -1  -1] [1 ]
       [ 1   0  -1  -1] [0 ]
       [-1  -1   0   1] [-1]
       [-1  -1   1   0] [-1]

y_in[1] = 0×1 + 1×0 + (-1)×(-1) + (-1)×(-1) = 0 + 0 + 1 + 1 = 2
y_in[2] = 1×1 + 0×0 + (-1)×(-1) + (-1)×(-1) = 1 + 0 + 1 + 1 = 3
y_in[3] = (-1)×1 + (-1)×0 + 0×(-1) + 1×(-1) = -1 + 0 + 0 - 1 = -2
y_in[4] = (-1)×1 + (-1)×0 + 1×(-1) + 0×(-1) = -1 + 0 - 1 + 0 = -2

y_in = [2, 3, -2, -2]ᵀ
```

**Apply Activation Function:**

```
y = [1, 1, -1, -1]ᵀ
```

**Result:** Missing data completed! ✓ Retrieved correct pattern.

---

**Test Case (d): Test with Two Missing in Input**

> PYQ: Test with two missing in input (2022)

**Input:** x = [1, **0**, -1, **0**]ᵀ (2nd and 4th elements missing)

**Calculate y_in = W × x:**

```
y_in = [ 0   1  -1  -1] [1 ]
       [ 1   0  -1  -1] [0 ]
       [-1  -1   0   1] [-1]
       [-1  -1   1   0] [0 ]

y_in[1] = 0×1 + 1×0 + (-1)×(-1) + (-1)×0 = 0 + 0 + 1 + 0 = 1
y_in[2] = 1×1 + 0×0 + (-1)×(-1) + (-1)×0 = 1 + 0 + 1 + 0 = 2
y_in[3] = (-1)×1 + (-1)×0 + 0×(-1) + 1×0 = -1 + 0 + 0 + 0 = -1
y_in[4] = (-1)×1 + (-1)×0 + 1×(-1) + 0×0 = -1 + 0 - 1 + 0 = -2

y_in = [1, 2, -1, -2]ᵀ
```

**Apply Activation Function:**

```
y = [1, 1, -1, -1]ᵀ
```

**Result:** Both missing values completed! ✓

---

**Test Case (e): Test with Two Mistakes in Input**

> PYQ: Test with two mistakes in input (2022)

**Input:** x = [1, **-1**, -1, **1**]ᵀ (2nd and 4th elements wrong)

**Calculate y_in = W × x:**

```
y_in = [ 0   1  -1  -1] [1 ]
       [ 1   0  -1  -1] [-1]
       [-1  -1   0   1] [-1]
       [-1  -1   1   0] [1 ]

y_in[1] = 0×1 + 1×(-1) + (-1)×(-1) + (-1)×1 = 0 - 1 + 1 - 1 = -1
y_in[2] = 1×1 + 0×(-1) + (-1)×(-1) + (-1)×1 = 1 + 0 + 1 - 1 = 1
y_in[3] = (-1)×1 + (-1)×(-1) + 0×(-1) + 1×1 = -1 + 1 + 0 + 1 = 1
y_in[4] = (-1)×1 + (-1)×(-1) + 1×(-1) + 0×1 = -1 + 1 - 1 + 0 = -1

y_in = [-1, 1, 1, -1]ᵀ
```

**Apply Activation Function:**

```
y = [-1, 1, 1, -1]ᵀ
```

**Result:** This is NOT the stored pattern! ✗

**Why?** Too many errors (50% corrupted). Network retrieved a different stable state or couldn't correct all errors.

---

**Summary Table:**

| Test Case | Input | y_in | Output | Result |
|-----------|-------|------|--------|--------|
| **(a) Perfect** | [1, 1, -1, -1] | [3, 3, -3, -3] | [1, 1, -1, -1] | ✓ Perfect |
| **(b) 1 Mistake** | [1, -1, -1, -1] | [1, 3, -1, -1] | [1, 1, -1, -1] | ✓ Corrected |
| **(c) 1 Missing** | [1, 0, -1, -1] | [2, 3, -2, -2] | [1, 1, -1, -1] | ✓ Completed |
| **(d) 2 Missing** | [1, 0, -1, 0] | [1, 2, -1, -2] | [1, 1, -1, -1] | ✓ Completed |
| **(e) 2 Mistakes** | [1, -1, -1, 1] | [-1, 1, 1, -1] | [-1, 1, 1, -1] | ✗ Failed |

**Conclusion:**
- Auto-associative memory can handle small amounts of noise/missing data
- Too many errors → Cannot retrieve correct pattern
- Error tolerance depends on pattern similarity and storage capacity

---

## **Section 3: Hetero-Associative Memory**

### **3.1 Introduction to Hetero-Associative Memory**

> PYQ: Describe Hetero Associative Memory (2023, 15 marks)  
> PYQ: Hetero Associative Memory (2024, 2.5 marks)

**Definition:**

**Hetero-Associative Memory** is a type of associative memory where the network associates one pattern (input) with a **different pattern** (output). It creates a mapping from input space to output space.

**Purpose:**

- Pattern association (map A to B)
- Pattern transformation (convert one form to another)
- Classification (input → class label)
- Translation (one language to another)

**Characteristics:**

- Input and output have different dimensions
- Weight matrix is rectangular (m×n)
- Not necessarily symmetric
- Feedforward connections
- One-way mapping

---

### **3.2 Architecture of Hetero-Associative Memory**

**Structure:**

```
Input Layer          Output Layer
(n neurons)          (m neurons)

    x₁ ────────────→ y₁
        ╲         ╱
    x₂ ──╲───────╱─→ y₂
          ╲     ╱
    x₃ ────╲───╱───→ y₃
            ╲ ╱
    x₄ ──────╳─────→ y₄
            ╱ ╲
           ╱   ╲    y₅
          
Fully connected
Feedforward only
```

**Detailed Architecture:**

```
┌─────────────────────────────────────┐
│      Input Vector (x)               │
│      [x₁, x₂, ..., xₙ]             │
│      (n-dimensional)                │
└──────────────┬──────────────────────┘
               │
    ┌──────────▼──────────┐
    │   Weight Matrix W   │
    │      (m × n)        │
    │  Different dimensions│
    └──────────┬──────────┘
               │
    ┌──────────▼──────────┐
    │  Matrix Multiply    │
    │      y = W × x      │
    └──────────┬──────────┘
               │
    ┌──────────▼──────────┐
    │ Activation Function │
    └──────────┬──────────┘
               │
┌──────────────▼──────────────────────┐
│     Output Vector (y)               │
│     [y₁, y₂, ..., yₘ]              │
│     (m-dimensional)                 │
└─────────────────────────────────────┘
```

**Weight Matrix:**

```
For input dimension n and output dimension m:
- Size: m × n (rectangular)
- Not symmetric (generally)
- No zero diagonal requirement
```

---

### **3.3 Training Algorithm (Hebb Rule)**

**Hebb Rule for Hetero-Associative Memory:**

```
Step 1: Initialize
    Set all weights to 0
    W = 0 (m×n matrix)

Step 2: For each pattern pair (x, y):
    Where:
    - x = input pattern (n-dimensional)
    - y = target output pattern (m-dimensional)
    
    Step 2a: Calculate weight update
        ΔW = y × xᵀ  (Outer product)
        
        Or element-wise:
        Δwᵢⱼ = yᵢ × xⱼ
    
    Step 2b: Update weight matrix
        W = W + ΔW
        
        Or:
        wᵢⱼ = wᵢⱼ + yᵢ × xⱼ

Step 3: Weight matrix W is ready
    (No zero diagonal needed)
```

**Note:** Unlike auto-associative, we don't set diagonal to zero because the matrix is rectangular.

---

### **3.4 Training Algorithm (Outer Product Rule)**

**Outer Product Rule for Multiple Pattern Pairs:**

```
Step 1: For pattern pairs (x¹, y¹), (x², y²), ..., (xᵐ, yᵐ):
    
    W = Σ (yᵏ × (xᵏ)ᵀ)  for k = 1 to m
    
    Or:
    W = y¹(x¹)ᵀ + y²(x²)ᵀ + ... + yᵐ(xᵐ)ᵀ

Step 2: Weight matrix W is ready
```

---

### **3.5 Testing/Retrieval Algorithm**

**Retrieval Algorithm:**

```
Step 1: Present input pattern x
    (n-dimensional vector)

Step 2: Calculate net input
    y_in = W × x
    
    Or element-wise:
    y_in(i) = Σⱼ wᵢⱼ × xⱼ

Step 3: Apply activation function
    For each output i:
        If y_in(i) > 0:  y(i) = +1
        If y_in(i) < 0:  y(i) = -1
        If y_in(i) = 0:  y(i) = 0 or random

Step 4: Output y is the associated pattern
    (m-dimensional vector)
```

---

### **3.6 Example: Hetero-Associative Memory**

**Problem:** Associate input patterns with output patterns.

**Given Pattern Pairs:**

```
Pair 1: x¹ = [1, -1]ᵀ  →  y¹ = [1, 1, -1]ᵀ
Pair 2: x² = [-1, 1]ᵀ  →  y² = [-1, -1, 1]ᵀ
```

**Step 1: Training**

**Calculate Weight Matrix:**

```
W = y¹(x¹)ᵀ + y²(x²)ᵀ

y¹(x¹)ᵀ = [1 ]  [1  -1]  = [ 1  -1]
          [1 ] ×           [ 1  -1]
          [-1]             [-1   1]

y²(x²)ᵀ = [-1]  [-1  1]  = [ 1  -1]
          [-1] ×           [ 1  -1]
          [1 ]             [-1   1]

W = [ 1  -1]  +  [ 1  -1]  =  [ 2  -2]
    [ 1  -1]     [ 1  -1]     [ 2  -2]
    [-1   1]     [-1   1]     [-2   2]
```

**Final Weight Matrix:**
```
W = [ 2  -2]
    [ 2  -2]
    [-2   2]
```

---

**Step 2: Testing**

**Test 1: Input x¹ = [1, -1]ᵀ**

```
y_in = W × x¹

y_in = [ 2  -2] [1 ]  = [2×1 + (-2)×(-1)]  = [2+2]  = [4 ]
       [ 2  -2] [-1]    [2×1 + (-2)×(-1)]    [2+2]    [4 ]
       [-2   2]         [(-2)×1 + 2×(-1)]    [-2-2]   [-4]

y_in = [4, 4, -4]ᵀ
```

**Apply Activation:**
```
y = [1, 1, -1]ᵀ  ✓ (Correct! Matches y¹)
```

**Test 2: Input x² = [-1, 1]ᵀ**

```
y_in = [ 2  -2] [-1]  = [2×(-1) + (-2)×1]  = [-2-2]  = [-4]
       [ 2  -2] [1 ]    [2×(-1) + (-2)×1]    [-2-2]    [-4]
       [-2   2]         [(-2)×(-1) + 2×1]    [2+2]     [4 ]

y_in = [-4, -4, 4]ᵀ
```

**Apply Activation:**
```
y = [-1, -1, 1]ᵀ  ✓ (Correct! Matches y²)
```

**Result:** Both associations retrieved correctly!

---

### **3.7 Comparison: Auto vs Hetero Associative**

| Aspect | Auto-Associative | Hetero-Associative |
|--------|------------------|-------------------|
| **Input-Output** | Same pattern | Different patterns |
| **Dimensions** | Same (n → n) | Different (n → m) |
| **Weight Matrix** | Square (n×n) | Rectangular (m×n) |
| **Symmetry** | Symmetric | Not symmetric |
| **Diagonal** | Zero | Any value |
| **Purpose** | Pattern completion | Pattern association |
| **Example** | Restore image | Face → Name |
| **Feedback** | Yes | No (feedforward) |
| **Formula** | W = x×xᵀ | W = y×xᵀ |

---

## **Section 4: Storage Capacity**

### **4.1 What is Storage Capacity?**

> PYQ: Discuss the concept of Storage capacity in Associative Memory. (2022, short answer)

**Definition:**

**Storage Capacity** is the maximum number of patterns that can be reliably stored and retrieved from an associative memory network without significant errors.

**Simple Explanation:**

Like a hard disk:
- Has limited storage space
- Can store only certain number of files
- Too many files → Slower access, errors
- Similarly, neural network has limited capacity

**Factors Affecting Capacity:**

1. **Network Size:** Number of neurons
2. **Pattern Similarity:** How different patterns are
3. **Pattern Dimension:** Size of each pattern
4. **Learning Rule:** Hebb vs other rules
5. **Noise Tolerance:** Acceptable error level

---

### **4.2 Storage Capacity Formula**

**For Auto-Associative Memory:**

```
Maximum Capacity ≈ n / (4 × log(n))

Where:
- n = number of neurons
- Patterns should be random and uncorrelated
```

**Example:**
```
For n = 100 neurons:
Capacity ≈ 100 / (4 × log(100))
Capacity ≈ 100 / (4 × 4.6)
Capacity ≈ 100 / 18.4
Capacity ≈ 5-6 patterns
```

**Practical Rule of Thumb:**

```
Safe Capacity ≈ 0.15 × n

For n = 100: Can store ~15 patterns reliably
```

---

### **4.3 What Happens When Capacity is Exceeded?**

**Problems:**

1. **Spurious States:**
   - Network converges to patterns that were never stored
   - False memories created

2. **Interference:**
   - Stored patterns interfere with each other
   - Cannot retrieve any pattern correctly

3. **Reduced Accuracy:**
   - Increased errors in retrieval
   - Patterns become corrupted

4. **Confusion:**
   - Network confuses similar patterns
   - Retrieves wrong pattern

**Example:**

```
Network with 10 neurons:
- Store 2 patterns: Works perfectly ✓
- Store 5 patterns: Some errors ⚠️
- Store 10 patterns: Many errors ✗
- Store 20 patterns: Complete failure ✗✗
```

---

### **4.4 Improving Storage Capacity**

**Methods:**

1. **Increase Network Size:**
   - More neurons → More capacity
   - But more computation

2. **Use Sparse Patterns:**
   - Patterns with mostly zeros
   - Less interference

3. **Orthogonal Patterns:**
   - Patterns perpendicular to each other
   - No correlation → Better storage

4. **Better Learning Rules:**
   - Pseudo-inverse rule
   - Projection learning
   - Higher capacity than Hebb

5. **Hierarchical Networks:**
   - Multiple layers
   - Distributed storage

---

## **Section 5: Bidirectional Associative Memory (BAM)**

### **5.1 Introduction to BAM**

**Definition:**

**Bidirectional Associative Memory (BAM)** is a type of hetero-associative memory that can retrieve patterns in both directions: from input to output AND from output to input.

**Key Feature:**

```
Forward:  x → y  (Input to Output)
Backward: y → x  (Output to Input)
```

**Simple Explanation:**

Like a two-way dictionary:
- English → Hindi (forward)
- Hindi → English (backward)
- Can translate in both directions

---

### **5.2 Architecture of BAM**

**Structure:**

```
Layer X              Layer Y
(n neurons)          (m neurons)

    x₁ ←──────────→ y₁
        ↖       ↗
    x₂ ←──────────→ y₂
          ↖   ↗
    x₃ ←──────────→ y₃
            ↖
    x₄ ←──────────→ y₄

Bidirectional connections
Can flow both ways
```

**Weight Matrices:**

```
W: n×m matrix (X to Y)
Wᵀ: m×n matrix (Y to X)

Note: Same weights used in both directions!
```

---

### **5.3 BAM Algorithm**

**Training:**

```
Same as hetero-associative memory:
W = Σ (yᵏ × (xᵏ)ᵀ)
```

**Retrieval (Bidirectional):**

```
Forward (X → Y):
    y_in = W × x
    y = f(y_in)

Backward (Y → X):
    x_in = Wᵀ × y
    x = f(x_in)

Iterate until stable:
    x → y → x → y → ... → converge
```

---

### **5.4 Applications of BAM**

**1. Two-Way Translation:**
- English ↔ French
- Text ↔ Speech

**2. Image-Text Association:**
- Image ↔ Description
- Face ↔ Name

**3. Error Correction:**
- Corrupted data ↔ Clean data
- Works from either direction

**4. Pattern Completion:**
- Partial input ↔ Complete pattern
- Can start from either side

---

## **Section 6: Storage and Retrieval Algorithm**

### **6.1 Complete Storage Algorithm**

> PYQ: Explain storage and retrieval algorithm for associative memory. (2023, 15 marks)

**Storage Algorithm (General):**

```
Input: Set of pattern pairs {(x¹, y¹), (x², y²), ..., (xᵐ, yᵐ)}

Step 1: Initialize
    W = 0 (weight matrix)
    Choose learning rule (Hebb or Outer Product)

Step 2: For each pattern pair (xᵏ, yᵏ):
    
    If Auto-Associative (x = y):
        ΔW = xᵏ × (xᵏ)ᵀ
    
    If Hetero-Associative (x ≠ y):
        ΔW = yᵏ × (xᵏ)ᵀ
    
    Update: W = W + ΔW

Step 3: Post-processing
    If Auto-Associative:
        Set diagonal to zero: wᵢᵢ = 0

Step 4: Return W

Output: Trained weight matrix W
```

---

### **6.2 Complete Retrieval Algorithm**

**Retrieval Algorithm (General):**

```
Input: Query pattern x (may be noisy or partial)
       Trained weight matrix W

Step 1: Initialize
    Set current pattern: x_current = x
    Set iteration count: iter = 0
    Set max iterations: max_iter = 10

Step 2: Forward Pass
    y_in = W × x_current
    y = f(y_in)  [Apply activation]

Step 3: Check Convergence
    If Auto-Associative:
        If y = x_current:
            Converged! Return y
    
    If Hetero-Associative:
        Return y (single pass)

Step 4: Update and Iterate (for Auto-Associative)
    x_current = y
    iter = iter + 1
    
    If iter < max_iter:
        Go to Step 2
    Else:
        Return y (max iterations reached)

Output: Retrieved pattern y
```

---

## **Quick Revision Points**

### **Key Concepts:**

**Associative Memory:**
- Content-addressable memory
- Retrieves patterns based on partial/noisy input
- Two types: Auto-associative and Hetero-associative

**Auto-Associative:**
```
Input = Output (same pattern)
W = x × xᵀ (square matrix)
Set diagonal to zero
Purpose: Pattern completion, error correction
```

**Hetero-Associative:**
```
Input ≠ Output (different patterns)
W = y × xᵀ (rectangular matrix)
No zero diagonal
Purpose: Pattern association, mapping
```

### **Training Formulas:**

**Hebb Rule:**
```
Auto: Δwᵢⱼ = xᵢ × xⱼ
Hetero: Δwᵢⱼ = yᵢ × xⱼ
```

**Outer Product:**
```
Auto: W = Σ(xᵏ × (xᵏ)ᵀ)
Hetero: W = Σ(yᵏ × (xᵏ)ᵀ)
```

### **Retrieval:**

```
Step 1: y_in = W × x
Step 2: y = sign(y_in)
Step 3: If auto: iterate until stable
```

### **Storage Capacity:**

```
Maximum ≈ n / (4 × log(n))
Practical ≈ 0.15 × n
```

### **Error Handling:**

- Missing data: Represented as 0
- Mistaken data: Wrong values
- Network corrects if errors < threshold
- Too many errors → Retrieval fails

---

## **Expected Exam Questions**

### **15 Marks Questions:**
1. Auto-associative memory: architecture, training, testing
2. Hetero-associative memory: complete explanation
3. Store vector and test with all error cases (practical)
4. Storage and retrieval algorithms
5. Error handling in associative memory
6. Compare auto and hetero associative memory

### **2.5 Marks Questions:**
1. What is associative memory?
2. Auto-associative memory
3. Hetero-associative memory
4. Storage capacity
5. Bidirectional memory

### **Practical Questions:**
1. Store pattern [1, 1, -1, -1] and test with:
   - Perfect input
   - One mistake
   - One missing
   - Two missing
   - Two mistakes
2. Calculate weight matrix for given patterns
3. Test retrieval with noisy input

---

_These notes were compiled by [Deepak Modi](https://deepakmodi.tech)_  
_Last updated: December 2025_

