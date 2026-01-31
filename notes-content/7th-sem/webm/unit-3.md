# Unit 3: Web Structure Mining Optimization

**Course:** PEC-CSE-405G | **Author:** [Deepak Modi](https://deepakmodi.tech)

**Syllabus:**  
Introduction to Models and Concept of Computational Intelligence, Social Behavior as Optimization: Discrete and Continuous Optimization Problems, Classification of Optimization Algorithms, Evolutionary Computation Theory and Paradigm, Swarm and Collective intelligence.

---

## 🎯 PYQ Analysis for Unit 3

### High Priority Topics ⭐⭐⭐ (15 marks questions)

1. **Computational Intelligence** (2022-Feb, 2023, 2024-May, 2024-Dec)
2. **Classification of Optimization Algorithms** (2022-Jul, 2022-Dec, 2023)
3. **Discrete and Continuous Optimization Problems** (2022-Jul, 2022-Dec, 2024-Dec)
4. **Evolutionary Computation Theory** (2022-Jul, 2023)

### Medium Priority Topics ⭐⭐ (7-8 marks)

5. **Swarm Intelligence** (2022-Feb, 2024-May)
6. **Social Behavior as Optimization** (2022-Dec)

### Short Answer Topics ⭐ (2.5-3 marks)

7. **Define Intelligence** (2022-Feb)
8. **Computational Intelligence** (2023, 2024-May)
9. **Collective Intelligence** (2022-Dec)
10. **Continuous Optimization Problems** (2022-Dec)

---

## **1. Computational Intelligence**

> PYQ: What is computational intelligence and where is it going? What are the various components of computational intelligence? Discuss its computational models in detail with suitable examples. What is the difference between computational intelligence and artificial intelligence? (2022-Feb, 15 marks)  
> PYQ: What is computational intelligence? Explain the evolutionary computation theory and its paradigm. (2023, 15 marks)  
> PYQ: What are the key models and concepts of computational intelligence? How can they be applied to solve complex real-world problems? (2024-Dec, 15 marks)  
> PYQ: Write short notes on Computational intelligence. (2023, 2024-May - 2.5 marks)
> PYQ: Define intelligence. (2022-Feb, 1.875 marks)

### 1.1 What is Computational Intelligence?

**Computational Intelligence (CI)** is a part of artificial intelligence that helps computers act smart in difficult and changing situations.

Instead of using strict rules and logic like traditional AI, CI uses ideas from nature - such as neural networks (like the brain), fuzzy systems (handling unclear information), and evolutionary algorithms (learning by trying and improving).

These methods work well for problems where things are uncertain or not clear, and where normal computer methods do not work well.

### 1.2 Key Characteristics

- **Learns and Adapts**: Improves itself based on experience.
- **Inspired by Nature**: Works like brains, animals, or plants.
- **Handles Uncertainty**: Works well even when things are unclear or noisy.
- **Works Together**: No single boss — many parts work together.
- **Simple Rules, Smart Results**: Follows easy rules to create complex behavior.

### 1.3 Components of Computational Intelligence

Components of Computational Intelligence are the main building blocks or types (like fuzzy systems, neural networks, evolutionary computation, swarm intelligence).

```
Computational Intelligence
│
├── Fuzzy Systems
│   └── Handles uncertainty and imprecision
│
├── Neural Networks
│   └── Learns from data, pattern recognition
│
├── Evolutionary Computation
│   ├── Genetic Algorithms
│   ├── Genetic Programming
│   └── Evolution Strategies
│
└── Swarm Intelligence
    ├── Particle Swarm Optimization
    ├── Ant Colony Optimization
    └── Artificial Bee Colony
```

### 1.4 Computational Models of CI

Models are the specific ways these components work or are implemented (for example, a neural network model, a fuzzy logic model, a genetic algorithm model).

#### 1. Fuzzy Systems

**Concept:** Uses fuzzy logic to deal with information that is not clear or exact. It helps computers make decisions when things are uncertain or vague.

**Key Features:**

- **Linguistic Variables:** Describes inputs/outputs using terms like "hot," "cold," "medium" instead of precise numbers.
- **Membership Functions:** Assigns a degree of belonging (between 0 and 1) to each linguistic term, representing how true a statement is.
- **Fuzzy Rules (IF-THEN):** Uses rules such as "IF temperature is cold THEN heater is high" to make decisions based on imprecise information.

**Example:**

```
Temperature Control System:
IF temperature is COLD THEN heater is HIGH
IF temperature is WARM THEN heater is MEDIUM
IF temperature is HOT THEN heater is OFF
```

**Applications:**

- Air conditioning control
- Washing machine control
- Camera autofocus

#### 2. Neural Networks

**Concept:** Inspired by biological neurons of the brain, learns patterns from data. It learns patterns from examples and can recognize things (like images or sounds) by adjusting its connections based on what it sees.

**Key Features:**

- **Learns from Data:** Can automatically detect patterns and relationships in data.
- **Generalization:** Able to make predictions or recognize unseen data after training.
- **Nonlinear Mapping:** Can model complex, nonlinear relationships.
- **Parallel Processing:** Many neurons work together simultaneously.
- **Fault Tolerance:** Can handle noisy or incomplete data.

**Structure:**

```
Input Layer → Hidden Layers → Output Layer
    │              │              │
    ▼              ▼              ▼
  [x₁]           [h₁]           [y₁]
  [x₂]    →      [h₂]     →     [y₂]
  [x₃]           [h₃]           [y₃]
```

**Learning Process:**

1. Forward propagation (input → output)
2. Calculate error
3. Backpropagation (adjust weights)
4. Repeat until convergence

**Applications:**

- Image recognition
- Speech recognition
- Natural language processing

#### 3. Evolutionary Computation

**Concept:** Evolutionary computation is inspired by the process of biological evolution, using mechanisms such as selection (choosing the best solutions), crossover (combining parts of solutions), and mutation (introducing random changes) to evolve a population of candidate solutions toward optimality.

**Key Features:**

- **Population-based search:** Works with a group of solutions at once.
- **Stochastic operators:** Uses random processes (mutation, crossover) to explore new solutions.
- **Selection pressure:** Favors better solutions for reproduction.
- **Adaptation:** Solutions improve over generations.

**Process:**

```
Initialize Population
    │
    ▼
Evaluate Fitness
    │
    ▼
Selection (best individuals)
    │
    ▼
Crossover (combine solutions)
    │
    ▼
Mutation (random changes)
    │
    ▼
New Generation
    │
    └──► Repeat until optimal solution
```

**Applications:**

- Optimization problems
- Scheduling
- Design optimization

#### 4. Swarm Intelligence

**Concept:** Swarm intelligence means many simple agents (like ants or birds) work together without a leader. Each agent follows simple rules and interacts with others nearby. Their combined actions create smart group behavior that solves problems, even though each agent is not smart on its own.

In this context, a "swarm" means a group of simple agents (like birds, ants, bees, or fish) that work together without a leader.

**Key Features:**

- **Decentralized Control**: No central leader; each agent acts independently.
- **Simple Local Rules**: Agents follow basic rules based on local information.
- **Self-Organization**: Order and patterns emerge from agent interactions.
- **Flexibility**: Adapts to changes in environment or problem.
- **Robustness**: System works even if some agents fail.
- **Parallelism**: Many agents search for solutions at the same time.

**Examples:**

- Ant colonies finding shortest path
- Bird flocks coordinating movement
- Bee swarms finding food sources

**Applications:**

- Routing optimization
- Clustering
- Function optimization

### 1.5 Computational Intelligence vs Artificial Intelligence

| Aspect                   | Artificial Intelligence (AI)      | Computational Intelligence (CI)     |
| ------------------------ | --------------------------------- | ----------------------------------- |
| **Approach**             | Symbolic, logic-based             | Sub-symbolic, nature-inspired       |
| **Knowledge**            | Explicit rules, knowledge base    | Implicit learning from data         |
| **Reasoning**            | Deductive reasoning               | Inductive learning                  |
| **Handling Uncertainty** | Probability theory                | Fuzzy logic, soft computing         |
| **Examples**             | Expert systems, logic programming | Neural networks, genetic algorithms |
| **Problem Solving**      | Top-down (rules → solution)       | Bottom-up (data → patterns)         |
| **Adaptability**         | Limited                           | High adaptability                   |

**Relationship:**

- CI is a subset of AI
- AI is broader, includes both symbolic and sub-symbolic approaches
- CI focuses on learning and adaptation
- Modern AI systems often combine both approaches

### 1.6 Applications of Computational Intelligence

| Domain             | Application           | CI Technique           |
| ------------------ | --------------------- | ---------------------- |
| **Healthcare**     | Disease diagnosis     | Neural networks        |
| **Finance**        | Stock prediction      | Fuzzy systems, NN      |
| **Manufacturing**  | Quality control       | Fuzzy logic            |
| **Transportation** | Route optimization    | Swarm intelligence     |
| **Robotics**       | Autonomous navigation | Neural networks, fuzzy |
| **Energy**         | Load forecasting      | Neural networks        |

---

## **2. Optimization**

### 2.1 What is Optimization?

**Optimization** is the process of finding the best solution from all feasible solutions for a given problem. It involves maximizing or minimizing an objective function while satisfying a set of constraints.

In real-world applications, optimization helps in making the most efficient use of available resources, reducing costs, maximizing profits, or improving performance. The goal is to find the optimal values of decision variables that produce the best outcome according to specified criteria.

**General Optimization Problem:**

```
Minimize/Maximize: f(x)    (objective function)
Subject to:        g(x) ≤ 0  (inequality constraints)
                   h(x) = 0  (equality constraints)
                   x ∈ S     (search space)
```

### 2.2 Components of Optimization Problem

| Component              | Description                   | Example                |
| ---------------------- | ----------------------------- | ---------------------- |
| **Decision Variables** | Variables to be optimized     | x₁, x₂, ..., xₙ        |
| **Objective Function** | Function to minimize/maximize | Cost, profit, distance |
| **Constraints**        | Restrictions on variables     | Budget limit, capacity |
| **Search Space**       | Feasible region               | All valid solutions    |

### 2.3 Types of Optimization

```
Optimization Problems
│
├── Based on Variables
│   ├── Discrete Optimization
│   └── Continuous Optimization
│
├── Based on Constraints
│   ├── Constrained
│   └── Unconstrained
│
├── Based on Objectives
│   ├── Single-Objective
│   └── Multi-Objective
│
└── Based on Nature
    ├── Linear Programming
    ├── Nonlinear Programming
    └── Dynamic Programming
```

---

## **3. Discrete and Continuous Optimization Problems**

> PYQ: Differentiate discrete and continuous optimization. (2022-Feb, 1.875 marks)  
> PYQ: Explain discrete and continuous optimization problems. (2022-Jul, 15 marks)  
> PYQ: Discrete and continuous optimization problems. (2022-Dec, 8 marks)  
> PYQ: Discuss the discrete and continuous optimization problems in detail. (2024-May, 15 marks)  
> PYQ: Describe discrete and continuous optimization problems. (2024-Dec, 8 marks)

### 3.1 Discrete Optimization Problems

**Definition:** Optimization problems where decision variables can take only discrete (integer) values.

**Characteristics:**

- Variables: x ∈ {0, 1, 2, 3, ...}
- Finite or countable solution space
- Often NP-hard problems
- Requires combinatorial methods

**Examples:**

#### 1. Traveling Salesman Problem (TSP)

```
Problem: Visit n cities exactly once and return to start
Objective: Minimize total distance
Variables: Order of cities (discrete sequence)

Example with 4 cities:
Routes: (1→2→3→4→1), (1→3→2→4→1), etc.
Total possible routes: (n-1)!/2
```

#### 2. Knapsack Problem

```
Problem: Select items to maximize value within weight limit
Objective: Maximize Σ(vᵢ × xᵢ)
Constraint: Σ(wᵢ × xᵢ) ≤ W
Variables: xᵢ ∈ {0, 1} (item selected or not)

Example:
Items: {(v=10, w=5), (v=20, w=10), (v=15, w=8)}
Capacity: W = 15
Solution: Select items 1 and 3 → value = 25
```

#### 3. Job Scheduling Problem

```
Problem: Assign n jobs to m machines
Objective: Minimize completion time
Variables: Job-machine assignment (discrete)
```

#### 4. Graph Coloring Problem

```
Problem: Color graph nodes with minimum colors
Constraint: Adjacent nodes have different colors
Variables: Color assignment (discrete)
```

**Common Discrete Optimization Problems:**

| Problem         | Description                             | Application         |
| --------------- | --------------------------------------- | ------------------- |
| **TSP**         | Find shortest route visiting all cities | Logistics, delivery |
| **Knapsack**    | Select items within capacity            | Resource allocation |
| **Assignment**  | Assign tasks to workers                 | Project management  |
| **Bin Packing** | Pack items into minimum bins            | Storage, shipping   |
| **Scheduling**  | Schedule tasks on machines              | Manufacturing       |

**Solution Methods:**

- Branch and Bound
- Dynamic Programming
- Genetic Algorithms
- Simulated Annealing
- Ant Colony Optimization

### 3.2 Continuous Optimization Problems

**Definition:** Optimization problems where decision variables can take any real value within a range.

**Characteristics:**

- Variables: x ∈ ℝ (real numbers)
- Infinite solution space
- Uses calculus-based methods
- Gradient information available

**Examples:**

#### 1. Function Minimization

```
Problem: Minimize f(x) = x² + 2x + 1
Solution: Take derivative, set to 0
f'(x) = 2x + 2 = 0
x = -1 (optimal solution)
```

#### 2. Portfolio Optimization

```
Problem: Allocate investment across assets
Objective: Maximize return, minimize risk
Variables: xᵢ = fraction invested in asset i (continuous)
Constraint: Σxᵢ = 1, xᵢ ≥ 0
```

#### 3. Engineering Design

```
Problem: Design optimal beam dimensions
Variables: Length, width, height (continuous)
Objective: Minimize weight
Constraints: Strength, deflection limits
```

#### 4. Neural Network Training

```
Problem: Find optimal weights
Objective: Minimize error function
Variables: Weights wᵢⱼ (continuous)
Method: Gradient descent
```

**Common Continuous Optimization Problems:**

| Problem                   | Description                          | Application            |
| ------------------------- | ------------------------------------ | ---------------------- |
| **Linear Programming**    | Linear objective, linear constraints | Resource allocation    |
| **Quadratic Programming** | Quadratic objective                  | Portfolio optimization |
| **Nonlinear Programming** | Nonlinear functions                  | Engineering design     |
| **Convex Optimization**   | Convex objective function            | Machine learning       |

**Solution Methods:**

- Gradient Descent
- Newton's Method
- Conjugate Gradient
- Particle Swarm Optimization
- Differential Evolution

### 3.3 Comparison: Discrete vs Continuous

| Aspect           | Discrete Optimization                                                                 | Continuous Optimization                                                        |
| ---------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Variables**    | Decision variables can only take integer or specific discrete values (e.g., 0, 1, 2)  | Decision variables can take any value within a range (real numbers, ℝ)         |
| **Search Space** | Solution space is finite or countable; each possible combination is explicitly listed | Solution space is infinite; values can vary smoothly within intervals          |
| **Complexity**   | Problems are often NP-hard; solution time grows rapidly with problem size             | Many problems (especially convex) can be solved efficiently (polynomial time)  |
| **Methods**      | Uses combinatorial algorithms (branch & bound, dynamic programming, metaheuristics)   | Uses calculus-based methods (gradient descent, Newton’s method, PSO, etc.)     |
| **Gradient**     | Gradient information is not available or useful; relies on discrete steps             | Gradient and derivative information can be used to guide search                |
| **Examples**     | Traveling Salesman Problem, knapsack, job scheduling, graph coloring                  | Function minimization, portfolio optimization, engineering design, NN training |
| **Difficulty**   | Hard to guarantee finding the global optimum due to combinatorial explosion           | May get stuck in local optima; requires techniques to escape                   |

### 3.4 Mixed-Integer Optimization

**Definition:** Problems with both discrete and continuous variables.

**Example:**

```
Production Planning:
- Discrete: Number of machines to use
- Continuous: Production quantity per machine
```

---

## **4. Social Behavior as Optimization**

> PYQ: Social behavior as optimization. (2022-Dec, 7 marks)

### 4.1 Concept

**Social Behavior as Optimization** means solving problems by copying how groups of animals (like ants, bees, birds, or fish) work together. Each animal follows simple rules, but together they find smart solutions to difficult problems.

### 4.2 Characteristics of Social Behavior

| Characteristic          | Description                            |
| ----------------------- | -------------------------------------- |
| **Self-Organization**   | Order emerges without central control  |
| **Distributed Control** | No leader, all agents equal            |
| **Positive Feedback**   | Amplifies good solutions               |
| **Negative Feedback**   | Dampens poor solutions                 |
| **Stigmergy**           | Indirect communication via environment |

### 4.3 Examples from Nature

#### 1. Ant Foraging Behavior

```
Ants finding shortest path to food:

1. Ants explore randomly
2. Leave pheromone trail
3. Shorter paths → more pheromone (faster return)
4. More ants follow stronger trails
5. Converges to shortest path

Optimization Analogy:
- Ants = candidate solutions
- Pheromone = solution quality
- Path = optimization problem
```

#### 2. Bird Flocking

```
Birds coordinating movement:

Rules:
1. Separation: Avoid crowding
2. Alignment: Match velocity of neighbors
3. Cohesion: Move toward center of flock

Result: Coordinated group movement

Optimization Analogy:
- Birds = particles
- Flock center = best solution
- Movement = search process
```

#### 3. Bee Foraging

```
Bees finding best flower patches:

1. Scout bees explore randomly
2. Return and perform waggle dance
3. Dance intensity ∝ food quality
4. More bees recruited to better patches
5. Optimal resource allocation

Optimization Analogy:
- Bees = search agents
- Food quality = objective function
- Dance = information sharing
```

### 4.4 Advantages of Social Behavior Optimization

| Advantage       | Description                                |
| --------------- | ------------------------------------------ |
| **Robustness**  | Failure of individuals doesn't stop system |
| **Flexibility** | Adapts to changing environments            |
| **Scalability** | Works with any population size             |
| **Simplicity**  | Simple rules, complex behavior             |
| **Parallelism** | Multiple agents search simultaneously      |

---

## **5. Classification of Optimization Algorithms**

> PYQ: What is the classification of optimization? What are the types of optimization algorithms? How to choose the right optimization algorithm? (2022-Feb, 7.5 marks)  
> PYQ: How can we classify optimization algorithms? Explain in detail. (2022-Jul, 15 marks)  
> PYQ: How are optimization algorithms classified? Explain in detail. (2022-Dec, 15 marks)  
> PYQ: What are optimization algorithms? Explain in detail. (2023, 15 marks)  
> PYQ: Compare the various types of optimization algorithms, highlighting their key characteristics. (2024-Dec, 7 marks)

### 5.1 Classification Based on Approach

```
Optimization Algorithms
│
├── Exact Algorithms
│   ├── Linear Programming (Simplex)
│   ├── Dynamic Programming
│   ├── Branch and Bound
│   └── Integer Programming
│
├── Approximate Algorithms
│   ├── Heuristic Algorithms
│   └── Metaheuristic Algorithms
│
└── Hybrid Algorithms
    └── Combination of multiple methods
```

### 5.2 Exact Algorithms

**Definition:** Guarantee to find optimal solution (if exists).

| Algorithm               | Description             | Complexity        | Application             |
| ----------------------- | ----------------------- | ----------------- | ----------------------- |
| **Linear Programming**  | Solves linear problems  | Polynomial        | Resource allocation     |
| **Dynamic Programming** | Breaks into subproblems | Pseudo-polynomial | Knapsack, shortest path |
| **Branch and Bound**    | Systematic enumeration  | Exponential       | TSP, scheduling         |

**Advantages:**

- Guaranteed optimal solution if one exists
- Provable correctness

**Disadvantages:**

- Computationally expensive for large problems
- Not suitable for NP-hard problems

### 5.3 Heuristic Algorithms

> PYQ: Write short notes on Heuristic algorithms. (2022-Jul, 3 marks)

**Definition:** Problem-specific rules that give good (not necessarily optimal) solutions quickly.

**Examples:**

#### 1. Greedy Algorithms

```
Approach: Make locally optimal choice at each step
Example: Minimum Spanning Tree (Kruskal's, Prim's)
```

#### 2. Divide and Conquer

```
Approach: Break problem into smaller subproblems
Example: Merge Sort, Quick Sort
```

**Advantages:**

- Fast execution
- Simple to implement

**Disadvantages:**

- No guarantee of optimality
- Problem-specific

### 5.4 Metaheuristic Algorithms

**Definition:** General-purpose optimization strategies that can be applied to various problems.

```
Metaheuristic Algorithms
│
├── Single-Solution Based
│   ├── Simulated Annealing
│   ├── Tabu Search
│   └── Hill Climbing
│
├── Population-Based
│   ├── Evolutionary Algorithms
│   │   ├── Genetic Algorithm
│   │   ├── Genetic Programming
│   │   └── Evolution Strategies
│   │
│   └── Swarm Intelligence
│       ├── Particle Swarm Optimization
│       ├── Ant Colony Optimization
│       ├── Artificial Bee Colony
│       └── Firefly Algorithm
│
└── Hybrid Metaheuristics
    └── Combination of above
```

#### A. Single-Solution Based Metaheuristics

**1. Simulated Annealing**

```
Inspired by: Annealing in metallurgy
Process:
1. Start with random solution
2. Generate neighbor solution
3. Accept if better, or with probability if worse
4. Decrease temperature gradually
5. Repeat until convergence

Advantage: Can escape local optima
```

**2. Tabu Search**

```
Concept: Maintain tabu list of recent moves
Process:
1. Start with initial solution
2. Explore neighborhood
3. Select best non-tabu move
4. Update tabu list
5. Repeat

Advantage: Avoids cycling
```

#### B. Population-Based Metaheuristics

**1. Genetic Algorithm (GA)**

```
Inspired by: Natural evolution
Process:
1. Initialize population
2. Evaluate fitness
3. Selection (best individuals)
4. Crossover (combine solutions)
5. Mutation (random changes)
6. Replace population
7. Repeat

Operators:
- Selection: Roulette wheel, tournament
- Crossover: Single-point, multi-point
- Mutation: Bit flip, swap
```

**2. Particle Swarm Optimization (PSO)**

```
Inspired by: Bird flocking
Process:
1. Initialize particles with random positions/velocities
2. Evaluate fitness
3. Update personal best and global best
4. Update velocity and position
5. Repeat

Equations:
v(t+1) = w×v(t) + c₁×r₁×(pbest - x) + c₂×r₂×(gbest - x)
x(t+1) = x(t) + v(t+1)
```

**3. Ant Colony Optimization (ACO)**

```
Inspired by: Ant foraging
Process:
1. Initialize pheromone trails
2. Ants construct solutions
3. Update pheromones (evaporation + deposit)
4. Repeat

Pheromone update:
τ(t+1) = (1-ρ)×τ(t) + Δτ
```

### 5.5 Comparison of Metaheuristic Algorithms

| Algorithm               | Type       | Inspiration   | Best For            | Complexity |
| ----------------------- | ---------- | ------------- | ------------------- | ---------- |
| **Genetic Algorithm**   | Population | Evolution     | Discrete problems   | Medium     |
| **PSO**                 | Population | Bird flocking | Continuous problems | Low        |
| **ACO**                 | Population | Ant foraging  | Combinatorial       | Medium     |
| **Simulated Annealing** | Single     | Metallurgy    | General purpose     | Low        |
| **Tabu Search**         | Single     | Memory        | Discrete problems   | Medium     |

### 5.6 How to Choose the Right Algorithm?

**Decision Factors:**

| Factor                | Consideration                                   |
| --------------------- | ----------------------------------------------- |
| **Problem Type**      | Discrete → GA, ACO; Continuous → PSO            |
| **Problem Size**      | Small → Exact; Large → Metaheuristic            |
| **Time Constraints**  | Limited time → Heuristic                        |
| **Solution Quality**  | Optimal needed → Exact; Good enough → Heuristic |
| **Problem Structure** | Known structure → Problem-specific heuristic    |
| **Constraints**       | Many constraints → Specialized algorithms       |

**Selection Guidelines:**

```
Start
  │
  ▼
Small problem? ──Yes──► Use Exact Algorithm
  │
  No
  ▼
Discrete variables? ──Yes──► GA, ACO, Tabu Search
  │
  No
  ▼
Continuous variables? ──Yes──► PSO, Differential Evolution
  │
  ▼
Combinatorial? ──Yes──► ACO, GA
  │
  ▼
Try multiple algorithms and compare
```

---

## **6. Evolutionary Computation Theory and Paradigm**

> PYQ: Discuss the principle of evolutionary computation theory. (2022-Feb, 1.875 marks)  
> PYQ: Explain evolutionary computation theory. (2022-Jul, 15 marks)

### 6.1 What is Evolutionary Computation?

**Evolutionary Computation (EC)** is a family of optimization algorithms inspired by the principles of biological evolution. It mimics the process of natural selection where the fittest individuals survive and reproduce, passing their characteristics to the next generation.

EC uses mechanisms like selection, recombination (crossover), and mutation to evolve a population of candidate solutions toward better solutions over successive generations. This approach is particularly effective for complex optimization problems where traditional methods fail or are too slow.

### 6.2 Biological Evolution Principles

| Biological Concept | EC Equivalent         |
| ------------------ | --------------------- |
| **Individual**     | Candidate solution    |
| **Population**     | Set of solutions      |
| **Fitness**        | Solution quality      |
| **Chromosome**     | Encoded solution      |
| **Gene**           | Solution component    |
| **Selection**      | Choose best solutions |
| **Crossover**      | Combine solutions     |
| **Mutation**       | Random modification   |
| **Generation**     | Iteration             |

### 6.3 Evolutionary Computation Paradigm

This diagram shows how evolutionary algorithms work: they keep improving a group of solutions by repeating selection, crossover, and mutation until the best answer is found.
The process stops when a good enough solution is reached or after a set number of cycles.

```
┌─────────────────────────────────────────────────┐
│         EVOLUTIONARY COMPUTATION CYCLE          │
└─────────────────────────────────────────────────┘
                     │
            ┌────────▼─────────┐
            │    Initialize    │
            │    Population    │
            └────────┬─────────┘
            ┌────────▼─────────┐
            │     Evaluate     │
            │     Fitness      │
            └────────┬─────────┘
            ┌────────▼─────────┐
            │   Termination?   │── Yes ──► Best Solution
            └────────┬─────────┘
                     │ No
            ┌────────▼─────────┐
            │    Selection     │
            │  (Choose Parents)│
            └────────┬─────────┘
            ┌────────▼─────────┐
            │    Crossover     │
            │ (Recombination)  │
            └────────┬─────────┘
            ┌────────▼─────────┐
            │     Mutation     │
            │ (Random Changes) │
            └────────┬─────────┘
            ┌────────▼─────────┐
            │  New Population  │
            └────────┬─────────┘
                     └──────► Back to Evaluate
```

### 6.4 Key Components of Evolutionary Algorithms

#### 1. Representation (Encoding)

**Binary Encoding:**

```
Solution: [1, 0, 1, 1, 0, 1, 0, 0]
Example: Knapsack problem (item selected = 1)
```

**Real-Value Encoding:**

```
Solution: [3.5, 2.1, 7.8, 4.2]
Example: Function optimization
```

**Permutation Encoding:**

```
Solution: [3, 1, 4, 2, 5]
Example: TSP (city visit order)
```

#### 2. Fitness Function

**Purpose:** Evaluates solution quality

**Example:**

```
Maximization problem: fitness = f(x)
Minimization problem: fitness = 1/f(x) or -f(x)
```

#### 3. Selection Methods

**a) Roulette Wheel Selection**

```
Probability of selection ∝ fitness
P(i) = fitness(i) / Σfitness(all)

Example:
Individual 1: fitness = 10, P = 10/30 = 33%
Individual 2: fitness = 15, P = 15/30 = 50%
Individual 3: fitness = 5,  P = 5/30  = 17%
```

**b) Tournament Selection**

```
1. Randomly select k individuals
2. Choose best among them
3. Repeat for each parent needed
```

**c) Rank-Based Selection**

```
Selection based on rank, not absolute fitness
Avoids premature convergence
```

#### 4. Crossover (Recombination)

**a) Single-Point Crossover**

```
Parent 1: [1 1 0 | 1 0 1 0]
Parent 2: [0 1 1 | 0 1 0 1]
          ────────┼──────────
Child 1:  [1 1 0 | 0 1 0 1]
Child 2:  [0 1 1 | 1 0 1 0]
```

**b) Two-Point Crossover**

```
Parent 1: [1 1 | 0 1 0 | 1 0]
Parent 2: [0 1 | 1 0 1 | 0 1]
          ─────┼───────┼─────
Child 1:  [1 1 | 1 0 1 | 1 0]
Child 2:  [0 1 | 0 1 0 | 0 1]
```

**c) Uniform Crossover**

```
Randomly select genes from each parent
Mask:     [1 0 1 0 1 1 0]
Parent 1: [1 1 0 1 0 1 0]
Parent 2: [0 1 1 0 1 0 1]
Child:    [1 1 1 1 1 1 1]
          (from P1 if mask=1, P2 if mask=0)
```

#### 5. Mutation

**a) Bit Flip Mutation (Binary)**

```
Before: [1 1 0 1 0 1 0]
After:  [1 1 0 0 0 1 0]  (4th bit flipped)
```

**b) Swap Mutation (Permutation)**

```
Before: [3 1 4 2 5]
After:  [3 5 4 2 1]  (positions 2 and 5 swapped)
```

**c) Gaussian Mutation (Real-valued)**

```
x' = x + N(0, σ)  (add Gaussian noise)
```

### 6.5 Types of Evolutionary Algorithms

#### 1. Genetic Algorithm (GA)

- Binary/integer encoding
- Fitness-proportionate selection
- Crossover + mutation
- Best for discrete problems

#### 2. Genetic Programming (GP)

- Tree-based encoding
- Evolves programs/expressions
- Crossover swaps subtrees
- Best for symbolic regression

#### 3. Evolution Strategies (ES)

- Real-valued encoding
- Self-adaptive mutation
- (μ, λ) or (μ + λ) selection
- Best for continuous optimization

#### 4. Differential Evolution (DE)

- Real-valued encoding
- Mutation: v = x₁ + F×(x₂ - x₃)
- Crossover with trial vector
- Best for numerical optimization

### 6.6 Advantages and Disadvantages

**Advantages:**
| Advantage | Description |
|-----------|-------------|
| **Global Search** | Can find global optimum |
| **Parallelizable** | Population-based |
| **Flexible** | Works on various problems |
| **No Gradient** | Doesn't need derivatives |
| **Robust** | Handles noise well |

**Disadvantages:**
| Disadvantage | Description |
|--------------|-------------|
| **Computationally Expensive** | Many fitness evaluations |
| **Parameter Tuning** | Requires parameter adjustment |
| **No Guarantee** | May not find optimal |
| **Premature Convergence** | May get stuck in local optima |

---

## **7. Swarm and Collective Intelligence**

> PYQ: What is swarm intelligence and why is it used? How does swarm intelligence work? What type of multi-agent learning is swarm intelligence? (2022-Feb, 7.5 marks)  
> PYQ: Explain swarm intelligence along with collective intelligence. (2024-May, 15 marks)  
> PYQ: Write short notes on Swarm intelligence. (2024-May, 2.5 marks)  
> PYQ: Write short notes on Collective intelligence. (2022-Dec, 3 marks)

### 7.1 What is Swarm Intelligence?

**Swarm Intelligence (SI)** means smart group behavior that comes from many simple agents working together. It is inspired by the social behavior of insects and animals such as ants, bees, birds, and fish.

In swarm intelligence, each agent follows easy rules and interacts with others nearby. There is no leader or central control. By working together, the group can solve problems or act in smart ways that single agents cannot do alone.

### 7.2 Why Swarm Intelligence?

| Reason               | Description                                          |
| -------------------- | ---------------------------------------------------- |
| **Robustness**       | System continues even if agents fail                 |
| **Flexibility**      | Adapts to changing environments                      |
| **Scalability**      | Works with any number of agents                      |
| **Simplicity**       | Simple individual rules, complex collective behavior |
| **Decentralization** | No single point of failure                           |

### 7.3 Principles of Swarm Intelligence

1. **Self-Organization**: Order emerges from local interactions
2. **Positive Feedback**: Amplifies good solutions
3. **Negative Feedback**: Dampens poor solutions
4. **Randomness**: Exploration of solution space
5. **Multiple Interactions**: Agents interact with each other and environment

### 7.4 Examples in Nature

| Example           | Behavior                           | Application          |
| ----------------- | ---------------------------------- | -------------------- |
| **Ant Colonies**  | Pheromone trails for shortest path | Routing algorithms   |
| **Bird Flocking** | Coordinated movement               | Traffic optimization |
| **Bee Swarms**    | Collective decision-making         | Resource allocation  |
| **Fish Schools**  | Predator avoidance                 | Sensor networks      |

---

## **8. Collective Intelligence**

### 8.1 Definition

**Collective Intelligence** is the smart results that come from many people or agents working together and sharing ideas. It goes beyond simple rule-following (like in swarms) and uses the knowledge, skills, and experience of each member to solve problems or make decisions that are hard for one person alone. Examples include Wikipedia, online forums, and group decision-making.

### 8.2 Collective Intelligence vs Swarm Intelligence

| Aspect            | Swarm Intelligence         | Collective Intelligence       |
| ----------------- | -------------------------- | ----------------------------- |
| **Agents**        | Simple, homogeneous        | Can be complex, heterogeneous |
| **Communication** | Indirect (stigmergy)       | Direct and indirect           |
| **Examples**      | Ants, bees, birds          | Human crowds, Wikipedia       |
| **Intelligence**  | Emergent from simple rules | Can involve reasoning         |

### 8.3 Applications

- **Crowdsourcing**: Wikipedia, open-source projects
- **Prediction Markets**: Collective forecasting
- **Social Networks**: Trend detection
- **Collaborative Filtering**: Recommendation systems

---

## **Summary Table: Unit 3 Key Concepts**

| Topic                          | Key Points                                                    |
| ------------------------------ | ------------------------------------------------------------- |
| **Computational Intelligence** | Neural networks, fuzzy systems, evolutionary algorithms       |
| **Optimization**               | Finding best solution from feasible solutions                 |
| **Discrete Optimization**      | Finite set of solutions (TSP, knapsack)                       |
| **Continuous Optimization**    | Infinite solution space (function minimization)               |
| **Optimization Algorithms**    | Exact (guaranteed optimal) vs Heuristic (good solutions)      |
| **Evolutionary Computation**   | Genetic algorithms, evolution strategies, genetic programming |
| **Swarm Intelligence**         | Collective behavior of decentralized agents                   |
| **Collective Intelligence**    | Shared intelligence from collaboration                        |

---

## **Expected Questions for Exam**

### 15 Marks Questions

1. Computational Intelligence (models, components, CI vs AI)
2. Classification of Optimization Algorithms
3. Discrete and Continuous Optimization Problems
4. Evolutionary Computation Theory and Paradigm
5. Swarm Intelligence with Collective Intelligence

### 7-8 Marks Questions

1. Social Behavior as Optimization
2. Types of Optimization Algorithms
3. Evolutionary Computation Theory
4. Swarm Intelligence

### 2.5-3 Marks Questions

1. Define Intelligence / Computational Intelligence
2. Discrete vs Continuous Optimization
3. Heuristic Algorithms
4. Collective Intelligence

---

_These notes were compiled by [Deepak Modi](https://deepakmodi.tech)_  
_Last updated: December 2025_
