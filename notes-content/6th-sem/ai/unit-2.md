---
title: "Unit 2: Knowledge Representation"
description: "Knowledge types, propositional and predicate logic, semantic nets, frames, and rule-based systems"
author: "Deepak Modi"
date: "2025-06-15"
pdfUrl: ""
---

## Syllabus:

**Knowledge Representation:** Types of Knowledge, Knowledge Representation Techniques/schemes: Propositional Logic, Predicate Logic, Semantic nets, Frames. Knowledge representation issues. Rule based systems.  

---

### **1. Introduction to Knowledge Representation**

>PYQ: Explain the various ways of knowledge representation in AI (2021, 15 marks)   
>PYQ: Describe different Approaches to Knowledge Representation. (2022, 15 marks)   

#### **What is Knowledge Representation (KR)?**

Knowledge Representation (KR) is a method used in Artificial Intelligence (AI) to store, organize, and manipulate information so that a computer can **understand, reason, and make decisions** like a human.
It involves creating a structured format for knowledge that allows AI systems to **interpret, learn, and apply** information effectively.

#### **Why is Knowledge Representation Important?**

Knowledge Representation is crucial for AI because it enables machines to **simulate human-like reasoning** and decision-making. It allows AI systems in various applications, such as:
* **Storing Information** → Organize data in a structured way
* **Retrieving Information** → Quickly access relevant knowledge
* **Reasoning** → Draw conclusions based on stored knowledge
* **Learning** → Adapt to new information and improve over time
* **Problem Solving** → Apply knowledge to solve complex problems
* **Decision Making** → Make informed choices based on available data
* **Natural Language Processing** → Understand and generate human language

#### **Characteristics of a Good Knowledge Representation System**

1. **Expressive** → Should represent complex relationships and facts.  
2. **Efficient** → Should allow quick retrieval and reasoning.  
3. **Scalable** → Should handle large amounts of knowledge.  
4. **Flexible** → Should adapt to new information easily.  
5. **Handles Uncertainty** → Should deal with incomplete or ambiguous data.

#### **Example of Knowledge Representation in AI**

A chatbot answering a question:  
**User:** "What is the capital of India?"  
**AI (using KR):** "The capital of India is New Delhi."

The AI system **stores facts** in a structured way and retrieves the correct answer when asked.

### **2. Types of Knowledge in AI**

In Artificial Intelligence, knowledge is classified into different types based on how it is stored and used for reasoning.

#### **1. Declarative Knowledge (Fact-Based Knowledge)**

* Represents **facts and static information** about the world.  
* Example:  
  * "The sun rises in the east."  
  * "A cat is a mammal."  
* **Used in:** Databases, encyclopedias, expert systems.

**Advantages:** Easy to store and retrieve.  
**Disadvantages:** Cannot describe how to perform actions.

#### **2. Procedural Knowledge (Action-Based Knowledge)**

* Describes **how to perform tasks or solve problems** (step-by-step instructions).  
* Example:  
  * "To drive a car, press the accelerator to speed up."  
  * "To make tea, boil water, add tea leaves, and mix with milk and sugar."  
* **Used in:** AI planning, robotics, machine learning.

**Advantages:** Helps AI take actions.  
**Disadvantages:** Difficult to represent complex tasks efficiently.

#### **3. Meta-Knowledge (Knowledge About Knowledge)**

* Describes **how knowledge is structured** and how it should be used.
* Example:  
  * "A doctor knows that symptoms are used to diagnose a disease."  
  * "A chess player knows that controlling the center of the board is a good strategy."  
* **Used in:** Expert systems, AI decision-making.

**Advantages:** Improves reasoning by guiding AI on **how to use knowledge**.  
**Disadvantages:** Requires human expertise to define rules.

#### **4. Heuristic Knowledge (Experience-Based Knowledge)**

* Knowledge based on **past experiences, rules of thumb, and intuition**.  
* Example:  
  * "If it looks like it will rain, carry an umbrella."  
  * "If a website loads slowly, try clearing the cache."  
* **Used in:** Problem-solving, decision-making, AI gaming (e.g., chess engines).

**Advantages:** Helps AI make **fast, approximate** decisions.  
**Disadvantages:** May not always provide the correct answer.

#### **5. Structural Knowledge (Relationship-Based Knowledge)**

* Represents **how concepts and objects are related** in a system.  
* Example:  
  * "A car has wheels, an engine, and doors."  
  * "A tree has branches and leaves."  
* **Used in:** Semantic networks, ontologies, knowledge graphs.

**Advantages:** Helps AI understand **hierarchical and relational data**.  
**Disadvantages:** Can become complex in large systems.

#### **Comparison of Different Types of Knowledge**

| Type of Knowledge | What It Represents | Example | Used In |
| :---: | :---: | :---: | :---: |
| **Declarative** | Facts | "The Eiffel Tower is in Paris." | Databases, expert systems |
| **Procedural** | How to do something | "To solve a Rubik's Cube, follow these steps..." | AI planning, robotics |
| **Meta-Knowledge** | Knowledge about knowledge | "A doctor uses symptoms for diagnosis." | Expert systems, AI learning |
| **Heuristic** | Experience-based rules | "If the sky is dark, it may rain." | Problem-solving, AI games |
| **Structural** | Relationships between concepts | "A bird has wings and can fly." | Semantic networks, ontologies |


### **3. Knowledge Representation Techniques**

>PYQ: Explain in detail Knowledge Representation Techniques and schemes. (2023, 15 marks)   

Knowledge Representation (KR) techniques help AI **store, organize, and process knowledge** efficiently. Different techniques are used based on the type of knowledge and the problem domain. 
1. **Propositional Logic**
2. **Predicate Logic (First-Order Logic - FOL)**
3. **Semantic Networks**
4. **Frames**
5. **Rule-Based Systems**

#### **1. Propositional Logic**

Propositional Logic represents knowledge using **statements (propositions) that are either true or false**.   
It uses logical operators like **AND (∧), OR (∨), NOT (¬), IMPLIES (→)** to combine propositions.

**Example:**

* "It is raining" → **R** (True/False)  
* "If it is raining, the ground is wet." → **R → W**

**Advantages:** Simple and easy to implement.  
**Disadvantages:** Cannot represent complex relationships like object properties.

##### **Limitations of Propositional Logic**

>PYQ: What is the limitation of propositional logic? (2024, 1 mark)

Despite its usefulness, propositional logic has several significant limitations:

1. **Cannot express quantification** - Cannot represent statements like "all humans are mortal" or "some birds can fly"
2. **No internal structure for propositions** - Treats statements as atomic units without analyzing their components
3. **Cannot represent relationships between objects** - Unable to express how different entities are related
4. **Limited expressiveness** - Many real-world statements cannot be adequately represented
5. **No variables or functions** - Cannot use variables to make general statements about categories
6. **Cannot handle partial truth** - Propositions are either true or false, with no middle ground

#### **2. Predicate Logic (First-Order Logic - FOL)**

>PYQ: What are the standard quantifiers of First-order logic? (2024, 1 mark)    

Predicate Logic extends propositional logic by introducing **quantifiers, objects, and relationships**.   
It uses **Universal quantifier (∀)** → "For all" and **Existential quantifier (∃)** → "There exists".

##### **Standard Quantifiers in First-Order Logic**

First-order logic has exactly **two standard quantifiers**:

1. **Universal Quantifier (∀)** - "For all" or "For every"
   * Symbolized as an inverted 'A' (∀)
   * Used to make statements that apply to all members of a domain
   * Example: "All humans are mortal" is written as ∀x (Human(x) → Mortal(x))
   * Read as: "For all x, if x is human, then x is mortal"

2. **Existential Quantifier (∃)** - "There exists" or "For some"
   * Symbolized as a backwards 'E' (∃)
   * Used to assert the existence of at least one entity with certain properties
   * Example: "Some birds can fly" is written as ∃x (Bird(x) ∧ CanFly(x))
   * Read as: "There exists an x such that x is a bird and x can fly"

These quantifiers can be combined in various ways to express complex statements. The order of quantifiers matters and changing their order can significantly alter the meaning of a statement.

##### **Difference Between Propositional Logic and Predicate Logic**

>PYQ: Differentiate between propositional logic and predicate logic. (2021, 8 marks)

| Feature | Propositional Logic | Predicate Logic |
| :---: | :---: | :---: |
| **Basic Unit** | Propositions (True/False) | Predicates (Objects and Relationships) |
| **Expressiveness** | Limited (no quantifiers) | More expressive (uses quantifiers) |
| **Structure** | Atomic statements | Complex statements with variables |
| **Quantification** | None | Universal (∀) and Existential (∃) |
| **Example** | "If it rains, the ground is wet" | "All humans are mortal" (∀x (Human(x) → Mortal(x))) |
| **Applications** | Simple logical reasoning | Complex reasoning, AI, databases |
| **Limitations** | Cannot express relationships | More complex, requires more computation |
| **Use Cases** | Basic logic problems | Natural language processing, expert systems |
| **Complexity** | Simpler to understand | More complex due to variables and quantifiers |

##### **Skolemization in Predicate Logic**

>PYQ: What do you mean by Skolemization? (2021, 7 marks)

**Skolemization** is a process used in predicate logic to eliminate existential quantifiers from logical formulas. It transforms a formula into a **Skolem normal form** (SNF) by replacing existentially quantified variables with **Skolem functions** or constants.  
Skolemization is a key step in converting formulas into **Conjunctive Normal Form (CNF)**, which is required for many automated reasoning systems.

**Skolemization Steps:**
1. Identify existential quantifiers in the formula.
2. Replace each existentially quantified variable with a Skolem function or constant.
3. Ensure that the Skolem function is unique for each universally quantified variable.
4. The resulting formula is in Skolem normal form.

**Example:**   
   * Original formula: ∃y P(x,y)
     * "There exists a y such that P(x,y) holds"
   * Skolemized form: ∀x P(x, f(x))
     * f(x) is a Skolem function that provides a value of y for each x

**Importance:**
   * Makes automated theorem proving more efficient
   * Helps convert formulas to Conjunctive Normal Form (CNF)
   * Preserves satisfiability (not equivalence) of the original formula

**Advantages:** Can express relationships and general rules.  
**Disadvantages:** More complex, requires higher computation power.

##### **Converting English Statements to Predicate Logic**

>PYQ: Convert the following statements in Predicate Logic: [Not all students like both AI and DS, Everyone likes someone, etc.] (2024, 10 marks)

Here are examples of converting natural language statements to predicate logic:

1. **"Not all students like both AI and DS."**
   * ¬∀x (Student(x) → (Likes(x, AI) ∧ Likes(x, DS)))
   * Equivalent to: ∃x (Student(x) ∧ ¬(Likes(x, AI) ∧ Likes(x, DS)))
   * "There exists an x such that x is a student and it is not the case that x likes both AI and DS"

2. **"Everyone likes someone."**
   * ∀x ∃y Likes(x, y)
   * "For all x, there exists some y such that x likes y"

3. **"Someone ate everything."**
   * ∃x ∀y (Food(y) → Ate(x, y))
   * "There exists an x such that for all y, if y is food, then x ate y"

4. **"Some girls are intelligent."**
   * ∃x (Girl(x) ∧ Intelligent(x))
   * "There exists an x such that x is a girl and x is intelligent"

5. **"Everyone likes rain."**
   * ∀x Likes(x, rain)
   * "For all x, x likes rain"

6. **"Jill eats almonds and is still alive."**
   * Eats(Jill, almonds) ∧ Alive(Jill)

7. **"Mary eats everything John eats."**
   * ∀x (Eats(John, x) → Eats(Mary, x))
   * "For all x, if John eats x then Mary eats x"

8. **"Anything anyone eats and is not killed by is food."**
   * ∀x ∀y ((Eats(y, x) ∧ ¬Kills(x, y)) → Food(x))
   * "For all x and y, if y eats x and x doesn't kill y, then x is food"

9. **"Mangoes are food."**
   * ∀x (Mango(x) → Food(x))
   * "For all x, if x is a mango then x is food"

10. **"Bill likes all kinds of food."**
    * ∀x (Food(x) → Likes(Bill, x))
    * "For all x, if x is food then Bill likes x"

#### **3. Semantic Networks**

>PYQ: Write a short note on Semantic Network. (2021, 3 marks)   
>PYQ: Draw the semantic network representing the following knowledge: Every vehicle is a physical object. Every car is a vehicle. Every car has four wheels. The electrical system is a part of car. The battery is a part of the electrical system. Pollution system is a part of every vehicle. The vehicle is used in transportation. Honda City is a car. (2024, 8 marks)

Semantic networks are graphical representations that represents knowledge as a **graph with nodes (objects) and links (relationships)**.

**Example:**   
  [Dog] --is a--> [Animal]  
  [Dog] --has--> [Tail]  
  [Dog] --can--> [Bark]

##### **Semantic Networks for Knowledge Representation**

A semantic network is a knowledge representation that depicts relationships between concepts using a directed graph where:
* **Nodes** represent objects, concepts, or situations
* **Edges** (links) represent relationships between nodes

**Types of relationships commonly represented:**
* **is-a** (inheritance/taxonomy)
* **has-a** (composition)
* **can** (capability)
* **part-of** (component)
* **property-of** (attribute)
* **instance-of** (individual belonging to a class)

##### **Example: Vehicle Knowledge Representation**

>PYQ: Draw the semantic network representing the following knowledge: Every vehicle is a physical object. Every car is a vehicle. Every car has four wheels. The electrical system is a part of car. The battery is a part of the electrical system. Pollution system is a part of every vehicle. The vehicle is used in transportation. Honda City is a car. (2024, 8 marks)

Here's a semantic network representing this knowledge:

```
                  [Physical Object]
                       ^
                       |
                     is-a
                       |
                    [Vehicle]------used-in---->[Transportation]
                       ^  \
                       |   \
                      is-a  \
                       |     \
                       |      has-part------>[Pollution System]
                       |
                     [Car]
                    /  |  \
                   /   |   \
                  /    |    \
             has-part has-part instance-of
              /        |       \
       [Four Wheels]   |     [Honda City]
                       |
                 [Electrical System]
                       |
                    has-part
                       |
                   [Battery]
```

This semantic network clearly illustrates:
1. The inheritance relationships (is-a)
2. Part-whole relationships (has-part)
3. Functional relationships (used-in)
4. Instance relationships (instance-of)

**Advantages:** 
* Easy to understand and visualize relationships
* Natural way to represent hierarchical knowledge
* Supports inheritance of properties
* Efficient for certain types of queries

**Disadvantages:** 
* Difficult to handle uncertainty and large networks
* No standardized semantics for the links
* Limited reasoning capabilities compared to logic-based representations
* Can become complex and unwieldy for large knowledge bases

#### **4. Frames**

>PYQ: How are frames used for knowledge representation? Explain using example. (2024, 5 marks)

Frames represents knowledge in **structured templates** similar to Object-Oriented Programming (OOP). Just like classes in OOP, frames can have attributes (slots) and methods (procedures) associated with them.

##### **How Frames Are Used for Knowledge Representation**

Frames are a structured way to organize knowledge about objects, events, or concepts. They include both data (attribute values) and procedures (methods to compute or derive values). 

**Structure of a Frame:**
* **Name**: The name of the frame (e.g., "Car")
* **Slots**: Attributes or properties of the frame (e.g., "color", "max-speed")
* **Values**: The values assigned to the slots (e.g., "Red", "200 km/h")
* **Procedures**: Functions or methods associated with the frame (e.g., "calculate-next-service")
* **Inheritance**: Frames can inherit properties from parent frames (e.g., "Vehicle" frame)
* **Defaults**: Default values for slots can be specified (e.g., "has-wheels: 4")
* **Conditions**: Conditions can be specified for slots (e.g., "if-needed: calculate-next-service")
* **Procedural Attachments**: Procedures can be attached to slots for dynamic computation

**Example: Car Knowledge Frame Representation**

```javascript
Frame: Vehicle
   Slots:
      has-wheels: [default: 4]
      has-engine: [default: yes]
      used-for: [default: transportation]
   
   Frame: Car (inherits from Vehicle)
      Slots:
         type: [value: Sedan]
         color: [value: Red]
         max-speed: [value: 200 km/h]
         owner: [value: Frame:Person-Deepak]
         maintenance-due: [if-needed: calculate-next-service]
   
   Frame: Person-Deepak
      Slots:
         name: [value: Deepak Modi]
         age: [value: 25]
         owns: [value: Frame:Car]
```

**Advantages:** 
* Organizes knowledge in a structured way
* Supports inheritance and default reasoning
* Allows for integration of procedural knowledge
* Provides context for reasoning

**Disadvantages:** 
* Needs predefined templates, not flexible for new data
* Can be inefficient for very large knowledge bases
* Lacks formal semantics compared to logic-based representations

#### **5. Rule-Based Systems**

>PYQ: Explain Rule Based System with example. (2022, 15 marks)    
>PYQ: How does an inference engine work in rule-based system? (2024, 1 mark)

Rule Based System uses **IF-THEN rules** to represent knowledge and make decisions. It is a common technique in AI for building **expert systems** that mimic human decision-making.

**Example:**

* **Rule:** IF a person has a fever AND cough, THEN they may have the flu.  
* **Execution:**  
  * Input: Fever = Yes, Cough = Yes  
  * Output: Possible Flu

**Advantages:** Simple decision-making, easy to update.  
**Disadvantages:** Cannot handle uncertainty well.

#### **Comparison of Knowledge Representation Techniques**

| Technique | Structure | Example | Best For |
| ----- | ----- | ----- | ----- |
| **Propositional Logic** | Statements (T/F) | "If it rains, the ground is wet." | Simple logical rules |
| **Predicate Logic** | Objects & relationships | "All humans are mortal." | Complex reasoning |
| **Semantic Networks** | Graphs (nodes & links) | "A dog is an animal." | Hierarchical knowledge |
| **Frames** | Templates with attributes | "A car has a speed of 100 km/h." | Object properties |
| **Rule-Based Systems** | IF-THEN rules | "If fever, then flu." | Decision-making |

### **4. Knowledge Representation Issues**

>PYQ: What are the knowledge representation issues? (2024, 1 mark)    
>PYQ: State various issues in knowledge representation in detail. (2023, 15 marks)

While Knowledge Representation (KR) helps AI store and use information, it also faces several challenges. These issues can affect the performance and reliability of AI systems. Here are some key KR issues:

#### **1. Expressiveness**

* **Problem:** Can the KR system represent all types of knowledge?  
* **Example:** Propositional logic can represent facts but cannot describe relationships like "A dog is a pet."  
* **Solution:** Use more expressive techniques like **Predicate Logic, Semantic Networks, or Frames**.

**Ideal KR should be expressive enough to represent real-world problems.**

#### **2. Efficiency**

* **Problem:** Can AI quickly access and process stored knowledge?  
* **Example:** Searching through millions of medical records to diagnose a disease.  
* **Solution:** Use **optimized data structures (graphs, trees, indexing)** to speed up retrieval.

**A KR system should allow fast and efficient reasoning.**

#### **3. Incompleteness**

* **Problem:** AI may not have all the knowledge needed for decision-making.  
* **Example:** A self-driving car may not have information about a newly installed traffic sign.  
* **Solution:** Use **probabilistic reasoning** (Bayesian Networks) to handle missing data.

**AI should work even when some knowledge is missing.**

#### **4. Handling Uncertainty**

* **Problem:** Many real-world situations involve uncertain or vague data.  
* **Example:** "It will probably rain tomorrow."  
* **Solution:** Use **Fuzzy Logic, Probabilistic Reasoning (Bayesian Networks)** to deal with uncertainty.

**AI should handle situations where knowledge is not 100% certain.**

#### **5. Consistency**

* **Problem:** Conflicting knowledge can lead to incorrect decisions.  
* **Example:** An AI assistant has two contradictory rules:  
  * "If fever, take paracetamol."  
  * "If fever, don't take paracetamol."
* **Solution:** Use **conflict resolution strategies** like prioritizing rules or using a knowledge base to resolve conflicts.

**A good KR system ensures consistency in knowledge.**

#### **6. Scalability**

* **Problem:** Can the system handle large amounts of knowledge?  
* **Example:** Google's AI must process billions of web pages efficiently.  
* **Solution:** Use **distributed databases and cloud computing** for scalability.

**AI should manage large-scale knowledge without performance issues.**

#### **7. Knowledge Updating**

* **Problem:** AI must update knowledge as new facts emerge.  
* **Example:** A medical AI system must learn new treatments over time.  
* **Solution:** Use **machine learning and dynamic knowledge bases** to adapt to new information.

**A KR system should be flexible to incorporate new knowledge.**

### **5. Rule-Based Systems**

#### **1. What is a Rule-Based System?**


A **Rule-Based System (RBS)** is a type of AI system that uses **"IF-THEN" rules** to make decisions or solve problems. It works like an **expert system**, following predefined rules to process knowledge and generate outputs.
> **IF** condition(s) are met, **THEN** action(s) are taken.

**Example: (Medical Diagnosis)**

* **Rule:** IF a person has a fever AND a cough, THEN they may have the flu.  
* **Input:** Fever = Yes, Cough = Yes.  
* **Output:** Possible flu.

#### **2. Structure of a Rule-Based System**

A Rule-Based System consists of three main components:
1. **Knowledge Base** → Contains **rules** and **facts** (IF-THEN statements).  
2. **Inference Engine** → Applies rules to the knowledge base to draw conclusions.
3. **Working Memory** → Temporary storage for facts and data during processing.

##### **Knowledge Base (Set of Rules)**

* Stores **facts** and **rules**.

Example:  
Rule 1: IF traffic is heavy THEN take an alternate route.   
Rule 2: IF it is raining THEN carry an umbrella.

##### **Inference Engine (Decision Maker)**
* Uses rules to **analyze input data** and generate conclusions.

##### **Non-monotonic Reasoning**

>PYQ: Explain the term Non-monotonic reasoning. (2021, 3 marks)

**Non-monotonic reasoning** is a form of logical reasoning where conclusions derived earlier may be invalidated when new information is added. This contrasts with monotonic reasoning, where adding new information never invalidates previous conclusions.

**Key Characteristics:**
1. **Defeasibility** - Conclusions can be withdrawn when new information is available
2. **Default Assumptions** - Reasoning often relies on default assumptions that can be overridden
3. **Belief Revision** - System must be able to revise its beliefs when contradictions arise
4. **Common Sense Reasoning** - Models how humans reason with incomplete information

**Example:**
* Initial Knowledge: "Birds can fly."
* Initial Conclusion: "If Tweety is a bird, then Tweety can fly."
* New Knowledge: "Tweety is a penguin." (Penguins are birds that cannot fly)
* Revised Conclusion: "Tweety cannot fly."

**Applications:**
* Real-world reasoning systems where complete information is rarely available
* Medical diagnosis with evolving symptoms
* Legal reasoning where new evidence might change previous conclusions
* Common sense reasoning in AI systems that must operate in uncertain environments

##### **How an Inference Engine Works in Rule-Based Systems**
>PYQ: How does an inference engine work in rule-based system? (2024, 1 mark)    

An inference engine is the **brain** of a rule-based system that applies logical rules to the knowledge base to derive conclusions or make decisions. It processes the rules and facts in the knowledge base to infer new information.
The inference engine typically follows these steps:

1. **Rule Selection** - Identifies which rules are applicable based on current facts
2. **Conflict Resolution** - Decides which rule to apply when multiple rules match (using strategies like specificity, recency, or priority)
3. **Rule Execution** - Applies the selected rule, which may add new facts to working memory
4. **Iteration** - Repeats the process with updated knowledge until reaching a conclusion or no more rules apply

The inference engine may use **pattern matching algorithms** to efficiently determine which rules are triggered by the current facts in working memory.

##### **Two Main Types of Reasoning:**

>PYQ: Differentiate between forward and backward reasoning. (2024, 7 marks)

1. **Forward Chaining** (Data-driven) → Starts with facts and applies rules to reach a conclusion.  
   * Example: "If a patient has symptoms of a disease, diagnose the disease."  
   * Process: Facts → Rules → Conclusions
   * Used when: We have initial data and want to see what conclusions can be drawn

2. **Backward Chaining** (Goal-driven) → Starts with a goal and works backward to find supporting facts.  
   * Example: "To diagnose a disease, check symptoms one by one."  
   * Process: Goal → Rules that might establish goal → Subgoals → Facts needed to support them
   * Used when: We have a hypothesis to prove and need to verify if data supports it

##### **Working Memory (Fact Storage)**

* Stores temporary data while processing rules.

#### **3. Types of Rule-Based Systems**

##### **Deterministic Rule-Based Systems**

* Uses fixed rules where outputs are always the same for given inputs.  
* Example: **Traffic signal control** (IF time is 8 AM, THEN turn the signal green).

##### **Probabilistic Rule-Based Systems**

* Uses probabilities when dealing with uncertain data.  
* Example: **Medical diagnosis** (IF fever = Yes, THEN 70% chance of flu).

#### **4. Advantages of Rule-Based Systems**

- **Simple & Easy to Understand** → Uses clear IF-THEN rules.  
- **Transparent Reasoning** → Users can see why a decision was made.  
- **Scalable** → New rules can be added without changing existing ones.

#### **5. Disadvantages of Rule-Based Systems**

- **Cannot Learn Automatically** → Needs manual updates.  
- **Hard to Manage Large Rule Sets** → Complex systems become difficult to maintain.  
- **Struggles with Uncertainty** → Not ideal when rules have exceptions.

#### **6. Applications of Rule-Based Systems**

- **Medical Diagnosis** → AI doctors suggest treatments based on symptoms.  
- **Chatbots** → Customer service bots respond using predefined rules.  
- **Fraud Detection** → Identifies suspicious transactions based on set rules.  
- **Industrial Automation** → AI monitors and controls manufacturing processes.