---
title: "Unit 2: Web Content Mining and Information Retrieval"
description: "Information retrieval models, text mining, web search, clustering, and classification"
author: "Deepak Modi"
date: "2025-06-15"
pdfUrl: ""
---

## Syllabus:

Information Retrieval Models, Web Search and IR, Text Mining, Latent Semantic Indexing, Web Spamming, Clustering and Classification of Web Pages, Information Extraction, Web Content Mining.

---

## 🎯 PYQ Analysis for Unit 2

### High Priority Topics ⭐⭐⭐ (15 marks questions)

1. **Information Retrieval Models** (2022-Feb, 2022-Jul, 2022-Dec, 2023, 2024-May, 2024-Dec)
2. **Latent Semantic Indexing (LSI)** (2022-Feb - 15 marks)
3. **Clustering and Classification of Web Pages** (2022-Feb, 2023, 2024-May)

### Medium Priority Topics ⭐⭐ (7-8 marks)

4. **Web Content Mining** (2022-Dec, 2023, 2024-Dec)
5. **Web Spamming** (2022-Dec, 2023, 2024-May, 2024-Dec)
6. **IR Components & Issues** (2022-Jul, 2022-Feb)

### Short Answer Topics ⭐ (2.5-3 marks)

7. **Text Mining** (2022-Jul, 2023, 2024-Dec)
8. **Information Retrieval** (2023, 2024-May, 2024-Dec)
9. **Information Extraction** (2022-Feb)
10. **Web Search** (2024-Dec)

---

## **1. Information Retrieval (IR)**

> PYQ: What is information retrieval in web mining? (2022-Feb, 8 marks)  
> PYQ: Define information retrieval with the help of its architecture. (2022-Dec, 15 marks)  
> PYQ: Explain the components of information retrieval in detail. (2022-Jul, 15 marks)

### 1.1 What is Information Retrieval?

**Information Retrieval (IR)** is the process of obtaining relevant information from a large collection of documents based on user queries. It deals with the representation, storage, organization, and access to information items in a systematic way.

The goal of IR is to retrieve documents that are **relevant** to the user's information need while filtering out irrelevant ones. Unlike database systems that retrieve exact matches, IR systems work with unstructured or semi-structured data and provide ranked results based on relevance.

**Key Characteristics:**

- Query-based search (users express needs as queries)
- Relevance-focused (aims to return most relevant documents)
- Ranking (documents ordered by relevance score)
- Approximate matching (finds similar, not just exact matches)

### 1.2 IR System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                 INFORMATION RETRIEVAL SYSTEM                │
└─────────────────────────────────────────────────────────────┘
                              │
    ┌─────────────────────────┼─────────────────────────┐
    │                         │                         │
    ▼                         ▼                         ▼
┌─────────────┐         ┌───────────┐           ┌───────────┐
│  Document   │         │  Indexing │           │   Query   │
│ Collection  │         │  Module   │           │ Processor │
└──────┬──────┘         └─────┬─────┘           └─────┬─────┘
       │                      │                       │
       ▼                      ▼                       ▼
┌─────────────┐         ┌───────────┐           ┌───────────┐
│    Text     │         │  Inverted │           │   Query   │
│ Operations  │         │   Index   │           │ Expansion │
└──────┬──────┘         └─────┬─────┘           └─────┬─────┘
       │                      │                       │
       └──────────────────────┼───────────────────────┘
                              ▼
                    ┌─────────────────┐
                    │    Matching &   │
                    │     Ranking     │
                    └────────┬────────┘
                             ▼
                    ┌─────────────────┐
                    │  Ranked Results │
                    └─────────────────┘
```

### 1.3 Components of IR System

#### 1. Document Collection

- The set of documents to be searched
- Can include web pages, PDFs, emails, articles
- Stored in document repository

#### 2. Text Operations (Preprocessing)

Before indexing, documents undergo preprocessing:

| Operation             | Description                    | Example                            |
| --------------------- | ------------------------------ | ---------------------------------- |
| **Tokenization**      | Breaking text into words       | "Hello World" → ["Hello", "World"] |
| **Stop Word Removal** | Removing common words          | Remove "the", "is", "and"          |
| **Stemming**          | Reducing to root form          | "running", "runs" → "run"          |
| **Lemmatization**     | Dictionary-based normalization | "better" → "good"                  |
| **Case Folding**      | Converting to lowercase        | "HELLO" → "hello"                  |

#### 3. Indexing Module

Creates searchable data structure from documents. Most common is **Inverted Index**:

```
Inverted Index Structure:
Term        → Document List (with positions)
─────────────────────────────────────────────
"algorithm" → [doc1:pos3, doc5:pos7, doc12:pos2]
"data"      → [doc1:pos1, doc2:pos4, doc7:pos1]
"mining"    → [doc2:pos5, doc5:pos8, doc7:pos2]
```

**Advantages of Inverted Index:**

- Fast lookup for query terms
- Efficient storage
- Supports phrase queries with positions

#### 4. Query Processor

- Parses user queries
- Applies same text operations as documents
- Expands query with synonyms (optional)
- Converts to internal representation

#### 5. Matching and Ranking

- Compares query representation with document index
- Calculates relevance score for each document
- Ranks documents by score
- Returns top-k results

#### 6. User Interface

- Accepts user queries
- Displays ranked results with snippets
- Provides relevance feedback mechanism

### 1.4 IR Process Steps

1. **Query Formulation**: User enters search query expressing information need
2. **Query Processing**: Tokenize, remove stop words, stem, expand with synonyms
3. **Document Matching**: Compare processed query with indexed documents
4. **Relevance Scoring**: Calculate similarity score for each matching document
5. **Ranking**: Sort documents by relevance score (highest first)
6. **Result Presentation**: Display ranked results with titles and snippets
7. **Relevance Feedback**: User marks relevant/irrelevant results to refine search

### 1.5 Issues in Information Retrieval

> PYQ: Explain the issues in the process of information retrieval. (2022-Jul, 7 marks)

| Issue                      | Description                            | Example                                  |
| -------------------------- | -------------------------------------- | ---------------------------------------- |
| **Synonymy**               | Different words, same meaning          | "car" vs "automobile" vs "vehicle"       |
| **Polysemy**               | Same word, different meanings          | "bank" (financial) vs "bank" (river)     |
| **Vocabulary Mismatch**    | Query terms differ from document terms | User: "laptop", Doc: "notebook computer" |
| **Scalability**            | Handling billions of documents         | Web-scale search engines                 |
| **Query Ambiguity**        | Unclear user intent                    | "apple" - fruit or company?              |
| **Relevance Subjectivity** | Different users, different needs       | Same query, different expectations       |
| **Ranking Quality**        | Balancing precision and recall         | Too many or too few results              |

**Solutions:**

- Thesaurus and query expansion for synonymy
- Word sense disambiguation for polysemy
- Distributed indexing for scalability
- Query suggestion and clarification for ambiguity

---

## **2. Information Retrieval Models**

> PYQ: Discuss various information retrieval models in detail. (2022-Dec, 2023, 2024-May, 2024-Dec - 15 marks)  
> PYQ: Discuss various IR models and their role in web search. (2024-Dec, 15 marks)

### 2.1 Why IR Models?

IR models provide a **theoretical framework** for:

- Representing documents and queries mathematically
- Defining what "relevance" means between query and document
- Computing relevance scores for ranking
- Comparing different retrieval approaches

### 2.2 Classification of IR Models

```
Information Retrieval Models
│
├── Classical Models
│   ├── Boolean Model
│   ├── Vector Space Model (VSM)
│   └── Probabilistic Model
│
├── Alternative Models
│   ├── Language Models
│   └── Neural IR Models
│
└── Structured Models
    ├── XML Retrieval
    └── Semantic Models
```

---

### 2.3 Boolean Model

**Concept:** The simplest IR model based on set theory and Boolean algebra. Documents either match or don't match - no ranking.

**Representation:**

- Documents represented as set of index terms
- Queries are Boolean expressions using AND, OR, NOT
- Result is binary: relevant (1) or not relevant (0)

**Example:**

```
Query: "data AND mining AND NOT web"

Document 1: {data, mining, algorithm, analysis}
  → Contains "data" ✓, Contains "mining" ✓, No "web" ✓
  → RELEVANT [1]

Document 2: {data, mining, web, search, crawling}
  → Contains "data" ✓, Contains "mining" ✓, Contains "web" ✗
  → NOT RELEVANT [0]

Document 3: {web, crawling, indexing, spider}
  → No "data" ✗
  → NOT RELEVANT [0]
```

**Easy Example:**

Suppose you have:

- Doc1: "apple banana apple"
- Doc2: "banana orange banana"
- Query: "apple AND banana"

Boolean Model checks if both words are present:

- Doc1: contains both "apple" and "banana" → Relevant
- Doc2: only "banana" (no "apple") → Not Relevant

**Advantages:**
| Advantage | Explanation |
|-----------|-------------|
| Simple | Easy to understand and implement |
| Precise | Exact matching, no ambiguity in results |
| Efficient | Fast query processing using set operations |
| Formal | Based on well-defined Boolean logic |

**Disadvantages:**
| Disadvantage | Explanation |
|--------------|-------------|
| No Ranking | All matching documents treated equally |
| No Partial Match | Document must match all conditions |
| No Term Weights | All terms considered equally important |
| Complex Queries | Users must know Boolean syntax |
| Too Few/Many Results | Hard to control result set size |

---

### 2.4 Vector Space Model (VSM)

**Concept:** Represents documents and queries as vectors in multi-dimensional space. Each dimension corresponds to a term. Similarity measured by cosine of angle between vectors.

**Representation:**

- Document d = (w₁, w₂, w₃, ..., wₙ) where wᵢ is weight of term i
- Query q = (w₁, w₂, w₃, ..., wₙ)
- Similarity = cosine of angle between d and q

```
Vector Space Visualization (2D simplified):
│
│              ● doc1
│             /
│            / θ₁ (small angle = high similarity)
│           /
│    query ●────────────────────►
│           \
│            \ θ₂ (large angle = low similarity)
│             \
│              ● doc2
│
└─────────────────────────────────────►
```

#### TF-IDF Weighting

The most common weighting scheme in VSM:

| Component                            | Formula                        | Meaning                                   |
| ------------------------------------ | ------------------------------ | ----------------------------------------- |
| **TF (Term Frequency)**              | tf(t,d) = count of t in d      | How often term appears in document        |
| **IDF (Inverse Document Frequency)** | idf(t) = log(N/df(t))          | How rare the term is across all documents |
| **TF-IDF**                           | tf-idf(t,d) = tf(t,d) × idf(t) | Combined importance weight                |

**Why TF-IDF?**

- TF: Terms appearing more often in a document are more important for that document
- IDF: Terms appearing in fewer documents are more discriminative
- Common words like "the", "is" have low IDF (appear everywhere)
- Rare domain terms have high IDF (more informative)

#### Cosine Similarity Formula

$$
\cos\theta = \frac{\mathbf{d}\cdot\mathbf{q}}{\|\mathbf{d}\|\,\|\mathbf{q}\|}
= \frac{\sum_{i} d_i q_i}{\sqrt{\sum_{i} d_i^2}\,\sqrt{\sum_{i} q_i^2}}\,.
$$

**Example Calculation:**

```
Document: "data mining data analysis algorithms"
Query: "data mining"

Step 1: Calculate TF
Terms:      data  mining  analysis  algorithms
Doc TF:      2      1        1          1
Query TF:    1      1        0          0

Step 2: Assume IDF values
IDF:        1.2    2.0      1.8        2.5

Step 3: Calculate TF-IDF
Doc:    [2×1.2, 1×2.0, 1×1.8, 1×2.5] = [2.4, 2.0, 1.8, 2.5]
Query:  [1×1.2, 1×2.0, 0, 0]         = [1.2, 2.0, 0, 0]

Step 4: Cosine Similarity
Dot product = 2.4×1.2 + 2.0×2.0 + 0 + 0 = 2.88 + 4.0 = 6.88
||Doc|| = √(2.4² + 2.0² + 1.8² + 2.5²) = √(5.76+4+3.24+6.25) = √19.25 = 4.39
||Query|| = √(1.2² + 2.0²) = √(1.44+4) = √5.44 = 2.33

Similarity = 6.88 / (4.39 × 2.33) = 6.88 / 10.23 = 0.67
```

**Easy Example:**

Suppose you have:

- Doc1: "apple banana apple"
- Doc2: "banana orange banana"
- Query: "apple banana"

Count term frequency (TF):

- Doc1: apple=2, banana=1, orange=0
- Doc2: apple=0, banana=2, orange=1
- Query: apple=1, banana=1, orange=0

Calculate cosine similarity (ignore IDF for simplicity):

- Doc1 vector: [2,1,0], Query: [1,1,0]
- Cosine similarity = (2×1 + 1×1 + 0×0) / (sqrt(2²+1²) × sqrt(1²+1²)) = (2+1)/ (√5 × √2) ≈ 3/3.16 ≈ 0.95
- Doc2 vector: [0,2,1], Query: [1,1,0]
- Cosine similarity = (0×1 + 2×1 + 1×0) / (sqrt(0²+2²+1²) × sqrt(1²+1²)) = (0+2+0)/(√5 × √2) ≈ 2/3.16 ≈ 0.63
- Doc1 is ranked higher.

**Advantages:**
| Advantage | Explanation |
|-----------|-------------|
| Partial Matching | Documents can partially match query |
| Ranking | Documents ranked by similarity score |
| Term Weighting | Important terms weighted higher (TF-IDF) |
| Intuitive | Geometric interpretation easy to understand |

**Disadvantages:**
| Disadvantage | Explanation |
|--------------|-------------|
| Independence Assumption | Assumes terms are independent |
| No Semantics | Ignores word meaning and context |
| Bag of Words | Ignores word order and structure |
| High Dimensionality | Vocabulary size = dimensions |

---

### 2.5 Probabilistic Model

**Concept:** Based on probability theory. Estimates the probability that a document is relevant given a query.

**Core Idea:**

- P(R|d,q) = Probability that document d is relevant to query q
- Rank documents by probability of relevance
- Uses Bayes' theorem for calculation

**Binary Independence Model (BIM):**

Assumes terms are independent and binary (present/absent).

```
                P(R|d,q)
Ranking by: ─────────────
                P(R̄|d,q)

Using Bayes:
         P(d|R) × P(R)
       = ─────────────────
         P(d|R̄) × P(R̄)
```

**Easy Example:**

Suppose you have:

- Doc1: "apple banana apple"
- Doc2: "banana orange banana"
- Query: "apple banana"

Probabilistic Model tries to estimate: "How likely is each document relevant to the query?"
If you know from past data that documents with both "apple" and "banana" are usually relevant, Doc1 will get a higher probability. If you have no feedback, it may use assumptions or initial guesses.

**Advantages:**

- Strong theoretical foundation in probability
- Natural incorporation of relevance feedback
- Principled ranking approach

**Disadvantages:**

- Term independence assumption (unrealistic)
- Needs relevance judgments for training
- More complex than VSM

---

### 2.6 Language Models

**Concept:** Models the probability of generating a query from a document's language model. Each document defines a probability distribution over terms.

**Query Likelihood Model:**

```
P(q|d) = ∏ P(t|d)  for all terms t in query
         t∈q

Rank by: P(q|d) - probability of generating query q from document d
```

**Easy Example:**

Suppose you have:

- Doc1: "apple banana apple"
- Doc2: "banana orange banana"
- Query: "apple banana"

For each document, calculate the probability of generating the query:

- Doc1: P(apple)=2/3, P(banana)=1/3 → P(query|Doc1) = (2/3) × (1/3) = 2/9
- Doc2: P(apple)=0, P(banana)=2/3 → P(query|Doc2) = 0 × (2/3) = 0
  So Doc1 is ranked higher because it is more likely to generate the query.

**Smoothing:** Handles zero probabilities for unseen terms using techniques like Jelinek-Mercer or Dirichlet smoothing.

**Advantages:**
| Advantage | Explanation |
|-----------|-------------|
| Probabilistic Foundation | Based on solid statistical principles |
| Handles Term Dependencies | Can model term co-occurrences |
| Incorporates Smoothing | Deals with unseen terms effectively |

**Disadvantages:**
| Disadvantage | Explanation |
|--------------|-------------|
| Computationally Intensive | More complex calculations |
| Requires Large Data | Needs good estimates of term probabilities |
| Sensitive to Smoothing | Choice of smoothing affects performance |

---

### 2.7 Comparison of IR Models

| Aspect          | Boolean         | Vector Space   | Probabilistic | Language      |
| --------------- | --------------- | -------------- | ------------- | ------------- |
| **Matching**    | Exact           | Partial        | Probabilistic | Probabilistic |
| **Ranking**     | No              | Yes            | Yes           | Yes           |
| **Weights**     | No              | TF-IDF         | Probabilistic | Frequency     |
| **Foundation**  | Set Theory      | Linear Algebra | Probability   | Probability   |
| **Complexity**  | Low             | Medium         | High          | High          |
| **Performance** | Low             | Good           | Good          | Excellent     |
| **Best For**    | Precise queries | General search | Research      | Modern search |

### 2.8 Applications of IR Models

- **Boolean Model**

  - Library/catalog search, legal document retrieval, structured DB queries, command-line/file-system search, precise filter rules (email filtering).

- **Vector Space Model (VSM / TF‑IDF + Cosine)**

  - General web & enterprise search ranking, document similarity and recommendation, document clustering, plagiarism detection, relevance scoring for search UIs.

- **Probabilistic Models (BIM / BM25 family)**

  - Ad-hoc retrieval with relevance feedback, classical search engines (BM25 ranking), personalized search ranking, focused retrieval in legal/medical domains.

- **Language Models (Query‑Likelihood, LMIR)**

  - Modern ranking/scoring (query likelihood), query suggestion/autocomplete, spoken-query handling, passage retrieval and ranking in search engines.

- **Latent Semantic Indexing (LSI/LSA)**

  - Semantic search / query expansion, topic-based recommendation, document clustering, cross-language retrieval, plagiarism/near-duplicate detection.

- **Neural IR Models (Embedding & Deep Models, e.g., BERT)**

  - Semantic / contextual search, passage reranking, question answering, conversational search, dense retrieval for low-latency ranking, recommendation and personalization.

- **Structured / Semantic Models (XML, Ontologies)**
  - XML/HTML element-aware retrieval, semantic search over knowledge graphs, enterprise data integration, QA over structured documents.

---

## **3. Web Search and IR**

> PYQ: Differentiate between information retrieval and web search. (2022-Jul, 8 marks)  
> PYQ: What are the searching techniques commonly used in web search? (2022-Feb, 2 marks)

### 3.1 Web Search vs Traditional IR

Web Search is a specialized form of Information Retrieval focused on searching the World Wide Web. It has unique challenges and characteristics compared to traditional IR systems.

| Aspect        | Traditional IR        | Web Search                      |
| ------------- | --------------------- | ------------------------------- |
| **Scale**     | Thousands to millions | Billions of pages               |
| **Data Type** | Plain text documents  | HTML with links, multimedia     |
| **Quality**   | Curated, reliable     | Variable, includes spam         |
| **Dynamism**  | Relatively static     | Constantly changing             |
| **Users**     | Expert users          | General public                  |
| **Queries**   | Detailed, specific    | Short (2-3 words average)       |
| **Authority** | All documents equal   | Link-based authority (PageRank) |
| **Spam**      | Minimal concern       | Major challenge                 |
| **Structure** | Flat collection       | Hyperlinked graph               |

### 3.2 Web Search Techniques

| Technique               | Description                          |
| ----------------------- | ------------------------------------ |
| **Keyword Search**      | Match query terms with page content  |
| **Boolean Search**      | Use AND, OR, NOT operators           |
| **Phrase Search**       | Exact phrase matching ("web mining") |
| **Link Analysis**       | PageRank, HITS for authority         |
| **Personalized Search** | Results based on user history        |
| **Semantic Search**     | Understanding query intent           |

---

## **4. Text Mining**

> PYQ: Write short notes on Text mining. (2022-Jul, 2023, 2024-Dec - 2.5-3 marks)

### 4.1 Definition

**Text Mining**, also known as Text Analytics, is the process of extracting meaningful information and patterns from unstructured text data using natural language processing (NLP), machine learning, and statistical techniques.
It involves transforming unstructured text into structured data that can be analyzed to discover insights, trends, and relationships that would be difficult to identify through manual reading.

**Advantages of Text Mining:**
| Advantage | Explanation |
|-------------------------|-----------------------------------------------|
| **Scalability** | Can process large volumes of text data |
| **Automation** | Automates information extraction |
| **Insight Discovery** | Uncovers hidden patterns and relationships |
| **Efficiency** | Saves time compared to manual analysis |
| **Data-Driven Decisions** | Supports data-driven decision making |
| **Versatility** | Applicable across domains (healthcare, finance, etc.) |

**Disadvantages of Text Mining:**
| Disadvantage | Explanation |
|-------------------------|-----------------------------------------------|
| **Complexity** | Requires expertise in NLP and ML |
| **Ambiguity** | Language ambiguity can lead to errors |
| **Context Sensitivity** | Meaning can change based on context |
| **Data Quality** | Poor quality text data affects results |
| **Resource Intensive** | Requires significant computational resources |

**Applications of Text Mining:**
| Application | Description |
|-------------------------|-----------------------------------------------|
| **Sentiment Analysis** | Analyzing opinions in reviews, social media |
| **Topic Modeling** | Discovering topics in large text corpora |
| **Spam Detection** | Identifying spam emails or messages |
| **Information Extraction** | Extracting structured data from text (e.g., entities, relationships) |
| **Text Classification** | Categorizing documents into predefined classes (e.g., news articles) |
| **Recommendation Systems** | Suggesting content based on user preferences |
| **Customer Support** | Automating responses to common queries |
| **Healthcare** | Analyzing clinical notes, research papers |
| **Finance** | Analyzing news, reports for market trends |

### 4.2 Text Mining vs Data Mining

| Aspect            | Text Mining                      | Data Mining             |
| ----------------- | -------------------------------- | ----------------------- |
| **Data Type**     | Unstructured text                | Structured data         |
| **Source**        | Documents, web pages, emails     | Databases, spreadsheets |
| **Preprocessing** | NLP required (tokenization, POS) | Standard data cleaning  |
| **Challenges**    | Ambiguity, context, language     | Missing values, noise   |

### 4.3 Text Mining Process

```
Text Collection → Preprocessing → Feature Extraction → Analysis → Knowledge
     │                │                  │                │
     ▼                ▼                  ▼                ▼
 Gather docs    Tokenize, stem     TF-IDF, BOW      Classify,
 Web pages      Remove stopwords   Word embeddings   Cluster
```

### 4.4 Text Mining Techniques

| Technique                          | Description               | Application          |
| ---------------------------------- | ------------------------- | -------------------- |
| **Classification**                 | Categorize documents      | Spam detection       |
| **Clustering**                     | Group similar documents   | Topic discovery      |
| **Sentiment Analysis**             | Detect opinions/emotions  | Product reviews      |
| **Named Entity Recognition (NER)** | Extract named entities    | People, places, orgs |
| **Summarization**                  | Create document summaries | News summarization   |

---

## **5. Latent Semantic Indexing (LSI)**

> PYQ: What is latent semantic indexing and where can it be applied? How does LSA work? (2022-Feb, 15 marks)  
> PYQ: Latent semantic indexing. (2022-Jul, 2023, 2024-May, 2024-Dec - 2.5-7.5 marks)

### 5.1 What is LSI?

**Latent Semantic Indexing (LSI)**, also called **Latent Semantic Analysis (LSA)**, is an IR technique that uses Singular Value Decomposition (SVD) to discover hidden (latent) semantic relationships between terms and documents.

It addresses the fundamental problem of vocabulary mismatch in traditional IR systems by mapping documents and queries into a reduced semantic space where similar concepts are close together, even if they use different words.

### 5.2 Problems LSI Solves

| Problem                 | Description                   | Example                     |
| ----------------------- | ----------------------------- | --------------------------- |
| **Synonymy**            | Different words, same meaning | "car" vs "automobile"       |
| **Polysemy**            | Same word, different meanings | "bank" (financial vs river) |
| **Vocabulary Mismatch** | Query differs from document   | "laptop" vs "notebook"      |

**LSI Solution:** Maps documents and terms to a reduced semantic space where similar concepts are close together.

### 5.3 How LSI Works

#### Step 1: Create Term-Document Matrix

```
           Doc1  Doc2  Doc3  Doc4
data        2     1     0     3
mining      1     2     0     2
web         0     1     3     1
search      1     0     2     0
```

Here, each row represents a term, and each column represents a document. The values are term frequencies (TF).

#### Step 2: Apply Singular Value Decomposition (SVD)

```
A = U × Σ × Vᵀ

Where:
A = Original term-document matrix (m × n)
U = Term-concept matrix (m × r) - how terms relate to concepts
Σ = Diagonal matrix of singular values (r × r) - concept importance
V = Document-concept matrix (n × r) - how documents relate to concepts
```

```
┌─────┐     ┌───┐     ┌───┐     ┌─────┐ᵀ
│     │     │   │     │   │     │     │
│  A  │  =  │ U │  ×  │ Σ │  ×  │  V  │
│     │     │   │     │   │     │     │
└─────┘     └───┘     └───┘     └─────┘
(m × n)    (m × r)   (r × r)   (r × n)
```

Here, r = rank of matrix A (number of concepts).
T = transpose operation.

#### Step 3: Dimensionality Reduction

- Keep only top k (number of concepts) singular values (k << r, typically k = 100-300)
- Creates approximate matrix Aₖ = Uₖ × Σₖ × Vₖᵀ
- Removes noise, captures main semantic patterns

#### Step 4: Query in Reduced Space

- Transform query vector to concept space
- Compare with document vectors using cosine similarity
- Return ranked results

### 5.4 LSI Example

```
Documents:
D1: "car automobile vehicle transport"
D2: "car motor drive engine"
D3: "truck vehicle engine motor"

After LSI with k=2 concepts:
Concept 1: "Motorized vehicles" (car, motor, engine, drive)
Concept 2: "Transportation" (vehicle, transport, automobile)

Query: "automobile"
- Maps to Concept 2
- Returns D1 (contains "automobile")
- Also returns D2, D3 (related to same concept!)
- Handles synonymy - finds related documents without exact match
```

### 5.5 LSI for SEO

| Strategy               | Description                                     |
| ---------------------- | ----------------------------------------------- |
| Use related terms      | Include synonyms and related concepts naturally |
| Comprehensive coverage | Cover topic thoroughly, not just main keyword   |
| Natural writing        | Avoid keyword stuffing, write for humans        |
| Semantic relevance     | Focus on meaning, not just exact keywords       |

### 5.6 Applications of LSI

- **Search Engines**: Improved relevance through semantic matching
- **Document Clustering**: Grouping semantically similar documents
- **Plagiarism Detection**: Finding semantically similar content
- **Cross-Language IR**: Matching documents across languages
- **Recommendation Systems**: Content-based recommendations

### 5.7 Advantages and Disadvantages

| Advantages           | Disadvantages                     |
| -------------------- | --------------------------------- |
| Handles synonymy     | Computationally expensive (SVD)   |
| Reduces noise        | Concepts hard to interpret        |
| Improves recall      | Difficult to update incrementally |
| Language independent | Doesn't fully solve polysemy      |

---

## **6. Web Spamming**

> PYQ: Define web spamming. (2022-Feb, 1.875 marks)  
> PYQ: Write short notes on Web spamming. (2022-Dec, 2023, 2024-May, 2024-Dec - 2.5-5 marks)

### 6.1 Definition

**Web Spamming** (Spamdexing) is the deliberate manipulation of search engine indexes to achieve higher rankings for web pages that don't deserve them based on actual content or authority.

It involves using deceptive techniques to trick search engines into ranking pages higher than they should be, often for commercial gain or to drive traffic to websites.

### 6.2 Types of Web Spam

```
Web Spam
├── Content Spam
│   ├── Keyword stuffing : Overusing keywords unnaturally
│   ├── Hidden text/links : White text on white background
│   └── Doorway pages : Pages created solely for ranking, redirecting users
│
├── Link Spam
│   ├── Link farms : Networks of sites linking to each other
│   ├── Paid links : Buying/selling links for ranking
│   └── Comment/Forum spam : Posting links in comments/forums
│
└── Cloaking
    └── Different content for crawlers vs users
```

### 6.3 Spam Techniques

| Technique            | Description                             |
| -------------------- | --------------------------------------- |
| **Keyword Stuffing** | Overusing keywords unnaturally          |
| **Hidden Text**      | White text on white background          |
| **Link Farms**       | Networks of sites linking to each other |
| **Cloaking**         | Show different content to crawlers      |
| **Doorway Pages**    | Pages only for ranking, redirect users  |
| **Scraped Content**  | Copying content from other sites        |

### 6.4 Spam Detection Methods

| Method           | Approach                           |
| ---------------- | ---------------------------------- |
| Content Analysis | Detect keyword density anomalies   |
| Link Analysis    | Identify link farm patterns        |
| Machine Learning | Train classifiers on spam features |
| TrustRank        | Propagate trust from seed sites    |

---

## **7. Clustering and Classification of Web Pages**

> PYQ: What is clustering? How is it different from classification? (2022-Feb, 7 marks)  
> PYQ: Classification of web pages. (2023, 7.5 marks)  
> PYQ: Clustering of web pages. (2024-May, 7.5 marks)

### 7.1 Classification vs Clustering

| Aspect       | Classification              | Clustering                  |
| ------------ | --------------------------- | --------------------------- |
| **Type**     | Supervised learning         | Unsupervised learning       |
| **Labels**   | Predefined categories       | No predefined labels        |
| **Training** | Needs labeled training data | No training data needed     |
| **Goal**     | Assign to known category    | Discover natural groups     |
| **Example**  | Spam vs Not Spam            | Group similar news articles |

### 7.2 Web Page Classification

**Definition:** Assigning web pages to predefined categories using supervised learning.

**Process:**

```
Labeled Training Data → Feature Extraction → Train Classifier → Classify New Pages
```

**Features Used:**
| Feature Type | Examples |
|--------------|----------|
| Content | Words, TF-IDF scores, topics |
| Structure | HTML tags, headings, lists |
| Link | Inlinks, outlinks, anchor text |
| URL | Domain name, path keywords |

**Algorithms:** Naive Bayes, SVM (Support Vector Machines) , Decision Trees, Neural Networks

**Applications:**

- Topic categorization (Sports, News, Technology)
- Spam detection
- Sentiment classification
- Content filtering

### 7.3 Web Page Clustering

**Definition:** Grouping similar web pages without predefined categories using unsupervised learning.

**Algorithms:**
| Algorithm | Description |
|-----------|-------------|
| K-Means | Partition into k clusters based on centroid distance |
| Hierarchical | Build tree of clusters (agglomerative/divisive) |
| DBSCAN | Density-based clustering |

**Challenges:**
| Challenge | Description |
|-----------|-------------|
| High dimensionality | Many features (vocabulary size) |
| Sparse data | Most terms don't appear in most docs |
| Noise | Ads, navigation, boilerplate content |
| Scale | Billions of web pages |

**Applications:**

- Search result grouping
- Duplicate detection
- Topic discovery
- Website organization

---

## **8. Information Extraction**

> PYQ: Discuss the term information extraction. (2022-Feb, 1.875 marks)

### 8.1 Definition

**Information Extraction (IE)** is the process of automatically extracting structured information from unstructured or semi-structured text.
It involves identifying and extracting specific pieces of information such as names, dates, locations, relationships, and events from natural language text and organizing them into a structured format that can be stored in databases or used for further analysis.

### 8.2 IE Tasks

| Task                    | Description         | Example                     |
| ----------------------- | ------------------- | --------------------------- |
| **NER (Named Entity Recognition)** | Find named entities | "Apple Inc." → Organization |
| **Relation Extraction** | Find relationships  | "Jobs founded Apple"        |
| **Event Extraction**    | Find events         | "Conference on Dec 5"       |

### 8.3 IE vs IR

| IE (Information Extraction)      | IR (Information Retrieval)         |
| -------------------------------- | ---------------------------------- |
| Extracts structured data         | Returns documents                  |
| Deep NLP processing              | Keyword matching                   |
| Specific information (entities, facts) | Relevant documents/content         |
| Output: database, facts, triples | Output: ranked list of documents   |
| Example: extract names, dates    | Example: find articles on a topic  |
| Used for knowledge base creation | Used for search and discovery      |

---

## **9. Web Content Mining**

> PYQ: Web content mining. (2022-Dec, 2023, 2024-Dec - 3-7.5 marks)

### 9.1 Definition

**Web Content Mining** is the process of extracting useful information from the content of web pages, including text, images, audio, and video.
It focuses on discovering and extracting knowledge from the actual content displayed on web pages rather than the structure or usage patterns. This includes analyzing textual content, multimedia elements, and structured data embedded within web pages.

### 9.2 Types of Web Content

| Type       | Examples                       |
| ---------- | ------------------------------ |
| Text       | Articles, product descriptions |
| Multimedia | Images, videos, audio          |
| Structured | Tables, lists, forms           |
| Metadata   | Title, description, keywords   |

### 9.3 Techniques

| Technique                  | Application                          |
| -------------------------- | ------------------------------------ |
| Text Mining                | Topic extraction, sentiment analysis |
| NLP                        | Entity recognition, summarization    |
| Image Mining               | Object detection, classification     |
| Structured Data Extraction | Table extraction, wrapper induction  |

### 9.4 Applications

- **Search Engines**: Content indexing and retrieval
- **News Aggregation**: Automatic news collection
- **Product Comparison**: Extract product features
- **Knowledge Base Construction**: Build structured knowledge
- **Opinion Mining**: Extract user opinions from reviews

---

## **Summary Table: Unit 2 Key Concepts**

| Topic                     | Key Points                                             |
| ------------------------- | ------------------------------------------------------ |
| **Information Retrieval** | Finding relevant documents from large collections      |
| **IR Models**             | Boolean (exact), VSM (TF-IDF), Probabilistic, Language |
| **LSI**                   | SVD for semantic matching, handles synonymy            |
| **Web Spamming**          | Content spam, link spam, cloaking                      |
| **Classification**        | Supervised learning, predefined categories             |
| **Clustering**            | Unsupervised learning, discover groups                 |
| **Text Mining**           | Extract patterns from unstructured text                |
| **Web Content Mining**    | Mining page content (text, images, multimedia)         |

---

## **Expected Questions for Exam**

### 15 Marks Questions

1. Information Retrieval Models (all 4 models with comparison)
2. Latent Semantic Indexing with example and applications
3. Clustering and Classification of web pages

### 7-8 Marks Questions

1. IR components and architecture
2. Web Search vs Information Retrieval
3. Web Spamming types and detection
4. Web Content Mining

### 2.5-3 Marks Questions

1. Define Information Retrieval / Text Mining / LSI
2. Web Spamming
3. Classification vs Clustering
4. Information Extraction

---

_These notes were compiled by [Deepak Modi](https://deepakmodi.tech)_  
_Last updated: December 2025_
