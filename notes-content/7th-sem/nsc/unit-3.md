# Unit 3: Internet Security Protocols

**Course:** PEC-CSE-411G | **Author:** [Deepak Modi](https://deepakmodi.tech)

**Syllabus:**  
Basic concepts, Secure Socket Layer (SSL), Transport Layer Security (TLS), Secure Hyper Text Transfer protocol (SHTTP), Time Stamping Protocol (TSP), Secure Electronic Transaction (SET), SSL versus SET, Electronic Money, Email Security.

---

## **PYQ Analysis**

### **High Priority Topics** (15 marks questions)

1. **SSL Protocol** - (Feb-22: 7 marks, Dec-22: 7.5 marks, May-23: 7.5 marks, 2024: 8 marks)
2. **Secure Electronic Transaction (SET)** - (Feb-22: 8 marks, Dec-22: 7 marks, May-23: 8 marks)
3. **IP Security Architecture** - Feb-22 (8 marks)
4. **Electronic Money** - (Feb-22: 7 marks, 2024: 7.5 marks)
5. **TLS Protocol** - 2024 (7 marks)

### **Medium Priority Topics** (7-8 marks)

1. **SSL vs SET** - May-23 (7 marks)
2. **SSL vs SHTTP** - May-23 (7.5 marks)
3. **3-D Secure vs SET** - May-23 (7 marks)
4. **Time Stamping Protocol** - Dec-22 (8 marks)

### **Important Short Topics** (2.5 marks)

1. **E-mail Security** - Feb-22, Dec-22
2. **Electronic Money** - May-23
3. **SSL Alert Protocol** - Dec-22
4. **Why SSL between Application and Transport Layer** - Dec-22

---

## **1. Basic Concepts**

### 1.1 Need for Internet Security

**Internet Security** is essential because data transmitted over the internet passes through multiple networks and can be intercepted, modified, or forged. Security protocols ensure confidentiality, integrity, authentication, and non-repudiation of online communications and transactions.

**Key Security Requirements:**

- **Confidentiality**: Data should be readable only by authorized parties
- **Integrity**: Data should not be altered during transmission
- **Authentication**: Verify identity of communicating parties
- **Non-repudiation**: Sender cannot deny sending the message
- **Availability**: Services should be accessible when needed

### 1.2 Common Threats

**Network Threats:**

- **Eavesdropping**: Unauthorized interception of data
- **Man-in-the-Middle**: Attacker intercepts and relays messages
- **Replay Attack**: Valid data transmission is maliciously repeated
- **Denial of Service (DoS)**: Making services unavailable
- **Session Hijacking**: Taking over an active session
- **Phishing**: Fraudulent attempts to obtain sensitive information

### 1.3 Security Layers

Internet security can be implemented at different layers of the network stack:

```
┌─────────────────────────────┐
│   Application Layer         │ ← SHTTP, PGP, S/MIME
├─────────────────────────────┤
│   Transport Layer           │ ← SSL/TLS
├─────────────────────────────┤
│   Network Layer             │ ← IPsec
├─────────────────────────────┤
│   Data Link Layer           │ ← WPA2, WPA3
└─────────────────────────────┘
```

---

## **2. Secure Socket Layer (SSL)**

> PYQ: Secure Socket Layer (SSL) and steps in protocol. (Feb-22, 7 marks)  
> PYQ: Why SSL is between application and transport layer. (Dec-22, 7.5 marks)  
> PYQ: Purpose of SSL alert protocol. (Dec-22, 7.5 marks)  
> PYQ: SSL handshake protocol. (May-23, 7.5 marks)  
> PYQ: What is the Secure Socket Layer (SSL) protocol? Explain its working and importance in online security. (2024, 8 marks)

### 2.1 What is SSL?

**Secure Socket Layer (SSL)** is a security protocol developed by Netscape in 1994 to provide secure communication over the internet. It operates between the application layer and transport layer, providing encryption, authentication, and data integrity for applications like web browsers, email clients, and other network applications.

**Key Features:**

- Encryption of data in transit
- Server authentication (and optionally client authentication)
- Data integrity verification
- Works with any TCP-based application
- Transparent to applications

### 2.2 Why SSL is Between Application and Transport Layer

> PYQ: Why SSL is between application and transport layer. (Dec-22, 7.5 marks)

**SSL sits between the Application Layer and Transport Layer** for several important reasons:

**Advantages of this Position:**

1. **Application Independence**: SSL can secure any application protocol (HTTP, FTP, SMTP) without modifying them
2. **Transparent Security**: Applications don't need to implement security themselves
3. **Reusability**: Same SSL implementation works for multiple applications
4. **Backward Compatibility**: Existing applications can be secured by adding SSL
5. **Reliable Transport**: Uses TCP's reliable delivery while adding security
6. **End-to-End Security**: Protects data from application to application

**Architecture:**

```
┌─────────────────────────────┐
│   Application Layer         │
│   (HTTP, FTP, SMTP)         │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│   SSL/TLS Layer             │ ← Security Layer
│   (Encryption, Auth)        │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│   Transport Layer (TCP)     │
└─────────────────────────────┘
```

### 2.3 SSL Architecture

SSL consists of two main layers:

**1. SSL Record Protocol (Lower Layer):**

- Provides basic security services
- Fragments, compresses, encrypts, and adds MAC
- Operates on data from upper layer protocols

**2. SSL Handshake Protocols (Upper Layer):**

- **Handshake Protocol**: Establishes security parameters
- **Change Cipher Spec Protocol**: Signals change in encryption
- **Alert Protocol**: Communicates errors and warnings
- **Application Data Protocol**: Carries actual application data

```
┌───────────────────────────────────────────────┐
│ Handshake │ Change Cipher │  Alert   │  HTTP  │
│ Protocol  │ Spec Protocol │ Protocol │  Data  │
└───────────┴───────────────┴──────────┴────────┘
┌───────────────────────────────────────────────┐
│           SSL Record Protocol                 │
└───────────────────────────────────────────────┘
┌───────────────────────────────────────────────┐
│                    TCP                        │
└───────────────────────────────────────────────┘
```

### 2.4 SSL Handshake Protocol

> PYQ: SSL handshake protocol. (May-23, 7.5 marks)

**The SSL Handshake Protocol** establishes a secure session between client and server. It negotiatesz encryption algorithms, authenticates the server, and establishes session keys.

**Handshake Steps:**

```
Client                                  Server
  │                                       │
  │  1. ClientHello                       │
  │  (Version, Random, Cipher Suites)     │
  ├──────────────────────────────────────>│
  │                                       │
  │  2. ServerHello                       │
  │  (Chosen Cipher, Random)              │
  │<──────────────────────────────────────┤
  │                                       │
  │  3. Server Certificate                │
  │  (Server's Public Key)                │
  │<──────────────────────────────────────┤
  │                                       │
  │  4. ServerHelloDone                   │
  │<──────────────────────────────────────┤
  │                                       │
  │  5. ClientKeyExchange                 │
  │  (Pre-master secret encrypted)        │
  ├──────────────────────────────────────>│
  │                                       │
  │  6. ChangeCipherSpec                  │
  ├──────────────────────────────────────>│
  │                                       │
  │  7. Finished (encrypted)              │
  ├──────────────────────────────────────>│
  │                                       │
  │  8. ChangeCipherSpec                  │
  │<──────────────────────────────────────┤
  │                                       │
  │  9. Finished (encrypted)              │
  │<──────────────────────────────────────┤
  │                                       │
  │  Secure Communication Begins          │
  │<─────────────────────────────────────>│
```

**Detailed Steps:**

**Phase 1: Hello Messages**

1. **ClientHello**: Client sends supported SSL version, random number, and list of cipher suites
2. **ServerHello**: Server chooses cipher suite, sends random number and session ID

**Phase 2: Server Authentication** 3. **Certificate**: Server sends its digital certificate containing public key 4. **ServerHelloDone**: Server signals completion of hello phase

**Phase 3: Key Exchange** 5. **ClientKeyExchange**: Client generates pre-master secret, encrypts with server's public key, and sends it 6. Both sides derive master secret and session keys from pre-master secret and random numbers

**Phase 4: Finish** 7. **ChangeCipherSpec**: Client signals it will start using negotiated cipher 8. **Finished**: Client sends encrypted hash of handshake messages 9. **ChangeCipherSpec**: Server signals cipher change 10. **Finished**: Server sends encrypted hash

### 2.5 SSL Record Protocol

**The Record Protocol** provides:

- **Fragmentation**: Breaks data into manageable blocks (max 16 KB)
- **Compression**: Optional compression (rarely used)
- **MAC**: Adds Message Authentication Code for integrity
- **Encryption**: Encrypts data and MAC
- **Header**: Adds SSL record header

**Record Format:**

```
┌────────────────────────────────────┐
│  Content Type (1 byte)             │
├────────────────────────────────────┤
│  Version (2 bytes)                 │
├────────────────────────────────────┤
│  Length (2 bytes)                  │
├────────────────────────────────────┤
│  Encrypted Data + MAC              │
└────────────────────────────────────┘
```

### 2.6 SSL Alert Protocol

> PYQ: Purpose of SSL alert protocol. (Dec-22, 7.5 marks)

**The SSL Alert Protocol** is used to communicate error conditions and warnings between client and server during an SSL session. It ensures both parties are aware of security issues or protocol violations.

**Purpose:**

- Signal errors in handshake or data exchange
- Notify about certificate problems
- Indicate connection closure
- Report decryption failures
- Warn about protocol violations

**Alert Levels:**

1. **Warning**: Non-fatal issues (connection can continue)
2. **Fatal**: Serious errors (connection must be terminated)

**Common Alert Messages:**

**Warning Alerts:**

- **close_notify**: Sender is closing connection
- **no_certificate**: Client has no certificate
- **bad_certificate**: Certificate is corrupt

**Fatal Alerts:**

- **unexpected_message**: Inappropriate message received
- **bad_record_mac**: MAC verification failed
- **handshake_failure**: Cannot negotiate acceptable security parameters
- **illegal_parameter**: Field in handshake is out of range
- **certificate_expired**: Certificate has expired
- **certificate_revoked**: Certificate has been revoked

**Alert Message Format:**

```
┌─────────────────────┐
│  Level (1 byte)     │ ← Warning (1) or Fatal (2)
├─────────────────────┤
│ Description (1 byte)│ ← Specific alert type
└─────────────────────┘
```

### 2.7 SSL Working and Importance

> PYQ: What is the Secure Socket Layer (SSL) protocol? Explain its working and importance in online security. (2024, 8 marks)

**How SSL Works:**

1. **Connection Establishment**: Client connects to SSL-enabled server
2. **Handshake**: Negotiate cipher suite and authenticate server
3. **Key Exchange**: Establish shared secret key
4. **Secure Communication**: Encrypt all data with session keys
5. **Connection Closure**: Graceful termination with close_notify

**Importance in Online Security:**

**For Users:**

- **Privacy**: Credit card numbers, passwords remain confidential
- **Trust**: Green padlock indicates secure connection
- **Data Integrity**: Prevents tampering with transmitted data
- **Authentication**: Confirms website identity

**For Businesses:**

- **Customer Confidence**: Users trust secure sites
- **Compliance**: Required for PCI-DSS, GDPR
- **Brand Protection**: Prevents phishing attacks
- **SEO Benefit**: Google ranks HTTPS sites higher

**Real-World Applications:**

- **E-commerce**: Secure online shopping
- **Banking**: Online banking transactions
- **Email**: Secure email communication (SMTPS, IMAPS)
- **VPN**: Secure remote access
- **APIs**: Secure data exchange between services

---

## **3. Transport Layer Security (TLS)**

> PYQ: Explain Transport Layer Security (TLS) and how it differs from SSL. (2024, 7 marks)

### 3.1 What is TLS?

**Transport Layer Security (TLS)** is the successor to SSL, standardized by IETF (Internet Engineering Task Force) in 1999. TLS 1.0 was based on SSL 3.0 but with improvements. TLS is the modern standard for secure internet communications, with current versions being TLS 1.2 and TLS 1.3.

**TLS Versions:**

- **TLS 1.0** (1999): Based on SSL 3.0
- **TLS 1.1** (2006): Fixed CBC attacks
- **TLS 1.2** (2008): Current widely used version
- **TLS 1.3** (2018): Latest version, faster and more secure

### 3.2 TLS vs SSL

**Key Differences:**

| Aspect              | SSL                   | TLS                         |
| ------------------- | --------------------- | --------------------------- |
| **Latest Version**  | SSL 3.0 (1996)        | TLS 1.3 (2018)              |
| **Status**          | Deprecated            | Active standard             |
| **Security**        | Vulnerable to attacks | More secure                 |
| **Handshake**       | Slower                | Faster (especially TLS 1.3) |
| **Cipher Suites**   | Weaker algorithms     | Stronger algorithms         |
| **Alert Messages**  | Limited               | More descriptive            |
| **Record Protocol** | Basic                 | Enhanced                    |
| **Performance**     | Slower                | Optimized                   |

**Security Improvements in TLS:**

- Removed weak cipher suites (RC4, MD5)
- Better protection against downgrade attacks
- Improved key derivation function
- Support for authenticated encryption (GCM, CCM)
- TLS 1.3 removes obsolete features

**TLS 1.3 Improvements:**

- **Faster Handshake**: 1-RTT instead of 2-RTT
- **0-RTT Resumption**: Instant reconnection
- **Simplified Cipher Suites**: Only secure algorithms
- **Forward Secrecy**: Mandatory for all connections
- **Removed Legacy Features**: No compression, renegotiation

### 3.3 TLS Handshake (TLS 1.3)

**Simplified TLS 1.3 Handshake:**

```
Client                                  Server
  │                                       │
  │  ClientHello                          │
  │  + Key Share                          │
  ├──────────────────────────────────────>│
  │                                       │
  │                        ServerHello    │
  │                        + Key Share    │
  │                        Certificate    │
  │                        Finished       │
  │<──────────────────────────────────────┤
  │                                       │
  │  Finished                             │
  ├──────────────────────────────────────>│
  │                                       │
  │  Application Data                     │
  │<─────────────────────────────────────>│

(Only 1 round trip!)
```

---

## **4. Secure HTTP (SHTTP)**

> PYQ: Difference between SHTTP and SSL. (May-23, 7.5 marks)

### 4.1 What is SHTTP?

**Secure HTTP (SHTTP)** is a security protocol that extends HTTP to provide secure communication. Unlike SSL/TLS which operates at the transport layer, SHTTP operates at the application layer and is specifically designed for HTTP. SHTTP was not widely adopted and is rarely used.

**Key Features:**

- Application-layer security
- Message-by-message security
- Flexible security options per message
- Supports multiple cryptographic algorithms
- Can work without certificates

**Note:** SHTTP (Secure HTTP) is not the same as HTTPS (HTTP Secure).

- HTTPS = HTTP over SSL/TLS (whole session encrypted, very common)
- SHTTP = Secure HTTP (message-by-message security, rare)

### 4.2 SHTTP vs SSL

| Aspect          | SHTTP                          | SSL/TLS                           |
| --------------- | ------------------------------ | --------------------------------- |
| **Layer**       | Application Layer              | Between Application and Transport |
| **Scope**       | HTTP only                      | Any TCP application               |
| **Granularity** | Per-message security           | Per-connection security           |
| **Flexibility** | Different security per message | Same security for entire session  |
| **Certificate** | Optional                       | Required for server               |
| **Overhead**    | Higher (per message)           | Lower (per session)               |
| **Adoption**    | Limited                        | Universal                         |
| **Use Case**    | Selective document security    | General secure communication      |

**Why SSL Won:**

- **Transparency**: Works with any application
- **Simplicity**: Easier to implement
- **Performance**: Better for multiple requests
- **Standardization**: Industry-wide support
- **Infrastructure**: Certificate authorities established

---

## **5. IP Security (IPsec)**

> PYQ: Architecture of IP Security. (Feb-22, 8 marks)

### 5.1 What is IPsec?

**IP Security (IPsec)** is a framework of protocols that provides security at the network layer (IP layer). It secures all traffic between two hosts, two networks, or a host and a network, making it ideal for VPNs.

**Key Features:**

- Network-layer security
- Transparent to applications
- Can secure all IP traffic
- Supports both IPv4 and IPv6
- Provides authentication and encryption

### 5.2 IPsec Architecture

**IPsec consists of three main components:**

**1. Security Protocols:**

- **AH (Authentication Header)**: Provides authentication and integrity
- **ESP (Encapsulating Security Payload)**: Provides encryption, authentication, and integrity

**2. Security Associations (SA):**

- One-way relationship between sender and receiver
- Defines security parameters (algorithms, keys, lifetime)
- Identified by SPI (Security Parameter Index)

**3. Key Management:**

- **IKE (Internet Key Exchange)**: Automated key negotiation
- **Manual**: Static key configuration

**IPsec Architecture Diagram:**

```
┌────────────────────────────────────────────┐
│         IPsec Architecture                 │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│   Security Protocols                       │
│   ┌──────────┐         ┌──────────┐        │
│   │    AH    │         │   ESP    │        │
│   └──────────┘         └──────────┘        │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│   Key Management                           │
│   ┌──────────────────────────────┐         │
│   │    IKE (ISAKMP/Oakley)       │         │
│   └──────────────────────────────┘         │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│   Security Policy Database (SPD)           │
│   Security Association Database (SAD)      │
└────────────────────────────────────────────┘
```

**Components:**

**1. Authentication Header (AH):**

- Provides data integrity
- Provides authentication
- Provides anti-replay protection
- Does NOT provide confidentiality
- Protects entire IP packet

**2. Encapsulating Security Payload (ESP):**

- Provides confidentiality (encryption)
- Provides authentication
- Provides integrity
- Provides anti-replay protection
- More commonly used than AH

**3. Security Association (SA):**

- Simplex (one-way) connection
- Identified by: SPI, Destination IP, Security Protocol
- Contains: Encryption algorithm, keys, lifetime, mode

**4. Security Policy Database (SPD):**

- Defines which traffic needs IPsec
- Specifies security services
- Links to appropriate SA

**5. Security Association Database (SAD):**

- Contains active SAs
- Stores keys and parameters

### 5.3 IPsec Modes

IPsec can operate in two modes:

**1. Transport Mode:**

- Protects payload only
- Original IP header remains
- Used for host-to-host communication
- Lower overhead

```
Original:  [IP Header][TCP][Data]
Transport: [IP Header][IPsec][TCP][Data]
```

**2. Tunnel Mode:**

- Protects entire original packet
- New IP header added
- Used for VPNs (network-to-network)
- Higher overhead but more secure

```
Original: [Original IP Header][TCP][Data]
Tunnel:   [New IP Header][IPsec][Original IP Header][TCP][Data]
```

---

## **6. Secure Electronic Transaction (SET)**

> PYQ: Secure Electronic Transaction with diagram. (Feb-22, 8 marks)  
> PYQ: How SET protects payment info from merchant. (Dec-22, 7 marks)  
> PYQ: Steps in SET. (May-23, 8 marks)  
> PYQ: Difference between 3-D Secure and SET. (May-23, 7 marks)

### 6.1 What is SET?

**Secure Electronic Transaction (SET)** is a protocol developed by Visa and Mastercard in 1996 for securing credit card transactions over the internet. SET ensures confidentiality, integrity, and authentication for online payments while keeping card details hidden from merchants.

**Key Features:**

- Protects card information from merchants
- Authenticates all parties (cardholder, merchant, bank)
- Uses digital certificates
- Provides non-repudiation
- Ensures transaction integrity

### 6.2 SET Participants

**Five parties involved in SET:**

1. **Cardholder**: Customer making purchase
2. **Merchant**: Online store selling goods
3. **Issuer**: Cardholder's bank (issues credit card)
4. **Acquirer**: Merchant's bank (processes payments)
5. **Payment Gateway**: Connects merchant to payment network
6. **Certificate Authority (CA)**: Issues digital certificates

### 6.3 How SET Protects Payment Info from Merchant

> PYQ: How SET protects payment info from merchant. (Dec-22, 7 marks)

**SET uses Dual Signature** to keep payment information confidential from the merchant:

**Protection Mechanism:**

1. **Dual Signature**: Customer creates two messages:

   - **Order Information (OI)**: Product details, amount (merchant sees this)
   - **Payment Information (PI)**: Card number, expiry (only bank sees this)

2. **Separate Encryption**:

   - OI encrypted with merchant's public key
   - PI encrypted with payment gateway's public key

3. **Merchant Cannot See Card Details**:
   - Merchant receives encrypted PI (cannot decrypt)
   - Merchant forwards encrypted PI to payment gateway
   - Only payment gateway can decrypt card information

**Dual Signature Process:**

```
Customer:
1. Create Order Info (OI): Product, amount, address
2. Create Payment Info (PI): Card number, expiry
3. Hash both: H(OI) and H(PI)
4. Create dual signature: Sign[H(H(OI) + H(PI))]
5. Encrypt OI with merchant's public key
6. Encrypt PI with payment gateway's public key
7. Send to merchant

Merchant:
- Can decrypt OI (sees order details)
- Cannot decrypt PI (card details hidden)
- Verifies dual signature using H(OI)
- Forwards encrypted PI to payment gateway

Payment Gateway:
- Decrypts PI (sees card details)
- Verifies dual signature using H(PI)
- Processes payment with bank
```

**Benefits:**

- **Privacy**: Merchant never sees card number
- **Security**: Card details encrypted end-to-end to bank
- **Trust**: Customer trusts merchant won't misuse card
- **Fraud Reduction**: Limits exposure of sensitive data

### 6.4 Steps in SET Transaction

> PYQ: Steps in SET. (May-23, 8 marks)

**Complete SET Transaction Flow:**

**Phase 1: Setup**

1. **Customer Registration**: Cardholder obtains digital certificate from CA
2. **Merchant Registration**: Merchant obtains digital certificate from CA
3. **Payment Gateway Setup**: Gateway registered with acquirer bank

**Phase 2: Purchase Request**

4. **Browse and Select**: Customer selects products on merchant website
5. **Initiate Payment**: Customer clicks "Pay" button
6. **Merchant Sends Certificate**: Merchant sends its digital certificate to customer

**Phase 3: Payment Authorization**

7. **Create Order and Payment Info**:

- Customer creates OI (order details)
- Customer creates PI (card details)

8. **Generate Dual Signature**: Customer signs H(H(OI) + H(PI))
9. **Encrypt Data**:
   - Encrypt OI with merchant's public key
   - Encrypt PI with payment gateway's public key
10. **Send to Merchant**: Customer sends encrypted OI, encrypted PI, and dual signature

**Phase 4: Merchant Processing**

11. **Merchant Verification**: - Decrypt OI - Verify dual signature - Check order details
12. **Forward to Payment Gateway**: Merchant sends encrypted PI and payment request

**Phase 5: Payment Authorization By Gateway**

13. **Gateway Processing**: - Decrypt PI - Verify dual signature - Validate card details
14. **Request Authorization**: Gateway contacts issuer bank
15. **Authorization Response**: Bank approves/denies transaction
16. **Gateway to Merchant**: Gateway sends authorization response

**Phase 6: Completion**

17. **Merchant Confirmation**: Merchant confirms order to customer
18. **Deliver Goods**: Merchant ships products
19. **Capture Payment**: Merchant requests actual payment from gateway
20. **Settlement**: Funds transferred from issuer to acquirer to merchant

**Simplified Flow:**

```
Customer → Merchant → Payment Gateway → Acquirer → Issuer
   ↓          ↓            ↓              ↓         ↓
  OI+PI    Forward PI   Decrypt PI    Process   Authorize
(encrypted) (encrypted)  Verify      Payment    Payment
```

### 6.5 SET vs SSL

> PYQ: SSL versus SET (May-23, implied from context)

| Aspect              | SET                             | SSL/TLS                       |
| ------------------- | ------------------------------- | ----------------------------- |
| **Purpose**         | Secure card payments            | General secure communication  |
| **Complexity**      | Very complex                    | Relatively simple             |
| **Certificates**    | All parties need certificates   | Only server needs certificate |
| **Merchant Access** | Cannot see card details         | Can see all transmitted data  |
| **Authentication**  | All parties authenticated       | Server authenticated          |
| **Adoption**        | Failed (too complex)            | Universal success             |
| **Performance**     | Slow (multiple encryptions)     | Fast                          |
| **User Experience** | Poor (certificate installation) | Seamless                      |
| **Cost**            | High (certificates for all)     | Low                           |

**Why SET Failed:**

- Too complex for users and merchants
- Required software installation
- Expensive certificate requirements
- Slow transaction processing
- Better alternatives emerged (3-D Secure, tokenization)

### 6.6 3-D Secure vs SET

> PYQ: Difference between 3-D Secure and SET. (May-23, 7 marks)

**3-D Secure** is a simpler alternative to SET, developed by Visa (Verified by Visa) and Mastercard (SecureCode).

| Aspect                 | 3-D Secure           | SET                           |
| ---------------------- | -------------------- | ----------------------------- |
| **Complexity**         | Simple               | Very complex                  |
| **User Experience**    | Password/OTP         | Certificate installation      |
| **Merchant Sees Card** | Yes                  | No                            |
| **Authentication**     | Cardholder to issuer | All parties                   |
| **Implementation**     | Easy (web-based)     | Difficult (software required) |
| **Cost**               | Low                  | High                          |
| **Adoption**           | Widely used          | Failed                        |
| **Technology**         | Browser-based        | Certificate-based             |
| **Speed**              | Fast                 | Slow                          |

**3-D Secure Process:**

1. Customer enters card details on merchant site
2. Merchant redirects to issuer bank
3. Customer authenticates (password/OTP)
4. Bank confirms to merchant
5. Transaction proceeds

---

## **7. Electronic Money**

> PYQ: Electronic Money – usefulness. (Feb-22, 7 marks)  
> PYQ: Electronic Money (May-23, 2.5 marks)  
> PYQ: Discuss the concept of Electronic Money. How do security protocols like SSL and SET safeguard digital transactions? (2024, 7.5 marks)

### 7.1 What is Electronic Money?

**Electronic Money (E-money)** is digital currency that exists only in electronic form. It represents monetary value stored electronically and can be used for payments without physical cash or checks.

**Types of E-money:**

**1. Hard E-money:**

- Cannot be traced
- Like physical cash (anonymous)
- Example: Early digital cash systems

**2. Soft E-money:**

- Can be traced
- Linked to bank accounts
- Example: Credit cards, PayPal, digital wallets

### 7.2 Forms of Electronic Money

### 7.2 Forms of Electronic Money

**1. Credit/Debit Cards:**

- Most common form
- Linked to bank accounts
- Widely accepted

**2. Digital Wallets:**

- PayPal, Google Pay, Apple Pay
- Store payment information
- Quick checkout

**3. Cryptocurrencies:**

- Bitcoin, Ethereum
- Decentralized
- Blockchain-based

**4. Prepaid Cards:**

- Gift cards, travel cards
- Fixed value loaded
- No bank account needed

**5. Mobile Money & UPI:**

- M-Pesa, Paytm, UPI (Unified Payments Interface)
- Phone-based payments and instant bank transfers
- Popular in developing countries and India
- UPI enables direct bank-to-bank payments via mobile apps

### 7.3 Usefulness of Electronic Money

> PYQ: Electronic Money – usefulness. (Feb-22, 7 marks)

**Advantages:**

**For Consumers:**

- **Convenience**: No need to carry cash
- **Speed**: Instant transactions
- **Record Keeping**: Automatic transaction history
- **Global Access**: Use anywhere in the world
- **Safety**: Less risk than carrying cash
- **Rewards**: Cashback, points, discounts

**For Merchants:**

- **Faster Checkout**: Quicker than cash handling
- **Reduced Costs**: No cash handling, counting, banking
- **Increased Sales**: Customers spend more with cards
- **Security**: Less theft risk
- **Record Keeping**: Automatic accounting
- **Global Reach**: Accept international customers

**For Economy:**

- **Reduced Costs**: Less printing and distribution of physical money
- **Transparency**: Easier to track transactions (reduces black money)
- **Financial Inclusion**: Banking services to unbanked population
- **Economic Growth**: Facilitates e-commerce

**Disadvantages:**

- **Security Risks**: Hacking, fraud, identity theft
- **Privacy Concerns**: Transactions can be tracked
- **Technology Dependence**: Requires internet, devices
- **Exclusion**: Not accessible to all (digital divide)
- **Fees**: Transaction charges

### 7.4 How SSL and SET Safeguard E-money Transactions

> PYQ: How do security protocols like SSL and SET safeguard digital transactions? (2024, 7.5 marks)

**SSL/TLS Protection:**

1. **Encryption**: All data encrypted during transmission

   - Card numbers cannot be intercepted
   - Uses AES-256 encryption

2. **Server Authentication**: Verifies website identity

   - Digital certificates from trusted CAs
   - Prevents phishing attacks

3. **Data Integrity**: Detects any tampering

   - MAC ensures data not modified
   - Replay attacks prevented

4. **Session Security**: Unique keys for each session
   - Keys expire after session
   - Forward secrecy protects past sessions

**SET Protection (Historical):**

1. **Dual Signature**: Keeps card details hidden from merchant

   - Merchant never sees card number
   - Only bank can decrypt payment info

2. **Certificate-based Authentication**: All parties verified

   - Customer, merchant, bank authenticated
   - Prevents impersonation

3. **Non-repudiation**: Digital signatures prove transactions
   - Cannot deny making purchase
   - Legal proof of transaction

**Modern Safeguards:**

1. **Tokenization**: Replace card number with token
2. **3-D Secure**: Additional authentication layer
3. **Fraud Detection**: AI-based monitoring
4. **PCI-DSS Compliance**: Security standards for merchants
5. **Two-Factor Authentication**: Additional verification

---

## **8. Time Stamping Protocol (TSP)**

> PYQ: Significance of time stamping protocol. (Dec-22, 8 marks)

### 8.1 What is Time Stamping?

**Time Stamping Protocol (TSP)** is a cryptographic protocol that proves a document existed at a specific time. It provides non-repudiation by creating a trusted timestamp that cannot be backdated or altered.

**Purpose:**

- Prove when a document was created/signed
- Establish order of events
- Legal evidence of timing
- Prevent backdating of documents

### 8.2 How Time Stamping Works

**Process:**

1. **Create Hash**: User creates hash of document
2. **Send to TSA**: Hash sent to Time Stamping Authority (TSA)
3. **TSA Signs**: TSA adds trusted timestamp and signs hash
4. **Return Token**: Signed timestamp token returned to user
5. **Verification**: Anyone can verify timestamp using TSA's public key

```
User                    TSA (Time Stamping Authority)
 │                              │
 │  1. Hash(Document)           │
 ├─────────────────────────────>│
 │                              │
 │                              │ 2. Add current time
 │                              │ 3. Sign with private key
 │                              │
 │  4. Timestamp Token          │
 │<─────────────────────────────┤
 │  (Hash + Time + Signature)   │
 │                              │
```

### 8.3 Significance of Time Stamping

> PYQ: Significance of time stamping protocol. (Dec-22, 8 marks)

**Legal Significance:**

- **Evidence**: Proves document existed at specific time
- **Contract Validity**: Establishes when agreement was made
- **Intellectual Property**: Proves invention date for patents
- **Compliance**: Required for many regulations
- **Dispute Resolution**: Settles timing disputes

**Business Applications:**

- **Digital Signatures**: Proves when document was signed
- **Audit Trails**: Tracks when changes were made
- **Certificates**: Validates certificate issuance time
- **Transactions**: Records transaction timing
- **Archival**: Proves document age

**Security Benefits:**

- **Non-repudiation**: Cannot deny document existence
- **Integrity**: Detects backdating attempts
- **Trust**: Independent third-party verification
- **Immutability**: Timestamp cannot be altered

**Real-World Uses:**

- **Patent Filing**: Prove invention date
- **Legal Documents**: Contracts, agreements
- **Financial Records**: Transaction timestamps
- **Email**: Prove when email was sent
- **Code Signing**: Prove when software was released
- **Version Control**: Track document versions
- **Blockchain**: Transaction ordering

---

## **9. Email Security**

> PYQ: E-mail Security (Feb-22, 2.5 marks)  
> PYQ: Email Security (Dec-22, 2.5 marks)

### 9.1 Email Security Threats

Email is a common vector for cyber attacks due to its widespread use. Securing email communication is crucial to protect sensitive information.

**Common Email Threats:**

- **Phishing**: Fake emails that trick you into giving away passwords or personal info
- **Spoofing**: Emails that pretend to be from someone you trust
- **Malware**: Harmful files or links that can infect your computer
- **Spam**: Lots of unwanted or junk emails
- **Man-in-the-Middle**: Someone secretly reads or changes your emails as they travel
- **Eavesdropping**: Others reading your emails if they are not encrypted

### 9.2 Email Security Solutions

To protect email communication, several security protocols and techniques are used:

**1. S/MIME (Secure/Multipurpose Internet Mail Extensions):**  
_S/MIME is a standard for public key encryption and signing of MIME data, enabling secure email communication by providing confidentiality, authentication, message integrity, and non-repudiation._

- Encrypts email content
- Digital signatures for authentication
- Uses X.509 certificates
- Widely supported in email clients

**2. PGP/GPG (Pretty Good Privacy):**  
_PGP (and its open-source implementation GPG) is an encryption program that uses public key cryptography to provide end-to-end encryption and digital signatures for email, ensuring only intended recipients can read messages and verify sender identity._

- End-to-end encryption
- Public key cryptography
- Digital signatures
- Open source (GPG)

**3. TLS/SSL for Email:**  
_TLS (Transport Layer Security) and SSL (Secure Socket Layer) are cryptographic protocols that encrypt the connection between email clients and servers, protecting emails from interception during transmission._

- **SMTPS**: Secure SMTP (port 465/587)
- **IMAPS**: Secure IMAP (port 993)
- **POP3S**: Secure POP3 (port 995)
- Encrypts connection between client and server

**4. SPF (Sender Policy Framework):**  
_SPF is an email authentication protocol that allows domain owners to specify which mail servers are permitted to send email on their behalf, helping to prevent email spoofing._

- Prevents email spoofing
- Verifies sender's IP address
- DNS-based authentication

**5. DKIM (DomainKeys Identified Mail):**  
_DKIM is an email security standard that uses cryptographic signatures to verify that an email was sent from an authorized domain and that its content has not been altered in transit._

- Digital signature for emails
- Verifies sender domain
- Detects email tampering

**6. DMARC (Domain-based Message Authentication):**  
_DMARC is an email authentication protocol that builds on SPF and DKIM, allowing domain owners to publish policies for handling unauthenticated emails and receive reports about email authentication activity._

- Combines SPF and DKIM
- Policy for handling failed authentication
- Reporting mechanism

### 9.3 Email Security Best Practices

**For Users:**

- Use strong passwords
- Enable two-factor authentication
- Verify sender before clicking links
- Don't open suspicious attachments
- Use encrypted email when needed
- Keep software updated

**For Organizations:**

- Implement SPF, DKIM, DMARC
- Use email filtering and antivirus
- Train employees on phishing
- Enforce encryption policies
- Regular security audits
- Backup email data

---

## **10. Electronic Transactions**

> PYQ: Explain Electronic Transactions and discuss the advantages of digital payment systems. (2024, 7.5 marks)

### 10.1 What are Electronic Transactions?

**Electronic Transactions** are financial transactions conducted electronically without physical exchange of money. They include online purchases, bill payments, fund transfers, and any monetary exchange done digitally.

**Types:**

- **E-commerce**: Online shopping
- **Banking**: Online banking, ATM
- **Mobile Payments**: UPI, mobile wallets
- **Wire Transfers**: NEFT, RTGS, SWIFT
- **Cryptocurrency**: Bitcoin transactions

### 10.2 Advantages of Digital Payment Systems

**Convenience:**

- 24/7 availability
- No need to visit bank
- Pay from anywhere
- Quick and easy

**Speed:**

- Instant transactions
- Real-time processing
- Immediate confirmation
- No waiting for checks to clear

**Cost-Effective:**

- Lower transaction fees
- No printing/handling costs
- Reduced infrastructure needs
- Automated processing

**Security:**

- Encryption protects data
- Fraud detection systems
- Transaction tracking
- Less risk than carrying cash

**Record Keeping:**

- Automatic transaction history
- Easy accounting
- Digital receipts
- Audit trails

**Global Reach:**

- International transactions
- Currency conversion
- Cross-border payments
- E-commerce enablement

---

## **Quick Revision Points**

### **SSL/TLS:**

- SSL between application and transport layer
- Handshake establishes secure session
- Record protocol encrypts data
- Alert protocol handles errors
- TLS is modern, more secure version

### **IPsec:**

- Network layer security
- AH: Authentication only
- ESP: Encryption + Authentication
- Transport mode: Payload only
- Tunnel mode: Entire packet (VPN)

### **SET:**

- Secure credit card transactions
- Dual signature protects card from merchant
- Too complex, failed adoption
- Replaced by 3-D Secure

### **E-Money:**

- Digital currency
- Convenient, fast, secure
- SSL/SET provide protection
- Types: Cards, wallets, crypto

### **Email Security:**

- S/MIME, PGP for encryption
- SPF, DKIM, DMARC prevent spoofing
- TLS secures connections

### **Time Stamping:**

- Proves document existed at specific time
- Legal evidence
- Non-repudiation
- TSA provides trusted timestamps

---

_These notes were compiled by [Deepak Modi](https://deepakmodi.tech)_  
_Last updated: December 2025_
