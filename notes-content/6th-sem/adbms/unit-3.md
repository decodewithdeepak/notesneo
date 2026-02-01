---
title: "Unit 3: Parallel and Distributed Databases"
description: "Distributed Data Storage, Fragmentation, Replication, Query Processing, Transaction Management, and Parallel Database Design"
author: "Deepak Modi"
date: "2025-06-15"
pdfUrl: ""
---

## Syllabus:

**Parallel and Distributed Databases**: Distributed Data Storage – Fragmentation & Replication, Location and Fragment.    
Transparency Distributed Query Processing and Optimization, Distributed Transaction Modeling and concurrency Control, Distributed Deadlock, Commit Protocols, Design of Parallel Databases, Parallel Query Evaluation.

---

## 1. Distributed Data Storage

Distributed database systems store data across multiple physical locations (sites or nodes) that are connected via a network. This allows for better scalability, reliability, fault tolerance, and performance compared to traditional centralized databases.    
In a distributed database system, data can be fragmented and replicated across different locations, enabling efficient access and management of large datasets.

```
      ┌───────────────────────────────┐
      │         Distributed DBMS      │
      ├───────────────────────────────┤
      │ Site 1   │ Site 2   │ Site 3  │
      ├───────────────────────────────┤
      │ DBMS 1   │ DBMS 2   │ DBMS 3  │
      ├───────────────────────────────┤
      │ Data 1   │ Data 2   │ Data 3  │
      └───────────────────────────────┘
```

**Advantages of Distributed Databases**
- Scalability: Can handle large volumes of data and users by adding more sites.
- Reliability: If one site fails, others can continue to operate.
- Performance: Data can be located closer to where it is needed, reducing latency.
- Flexibility: Different sites can use different database management systems (DBMS) or configurations.
- Unified Access: Users can access data from multiple sites as if it were a single database.

**Challenges of Distributed Databases**
- Complexity: Managing data across multiple sites increases complexity in design and administration.
- Consistency: Ensuring data consistency across sites can be challenging, especially with concurrent updates.
- Communication: Network latency and bandwidth can affect performance.
- Security: Protecting data across multiple sites requires robust security measures.

### 1.1 Fragmentation

Fragmentation is the process of dividing a database or relation into smaller, manageable pieces called fragments. Each fragment can be stored at different sites in a distributed database system.
Fragmentation allows for better data distribution, improved performance, and easier management of large datasets.

#### 1.1.1 Types of Fragmentation

Fragmentation can be done horizontally (by rows), vertically (by columns), or in a mixed manner. The choice of fragmentation strategy depends on the access patterns and usage of the data.

**Horizontal Fragmentation**

Horizontal fragmentation divides a relation into smaller subsets of rows, distributing them across different sites.

- Based on a selection operation: F<sub>i</sub> = σ<sub>pi</sub>(R) where p<sub>i</sub> is a predicate
- Each fragment contains a subset of the rows of the original relation
- All fragments have the same schema as the original relation

Example: An Employee relation might be fragmented by department or region.

```sql
-- Original Employee table
CREATE TABLE Employee (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10,2),
    dept_id INT,
    location VARCHAR(50)
);

-- Horizontal fragmentation by location
-- Fragment 1: New York employees
CREATE TABLE Employee_NY AS
SELECT * FROM Employee WHERE location = 'New York';

-- Fragment 2: London employees
CREATE TABLE Employee_London AS
SELECT * FROM Employee WHERE location = 'London';

-- Fragment 3: Tokyo employees
CREATE TABLE Employee_Tokyo AS
SELECT * FROM Employee WHERE location = 'Tokyo';
```

The reconstruction of the original relation is achieved through UNION:
```
Employee = Employee_NY ∪ Employee_London ∪ Employee_Tokyo
```

**Vertical Fragmentation**

Vertical fragmentation divides a relation into smaller subsets of columns, distributing them across different sites.

- Based on a projection operation: F<sub>i</sub> = π<sub>attributes</sub>(R)
- Each fragment contains a subset of the columns of the original relation
- The primary key must be included in all fragments to allow reconstruction

Example: An Employee relation might be fragmented into personal information and financial information.

```sql
-- Vertical fragmentation of Employee table
-- Fragment 1: Personal information
CREATE TABLE Employee_Personal AS
SELECT emp_id, name, location FROM Employee;

-- Fragment 2: Financial information
CREATE TABLE Employee_Financial AS
SELECT emp_id, salary, dept_id FROM Employee;
```

The reconstruction of the original relation is achieved through a JOIN operation:
```
Employee = Employee_Personal ⋈ Employee_Financial
```

**Mixed/Hybrid Fragmentation**

Mixed fragmentation combines both horizontal and vertical fragmentation approaches.

- Can be applied as horizontal followed by vertical or vice versa
- Provides more flexibility in data distribution
- More complex to manage and reconstruct

Example:
```sql
-- First, horizontal fragmentation by location
CREATE TABLE Employee_NY AS
SELECT * FROM Employee WHERE location = 'New York';

-- Then, vertical fragmentation of the NY fragment
CREATE TABLE Employee_NY_Personal AS
SELECT emp_id, name FROM Employee_NY;

CREATE TABLE Employee_NY_Financial AS
SELECT emp_id, salary, dept_id FROM Employee_NY;
```

#### 1.1.2 Correctness Rules for Fragmentation

To ensure that fragmentation is done correctly, the following rules must be satisfied:
1. **Completeness** - Every data item in the original relation must appear in at least one fragment.
2. **Reconstruction** - The original relation must be reconstructible from fragments using UNION (horizontal) or JOIN (vertical) operations.
3. **Disjointness** - Data items should not be duplicated across fragments (except primary keys in vertical fragmentation).

#### 1.1.3 Design Considerations for Fragmentation

When designing a fragmentation scheme, several factors should be considered:
1. **Access Patterns**: Group frequently accessed data items and collocate data accessed by the same transactions.
2. **Usage Frequency**: Replicate frequently accessed fragments across multiple sites for better performance.
3. **Storage Requirements**: Consider fragment sizes and available storage capacity at each site.
4. **Communication Costs**: Account for network bandwidth, latency, and data transfer costs between sites.

### 1.1.4 Advantages and Disadvantages of Fragmentation
**Advantages**
- **Improved Performance**: Queries can be executed on smaller fragments, reducing response time.
- **Scalability**: New fragments can be added as data grows, allowing for horizontal scaling.
- **Load Balancing**: Fragments can be distributed across multiple sites, balancing the load and improving resource utilization.
- **Reduced Communication Costs**: Only relevant fragments are accessed, minimizing data transfer over the network.

**Disadvantages**
- **Complexity**: Fragmentation adds complexity to the database design and management.
- **Reconstruction Overhead**: Reconstructing the original relation from fragments can introduce overhead, especially for complex queries.
- **Data Redundancy**: In some cases, fragments may contain overlapping data, leading to redundancy.
- **Consistency Challenges**: Ensuring consistency across fragments can be difficult, especially with concurrent updates.

### 1.2 Replication

Replication involves creating and maintaining multiple copies of data across different sites in a distributed database system. It enhances data availability, fault tolerance, and performance. Replication can be done at the level of entire relations or fragments.

#### 1.2.1 Types of Replication

Replication can be classified into three main types based on the extent of data replication: Full Replication, Partial Replication, and No Replication.

**Full Replication**
- Every site has a complete copy of all data
- Good: High availability, fast reads
- Bad: Uses more storage, updates are complex
- Example: Banking data stored at all branches

**Partial Replication**
- Only some data is copied to multiple sites
- Good: Balance between availability and storage
- Bad: Some complexity in managing which data to replicate
- Example: Customer profiles replicated, transaction logs are not

**No Replication**
- Each piece of data exists at only one site
- Good: Saves storage space, simple updates
- Bad: If site fails, data is unavailable
- Example: Archive data stored at single location

#### 1.2.2 Replication Strategies

Replication strategies determine how updates are propagated to replicas. The choice of strategy affects consistency, performance, and fault tolerance. Three common strategies are synchronous, asynchronous, and semi-synchronous replication.

**Synchronous Replication**
- All copies are updated at the same time
- Data is always consistent everywhere
- Slower because it waits for all sites to confirm
- Like calling everyone to confirm they got your message before hanging up

**Asynchronous Replication**
- Main copy is updated first, others updated later
- Faster but copies might be different temporarily
- Like sending an email - you don't wait for everyone to read it
- Good when small delays are okay

**Semi-Synchronous Replication**
- Updates some copies immediately, others later
- Balance between speed and consistency
- Like getting confirmation from half your friends before proceeding

#### 1.2.3 Advantages and Disadvantages of Replication

**Advantages**
- **Improved Availability**: If one site fails, data remains available at other sites
- **Enhanced Performance**: Reads can be served from local replicas, reducing network traffic
- **Load Balancing**: Queries can be distributed across multiple replicas
- **Fault Tolerance**: Redundancy protects against data loss

**Disadvantages**
- **Storage Overhead**: Multiple copies consume more storage space
- **Update Complexity**: Ensuring consistency across replicas adds complexity
- **Increased Network Traffic**: Propagating updates to all replicas uses network bandwidth
- **Consistency Challenges**: Maintaining consistency becomes more difficult with more replicas

#### 1.2.4 Replication Models

Replication models define how data is replicated and updated across different sites. The choice of model affects consistency, performance, and fault tolerance. Three common replication models are primary-copy, update-anywhere, and quorum-based.

**Primary-Copy (Master-Slave) Model**
- One site is designated as the primary (master) for each data item
- All updates go through the primary site
- Read operations can be directed to any replica
- Example: MySQL primary-replica replication

**Update-Anywhere (Multi-Master) Model**
- Updates can be performed at any replica and propagated to others
- Requires sophisticated conflict detection and resolution
- Example: Multi-master replication in PostgreSQL BDR or Oracle Active Data Guard

**Quorum-Based Model**
- Uses voting to control read and write operations
- Requires a majority of replicas to agree for an operation to succeed
- Example: Operations require majority approval in systems like Apache Cassandra

#### 1.2.5 Differences Between Fragmentation and Replication
| Feature                | Fragmentation                                  | Replication                                    |
|------------------------|-----------------------------------------------|------------------------------------------------|
| Purpose                | Divide data into smaller, manageable pieces   | Create multiple copies of data for availability |
| Data Distribution      | Data is split across sites                    | Data is duplicated across sites                 |
| Data Access            | Access to specific fragments based on queries | Access to any replica for reads                  |
| Update Strategy        | Updates apply to specific fragments           | Updates apply to all replicas                    |
| Consistency            | Reconstructs original relation from fragments | Ensures consistency across replicas              |
| Storage Overhead       | Lower, as data is divided                      | Higher, as multiple copies are stored            |
| Complexity             | Moderate, requires reconstruction logic       | High, requires synchronization and conflict resolution |

### 1.3 Location and Fragment Transparency

Location and fragment transparency are key features of distributed databases that allow users to access data without needing to know its physical location or how it is fragmented.

#### 1.3.1 Location Transparency

Location transparency allows users to access data without knowing where it is physically stored. This is achieved through a global schema that abstracts the underlying data distribution.

**Components Enabling Location Transparency**
- **Distributed Data Catalog**: Maintains metadata about the location of all data items
- **Name Resolution**: Maps logical names to physical locations
- **Query Routing**: Directs queries to appropriate sites

Example of how location transparency works:
```sql
-- User query (location-transparent)
SELECT * FROM Employee WHERE emp_id = 1001;

-- System translates to:
-- 1. Look up where Employee data for emp_id 1001 is located
-- 2. Route the query to the appropriate site(s)
-- 3. Execute the query
-- 4. Return results to the user
```

#### 1.3.2 Fragment Transparency

Fragment transparency allows users to access data without needing to know how it is fragmented. The system handles the fragmentation and reconstruction of data.

**Components Enabling Fragment Transparency**
- **Global Schema**: Presents a unified view of the database
- **Fragment Schema**: Details how relations are fragmented
- **Mapping Information**: Links global schema to fragment schemas

Example of query processing with fragment transparency:
```sql
-- User query (fragment-transparent)
SELECT name, salary FROM Employee WHERE location = 'New York';

-- System translates to:
-- 1. Determine that Employee is horizontally fragmented by location
-- 2. Identify that only Employee_NY fragment is needed
-- 3. Execute the query on the Employee_NY fragment
-- 4. Return results to the user
```

#### 1.3.3 Combined Transparency

When both location and fragment transparency are combined:

```sql
-- User query (fully transparent)
SELECT * FROM Employee WHERE salary > 100000;

-- System process:
-- 1. Identify all fragments containing Employee data
-- 2. Determine which fragments might contain relevant data
-- 3. Locate each required fragment
-- 4. Execute the query on each site
-- 5. Combine results if necessary
-- 6. Return unified result to the user
```

## 2. Distributed Query Processing and Optimization

Distributed query processing involves executing queries across multiple sites in a distributed database system. The goal is to optimize query execution by minimizing data transfer, reducing response time, and balancing the load across sites.

### 2.1 Stages of Distributed Query Processing

Distributed query processing typically involves several stages:

#### 2.1.1 Query Decomposition

The first stage breaks down a complex query into its component operations:
1. **Parsing**: Convert SQL query to an internal representation
2. **Normalization**: Standardize the query representation
3. **Analysis**: Validate query against schema information
4. **Algebraic Conversion**: Transform to relational algebra expressions

Example:
```sql
-- Original SQL query
SELECT E.name, D.dept_name
FROM Employee E, Department D
WHERE E.dept_id = D.dept_id AND E.salary > 50000;

-- Converted to relational algebra
π name, dept_name (σ salary > 50000 (Employee ⋈ Department))
```

#### 2.1.2 Data Localization

Data localization transforms a distributed query into fragment queries:

1. **Fragment Selection**: Identify relevant fragments for the query
2. **Substitution**: Replace relations with appropriate fragments
3. **Simplification**: Optimize fragment queries using predicate information

Example with horizontal fragmentation:
```
-- Global relation query
σ location='New York' AND salary > 50000 (Employee)

-- After fragment substitution (assuming horizontal fragmentation by location)
-- Only need to access Employee_NY fragment
σ salary > 50000 (Employee_NY)
```

#### 2.1.3 Global Query Optimization

Global optimization focuses on generating an efficient execution plan for the entire distributed query:

1. **Join Order Selection**: Determine the order of joining relations
2. **Site Selection**: Choose execution sites for each operation
3. **Operation Scheduling**: Decide the timing of operations

#### 2.1.4 Distributed Execution

The final stage executes the optimized query plan:

1. **Local Execution**: Execute operations at individual sites
2. **Data Movement**: Transfer data between sites as needed
3. **Result Composition**: Combine results from different sites
4. **Result Delivery**: Return the final result to the user

### 2.2 Distributed Query Optimization Techniques

Distributed query optimization techniques aim to minimize the cost of executing queries across multiple sites. The cost can be measured in terms of communication, processing, and I/O costs.

Several techniques are used to optimize distributed queries:

#### 2.2.1 Semi-Join Strategy

Semi-join reduces the amount of data transferred between sites:

1. Project the join column from one relation
2. Send the projection to the site of the other relation
3. Join the projection with the second relation
4. Send the result back to the first site
5. Join with the first relation

Example:
```
-- Need to join Employee (at Site 1) and Department (at Site 2)

-- Step 1: Project join column from Employee
π dept_id (Employee) -> Site 2

-- Step 2: Join with Department at Site 2
Result = Department ⋈ π dept_id (Employee)

-- Step 3: Send result back to Site 1
Result -> Site 1

-- Step 4: Join with Employee at Site 1
Final Result = Employee ⋈ Result
```

#### 2.2.2 Join Strategies

Different join strategies can be used in distributed environments:

**Nested Loop Join**
- Suitable when one relation is small
- Can be executed at either site
- Example:
  ```
  for each tuple r in R:
      for each tuple s in S:
          if r.join_attr = s.join_attr:
              output (r, s)
  ```

**Hash Join**
- Effective for larger relations
- Hash the smaller relation, scan the larger one
- Example:
  ```
  1. Build hash table for relation R using join attribute
  2. For each tuple in S, probe hash table
  3. Output matching tuples
  ```

**Ship-Whole Strategy**
- Move entire relations to a single site
- Useful when network is fast or relations are small
- Example: Ship Department to Employee's site if Department is small

#### 2.2.3 Cost Models for Distribution

Cost models account for both computation and communication costs:

**Communication Cost**
- Data transmission costs (proportional to data volume)
- Network latency (fixed cost per message)
- Example:
  ```
  Cost = message_startup_cost + (data_size * transmission_cost)
  ```

**Processing Cost**
- CPU time for query execution
- I/O time for disk operations
- Example:
  ```
  Cost = cpu_cost + io_cost
  ```

**Total Cost**
- Sum of communication and processing costs
- Example:
  ```
  Total Cost = communication_cost + processing_cost
  ```

#### 2.2.4 Query Execution Strategies

Different strategies can be used to execute distributed queries:

**Data Shipping**
- Move data to the site where the query originated
- Centralized execution but high data movement
- Example: Bring all Employee and Department data to the query site

**Query Shipping**
- Move the query (or subqueries) to the data sites
- Distributed execution with less data movement
- Example: Execute part of the query at the Employee site and part at the Department site

**Hybrid Approach**
- Combine data and query shipping based on costs
- Example: Ship small reference tables but process large fact tables in place

### 2.3 Distributed Transaction Processing

Distributed transactions span multiple sites and require careful coordination to maintain ACID properties.

#### 2.3.1 Distributed Transaction Model

A distributed transaction model involves:

**Transaction Manager (TM)**
- Coordinates the execution of the distributed transaction
- Implements the atomic commit protocol
- One TM exists for each site participating in the transaction

**Resource Manager (RM)**
- Manages access to local data resources
- Provides local transaction operations (read, write)
- Participates in the commit protocol

**Transaction Coordinator (TC)**
- One site is designated as the coordinator
- Initiates the commit protocol
- Collects votes and makes the final decision

Example of a distributed transaction:
```
-- Transaction spans two sites
BEGIN TRANSACTION;
   -- At Site 1
   UPDATE Account SET balance = balance - 1000 WHERE account_id = 101;
   
   -- At Site 2
   UPDATE Account SET balance = balance + 1000 WHERE account_id = 202;
COMMIT;
```

#### 2.3.2 Distributed Concurrency Control

Distributed concurrency control extends traditional methods to work across multiple sites:

**Centralized Approach**
- One site acts as the central lock manager
- All lock requests go through the central site
- Simple but creates a bottleneck and single point of failure

**Primary Copy Approach**
- For each data item, one copy is designated as the primary
- Lock requests for an item go to its primary site
- Reduces contention but still has single points of failure for each item

**Distributed Approach**
- Lock management is distributed across sites
- Each site manages locks for its local data
- Requires protocols to prevent distributed deadlocks

Example of distributed two-phase locking:
```
-- Transaction T1 accessing data at Sites 1 and 2

-- At Site 1
Request and acquire lock on Account 101

-- At Site 2
Request and acquire lock on Account 202

-- Perform operations at both sites

-- Growing phase complete, begin shrinking phase

-- At commit time
Release locks at both sites
```

### 2.4 Distributed Deadlock

Distributed deadlocks occur when two or more transactions across multiple sites wait for each other in a cyclic manner.

#### 2.4.1 Types of Distributed Deadlocks

Distributed deadlocks can be classified into two types:

**Direct Deadlock**
- Involves a direct cycle of wait relationships
- Example: T1 at Site 1 waits for T2 at Site 2, while T2 waits for T1

**Indirect Deadlock**
- Involves multiple transactions at different sites forming a cycle
- Example: T1 waits for T2, T2 waits for T3, T3 waits for T1, all at different sites

#### 2.4.2 Distributed Deadlock Detection

Several approaches exist for detecting distributed deadlocks:

**Centralized Approach**
- One site is responsible for deadlock detection
- Sites periodically send wait-for information to the central site
- Central site constructs global wait-for graph and checks for cycles
- Simple but creates a bottleneck

**Distributed Approach**
- Each site maintains its local wait-for graph
- Sites exchange information about potential deadlocks
- More complex but avoids central bottleneck

**Path-Pushing Algorithm**
1. When transaction T waits, site sends wait-for path to sites where blocked transactions reside
2. Receiving sites extend the path with their local wait-for information
3. If a path forms a cycle, a deadlock is detected

Example of a distributed deadlock:
```
-- At Site 1
Transaction T1 holds lock on A, requests lock on B (located at Site 2)

-- At Site 2
Transaction T2 holds lock on B, requests lock on C (located at Site 3)

-- At Site 3
Transaction T3 holds lock on C, requests lock on A (located at Site 1)

-- Deadlock cycle: T1 → T2 → T3 → T1
```

#### 2.4.3 Distributed Deadlock Prevention

Prevention techniques avoid deadlocks by constraining how transactions request resources:

**Timeouts**
- Abort a transaction if it waits too long for a lock
- Simple but may abort transactions unnecessarily

**Wait-Die**
- If requesting transaction is older, it waits; otherwise, it aborts ("dies")
- Prevents younger transactions from making older ones wait
- Example:
  ```
  T1 (timestamp=10) requests resource held by T2 (timestamp=20)
  Since T1 is older (smaller timestamp), T1 waits
  ```

**Wound-Wait**
- If requesting transaction is older, the holding transaction aborts ("is wounded"); otherwise, requester waits
- Example:
  ```
  T1 (timestamp=10) requests resource held by T2 (timestamp=20)
  Since T1 is older, T2 is "wounded" (aborted)
  ```

### 2.5 Commit Protocols

Commit protocols ensure that all participants in a distributed transaction either commit or abort the transaction, maintaining the atomicity property of transactions. 

#### 2.5.1 Two-Phase Commit (2PC) Protocol

The two-phase commit protocol is a widely used commit protocol for distributed transactions. It consists of two phases:

**Phase 1: Prepare Phase**
1. Coordinator sends a PREPARE message to all participants
2. Participants vote YES (ready to commit) or NO (abort)
3. If a participant votes YES, it enters a prepared state and cannot unilaterally abort

**Phase 2: Commit Phase**
1. If all participants vote YES, coordinator sends COMMIT message
2. If any participant votes NO, coordinator sends ABORT message
3. Participants acknowledge the final decision

Example of Two-Phase Commit:
```
-- Coordinator sends PREPARE to participants
Coordinator → Participant1: PREPARE
Coordinator → Participant2: PREPARE

-- Participants respond with votes
Participant1 → Coordinator: YES
Participant2 → Coordinator: NO

-- Coordinator decides based on votes
Coordinator → Participant1: ABORT
Coordinator → Participant2: ABORT

-- Participants acknowledge the decision
Participant1 → Coordinator: ACK
Participant2 → Coordinator: ACK
```

**Failure Scenarios in 2PC**

1. **Participant failure before voting**: Coordinator timeouts and aborts
2. **Participant failure after voting YES**: Upon recovery, participant contacts coordinator
3. **Coordinator failure after collecting votes**: Participants must wait for coordinator recovery
4. **Network partition**: May block participants until connectivity is restored

#### 2.5.2 Three-Phase Commit (3PC) Protocol

The three-phase commit protocol addresses some blocking issues in 2PC by adding an extra phase:

**Phase 1: Prepare Phase**
- Same as in 2PC

**Phase 2: PreCommit Phase**
- Coordinator sends PRECOMMIT or ABORT message
- Participants acknowledge and prepare to commit

**Phase 3: Commit Phase**
- Coordinator sends final COMMIT message
- Participants complete the transaction

Benefits of 3PC:
- Reduces blocking in some failure scenarios
- Allows participants to timeout and resolve independently

Drawbacks:
- Higher message overhead
- Still blocks in certain network partition scenarios
- More complex implementation

## 3. Design of Parallel Databases

Parallel databases leverage multiple processors and storage devices to improve performance through parallel processing. They are designed to handle large volumes of data and complex queries efficiently.

### 3.1 Parallel Database Architectures

Various architectures exist for parallel database systems, each with its own advantages and disadvantages. The choice of architecture depends on the specific requirements of the application and the underlying hardware.

#### 3.1.1 Shared Memory Architecture

In shared memory architecture:
- Multiple processors share a common memory
- All processors access the same database buffers in shared memory
- Simple programming model but limited scalability due to memory contention

```
┌───────────────────────────────────────┐
│           Shared Memory               │
├───────┬───────┬───────┬───────┬───────┤
│ CPU 1 │ CPU 2 │ CPU 3 │ ...   │ CPU n │
└───────┴───────┴───────┴───────┴───────┘
         │       │       │       │
┌────────┴───────┴───────┴───────┴───────┐
│                 I/O                    │
└────────────────────────────────────────┘
         │       │       │       │
┌────────┴───────┴───────┴───────┴───────┐
│          Disk Subsystem                │
└────────────────────────────────────────┘
```

#### 3.1.2 Shared Disk Architecture

In shared disk architecture:
- Each processor has its own private memory
- All processors share a common disk subsystem
- Better scalability than shared memory but requires cache coherency protocols

```
┌───────┐ ┌───────┐ ┌───────┐     ┌───────┐
│ CPU 1 │ │ CPU 2 │ │ CPU 3 │ ... │ CPU n │
└───┬───┘ └───┬───┘ └───┬───┘     └───┬───┘
    │         │         │             │
┌───▼───┐ ┌───▼───┐ ┌───▼───┐     ┌───▼───┐
│ Mem 1 │ │ Mem 2 │ │ Mem 3 │ ... │ Mem n │
└───────┘ └───────┘ └───────┘     └───────┘
    │         │         │             │
┌───┴─────────┴─────────┴─────────────┴──┐
│           Shared Disk System           │
└────────────────────────────────────────┘
```

#### 3.1.3 Shared Nothing Architecture

In shared nothing architecture:
- Each processor has its own private memory and disk
- Processors communicate through a high-speed network
- Excellent scalability but requires data partitioning and distributed query processing

```
┌───────┐ ┌───────┐ ┌───────┐     ┌───────┐
│ CPU 1 │ │ CPU 2 │ │ CPU 3 │ ... │ CPU n │
└───┬───┘ └───┬───┘ └───┬───┘     └───┬───┘
    │         │         │             │
┌───▼───┐ ┌───▼───┐ ┌───▼───┐     ┌───▼───┐
│ Mem 1 │ │ Mem 2 │ │ Mem 3 │ ... │ Mem n │
└───┬───┘ └───┬───┘ └───┬───┘     └───┬───┘
    │         │         │             │
┌───▼───┐ ┌───▼───┐ ┌───▼───┐     ┌───▼───┐
│Disk 1 │ │Disk 2 │ │Disk 3 │ ... │Disk n │
└───────┘ └───────┘ └───────┘     └───────┘
    │         │         │             │
┌────────────────────────────────────────┐
│        High-Speed Network              │
└────────────────────────────────────────┘
```

#### 3.1.4 Hierarchical Architecture

Hierarchical architecture combines aspects of the above models:
- Multiple shared memory nodes
- Each node contains multiple processors with shared memory
- Nodes are connected in a shared nothing configuration
- Balances the advantages of different architectures

### 3.2 Data Partitioning in Parallel Databases

Data partitioning refers to dividing a large dataset into smaller chunks (called partitions) and distributing them across multiple nodes in a parallel database system. The goal is to improve performance by allowing multiple processors to work on different parts of the data simultaneously.

#### 3.2.1 Round-Robin Partitioning

- Tuples are assigned to partitions in a round-robin fashion
- Simple and ensures even distribution of data
- Example: Tuple 1 → Node 1, Tuple 2 → Node 2, ..., Tuple n → Node (n mod k)

#### 3.2.2 Hash Partitioning

- A hash function is applied to a partitioning attribute
- Tuples with the same attribute value are assigned to the same partition
- Good for equality queries on the partitioning attribute
- Example:
  ```
  Node_number = hash(employee_id) mod num_nodes
  ```

#### 3.2.3 Range Partitioning

- The range of values for a partitioning attribute is divided
- Each partition is assigned a non-overlapping range
- Good for range queries on the partitioning attribute
- Example:
  ```
  Node 1: employee_id 1-1000
  Node 2: employee_id 1001-2000
  etc.
  ```

#### 3.2.4 Composite Partitioning

- Combines multiple partitioning methods
- Example: First hash partition, then range partition within each hash partition
- Provides more flexibility for complex query patterns

### 3.3 Parallel Database Operations

Parallel database operations leverage the parallel architecture to execute queries more efficiently. The main operations include sorting, joining, and aggregation.

#### 3.3.1 Parallel Sort

Sorting in parallel databases can be done using various algorithms, depending on the data distribution and the architecture.

**Exchange Sort**
- Split data into pieces across different computers
- Each computer sorts its piece
- Combine all sorted pieces together

**Parallel Merge Sort**  
- Break data into small chunks
- Sort each chunk at the same time on different processors
- Merge the sorted chunks together to get the final result

Example: If you have 1 million records to sort:
- Give 250,000 records to each of 4 computers
- Each computer sorts its portion
- Combine the 4 sorted portions into one final sorted list

#### 3.3.2 Parallel Join

Joining relations in parallel databases can be done using several strategies, depending on the data distribution and the join type.

**Parallel Nested Loop Join**
- Split the first table into pieces across different computers
- Send the entire second table to each computer
- Each computer joins its piece with the whole second table
- Simple but slow for large tables

**Parallel Hash Join**
- Split both tables using the same method (like grouping by first letter of name)
- Each computer joins its matching pieces together
- Combine all results into final answer

Example:
```
-- Partition R and S using hash(join_attribute)
-- At each node i:
Build hash table for R_i
For each tuple in S_i:
    Probe hash table for matches
    Output matching tuples
```

**Parallel Sort-Merge Join**
1. Partition both relations on join attribute
2. Sort partitions locally
3. Perform merge join on corresponding partitions

#### 3.3.3 Parallel Aggregation

Aggregation operations can be performed in parallel to improve performance.

**Local Aggregation, Global Consolidation**
1. Perform partial aggregations locally at each node
2. Send partial results to a coordinator node
3. Consolidate partial results into final aggregations

Example:
```sql
-- Count employees by department
-- Original query
SELECT dept_id, COUNT(*) FROM Employee GROUP BY dept_id;

-- Parallel execution
-- At each node:
SELECT dept_id, COUNT(*) FROM Employee_partition GROUP BY dept_id;

-- At coordinator:
SELECT dept_id, SUM(count) FROM partial_results GROUP BY dept_id;
```

## 4. Parallel Query Evaluation

Parallel query evaluation is the process of executing queries in a parallel database system to improve performance. It involves breaking down queries into smaller tasks that can be executed concurrently across multiple processors or nodes.
The goal is to minimize response time and maximize throughput by leveraging the available resources effectively.

### 4.1 Forms of Parallelism

Different forms of parallelism can be applied in database systems:

#### 4.1.1 Inter-Query Parallelism

- Multiple queries are executed concurrently
- Each query runs on a separate processor
- Increases system throughput but doesn't reduce response time for individual queries
- Example: Multiple users executing different queries simultaneously

#### 4.1.2 Intra-Query Parallelism

- Single query is divided into subtasks executed in parallel
- Reduces response time for individual queries
- Two main types:

**Inter-Operator Parallelism (Pipelined Parallelism)**
- Different operators in the query plan execute concurrently
- Output of one operator becomes input to another operator
- Example: Selection and projection executing simultaneously

```
┌─────────┐
│ SELECT  │
└────┬────┘
     │
     ▼
┌─────────┐
│ PROJECT │
└────┬────┘
     │
     ▼
┌─────────┐
│  JOIN   │
└─────────┘
```

**Intra-Operator Parallelism (Partitioned Parallelism)**
- Single operator is divided into multiple instances
- Each instance works on a partition of the data
- Example: Parallel scan of a large table

```
┌───────────┬───────────┬───────────┬───────────┐
│ Scan      │ Scan      │ Scan      │ Scan      │
│Partition1 │ Partition2│ Partition3│ Partition4│
└─────┬─────┴─────┬─────┴─────┬─────┴─────┬─────┘
      │           │           │           │
      └───────────┼───────────┼───────────┘
                  │           │
          ┌───────┴───────────┴───────┐
          │        Merge              │
          └───────────────────────────┘
```

#### 4.1.3 Bushy Parallelism

- Combines aspects of both inter- and intra-operator parallelism
- Multiple branches of the query tree execute in parallel
- Example: Multiple joins executing concurrently

```
    ┌─────────┐
    │  JOIN   │
    └────┬────┘
┌────────┴────────┐
▼                 ▼
┌─────────┐   ┌─────────┐
│  JOIN   │   │  JOIN   │
└────┬────┘   └────┬────┘
┌────┴────┐   ┌────┴────┐
▼         ▼   ▼         ▼
┌───┐   ┌───┐ ┌───┐   ┌───┐
│ A │   │ B │ │ C │   │ D │
└───┘   └───┘ └───┘   └───┘
```

### 4.2 Parallel Query Optimization

Parallel query optimization involves selecting the best execution plan for a query in a parallel database system. The goal is to minimize execution time while maximizing resource utilization.
The optimization process considers various factors, including the degree of parallelism, partitioning strategies, resource allocation, and skew handling.

#### 4.2.1 Degree of Parallelism

Deciding the optimal degree of parallelism involves balancing:

- **Available Resources**: Number of processors, memory, disk bandwidth
- **Query Complexity**: More complex queries may benefit from higher parallelism
- **Data Size**: Larger datasets typically benefit from more parallelism
- **Diminishing Returns**: Beyond a certain point, adding more parallelism yields minimal benefits

Example approaches:
- Static assignment: Fixed degree based on system configuration
- Dynamic assignment: Adjusted based on system load and query characteristics
- Cost-based: Based on estimated query cost and available resources

#### 4.2.2 Partitioning Strategy Selection

Choosing the right partitioning strategy based on query requirements:

- **Join Queries**: Partition on join attributes to minimize data movement
- **Range Queries**: Range partitioning for attributes used in range predicates
- **Complex Queries**: Possibly multiple partitioning schemes for different operations

Example:
```sql
-- Query with join and range condition
SELECT * FROM Orders O JOIN Customers C ON O.customer_id = C.customer_id
WHERE O.order_date BETWEEN '2023-01-01' AND '2023-03-31';

-- Potential partitioning:
-- 1. Hash partition both Orders and Customers on customer_id for join
-- 2. Range partition Orders on order_date for the date range condition
```

#### 4.2.3 Resource Allocation

Optimal allocation of resources across parallel operations:

- **Memory Allocation**: Buffer space for each parallel operator
- **CPU Allocation**: Processor assignment for different operations
- **I/O Bandwidth**: Balancing disk access across operations

#### 4.2.4 Skew Handling

Dealing with data skew to prevent bottlenecks:

- **Detection**: Identify potential skew in data distribution
- **Redistribution**: Dynamically redistribute work to balance load
- **Adaptive Processing**: Adjust execution plan based on observed skew

Example handling of skew in parallel hash join:
```
1. Sample data to detect skew
2. For skewed values:
   - Process in a separate phase
   - Use different join algorithm
3. For non-skewed values:
   - Process using standard parallel hash join
```

### 4.3 Parallel Query Execution

Parallel query execution involves executing the optimized query plan across multiple processors and disks.
The execution of parallel queries involves several key techniques:

#### 4.3.1 Exchange Operators

Exchange operators facilitate data movement between parallel operators:

- **Gather**: Collect data from multiple sources to a single destination
- **Distribute**: Send data from a single source to multiple destinations
- **Repartition**: Redistribute data from multiple sources to multiple destinations

Example exchange operator usage:
```
-- Before parallel processing
TABLE(A)
    |
JOIN with B
    |
AGGREGATE

-- With exchange operators
TABLE(A) -> [DISTRIBUTE] -> Parallel JOIN instances with B
                              |
                          [GATHER] -> AGGREGATE
```

#### 4.3.2 Parallel Join Execution

Execution strategies for parallel joins:

**Broadcast Join**
- Replicate smaller relation to all nodes
- Join with local partition of larger relation
- Good when one relation is much smaller

**Partitioned Join**
- Partition both relations using the same scheme
- Perform local joins in parallel
- Good when both relations are large

**Hybrid Join**
- Combine broadcast and partitioned approaches
- Use different strategies for different parts of the data

#### 4.3.3 Load Balancing Techniques

Techniques to ensure balanced workload distribution:

**Static Load Balancing**
- Distribute work evenly before execution
- Simple but vulnerable to unexpected skew

**Dynamic Load Balancing**
- Redistribute work during execution
- More complex but adapts to observed workload

**Work Stealing**
- Idle processors "steal" work from busy ones
- Adaptive but requires coordination mechanism

This concludes our comprehensive examination of parallel and distributed databases in Advanced Database Management Systems. Understanding these concepts is essential for designing and implementing database systems that can efficiently handle large-scale data processing and storage requirements across distributed environments.

---

*These notes were compiled by [Deepak Modi](https://deepakmodi.tech)*      
*Visit [NotesNeo](https://notesneo.vercel.app) for more resources.*    
*Last updated: June 2025*