---
title: "Unit 4: Web Usage Mining and Swarm Intelligence"
description: "PSO, ACO, Firefly algorithm, swarm technique hybridization, and real-world applications"
author: "Deepak Modi"
date: "2025-06-15"
pdfUrl: ""
---

## Syllabus:

Particle Swarm Optimization, Ant Colony Optimization, Artificial Bees and Firefly Algorithm etc., Hybridization and Comparisons of Swarm Techniques, Application of Swarm Techniques in Different Domains and Real World Problems.

---

## 🎯 PYQ Analysis for Unit 4

### High Priority Topics ⭐⭐⭐ (15 marks questions)

1. **Ant Colony Optimization** (2022-Feb, 2022-Jul, 2024-May, 2024-Dec)
2. **Applications of Swarm Techniques** (2022-Feb, 2022-Jul, 2022-Dec, 2023, 2024-May, 2024-Dec)

### Medium Priority Topics ⭐⭐ (7-8 marks)

3. **Particle Swarm Optimization** (2022-Dec, 2024-Dec)
4. **Artificial Bees Algorithm** (2022-Jul, 2023)
5. **Firefly Algorithm** (2022-Dec, 2023)
6. **Hybridization and Comparisons** (2022-Feb, 2024-Dec)
7. **Swarm Optimization** (2023)

### Short Answer Topics ⭐ (2.5-3 marks)

8. **Characteristics of Artificial Bees** (2022-Feb)

---

## **1. Particle Swarm Optimization (PSO)**

> PYQ: Particle swarm optimization. (2022-Dec, 8 marks)  
> PYQ: Ant colony optimization and particle swarm optimization. (2024-Dec, 8 marks)

### 1.1 Introduction to PSO

**Particle Swarm Optimization (PSO)** is a population-based optimization algorithm inspired by how birds flock together to find food. Developed by Kennedy and Eberhart in 1995.

Imagine a group of birds searching for food in a large field. Each bird (called a "particle") tries different spots and remembers the best place it has found. The birds also watch each other and move toward the best spot found by the group. In PSO, each solution is like a bird, and all the solutions move through the search space, learning from their own experience and from others, to find the best answer.

> **"PSO is inspired by the social behavior of birds flocking in search of food."**

### 1.2 Basic Concept

**Key Idea:** Each particle (potential solution) moves through the search space, adjusting its position based on:

1. Its own best position found so far (personal best - pbest)
2. The best position found by the entire swarm (global best - gbest)

```
Bird Flocking Analogy:
│
├── Each bird = Particle (solution)
├── Food location = Optimal solution
├── Bird's experience = Personal best (pbest)
└── Flock's knowledge = Global best (gbest)
```

### 1.3 PSO Algorithm

**Components:**

| Component        | Description                                   |
| ---------------- | --------------------------------------------- |
| **Particle**     | Candidate solution with position and velocity |
| **Position (x)** | Current location in search space              |
| **Velocity (v)** | Direction and speed of movement               |
| **pbest**        | Best position found by particle               |
| **gbest**        | Best position found by entire swarm           |

**Algorithm Steps:**

```
1. Initialize
   ├── Random positions for all particles
   ├── Random velocities
   └── Set pbest = current position, gbest = best of all pbest

2. For each iteration:
   │
   ├── For each particle:
   │   │
   │   ├── Update velocity:
   │   │   v(t+1) = w × v(t) + c₁ × r₁ × (pbest - x(t)) + c₂ × r₂ × (gbest - x(t))
   │   │
   │   ├── Update position:
   │   │   x(t+1) = x(t) + v(t+1)
   │   │
   │   ├── Evaluate fitness
   │   │
   │   ├── Update pbest if current position is better
   │   │
   │   └── Update gbest if any pbest is better
   │
   └── Check termination condition

3. Return gbest as optimal solution
```

**Velocity Update Formula:**

```
v(t+1) = w × v(t) + c₁ × r₁ × (pbest - x(t)) + c₂ × r₂ × (gbest - x(t))

Where:
w  = Inertia weight (controls exploration vs exploitation)
c₁ = Cognitive coefficient (personal learning factor)
c₂ = Social coefficient (social learning factor)
r₁, r₂ = Random numbers between [0,1]
```

**Three Components:**

1. **Inertia:** Keeps particle moving in same direction
2. **Cognitive:** Pulls particle toward its best position
3. **Social:** Pulls particle toward swarm's best position

### 1.4 PSO Parameters

| Parameter          | Typical Value     | Purpose                                |
| ------------------ | ----------------- | -------------------------------------- |
| **Swarm Size**     | 20-50             | Number of particles                    |
| **Inertia (w)**    | 0.4-0.9           | Balance exploration/exploitation       |
| **c₁ (Cognitive)** | 2.0               | Personal learning rate                 |
| **c₂ (Social)**    | 2.0               | Social learning rate                   |
| **Max Velocity**   | Problem-dependent | Prevent particles from moving too fast |

### 1.5 PSO Example

**Problem:** Minimize f(x,y) = x² + y²

```
Iteration 1:
Particle 1: position (3, 4), fitness = 25
Particle 2: position (2, 1), fitness = 5
Particle 3: position (5, 2), fitness = 29

gbest = Particle 2 (fitness = 5)

Iteration 2:
All particles move toward gbest (2, 1)
Particle 1: moves to (2.5, 3)
Particle 2: moves to (1.8, 0.9)
Particle 3: moves to (4, 1.5)

gbest updated to Particle 2 (1.8, 0.9)

Continue until convergence...
```

### 1.6 Advantages and Disadvantages

**Advantages:**

- **Simple**: Few parameters to tune
- **Fast convergence**: Quickly finds good solutions
- **No gradient needed**: Works with non-differentiable functions
- **Flexible**: Applicable to various problems

**Disadvantages:**

- **Premature convergence**: May get stuck in local optima
- **Parameter sensitivity**: Performance depends on parameter tuning
- **No guarantee**: No guarantee of global optimum
- **Limited diversity**: Particles may cluster too closely

### 1.7 Applications of PSO

- **Function Optimization**: Solving mathematical optimization problems (minimization/maximization)
- **Neural Network Training**: Adjusting weights and biases for better learning performance
- **Feature Selection**: Identifying the most relevant features in datasets for machine learning
- **Scheduling**: Optimizing job scheduling, resource allocation, and task assignment
- **Power Systems**: Economic load dispatch, voltage control, and power flow optimization
- **Clustering**: Grouping data points in unsupervised learning tasks
- **Image Processing**: Image segmentation and enhancement tasks

---

## **2. Ant Colony Optimization (ACO)**

> PYQ: What is the ant colony optimization technique? Write various types of algorithms in ant colony optimization. Differentiate ant colony optimization vs particle swarm optimization. (2022-Feb, 15 marks)  
> PYQ: Ant colony optimization. (2022-Jul, 8 marks)  
> PYQ: Discuss the ant colony optimization technique in detail. (2024-May, 15 marks)

### 2.1 Introduction to ACO

**Ant Colony Optimization (ACO)** is a metaheuristic optimization algorithm inspired by the foraging behavior of real ants. Developed by Marco Dorigo in 1992.

In nature, ants find the shortest path between their nest and a food source by laying down pheromone trails. Other ants follow these trails, and over time, the shortest path accumulates the most pheromone, attracting more ants. ACO mimics this behavior to solve combinatorial optimization problems, such as the Traveling Salesman Problem (TSP) and vehicle routing.

> **"ACO mimics the way real ants find shortest paths using pheromone communication."**

### 2.2 Biological Inspiration

**How Real Ants Work:**

```
Ant Foraging Behavior:
│
├── 1. Ants leave nest randomly searching for food
│
├── 2. When ant finds food, it returns to nest
│      leaving pheromone trail
│
├── 3. Other ants follow stronger pheromone trails
│
├── 4. Shorter paths get more pheromone
│      (ants complete round trip faster)
│
├── 5. Pheromone evaporates over time
│
└── 6. Eventually, shortest path has strongest trail
```

**Key Mechanisms:**

1. **Positive Feedback**: Good solutions attract more ants
2. **Pheromone Evaporation**: Prevents premature convergence
3. **Stigmergy**: Indirect communication through environment

### 2.3 ACO Algorithm for TSP

**Problem:** Traveling Salesman Problem - find shortest tour visiting all cities once.

**Algorithm:**

```
1. Initialize
   ├── Place m ants on random cities
   └── Initialize pheromone trails τ₀ on all edges

2. For each iteration:
   │
   ├── For each ant k:
   │   │
   │   ├── Build tour by selecting next city based on:
   │   │   │
   │   │   ├── Pheromone level (τ)
   │   │   └── Heuristic information (η = 1/distance)
   │   │
   │   └── Calculate tour length
   │
   ├── Update pheromones:
   │   │
   │   ├── Evaporation: τ = (1-ρ) × τ
   │   │
   │   └── Deposit: τ = τ + Δτ (on edges of good tours)
   │
   └── Record best tour found

3. Return best tour
```

**Probability of Moving from City i to j:**

```
         [τᵢⱼ]^α × [ηᵢⱼ]^β
P(i,j) = ─────────────────────
         Σ [τᵢₖ]^α × [ηᵢₖ]^β
         k∈allowed

Where:
τᵢⱼ = Pheromone on edge (i,j)
ηᵢⱼ = Heuristic value (1/distance)
α = Pheromone importance
β = Heuristic importance
```

### 2.4 Types of ACO Algorithms

#### 1. Ant System (AS)

- Original ACO algorithm
- All ants deposit pheromone
- Simple but slow convergence

#### 2. Ant Colony System (ACS)

- Only best ant deposits pheromone
- Local pheromone update during tour construction
- Faster convergence

#### 3. Max-Min Ant System (MMAS)

- Pheromone values bounded [τₘᵢₙ, τₘₐₓ]
- Only best ant updates pheromone
- Better exploration

#### 4. Rank-Based Ant System

- Ants ranked by tour quality
- Pheromone deposit proportional to rank
- Balanced exploration/exploitation

### 2.5 ACO Example

**Problem:** 4-city TSP

```
Cities: A, B, C, D
Distances:
A-B: 10, A-C: 15, A-D: 20
B-C: 35, B-D: 25
C-D: 30

Initial pheromone: τ = 0.1 on all edges

Iteration 1:
Ant 1 tour: A→B→D→C→A, length = 90
Ant 2 tour: A→C→B→D→A, length = 95
Ant 3 tour: A→D→C→B→A, length = 90

Best tour: A→B→D→C→A (length = 90)
Update pheromone on edges: A-B, B-D, D-C, C-A

Iteration 2:
More ants likely to follow A→B→D→C→A due to higher pheromone
...
```

### 2.6 Applications of ACO

| Domain                 | Application                             |
| ---------------------- | --------------------------------------- |
| **Routing**            | Vehicle routing, network routing        |
| **Scheduling**         | Job shop scheduling, project scheduling |
| **Assignment**         | Quadratic assignment problem            |
| **Graph Problems**     | TSP, graph coloring                     |
| **Telecommunications** | Network optimization                    |
| **Robotics**           | Path planning                           |

### 2.7 ACO vs PSO

> PYQ: Differentiate ant colony optimization vs particle swarm optimization. (2022-Feb, 15 marks)

| Aspect                      | Ant Colony Optimization (ACO)                                 | Particle Swarm Optimization (PSO)                              |
| --------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------- |
| **Inspiration**             | Based on how ants find shortest paths                         | Based on how birds flock or fish school                        |
| **Communication**           | Indirect, using pheromone trails                              | Direct, sharing best positions                                 |
| **How Solutions Are Built** | Ants build solutions step by step                             | Each particle updates its whole solution at once               |
| **Memory**                  | Remembers good paths with pheromones                          | Remembers best positions found by itself and the group         |
| **Best For**                | Discrete/combinatorial problems (e.g., TSP, routing)          | Continuous optimization problems (e.g., function optimization) |
| **Solution Representation** | Sequence of choices/paths                                     | Vector of real numbers                                         |
| **Convergence**             | Slower, explores more options                                 | Faster, quickly finds good answers                             |
| **Main Parameters**         | α (pheromone), β (heuristic), ρ (evaporation), number of ants | w (inertia), c₁ (personal), c₂ (social), swarm size            |

**In simple words:**

- **ACO** is good for problems where you need to make a series of choices (like finding a route), and it uses pheromones to remember good paths.
- **PSO** is good for problems where you adjust numbers to get the best result, and particles learn from their own and others' experiences.

---

## **3. Artificial Bee Colony (ABC) Algorithm**

> PYQ: Write any two characteristics of artificial bees. (2022-Feb, 1.875 marks)  
> PYQ: Artificial bees algorithm. (2022-Jul, 7 marks)  
> PYQ: Artificial bees and firefly algorithms. (2023, 7.5 marks)

### 3.1 Introduction

**Artificial Bee Colony (ABC)** algorithm is a swarm intelligence optimization technique inspired by the intelligent foraging behavior of honey bee swarms. Proposed by Karaboga in 2005, ABC mimics how honey bees search for food sources and share information about their quality and location with other bees in the hive.

The algorithm divides the bee colony into three groups - employed bees, onlooker bees, and scout bees - each with specific roles in the search process, creating an effective balance between exploration (searching new areas) and exploitation (refining known good areas).

### 3.2 Bee Roles

```
Honey Bee Colony:
│
├── Employed Bees (50%)
│   └── Searches and exploits known food sources
│
├── Onlooker Bees (50%)
│   └── Stay in hive, select food sources based on employed bees' info
│
└── Scout Bees (1 or very few)
    └── Randomly search for new food sources
```

### 3.3 Characteristics of Artificial Bees

> PYQ: Write any two characteristics of artificial bees. (2022-Feb, 1.875 marks)

| Characteristic          | Description                                     |
| ----------------------- | ----------------------------------------------- |
| **Self-Organization**   | No central control, collective decision         |
| **Division of Labor**   | Different roles (employed, onlooker, scout)     |
| **Information Sharing** | Waggle dance to communicate food source quality |
| **Adaptive Foraging**   | Switch between exploration and exploitation     |
| **Memory**              | Remember food source locations and quality      |
| **Robustness**          | Tolerant to individual bee failures             |

### 3.4 ABC Algorithm

**Steps:**

```
1. Initialize
   └── Random food sources (solutions)

2. Employed Bee Phase:
   ├── Each employed bee exploits a food source
   ├── Produce new solution by modifying current one
   └── Greedy selection (keep better solution)

3. Onlooker Bee Phase:
   ├── Calculate probability for each food source
   ├── Onlookers select sources probabilistically
   └── Exploit selected sources

4. Scout Bee Phase:
   ├── If food source not improved for "limit" trials
   └── Replace with random new source (scout bee)

5. Memorize best solution found

6. Repeat until termination
```

**Solution Update:**

```
vᵢⱼ = xᵢⱼ + φᵢⱼ(xᵢⱼ - xₖⱼ)

Where:
vᵢⱼ = New solution
xᵢⱼ = Current solution
xₖⱼ = Randomly selected neighbor solution
φᵢⱼ = Random number [-1, 1]
```

### 3.5 Advantages and Applications

**Advantages:**

- Simple, few parameters
- Good balance between exploration and exploitation
- Robust and flexible

**Disadvantages:**

- Slow convergence on complex problems
- Sensitive to parameter settings
- May require many function evaluations

**Applications:**

- Function optimization
- Neural network training
- Image processing
- Clustering

---

## **4. Firefly Algorithm (FA)**

> PYQ: Firefly algorithm. (2022-Dec, 7 marks)  
> PYQ: Artificial bees and firefly algorithms. (2023, 7.5 marks)

### 4.1 Introduction

**Firefly Algorithm (FA)** is a nature-inspired metaheuristic optimization algorithm based on the bioluminescent flashing behavior of fireflies. Developed by Xin-She Yang in 2008.

The Firefly Algorithm is inspired by how real fireflies use their flashing lights to attract others. In this algorithm, each firefly represents a possible solution, and its brightness shows how good that solution is. Fireflies move toward brighter (better) fireflies, which means they are attracted to better solutions.

### 4.2 Firefly Behavior

**Key Principles:**

1. **Attractiveness**: Fireflies are attracted to brighter fireflies
2. **Light Intensity**: Decreases with distance
3. **Movement**: Firefly moves toward brighter ones
4. **Brightness**: Related to objective function value

```
Firefly Flashing:
│
├── Brighter firefly = Better solution
├── Distance affects attraction
└── Fireflies move toward brighter ones
```

### 4.3 Algorithm Components

**Attractiveness Formula:**

```
β(r) = β₀ × e^(-γr²)

Where:
β₀ = Attractiveness at r=0
γ = Light absorption coefficient
r = Distance between fireflies
```

**Movement Equation:**

```
xᵢ = xᵢ + β₀×e^(-γr²ᵢⱼ)×(xⱼ - xᵢ) + α×(rand - 0.5)

Where:
xᵢ = Position of firefly i
xⱼ = Position of brighter firefly j
α = Randomization parameter
```

### 4.4 FA Algorithm Steps

```
1. Initialize firefly population with random positions

2. Define light intensity I (based on objective function)

3. For each iteration:
   │
   ├── For each firefly i:
   │   │
   │   ├── For each firefly j:
   │   │   │
   │   │   ├── If I(j) > I(i):
   │   │   │   └── Move i toward j
   │   │   │
   │   │   └── Update attractiveness
   │   │
   │   └── Evaluate new solutions
   │
   └── Rank fireflies and find best

4. Return best solution
```

### 4.5 Applications

- **Function Optimization:** Finding the best value for a math problem.
- **Feature Selection:** Choosing the most important features in data for machine learning.
- **Image Processing:** Improving or separating parts of images (like finding objects in a photo).
- **Scheduling:** Making better timetables for jobs, classes, or machines.
- **Engineering Design:** Designing things (like bridges or circuits) to be strong and cost-effective.

---

## **5. Hybridization and Comparisons**

> PYQ: Why hybridization? What is the role of hybridization in swarm? How is hybridization calculated using swarm techniques? (2022-Feb, 7 marks)  
> PYQ: Hybridization and comparisons of swarm techniques. (2024-Dec, 7 marks)

### 5.1 Why Hybridization?

Hybridization combines two or more optimization algorithms to leverage their strengths and mitigate weaknesses. This approach can lead to improved performance, faster convergence (reaching the best answer more quickly), and better solution quality.

**Motivation:**

| Reason                   | Explanation                                |
| ------------------------ | ------------------------------------------ |
| **Overcome Limitations** | Single algorithm may have weaknesses       |
| **Combine Strengths**    | Leverage advantages of multiple algorithms |
| **Better Performance**   | Achieve better solution quality            |
| **Faster Convergence**   | Reduce computation time                    |
| **Robustness**           | More reliable across different problems    |

### 5.2 Types of Hybridization

#### 1. Component-Level Hybridization

- Replace components of one algorithm with another
- Example: PSO with ACO pheromone update

#### 2. Sequential Hybridization

- Run algorithms one after another
- Example: GA for global search → Local search for refinement

#### 3. Parallel Hybridization

- Run multiple algorithms simultaneously
- Example: Multiple swarms with different parameters

#### 4. Embedded Hybridization

- One algorithm embedded within another
- Example: Local search within GA

### 5.3 Hybrid Swarm Techniques

**Examples:**

| Hybrid      | Components                    | Benefit                            |
| ----------- | ----------------------------- | ---------------------------------- |
| **PSO-GA**  | PSO + Genetic Algorithm       | Fast convergence + diversity       |
| **ACO-PSO** | ACO + PSO                     | Discrete + continuous optimization |
| **ABC-DE**  | ABC + Differential Evolution  | Exploration + exploitation         |
| **FA-SA**   | Firefly + Simulated Annealing | Global + local search              |

### 5.4 Comparison of Swarm Techniques

| Algorithm | Inspiration       | Best For                | Convergence | Complexity |
| --------- | ----------------- | ----------------------- | ----------- | ---------- |
| **PSO**   | Bird flocking     | Continuous optimization | Fast        | Low        |
| **ACO**   | Ant foraging      | Discrete/combinatorial  | Medium      | Medium     |
| **ABC**   | Bee foraging      | Function optimization   | Medium      | Low        |
| **FA**    | Firefly flashing  | Multimodal problems     | Fast        | Low        |
| **GA**    | Natural selection | General optimization    | Slow        | High       |

### 5.5 Performance Comparison

**Strengths and Weaknesses:**

```
PSO:
✓ Fast convergence
✓ Simple implementation
✗ Premature convergence
✗ Poor for discrete problems

ACO:
✓ Excellent for TSP/routing
✓ Positive feedback mechanism
✗ Slow convergence
✗ Many parameters

ABC:
✓ Good exploration
✓ Few parameters
✗ Slow convergence
✗ Limited local search

FA:
✓ Handles multimodal functions
✓ Automatic subdivision
✗ Parameter sensitive
✗ Computationally expensive
```

---

## **6. Applications of Swarm Techniques**

> PYQ: Discuss various applications of swarm techniques in different domains and real-world problems with suitable examples. (2022-Feb, 8 marks)  
> PYQ: Discuss various applications of swarm techniques in different real-world problems. (2022-Jul, 2022-Dec, 15 marks)  
> PYQ: Discuss the applications of swarm techniques in different domains and real-world problems. (2023, 15 marks)  
> PYQ: Explain the applications of swarm techniques in different domains and real-world problems. (2024-May, 15 marks)  
> PYQ: Discuss various applications of swarm intelligence techniques in various domains and provide examples of how they effectively solve real-world optimization problems. (2024-Dec, 15 marks)

Swarm intelligence techniques have been successfully applied across various domains to solve complex optimization problems. Below are some notable applications:

```
Application of Swarm Techniques:
   ├── Engineering Applications
   |     |-> Structural Design, Power Systems, Manufacturing, etc.
   ├── Telecommunications
   |     |-> Network Routing, Wireless Sensor Networks, etc.
   ├── Transportation and Logistics
   |     |-> Vehicle Routing, Traffic Signal Control, Airline Scheduling, etc.
   ├── Healthcare
   |     |-> Medical Diagnosis, Drug Design, Medical Image Analysis, etc.
   ├── Finance and Economics
   |     |-> Portfolio Optimization, Credit Scoring, etc.
   ├── Machine Learning
   |     |-> Neural Network Training, Feature Selection, Clustering, etc.
   ├── Robotics
   |     |-> Path Planning, Swarm Robotics, etc.
   ├── Energy Systems
   |     |-> Smart Grid Optimization, Wind Farm Layout, etc.
   └── Agriculture
         |-> Crop Planning, Precision Agriculture, etc.

```

Swarm techniques like PSO, ACO, ABC, and FA are used in engineering, telecom, transport, healthcare, finance, AI, robotics, energy, and agriculture to solve tough problems by copying how animals work together in nature.

### 1. Engineering
- **Structural Design:** PSO and GA help design bridges and buildings to be strong and cheap.
- **Power Systems:** PSO and ACO are used to decide how much electricity each power plant should produce to save fuel and money.

### 2. Telecommunications
- **Network Routing:** ACO helps find the best path for data to travel in a network, just like ants find the shortest path to food.
- **Wireless Sensor Networks:** PSO and ABC help place sensors in the best spots to cover an area and save battery.

### 3. Transportation & Logistics
- **Vehicle Routing:** ACO plans delivery routes for trucks (like Amazon) to save time and fuel.
- **Traffic Signal Control:** PSO and ABC adjust traffic lights to reduce waiting time and traffic jams.

### 4. Healthcare
- **Medical Diagnosis:** PSO and ABC help pick the most important symptoms to predict diseases.
- **Drug Design:** PSO and FA help find the best way a drug can fit with a protein, speeding up new medicine discovery.
- **Medical Image Analysis:** ABC and PSO help find tumors in MRI or CT scan images.

### 5. Finance & Economics
- **Portfolio Optimization:** PSO and GA help choose the best mix of stocks to get high returns with low risk.
- **Credit Scoring:** PSO helps banks decide who is likely to repay a loan.

### 6. Machine Learning
- **Neural Network Training:** PSO and ABC help train AI models to learn better and faster.
- **Feature Selection:** PSO and GA pick the most useful data features for tasks like text or image classification.
- **Clustering:** ABC and PSO group similar data, like customer types or document topics.

### 7. Robotics
- **Path Planning:** PSO and ACO help robots or self-driving cars find the safest and shortest path.
- **Swarm Robotics:** PSO and ACO help many robots work together for tasks like search and rescue.

### 8. Energy Systems
- **Smart Grid Optimization:** PSO and ABC manage solar, wind, and other energy sources to reduce cost and improve reliability.
- **Wind Farm Layout:** PSO and GA decide where to place wind turbines for maximum power.

### 9. Agriculture
- **Crop Planning:** PSO and GA help farmers decide which crops to plant for best profit.
- **Precision Agriculture:** PSO and ABC optimize water and fertilizer use for better yields.


### 6.10 Summary of Applications

| Domain             | Problem                 | Swarm Technique | Benefit              |
| ------------------ | ----------------------- | --------------- | -------------------- |
| **Engineering**    | Structural design       | PSO, GA         | Cost reduction       |
| **Telecom**        | Network routing         | ACO             | Adaptive routing     |
| **Transportation** | Vehicle routing         | ACO             | Reduced distance     |
| **Healthcare**     | Medical diagnosis       | PSO, ABC        | Better accuracy      |
| **Finance**        | Portfolio optimization  | PSO, GA         | Risk management      |
| **ML**             | Neural network training | PSO, ABC        | Better convergence   |
| **Robotics**       | Path planning           | PSO, ACO        | Collision-free paths |
| **Energy**         | Smart grid              | PSO, ABC        | Cost, reliability    |
| **Agriculture**    | Crop planning           | PSO, GA         | Increased profit     |

---

## **Summary Table: Unit 4 Key Concepts**

| Topic             | Key Points                                                           |
| ----------------- | -------------------------------------------------------------------- |
| **PSO**           | Bird flocking, velocity update, pbest/gbest, continuous optimization |
| **ACO**           | Ant foraging, pheromone trails, TSP/routing, discrete problems       |
| **ABC**           | Bee colony, employed/onlooker/scout bees, function optimization      |
| **Firefly**       | Firefly flashing, attractiveness, multimodal optimization            |
| **Hybridization** | Combine algorithms, overcome limitations, better performance         |
| **Comparisons**   | PSO (fast), ACO (discrete), ABC (balanced), FA (multimodal)          |
| **Applications**  | Engineering, telecom, healthcare, finance, ML, robotics              |

---

## **Expected Questions for Exam**

### 15 Marks Questions

1. Ant Colony Optimization (algorithm, types, applications)
2. Applications of Swarm Techniques (multiple domains with examples)
3. PSO and ACO with comparison

### 7-8 Marks Questions

1. Particle Swarm Optimization
2. Artificial Bees Algorithm
3. Firefly Algorithm
4. Hybridization and Comparisons of Swarm Techniques

### 2.5-3 Marks Questions

1. Characteristics of Artificial Bees
2. Any swarm technique (brief)

---

_These notes were compiled by [Deepak Modi](https://deepakmodi.tech)_  
_Last updated: December 2025_
