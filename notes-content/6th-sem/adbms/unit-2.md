---
title: "Unit 2: Recovery and Concurrency Control"
description: "Reliability, Transactions, Recovery mechanisms, Buffer management, Concurrency control, Locking schemes, and Deadlock handling"
author: "Deepak Modi"
date: "2025-06-15"
pdfUrl: ""
---

## Syllabus:

**Recovery:** Reliability, Transactions, recovery in centralized DBMS, reflecting updates, Buffer management logging schemes, disaster recovery.    
**Concurrency:** Introduction, Serializability, Concurrency control, Locking schemes, Timestamp based ordering, Optimistic, Scheduling, Multiversion techniques, Deadlocks.

---

## 1. Recovery

Database recovery refers to the process of restoring the database to a correct state after a failure. It's a critical component of any DBMS that ensures data reliability and durability.

### 1.1 Reliability in Database Systems

Reliability in database systems refers to the ability to maintain data integrity and availability despite various types of failures.

#### 1.1.1 Types of Failures

Database systems must be designed to handle several types of failures:

**1. Transaction Failures**
- **Logical Errors**: Invalid operations within the transaction (e.g., division by zero)
- **System Errors**: Errors detected by the transaction system (e.g., deadlocks)
- **System-Enforced Aborts**: Aborts due to concurrency control violations

**2. System Failures**
- **Software Failures**: Operating system crashes, DBMS process failures
- **Hardware Failures**: CPU failures, memory corruption
- **Power Outages**: Unexpected loss of power

**3. Media Failures**
- **Disk Failures**: Hard disk crashes, corrupted disk blocks
- **Storage Device Malfunctions**: Failures in storage arrays or controllers

**4. Natural Disasters**
- **Fires, Floods, Earthquakes**: Physical destruction of data centers

#### 1.1.2 ACID Properties

The ACID properties ensure reliable transaction processing:

**Atomicity**
- A transaction is treated as a single unit of work consisting of one or more operations
- Transactions are all-or-nothing operations
- Either all operations complete successfully or none are applied
- Example: Bank transfer must either debit one account AND credit another, or do neither

**Consistency**
- Transactions must transition the database from one valid state to another
- All integrity constraints must be satisfied before and after the transaction
- Transactions must not violate any database rules or constraints
- Example: Account balances must remain non-negative after a bank transfer

**Isolation**
- Transactions execute independently of each other
- The effects of a transaction are not visible to others until it commits
- Concurrent transactions execute as if they were running sequentially
- Example: Two concurrent withdrawals from the same account must not result in overdrawing 

**Durability**
- Once a transaction commits, its changes are permanent
- Changes are saved to stable storage, ensuring they survive system failures
- Even in the event of a crash, committed transactions must not be lost
- Example: After confirming a fund transfer, the money must remain in the destination account even if the system crashes

#### 1.1.3 Reliability Metrics

Several metrics help quantify database reliability:

**1. Mean Time Between Failures (MTBF)**
- The average time between failures of a system
- Higher MTBF indicates better reliability

**2. Mean Time To Repair (MTTR)**
- The average time required to repair a failed system
- Lower MTTR indicates better serviceability

**3. Availability**
- The percentage of time a system is operational
- Calculated as: Availability = MTBF / (MTBF + MTTR)
- Often expressed in "nines" (e.g., 99.999% availability = "five nines")

**4. Recovery Point Objective (RPO)**
- The maximum acceptable amount of data loss measured in time
- Example: An RPO of 1 hour means you can lose at most 1 hour of data

**5. Recovery Time Objective (RTO)**
- The maximum acceptable downtime after a failure
- Example: An RTO of 15 minutes means the system should be restored within 15 minutes of a failure

### 1.2 Transactions

A transaction is a logical unit of work that must be executed atomically and in isolation from other transactions. It consists of a sequence of operations that read and write data in the database.

#### 1.2.1 Transaction States

A transaction can be in one of the following states:

**Active**
- The initial state of a transaction
- Transaction is currently executing its operations

**Partially Committed**
- All operations completed but not yet permanently saved 
- The transaction has not yet reached a commit point

**Failed**
- Transaction encountered an error and cannot continue
- Caused by hardware failure, logical errors, or deadlocks

**Aborted**
- Transaction was cancelled and all changes were undone
- All operations performed by the transaction are rolled back

**Committed**
- Transaction completed successfully with all changes permanently saved
- All operations are now visible to other transactions

**Terminated**
- Final state indicating the transaction has ended 
- Can be either committed or aborted

The state transition diagram for transactions:

![Transaction State Diagram](https://media.geeksforgeeks.org/wp-content/uploads/20250110115126815855/transition_states_in_dbms.webp)

The flow typically goes: **Active → Partially Committed → Committed → Terminated** for successful transactions, or **Active → Failed → Aborted → Terminated** for unsuccessful ones.

#### 1.2.2 Transaction Operations

Transactions interact with the database through the following operations:

**BEGIN TRANSACTION**
- Marks the beginning of a transaction
- Establishes a transaction boundary

**READ (X)**
- Reads the value of database item X from the database to a transaction variable

**WRITE (X)**
- Writes the value of transaction variable X to the database

**COMMIT**
- Successfully terminates the transaction
- Makes all changes permanent

**ROLLBACK (or ABORT)**
- Terminates the transaction unsuccessfully
- Undoes all changes made by the transaction

Example of a transaction in SQL:

```sql
BEGIN TRANSACTION;
    UPDATE Accounts SET Balance = Balance - 1000 WHERE AccountNo = 'A123';
    UPDATE Accounts SET Balance = Balance + 1000 WHERE AccountNo = 'B456';
    
    -- Check if A123 has sufficient balance
    IF (SELECT Balance FROM Accounts WHERE AccountNo = 'A123') < 0 THEN
        ROLLBACK;
    ELSE
        COMMIT;
    END IF;
END TRANSACTION;
```

### 1.3 Recovery in Centralized DBMS

Recovery in a centralized DBMS involves restoring the database to a consistent state after a failure. It ensures that all committed transactions are reflected in the database and that uncommitted transactions are rolled back.

#### 1.3.1 Recovery Process Overview

The recovery process consists of the following steps:

**1. Failure Detection**
- Recognizing that a failure has occurred
- Identifying the type of failure

**2. Damage Assessment**
- Determining which parts of the database are affected
- Identifying which transactions were active during the failure

**3. Recovery Operation**
- Restoring the database to a consistent state
- Using logs, checkpoints, or backup copies

**4. Database Restart**
- Resuming normal operations
- Restarting transaction processing

#### 1.3.2 Recovery Techniques

Several techniques are used for recovery in centralized DBMS:

**1. Log-Based Recovery**
- Records all database changes in a transaction log
- Log contains before and after values of modified data
- Uses log to redo committed transactions and undo uncommitted ones

**2. Checkpointing**
- Saves database state to disk at regular intervals
- Reduces recovery time by limiting log processing
- Creates checkpoint records in the log

**3. Shadow Paging**
- Keeps copies of database pages in memory
- Creates new pages for modifications instead of overwriting
- Original pages serve as backup if failure occurs

**4. Write-Ahead Logging (WAL)**
- Writes log records before modifying data pages
- Ensures all changes can be redone or undone
- Core principle in modern database systems

### 1.4 Reflecting Updates

Reflecting updates in the database is essential for ensuring that all changes made by transactions are accurately recorded and can be recovered in case of failures.

#### 1.4.1 Write-Ahead Logging (WAL)

The Write-Ahead Logging protocol ensures durability and atomicity:

**WAL Principle**
- Log records must be written to stable storage before data modifications
- Ensures that we can redo operations in case of failure
- Enables the rollback of incomplete transactions

**WAL Rules**
1. Log records for a data item X must be flushed to disk before X is modified on disk
2. All log records for a transaction must be flushed to disk before the transaction commits

**Example of WAL protocol:**
1. Transaction T starts
2. T performs read/write operations in memory
3. Log records for T's operations are created
4. Log records are forced to disk
5. T commits, commit record is forced to disk
6. Modified data pages can now be written to disk

#### 1.4.2 Update-in-Place vs. Copy-on-Write

**Update-in-Place**
- Modifies data directly in its original location
- Requires undo logging for recovery
- Most commonly used approach in traditional databases

**Copy-on-Write**
- Creates a new version of data when modified
- Old version remains unchanged
- No need for undo logging
- Used in modern systems like PostgreSQL (MVCC) and many NoSQL databases

#### 1.4.3 Database Checkpointing

Checkpointing reduces recovery time by limiting how far back the system must go during recovery:

**Types of Checkpoints**

**1. Consistent Checkpoints**
- Suspend all transaction processing during the checkpoint
- Flush all modified buffers to disk
- Write a checkpoint record to the log
- Simple but impacts performance due to system pause

**2. Fuzzy Checkpoints**
- Don't suspend transaction processing
- Record the active transactions at checkpoint time
- More complex but better performance
- Used in most modern DBMS

Example checkpoint process:
1. Suspend new transactions temporarily
2. Write a "begin checkpoint" record to the log
3. Write all dirty buffer pages to disk
4. Record active transaction IDs and their last log records
5. Write an "end checkpoint" record to the log
6. Resume normal processing

### 1.5 Buffer Management

Buffer is a memory area used to temporarily hold data that is being read from or written to disk. Buffer management is crucial for efficient database performance, as it reduces the number of disk I/O operations.

#### 1.5.1 Buffer Manager Architecture

The Buffer Manager acts as a mediator between the disk storage and main memory. It manages a Buffer Pool, which is a reserved portion of RAM that stores pages (blocks of data) that are frequently accessed or recently used.

**Buffer Manager Architecture Diagram**
```
                +------------------+
                |   Buffer Pool    | Part of Main Memory
                |  +------------+  |
                |  |   Page 1   |  |
                |  +------------+  |
                |  |   Page 2   |  |
                |  +------------+  |
                |  |    ...     |  |
                |  +------------+  |
                +--------▲---------+
                         |
             +-----------▼-----------+
             |     Buffer Manager    |
             +-----------▲-----------+
                         |
                +--------▼---------+
                |  Disk Storage    |
                +------------------+
```

**Buffer Pool**
- A fixed-size area in main memory used to cache data pages.
- Pages are read from disk into the buffer pool when needed
- Pages may be evicted from the buffer pool when full

**Buffer Manager Responsibilities**
1. **Page Replacement**: Decide which page to remove when the buffer is full
2. **Page Retrieval**: Load pages from disk into the buffer pool
3. **Page Flushing**: Write modified pages back to disk
4. **Buffer Allocation**: Allocate and deallocate pages in the buffer pool

**Buffer Pool Structure**
- Typically implemented as a hash table or linked list for fast access
- Each page contains metadata (e.g., page ID, dirty bit, reference count)

#### 1.5.2 Buffer Replacement Policies

When the buffer is full, the buffer manager must decide which pages to remove:

**1. First-In-First-Out (FIFO)**
- Removes the oldest page in the buffer
- Simple to implement but may not be optimal
- Can lead to poor performance if old pages are still needed

**2. Least Recently Used (LRU)**
- Removes the least recently accessed page
- Assumes that pages not accessed recently are less likely to be needed soon
- Efficient for workloads with temporal locality

**3. Least Frequently Used (LFU)**
- Removes the least frequently accessed page
- Keeps track of access counts for pages
- More complex but can be effective in certain scenarios

**4. Most Recently Used (MRU)**
- Removes the most recently accessed page
- Useful in scenarios where the most recently used pages are less likely to be needed again soon
- Can lead to poor performance in some cases

**5. Random Replacement**
- Randomly selects a page to evict
- Simple but may lead to poor performance in some cases
- Useful when access patterns are unpredictable

**6. Clock Algorithm**
- A variation of LRU that uses a circular buffer
- Each page has a reference bit that indicates if it has been accessed
- When a page needs to be replaced, the algorithm checks the reference bits in a circular manner

**7. Priority-Based Replacement**
- Assigns priority to pages based on usage patterns
- Higher priority pages are less likely to be evicted
- Useful in systems with varying access patterns

Most modern DBMS use a combination of LRU and other heuristics for better performance.

### 1.6 Logging Schemes

Logging is the primary mechanism for recovery in database systems. It records changes made to the database, allowing the system to recover from failures by replaying or undoing operations.

Logging schemes can be broadly classified into physical, logical, and physiological logging.

#### 1.6.1 Physical Logging

Physical logging records the actual data changes made to the database pages. It captures the before-image and after-image of data items.

**Content of Physical Log Records**
- Page ID
- Offset in the page
- Before-image (old value)
- After-image (new value)

**Advantages**
- Simple recovery process
- Fast redo/undo operations

**Disadvantages**
- Large log size
- Page-oriented (not logical operations)

#### 1.6.2 Logical Logging

Logical logging records the operations performed on the database rather than the physical changes. It captures the intent of the operations, making it more abstract.

**Content of Logical Log Records**
- Operation type (INSERT, UPDATE, DELETE)
- Table name
- Record identifier
- Column values

**Advantages**
- Smaller log size
- Independent of physical data organization

**Disadvantages**
- Complex recovery process
- Slower redo/undo operations

#### 1.6.3 Physiological Logging

Physiological logging combines aspects of both physical and logical logging. It records the physical changes but also includes logical information about the operations performed.

**Content of Physiological Log Records**
- Physical location (page ID)
- Logical operation within the page

**Advantages**
- Good balance between log size and recovery speed
- Works well with page-oriented storage

**Disadvantages**
- More complex than pure physical or logical logging

### 1.7 Disaster Recovery

Disaster recovery involves strategies to recover the database after catastrophic events, such as hardware failures, natural disasters, malicious attacks or data corruption. It ensures that the database can be restored to a consistent state with minimal data loss.

#### 1.7.1 Backup Strategies

Backup strategies are essential for disaster recovery. They involve creating copies of the database to restore it in case of failure.

**1. Full Backup**
- Complete copy of the entire database
- Simplest recovery but time-consuming to create
- Example: Weekly full backups of all database files

**2. Incremental Backup**
- Only changes since the last backup
- Faster to create but more complex to restore
- Example: Daily backups of changes since the last backup

**3. Differential Backup**
- All changes since the last full backup
- Balance between incremental and full
- Example: Daily backups of all changes since the last weekly full backup

**4. Continuous Backup**
- Real-time copying of data changes
- Minimal data loss but requires more resources
- Example: Transaction logs being copied to a backup server in real-time

#### 1.7.2 Database Replication

Replication involves maintaining copies of the database at multiple locations to ensure high availability and disaster recovery. It can be synchronous, asynchronous, or semi-synchronous.

**1. Synchronous Replication**
- Waits for all backup copies to be updated before saving changes
- All database copies stay exactly the same
- Takes more time to complete operations

**2. Asynchronous Replication**
- Saves changes first, then updates backup copies later
- Faster to complete operations but backup copies might be slightly behind
- Small risk of losing recent changes if main database fails

**3. Semi-synchronous Replication**
- Waits for at least one backup copy to confirm it received the changes
- Good balance between speed and safety
- Faster than synchronous but safer than asynchronous

#### 1.7.3 Standby Database Systems

Standby databases are used to maintain a copy of the primary database for disaster recovery. They can be classified into three types based on their readiness and recovery time.

**1. Hot Standby**
- Always running and ready to take over immediately
- Database is open for read operations
- Provides fastest recovery time
- Example: Oracle Active Data Guard

**2. Warm Standby**
- Running but may need some recovery time
- Services not fully started
- Moderate recovery time
- Example: SQL Server AlwaysOn with manual failover

**3. Cold Standby**
- Not running until needed
- Requires full startup and recovery
- Slowest recovery time but lowest operating cost
- Example: Periodic restoration of backups to a standby server

#### 1.7.4 High Availability Configurations

High availability configurations ensure that the database remains operational even in the event of failures. They can be implemented using various techniques:

**1. Failover Clustering**
- Multiple servers share access to the same storage
- If one node fails, another takes over
- Fast recovery but doesn't protect against storage failures
- Example: Windows Server Failover Clustering with SQL Server

**2. Database Mirroring**
- Maintains a separate copy of the database
- Can provide automatic failover
- Example: SQL Server Database Mirroring

**3. Distributed Database System**
- Data distributed across multiple locations
- Continues functioning even if some nodes fail
- Example: Amazon Aurora, Google Spanner

## 2. Concurrency

Concurrency refers to the simultaneous execution of multiple transactions in a database system. It is essential for maximizing resource utilization and throughput while ensuring data integrity.

### 2.1 Introduction to Concurrency Control

Concurrency control is the process of managing simultaneous transactions on the database without conflicting with each other. It ensures that transactions are executed in a way that maintains the ACID properties in the presence of concurrent operations.

#### 2.1.1 Concurrent Access Issues

Without proper concurrency control, the following problems can occur when multiple transactions access the same data concurrently:

**1. Lost Update Problem**
- Two transactions read and update the same data concurrently
- One transaction's changes overwrite the other's without incorporating its changes

Example:
```
Time | Transaction T1            | Transaction T2
-----|---------------------------|---------------------------
1    | Read balance (1000)       |
2    |                           | Read balance (1000)
3    | Subtract 100              |
4    |                           | Add 200
5    | Write balance (900)       |
6    |                           | Write balance (1200)
```
Problem: Final balance is 1200, but should be 1100 (original + 200 - 100)

**2. Dirty Read Problem**
- Transaction reads data that has been modified by another uncommitted transaction
- If the second transaction aborts, the first has read invalid data

Example:
```
Initial balance: 1000

Time | Transaction T1            | Transaction T2
-----|---------------------------|---------------------------
1    | Update balance to 900     |
2    |                           | Read balance (900)
3    |                           | Calculate interest
4    | Abort (rollback to 1000)  |
```
Problem: T2 calculated and applied interest based on balance 900, but actual balance was 1000

**3. Non-repeatable Read Problem**
- Transaction reads the same data twice but gets different values
- Another transaction modified the data between reads

Example:
```
Time | Transaction T1            | Transaction T2
-----|---------------------------|---------------------------
1    | Read balance (1000)       |
2    |                           | Update balance to 900
3    |                           | Commit
4    | Read balance again (900)  |
```
Problem: T1 reads different values for the same data item (1000 then 900) 

**4. Phantom Read Problem**
- Transaction executes the same query twice but gets different result sets
- Another transaction inserted or deleted rows between the reads that match the query criteria

Example:
```
Time | Transaction T1                     | Transaction T2
-----|-----------------------------------|---------------------------
1    | Select accounts with balance>1000 |
2    |                                   | Insert account with balance=1500
3    |                                   | Commit
4    | Select accounts with balance>1000 |
```
Problem: T1 gets different results on the second read due to T2's insertion

#### 2.1.2 Concurrency Control Mechanisms

Concurrency control mechanisms are techniques used to manage concurrent transactions and prevent anomalies such as lost updates, dirty reads, non-repeatable reads, and phantom reads. It ensures that transactions are executed in a way that maintains the ACID properties.

**1. Lock-Based Protocols**
- Use locks to control access to data items
- Ensure that only one transaction can modify a data item at a time
- Types of locks: Shared (S), Exclusive (X), Update (U)

**2. Timestamp-Based Protocols**
- Assign timestamps to transactions to determine the order of operations
- Ensures that transactions are executed in timestamp order
- Can lead to aborting transactions if conflicts arise

**3. Optimistic Concurrency Control**
- Assumes conflicts are rare and allows transactions to execute without locks
- Validates transactions before committing to ensure serializability
- If validation fails, the transaction is aborted and restarted

**4. Multiversion Concurrency Control (MVCC)**
- Maintains multiple versions of data items
- Allows readers to access a consistent snapshot while writers create new versions
- Reduces contention between read and write operations

**5. Two-Phase Locking (2PL)**
- Locks are acquired in a growing phase and released in a shrinking phase
- Guarantees conflict serializability but can lead to deadlocks

**6. Deadlock Detection and Resolution**
- Mechanisms to detect and resolve deadlocks when transactions are waiting indefinitely for resources
- Includes timeout strategies or wait-die/wound-wait schemes

#### 2.1.3 Concurrency Control Performance Metrics

Performance metrics are used to evaluate the effectiveness of concurrency control mechanisms:

**Throughput**
- Number of transactions processed per unit of time
- Higher is better

**Response Time**
- Time between submission and completion of a transaction
- Lower is better

**Resource Utilization**
- Efficient use of CPU, memory, and I/O
- Balance between utilization and contention

**Scalability**
- How well performance scales with increasing users/transactions
- Should be close to linear

### 2.2 Serializability

Serializability is a key concept in concurrency control that ensures that the results of executing concurrent transactions are equivalent to some serial execution of those transactions. It is a fundamental property that guarantees the correctness of concurrent transactions.

#### 2.2.1 Serial and Non-serial Schedules

Schedules are sequence of operations (read, write, commit, etc.) from multiple transactions. They can be classified into serial and non-serial schedules.    
Serial and non-serial schedules define the order of transaction operations.

**Serial Schedule**
- Transactions execute one after another with no overlap
- Always produces correct results but poor performance
- No interleaving of operations
- No concurrency, so no conflicts

Example of a serial schedule:
```
Time | Schedule S1
-----|---------------------------
1    | T1: Read(A)
2    | T1: Write(A)
3    | T1: Commit
4    | T2: Read(A)
5    | T2: Write(A)
6    | T2: Commit
```

**Non-serial Schedule**
- Transactions execute with operations interleaved
- Allows for concurrency and better resource utilization
- May or may not produce correct results
- Can lead to conflicts and anomalies if not managed properly

Example of a non-serial schedule:
```
Time | Schedule S2
-----|---------------------------
1    | T1: Read(A)
2    | T2: Read(A)
3    | T1: Write(A)
4    | T2: Write(A)
5    | T1: Commit
6    | T2: Commit
```

Only serializable non-serial schedules are safe to use in databases.

**Types of Serializability**
- **Conflict Serializability**: Focuses on the order of conflicting operations
- **View Serializability**: Focuses on the final state of the database

#### 2.2.2 Conflict Serializability

Conflict serializability is a stricter form of serializability that focuses on the order of conflicting operations.

Two operations conflict if:
1. They belong to different transactions
2. They operate on the same data item
3. At least one of them is a write operation

**Conflict Equivalence**
- Two schedules are conflict equivalent if they can be transformed from one to the other by swapping non-conflicting operations

**Conflict Serializable**
- A schedule is conflict serializable if it is conflict equivalent to some serial schedule
- Can be determined using a precedence graph

Example of determining conflict serializability using a **precedence graph**:
1. Create a node for each transaction
2. Create an edge from Ti to Tj if an operation in Ti conflicts with and precedes an operation in Tj
3. The schedule is conflict serializable if and only if the graph has **no cycles**

**Precedence Graph Example**
```
T1: Read(A) → T2: Write(A)
T2: Read(B) → T1: Write(B)

Graph:
T1 → T2
T2 → T1
```
This graph has a cycle, so the schedule is not conflict serializable.

#### 2.2.3 View Serializability

View serializability is a less restrictive form of serializability that focuses on the final state of the database rather than the order of operations.

**View Equivalence**
- Two schedules are view equivalent if:
  1. Initial reads (from the database) are the same
  2. Reads from other transactions are the same
  3. Final writes are the same

**View Serializable**
- A schedule is view serializable if it is view equivalent to some serial schedule
- Allows more schedules than conflict serializability
- NP-complete to determine (more complex to check)

**Example of View Serializability**
```
Time | Schedule S3
-----|---------------------------
1    | T1: Read(A) (value 100)
2    | T2: Read(A) (value 100)
3    | T1: Write(A) (value 200)
4    | T2: Write(A) (value 300)
5    | T1: Commit
6    | T2: Commit
```
This schedule is view serializable if it can be transformed into a serial schedule where T1 reads A before T2 writes A, and T2 reads A after T1 writes A. Like this: 
```
T1: Read(A) → T1: Write(A) → T1: Commit → T2: Read(A) → T2: Write(A) → T2: Commit
```

**Note:** All conflict serializable schedules are view serializable but not all view serializable schedules are conflict serializable.

**Difference Between Conflict and View Serializability**
| Feature                | Conflict Serializability          | View Serializability            |
|------------------------|----------------------------------|----------------------------------|
| Focus                  | Order of conflicting operations  | Final state of the database      |
| Equivalence            | Conflict equivalent schedules    | View equivalent schedules        |
| Complexity             | Easier to check (using precedence graph) | More complex to check (NP-complete) |
| Flexibility            | More restrictive (fewer schedules) | Less restrictive (more schedules) |

#### 2.2.4 Importance of Serializability
- Prevents data inconsistencies and anomalies in concurrent transactions
- Ensures that the final state of the database is the same as if transactions were executed serially
- Provides a foundation for designing concurrency control mechanisms
- Ensures correctness and adherence to ACID properties in a multi-user environment
- Avoid problems like lost updates, dirty reads, non-repeatable reads, and phantom reads

### 2.3 Concurrency Control

Concurrency control mechanisms are used to manage concurrent transactions and ensure that they do not interfere with each other. They help maintain the ACID properties of transactions while allowing multiple transactions to execute simultaneously.

Concurrency control mechanisms enforce serializability and recoverability of transactions.

#### 2.3.1 Pessimistic vs. Optimistic Approaches

**Pessimistic Concurrency Control**
- Assumes conflicts are likely
- Prevents conflicts before they occur
- Includes locking protocols
- Good when conflict probability is high

**Optimistic Concurrency Control**
- Assumes conflicts are rare
- Detects conflicts after they occur
- Includes validation-based protocols
- Good when conflict probability is low

#### 2.3.2 Preventative vs. Detective Approaches

**Preventative Approaches**
- Prevent non-serializable schedules from occurring
- Example: Two-phase locking

**Detective Approaches**
- Allow potentially non-serializable schedules
- Test for serializability at commit time
- Abort and restart if problems detected
- Example: Optimistic concurrency control

### 2.4 Locking Schemes

Locking schemes are the most common method for implementing concurrency control. They use locks to manage access to data items, ensuring that only one transaction can modify a data item at a time. It ensures that the transactions are executed in a serializable manner without interfering with each other.

#### 2.4.1 Lock Types

Locks are used to control access to data items in a database. Different types of locks provide different levels of access and concurrency.

**Shared Lock (S)**
- Allows multiple transactions to read a data item
- Prevents any transaction from writing to the item
- Multiple shared locks on the same item are compatible

**Exclusive Lock (X)**
- Allows a transaction to read and write a data item
- Prevents any other transaction from reading or writing the item at the same time
- Incompatible with any other lock

**Update Lock (U)**
- Used when a transaction might update an item
- Compatible with shared locks but not with exclusive locks
- Can be upgraded to an exclusive lock

**Intention Locks**
- Used in hierarchical locking
- Indicate intention to lock items at a lower level
- Types: Intention Shared (IS), Intention Exclusive (IX), Shared and Intention Exclusive (SIX)

**Lock compatibility matrix**

|         | **S** | **X** | **U** | **IS** | **IX** | **SIX** |
| ------- | ----- | ----- | ----- | ------ | ------ | ------- |
| **S**   | ✅     | ❌     | ✅     | ✅      | ✅      | ✅       |
| **X**   | ❌     | ❌     | ❌     | ❌      | ❌      | ❌       |
| **U**   | ✅     | ❌     | ❌     | ✅      | ❌      | ❌       |
| **IS**  | ✅     | ❌     | ✅     | ✅      | ✅      | ✅       |
| **IX**  | ✅     | ❌     | ❌     | ✅      | ✅      | ❌       |
| **SIX** | ✅     | ❌     | ❌     | ✅      | ❌      | ❌       |

#### 2.4.2 Two-Phase Locking (2PL)

Two-phase locking is a protocol that ensures serializability by using locks to control access to data items. It consists of two phases: the growing phase and the shrinking phase.
- **Growing Phase**: A transaction can acquire locks but cannot release any
- **Shrinking Phase**: A transaction can release locks but cannot acquire any new ones

This two-phase nature ensures that once a transaction releases a lock, it cannot acquire any more locks, preventing conflicts and ensuring that transactions are executed in a serializable manner.

**Types of Two-Phase Locking**

1. **Basic 2PL**: Locks are acquired and released in any order, but the transaction must follow the two-phase rule. It ensures conflict serializability but does not guarantee freedom from deadlocks or recoverability.
2. **Conservative 2PL**: All locks are acquired before any operations are performed. This prevents deadlocks but reduces concurrency. All locks are requested at once, and the transaction cannot proceed until all locks are granted.
3. **Strict 2PL**: All exclusive locks are held until the transaction commits or aborts. This ensures strict schedules and simplifies recovery. 
4. **Rigorous 2PL**: All locks (shared and exclusive) are held until the transaction commits or aborts. This is the most commonly used form of 2PL and ensures both serializability and recoverability.

Example of two-phase locking:   
Let’s say T1 and T2 want to access data item A.

```
Time | Transaction T1               | Transaction T2
-----|------------------------------|------------------------------
1    | Lock-X(A) (growing phase)    |
2    | Read(A)                      |
3    | Write(A)                     |
4    | Commit                       |
5    | Unlock(A) (shrinking phase) |
6    |                              | Lock-S(A) (growing phase)
7    |                              | Read(A)
8    |                              | Commit
9    |                              | Unlock(A) (shrinking phase)
```

In this example, T1 acquires an exclusive lock on A, reads and writes it, then commits, followed by T2 acquiring a shared lock on A , reading it, and committing. The locks are acquired in the growing phase and released in the shrinking phase.

**Advantages of Two-Phase Locking**
- Guarantees conflict serializability
- Prevents lost updates, dirty reads, non-repeatable reads, and phantom reads
- Simple to implement and understand
- Widely used in database systems

**Disadvantages of Two-Phase Locking**
- Can lead to deadlocks
- May result in reduced concurrency due to locking
- Requires careful management of locks to avoid contention
- Can lead to longer wait times for transactions if locks are held for extended periods

#### 2.4.3 Lock Granularity

Lock granularity refers to the size of the data item that is locked. Different levels of granularity provide different trade-offs between concurrency and overhead. Fine-grained locks allow for higher concurrency but may introduce more overhead due to managing many locks, while coarse-grained locks reduce overhead but limit concurrency.

The lock granularity can be classified into three categories:

- **Fine-grained locks**: Lock smaller data items (e.g., rows, fields) - higher concurrency but more overhead
- **Coarse-grained locks**: Lock larger data items (e.g., tables, pages) - lower overhead but less concurrency
- **Mixed granularity**: Use a combination of fine and coarse locks - balance performance and concurrency

Locks can be applied at different levels of granularity:

- **Database-level Locks**: Lock entire database - very low concurrency but simple to implement
- **Table-level Locks**: Lock entire table - better concurrency than database locks but still restrictive for large tables
- **Page-level Locks**: Lock disk page/block - good balance between overhead and concurrency, common in many DBMS
- **Row-level Locks**: Lock individual rows - high concurrency but higher overhead
- **Field-level Locks**: Lock individual columns - highest concurrency and highest overhead
- **Multiple Granularity Locking**: Uses intention locks to efficiently support different granularities and avoid checking all fine-grained locks

### 2.5 Timestamp-based Ordering

Timestamp-based ordering is a concurrency control method that uses timestamps to determine the order of transaction execution. Each transaction is assigned a unique timestamp when it starts, and the system uses these timestamps to enforce a serializable schedule. 

#### 2.5.1 Basic Timestamp Ordering

In basic timestamp ordering:
- Each transaction T receives a unique timestamp TS(T) at startup
- Transactions execute in timestamp order
- For each data item X, maintain:
  - read_timestamp(X): Largest timestamp of any transaction that read X
  - write_timestamp(X): Largest timestamp of any transaction that wrote X

**Rules for Read Operations**
- If TS(T) < write_timestamp(X), abort T and restart (T is trying to read an "outdated" value)
- Otherwise:
  - Allow the read
  - Update read_timestamp(X) to max(read_timestamp(X), TS(T))

**Rules for Write Operations**
- If TS(T) < read_timestamp(X), abort T and restart (some newer transaction already read X)
- If TS(T) < write_timestamp(X), abort T and restart (some newer transaction already wrote X)
- Otherwise:
  - Allow the write
  - Update write_timestamp(X) to TS(T)

Example:
```
Time | Transaction T1 (TS=100)   | Transaction T2 (TS=200)
-----|---------------------------|---------------------------
1    | Read(A)                   |
2    | [read_timestamp(A)=100]   |
3    |                           | Read(A)
4    |                           | [read_timestamp(A)=200]
5    |                           | Write(A)
6    |                           | [write_timestamp(A)=200]
7    | Write(A)                  |
8    | [Abort: TS(T1)<read_timestamp(A)] |
```

**Advantages of Timestamp Ordering**
- Simple to implement
- No locks required, reducing contention
- Ensures serializability by enforcing a total order of transactions
- Avoids deadlocks since transactions are aborted rather than waiting

**Disadvantages of Timestamp Ordering**
- Can lead to high abort rates if transactions frequently conflict
- May not be suitable for workloads with high contention
- Requires careful management of timestamps to ensure correctness

#### 2.5.2 Thomas's Write Rule

Thomas's write rule is an optimization that allows some writes to be ignored rather than aborting the transaction:

- If TS(T) < write_timestamp(X), ignore the write (don't abort)
- This rule preserves the final state but may not produce serializable schedules
- Useful when lost updates are acceptable

#### 2.5.3 Multiversion Timestamp Ordering

Multiversion timestamp ordering maintains multiple versions of data items:

- Each write operation creates a new version with a timestamp
- Read operations use the latest version with a timestamp less than the transaction's timestamp
- Eliminates the need for read locks
- Allows read-only transactions to execute without blocking

Example:
```
Time | Transaction T1 (TS=100)   | Transaction T2 (TS=200)
-----|---------------------------|---------------------------
1    | Read(A) [reads version 50]|
2    |                           | Write(A) [creates version 200]
3    | Write(B) [creates version 100] |
4    |                           | Read(B) [reads version 100]
```

### 2.6 Optimistic Concurrency Control

Optimistic concurrency control is a method that assumes transactions will not conflict and allows them to execute without locking resources. It is based on the idea that most transactions will complete without interference, and conflicts can be detected and resolved at commit time.

#### 2.6.1 Phases of Optimistic Concurrency Control

The three phases of optimistic concurrency control are:

**1. Read Phase**
- Transaction reads data into a private workspace
- Keeps track of read and write sets
- No locking or timestamp checking

**2. Validation Phase**
- Check if the transaction conflicts with other transactions
- Performed when transaction is ready to commit
- If validation fails, transaction is aborted and restarted

**3. Write Phase**
- If validation succeeds, write changes to the database
- Changes are written atomically
- Transaction commits and releases resources

#### 2.6.2 Validation Techniques

Validation techniques are used to check for conflicts during the validation phase. There are two main approaches:

**Backward Validation**
- Check if the transaction conflicts with already committed transactions
- A conflict occurs if the transaction's read set intersects with any committed transaction's write set
- Simpler but may lead to cascading aborts

**Forward Validation**
- Check if the transaction conflicts with active transactions
- A conflict occurs if the transaction's write set intersects with any active transaction's read or write set
- More complex but avoids cascading aborts

Example of optimistic concurrency control:
```
Time | Transaction T1            | Transaction T2
-----|---------------------------|---------------------------
1    | Read(A) into workspace    |
2    | Read(B) into workspace    |
3    | A = A + 100 (workspace)   |
4    |                           | Read(A) into workspace
5    |                           | Read(C) into workspace
6    |                           | C = C + A (workspace)
7    | Validation (success)      |
8    | Write A, B to database    |
9    | Commit                    |
10   |                           | Validation (fail: T1 wrote A)
11   |                           | Abort and restart
```

### 2.7 Scheduling

Scheduling is the process of determining the order in which transactions are executed to maintain serializability. It is essential for ensuring that concurrent transactions do not interfere with each other and that the final state of the database is consistent.

Scheduling refers to ordering transactions or operations to maintain serializability.

There are two main types of scheduling:
- **Static Scheduling**: The order of transactions is determined before execution. It is simple but may not adapt well to changing workloads.
- **Dynamic Scheduling**: The order of transactions is determined at runtime based on the current state of the system. It is more complex but can adapt to changing workloads and improve performance.

Scheduling can be serial or non-serial:
- **Serial Scheduling**: Transactions are executed one after another without overlap. It is simple but not efficient for concurrent workloads.
- **Non-serial Scheduling**: Transactions are executed with interleaved operations. It allows for higher concurrency but requires careful management to ensure serializability.

#### 2.7.1 Wait-for Graphs

Wait-for graphs help detect and manage deadlocks:

- Nodes represent transactions
- An edge from Ti to Tj means Ti is waiting for a lock held by Tj
- A cycle indicates a deadlock

Example:
```
T1 → T2 → T3 → T1  (cycle indicates deadlock)
```

#### 2.7.2 Precedence Graphs

Precedence graphs determine if a schedule is conflict serializable:

- Nodes represent transactions
- An edge from Ti to Tj means an operation in Ti conflicts with and precedes an operation in Tj
- The schedule is conflict serializable if and only if the graph is acyclic

Example:
```
T1 → T2 → T3  (acyclic, schedule is serializable)
```

#### 2.7.3 Scheduler Architectures

The architecture of the scheduler can impact performance and complexity. There are two main types of schedulers:

**Centralized Scheduler**
- Single component manages all concurrency control
- Simple design but potential bottleneck
- Used in most centralized DBMS

**Distributed Scheduler**
- Multiple schedulers coordinate across distributed sites
- More complex but better scalability
- Used in distributed database systems

### 2.8 Multiversion Techniques

Multiversion concurrency control (MVCC) maintains multiple versions of data items to increase concurrency. It allows transactions to read different versions of data without blocking each other. This technique is widely used in modern database systems to improve performance and reduce contention.

#### 2.8.1 Multiversion Concurrency Control

**Basic MVCC Approach**
- Each write creates a new version of the data item
- Versions are timestamped
- Read operations access appropriate versions
- Eliminates read-write conflicts

**Benefits of MVCC**
- Read operations never block
- Write operations don't block reads
- Read-only transactions execute without locking
- Higher concurrency for mixed workloads

**Challenges with MVCC**
- Version storage overhead
- Garbage collection of old versions
- Implementing atomicity across multiple versions

#### 2.8.2 Snapshot Isolation

Snapshot isolation is a commonly used isolation level based on MVCC. It allows transactions to read a consistent snapshot of the database at a specific point in time.

**Properties of Snapshot Isolation**
- Transactions read from a snapshot of committed data at start time
- Writes are visible only after transaction commits
- Write conflicts are detected at commit time
- Prevents dirty reads, non-repeatable reads, and phantom reads

**Write Skew Anomaly**
- A potential anomaly in snapshot isolation
- Two transactions read overlapping data, make disjoint updates based on what they read
- Neither transaction sees the other's updates
- Can violate integrity constraints

Example of write skew:
```
Time | Transaction T1            | Transaction T2
-----|---------------------------|---------------------------
1    | Read account A ($500)     |
2    | Read account B ($500)     |
3    |                           | Read account A ($500)
4    |                           | Read account B ($500)
5    | Withdraw $300 from A      |
6    | (Ensure A+B >= $500)      |
7    |                           | Withdraw $300 from B
8    |                           | (Ensure A+B >= $500)
9    | Write A = $200            |
10   | Commit                    |
11   |                           | Write B = $200
12   |                           | Commit
```
Final state: A = $200, B = $200, total = $400, violating the constraint A+B >= $500.

### 2.9 Deadlocks

A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a cycle of dependencies. In a deadlock, no transaction can proceed because each is waiting for a resource held by another.

**Necessary Conditions for Deadlock**
A deadlock can occur if the following four conditions are met simultaneously:

1. **Mutual Exclusion**: At least one resource (e.g., lock) is held in a non-shareable mode (only one transaction can use it at a time)
2. **Hold and Wait**: A transaction holds at least one resource and is waiting for additional resources held by others
3. **No Preemption**: Resources cannot be forcibly taken from a transaction holding them; they must be released voluntarily
4. **Circular Wait**: A set of transactions are waiting for each other in a circular chain like T1 waits for T2, T2 waits for T3... Tn waits for T1

**Example of Deadlock**
```
┌─────────────┐     Lock Request (B)      ┌─────────────┐
│ Transaction │ ────────────────────────> | Transaction │
│     T1      │                           │     T2      │
│             │                           │             │
│ Holds Lock  │                           │ Holds Lock  │
│ on Resource │                           │ on Resource │
│      A      │ <───────────────────────  │      B      │
└─────────────┘     Lock Request (A)      └─────────────┘
             
            DEADLOCK
   T1 cannot proceed without B, held by T2
   T2 cannot proceed without A, held by T1
```

**Timeline Leading to Deadlock:**
```
Time | Transaction T1     | Transaction T2     | System State
-----|--------------------|--------------------|--------------------
1    | Lock-X(A)          |                    | T1 holds A
2    |                    | Lock-X(B)          | T1 holds A, T2 holds B
3    | Request Lock-X(B)  |                    | T1 waits for B
4    |                    | Request Lock-X(A)  | T2 waits for A
5    | Status: WAITING    | Status: WAITING    | DEADLOCK!
```

**Wait-For Graph:**
```
T1 ──────► T2
 ▲          │
 └──────────┘
   Circular dependency detected
```

Deadlocks can lead to performance degradation and transaction failures if not handled properly. There are several strategies for dealing with deadlocks, including prevention, avoidance, detection, and recovery.

#### 2.9.1 Deadlock Prevention

Deadlock prevention strategies eliminate one or more of the necessary conditions for deadlock. We can ensure that at least one of the four conditions for deadlock cannot hold like:

**1. No Mutual Exclusion**: Allow resources to be shared among transactions, but this is not always feasible for resources like locks.
**2. No Hold and Wait**: Require transactions to request all resources at once or release all held resources before requesting new ones.
**3. Preemption**: Allow preemption of resources from transactions that hold them.
**4. No Circular Wait**: Impose a strict ordering on resource requests to prevent circular wait conditions.

Some common deadlock prevention techniques include:

**Wait-Die Scheme**
- Based on timestamps (TS) of transactions
- If Ti requests a resource held by Tj:
  - If TS(Ti) < TS(Tj) (Ti is older), Ti waits
  - If TS(Ti) > TS(Tj) (Ti is younger), Ti aborts ("dies") and restarts
- Prevents younger transactions from causing older ones to wait

**Wound-Wait Scheme**
- If Ti requests a resource held by Tj:
  - If TS(Ti) < TS(Tj) (Ti is older), Ti "wounds" Tj (forces Tj to abort)
  - If TS(Ti) > TS(Tj) (Ti is younger), Ti waits
- Prioritizes older transactions

**Resource Ordering**
- Assign a global order to all resources
- Require transactions to request resources in ascending order
- Eliminates circular wait condition
- Simple but may be inefficient if resource needs aren't known in advance

#### 2.9.2 Deadlock Avoidance

Deadlock avoidance ensures that the system never enters a deadlock state by carefully analyzing resource requests and allocations. It requires knowledge of future resource needs and uses algorithms to determine if granting a request would lead to a deadlock.

The common strategies for deadlock avoidance include:

**Banker's Algorithm**
- Requires advance knowledge of maximum resource needs
- Only grants requests if they lead to a safe state
- A state is safe if there exists a sequence that allows all transactions to complete
- Conservative but guarantees no deadlocks

**Resource Allocation Graph (RAG)**
- Maintains a graph of resource allocations and requests
- Nodes represent transactions and resources while edges represent requests and allocations
- Edge from Ti to resource R means Ti requests R (request edge)
- Edge from resource R to Ti means R is allocated to Ti (assignment edge)
- Only grant requests that don't create cycles

#### 2.9.3 Deadlock Detection

Deadlock detection allows deadlocks to occur but periodically checks for them. It uses a wait-for graph to identify cycles.

**Wait-for Graph**: A directed graph where nodes represent transactions and edges represent waiting relationships
- Create a directed graph where:
  - Nodes are transactions
  - Edge from Ti to Tj means Ti is waiting for a resource held by Tj
- Periodically check for cycles in the graph
- A cycle indicates a deadlock

**Detection Algorithm**
1. Construct the wait-for graph
2. Run a cycle detection algorithm (e.g., depth-first search)
3. If a cycle is found, select a victim transaction
4. Run detection either periodically or when transactions are blocked

**Example**
```
T1 holds A, wants B
T2 holds B, wants C
T3 holds C, wants A

Wait-for graph:

T1 ──────► T2
 ▲          │     (cycle detected)
 └───────── T3
```

#### 2.9.4 Deadlock Recovery

Once a deadlock is detected, recovery is necessary to break the deadlock and allow transactions to proceed. The recovery process involves selecting a victim transaction to abort and release its locks.

**Victim Selection**
Criteria for selecting victims:
- Transaction age (younger transactions preferred)
- Progress made (less progress preferred)
- Resources held (fewer resources preferred)
- Priority (lower priority preferred)
- Number of rollbacks (fewer previous rollbacks preferred)

**Recovery Actions**
1. **Total Rollback**: Abort the victim transaction completely
2. **Partial Rollback**: Roll back only as far as necessary to break deadlock
3. **Restart**: Restart the victim transaction with a higher priority to prevent starvation

**Starvation Prevention**
- Keep track of how many times a transaction has been chosen as victim
- Increase priority of frequently victimized transactions
- Use a fair selection algorithm that considers rollback history

**Example Recovery Process**
1. Detect deadlock between T1, T2, and T3
2. Select T1 as victim based on selection criteria
3. Abort T1 and release all its locks
4. Notify T1 that it was aborted due to deadlock
5. T1 restarts with a new timestamp

---

*These notes were compiled by [Deepak Modi](https://deepakmodi.tech)*      
*Visit [NotesNeo](https://notesneo.vercel.app) for more resources.*    
*Last updated: June 2025*