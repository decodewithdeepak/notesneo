# Unit 4: User Authentication and Kerberos

**Course:** PEC-CSE-411G | **Author:** [Deepak Modi](https://deepakmodi.tech)

**Syllabus:**  
Introduction, Authentication basics, Passwords, authentication tokens, certificate based authentication, biometric based authentication, Kerberos, key distribution center (KDC), Security handshake pitfalls, single Sign on (SSO) approach.

---

## **PYQ Analysis**

### **High Priority Topics** (15 marks questions)

1. **Single Sign-On (SSO)** - (Dec-22: 15 marks, 2024: 15 marks)
2. **Certificate-based Authentication** - (Feb-22: 8 marks, Dec-22: 8 marks)
3. **Kerberos** - (Feb-22: 8 marks, May-23: 7 marks)
4. **Token-based vs Certificate-based Authentication** - 2024 (15 marks)

### **Medium Priority Topics** (7-8 marks)

1. **Biometric Authentication** - Dec-22 (7 marks)
2. **Smart Card Technology** - May-23 (8 marks)
3. **Key Distribution Center (KDC)** - May-23 (7.5 marks)
4. **Security Handshake Pitfalls** - Feb-22, May-23 (7 marks, 7.5 marks)

### **Important Short Topics** (2.5 marks)

1. **Kerberos** - Feb-22, Dec-22
2. **Authentication Tokens** - 2024
3. **Single Sign-On (SSO)** - 2024

---

## **1. Introduction to Authentication**

### 1.1 What is Authentication?

**Authentication** is the process of verifying the identity of a user, device, or system before granting access to resources. It answers the question: "Are you who you claim to be?"

**Authentication vs Authorization:**

- **Authentication**: Verifying identity (Who are you?)
- **Authorization**: Granting permissions (What can you do?)

### 1.2 Authentication Factors

Authentication is based on three factors:

**1. Something You Know:**

- Passwords, PINs
- Security questions
- Passphrases

**2. Something You Have:**

- Smart cards, tokens
- Mobile phones
- Security keys

**3. Something You Are:**

- Fingerprints
- Face recognition
- Iris scan, voice

**Multi-Factor Authentication (MFA):**

- Combines two or more factors
- More secure than single factor
- Example: Password + OTP

### 1.3 Authentication Methods

**Common Authentication Methods:**

- **Password-based**: Traditional username/password
- **Token-based**: Hardware/software tokens
- **Certificate-based**: Digital certificates and PKI
- **Biometric**: Fingerprint, face, iris
- **Multi-factor**: Combination of methods
- **Single Sign-On (SSO)**: One login for multiple services

---

## **2. Password-Based Authentication**

### 2.1 How Passwords Work

**Password authentication** is the most common method where users provide a secret string to prove identity.

**Process:**

```
User                        System
 │                            │
 │  1. Enter username         │
 ├───────────────────────────>│
 │                            │
 │  2. Enter password         │
 ├───────────────────────────>│
 │                            │
 │                            │ 3. Hash password
 │                            │ 4. Compare with stored hash
 │                            │
 │  5. Grant/Deny access      │
 │<───────────────────────────┤
```

**Password Storage:**

- Never store passwords in plain text
- Store hashed passwords (SHA-256, bcrypt)
- Add salt to prevent rainbow table attacks

### 2.2 Password Security

**Strong Password Characteristics:**

- Minimum 12 characters
- Mix of uppercase, lowercase, numbers, symbols
- No dictionary words
- Unique for each account
- Changed regularly

**Password Attacks:**

- **Brute Force**: Try all possible combinations
- **Dictionary Attack**: Try common words
- **Rainbow Tables**: Pre-computed hashes
- **Phishing**: Trick users into revealing passwords
- **Keylogging**: Record keystrokes
- **Shoulder Surfing**: Watch while typing

**Password Protection:**

- Use password managers
- Enable two-factor authentication
- Never share passwords
- Use different passwords for different accounts
- Avoid writing down passwords

### 2.3 Password Weaknesses

**Problems with Passwords:**

- Users choose weak passwords
- Password reuse across sites
- Forgotten passwords
- Social engineering vulnerability
- Phishing attacks
- No protection after compromise

---

## **3. Authentication Tokens**

> PYQ: What are authentication tokens and how are they used in secure systems? (2024, 2.5 marks)

### 3.1 What are Authentication Tokens?

**Authentication Tokens** are physical or digital devices that generate or store credentials for user authentication. They provide "something you have" factor in authentication.

**Types of Tokens:**

**1. Hardware Tokens:**

- Physical devices (USB keys, smart cards)
- Generate one-time passwords (OTP)
- More secure but can be lost

**2. Software Tokens:**

- Mobile apps (Google Authenticator, Authy)
- Generate time-based OTPs
- Convenient but device-dependent

### 3.2 How Tokens Work

**Time-Based OTP (TOTP):**

```
Token Device                    Server
     │                            │
     │  1. Generate OTP           │
     │  (based on time + secret)  │
     │                            │
     │  2. User enters OTP        │
     ├───────────────────────────>│
     │                            │
     │                            │ 3. Generate expected OTP
     │                            │ 4. Compare OTPs
     │                            │
     │  5. Grant/Deny access      │
     │<───────────────────────────┤
```

**OTP Generation:**

- Shared secret key between token and server
- Current time (synchronized)
- Hash function (HMAC-SHA1)
- OTP valid for 30-60 seconds

### 3.3 Token Types

**1. OTP Tokens (One-Time Password):**

- Generate unique password each time
- Cannot be reused
- Examples: RSA SecurID, YubiKey

**2. Challenge-Response Tokens:**

- Server sends challenge
- Token computes response
- Response sent back to server

**3. Smart Cards:**

- Chip-based cards
- Store certificates and keys
- Require card reader

**4. USB Security Keys:**

- FIDO U2F keys
- Plug into USB port
- Press button to authenticate

### 3.4 Advantages and Disadvantages

**Advantages:**

- More secure than passwords alone
- Difficult to steal or duplicate
- Time-limited (OTP expires)
- No password to remember

**Disadvantages:**

- Can be lost or stolen
- Battery may die (hardware tokens)
- Requires additional device
- Cost of deployment
- User inconvenience

---

## **4. Certificate-Based Authentication**

> PYQ: Certificate based authentication. (Feb-22, 8 marks)  
> PYQ: Certificate based authentication. (Dec-22, 8 marks)  
> PYQ: Compare and contrast Certificate-based Authentication with Token-based Authentication. What are the use cases for each method? (2024, 15 marks)

### 4.1 What is Certificate-Based Authentication?

**Certificate-Based Authentication** uses digital certificates to verify user identity. It relies on Public Key Infrastructure (PKI) where a trusted Certificate Authority (CA) issues certificates binding a public key to an identity.

**Key Components:**

- **Digital Certificate**: Electronic document proving identity
- **Public Key**: Shared openly
- **Private Key**: Kept secret by owner
- **Certificate Authority (CA)**: Issues and verifies certificates
- **Certificate Revocation List (CRL)**: Lists revoked certificates

### 4.2 How Certificate-Based Authentication Works

**Process:**

```
User                    Server                  CA
 │                        │                      │
 │  1. Request access     │                      │
 ├───────────────────────>│                      │
 │                        │                      │
 │  2. Request certificate│                      │
 │<───────────────────────┤                      │
 │                        │                      │
 │  3. Send certificate   │                      │
 │  (contains public key) │                      │
 ├───────────────────────>│                      │
 │                        │                      │
 │                        │ 4. Verify certificate│
 │                        ├─────────────────────>│
 │                        │                      │
 │                        │ 5. Certificate valid │
 │                        │<─────────────────────┤
 │                        │                      │
 │  6. Challenge (random) │                      │
 │<───────────────────────┤                      │
 │                        │                      │
 │  7. Sign with private  │                      │
 │  key and send response │                      │
 ├───────────────────────>│                      │
 │                        │                      │
 │                        │ 8. Verify signature  │
 │                        │ using public key     │
 │                        │                      │
 │  9. Grant access       │                      │
 │<───────────────────────┤                      │
```

**Steps Explained:**

1. **User requests access** to server
2. **Server requests certificate** from user
3. **User sends digital certificate** containing public key
4. **Server verifies certificate** with CA (checks signature, expiry, revocation)
5. **CA confirms** certificate is valid
6. **Server sends challenge** (random data)
7. **User signs challenge** with private key
8. **Server verifies signature** using public key from certificate
9. **Access granted** if signature is valid

### 4.3 Digital Certificate Structure

**X.509 Certificate Contents:**

```
┌─────────────────────────────────┐
│  Version                        │
├─────────────────────────────────┤
│  Serial Number                  │
├─────────────────────────────────┤
│  Signature Algorithm            │
├─────────────────────────────────┤
│  Issuer (CA Name)               │
├─────────────────────────────────┤
│  Validity Period                │
│  - Not Before                   │
│  - Not After                    │
├─────────────────────────────────┤
│  Subject (Owner Name)           │
├─────────────────────────────────┤
│  Subject Public Key Info        │
│  - Algorithm                    │
│  - Public Key                   │
├─────────────────────────────────┤
│  Extensions (optional)          │
├─────────────────────────────────┤
│  CA's Digital Signature         │
└─────────────────────────────────┘
```

### 4.4 PKI (Public Key Infrastructure)

**PKI Components:**

1. **Certificate Authority (CA):**

   - Issues certificates
   - Verifies identities
   - Signs certificates
   - Maintains CRL

2. **Registration Authority (RA):**

   - Verifies certificate requests
   - Forwards to CA
   - Acts as intermediary

3. **Certificate Repository:**

   - Stores issued certificates
   - Publicly accessible
   - Distributes certificates

4. **Certificate Revocation List (CRL):**
   - Lists revoked certificates
   - Published by CA
   - Checked during verification

### 4.5 Advantages and Disadvantages

**Advantages:**

- **Strong Security**: Based on cryptography
- **Non-repudiation**: Digital signatures prove identity
- **No Password**: No password to remember or steal
- **Mutual Authentication**: Both parties can authenticate
- **Scalability**: Works for large organizations
- **Automation**: No user interaction needed

**Disadvantages:**

- **Complex Setup**: Requires PKI infrastructure
- **Cost**: CA services, certificate management
- **Certificate Management**: Renewal, revocation
- **Private Key Protection**: Must keep private key secure
- **Revocation Checking**: Adds overhead
- **User Experience**: Certificate installation can be complex

### 4.6 Use Cases

**Where Certificate-Based Authentication is Used:**

- **SSL/TLS**: Website authentication (HTTPS)
- **VPN**: Secure remote access
- **Email**: S/MIME for secure email
- **Code Signing**: Verify software authenticity
- **Smart Cards**: Physical access control
- **IoT Devices**: Device authentication
- **Enterprise Networks**: User authentication

---

## **5. Biometric Authentication**

> PYQ: Biometric Authentication (May-23, 2.5 marks)  
> PYQ: Biometric based authentication. (Dec-22, 7 marks)

### 5.1 What is Biometric Authentication?

**Biometric Authentication** uses unique physical or behavioral characteristics to verify identity. It provides "something you are" factor in authentication.

**Types of Biometrics:**

**Physiological (Physical):**

- **Fingerprint**: Most common, unique patterns
- **Face Recognition**: Facial features analysis
- **Iris Scan**: Unique eye patterns
- **Retina Scan**: Blood vessel patterns in eye
- **Hand Geometry**: Hand shape and size
- **DNA**: Genetic information

**Behavioral:**

- **Voice Recognition**: Voice patterns
- **Signature**: Handwriting patterns
- **Keystroke Dynamics**: Typing patterns
- **Gait Analysis**: Walking patterns

### 5.2 How Biometric Authentication Works

**Process:**

```
┌─────────────────────────────────────┐
│  1. Enrollment Phase                │
└─────────────────────────────────────┘
User → Biometric Sensor → Feature Extraction → Template Storage

┌─────────────────────────────────────┐
│  2. Authentication Phase            │
└─────────────────────────────────────┘
User → Biometric Sensor → Feature Extraction → Matching → Decision
                                                    ↓
                                              Compare with
                                              Stored Template
```

**Enrollment:**

1. Capture biometric sample (fingerprint, face)
2. Extract unique features
3. Create template (mathematical representation)
4. Store template in database

**Authentication:**

1. Capture new biometric sample
2. Extract features
3. Compare with stored template
4. Calculate similarity score
5. Grant access if score exceeds threshold

### 5.3 Biometric Matching

**Matching Metrics:**

**False Acceptance Rate (FAR):**

- Probability of accepting unauthorized user
- Security metric
- Lower is better

**False Rejection Rate (FRR):**

- Probability of rejecting authorized user
- Usability metric
- Lower is better

**Equal Error Rate (EER):**

- Point where FAR = FRR
- Overall accuracy measure
- Lower EER = better system

**Trade-off:**

- Strict threshold: Low FAR, High FRR (more secure, less convenient)
- Lenient threshold: High FAR, Low FRR (less secure, more convenient)

### 5.4 Advantages and Disadvantages

**Advantages:**

- **Cannot be Lost**: Always with the user
- **Difficult to Forge**: Unique to individual
- **Convenient**: No password to remember
- **Fast**: Quick authentication
- **Non-transferable**: Cannot share with others
- **Audit Trail**: Clear record of who accessed

**Disadvantages:**

- **Privacy Concerns**: Sensitive personal data
- **Cannot Change**: If compromised, cannot reset like password
- **False Positives/Negatives**: Not 100% accurate
- **Environmental Factors**: Dirt, injury, lighting affect accuracy
- **Cost**: Expensive hardware required
- **Database Security**: Biometric data must be protected
- **Spoofing**: Can be fooled with fake fingerprints, photos

### 5.5 Security Concerns

**Biometric Vulnerabilities:**

- **Spoofing**: Fake fingerprints, photos, masks
- **Replay Attacks**: Captured biometric data replayed
- **Database Breach**: Stolen biometric templates
- **Template Reconstruction**: Recreate biometric from template
- **Coercion**: Forced to provide biometric

**Protection Measures:**

- **Liveness Detection**: Verify live person (not photo/fake)
- **Encryption**: Encrypt stored templates
- **Multi-factor**: Combine with password or token
- **Secure Storage**: Hardware security modules
- **Template Protection**: One-way hash of biometric data

---

## **6. Token-Based vs Certificate-Based Authentication**

> PYQ: Compare and contrast Certificate-based Authentication with Token-based Authentication. What are the use cases for each method? (2024, 15 marks)

### 6.1 Detailed Comparison

| Aspect                    | Token-Based            | Certificate-Based               |
| ------------------------- | ---------------------- | ------------------------------- |
| **Technology**            | OTP generation         | PKI and digital certificates    |
| **What It Proves**        | Possession of device   | Possession of private key       |
| **Setup Complexity**      | Simple                 | Complex (requires PKI)          |
| **User Experience**       | Enter OTP code         | Automatic (transparent)         |
| **Security Level**        | Good                   | Excellent                       |
| **Cost**                  | Low to medium          | High                            |
| **Scalability**           | Good                   | Excellent                       |
| **Revocation**            | Easy (disable token)   | Complex (CRL/OCSP)              |
| **Offline Use**           | Limited                | Yes (if certificate cached)     |
| **Mutual Authentication** | No                     | Yes                             |
| **Non-repudiation**       | No                     | Yes (digital signatures)        |
| **Key Management**        | Simple (shared secret) | Complex (PKI hierarchy)         |
| **Device Dependency**     | Yes (need token)       | Yes (need private key)          |
| **Expiration**            | OTP expires quickly    | Certificate has validity period |

### 6.2 Security Comparison

**Token-Based Security:**

- **Strengths**: Time-limited OTPs, two-factor authentication
- **Weaknesses**: Token can be stolen, phishing possible, no non-repudiation
- **Threats**: Token theft, man-in-the-middle, phishing

**Certificate-Based Security:**

- **Strengths**: Strong cryptography, non-repudiation, mutual authentication
- **Weaknesses**: Private key compromise, complex revocation
- **Threats**: Private key theft, certificate forgery, CA compromise

### 6.3 Use Cases

**Token-Based Authentication Best For:**

1. **Online Banking**: Additional security layer for transactions
2. **VPN Access**: Remote employee authentication
3. **Cloud Services**: AWS, Azure multi-factor authentication
4. **Email**: Gmail, Outlook 2FA
5. **Social Media**: Facebook, Twitter account protection
6. **Admin Access**: Privileged account protection
7. **Consumer Applications**: Easy to deploy, user-friendly

**Certificate-Based Authentication Best For:**

1. **Enterprise Networks**: Employee workstation authentication
2. **SSL/TLS**: Website authentication (HTTPS)
3. **Code Signing**: Software publisher verification
4. **Email Encryption**: S/MIME secure email
5. **IoT Devices**: Machine-to-machine authentication
6. **Smart Cards**: Physical and logical access control
7. **Document Signing**: Legal document authentication
8. **VPN**: Site-to-site VPN connections

### 6.4 When to Use Which

**Use Token-Based When:**

- Need additional security layer (2FA)
- Users are non-technical
- Quick deployment needed
- Budget is limited
- Temporary access required
- Consumer-facing applications

**Use Certificate-Based When:**

- Need strong authentication
- Non-repudiation required
- Automated authentication needed
- Enterprise environment
- Long-term security required
- Machine-to-machine communication
- Regulatory compliance needed

**Use Both (Layered Security):**

- High-security environments
- Financial institutions
- Government systems
- Healthcare systems
- Critical infrastructure

---

## **7. Kerberos**

> PYQ: Kerberos – authenticated service. (Feb-22, 8 marks)  
> PYQ: Kerberos (Feb-22, 2.5 marks)  
> PYQ: Kerberos (Dec-22, 2.5 marks)  
> PYQ: Kerberos and internet security. (May-23, 7 marks)

### 7.1 What is Kerberos?

**Kerberos** is a network authentication protocol developed at MIT that uses secret-key cryptography to provide strong authentication for client-server applications. It acts as a trusted third-party authentication service.

**Key Features:**

- Mutual authentication (client and server)
- Single sign-on capability
- Ticket-based authentication
- Symmetric key cryptography
- Prevents eavesdropping and replay attacks
- No passwords sent over network

**Name Origin:** Named after Cerberus, the three-headed dog guarding Hades in Greek mythology (Client, Server, KDC)

### 7.2 Kerberos Components

**Three Main Entities:**

**1. Client:**

- User or service requesting access
- Obtains tickets from KDC
- Presents tickets to servers

**2. Server:**

- Service provider (file server, web server)
- Validates tickets
- Grants access to authenticated clients

**3. Key Distribution Center (KDC):**

- **Authentication Server (AS)**: Verifies user identity
- **Ticket Granting Server (TGS)**: Issues service tickets
- Trusted by all parties
- Stores secret keys

### 7.3 Kerberos Tickets

**Ticket Granting Ticket (TGT):**

- Issued by Authentication Server (AS)
- Used to request service tickets
- Valid for session duration (typically 8-10 hours)
- Encrypted with TGS secret key
- Contains: Client ID, TGS ID, timestamp, lifetime, session key

**Service Ticket:**

- Issued by Ticket Granting Server (TGS)
- Used to access specific service
- Valid for shorter period (typically 5 minutes)
- Encrypted with service's secret key
- Contains: Client ID, Server ID, timestamp, lifetime, session key

### 7.4 How Kerberos Works

**Kerberos Authentication Process:**

```
Client                  KDC (AS)              KDC (TGS)            Server
  │                        │                      │                   │
  │  1. Request TGT        │                      │                   │
  │  (Username)            │                      │                   │
  ├───────────────────────>│                      │                   │
  │                        │                      │                   │
  │                        │ 2. Verify user       │                   │
  │                        │ 3. Generate TGT      │                   │
  │                        │                      │                   │
  │  4. TGT + Session Key  │                      │                   │
  │  (encrypted)           │                      │                   │
  │<───────────────────────┤                      │                   │
  │                        │                      │                   │
  │  5. Request Service    │                      │                   │
  │  Ticket (TGT)          │                      │                   │
  ├────────────────────────┼─────────────────────>│                   │
  │                        │                      │                   │
  │                        │                      │ 6. Verify TGT     │
  │                        │                      │ 7. Generate       │
  │                        │                      │ Service Ticket    │
  │                        │                      │                   │
  │  8. Service Ticket     │                      │                   │
  │<───────────────────────┼──────────────────────┤                   │
  │                        │                      │                   │
  │  9. Service Ticket +   │                      │                   │
  │  Authenticator         │                      │                   │
  ├────────────────────────┼──────────────────────┼──────────────────>│
  │                        │                      │                   │
  │                        │                      │                   │ 10. Verify
  │                        │                      │                   │ Ticket
  │                        │                      │                   │
  │  11. Access Granted    │                      │                   │
  │<───────────────────────┼──────────────────────┼───────────────────┤
  │                        │                      │                   │
  │  12. Secure Communication                     │                   │
  │<─────────────────────────────────────────────────────────────────>│
```

**Detailed Steps:**

**Phase 1: Authentication (AS Exchange)**

1. **Client → AS**: Request Ticket Granting Ticket (TGT)
   - Sends username (plaintext)
2. **AS**: Verifies user exists
3. **AS**: Generates TGT and session key
4. **AS → Client**: Sends two messages:
   - TGT encrypted with TGS secret key
   - Session key encrypted with user's password hash

**Phase 2: Ticket Granting (TGS Exchange)**

5. **Client → TGS**: Request service ticket

- Sends TGT (encrypted)
- Sends authenticator (timestamp encrypted with session key)
- Specifies desired service

6. **TGS**: Decrypts TGT, verifies authenticator
7. **TGS**: Generates service ticket and new session key
8. **TGS → Client**: Sends two messages:
   - Service ticket encrypted with server's secret key
   - Service session key encrypted with client-TGS session key

**Phase 3: Service Request (Client-Server Exchange)**

9. **Client → Server**: Request service

- Sends service ticket
- Sends new authenticator

10. **Server**: Decrypts ticket, verifies authenticator
11. **Server → Client**: Optionally sends confirmation
12. **Secure Communication**: Client and server use session key

### 7.5 Kerberos Security Features

**Protection Against Attacks:**

**1. Replay Attack Protection:**

- Timestamps in tickets and authenticators
- Tickets have limited lifetime
- Authenticators used only once

**2. Eavesdropping Protection:**

- All sensitive data encrypted
- Passwords never sent over network
- Session keys for each service

**3. Man-in-the-Middle Protection:**

- Mutual authentication
- Shared secret keys
- Encrypted tickets

**4. Password Guessing Protection:**

- Failed attempts logged
- Account lockout policies
- No password verification over network

### 7.6 Advantages and Limitations

**Advantages:**

- **Single Sign-On**: Login once, access multiple services
- **Mutual Authentication**: Both parties verified
- **No Password Transmission**: Passwords never sent over network
- **Centralized Management**: KDC manages all keys
- **Scalability**: Works for large networks
- **Replay Protection**: Timestamps prevent replay attacks

**Limitations:**

- **Single Point of Failure**: KDC must be available
- **Time Synchronization**: Requires synchronized clocks
- **KDC Compromise**: If KDC hacked, entire system compromised
- **Initial Authentication**: Still requires password
- **Complex Setup**: Difficult to configure
- **Limited to Single Realm**: Cross-realm authentication complex

---

## **8. Key Distribution Center (KDC)**

> PYQ: Key Distribution Center (KDC). (May-23, 7.5 marks)  
> PYQ: Honey pots and KDC. (Feb-22, 7 marks)

### 8.1 What is KDC?

**Key Distribution Center (KDC)** is a trusted third-party service that securely distributes cryptographic keys to users and services in a network. It is the central component of Kerberos authentication.

**KDC Functions:**

- Authenticate users
- Generate and distribute session keys
- Issue tickets for services
- Maintain database of secret keys
- Enforce security policies

### 8.2 KDC Architecture

**KDC consists of two logical servers:**

**1. Authentication Server (AS):**

- **Function**: Initial user authentication
- **Input**: Username
- **Output**: Ticket Granting Ticket (TGT)
- **Database**: User credentials (password hashes)
- **Process**: Verifies user identity

**2. Ticket Granting Server (TGS):**

- **Function**: Issue service tickets
- **Input**: TGT + Service request
- **Output**: Service ticket
- **Database**: Service keys
- **Process**: Validates TGT, issues service tickets

```
┌─────────────────────────────────────┐
│  Key Distribution Center (KDC)      │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  Authentication Server (AS)   │  │
│  │  - User authentication        │  │
│  │  - Issue TGT                  │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  Ticket Granting Server (TGS) │  │
│  │  - Validate TGT               │  │
│  │  - Issue service tickets      │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  Database                     │  │
│  │  - User credentials           │  │
│  │  - Service keys               │  │
│  │  - Security policies          │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### 8.3 KDC Database

**KDC stores:**

- **Principal Names**: Users and services
- **Secret Keys**: Derived from passwords
- **Key Version Numbers**: For key rotation
- **Ticket Policies**: Lifetime, renewal
- **Access Control Lists**: Service permissions

### 8.4 KDC Security

**KDC Protection:**

- **Physical Security**: Secure server room
- **Network Isolation**: Separate network segment
- **Redundancy**: Multiple KDC replicas
- **Backup**: Regular key database backups
- **Monitoring**: Log all authentication attempts
- **Access Control**: Strict admin access

**KDC Vulnerabilities:**

- **Single Point of Failure**: If KDC down, no authentication
- **Compromise**: If KDC hacked, all keys exposed
- **Denial of Service**: Overload KDC with requests
- **Time Synchronization**: Clock skew causes failures


### 8.5 What is a Honeypot?

**Honeypots** are security systems designed to attract and detect cyber attackers. They look like real computers, servers, or networks, but are actually decoys set up to lure attackers away from valuable systems. When attackers interact with a honeypot, their actions are monitored and recorded, helping security teams study attack methods and improve defenses.

**Key Points:**

- Act as traps for hackers and malware
- Do not contain real data or services
- Help detect, analyze, and learn about threats
- Can alert administrators to attacks early

**Example:** A fake login page or server that looks real but is only there to catch attackers trying to break in.

---

## **9. Security Handshake Pitfalls**

> PYQ: Security handshake pitfalls. (Feb-22, 7 marks)  
> PYQ: Security handshake pitfalls. (May-23, 7.5 marks)

### 9.1 Common Handshake Vulnerabilities

**Security handshakes** pitfalls are common mistakes or vulnerabilities that can occur during the process of establishing a secure connection (handshake) between two parties. If not handled properly, attackers can exploit these weaknesses

**Major Pitfalls:**

### 9.2 Man-in-the-Middle (MITM) Attack

**Problem:** Attacker intercepts handshake and impersonates both parties

**Scenario:**

```
Client ←→ Attacker ←→ Server
```

**Prevention:**

- Certificate validation
- Public key pinning
- Mutual authentication
- Out-of-band verification

### 9.3 Replay Attack

**Problem:** Attacker captures and replays valid handshake messages

**Scenario:**

1. Attacker captures authentication message
2. Replays message later to gain access

**Prevention:**

- Timestamps (Kerberos approach)
- Nonces (random numbers used once)
- Sequence numbers
- Challenge-response protocols

### 9.4 Downgrade Attack

**Problem:** Attacker forces use of weaker encryption

**Scenario:**

1. Client and server support multiple cipher suites
2. Attacker modifies handshake to select weakest cipher
3. Attacker breaks weak encryption

**Prevention:**

- Disable weak ciphers
- Signature over cipher suite negotiation
- TLS 1.3 removes weak ciphers
- HSTS (HTTP Strict Transport Security)

### 9.5 Session Hijacking

**Problem:** Attacker steals session after authentication

**Scenario:**

1. User authenticates successfully
2. Attacker steals session token/cookie
3. Attacker uses token to impersonate user

**Prevention:**

- Secure session tokens (random, long)
- HTTPS only cookies
- Session expiration
- IP address binding
- Regenerate session ID after login

### 9.6 Insufficient Randomness

**Problem:** Predictable random numbers in handshake

**Scenario:**

- Weak random number generator
- Attacker predicts session keys
- Attacker decrypts communication

**Prevention:**

- Cryptographically secure RNG
- Sufficient entropy sources
- Regular security audits

### 9.7 Certificate Validation Failures

**Problem:** Not properly validating certificates

**Pitfalls:**

- Not checking certificate expiration
- Not verifying certificate chain
- Not checking revocation status (CRL/OCSP)
- Accepting self-signed certificates
- Not matching hostname

**Prevention:**

- Strict certificate validation
- Check entire certificate chain
- Verify against trusted CA list
- Check CRL/OCSP
- Hostname verification

### 9.8 Time Synchronization Issues

**Problem:** Clock skew between parties

**Impact:**

- Timestamp validation fails
- Tickets rejected (Kerberos)
- Certificates appear expired/not yet valid

**Prevention:**

- NTP (Network Time Protocol)
- Allow small time window (5 minutes)
- Monitor clock drift

### 9.9 Key Management Problems

**Pitfalls:**

- Weak key generation
- Insecure key storage
- No key rotation
- Sharing keys between services
- Hardcoded keys

**Prevention:**

- Strong key generation (CSPRNG)
- Hardware security modules (HSM)
- Regular key rotation
- Unique keys per service
- Secure key distribution

---

## **10. Single Sign-On (SSO)**

> PYQ: Single Sign-On (SSO) approach in detail. (Dec-22, 15 marks)  
> PYQ: Describe the Single Sign-On (SSO) approach and its advantages in enterprise security. What are some common pitfalls in its implementation? (2024, 15 marks)  
> PYQ: Define Single Sign-On (SSO). How is it used in enterprise systems? (2024, 2.5 marks)

### 10.1 What is Single Sign-On?

**Single Sign-On (SSO)** is an authentication method that allows users to access multiple applications and services with one set of login credentials. Users authenticate once and gain access to all authorized systems without re-entering credentials.

**Key Concept:** "Login once, access everything"

**Example:** Login to Google account → Access Gmail, YouTube, Drive, Calendar without separate logins

### 10.2 How SSO Works

**SSO Process:**

```
User                Identity Provider (IdP)         Service Provider (SP)
 │                           │                              │
 │  1. Access Service        │                              │
 ├─────────────────────────────────────────────────────────>│
 │                           │                              │
 │                           │  2. Redirect to IdP          │
 │<─────────────────────────────────────────────────────────┤
 │                           │                              │
 │  3. Login credentials     │                              │
 ├──────────────────────────>│                              │
 │                           │                              │
 │                           │ 4. Authenticate              │
 │                           │ 5. Generate token            │
 │                           │                              │
 │  6. Token (SAML/OAuth)    │                              │
 │<──────────────────────────┤                              │
 │                           │                              │
 │  7. Present token         │                              │
 ├─────────────────────────────────────────────────────────>│
 │                           │                              │
 │                           │                              │ 8. Verify token
 │                           │  9. Request validation       │ with IdP
 │                           │<─────────────────────────────┤
 │                           │                              │
 │                           │  10. Token valid             │
 │                           ├─────────────────────────────>│
 │                           │                              │
 │  11. Access granted       │                              │
 │<─────────────────────────────────────────────────────────┤
 │                           │                              │
 │  12. Access another service (no re-login needed)         │
 ├─────────────────────────────────────────────────────────>│
 │                           │                              │
 │  13. Verify existing token│                              │
 │  14. Access granted       │                              │
 │<─────────────────────────────────────────────────────────┤
```

**Components:**

**1. Identity Provider (IdP):**

- Central authentication service
- Stores user credentials
- Issues authentication tokens
- Examples: Okta, Azure AD, Google Identity

**2. Service Provider (SP):**

- Applications/services user wants to access
- Trusts IdP for authentication
- Validates tokens from IdP
- Examples: Salesforce, Slack, Office 365

**3. User:**

- Authenticates once with IdP
- Receives token
- Uses token to access multiple SPs

### 10.3 SSO Protocols

**Common SSO Protocols:**

**1. SAML (Security Assertion Markup Language):**

- XML-based protocol
- Enterprise standard
- Supports web-based SSO
- Used by: Azure AD, Okta

**2. OAuth 2.0:**

- Authorization framework
- Token-based
- Used for API access
- Used by: Google, Facebook, GitHub

**3. OpenID Connect (OIDC):**

- Built on OAuth 2.0
- Adds authentication layer
- JSON-based
- Modern standard

**4. Kerberos:**

- Ticket-based
- Used in Windows domains
- Enterprise networks

### 10.4 SSO Architecture Types

**1. Enterprise SSO:**

- Internal organization use
- Active Directory integration
- Windows authentication
- Example: Corporate intranet

**2. Web SSO:**

- Internet-facing applications
- SAML/OIDC based
- Cloud services
- Example: Google Workspace

**3. Federated SSO:**

- Across different organizations
- Trust relationships
- Identity federation
- Example: University partnerships

### 10.5 Advantages of SSO

> PYQ: Describe the Single Sign-On (SSO) approach and its advantages in enterprise security. (2024, 15 marks)

**For Users:**

- **Convenience**: Remember only one password
- **Productivity**: No time wasted on multiple logins
- **Reduced Password Fatigue**: Fewer passwords to manage
- **Better Password Quality**: Users choose stronger passwords
- **Seamless Experience**: Quick access to all applications

**For Organizations:**

- **Improved Security**: Centralized authentication control
- **Reduced Help Desk Costs**: Fewer password reset requests
- **Better Compliance**: Centralized audit logs
- **Easier User Management**: Single point for access control
- **Faster Onboarding/Offboarding**: One account to create/disable
- **Enhanced Monitoring**: Track all user access from one place

**Security Benefits:**

- **Centralized Access Control**: Manage all permissions centrally
- **Stronger Authentication**: Can enforce MFA at IdP
- **Reduced Attack Surface**: Fewer passwords to compromise
- **Better Logging**: All authentication events in one place
- **Quick Revocation**: Disable one account, lose all access
- **Consistent Policies**: Apply security policies uniformly

### 10.6 Common Pitfalls in SSO Implementation

> PYQ: What are some common pitfalls in its implementation? (2024, 15 marks)

**1. Single Point of Failure:**

- **Problem**: If IdP goes down, all services inaccessible
- **Solution**: High availability setup, redundant IdPs, failover mechanisms

**2. Security Risks:**

- **Problem**: One compromised password = access to everything
- **Solution**: Enforce MFA, strong password policies, anomaly detection

**3. Session Management Issues:**

- **Problem**: Long-lived sessions, no proper logout
- **Solution**: Session timeouts, secure session storage, global logout

**4. Incomplete Logout:**

- **Problem**: Logout from one service doesn't log out from all
- **Solution**: Implement Single Logout (SLO), clear all sessions

**5. Token Security:**

- **Problem**: Stolen tokens grant unauthorized access
- **Solution**: Short token lifetime, secure transmission (HTTPS), token encryption

**6. Trust Relationship Problems:**

- **Problem**: Misconfigured trust between IdP and SP
- **Solution**: Proper certificate management, regular validation

**7. User Privacy Concerns:**

- **Problem**: IdP tracks all user activity
- **Solution**: Clear privacy policies, minimal data collection, user consent

**8. Integration Complexity:**

- **Problem**: Legacy applications don't support SSO
- **Solution**: Use SSO gateways, gradual migration, hybrid approach

**9. Vendor Lock-in:**

- **Problem**: Dependent on specific SSO provider
- **Solution**: Use standard protocols (SAML, OIDC), avoid proprietary solutions

**10. Insufficient Monitoring:**

- **Problem**: Don't detect suspicious authentication patterns
- **Solution**: Implement SIEM, anomaly detection, real-time alerts

**11. Weak Password Policies:**

- **Problem**: SSO makes weak password more dangerous
- **Solution**: Enforce strong passwords, MFA, password managers

**12. No Fallback Mechanism:**

- **Problem**: Can't access anything if SSO fails
- **Solution**: Emergency access procedures, break-glass accounts

### 10.7 SSO Best Practices

**Implementation:**

- Start with pilot group
- Use standard protocols (SAML, OIDC)
- Implement high availability
- Plan for disaster recovery
- Test thoroughly before rollout

**Security:**

- Enforce multi-factor authentication
- Implement strong password policies
- Use short session timeouts
- Monitor authentication logs
- Regular security audits

**User Experience:**

- Clear communication to users
- Training and documentation
- Smooth migration path
- Support for mobile devices
- Quick help desk response

---

## **11. Smart Card Technology**

> PYQ: Problems and solutions of Smart Card Technology. (May-23, 8 marks)

### 11.1 What are Smart Cards?

**Smart Cards** are pocket-sized cards with embedded integrated circuits that can store and process data. They combine physical token (something you have) with cryptographic capabilities.

**Types:**

- **Contact Smart Cards**: Require physical contact with reader (e.g., chip-and-PIN cards)
- **Contactless Smart Cards**: Use RFID and NFC (e.g., access control cards)
- **Hybrid Cards**: Support both contact and contactless (e.g., some payment cards)

### 11.2 Smart Card Components

**Hardware:**

- **Microprocessor**: Performs cryptographic operations
- **Memory**: Stores certificates, keys, data
- **Interface**: Contact pads or RFID antenna
- **Security Features**: Tamper resistance

**Software:**

- **Operating System**: Card OS (JavaCard, MULTOS)
- **Applications**: Authentication, encryption, signing
- **Cryptographic Libraries**: RSA, AES, etc.

### 11.3 How Smart Cards Work

**Authentication Process:**

1. User inserts card into reader
2. Reader powers the card
3. Card and system perform mutual authentication
4. User enters PIN
5. Card verifies PIN internally
6. Card performs cryptographic operations
7. Access granted if successful

### 11.4 Problems with Smart Cards

**1. Cost:**

- Expensive cards and readers
- Deployment costs high
- Maintenance costs

**2. Physical Vulnerabilities:**

- Can be lost or stolen
- Physical damage
- Wear and tear

**3. User Inconvenience:**

- Must carry card
- Need card reader
- Forgotten cards

**4. Security Issues:**

- PIN can be weak
- Side-channel attacks
- Card cloning (older cards)

**5. Compatibility:**

- Different card standards
- Reader compatibility issues
- OS support required

### 11.5 Solutions

**Cost Solutions:**

- Bulk purchasing
- Shared infrastructure
- Cloud-based management
- Long-term ROI focus

**Security Solutions:**

- Strong PIN policies
- Biometric integration
- EMV chip technology
- Tamper-evident packaging

**Usability Solutions:**

- Virtual smart cards (software)
- Mobile phone integration
- Backup authentication methods
- User training

**Technical Solutions:**

- Standard protocols (PIV, CAC)
- Universal readers
- Driver support
- Regular updates

---

## **Quick Revision Points**

### **Authentication Basics:**

- Three factors: Know, Have, Are
- MFA combines multiple factors
- Passwords: Most common but weakest

### **Tokens:**

- Hardware/Software OTP generators
- Time-based (TOTP) or challenge-response
- Good for 2FA
- Can be lost/stolen

### **Certificates:**

- PKI-based authentication
- Strong security, non-repudiation
- Complex setup, expensive
- Used for: SSL/TLS, VPN, email

### **Biometrics:**

- Fingerprint, face, iris
- Cannot be lost, hard to forge
- Privacy concerns, cannot change
- FAR vs FRR trade-off

### **Kerberos:**

- Ticket-based authentication
- Three entities: Client, Server, KDC
- TGT → Service Ticket → Access
- Single sign-on, mutual authentication

### **KDC:**

- AS: Issues TGT
- TGS: Issues service tickets
- Single point of failure
- Requires time synchronization

### **SSO:**

- Login once, access multiple services
- IdP authenticates, SP trusts
- Protocols: SAML, OAuth, OIDC
- Benefits: Convenience, security, cost savings
- Risks: Single point of failure, compromised password

### **Security Pitfalls:**

- MITM attacks
- Replay attacks
- Downgrade attacks
- Session hijacking
- Weak certificates
- Time sync issues

---

_These notes were compiled by [Deepak Modi](https://deepakmodi.tech)_  
_Last updated: December 2025_
