# Unit 2: Symmetric and Asymmetric Key Algorithms

**Course:** PEC-CSE-411G | **Author:** [Deepak Modi](https://deepakmodi.tech)

**Syllabus:**  
**Symmetric Key Algorithms:** Introduction, algorithms types and modes, DES, AES.  
**Asymmetric Key Algorithms:** Introduction, history of asymmetric key cryptography, RSA symmetric and asymmetric key cryptography together, Digital signature.

---

## **PYQ Analysis**

### **High Priority Topics** (15 marks questions)

1. **Blowfish Subkey Generation** - (Feb-22: 8 marks, Dec-22: 15 marks, May-23: 15 marks)
2. **DES Algorithm** - (Dec-22: 7.5 marks, 2024: 7.5 marks)
3. **AES Algorithm** - (May-23: 7.5 marks, 2024: 7.5 marks)
4. **RSA Algorithm** - (Feb-22: 7 marks, 2024: 8 marks + 7 marks comparison)
5. **Digital Signature** - (Feb-22: 7 marks)

### **Medium Priority Topics** (7-8 marks)

1. **DES Strengths and Weaknesses** - Feb-22 (8 marks)
2. **DES Modes Limitations/Advantages** - Dec-22, May-23 (7.5 marks each)
3. **DES vs AES vs RSA Comparison** - 2024 (7 marks)

### **Important Short Topics** (2.5 marks)

1. **DES Design Principles** - Dec-22
2. **DES Weak Keys** - May-23
3. **Cipher Block Chaining (CBC)** - Dec-22
4. **Electronic Codebook (ECB)** - May-23

---

## **1. Introduction to Symmetric Key Algorithms**

### 1.1 What are Symmetric Key Algorithms?

**Symmetric Key Algorithms** are encryption methods where the same secret key is used for both encryption and decryption. These algorithms are designed to be fast and efficient for encrypting large amounts of data. They form the backbone of modern data security, used in applications like file encryption, secure communications, and database protection.

**Analogy:** Think of symmetric key algorithms like a locked box where the same key is used to lock and unlock it. Only those who possess the key can access the contents inside.

**Key Characteristics:**

- Same key for encryption and decryption
- Fast processing speed
- Suitable for bulk data encryption
- Requires secure key distribution
- Examples: DES, AES, Blowfish, 3DES

### 1.2 Types of Symmetric Algorithms

**1. Block Ciphers:**

- Process fixed-size blocks of data (64, 128, 256 bits)
- Examples: DES (64-bit), AES (128-bit), Blowfish (64-bit)
- Uses modes of operation (ECB, CBC, CFB, OFB, CTR)

**2. Stream Ciphers:**

- Process data bit-by-bit or byte-by-byte
- Examples: RC4, A5/1, ChaCha20
- Faster for real-time applications

### 1.3 Modes of Operation

Symmetric algorithms can operate in different modes to handle data larger than the block size.

**Common Modes:**

**1. Electronic Codebook (ECB)**

> PYQ: Electronic Codebook (May-23, 2.5 marks)

**Electronic Codebook (ECB)** is the simplest mode of operation where each block of plain text is encrypted independently using the same key. Identical plain text blocks produce identical cipher text blocks, making patterns visible. This mode does not use an initialization vector and processes blocks in parallel.

```
Plain Text Blocks:  P₁    P₂    P₃    P₄
                    ↓     ↓     ↓     ↓
Encryption (Key):  [E]   [E]   [E]   [E]
                    ↓     ↓     ↓     ↓
Cipher Text:        C₁    C₂    C₃    C₄
```

**Advantages:**

- Simple implementation
- Parallel processing possible
- No error propagation
- Random access to blocks

**Disadvantages:**

- Identical blocks produce identical ciphertext (pattern leakage)
- Not secure for images or structured data
- Vulnerable to block replay attacks
- No diffusion across blocks

**2. Cipher Block Chaining (CBC)**

> PYQ: Cipher Block Chaining (Dec-22, 2.5 marks)

**Cipher Block Chaining (CBC)** is a mode where each plain text block is XORed with the previous cipher text block before encryption. The first block uses an Initialization Vector (IV). This ensures that identical plain text blocks produce different cipher text blocks, providing better security than ECB.

```
IV ──┐
     │
P₁ ──⊕──>[E]──> C₁ ──┐
                      │
P₂ ───────────────────⊕──>[E]──> C₂ ──┐
                                       │
P₃ ────────────────────────────────────⊕──>[E]──> C₃
```

**Advantages:**

- Identical blocks produce different ciphertext
- Good diffusion
- More secure than ECB
- Industry standard for many applications

**Disadvantages:**

- Sequential processing (no parallelization in encryption)
- Error propagation (affects next block)
- Requires IV management
- Padding needed for last block

**3. Cipher Feedback (CFB)**

Converts block cipher into stream cipher. Encrypts previous ciphertext and XORs with plaintext.

**4. Output Feedback (OFB)**

Similar to CFB but encrypts the previous output of encryption algorithm, not ciphertext.

**5. Counter (CTR)**

Uses a counter that increments for each block. Allows parallel processing and random access.

---

## **2. Data Encryption Standard (DES)**

> PYQ: Overview of DES Encryption Algorithm with diagram. (Dec-22, 7.5 marks)  
> PYQ: Explain the Data Encryption Standard (DES) in detail. How do its block structure and key size affect its security? (2024, 7.5 marks)  
> PYQ: Strengths and weaknesses of DES. (Feb-22, 8 marks)  
> PYQ: DES Design Principles (Dec-22, 2.5 marks)  
> PYQ: DES Weak Keys (May-23, 2.5 marks)

### 2.1 Introduction to DES

**Data Encryption Standard (DES)** is a symmetric block cipher developed by IBM and adopted as a federal standard in 1977. It encrypts data in 64-bit blocks using a 56-bit key through 16 rounds of processing. Despite being replaced by AES due to its small key size, DES remains important for understanding modern cryptography and is still used in its triple-DES variant.

**Key Specifications:**

- **Block Size**: 64 bits
- **Key Size**: 56 bits (64 bits with 8 parity bits)
- **Rounds**: 16
- **Structure**: Feistel network
- **Developed**: IBM (1970s), Standardized: 1977

### 2.2 DES Algorithm Structure

**Overall Structure:**

```
┌───────────────────────────────────────┐
│      64-bit Plain Text Block          │
└──────────────┬────────────────────────┘
        ┌──────▼──────┐
        │   Initial   │
        │ Permutation │
        │    (IP)     │
        └──────┬──────┘
        ┌──────▼──────┐
        │  Split into │
        │  L₀ and R₀  │
        │  (32+32 bit)│
        └──────┬──────┘
        ┌──────▼─────────────┐
        │   16 Rounds of     │
        │  Feistel Function  │
        │   (with subkeys)   │
        └──────┬─────────────┘
        ┌──────▼──────┐
        │   Swap L₁₆  │
        │   and R₁₆   │
        └──────┬──────┘
        ┌──────▼──────┐
        │    Final    │
        │ Permutation │
        │   (IP⁻¹)    │
        └──────┬──────┘
┌──────────────▼────────────────────────┐
│      64-bit Cipher Text Block         │
└───────────────────────────────────────┘
```

### 2.3 DES Round Function

**Each Round (1 to 16):**

```
        Lᵢ₋₁ (32 bits)    Rᵢ₋₁ (32 bits)
             │                  │
             │            ┌─────▼─────┐
             │            │ Expansion │
             │            │  (E-box)  │
             │            │ 32→48 bits│
             │            └─────┬─────┘
             │            ┌─────▼─────┐
             │            │    XOR    │◄── Kᵢ (48-bit subkey)
             │            └─────┬─────┘
             │            ┌─────▼─────┐
             │            │  S-boxes  │
             │            │  (8 boxes)│
             │            │ 48→32 bits│
             │            └─────┬─────┘
             │            ┌─────▼─────┐
             │            │Permutation│
             │            │  (P-box)  │
             │            └─────┬─────┘
             └──────⊕──────────┘
                    │
             ┌──────▼──────┐
             Lᵢ           Rᵢ
```

**Round Transformation:**

```
Lᵢ = Rᵢ₋₁
Rᵢ = Lᵢ₋₁ ⊕ f(Rᵢ₋₁, Kᵢ)

Where f is the round function
```

### 2.4 DES Components

**1. Initial Permutation (IP):**

- Rearranges 64 input bits according to fixed table
- No cryptographic significance (just reordering)

**2. Expansion (E-box):**

- Expands 32-bit right half to 48 bits
- Some bits duplicated for diffusion
- Output matches subkey size

**3. S-boxes (Substitution boxes):**

- 8 S-boxes, each takes 6 bits input, produces 4 bits output
- Provides confusion (non-linear transformation)
- Core of DES security
- Each S-box is a 4×16 lookup table

**S-box Operation:**

```
Input: 6 bits (b₁ b₂ b₃ b₄ b₅ b₆)
Row: b₁b₆ (outer bits) → 0-3
Column: b₂b₃b₄b₅ (inner bits) → 0-15
Output: 4 bits from table lookup
```

**4. P-box (Permutation):**

- Permutes 32-bit S-box output
- Provides diffusion
- Ensures each S-box output affects multiple S-boxes in next round

**5. Final Permutation (IP⁻¹):**

- Inverse of initial permutation
- Produces final ciphertext

### 2.5 DES Key Schedule

**Key Generation Process:**

```
┌──────────────────────────────┐
│  64-bit Key (8 parity bits)  │
└──────────────┬───────────────┘
        ┌──────▼──────┐
        │   PC-1      │ (Permuted Choice 1)
        │  Drop parity│
        │  64→56 bits │
        └──────┬──────┘
        ┌──────▼──────┐
        │  Split into │
        │  C₀ and D₀  │
        │ (28+28 bits)│
        └──────┬──────┘
        ┌──────▼──────────────┐
        │  16 Rounds:         │
        │  Left shift C & D   │
        │  (1 or 2 positions) │
        │  Apply PC-2         │
        │  Get 48-bit subkey  │
        └─────────────────────┘
```

**Left Shifts per Round:**

```
Round:  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16
Shifts: 1  1  2  2  2  2  2  2  1  2  2  2  2  2  2  1
```

**PC-2 (Permuted Choice 2):**

- Selects 48 bits from 56-bit shifted key
- Different 48 bits for each round
- Provides key diffusion

### 2.6 DES Design Principles

> PYQ: DES Design Principles (Dec-22, 2.5 marks)

**DES design follows specific principles to ensure security:**

- **Confusion**: S-boxes provide non-linear substitution, making relationship between key and ciphertext complex
- **Diffusion**: Permutations and expansion spread influence of each plaintext bit across ciphertext
- **Avalanche Effect**: Single bit change in input affects approximately 50% of output bits after a few rounds
- **Completeness**: Each output bit depends on all input bits after sufficient rounds
- **Key Schedule**: Complex key generation ensures different subkeys for each round
- **Feistel Structure**: Allows same algorithm for encryption and decryption

### 2.7 DES Weak Keys

> PYQ: DES Weak Keys (May-23, 2.5 marks)

**DES Weak Keys** are specific key values that produce identical subkeys for multiple rounds or exhibit other undesirable properties. Using these keys makes DES encryption less secure because the encryption becomes more predictable.

**Types of Weak Keys:**

**1. Weak Keys (4 keys):**

- Produce identical subkeys for all 16 rounds
- Encryption = Decryption (E(E(P,K),K) = P)
- Examples: All 0s, All 1s, alternating 0s and 1s

**2. Semi-weak Keys (12 keys):**

- Come in pairs where K₁ encrypts what K₂ decrypts
- E(P, K₁) = D(P, K₂)

**3. Possibly Weak Keys (48 keys):**

- Produce only 4 distinct subkeys instead of 16
- Less severe but still undesirable

**Why Weak?**

- Reduced effective key space
- Predictable encryption patterns
- Easier cryptanalysis
- Should be avoided in key generation

### 2.8 Strengths of DES

> PYQ: Strengths and weaknesses of DES. (Feb-22, 8 marks)

**Security Strengths:**

- Well-studied algorithm (40+ years of analysis)
- No practical attacks better than brute force (for single DES)
- Strong S-box design resists differential cryptanalysis
- Good avalanche effect after 5-6 rounds
- Feistel structure is proven secure

**Implementation Strengths:**

- Simple and efficient in hardware
- Fast encryption/decryption
- Same algorithm for both operations
- Well-documented and standardized
- Widely supported in legacy systems

**Design Strengths:**

- Balanced confusion and diffusion
- 16 rounds provide sufficient security margin
- S-boxes carefully designed (though criteria were secret initially)
- Key schedule provides good key diffusion

### 2.9 Weaknesses of DES

**Security Weaknesses:**

- **Small Key Size**: 56-bit key vulnerable to brute force (broken in 1998)
- **Small Block Size**: 64-bit blocks vulnerable to birthday attacks (after 2³² blocks)
- **Weak Keys**: Certain keys should be avoided
- **Complementation Property**: If C = E(P,K), then C' = E(P',K')
- **Meet-in-the-Middle Attack**: Double DES not much stronger than single DES

**Practical Weaknesses:**

- Obsolete for modern security requirements
- Not suitable for high-security applications
- Replaced by AES in most applications
- Export restrictions historically limited key size

**Design Weaknesses:**

- S-box design criteria were classified (raised suspicion)
- Fixed structure (no flexibility in parameters)
- No protection against side-channel attacks
- Relatively slow in software compared to modern algorithms

### 2.10 DES Modes - Advantages and Disadvantages

> PYQ: Limitations of DES modes. (Dec-22, 7.5 marks)  
> PYQ: Advantages and disadvantages of DES modes. (May-23, 7.5 marks)

**1. ECB Mode:**

In _Electronic Codebook (ECB)_ mode, each block is encrypted independently.

| **Advantages (ECB Mode)**      | **Disadvantages (ECB Mode)**                              |
| ------------------------------ | --------------------------------------------------------- |
| Simple and straightforward     | Pattern leakage (identical blocks → identical ciphertext) |
| Parallel encryption/decryption | Not secure for structured data                            |
| Random access to blocks        | Vulnerable to block replay attacks                        |
| No error propagation           | No diffusion between blocks                               |

**2. CBC Mode:**

In _Cipher Block Chaining (CBC)_ mode, each plaintext block is XORed with the previous ciphertext block before encryption.

| **Advantages (CBC Mode)**          | **Disadvantages (CBC Mode)**               |
| ---------------------------------- | ------------------------------------------ |
| Good security (no pattern leakage) | Sequential encryption (no parallelization) |
| Widely used and trusted            | Error propagation to next block            |
| Error detection capability         | Requires IV management                     |
| Suitable for most applications     | Padding oracle attacks possible            |

**3. CFB Mode:**

In _Cipher Feedback (CFB)_ mode, the previous ciphertext block is encrypted and XORed with the plaintext to produce ciphertext.

| **Advantages (CFB Mode)**              | **Disadvantages (CFB Mode)**      |
| -------------------------------------- | --------------------------------- |
| Converts block cipher to stream cipher | Sequential processing             |
| No padding required                    | Error propagation                 |
| Self-synchronizing                     | Slower than ECB                   |
| Suitable for real-time data            | Bit errors affect multiple blocks |

**4. OFB Mode:**

In _Output Feedback (OFB)_ mode, the output of the encryption function is fed back into itself to produce a keystream, which is then XORed with the plaintext.

| **Advantages (OFB Mode)** | **Disadvantages (OFB Mode)**       |
| ------------------------- | ---------------------------------- |
| No error propagation      | Sequential processing              |
| Pre-computation possible  | IV must never be reused            |
| Stream cipher mode        | Vulnerable to bit-flipping attacks |
| Bit errors don't spread   | Not self-synchronizing             |

**5. CTR Mode:**

In _Counter (CTR)_ mode, a counter value is encrypted and XORed with the plaintext to produce ciphertext. The counter is incremented for each block.

| **Advantages (CTR Mode)**      | **Disadvantages (CTR Mode)**           |
| ------------------------------ | -------------------------------------- |
| Parallel encryption/decryption | Counter/nonce must never repeat        |
| Random access                  | Not widely supported in legacy systems |
| No padding needed              | Requires careful counter management    |
| Pre-computation possible       | No built-in authentication             |
| No error propagation           |                                        |

### 2.11 Block Structure and Key Size Impact

> PYQ: How do its block structure and key size affect its security? (2024, 7.5 marks)

**Block Size Impact (64 bits):**

**Security Implications:**

- **Birthday Attack**: After 2³² blocks (32 GB), collision probability becomes significant
- **Pattern Detection**: Smaller blocks easier to analyze
- **Codebook Size**: 2⁶⁴ possible blocks can be enumerated
- **Modern Data**: Insufficient for large file encryption

**Key Size Impact (56 bits):**

**Security Implications:**

- **Brute Force**: 2⁵⁶ ≈ 72 quadrillion keys (feasible with modern computing)
- **DES Cracker**: Built in 1998, broke DES in 56 hours
- **Distributed Computing**: Can break DES in days
- **Modern Standards**: Minimum 128-bit keys recommended

**Why DES is Obsolete:**

- Moore's Law: Computing power doubles every 2 years
- Cloud Computing: Massive parallel processing available
- GPU/ASIC: Specialized hardware accelerates brute force
- Quantum Threat: Grover's algorithm would reduce effective key size to 28 bits

**Solutions:**

- **3DES**: Apply DES three times (effective 112-bit key)
- **AES**: Modern replacement with 128/192/256-bit keys
- **Larger Blocks**: AES uses 128-bit blocks

---

## **3. Advanced Encryption Standard (AES)**

> PYQ: One-time initialization and round steps in AES. (May-23, 7.5 marks)  
> PYQ: Describe the Advanced Encryption Standard (AES) and its significance in modern cryptography. Discuss how its modes of operation ensure secure encryption. (2024, 7.5 marks)

### 3.1 Introduction to AES

**Advanced Encryption Standard (AES)** is a symmetric block cipher adopted as a federal standard in 2001 to replace DES. It was developed by Belgian cryptographers Joan Daemen and Vincent Rijmen and originally called Rijndael. AES is currently the most widely used encryption standard worldwide, securing everything from wireless networks to government communications.

**Key Specifications:**

- **Block Size**: 128 bits (fixed)
- **Key Sizes**: 128, 192, or 256 bits
- **Rounds**: 10 (128-bit), 12 (192-bit), 14 (256-bit)
- **Structure**: Substitution-Permutation Network (not Feistel)
- **Standardized**: 2001 by NIST (National Institute of Standards and Technology, USA)

### 3.2 AES Structure

**Overall Process:**

```
┌────────────────────────────────┐
│   128-bit Plain Text Block     │
└────────────┬───────────────────┘
      ┌──────▼──────┐
      │   Convert   │
      │   to 4×4    │
      │ State Matrix│
      └──────┬──────┘
      ┌──────▼──────────┐
      │  Initial Round  │
      │  - AddRoundKey  │
      └──────┬──────────┘
      ┌──────▼──────────────┐
      │  Main Rounds        │
      │  (9, 11, or 13)     │
      │  - SubBytes         │
      │  - ShiftRows        │
      │  - MixColumns       │
      │  - AddRoundKey      │
      └──────┬──────────────┘
      ┌──────▼──────────────┐
      │  Final Round        │
      │  - SubBytes         │
      │  - ShiftRows        │
      │  - AddRoundKey      │
      │  (No MixColumns)    │
      └──────┬──────────────┘
      ┌──────▼──────┐
      │   Convert   │
      │   Matrix    │
      │  to 128-bit │
      └──────┬──────┘
┌────────────▼───────────────────┐
│   128-bit Cipher Text Block    │
└────────────────────────────────┘
```

### 3.3 AES State Matrix

**State Representation:**

AES operates on a 4×4 matrix of bytes called the "state":

```
128-bit block = 16 bytes

┌────┬────┬────┬────┐
│ b₀ │ b₄ │ b₈ │ b₁₂│
├────┼────┼────┼────┤
│ b₁ │ b₅ │ b₉ │ b₁₃│
├────┼────┼────┼────┤
│ b₂ │ b₆ │ b₁₀│ b₁₄│
├────┼────┼────┼────┤
│ b₃ │ b₇ │ b₁₁│ b₁₅│
└────┴────┴────┴────┘

Note: Filled column-wise
```

### 3.4 One-Time Initialization

> PYQ: One-time initialization and round steps in AES. (May-23, 7.5 marks)

**Initial Round (Before main rounds):**

**AddRoundKey:**

- XOR the state matrix with the first round key
- Round key derived from cipher key
- This is the only operation in initial round

```
State Matrix ⊕ Round Key₀ = New State
```

**Purpose:**

- Introduces key material immediately
- Ensures different keys produce different encryptions
- Simple but effective first layer of security

### 3.5 AES Round Transformations

**Each Main Round consists of 4 operations:**

**1. SubBytes (Substitution):**

Replaces each byte with another byte using S-box lookup table.

```
Before:              After:
┌────┬────┐         ┌────┬────┐
│ 53 │ 00 │   →     │ ED │ 63 │
├────┼────┤         ├────┼────┤
│ 01 │ C6 │         │ 7C │ 2B │
└────┴────┘         └────┴────┘

Each byte independently substituted
```

**Properties:**

- Non-linear transformation (provides confusion)
- Based on multiplicative inverse in GF(2⁸)
- Resistant to linear and differential cryptanalysis
- Same S-box for all bytes

**2. ShiftRows (Permutation):**

Cyclically shifts rows of the state matrix.

```
Before:                    After:
┌────┬────┬────┬────┐    ┌────┬────┬────┬────┐
│ b₀ │ b₄ │ b₈ │ b₁₂│    │ b₀ │ b₄ │ b₈ │ b₁₂│ (no shift)
├────┼────┼────┼────┤    ├────┼────┼────┼────┤
│ b₁ │ b₅ │ b₉ │ b₁₃│ →  │ b₅ │ b₉ │ b₁₃│ b₁ │ (shift 1)
├────┼────┼────┼────┤    ├────┼────┼────┼────┤
│ b₂ │ b₆ │ b₁₀│ b₁₄│    │ b₁₀│ b₁₄│ b₂ │ b₆ │ (shift 2)
├────┼────┼────┼────┤    ├────┼────┼────┼────┤
│ b₃ │ b₇ │ b₁₁│ b₁₅│    │ b₁₅│ b₃ │ b₇ │ b₁₁│ (shift 3)
└────┴────┴────┴────┘    └────┴────┴────┴────┘

Row 0: No shift
Row 1: Left shift by 1
Row 2: Left shift by 2
Row 3: Left shift by 3
```

**Purpose:**

- Provides diffusion across columns
- Ensures bytes from different columns mix
- Simple but effective permutation

**3. MixColumns (Mixing):**

Mixes data within each column using matrix multiplication in GF(2⁸).

```
Each column multiplied by fixed matrix:

┌────┐   ┌────────────────┐   ┌────┐
│ s₀ │   │ 02 03 01 01    │   │ s'₀│
│ s₁ │ = │ 01 02 03 01    │ × │ s'₁│
│ s₂ │   │ 01 01 02 03    │   │ s'₂│
│ s₃ │   │ 03 01 01 02    │   │ s'₃│
└────┘   └────────────────┘   └────┘

Operations in Galois Field GF(2⁸)
```

**Purpose:**

- Provides diffusion within columns
- Each output byte depends on all 4 input bytes
- Ensures avalanche effect
- Most complex operation in AES

**4. AddRoundKey:**

XORs state matrix with round key.

```
State ⊕ RoundKeyᵢ = New State

┌────┬────┐     ┌────┬────┐     ┌────┬────┐
│ a₀ │ a₁ │ ⊕  │ k₀ │ k₁ │  =  │ c₀ │ c₁ │
├────┼────┤     ├────┼────┤     ├────┼────┤
│ a₂ │ a₃ │     │ k₂ │ k₃ │     │ c₂ │ c₃ │
└────┴────┘     └────┴────┘     └────┴────┘
```

**Purpose:**

- Introduces key material
- Only operation involving the key
- Provides security through key
- Reversible with same key

### 3.6 AES Key Expansion

**Key Schedule:**

Expands the cipher key into separate round keys.

```
For AES-128:
128-bit key → 11 round keys (176 bytes total)

For AES-192:
192-bit key → 13 round keys (208 bytes total)

For AES-256:
256-bit key → 15 round keys (240 bytes total)
```

**Key Expansion Process:**

1. First round key = cipher key
2. Each subsequent word derived from previous words
3. Uses SubBytes, rotation, and round constants
4. Ensures each round key is different

### 3.7 Significance in Modern Cryptography

> PYQ: Describe the Advanced Encryption Standard (AES) and its significance in modern cryptography. (2024, 7.5 marks)

**Security Significance:**

- **Unbroken**: No practical attacks better than brute force
- **Large Key Space**: 2¹²⁸, 2¹⁹², or 2²⁵⁶ keys (astronomically large)
- **Quantum Resistant**: AES-256 remains secure even against quantum computers
- **Well-Analyzed**: Extensively studied by cryptographic community
- **Government Approved**: Used for classified information up to TOP SECRET

**Industry Significance:**

- **Universal Standard**: Adopted worldwide by governments and industries
- **Hardware Support**: Built into modern CPUs (AES-NI instructions)
- **Fast Performance**: Efficient in both hardware and software
- **Flexible**: Three key sizes for different security needs
- **Backward Compatible**: Works with existing infrastructure

**Practical Applications:**

- **Wireless Security**: WPA2/WPA3 use AES
- **VPN**: IPsec and SSL/TLS use AES
- **File Encryption**: BitLocker, FileVault use AES
- **Database**: Transparent Data Encryption uses AES
- **Cloud Storage**: Amazon S3, Google Drive use AES
- **Mobile**: iOS and Android use AES for device encryption

### 3.8 AES Modes of Operation

> PYQ: Discuss how its modes of operation ensure secure encryption. (2024, 7.5 marks)

**How Modes Ensure Security:**

**1. ECB Mode (Not Recommended):**

- Simple but insecure for most uses
- Only suitable for random data
- Never use for structured data

**2. CBC Mode (Widely Used):**

- **Security**: IV randomization prevents pattern detection
- **Integrity**: Changes propagate, detecting tampering
- **Use Case**: File encryption, disk encryption
- **Requirement**: Unique IV for each encryption

**3. CTR Mode (Modern Choice):**

- **Security**: Counter ensures unique input for each block
- **Performance**: Parallel processing possible
- **Use Case**: Network encryption, high-speed applications
- **Requirement**: Never reuse counter with same key

**4. GCM Mode (Authenticated Encryption):**

- **Security**: Combines encryption + authentication
- **Integrity**: Detects any modification
- **Performance**: Parallel processing, hardware acceleration
- **Use Case**: TLS 1.3, IPsec, modern protocols
- **Advantage**: Prevents tampering and forgery

**5. CCM Mode (Alternative Authenticated):**

- **Security**: CBC-MAC for authentication
- **Use Case**: Wireless protocols (WPA2)
- **Advantage**: Simpler than GCM

**Key Security Principles:**

- **Unique IVs**: Prevent pattern analysis
- **Authentication**: Detect tampering (GCM, CCM)
- **Key Management**: Regular key rotation
- **Implementation**: Use vetted libraries
- **Side Channels**: Constant-time implementations

---

## **4. Blowfish Algorithm**

> PYQ: Subkey and S-box generation in Blowfish. (Feb-22, 8 marks)  
> PYQ: Subkey generation in Blowfish. (Dec-22, 15 marks)  
> PYQ: Subkey generation in Blowfish. (May-23, 15 marks)

### 4.1 Introduction to Blowfish

**Blowfish** is a symmetric block cipher designed by Bruce Schneier in 1993 as a fast, free alternative to existing encryption algorithms. It is a Feistel network with 16 rounds, using large key-dependent S-boxes and a complex key schedule. Blowfish is known for its speed and effectiveness, though it has largely been replaced by its successor, Twofish, and AES.

**Key Specifications:**

- **Block Size**: 64 bits
- **Key Size**: Variable (32 to 448 bits)
- **Rounds**: 16
- **Structure**: Feistel network
- **S-boxes**: 4 S-boxes, each with 256 entries (32-bit values)
- **P-array**: 18 subkeys (32-bit each)

### 4.2 Blowfish Structure

**Components:**

**1. P-array:**

- 18 subkeys: P₁, P₂, ..., P₁₈
- Each is 32-bit value
- Used in each round and for pre/post-whitening

**2. S-boxes:**

- Four S-boxes: S₁, S₂, S₃, S₄
- Each has 256 entries of 32-bit values
- Total: 4 × 256 × 4 = 4096 bytes
- Key-dependent (different for each key)

### 4.3 Blowfish Encryption

**Process:**

```
64-bit Input Block
       │
       ├──────────────┐
       │              │
    Left (L)      Right (R)
    32 bits       32 bits
       │              │
       │              │
   ┌───┴──────────────▼───┐
   │   Round 1 (P₁)       │
   │   L = L ⊕ P₁         │
   │   R = R ⊕ F(L)       │
   │   Swap L and R       │
   └───┬──────────────────┘
       │
   (Repeat for 16 rounds)
       │
   ┌───▼──────────────────┐
   │   After Round 16:    │
   │   Swap L and R       │
   │   R = R ⊕ P₁₇        │
   │   L = L ⊕ P₁₈        │
   └───┬──────────────────┘
       │
       ├──────────────┐
       │              │
    Left (L)      Right (R)
       │              │
       └──────┬───────┘
              │
      64-bit Ciphertext
```

**Round Function F:**

```
Input: 32-bit value X

Split X into 4 bytes: a, b, c, d (8 bits each)

F(X) = ((S₁[a] + S₂[b]) ⊕ S₃[c]) + S₄[d]

Operations:
- S₁[a]: Lookup in S-box 1
- S₂[b]: Lookup in S-box 2
- +: Addition modulo 2³²
- ⊕: XOR
- S₃[c]: Lookup in S-box 3
- S₄[d]: Lookup in S-box 4
```

### 4.4 Subkey Generation in Blowfish

> PYQ: Subkey and S-box generation in Blowfish. (Feb-22, 8 marks)  
> PYQ: Subkey generation in Blowfish. (Dec-22, 15 marks)  
> PYQ: Subkey generation in Blowfish. (May-23, 15 marks)

**Subkey generation is the most important and complex part of Blowfish. It transforms the user key into 18 P-array subkeys and four S-boxes.**

### Step-by-Step Subkey Generation:

**Step 1: Initialize P-array and S-boxes**

Initialize with fixed values (digits of π):

```
P₁ = 0x243f6a88
P₂ = 0x85a308d3
P₃ = 0x13198a2e
...
P₁₈ = 0x...

S₁[0] = 0xd1310ba6
S₁[1] = 0x98dfb5ac
...
S₄[255] = 0x...

Total: 18 + (4 × 256) = 1042 values initialized
```

**Step 2: XOR P-array with key**

XOR the key bytes with P-array entries cyclically:

```
P₁ = P₁ ⊕ (first 32 bits of key)
P₂ = P₂ ⊕ (next 32 bits of key)
...
P₁₈ = P₁₈ ⊕ (key bits, wrapping around if needed)

If key is shorter than 576 bits (18 × 32),
repeat key from beginning.

Example with 128-bit key:
Key = K₀ K₁ K₂ K₃ (each 32 bits)

P₁ = P₁ ⊕ K₀
P₂ = P₂ ⊕ K₁
P₃ = P₃ ⊕ K₂
P₄ = P₄ ⊕ K₃
P₅ = P₅ ⊕ K₀  (wrap around)
P₆ = P₆ ⊕ K₁
...
P₁₈ = P₁₈ ⊕ K₁
```

**Step 3: Encrypt all-zero block**

Encrypt a 64-bit block of all zeros using current P-array and S-boxes:

```
Input: 0x0000000000000000
Output: L₁ || R₁ (64 bits)
```

**Step 4: Replace P₁ and P₂**

Replace first two P-array entries with the output:

```
P₁ = L₁ (left 32 bits)
P₂ = R₁ (right 32 bits)
```

**Step 5: Encrypt previous output**

Encrypt the previous ciphertext (L₁ || R₁):

```
Input: L₁ || R₁
Output: L₂ || R₂
```

**Step 6: Replace P₃ and P₄**

```
P₃ = L₂
P₄ = R₂
```

**Step 7: Continue for all P-array entries**

Repeat the process:

```
Iteration 1: Encrypt 0x0000000000000000 → P₁, P₂
Iteration 2: Encrypt (P₁||P₂) → P₃, P₄
Iteration 3: Encrypt (P₃||P₄) → P₅, P₆
...
Iteration 9: Encrypt (P₁₅||P₁₆) → P₁₇, P₁₈

Total: 9 encryptions for P-array
```

**Step 8: Continue for S-boxes**

Use the same process for all S-box entries:

```
Iteration 10: Encrypt (P₁₇||P₁₈) → S₁[0], S₁[1]
Iteration 11: Encrypt (S₁[0]||S₁[1]) → S₁[2], S₁[3]
...

Continue until all S-box entries filled:
- S₁: 256 entries = 128 encryptions
- S₂: 256 entries = 128 encryptions
- S₃: 256 entries = 128 encryptions
- S₄: 256 entries = 128 encryptions

Total S-box encryptions: 4 × 128 = 512
```

**Total Encryptions Required:**

```
P-array: 9 encryptions
S-boxes: 512 encryptions
Total: 521 encryptions

Each encryption uses 16 rounds of Blowfish.
```

### 4.5 Complete Algorithm Summary

**Initialization Phase:**

```
1. Initialize P-array with π digits (18 values)
2. Initialize 4 S-boxes with π digits (1024 values)
3. XOR P-array with key (cycling if needed)
4. Encrypt all-zero block 521 times:
   - First 9 outputs → P-array (P₁ to P₁₈)
   - Next 512 outputs → S-boxes (all entries)
```

**Why This is Secure:**

- **Key-Dependent S-boxes**: Each key produces unique S-boxes
- **Slow Key Setup**: 521 encryptions make brute force expensive
- **Avalanche Effect**: Small key change completely changes subkeys
- **No Weak Keys**: Complex initialization prevents weak keys
- **Large State**: 4168 bytes of key-dependent data

**Why This is Slow:**

- Key setup requires significant computation
- Not suitable for applications needing frequent key changes
- Good for applications with infrequent key changes
- Trade-off: Slow setup for strong security

---

## **5. Asymmetric Key Algorithms: Introduction & History**

### 5.1 What are Asymmetric Key Algorithms?

**Asymmetric Key Algorithms** (also called public-key algorithms) use a pair of keys: a public key (shared with everyone) and a private key (kept secret). Data encrypted with one key can only be decrypted with the other. This enables secure communication without sharing secret keys in advance.

**Key Points:**

- Uses two keys: public (for encryption) and private (for decryption)
- Enables secure key exchange over insecure channels
- Supports digital signatures for authentication
- Slower than symmetric algorithms, but solves the key distribution problem
- Examples: RSA (Rivest-Shamir-Adleman), Diffie-Hellman, ElGamal, ECC (Elliptic Curve Cryptography)

**Analogy:**
Imagine a mailbox with a slot and a lock. Anyone can drop a letter in (public key), but only the owner with the key can open it (private key).

### 5.2 History of Asymmetric Key Cryptography

- **1976:** Whitfield Diffie and Martin Hellman introduced the concept of public-key cryptography and the first key exchange protocol (Diffie-Hellman Key Exchange).
- **1977:** RSA algorithm was invented by Ron Rivest, Adi Shamir, and Leonard Adleman, making practical public-key encryption possible.
- **1985:** Elliptic Curve Cryptography (ECC) was proposed, offering similar security with smaller keys.
- **Impact:** Asymmetric cryptography revolutionized secure communications, enabling secure email, e-commerce, digital signatures, and the foundation of modern internet security (SSL/TLS, HTTPS).

**Why is it important?**

- Solves the key distribution problem of symmetric cryptography
- Enables secure communication between parties who have never met
- Forms the basis for digital signatures, certificates, and secure web protocols

---

## **5. RSA Algorithm**

> PYQ: RSA encryption/decryption (p = 3, q = 11, e = 7, N = 5). (Feb-22, 7 marks)  
> PYQ: Explain the RSA Algorithm with an example. (2024, 8 marks)  
> PYQ: What is the primary purpose of the RSA algorithm in encryption? (2024, 2.5 marks)

### 5.1 Introduction to RSA

**RSA (Rivest-Shamir-Adleman)** is an asymmetric cryptographic algorithm developed in 1977 by Ron Rivest, Adi Shamir, and Leonard Adleman. It uses two different keys - a public key for encryption and a private key for decryption. RSA's security is based on the mathematical difficulty of factoring large prime numbers, making it one of the most widely used public-key cryptosystems.

**Primary Purpose:**

- Secure key exchange over insecure channels
- Digital signatures for authentication
- Encrypting small amounts of data (like session keys)
- Public key infrastructure (PKI) foundation

### 5.2 RSA Key Generation

**Step 1:** Choose two large prime numbers p and q (kept secret)

**Step 2:** Calculate n = p × q (part of both keys)

**Step 3:** Calculate φ(n) = (p - 1) × (q - 1) (kept secret)

**Step 4:** Choose public exponent e where 1 < e < φ(n) and gcd(e, φ(n)) = 1

**Step 5:** Calculate private exponent d where (d × e) mod φ(n) = 1

**Step 6:** Public Key: (e, n), Private Key: (d, n)

### 5.3 RSA Encryption and Decryption

**Encryption Formula:** C = Mᵉ mod n

**Decryption Formula:** M = Cᵈ mod n

Where: C = Ciphertext, M = Message, e = Public exponent, d = Private exponent, n = Modulus

### 5.4 Complete RSA Example

> PYQ: RSA encryption/decryption (p = 3, q = 11, e = 7, M = 5). (Feb-22, 7 marks)

**Given:** p = 3, q = 11, e = 7, Message M = 5

**Solution:**

1. n = 3 × 11 = 33
2. φ(n) = 2 × 10 = 20
3. Verify e: gcd(7, 20) = 1 ✓
4. Find d: d × 7 ≡ 1 (mod 20) → d = 3
5. Keys: Public (7, 33), Private (3, 33)
6. Encryption: C = 5⁷ mod 33 = 14
7. Decryption: M = 14³ mod 33 = 5 ✓

### 5.6 RSA Security and Usage

**Security:**

- Based on difficulty of factoring large primes
- Minimum 2048-bit keys recommended
- Vulnerable to quantum computing (Shor's algorithm)

**Advantages:**

- Secure key distribution, digital signatures
- No pre-shared secret needed

**Disadvantages:**

- Slow (100-1000× slower than AES)
- Not suitable for bulk encryption

**Typical Usage (Hybrid):**

1. Use RSA to exchange AES key
2. Use AES to encrypt actual data
3. Use RSA for digital signatures

---

## **6. Digital Signature**

> PYQ: Digital Signature in detail. (Feb-22, 7 marks)  
> PYQ: How are digital signatures used in cryptographic communication? (2024, 2.5 marks)

### 6.1 What is a Digital Signature?

**Digital Signature** is a cryptographic technique that provides authentication, integrity, and non-repudiation (meaning the sender cannot deny sending the message) for digital messages or documents. It is the electronic equivalent of a handwritten signature but provides much stronger security guarantees. A digital signature proves that a message was created by a known sender and has not been altered in transit.

**Purpose:**

- **Authentication**: Verifies sender's identity
- **Integrity**: Ensures message hasn't been modified
- **Non-repudiation**: Sender cannot deny sending the message
- **Trust**: Establishes confidence in digital communications

### 6.2 Digital Signature Process

**Signing Process:**

```
Sender Side:
┌──────────────┐
│   Message    │
└──────┬───────┘
┌──────▼───────┐
│  Hash        │ (MD5, SHA-256, etc.)
│  Function    │
└──────┬───────┘
┌──────▼───────┐
│  Hash Value  │ (Fixed size: 128, 256 bits)
│  (Digest)    │
└──────┬───────┘
┌──────▼───────┐
│   Encrypt    │◄─── Private Key (Sender)
│  with RSA    │
└──────┬───────┘
┌──────▼───────┐
│   Digital    │
│  Signature   │
└──────────────┘

Send: Message + Digital Signature
```

**Verification Process:**

```
Receiver Side:
┌──────────────┐     ┌──────────────┐
│   Message    │     │   Digital    │
│  (Received)  │     │  Signature   │
└──────┬───────┘     └──────┬───────┘
┌──────▼───────┐     ┌──────▼───────┐
│  Hash        │     │   Decrypt    │◄── Public Key (Sender)
│  Function    │     │  with RSA    │
└──────┬───────┘     └──────┬───────┘
┌──────▼───────┐     ┌──────▼───────┐
│  Hash Value  │     │  Hash Value  │
│   (New)      │     │  (Original)  │
└──────┬───────┘     └──────┬───────┘
       └──────────┬─────────┘
           ┌──────▼───────┐
           │   Compare    │
           └──────┬───────┘
                  ▼
         ┌────────┴────────┐
    Match = Valid     No Match = Invalid
    (Authentic)       (Tampered/Forged)
```

### 6.3 Digital Signature with RSA

**Signing Algorithm:**

```
Given:
- Message M
- Sender's private key (d, n)

Step 1: Hash the message
H = Hash(M)

Step 2: Sign the hash
S = Hᵈ mod n

Output: Signature S
Send: (M, S)
```

**Verification Algorithm:**

```
Given:
- Message M
- Signature S
- Sender's public key (e, n)

Step 1: Hash the received message
H₁ = Hash(M)

Step 2: Decrypt the signature
H₂ = Sᵉ mod n

Step 3: Compare
If H₁ = H₂: Signature Valid ✓
Else: Signature Invalid ✗
```

### 6.4 Properties of Digital Signatures

- **Unforgeable**: Only holder of private key can create valid signature
- **Authentic**: Signature proves sender's identity
- **Non-reusable**: Signature for one document can't be used for another
- **Unalterable**: Signed document cannot be modified
- **Non-repudiation**: Signer cannot deny signing
- **Efficient Verification**: Public key verification is fast

### 6.5 Use in Cryptographic Communication

> PYQ: How are digital signatures used in cryptographic communication? (2024, 2.5 marks)

**Common Uses:**

- **Email Security**: S/MIME, PGP for email authentication
- **Software Distribution**: Code signing for applications
- **Financial Transactions**: Digital banking, cryptocurrency
- **Document Signing**: PDF signatures, legal documents
- **SSL/TLS**: Server authentication, certificate validation
- **Blockchain**: Transaction authentication, wallet ownership

### 6.6 Digital Signature vs Handwritten Signature

| Aspect                   | Handwritten       | Digital                    |
| ------------------------ | ----------------- | -------------------------- |
| **Verification**         | Visual comparison | Mathematical computation   |
| **Forgery**              | Can be forged     | Computationally infeasible |
| **Document Binding**     | Can be copied     | Unique to document         |
| **Alteration Detection** | Difficult         | Automatic                  |
| **Non-repudiation**      | Can be disputed   | Cryptographically proven   |
| **Portability**          | Physical only     | Electronic                 |

---

## **7. Comparison: DES vs AES vs RSA**

> PYQ: Compare DES, AES, and RSA in terms of structure, key length, and security level. (2024, 7 marks)

### 7.1 Detailed Comparison

| Aspect               | DES                      | AES                      | RSA                                   |
| -------------------- | ------------------------ | ------------------------ | ------------------------------------- |
| **Type**             | Symmetric                | Symmetric                | Asymmetric                            |
| **Block Size**       | 64 bits                  | 128 bits                 | Variable (up to key size)             |
| **Key Length**       | 56 bits (64 with parity) | 128, 192, 256 bits       | 1024-4096 bits (typically 2048)       |
| **Structure**        | Feistel Network          | Substitution-Permutation | Mathematical (modular exponentiation) |
| **Rounds**           | 16                       | 10, 12, or 14            | Single operation (but complex)        |
| **Speed**            | Fast                     | Very Fast                | Slow (100-1000× slower)               |
| **Security Level**   | Weak (broken)            | Strong                   | Strong (with large keys)              |
| **Year**             | 1977                     | 2001                     | 1977                                  |
| **Key Distribution** | Difficult                | Difficult                | Easy (public key)                     |
| **Use Case**         | Legacy systems           | Bulk encryption          | Key exchange, signatures              |

### 7.2 Structure Comparison

**DES Structure:**

- Feistel network with 16 rounds
- Split block into left and right halves
- Round function uses S-boxes and P-boxes
- Same structure for encryption/decryption
- Fixed S-boxes (not key-dependent)

**AES Structure:**

- Substitution-Permutation Network
- Operates on 4×4 byte matrix (state)
- Four operations: SubBytes, ShiftRows, MixColumns, AddRoundKey
- Different structure for encryption/decryption
- No Feistel structure

**RSA Structure:**

- Mathematical algorithm (not block cipher)
- Based on modular exponentiation
- Uses prime factorization hardness
- No rounds (single operation)
- Different keys for encryption/decryption

### 7.3 Key Length Comparison

**DES (56 bits):**

- 2⁵⁶ ≈ 72 quadrillion keys
- Broken by brute force in 1998
- Insufficient for modern security
- 3DES uses 168 bits (112-bit effective security)

**AES (128/192/256 bits):**

- AES-128: 2¹²⁸ ≈ 3.4 × 10³⁸ keys
- AES-256: 2²⁵⁶ ≈ 1.1 × 10⁷⁷ keys
- Secure against brute force
- AES-256 quantum-resistant

**RSA (2048+ bits):**

- Not directly comparable (asymmetric)
- 2048-bit RSA ≈ 112-bit symmetric security
- 3072-bit RSA ≈ 128-bit symmetric security
- 4096-bit RSA ≈ 140-bit symmetric security
- Larger keys needed for equivalent security

### 7.4 Security Level Comparison

**DES:**

- ❌ Broken (brute force feasible)
- ❌ Small key size
- ❌ Small block size (birthday attack)
- ✓ No structural weaknesses found
- **Status**: Obsolete, use 3DES or AES

**AES:**

- ✓ Unbroken (no practical attacks)
- ✓ Large key space
- ✓ Large block size
- ✓ Resistant to known attacks
- **Status**: Current standard, widely trusted

**RSA:**

- ✓ Secure with large keys (2048+ bits)
- ⚠️ Vulnerable to quantum computers (Shor's algorithm)
- ⚠️ Requires proper padding (OAEP)
- ⚠️ Implementation vulnerabilities possible
- **Status**: Widely used, but post-quantum alternatives emerging

### 7.5 When to Use Each

**Use DES/3DES:**

- Legacy system compatibility only
- Not recommended for new systems
- 3DES acceptable for short-term use

**Use AES:**

- Bulk data encryption
- File/disk encryption
- Network traffic encryption
- Database encryption
- Real-time communications
- Any high-speed encryption need

**Use RSA:**

- Key exchange (hybrid encryption)
- Digital signatures
- Certificate-based authentication
- Small message encryption
- When public key distribution needed

**Best Practice (Hybrid):**

```
1. Use RSA to exchange AES key
2. Use AES to encrypt actual data
3. Use RSA for digital signatures

Example: HTTPS (TLS)
- RSA/ECDH: Key exchange
- AES-GCM: Data encryption
- RSA/ECDSA: Authentication
```

---

## **Quick Revision Points**

### **DES:**

- Block: 64 bits, Key: 56 bits, Rounds: 16
- Feistel structure, S-boxes provide confusion
- Weak: Small key (brute force), small block
- Modes: ECB (insecure), CBC (standard), CTR (parallel)

### **AES:**

- Block: 128 bits, Keys: 128/192/256 bits
- SPN structure, operates on 4×4 state matrix
- Operations: SubBytes, ShiftRows, MixColumns, AddRoundKey
- Current standard, hardware accelerated (AES-NI)

### **Blowfish:**

- Block: 64 bits, Key: 32-448 bits variable
- 16 rounds, Feistel structure
- Key setup: 521 encryptions (slow but secure)
- P-array (18 subkeys) + 4 S-boxes (1024 entries)

### **RSA:**

- Asymmetric: Public (e,n), Private (d,n)
- Key gen: n=p×q, φ(n)=(p-1)(q-1), e×d≡1 (mod φ(n))
- Encrypt: C = Mᵉ mod n
- Decrypt: M = Cᵈ mod n
- Slow but enables key exchange

### **Digital Signature:**

- Sign: S = Hash(M)ᵈ mod n (private key)
- Verify: Hash(M) = Sᵉ mod n (public key)
- Provides: Authentication, Integrity, Non-repudiation

### **Comparison:**

- DES: Fast, weak, obsolete
- AES: Fast, strong, current standard
- RSA: Slow, strong, key exchange only
- Hybrid: RSA for keys + AES for data

---

_These notes were compiled by [Deepak Modi](https://deepakmodi.tech)_  
_Last updated: December 2025_
