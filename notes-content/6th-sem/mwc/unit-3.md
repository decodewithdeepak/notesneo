# Unit 3: Mobile Network Layer and Ad Hoc Networks

**Course:** ESC-CSE-308G | **Author:** Deepak Modi

## Content Outline
- **1. Mobile Network Layer**
  - 1.1 Mobile IP - Goals and Assumptions
  - 1.2 Mobile IP Requirements
  - 1.3 Mobile IP Entities and Terminology
  - 1.4 IP Packet Delivery
  - 1.5 Agent Advertisement and Discovery
  - 1.6 Registration Process
  - 1.7 Tunneling and Encapsulation
  - 1.8 Route Optimization
  - 1.9 Reverse Tunneling
  - 1.10 Security Considerations
  - 1.11 Mobile IPv6
  - 1.12 Dynamic Host Configuration Protocol (DHCP)
- **2. Mobile Ad-hoc Networks (MANETs)**
  - 2.1 Introduction to MANETs
  - 2.2 Routing Challenges in MANETs
  - 2.3 MANET Routing Protocols
  - 2.4 Destination Sequenced Distance Vector (DSDV)
  - 2.5 Dynamic Source Routing (DSR)
  - 2.6 Hierarchical Routing Algorithms
  - 2.7 Performance Metrics for MANET Routing
- **3. Mobile Transport Layer**
  - 3.1 TCP Overview
  - 3.2 Challenges for TCP in Mobile Environments
  - 3.3 Indirect TCP
  - 3.4 Snooping TCP
  - 3.5 Mobile TCP (M-TCP)
  - 3.6 Fast Retransmission/Fast Recovery TCP
  - 3.7 Transaction-Oriented TCP

## 1. Mobile Network Layer

### 1.1 Mobile IP - Goals and Assumptions
> PYQ: Explain Mobile IP. (2024, 7.5 marks)   
> PYQ: Mobile IP Goals (2023, 2.5 marks)
> PYQ: What is Mobile IP? Explain its goals. Also explain about IP packet delivery. (2021, 15 marks)

Mobile IP is a network-layer protocol that helps mobile device users maintain their permanent IP addresses as they move between different networks. It was standardized by the Internet Engineering Task Force (IETF) in RFC 5944.

#### **Main Goals of Mobile IP:**
  - **Seamless Connectivity:** Keep connections working when devices change networks
  - **Transparency:** Maintain existing connections without changing protocols
  - **Backward Compatibility:** Work with existing apps and internet infrastructure
  - **Device Independence:** Support all mobile devices (laptops, phones, tablets, IoT)
  - **Efficiency:** Minimize extra data and delays when routing packets to mobile devices

#### **Key Assumptions:**
  - **IP Addresses Serve Two Purposes:** They identify devices (who you are) and show location (where you are)
  - **Mobility Creates Problems:** Moving devices clash with routing rules because they change location while needing to keep their identity
  - **TCP Connections Need Stable Addresses:** TCP connections break when addresses change
  - **Minimal Changes Needed:** Solutions must work without major changes to internet infrastructure
  - **Apps Shouldn't Notice:** Applications should work without knowing about device movement

### 1.2 Mobile IP Requirements

For Mobile IP to work properly and support devices moving between networks, it needs to meet several key requirements:

#### **Functional Requirements:**
  - **Location Independence:** Allow mobile nodes to use their IP address regardless of their point of attachment
  - **Continuous Reachability:** Enable other hosts to reach mobile nodes without knowing their current locations
  - **Scalability:** Support millions of mobile devices moving simultaneously across networks
  - **Performance:** Minimize routing inefficiencies and transmission delays
  - **Security:** Prevent unauthorized redirection of mobile node traffic

#### **Technical Requirements:**
  - **Address Translation:** Mechanism to map a stable home address to a changing care-of address
  - **Location Discovery:** Method for mobile nodes to determine their current network location
  - **Location Registration:** Protocol for mobile nodes to update their location information
  - **Packet Forwarding:** Mechanism to route packets to the mobile node's current location
  - **Smooth Handover:** Minimize packet loss during transitions between networks

  ### 1.3 Mobile IP Entities and Terminology

  > PYQ: Explain Mobile IP Entities. (2022, 2.5 marks)

  Mobile IP involves several key entities and terms that are essential for understanding its operation:

  #### **Mobile IP Entities:**

  - **Mobile Node (MN):** Device that moves between networks while maintaining its home IP address. Detects network changes and initiates registration.

  - **Home Agent (HA):** Router in the home network that tracks mobile node locations, intercepts packets for away nodes, and tunnels them to the node's current location.

  - **Foreign Agent (FA):** Router in visited networks that provides services to visiting mobile nodes, detunnels packets from the home agent, and assists with registration.

  - **Correspondent Node (CN):** Any host communicating with the mobile node, typically unaware of the node's mobility unless route optimization is used.

  #### **Mobile IP Terminology:**

  - **Home Address:** Permanent IP address of the mobile node that remains constant regardless of location, used for identification in communications.

  - **Care-of Address (CoA):** Temporary IP address assigned to the mobile node while it is away from its home network. It can be co-located (assigned directly to the mobile node) or provided by a foreign agent.

  - **Home Network:** Network where the mobile node "belongs" and where its home agent is located.

  - **Foreign Network:** Any network the mobile node visits outside its home network.

  - **Binding:** Association between the mobile node's home address and its current care-of address, allowing packets to be routed correctly.

  - **Registration:** Process by which a mobile node informs its home agent of its current care-of address.

  - **Tunneling:** Mechanism used to encapsulate packets sent to the mobile node's home address, allowing them to be forwarded to the care-of address.

  - **Encapsulation/Decapsulation:** Process of wrapping/unwrapping the original packet within a new IP header.

  #### **Mobile IP Architecture:**

  ![Mobile IP Architecture](https://media.geeksforgeeks.org/wp-content/uploads/20240628160427/Mobile-IP.jpg)

### 1.4 IP Packet Delivery (How Mobile IP Works)

> PYQ: IP Packet delivery (2022, 2.5 marks)   
> PYQ: What is Mobile IP? Explain its goals. Also explain about IP packet delivery. (2021, 15 marks)

IP packet delivery in Mobile IP involves several steps to ensure that packets reach a mobile node regardless of its current location. The process includes registration, tunneling, and routing.

#### **Packet Delivery Process:**

1. **Data Transmission Initiation:** Correspondent node (CN) sends packets addressed to the mobile node's home address, using standard IP routing.

2. **Interception by Home Agent:** Home agent (HA) intercepts these packets through proxy ARP, preventing them from being routed elsewhere.

3. **Encapsulation:** Home agent (HA) encapsulates the original packet inside a new IP header with the mobile node's care-of address (MN's CoA) as destination.

4. **Tunneling:** Encapsulated packet is routed through the internet to the foreign agent (FA) or directly to the mobile node if it has a co-located care-of address.

5. **Decapsulation:** Upon receiving the encapsulated packet, the foreign agent (FA) removes the outer IP header and extracts the original IP packet.

6. **Delivery to Mobile Node:** The Foreign Agent (FA) then delivers the original packet to the mobile node (MN) at its current care-of address.

This process ensures that the mobile node (MN) can receive data seamlessly while moving between different networks, maintaining its home address for communication.

### 1.5 Agent Advertisement and Discovery

Agent Advertisement and Discovery are essential components of Mobile IP that allow mobile nodes to discover available home and foreign agents in their vicinity. This process enables mobile nodes to register their current location and maintain connectivity as they move.

#### **Agent Advertisement:**
Agent Advertisement is a mechanism by which home agents and foreign agents periodically broadcast their presence to mobile nodes. This allows mobile nodes to discover available agents and initiate registration.
#### **Key Features:**
- **Periodic Broadcasts:** Agents send periodic advertisements containing their addresses and capabilities.
- **Agent Information:** Advertisements include home agent address, foreign agent address, and flags indicating support for reverse tunneling and other features.
- **Agent Selection:** Mobile nodes can choose the most suitable agent based on the received advertisements.

#### **Agent Discovery:**
Agent Discovery is the process by which mobile nodes identify and select available agents in their current network. This process involves listening for agent advertisements and responding to them.
#### **Key Features:**
- **Listening for Advertisements:** Mobile nodes listen for agent advertisements on the network to discover available agents.
- **Agent Solicitation:** Mobile nodes can send agent solicitation messages to request advertisements from agents if none are received.
- **Agent Selection Criteria:** Mobile nodes may use criteria such as signal strength, agent capabilities, and network conditions to select the most appropriate agent.

### 1.6 Registration Process

Registration enables mobility management in Mobile IP by linking a mobile node's home address to its current location:

#### **Purpose:**
  - Inform home agent of mobile node's current care-of address
  - Establish/renew binding between home address and care-of address
  - Request foreign agent services
  - Authenticate for Mobile IP services

#### **Process Steps:**
1. **Agent Discovery:**
   - Mobile node discovers available home and foreign agents via agent advertisements or solicitations.

2. **Registration Request:**
   - Mobile node sends a registration request to the home agent (HA) or foreign agent (FA).
   - Includes mobile node's home address, care-of address, and optional authentication data.

3. **Home Agent Processing:**
   - Home agent verifies the request, checks if the mobile node is authorized, and processes the binding.
   - If successful, HA creates or updates the binding cache entry with the current care-of address.

4. **Foreign Agent Processing:**
   - If a foreign agent is involved, it may also process the request and provide additional services.
   - FA may tunnel packets to the mobile node if reverse tunneling is enabled.

5. **Registration Reply:**
   - Home agent responds with a registration reply containing status (success/failure), binding lifetime, and any additional information.
   - Mobile node receives confirmation of successful registration.

6. **Periodic Renewal:**
   - Mobile node must periodically renew its registration before the binding lifetime expires.
   - Renewal typically occurs at 75-95% of the lifetime period to ensure continuity.

#### **Registration Message Format:**
```plaintext
  +---------------------------+
  |   Type (0 = Request)      |
  +---------------------------+
  |   Home Address            |
  +---------------------------+
  |   Care-of Address         |
  +---------------------------+
  |   Lifetime                |
  +---------------------------+
  |   Authentication Data     |
  +---------------------------+
```

#### **Registration Lifetime:**
  - Maximum: typically 3600 seconds (1 hour)
  - Zero value indicates deregistration
  - Renewal: 75-95% of lifetime period


### 1.7 Tunneling and Encapsulation

Tunneling is a fundamental mechanism in Mobile IP that allows packets to be forwarded to mobile nodes at their current locations while preserving their original IP addresses. This is achieved through encapsulation, where the original IP packet is wrapped in a new IP header.

#### **Purpose of Tunneling:**
- Forward packets to mobile nodes at their temporary locations
- Preserve original packet contents while enabling correct routing
- Hide mobility from correspondent nodes and intermediate routers
- Overcome topological routing constraints of IP networks

#### **Tunneling Mechanism:**
1. **Encapsulation:**
   - Original IP packet is encapsulated within a new IP header
   - New header contains care-of address as destination
   - Original source and destination addresses remain unchanged
2. **Tunneling Protocols:**
    - **IP-in-IP Encapsulation:** Most common method, where the outer header is an IP header with the care-of address as the destination.
    - **Generic Routing Encapsulation (GRE):** Provides additional features like protocol type and optional fields.
    - **IPv6 Tunneling:** Uses IPv6 headers for encapsulation in IPv6 networks.
3. **Decapsulation:**
    - At the foreign agent or mobile node, the outer IP header is removed
    - The original IP packet is extracted and delivered to the mobile node
    - If reverse tunneling is used, the process is reversed for packets sent back to the home network
4. **Encapsulation Example:**
```plaintext
  Original Packet:
  +---------------------------+
  |   IP Header               |
  +---------------------------+
  |   TCP/UDP Header          |
  +---------------------------+
  |   Application Data        |
  +---------------------------+

  Encapsulated Packet:
  +---------------------------+   
  |   New IP Header           |   <- Outer IP Header (Care-of Address)
  +---------------------------+
  |   Original IP Packet      |   <- Inner IP Header (Home Address)
  +---------------------------+
```

#### **Types of Tunneling:**
1. **Direct Tunneling:**
   - Mobile node sends packets directly to the home agent
   - Home agent encapsulates packets with care-of address
   - Used when mobile node has a co-located care-of address
2. **Reverse Tunneling:**
    - Allows mobile node to send packets back to the home network
    - Foreign agent encapsulates packets with home address as source
    - Ensures packets can traverse networks with ingress filtering
3. **Bidirectional Tunneling:**
    - Both home agent and foreign agent can encapsulate packets
    - Provides flexibility for routing in both directions
    - Useful for scenarios where mobile node needs to communicate with multiple correspondent nodes


### 1.8 Route Optimization

Route Optimization is an enhancement to the basic Mobile IP protocol that improves the efficiency of packet delivery by allowing direct communication between a Mobile Node (MN) and a Correspondent Node (CN), bypassing the Home Agent (HA). This reduces latency and improves performance for applications that require real-time communication.

Route Optimization is built-in in Mobile IPv6 without needing tunneling. But in Mobile IPv4, it is an optional extension that can be implemented to improve routing efficiency.

#### **Route Optimization Example:**
```plaintext
Without Route Optimization:
  CN → HA → MN (Triangle Routing)

With Route Optimization:
  CN → MN (Direct after Binding Update)
```

#### **Need for Route Optimization:**
1. **Triangle Routing Problem:** Traditional Mobile IP routing creates a triangle path (Correspondent Node → Home Agent → Mobile Node), leading to increased latency and bandwidth usage.
2. **Direct Communication:** Many applications benefit from direct communication between mobile nodes and correspondent nodes, reducing the need for home agent involvement.
3. **Reduced Latency:** Direct routing minimizes delays in packet delivery, improving performance for time-sensitive applications.
4. **Lower Bandwidth Usage:** Bypassing the home agent reduces unnecessary traffic, conserving bandwidth and resources.

#### **Route Optimization Mechanism:**
1. **Binding Updates:**
   - Mobile node sends binding update messages to correspondent nodes, informing them of its current care-of address.
   - Binding updates include the mobile node's home address and care-of address.
2. **Return Routability Procedure:**
    - Correspondent node verifies the binding update by sending test packets to both the home address and care-of address.
    - Mobile node responds to these test packets, confirming its current location.
    - This process ensures that the correspondent node has a valid binding for direct communication.
3. **Binding Cache:**
    - Correspondent node maintains a binding cache that stores the mobile node's home address and care-of address.
    - The cache is updated whenever a new binding update is received.
4. **Direct Packet Delivery:**
    - Once the binding is established, subsequent packets from the correspondent node to the mobile node are sent directly to the care-of address.
    - This bypasses the home agent, allowing for more efficient routing.

#### **Benefits of Route Optimization:**
1. **Reduced Latency:** Direct routing minimizes delays in packet delivery, improving performance for real-time applications.
2. **Lower Bandwidth Usage:** Bypassing the home agent reduces unnecessary traffic, conserving bandwidth.
3. **Improved Scalability:** Reduces the load on home agents, allowing them to handle more mobile nodes without performance degradation.
4. **Enhanced User Experience:** Applications that require low latency, such as VoIP and video conferencing, benefit from optimized routing.

#### **Challenges of Route Optimization:**
1. **Security Concerns:** Binding updates can be vulnerable to spoofing or replay attacks, requiring robust authentication mechanisms.
2. **Increased Complexity:** Implementing route optimization adds complexity to the Mobile IP protocol, requiring additional mechanisms for binding updates and verification.
3. **Compatibility Issues:** Not all correspondent nodes may support route optimization, leading to potential interoperability challenges.


### 1.9 Reverse Tunneling

Reverse Tunneling extends Mobile IP to support tunneling in the reverse direction (from mobile node to home agent), allowing packets to be sent from the mobile node back to its home network.

#### **Need for Reverse Tunneling:**
1. **Ingress Filtering:** Many networks implement firewalls or routers that block packets with "topologically incorrect" source addresses
2. **Source Address Requirements:** Some applications or services require specific source addresses
3. **Symmetric Paths:** Some network services require bidirectional traffic to follow the same path
4. **Network Monitoring:** Security and accounting systems may require traffic to pass through specific points

#### **Reverse Tunneling Mechanism:**
1. **Mobile Node Registration:**
   - Mobile node registers its care-of address with the home agent, allowing the home agent to know its current location.

2. **Packet Encapsulation:**
   - When sending packets back to the home network, the mobile node encapsulates the packets with its home address as the source.
   - The outer header contains the care-of address as the destination.

3. **Foreign Agent Involvement:**
   - If a foreign agent is present, it receives the encapsulated packets and forwards them to the home agent.
   - If no foreign agent is present, the mobile node can send packets directly to the home agent.

4. **Decapsulation at Home Agent:**
   - The home agent decapsulates the packets, extracting the original packet and forwarding it to the appropriate destination within the home network.

5. **Direct Communication:**
   - Once reverse tunneling is established, subsequent packets can be sent directly to the home network without needing further encapsulation.

#### **Types of Reverse Tunneling:**
1. **Direct Delivery:**
  - Mobile node uses home address as source
  - Foreign agent tunnels packets to home agent
  - Simpler but vulnerable to ingress filtering

2. **Encapsulating Delivery:**
  - Mobile node pre-encapsulates packets (inner header has home address)
  - Uses care-of address in outer header to pass local filtering
  - Foreign agent adds another layer of encapsulation for home agent
  - More complex but works with strict filtering


### 1.10 Security Considerations

Mobile IP introduces significant security challenges that require careful attention to ensure the integrity and confidentiality of mobile communications:

#### **Security Threats:**

1. **Registration Hijacking:** Attackers can impersonate a mobile node to divert traffic, leading to eavesdropping or denial of service

2. **Redirection Attacks:** Unauthorized binding updates can redirect traffic to malicious destinations

3. **Denial of Service:** Flooding registration requests or disrupting tunnels can overwhelm network resources

4. **Replay Attacks:** Captured registration messages can be retransmitted later, potentially disrupting connections

5. **Eavesdropping:** Wireless transmissions are more susceptible to interception, raising privacy concerns

#### **Security Mechanisms:**

1. **Authentication:**
   - Use strong cryptographic techniques to authenticate mobile nodes, home agents, and foreign agents.
   - Binding updates and registration messages should be signed to verify the sender's identity.

2. **Encryption:**
   - Encrypt data packets to protect against eavesdropping.
   - Use IPsec or other encryption protocols to secure communication between mobile nodes and home agents.

3. **Binding Cache Management:**
   - Implement mechanisms to manage binding caches securely, ensuring that only valid bindings are accepted.
   - Use sequence numbers to prevent replay attacks on binding updates.

4. **Secure Agent Discovery:**
   - Use secure agent advertisements to prevent unauthorized agents from advertising themselves.
   - Mobile nodes should verify the authenticity of agent advertisements before registering.

5. **Access Control:**
   - Implement access control lists (ACLs) to restrict which nodes can register and communicate with home agents and foreign agents.
   - Ensure that only authorized mobile nodes can update their bindings.

6. **Monitoring and Logging:**
   - Monitor registration requests and binding updates for suspicious activity.
   - Log security events for auditing and incident response.

#### **Security Protocols:**
- **IPsec:** Provides end-to-end security for IP packets, including authentication and encryption
- **Mobile IP Security Protocol (MIPSEC):** A framework for securing Mobile IP operations
- **Authentication Header (AH):** Provides integrity and authenticity for IP packets
- **Encapsulating Security Payload (ESP):** Provides confidentiality, integrity, and authenticity for IP packets

#### **Security Best Practices:**
- Regularly update security protocols to address new threats
- Use strong cryptographic algorithms and key management practices
- Educate users about security risks and best practices in mobile environments


### 1.11 Mobile IPv6

> PYQ: Explain about IPv6 architecture in detail. (2022, 7 marks)

Mobile IPv6 is the next-generation mobility protocol designed to address the limitations of Mobile IPv4 and provide enhanced support for mobile devices in IPv6 networks.

#### **Mobile IPv6 Architecture:**
![Mobile IPv6 Architecture](https://www.researchgate.net/profile/Shohrab-Hossain-2/publication/220027084/figure/fig1/AS:305705149059072@1449897195330/Mobile-IPv6-Architecture.png)

#### **Key Features:**
- **IPv6 Addressing:** Uses 128-bit IPv6 addresses, allowing for a larger address space and improved routing efficiency
- **Simplified Header Format:** IPv6 header is more efficient than IPv4, reducing processing overhead
- **Mandatory Route Optimization:** Built-in support for direct routing between mobile nodes and correspondent nodes
- **No Foreign Agent Required:** Mobile nodes can use co-located care-of addresses without needing a foreign agent
- **Improved Security:** IPsec is mandatory for all Mobile IPv6 operations, enhancing security for mobile communications
- **Dynamic Address Configuration:** Uses Stateless Address Autoconfiguration (SLAAC) or DHCPv6 for address assignment
- **Binding Updates:** Mobile nodes send binding updates to correspondent nodes, allowing them to cache the current care-of address
- **Type 2 Routing Header:** Used for routing packets directly to the mobile node's care-of address, reducing latency and improving performance

#### **IPv6 Address Format:**
IPv6 addresses are represented as eight groups of four hexadecimal digits, separated by colons. Leading zeros in each group can be omitted, and a double colon (::) can be used to represent consecutive groups of zeros.
- Total length of an IPv6 address is 128 bits (16 bytes)
- Each group represents 16 bits (2 bytes)

![IPv6 Address Format](https://tse4.mm.bing.net/th/id/OIP.ZQhqSYGxdwax9Qz1KRqj_wHaEK)

#### **Mobile IPv6 Goals:**
- **Seamless Mobility:** Allow mobile nodes to change networks without disrupting ongoing connections
- **Transparent Communication:** Enable applications to continue functioning without awareness of mobility
- **Scalability:** Support a large number of mobile nodes without significant performance degradation
- **Interoperability:** Ensure compatibility with existing IPv6 infrastructure and applications
- **Security:** Provide robust security mechanisms to protect mobile communications

#### **Differences in IPv4 and IPv6:**
| Feature                | Mobile IPv4                      | Mobile IPv6                      |
|------------------------|----------------------------------|----------------------------------|
| Addressing             | 32-bit IPv4 addresses            | 128-bit IPv6 addresses           |
| Header Format          | IPv4 header                      | IPv6 header                      |
| Packet Format          | IP-in-IP encapsulation           | IPv6 encapsulation               |
| Binding Updates        | Sent to home agent               | Sent to correspondent nodes      |
| Foreign Agent          | Optional (not mandatory)         | Mandatory (built-in)             |
| Route Optimization     | Optional by extension            | Mandatory (built-in)             |
| Security               | IPsec optional                   | IPsec mandatory                  |
| Address Configuration  | DHCPv4 or manual                 | SLAAC or DHCPv6                  |
| Mobility Agents        | Home agent and foreign agent     | Home agent and no foreign agent  |
| Registration           | Home agent registration          | Binding updates to CN and HA     |
| Address Lifetime       | Fixed lifetime                   | Dynamic lifetime                 |
| Packet Forwarding      | Triangle routing                 | Direct routing                   |


### 1.12 Dynamic Host Configuration Protocol (DHCP)

> PYQ: DHCP (2021, 5 marks)      
> PYQ: Briefly explain the configuration of DHCP. (2023, 7 marks)    
> PYQ: Briefly explain the configuration of DHCP. (2022, 8 marks)

Dynamic Host Configuration Protocol (DHCP) is a client/server protocol used to automatically assign IP addresses and other network configuration parameters (like subnet mask, gateway, DNS) to devices on a network. It eliminates the need for manual IP configuration, making it easier to manage large networks with many devices. In DHCP, port number 67 is used for the server and 68 is used for the client.

#### **Purpose of DHCP in Mobile Environments:**
- Automatic configuration of IP parameters for mobile devices
- Acquisition of care-of addresses for Mobile IP
- DNS server information and other network parameters
- Subnet mask, default gateway, and domain name configuration

#### **DHCP Operation (Working):**
1. **DHCP Discover**: Client sends a broadcast message to find available DHCP servers.
2. **DHCP Offer**: Server replies with an offer containing IP address and configuration info.
3. **DHCP Request**: Client responds requesting the offered IP address.
4. **DHCP Acknowledgement (ACK)**: Server confirms and assigns the IP address to the client.

![DHCP Operation](https://th.bing.com/th/id/R.4674954ab6cd2c5ba60d11f9c180c1a9?rik=2NR7LfXBV3L%2fiQ&riu=http%3a%2f%2fwww.fiber-optic-cable-sale.com%2fwp-content%2fuploads%2f2018%2f10%2fdhcp-process.png&ehk=03febuTer9WlS%2bOnKVM%2flaUDeOAbI9AQSMWX9b%2fl0aE%3d&risl=&pid=ImgRaw&r=0)

#### **DHCP Message Format:**
```plaintext
  +---------------------------+
  |   Message Type            |
  +---------------------------+
  |   Transaction ID          |
  +---------------------------+
  |   Client IP Address       |
  +---------------------------+
  |   Your IP Address         |
  +---------------------------+
  |   Server IP Address       |
  +---------------------------+
  |Options (e.g., subnet, DNS)|
  +---------------------------+
```

#### **DHCP Options:**
DHCP supports various options to provide additional configuration parameters. Common options include:
- **Subnet Mask (Option 1):** Defines the network portion of the IP address.
- **Router (Option 3):** Specifies the default gateway for the client.
- **Domain Name Server (Option 6):** Provides DNS server addresses for name resolution.
- **Lease Time (Option 51):** Indicates how long the IP address is valid for the client.

---

## 2. Mobile Ad-hoc Networks (MANETs)

> PYQ: Give a complete description about Mobile Adhoc Networks. (2024, 15 marks)    
> PYQ: What is multicast routing? Explain in detail. (2023, 8 marks)    
> PYQ: Explain operation of Mobile Adhoc Networks. (2021, 7.5 marks)

### 2.1 Introduction to MANETs

Mobile Ad-hoc Networks (MANETs) are self-configuring networks of mobile devices that communicate wirelessly without relying on a fixed infrastructure and centralized administration. They are characterized by their dynamic topology, where nodes can join or leave the network at any time.

#### **Definition:**
  - A collection of autonomous mobile nodes forming a temporary network
  - Operates without pre-established infrastructure or centralized control
  - Nodes act as both hosts and routers (peer-to-peer network)
  - Dynamic topology as nodes move freely and independently

#### **Key Characteristics:**
* **No Fixed Infrastructure**: Operates without centralized access points or routers.
* **Dynamic Topology**: Nodes can freely move, causing frequent changes in network structure.
* **Multi-hop Routing**: Data is forwarded through intermediate nodes to reach distant nodes.
* **Decentralized**: Each node manages routing and network functions independently.
* **Energy-Constrained Devices**: Often operate on battery power (e.g., smartphones, sensors).

#### **Applications of MANETs:**
1. **Military:** Tactical battlefield networks, rapid deployment, soldier communication, unmanned vehicle coordination
2. **Emergency:** Disaster recovery, search and rescue, communication in damaged infrastructure, field hospitals
3. **Civilian/Commercial:** Temporary event networks, vehicle-to-vehicle communication, sensor networks, personal area networks, smart home devices
4. **Remote Areas:** Communication without infrastructure, wildlife monitoring, exploration expeditions
5. **Research:** Testbeds for new protocols, algorithms, and applications in mobile networking

#### **Advantages of MANETs:**
* **Flexibility**: Can be quickly deployed in various environments without infrastructure.
* **Scalability**: Can accommodate a varying number of nodes without requiring significant changes.
* **Cost-Effective**: Reduces the need for expensive infrastructure and maintenance.
* **Robustness**: Can continue functioning even if some nodes fail or leave the network.
* **Self-Configuration**: Nodes can automatically discover and connect to each other without manual configuration.

#### **Challenges of MANETs:**
* **Routing Complexity**: Frequent topology changes make stable routing hard.
* **Security**: Lack of central control increases vulnerability.
* **Limited Bandwidth**: Wireless links have lower capacity and higher error rates.
* **Energy Constraints**: Mobile nodes may have limited battery life.
* **Scalability**: Performance drops as the number of nodes increases.


### 2.2 Routing Challenges in MANETs

Routing in MANETs presents unique challenges due to the dynamic and unpredictable nature of the network. The following are the core challenges faced in routing protocols for MANETs:

#### **Core Challenges:**

1. **Dynamic Topology:** Network connections change frequently as nodes move freely, requiring protocols to adapt quickly to maintain valid routes without central coordination.

2. **Limited Resources:** Mobile devices operate with constrained bandwidth, battery power, and processing capabilities, demanding efficient protocols that minimize overhead.

3. **Wireless Medium Issues:** Radio signals face interference, fading, and asymmetric connectivity problems, while hidden/exposed terminal issues complicate reliable transmissions.

4. **Scalability:** As network size increases, maintaining accurate routing information becomes challenging with unacceptable growth in control traffic overhead.

5. **Security Vulnerabilities:** The open wireless medium and lack of centralized authority make MANETs susceptible to various attacks including eavesdropping, spoofing, and routing disruptions.

6. **Mobility Management:** Varying speeds and movement patterns cause frequent topology changes, requiring protocols to balance route stability with quick adaptation.

7. **QoS Support:** Delivering consistent service levels is difficult with fluctuating link quality and network conditions, especially for delay-sensitive applications.

### 2.3 MANET Routing Protocols

MANET routing protocols are specifically designed to address the unique challenges of mobile ad-hoc networks. They can be classified based on various criteria, including their routing mechanisms, network structure, and route maintenance strategies.

#### **Classification of MANET Routing Protocols:**

```
MANET Routing Protocols
|
|-> Based on Route Discovery Mechanism
|   |-> Proactive (Table-Driven)
|   |-> Reactive (On-Demand)
|   |-> Hybrid
|
|-> Based on Network Structure
|   |-> Flat Routing
|   |-> Hierarchical Routing
|   |-> Geographic Position Assisted Routing
|
|-> Based on Route Maintenance
    |-> Static Routing
    |-> Dynamic Routing
    |-> Flow-Oriented Routing
```

  1. **Based on Route Discovery Mechanism:**
     - **Proactive (Table-Driven):** Maintain routes to all destinations at all times
     - **Reactive (On-Demand):** Discover routes only when needed
     - **Hybrid:** Combine proactive and reactive approaches

  2. **Based on Network Structure:**
     - **Flat Routing:** All nodes play equal roles
     - **Hierarchical Routing:** Nodes organized into clusters or zones
     - **Geographic Position Assisted Routing:** Uses location information

  3. **Based on Route Maintenance:**
     - **Static Routing:** Routes remain fixed until topology changes
     - **Dynamic Routing:** Routes updated periodically or based on conditions
     - **Flow-Oriented Routing:** Routes established along data flows

#### **Based on Route Discovery Mechanism:**
Routing protocols in MANETs are mainly classified based on **when** and **how** routes are discovered and maintained.

#### 1. **Proactive (Table-Driven) Routing Protocols**

* **Maintain up-to-date routing tables** for all nodes, regardless of need.
* Low latency but **high overhead** due to frequent updates.

**Examples**:
* **DSDV** (Destination-Sequenced Distance Vector)
* **OLSR** (Optimized Link State Routing)
* **WRP** (Wireless Routing Protocol)

**Pros**:
* Immediate route availability
* Good for small or less dynamic networks

**Cons**:
* High control message overhead
* Wastes bandwidth in rapidly changing networks

#### 2. **Reactive (On-Demand) Routing Protocols**

* **Routes are created only when needed**.
* Lower overhead, but may have higher initial delay.

**Examples**:
* **AODV** (Ad hoc On-Demand Distance Vector)
* **DSR** (Dynamic Source Routing)
* **TORA** (Temporally Ordered Routing Algorithm)

**Pros**:
* Efficient use of bandwidth
* Scales well in large, dynamic networks

**Cons**:
* Route discovery latency
* Flooding can cause congestion

#### 3. **Hybrid Routing Protocols**
* Combine features of proactive and reactive protocols.
* **Maintain local routes proactively**, and **discover distant routes on-demand**.
**Examples**:
* **ZRP** (Zone Routing Protocol)
* **SHARP** (Sharp Hybrid Adaptive Routing Protocol)

**Pros**:
* Balanced performance in large networks
* Reduces control overhead and delay

**Cons**:
* More complex to implement
* Optimal zone size is difficult to define

#### **Comparison of Routing Protocols:**

| Protocol Type | Route Discovery | Overhead | Latency | Examples   |
| ------------- | --------------- | -------- | ------- | ---------- |
| **Proactive** | Pre-built       | High     | Low     | DSDV, OLSR |
| **Reactive**  | On-demand       | Low      | High    | AODV, DSR  |
| **Hybrid**    | Both            | Medium   | Medium  | ZRP, SHARP |


### 2.4 Destination Sequenced Distance Vector (DSDV)

Destination Sequenced Distance Vector (DSDV) is a proactive routing protocol designed for mobile ad-hoc networks. It is based on the traditional distance vector routing algorithm but incorporates enhancements to address the unique challenges of mobile environments.

- **Origin and Overview:**
  - Developed by Charles Perkins and Pravin Bhagwat in 1994
  - Based on traditional Bellman-Ford Distance Vector algorithm
  - Enhanced with sequence numbers to prevent routing loops
  - Table-driven protocol that maintains routes to all destinations

- **Key Features and Mechanisms:**

  1. **Sequence Numbering System:**
     - Each route entry includes a sequence number
     - Originated by the destination node
     - Even numbers for valid routes from destinations
     - Odd numbers for infinity metric (unreachable)
     - Higher sequence numbers indicate fresher routes
     - Prevents formation of routing loops
     - Resolves count-to-infinity problem

  2. **Routing Table Structure:**
     - **Destination Address:** Address of the target node
     - **Next Hop:** Address of next node to forward packets to
     - **Number of Hops:** Distance metric to destination
     - **Sequence Number:** Indicates freshness of route
     - **Installation Time:** When entry was added/updated
     - **Stability Data:** Information for dampening fluctuations

  3. **Update Mechanisms:**
     - **Full Dump:** Complete routing table exchange (infrequent)
     - **Incremental Updates:** Only changed entries (more frequent)
     - Updates triggered by significant changes in topology
     - Periodic updates at regular intervals
     - Updates include destination address, hop count, sequence number

  4. **Route Selection and Updates:**
     - Routes with higher sequence numbers always preferred
     - If sequence numbers equal, route with better metric chosen
     - Updates propagate hop by hop throughout network
     - Each node increments hop count before forwarding
     - Settling time used to avoid propagating unstable routes

- **DSDV Operation Example:**
  1. Each node maintains a routing table with all possible destinations
  2. Nodes periodically broadcast their routing tables to neighbors
  3. Receiving nodes update their tables based on sequence numbers and metrics
  4. If a node detects a broken link, it sets metric to infinity and increments sequence number
  5. This update propagates through the network, triggering route recalculation

- **Advantages of DSDV:**
  - **Loop-free:** Guaranteed through sequence numbering
  - **Reduced Convergence Time:** Compared to traditional distance vector
  - **Simple Implementation:** Based on well-understood algorithm
  - **No Route Discovery Delay:** Routes available immediately
  - **Consistent View:** Each node has complete routing information

- **Limitations of DSDV:**
  - **Scalability Issues:** Overhead increases with network size
  - **Slow Response to Failures:** Depends on update interval
  - **Bandwidth Waste:** Regular updates regardless of traffic
  - **No Multipath Routing:** Only single path maintained per destination
  - **Resource Usage:** Requires storage for complete routing table

- **Optimizations and Variants:**
  - **Triggered Updates:** Immediate propagation of critical changes
  - **Route Settling Time:** Delay to avoid fluctuations
  - **Update Filtering:** Only propagate best routes
  - **I-DSDV:** Improved DSDV with intelligent update decisions
  - **AODV:** On-demand protocol that builds on DSDV concepts


### 2.5 Dynamic Source Routing (DSR)

DSR is a reactive (on-demand) routing protocol designed for mobile ad-hoc networks. It allows nodes to dynamically discover and maintain routes to other nodes in the network without requiring periodic updates or a fixed routing table.

#### **Core Concept:**
- Complete route from source to destination determined by source node
- Route information carried in packet headers (source routing)
- No need for intermediate nodes to maintain up-to-date routing information
- Routes discovered only when needed (on-demand)

#### **Key Components and Mechanisms:**

1. **Route Discovery Process:**
- Source checks route cache, broadcasts Route Request (RREQ) if needed
- RREQ contains request ID, source/destination addresses, and node record
- Intermediate nodes add their address and forward RREQ
- Route Reply (RREP) generated when destination found, sent back to source

2. **Route Maintenance:**
- Nodes monitor links during transmission
- Route Error (RERR) sent when link failure detected
- Source removes failed routes from cache
- Acknowledgment options: link-layer, passive, or network-layer

3. **Route Cache:**
- Stores discovered routes to reduce overhead
- Multiple routes per destination possible
- Sources: direct discoveries, overheard routes, forwarded packets
- Stale routes removed through timeouts

#### **Optimizations:**
  - **Caching Strategies:** Path, link, or adaptive caching with timeouts
- **Reply from Cache:** Intermediate nodes answer if route known
- **Salvaging:** Using alternative routes for link failures
- **Gratuitous Route Repair:** Proactive removal of broken routes
- **Non-propagating RREQ:** Limited hop count for initial requests

#### **Advantages of DSR:**
- **No Periodic Updates:** Reduces overhead in low-traffic conditions
- **Route Caching:** Leverages overheard routing information
- **Multiple Routes:** Can maintain several paths to destinations
- **Loop-Free Routing:** Guaranteed by full path knowledge
- **Support for Unidirectional Links:** Through source routing
- **No Hello Messages:** No neighbor detection overhead

#### **Limitations of DSR:**
- **Header Overhead:** Route information in each packet
- **Scalability Issues:** Performance degrades in large networks
- **Increased Delay:** Initial route discovery takes time
- **Cache Staleness:** Mobility can invalidate cached routes
- **Lack of Mechanism to Purge Invalid Routes:** Can lead to routing failures


### 2.6 Hierarchical Routing Algorithms

Hierarchical routing algorithms are designed to improve the scalability and efficiency of routing in large mobile ad-hoc networks (MANETs) by organizing nodes into a hierarchical structure. This approach reduces routing overhead, improves scalability, and localizes the effects of mobility.

#### **Concept and Motivation:**
  - Organizing network into hierarchical structure
  - Reducing routing overhead and table size
  - Improving scalability for large networks
  - Localizing effects of mobility
  - Efficient resource utilization

#### **General Approaches to Hierarchical Routing:**
Hierarchical routing organizes nodes into structured groups to improve efficiency and scalability in large MANETs. Three main approaches are used:

1. **Clustering-Based Hierarchical Routing:**
  - Network is divided into clusters (groups of nearby nodes)
  - Each cluster has a designated leader called cluster head (CH)
  - Special nodes called gateways connect different clusters
  - Regular nodes communicate through their cluster head
  
  **Node Roles:**
  - **Cluster Head:** Manages cluster, tracks members, coordinates communication
  - **Gateway Node:** Connects multiple clusters, forwards inter-cluster traffic
  - **Regular Node:** Simple member that communicates primarily with its cluster head

  **Clustering Methods:**
  - **ID-Based:** Node with lowest/highest ID becomes cluster head
  - **Connectivity-Based:** Node with most neighbors becomes head
  - **Mobility-Based:** Least mobile (most stable) nodes become heads
  - **Energy-Based:** Nodes with most battery power become heads
  - **Weight-Based:** Uses combination of factors (connectivity, energy, stability)

  **How It Works:**
  - Inside clusters: Usually proactive routing (complete routes maintained)
  - Between clusters: Communication through gateway nodes
  - Addresses can include cluster information (hierarchical addressing)

  **Popular Protocols:**
  - Cluster-Based Routing Protocol (CBRP)
  - Hierarchical State Routing (HSR)
  - Clusterhead Gateway Switch Routing (CGSR)

2. **Zone-Based Hierarchical Routing:**
  - Each node has its own routing zone (typically based on hop count)
  - Zones overlap throughout the network
  - No formal cluster head election needed
  - Different routing approaches used within and outside zones

  **Key Features:**
  - Distributed control with no central coordination
  - Flexible zone sizes that adapt to network conditions
  - Smooth transition between routing strategies
  - Each node maintains its own personalized network view

  **How It Works:**
  - Within zone: Proactive routing (complete information maintained)
  - Outside zone: Reactive routing (discover routes only when needed)
  - Border nodes help with routing between zones
  - Zone knowledge improves route discovery efficiency

  **Popular Protocols:**
  - Zone Routing Protocol (ZRP)
  - Zone-based Hierarchical Link State (ZHLS)
  - Landmark Ad Hoc Routing (LANMAR)

3. **Multi-Level Hierarchical Routing:**
  - Creates three or more levels of hierarchy
  - Each level summarizes information from levels below
  - Uses structured addressing similar to IP subnetting
  - Dramatically improves scalability for large networks
  - Examples include Hierarchical OLSR (HOLSR) and Extended Hierarchical State Routing (EHSR)

#### **Benefits of Hierarchical Routing:**
- **Less Control Traffic:** Updates stay within groups instead of flooding the whole network
- **Smaller Routing Tables:** Nodes only need to know detailed routes to nearby devices
- **Works in Larger Networks:** Can support many more nodes than flat routing
- **Uses Resources Wisely:** Assigns roles based on what each device can handle
- **Faster Updates:** Network changes only affect small areas, not everything
- **Better Traffic Flow:** More efficient handling of data between different areas

#### **Challenges and Limitations:**
- **Costs of Organization:** Creating and maintaining groups requires extra work
- **Vulnerable Points:** If important nodes fail, large parts of the network can be affected
- **Uneven Workloads:** Some nodes may get overloaded with routing duties
- **Group Size Problems:** Determining how big groups should be and who belongs where
- **Border Issues:** Managing communication between different groups efficiently
- **Handling Movement:** Dealing with nodes that move from one group to another


### 2.7 Performance Metrics for MANET Routing

Evaluating the effectiveness of MANET routing protocols requires specific performance metrics that address the unique challenges and requirements of mobile ad-hoc networks:

#### **Core Performance Metrics:**

1. **Packet Delivery Ratio (PDR):**
  - Percentage of packets successfully delivered to destinations
  - Higher values indicate better reliability
  - Critical for assessing protocol effectiveness under mobility
  - Calculated as: (Received Packets / Sent Packets) × 100%
  - Ideal value: 100% (all packets delivered successfully)

2. **End-to-End Delay:**
  - Average time taken for packets to travel from source to destination
  - Includes all delays: route discovery, queuing, transmission, propagation
  - Lower values preferred, especially for real-time applications
  - Measured in milliseconds or seconds

3. **Routing Overhead:**
  - Control traffic required to establish and maintain routes
  - Usually measured as ratio of control packets to data packets
  - Alternatively measured as absolute number of control bytes
  - Lower values indicate more efficient protocols

4. **Throughput:**
  - Effective data transfer rate achieved by the network
  - Measured in bits per second or packets per second
  - Higher values indicate better network utilization
  - Must be considered alongside other metrics

#### **Additional Assessment Metrics:**

1. **Route Acquisition Time:**
  - Delay between route request initiation and route determination
  - Critical for reactive protocols
  - Lower values enable faster communication setup
  - May vary widely based on network size and mobility

2. **Energy Consumption:**
  - Battery power used for routing operations
  - Important for energy-constrained devices
  - Measured in Joules or percentage of battery life consumed
  - Lower values preferred

---

## 3. Mobile Transport Layer

> PYQ: What are the advantages of TCP over ad-hoc networks? (2023, 8 marks)   
> PYQ: Explain briefly about TCP with neat diagram. (2023, 7 marks)   
> PYQ: Draw the diagram for TCP connection. (2022, 10 marks)    
> PYQ: What are the advantages of TCP? (2022, 5 marks)

The transport layer in mobile networks is responsible for providing reliable data transfer, flow control, and congestion management. It plays a crucial role in ensuring efficient communication between mobile devices and the network.

### 3.1 Transmission Control Protocol (TCP)

The Transmission Control Protocol (TCP) is a core protocol of the Internet Protocol Suite, providing reliable, ordered, and error-checked delivery of data between applications running on hosts communicating over an IP network. It is widely used in various applications, including web browsing, email, file transfer, and more.

#### **Core Features of TCP:**
1. **Connection-Oriented:** Establishes a reliable connection between sender and receiver before data transfer.
2. **Reliable Data Transfer:** Ensures data is delivered accurately and in order using acknowledgments and retransmissions.
3. **Flow Control:** Manages the rate of data transmission to prevent overwhelming the receiver's buffer.
4. **Congestion Control:** Adjusts the transmission rate to avoid network congestion and packet loss.
5. **Error Detection and Correction:** Uses checksums to detect corrupted segments and retransmits them if necessary.
6. **Segmentation and Reassembly:** Divides large messages into smaller segments for transmission and reassembles them at the destination.
7. **Three-Way Handshake:** Establishes a connection using a three-step process (SYN, SYN-ACK, ACK) to synchronize sequence numbers.
8. **Four-Way Termination:** Closes a connection using a four-step process (FIN, ACK, FIN, ACK) to ensure all data is transmitted and acknowledged.

#### **Working of TCP:**
TCP communication works in Client/Server model. The client initiates the connection and the server either accepts or rejects it. Three-way handshaking is used for connection establishment and four-way handshaking is used for connection termination.

##### **Connection Establishment:**
   - Initiated using a three-way handshake:
     1. **SYN:** Client sends a SYN packet to the server to initiate a connection.
     2. **SYN-ACK:** Server responds with a SYN-ACK packet, acknowledging the request.
     3. **ACK:** Client sends an ACK packet to confirm the connection.

     ![3 Way Handshake](https://velog.velcdn.com/images/cabbage/post/229a87ff-27ec-4c0c-b520-fa1627d533ec/image.png)
     
##### **Connection Termination:**
   - Initiated using a four-way termination process:
      1. **FIN:** One endpoint sends a FIN packet to indicate it has finished sending data.
      2. **ACK:** The other endpoint acknowledges the FIN with an ACK packet.
      3. **FIN:** The second endpoint sends its own FIN packet to indicate it has also finished sending data.
      4. **ACK:** The first endpoint acknowledges the second FIN with an ACK packet.

      ![4 Way Handshake](https://velog.velcdn.com/images/cabbage/post/72c9547b-467a-4c91-a0a8-e29d8d725cf8/image.png)

#### **TCP Header Structure:**
Each TCP header has 10 required fields totaling 20 bytes (160 bits) in size. It can optionally include an additional data field up to 40 bytes in size.

![TCP Header Structure](https://www.lifewire.com/thmb/rEL9gt5T_OCxkdhuVhRdZwjkD-I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tcp-headers-f2c0881ea4c94e919794b7c0677ab90a.jpg)


#### **Advantages of TCP**
1. **Reliable Data Delivery**: TCP ensures that data is delivered accurately and in the correct order, using acknowledgments and retransmissions for lost segments.
2. **Flow Control**: The sliding window mechanism allows TCP to manage the rate of data transmission, preventing buffer overflow at the receiver.
3. **Congestion Control**: TCP adapts to network conditions, reducing the transmission rate during congestion to avoid packet loss.
4. **Error Detection and Correction**: TCP uses checksums to detect errors in transmitted segments, ensuring data integrity.
5. **Connection-Oriented**: TCP establishes a reliable connection before data transfer, providing a stable communication channel.
6. **Widely Supported**: TCP is a standard protocol supported by most operating systems and applications, ensuring compatibility across different platforms.
7. **Segmentation and Reassembly**: TCP can handle large messages by breaking them into smaller segments, which are reassembled at the destination.

#### **Disadvantages of TCP**
1. **Overhead**: TCP's reliability mechanisms introduce additional overhead, including headers for each segment and control messages, which can reduce throughput.
2. **Latency**: The connection establishment and termination processes (three-way handshake and four-way termination) can introduce delays, especially in high-latency networks.
3. **Congestion Control Delays**: TCP's congestion control algorithms can lead to reduced throughput during periods of network congestion, as it slows down transmission to avoid further packet loss.
4. **Resource Intensive**: TCP requires more resources (memory and processing power) compared to simpler protocols like UDP, making it less suitable for resource-constrained devices.


### 3.2 Limitations of TCP in Mobile Environments
While TCP is a robust protocol for reliable data transfer, it faces several limitations in mobile environments, particularly due to the dynamic nature of mobile networks, frequent disconnections, and varying network conditions. These limitations can significantly impact the performance and reliability of TCP in such scenarios.

#### **Core Limitations of TCP in Mobile Environments:**

1. **High Latency:** Mobile networks have higher delays, affecting TCP's timing-based mechanisms
2. **Frequent Disconnections:** TCP struggles with frequent connection losses when devices move between coverage areas.
3. **Wireless Errors:** TCP misinterprets wireless packet losses as congestion, reducing speed unnecessarily.
4. **Increased Overhead:** TCP's reliability mechanisms add extra data traffic, consuming limited mobile bandwidth
5. **Poor Congestion Control:** TCP's algorithms don't adapt well to rapidly changing mobile network conditions.
6. **Resource Constraints:** Mobile devices have limited memory for TCP buffers and processing power, making it hard to maintain large TCP connections.
7. **Handover Problems:** Moving between networks disrupts TCP connections, leading to delays and potential data loss.
8. **Security Challenges:** Mobile networks in TCP face more security threats than wired networks like eavesdropping, spoofing, and denial-of-service attacks.

To address these limitations in mobile environments, various enhancements to standard TCP have been proposed, such as Indirect TCP (I-TCP), Snooping TCP, and Mobile TCP (M-TCP).

### 3.3 Indirect TCP (I-TCP)

Indirect TCP (I-TCP) is a modified version of the standard TCP protocol designed to improve performance in mobile environments by splitting the TCP connection into two separate segments. This approach addresses many of the limitations that standard TCP faces in wireless and mobile networks.

#### **Architecture and Concept:**

Indirect TCP divides a standard end-to-end TCP connection into two independent TCP connections:
1. **Fixed Host ↔ Mobile Support Station (MSS)** - Wired connection
2. **Mobile Support Station (MSS) ↔ Mobile Host** - Wireless connection

The Mobile Support Station (MSS) acts as an intermediary that handles the complexities of the wireless link while maintaining standard TCP behavior on the wired portion of the network.

#### **I-TCP Architecture Diagram:**
```
Fixed Host (FH) ←→ Mobile Support Station (MSS) ←→ Mobile Host (MH)
     |                        |                        |
 [TCP Connection 1]      [TCP Proxy]           [TCP Connection 2]
  (Wired Network)                              (Wireless Network)
```

#### **How I-TCP Works:**

1. **Connection Splitting:**
   - Original TCP connection is split at the Mobile Support Station (MSS)
   - MSS maintains two separate TCP connections simultaneously
   - Each connection uses parameters optimized for its medium

2. **Data Flow Process:**
   - Data from Fixed Host is received by MSS via standard TCP
   - MSS stores data temporarily in its buffer
   - MSS forwards data to Mobile Host using wireless-optimized TCP
   - Acknowledgments flow back through both connections

3. **Handover Management:**
   - When mobile host moves to new cell, only wireless connection needs to be re-established
   - Wired connection remains intact
   - MSS buffers data during handover to prevent loss

4. **Error Handling:**
   - Wireless errors are handled locally between MSS and Mobile Host
   - Wired connection remains unaffected by wireless transmission problems

#### **Key Features:**
1. **Connection Independence:** Wired and wireless segments operate independently with different TCP parameters, isolating wireless problems from the wired network.
2. **Optimized Parameters:** Wired connection uses standard TCP while wireless connection uses modified TCP with wireless-specific optimizations.
3. **Buffering at MSS:** MSS maintains buffers to store data during transmission, helping during handovers and temporary disconnections.
4. **Transparent Operation:** Fixed host uses standard TCP implementation with no changes required to existing applications.

#### **Advantages of I-TCP:**
1. **Improved Performance:** Wireless-specific optimizations reduce the impact of wireless errors on overall connection.
2. **Better Handover Support:** Faster recovery during cell transitions with reduced packet loss.
3. **Flexibility:** Different TCP variants can be used on each segment with easy implementation of wireless enhancements.
4. **Isolation of Problems:** Wireless issues don't affect wired connection with independent error recovery.
5. **Backward Compatibility:** Works with existing TCP applications without modifications to fixed hosts.

#### **Disadvantages of I-TCP:**
1. **Loss of End-to-End Semantics:** TCP's reliability guarantee is broken as MSS failure can cause data loss after acknowledgment.
2. **Increased Complexity:** MSS must maintain separate TCP connections with more complex state management.
3. **Potential Bottleneck:** MSS can become a performance bottleneck and single point of failure.
4. **Additional Latency:** Extra processing delay at MSS as data must be buffered and forwarded.
5. **Memory Requirements:** MSS needs significant buffer space for multiple mobile connections.

#### **Use Cases:**
1. **Cellular Networks:** Mobile phone data connections
2. **Satellite Communication:** High-latency wireless links
3. **Wireless LANs:** Mobile devices in enterprise networks
4. **Vehicular Networks:** Communication in moving vehicles
5. **IoT Applications:** Sensor networks with wireless connectivity

### 3.4 Snooping TCP

> PYQ: Snooping (2023, 2.5 marks)   
> PYQ: What do you understand by Snooping TCP? Explain in detail. (2021, 7.5 marks)

Snooping TCP is an enhancement to the standard TCP protocol designed to improve performance in wireless and mobile networks by introducing intelligent monitoring and caching at intermediate nodes, particularly at base stations or access points. This approach addresses TCP's poor performance over wireless links without breaking the end-to-end semantics of TCP.

#### **Architecture and Concept:**

Snooping TCP places a "TCP-aware" snooping agent at the base station or wireless access point that monitors (snoops on) TCP traffic flowing between mobile hosts and fixed hosts. The snooping agent maintains a cache of TCP segments and can perform local retransmissions when necessary, improving overall performance while preserving TCP's end-to-end reliability guarantees.

#### **Snooping TCP Architecture Diagram:**
```
Fixed Host (FH) ←→ Base Station/Access Point ←→ Mobile Host (MH)
     |              (with Snooping Agent)           |
 [Standard TCP]           [TCP Monitor]        [Standard TCP]
  (Wired Network)        [Local Cache]       (Wireless Network)
                         [Smart Retrans]
```

#### **How Snooping TCP Works:**

1. **Traffic Monitoring:**
   - Snooping agent monitors all TCP packets flowing in both directions
   - Maintains state information about active TCP connections
   - Tracks sequence numbers, acknowledgments, and window sizes
   - Caches unacknowledged TCP segments locally

2. **Downlink (Fixed Host → Mobile Host):**
   - Agent caches TCP segments sent from fixed host to mobile host
   - Monitors acknowledgments from mobile host
   - If duplicate ACKs or timeouts indicate packet loss on wireless link
   - Agent performs local retransmission from its cache instead of waiting for end-to-end timeout
   - Original sender remains unaware of wireless link problems

3. **Uplink (Mobile Host → Fixed Host):**
   - Agent monitors TCP segments from mobile host
   - Detects losses on wireless link through sequence number gaps
   - Sends local negative acknowledgments (NAKs) to mobile host
   - Mobile host retransmits lost segments quickly
   - Agent forwards segments to fixed host only after successful reception

4. **Cache Management:**
   - Maintains cached segments until corresponding ACKs received from mobile host
   - Implements timeout mechanisms for cache cleanup
   - Manages memory efficiently to handle multiple connections

#### **Key Features:**

1. **Transparent Operation:**
  - Works without modifying TCP on end hosts, preserving end-to-end semantics
2. **Local Error Recovery:**
  - Quickly recovers from wireless errors without waiting for end-to-end retransmission
3. **Connection State Tracking:**
  - Monitors TCP connections by maintaining sequence numbers and acknowledgment data
4. **Selective Intervention:**
  - Only acts when wireless problems occur, distinguishing them from congestion issues

#### **Advantages of Snooping TCP:**

1. **Improved Performance:** Reduces delays and increases throughput over wireless links
2. **Transparency:** Works with existing TCP implementations without modifications
3. **Preserves End-to-End Semantics:** Maintains TCP's reliability guarantees and data integrity
4. **Efficient Resource Usage:** Reduces bandwidth consumption through fewer retransmissions
5. **Scalability:** Handles multiple connections with moderate resource requirements

#### **Disadvantages of Snooping TCP:**
1. **Processing Overhead:** Requires additional computation and memory at the base station
2. **Limited Scope:** Only addresses wireless link problems, not end-to-end issues
3. **State Maintenance Complexity:** Must track connection states, which becomes complex with many users
4. **Potential for Interference:** Local actions might disrupt normal TCP flow control
5. **Implementation Challenges:** Requires base station modifications with careful timing considerations

#### **Use Cases:**
1. **Cellular Networks:** 3G/4G/5G data connections with high error rates
2. **Wireless LANs:** Enterprise and public WiFi networks
3. **Satellite Communication:** High-latency, error-prone links
4. **Hybrid Networks:** Mixed wired/wireless infrastructure
5. **IoT Applications:** Sensor networks with unreliable wireless connectivity

#### **Variants and Extensions:**
1. **Enhanced Snooping TCP:** Improved loss detection algorithms, better cache management, fast handover support, energy-aware optimizations
2. **Selective Snooping:** Monitors only specific traffic types, makes application-aware decisions, applies QoS-based policies, enables dynamic control
3. **Cooperative Snooping:** Coordinates multiple snooping agents, shares information between base stations, supports seamless handovers, manages distributed caching

### 3.5 Mobile TCP (M-TCP)

Mobile TCP (M-TCP) is an enhanced version of the traditional TCP protocol specifically designed to address the challenges of wireless and mobile networks. It aims to improve TCP performance in environments where mobile hosts frequently disconnect and reconnect, such as cellular networks and wireless LANs.

#### **Architecture and Concept:**

M-TCP uses a split-connection approach similar to Indirect TCP but with important differences in how it handles mobility and connection management. The key innovation is the ability to "freeze" connections during periods of disconnection rather than terminating them.

#### **M-TCP Architecture Diagram:**
```
Fixed Host (FH) ←→ Mobile Support Station (MSS) ←→ Mobile Host (MH)
     |                        |                        |
 [Standard TCP]          [M-TCP Proxy]           [M-TCP Client]
  (Wired Network)        [Connection Mgmt]      (Wireless Network)
                         [State Freezing]
```

#### **How M-TCP Works:**

1. **Connection Splitting:**
   - TCP connection split into two parts at Mobile Support Station (MSS)
   - Fixed Host ↔ MSS: Standard TCP connection
   - MSS ↔ Mobile Host: Modified TCP with mobility support
   - MSS acts as a proxy maintaining both connections

2. **Connection State Management:**
   - MSS monitors the wireless connection quality
   - When disconnection is imminent or detected, MSS "freezes" the connection
   - Advertises zero window size to Fixed Host to stop data transmission
   - Maintains connection state during disconnection period
   - Resumes transmission when Mobile Host reconnects

3. **Mobility Handling:**
   - Mobile Host can move between different networks
   - Connection state preserved at MSS during handovers
   - No need to re-establish end-to-end connection
   - Seamless reconnection when mobile host comes back online

4. **Disconnection Management:**
   - Graceful handling of planned and unplanned disconnections
   - Connection frozen rather than terminated
   - Buffering of data during disconnection periods
   - Automatic resumption when connectivity restored

#### **Key Features:**
1. **Connection Persistence:** Maintains TCP connections across disconnections, preserving application state without requiring reconnection.
2. **Intelligent Disconnection Detection:** Monitors signal strength, predicts disconnections, and reduces unnecessary timeouts.
3. **Zero Window Advertisement:** Uses TCP's flow control to pause Fixed Host transmission during disconnection without requiring protocol changes.
4. **Adaptive Buffering:** Dynamically manages buffers at MSS to store data during disconnections and prevent data loss.

#### **M-TCP Operation Phases:**
1. **Normal Operation Phase:** Both connections active with normal data flow and standard TCP behavior.
2. **Disconnection Detection Phase:** MSS detects deteriorating connection and gradually reduces advertised window size.
3. **Disconnection Phase:** MSS advertises zero window to Fixed Host, stops new data, and maintains connection state.
4. **Reconnection Phase:** Mobile Host reconnects, MSS verifies identity, and resumes data transmission from buffer.

#### **Advantages of M-TCP:**
1. **Seamless Mobility Support:** Maintains connections across network changes without application-level reconnection.
2. **Improved Performance:** Reduces connection setup delays and eliminates unnecessary timeouts during disconnections.
3. **Application Transparency:** Works with existing applications without modifications to standard TCP interface.
4. **Energy Efficiency:** Reduces retransmissions and control traffic, allowing devices to enter sleep mode.
5. **Flexible Deployment:** Implementable at base stations with support for multiple mobile hosts simultaneously.

#### **Disadvantages of M-TCP:**
1. **Loss of End-to-End Semantics:** TCP reliability guarantee broken at MSS with potential data loss if MSS fails.
2. **Increased Complexity:** Requires sophisticated state management and connection tracking at MSS.
3. **Resource Requirements:** Needs significant buffer space and processing power that scales with user count.
4. **Dependence on Infrastructure:** Requires M-TCP capable infrastructure with single point of failure at MSS.
5. **Prediction Accuracy:** Performance depends on accurate disconnection prediction with risk of false predictions.

#### **Use Cases and Applications:**
1. **Mobile Computing:** Laptop users moving between WiFi networks with intermittent connectivity.
2. **Cellular Data Services:** Smartphone applications requiring persistent connections despite signal fluctuations.
3. **Vehicular Networks:** In-car internet connectivity with changing network conditions.
4. **IoT and Sensor Networks:** Mobile sensors and wearable devices with power management needs.
5. **Emergency and Military Networks:** First responder communication systems in challenging environments.

#### **Variants and Enhancements:**
1. **Enhanced M-TCP:** Improved prediction algorithms with better buffer management strategies.
2. **Adaptive M-TCP:** Dynamic adjustments based on network conditions and application awareness.
3. **Secure M-TCP:** Enhanced security mechanisms with encrypted state transfer and authentication.
  
#### **Comparison of all TCP Variants:**

| Aspect | Standard TCP | Indirect TCP | Snooping TCP | Mobile TCP |
|--------|-------------|--------------|--------------|------------|
| Connection Model | End-to-end | Split | End-to-end | Split |
| Disconnection Handling | Poor | Poor | Limited | Excellent |
| Mobility Support | None | Limited | Limited | Excellent |
| End-to-end Semantics | Preserved | Lost | Preserved | Lost |
| Implementation Complexity | Low | Medium | Medium | High |
| Application Changes | None | None | None | None |
| Performance in Mobile | Poor | Good | Good | Excellent |

### 3.6 Fast Retransmission/Fast Recovery TCP

> PYQ: Explain Fast Retransmission and Fast Recovery in TCP. (2024, 7.5 marks)

Fast Retransmission and Fast Recovery are key enhancements to TCP designed to improve performance by providing more efficient handling of packet loss, particularly in wireless and mobile environments. These mechanisms help TCP recover more quickly from packet losses without unnecessarily reducing the transmission rate when congestion is not the cause.

#### **Fast Retransmission**

Fast Retransmission is a mechanism that allows TCP to detect and recover from lost segments more quickly than waiting for timeout expiration.

##### **How Fast Retransmission Works:**

1. **Duplicate ACK Detection:**
   - When a segment is lost, subsequent segments trigger duplicate ACKs from the receiver
   - The receiver sends duplicate ACKs because it continues receiving out-of-order segments
   - Duplicate ACKs indicate that packets are still flowing, just not in the expected order

2. **Threshold-Based Retransmission:**
   - After receiving 3 duplicate ACKs (typically), sender immediately retransmits the missing segment
   - No need to wait for retransmission timeout (RTO) to expire
   - Significantly reduces recovery time from packet loss

3. **Sequence Number Tracking:**
   - Sender keeps track of which segments have been acknowledged
   - When duplicate ACKs arrive, sender can identify which segment is likely lost
   - Only the specific lost segment is retransmitted, not all unacknowledged segments

4. **Operation Example:**
   ```
   Sender sends: SEQ 100, 200, 300, 400, 500, 600, 700
   Packet with SEQ 300 is lost
   Receiver ACKs: ACK 200, ACK 200, ACK 200, ACK 200
   After 3 duplicate ACKs, sender retransmits SEQ 300
   Receiver then ACKs: ACK 700 (if all packets received)
   ```

#### **Fast Recovery**

Fast Recovery works in conjunction with Fast Retransmission to maintain higher throughput during packet loss recovery. It prevents the "congestion avoidance" phase from starting with a very small congestion window.

##### **How Fast Recovery Works:**

1. **Congestion Window Adjustment:**
   - After Fast Retransmission is triggered (3 duplicate ACKs)
   - Reduces congestion window to half its current size (not all the way to 1 segment)
   - Artificially inflates congestion window by 1 segment for each duplicate ACK
   - This allows transmission of new segments during recovery

2. **Pipe Management:**
   - Maintains an estimate of how many segments are "in the pipe" between sender and receiver
   - Based on this estimate, sender can continue transmitting new segments
   - Ensures network utilization remains high during recovery

3. **Recovery Exit:**
   - When a non-duplicate ACK arrives (acknowledging new data)
   - Sets congestion window to the reduced value (half of original)
   - Exits recovery phase and returns to congestion avoidance mode
   - Does not go back to slow start phase

4. **Operation Example:**
   ```
   Initial cwnd = 10 segments
   After 3 duplicate ACKs:
   - Retransmit missing segment
   - Set cwnd = 10/2 = 5 segments
   - For each additional duplicate ACK, inflate cwnd by 1
   - Continue sending new segments when allowed by inflated cwnd
   - When recovery ACK arrives, set cwnd = 5 and continue in congestion avoidance
   ```

#### **Combined Algorithm Flow:**

```
1. Normal transmission: Sending segments and receiving ACKs
2. Packet loss occurs
3. Receiver sends duplicate ACKs for last in-order segment
4. After 3 duplicate ACKs:
   a. Fast Retransmission: Immediately retransmit the missing segment
   b. Fast Recovery: 
      - Save cwnd and set ssthresh = cwnd/2
      - Set cwnd = ssthresh + 3 (for the 3 duplicate ACKs)
5. For each additional duplicate ACK:
   - Increment cwnd by 1
   - If allowed by cwnd, transmit a new segment
6. When new data is acknowledged:
   - Set cwnd = ssthresh (the saved half-window value)
   - Resume transmission in congestion avoidance mode
```
#### **Benefits for Mobile and Wireless Networks:**

1. **Reduced Recovery Time:** Fast Retransmission minimizes recovery time from wireless errors, improving throughput without waiting for timeouts.
2. **Better Bandwidth Utilization:** Fast Recovery maintains higher transmission rates during recovery, preventing unnecessary window size reduction.
3. **Distinction Between Congestion and Error Losses:** Duplicate ACKs indicate network is still functioning, suggesting isolated packet loss rather than congestion.
4. **Reduced Latency:** Quick recovery leads to lower latency, critical for interactive and real-time mobile applications.
5. **Smoother Performance:** Less drastic window size changes provide more consistent throughput despite occasional packet losses.

#### **Limitations in Mobile Environments:**

1. **Burst Losses:** Poor performance when multiple consecutive packets are lost during signal fading or handovers.
2. **Reordering Issues:** Network path changes can cause packet reordering, triggering unnecessary retransmissions.
3. **Disconnection Handling:** Not designed for extended disconnections, eventually timing out during longer disruptions.
4. **Energy Efficiency:** Additional transmissions during recovery may increase energy consumption on battery-powered devices.


### 3.7 Transaction-Oriented TCP

> PYQ: Explain Transaction Oriented TCP. (2024, 7.5 marks)

Transaction-Oriented TCP (T/TCP) is a specialized extension of the standard TCP protocol designed specifically to improve the efficiency of client-server transactions that involve small exchanges of data. It addresses the overhead of TCP's connection establishment and termination processes for short-lived connections, which is particularly beneficial in mobile environments.

#### **Core Concept:**
Transaction-Oriented TCP optimizes the standard TCP three-way handshake and connection termination procedures by allowing data to be sent in the initial SYN packet, reducing the typical request-response pattern from 7-9 packet exchanges to as few as 3 packets in ideal conditions.

#### **Key Features:**

1. **Combined Connection Establishment and Data Transfer:**
   - Client sends data along with initial SYN packet (SYN+data)
   - Server can respond with data immediately (SYN+ACK+data)
   - Eliminates the need for separate connection establishment before data transfer
   - Client completes with ACK packet, which may also contain data

2. **Connection Caching Mechanism:**
   - Uses Connection Count (CC) options to maintain information about recent connections
   - Helps server determine if SYN+data packet is from a new connection or duplicate
   - Allows bypassing three-way handshake for repeat connections between same endpoints
   - Reduces latency for frequent client-server interactions

3. **Accelerated TIME_WAIT:**
   - Shortens the TIME_WAIT state from standard 240 seconds to a much lower value
   - Allows quicker release of resources for mobile devices with limited memory
   - Reduces potential for port exhaustion in high-transaction environments
   - More suitable for mobile devices with frequent connections

4. **Simplified API:**
   - Provides a single sendto()/recvfrom() operation for complete transactions
   - Application can use a single system call for the entire request-response cycle
   - Simplifies programming model for transaction-oriented applications
   - Backward compatible with standard socket API

#### **Transaction-Oriented TCP Operation:**

1. **Standard HTTP Request (with regular TCP):**
```
Client                     Server
   |                         |
   |------ SYN ----------->  | (1. Connection request)
   |<----- SYN+ACK -------   | (2. Acknowledgment)
   |------ ACK ----------->  | (3. Connection established)
   |                         |
   |------ HTTP Request -->  | (4. Send request data)
   |<----- ACK -----------   | (5. Acknowledge request)
   |                         |
   |<----- HTTP Response --  | (6. Send response data)
   |------ ACK ----------->  | (7. Acknowledge response)
   |                         |
   |------ FIN ----------->  | (8. Close connection request)
   |<----- ACK -----------   | (9. Acknowledge close)
   |<----- FIN -----------   | (10. Server close connection)
   |------ ACK ----------->  | (11. Acknowledge server close)
```

2. **Same HTTP Request (with T/TCP):**
```
Client                     Server
   |                         |
   |-- SYN+HTTP Request -->  | (1. Connection request with data)
   |                         |
   |<- SYN+ACK+HTTP Response | (2. Acknowledge and respond with data)
   |                         |
   |------ ACK+FIN ------->  | (3. Acknowledge and begin close)
   |                         |
   |<----- ACK+FIN --------  | (4. Acknowledge and complete close)
```

#### **Benefits in Mobile Environments:**

1. **Reduced Latency:** Faster transactions with fewer packets, valuable in high-latency mobile networks, improving responsiveness and user experience.
2. **Lower Overhead:** Fewer packets reduces protocol overhead, bandwidth consumption, and processing requirements on resource-constrained devices.
3. **Energy Savings:** Reduced transmissions mean less radio usage, lower power consumption, and extended battery life for mobile devices.
4. **Resource Conservation:** Shorter connection maintenance requires less memory and processing overhead, improving server scalability.

#### **Limitations and Challenges:**

1. **Security Vulnerabilities:** More susceptible to SYN flooding, sequence number attacks, and session hijacking due to reduced handshake protection.
2. **Compatibility Issues:** Limited implementation in major operating systems and potential interference from middleboxes like firewalls.
3. **Reliability Concerns:** Less robust against packet duplication and reordering, with potential data corruption from connection caching.
4. **Limited Suitability:** Only beneficial for short transactions, with no advantage for long-lived connections or bulk data transfer.

#### **Use Cases:**
1. **Web Services:** Optimizing RESTful APIs and microservices with frequent small transactions.
2. **Mobile Applications:** Enhancing performance of mobile apps that frequently communicate with servers.
3. **IoT Devices:** Reducing overhead for sensor data transmission and control commands in resource-constrained environments.
4. **Real-Time Applications:** Improving responsiveness in applications like online gaming, chat, and live streaming.
   

---

*These notes were compiled by Deepak Modi*    
*Contact: deepakmodidev@gmail.com*
