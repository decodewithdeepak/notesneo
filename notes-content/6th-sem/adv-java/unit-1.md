# Unit 1: Servlet and JSP

**Author: Deepak Modi**    

**Syllabus :**      
**Servlet:** Servlet introduction, web terminology, servlet API, servlet Interface, generic servlet, Http servlet, servlet lifecycle, servlet with IDE (eclipse, My eclipse, Net beans), servlet request, servlet collaboration, servlet configuration, context, attribute in servlet, session technique in servlet, event and listener, servlet filter, CRUD, pagination, input output stream, annotation, single thread model, SSI.       
**JSP:** Lifecycle of JSP, JSPAPI, scripting elements, 9Implicit Objects, directive elements, Exceptions, action elements, expression language, MVC in JSP, JSTL, custom tags, pagination, CRUD,JSTL function, formatting, XML, SQL tags.

## MDU PYQs:
### Servlet

1. **Servlet Short Questions**
    - Generic Servelets (2021, 2.5 marks)
    - Single thread model (2021, 2022, 2.5 marks)
    - HTTP servlets (2022, 2.5 marks)
    - CRUD operations/Define CRUD (2022, 2023, 2.5 marks)
    - What is WAR File? (2023, 2.5 marks)
    - Servlet container (2024, 2.5 marks)

2. **Servlet Lifecycle & Architecture** (2021-2024) - **HIGH PRIORITY**
    - What is Servlet? Explain the life cycle of Servlet. (2021, 2023, 2024, 7-15 marks)
    - Explain architecture of servlets in detail. (2022, 15 marks)
    - Explain how request dispatcher works in servlets? (2023, 8 marks)
    
### JSP

1. **JSP Short Questions**
    - MVC in JSP (2021, 2022, 2.5 marks)
    - What are the advantages of JSP over Servlets? (2023, 2.5 marks)
    - Directive Elements of JSP (2024, 2.5 marks)

2. **JSP Fundamentals & Objects** (2021-2024) - **HIGH PRIORITY**
    - What is JSP Technology? How does it work? Explain JSP Objects/tags/implicit objects. (2021, 2022, 2024, 15 marks)
    - Explain MVC in JSP. (2023, 15 marks)

---

## **Section 1 : Servlet**

### **1.1 Introduction to Servlet**
> PYQ: What is Servlet? Explain the life cycle of Servlet. (2021, 15 marks; 2023, 7 marks; 2024, 15 marks)
> PYQ: Explain architecture of servlets in detail. (2022, 15 marks)

#### ✅ What is a Servlet?
A **Servlet** is a Java class that runs on a web server and handles client requests. It is a server-side component that generates dynamic content, such as HTML pages, XML, or JSON data. Servlets are part of the Java EE (Enterprise Edition) platform and are used to create web applications.

#### ✅ Characteristics of Servlets
- **Server-side**: Runs on the server, not on the client (browser).
- **Platform-independent**: Written in Java, can run on any platform with a Java Virtual Machine (JVM).
- **Dynamic content generation**: Can generate dynamic web pages based on user input or database queries.
- **Reusable**: Can be reused across different web applications.
- **Multi-threaded**: Can handle multiple requests simultaneously using threads.
- **Lifecycle managed by the container**: The servlet container (like Apache Tomcat) manages the lifecycle of servlets.

#### ✅ Why Servlet?
Before servlets, we used:
- **CGI scripts** (Common Gateway Interface) — slow and platform-dependent
- Servlets offer significant advantages:
  - **Faster** and more **efficient** than CGI
  - **Portable** (Java-based, write once, run anywhere)
  - **Scalable** and **multi-threaded** (can handle multiple requests simultaneously)
  - **Reusable** components (can be used in different applications)
  - **Secure** execution in a controlled environment
  - **Easy to maintain** and update

#### ✅ Servlet = Server + Applet
- **Server**: Runs on a web server (like Tomcat, Jetty)
- **Applet**: Java program that runs in a web browser
- Servlets are server-side components that generate dynamic content, similar to applets that run on the client side.

#### ✅ Servlet Architecture
> PYQ: Explain architecture of servlets in detail. (2022, 15 marks)

The servlet architecture is based on the **Java EE** platform and consists of several components that work together to process client requests and generate responses. The architecture can be visualized as follows:

![alt text](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMhwRgnKULfeaGzvlHfxHbaJOlEGcMJ_SS-lhEkcXkxUgv90yHtAUsEWjtx2rAJYbokZEaxSIPy9egmXq3jnXXCcbnmO5tw_UFYYm3N0t9sJL0oA1_zlyd9c-llkAnR1x3gSainCnnXwcv/s1600/Servlet.jpg)

The servlet architecture consists of the following components:
1. **Web Browser**: The client that sends HTTP requests to the server. It can be any web browser (Chrome, Firefox, etc.).
2. **Web Server**: The server that receives requests and sends responses. It hosts the servlet container.
3. **Servlet Container**: The component of the web server that manages servlets. It handles the servlet lifecycle, request/response processing, and communication between servlets and clients.
4. **Servlet**: The Java class that processes requests and generates responses. It implements the `Servlet` interface or extends `HttpServlet`.
5. **Request**: The data sent from the client to the server. It contains information like request method (GET/POST), parameters, headers, etc.
6. **Response**: The data sent from the server back to the client. It contains the response status, headers, and body (HTML, JSON, etc.).
7. **Database**: Optional component for data storage and retrieval. Servlets can interact with databases using JDBC (Java Database Connectivity).

#### ✅ Example Use Cases
- Login authentication
- Form handling (e.g., registration forms)
- Online shopping carts 
- Generating dynamic web pages
- Web services (RESTful APIs)
- Data processing (e.g., file uploads, downloads)

### **1.2 Web Terminology**
> PYQ: Servlet container (2024, 2.5 marks)

Understanding these basic terms will help you follow how servlets work in web applications:

#### **1. Client**
- The **user's browser** (like Chrome, Firefox) that sends HTTP requests to the server. When you click a login button, your browser sends the form data to the server.

#### **2. Server**
- A **machine/program** that listens for client requests and sends responses. Example: Apache Tomcat, which runs your servlets and sends back web pages.

#### **3. Web Container (Servlet Container)**
- A part of the server that **manages servlets**. Responsible for servlet lifecycle, request/response management, and thread management. Examples: **Apache Tomcat**, Jetty, GlassFish.

#### **4. HTTP (HyperText Transfer Protocol)**
- A **stateless protocol** used for communication between client and server. Methods include `GET` (fetch data, e.g., show login form) and `POST` (send data, e.g., submit login form).

#### ✅ **5. URL (Uniform Resource Locator)**
- A **web address** that specifies the location of a resource on the internet. Example: `http://www.example.com/login`.

#### **6. Request**
- The data sent **from the client to the server**, containing URL, HTTP method (GET/POST), form data, and headers. GET requests data from a server, while POST submits data to a server.

#### **7. Response**
- The data sent **from the server back to the client**, which can include HTML pages, JSON data, or status codes (200 OK, 404 Not Found).

#### **8. MIME Type (Multipurpose Internet Mail Extension)**
- Defines the **type of data** sent in the response. Examples: `text/html` for HTML and `application/json` for JSON.

#### **9. Port**
- A **number** used by the server to listen for incoming requests. Example: Tomcat runs on port `8080` by default.

#### **10. Web Application**
- A **collection of web resources** like servlets, HTML pages, and JSPs that runs on a server and interacts with users over the web.

#### **11. Deployment Descriptor (`web.xml`)**
- An XML file located in the `WEB-INF` folder, used to configure a servlet-based web application.

#### **12. Cookie**
- A small piece of data stored on the client-side by the browser to remember information about the user, such as preferences or session IDs.

### **1.3 Servlet API**

The Servlet API is a set of predefined Java classes and interfaces that define how servlets interact with web servers. It provides the necessary methods and classes to create, deploy, and manage servlets.

#### ✅ Main Packages in Servlet API
1. **javax.servlet**: Contains the core classes and interfaces for servlets. Used for both generic and HTTP-specific servlets.
   - `Servlet`: The main interface for all servlets.
   - `ServletRequest`: Represents the request from the client.
   - `ServletResponse`: Represents the response to be sent to the client.
   - `ServletConfig`: Provides configuration information to the servlet.
   - `ServletContext`: Provides information about the web application.

2. **javax.servlet.http**: Contains classes and interfaces for HTTP-specific servlets. Used for handling HTTP requests and responses.
   - `HttpServlet`: The base class for HTTP servlets.
   - `HttpServletRequest`: Extends `ServletRequest` for HTTP-specific methods.
   - `HttpServletResponse`: Extends `ServletResponse` for HTTP-specific methods.
   - `HttpSession`: Represents a session between the client and server.

#### ✅ Key Interfaces
1. **Servlet**: Core interface for all servlets. Defines lifecycle methods like `init()`, `service()`, and `destroy()`.
2. **ServletRequest**: Represents the request from the client. Provides methods to access request parameters, headers, and attributes.
3. **ServletResponse**: Represents the response to be sent to the client. Provides methods to set content type, status code, and write data to the response.
4. **HttpServletRequest**: Extends `ServletRequest` for HTTP-specific methods. Provides methods to access HTTP headers, cookies, and session information.
5. **HttpServletResponse**: Extends `ServletResponse` for HTTP-specific methods. Provides methods to set response headers, status codes, and write data to the response.
6. **ServletConfig**: Provides configuration information to the servlet. Used to retrieve initialization parameters defined in `web.xml`.
7. **ServletContext**: Provides information about the web application. Used to share data between servlets and access application-wide resources.
8. **HttpSession**: Represents a session between the client and server. Used to store user-specific data across multiple requests.

#### ✅ Key Classes
1. **GenericServlet**: An abstract class that implements the `Servlet` interface and simplifies servlet creation by providing default implementations for most methods. It is protocol-independent and can be used for any type of servlet.
2. **HttpServlet**: An abstract class that extends `GenericServlet` and provides methods for handling HTTP-specific requests. It is the most commonly used servlet class for web applications. It provides methods like `doGet()`, `doPost()`, `doPut()`, and `doDelete()` to handle different HTTP methods.
3. **ServletInputStream / ServletOutputStream**: Classes that provide input and output streams for reading and writing binary data in servlets. They are used for handling file uploads, downloads, and other binary data transfers.

#### ✅ Commonly Used Methods
1. **init(ServletConfig config)**: Called by the servlet container to initialize the servlet. It is called only once when the servlet is first loaded.
2. **service(ServletRequest req, ServletResponse res)**: Called by the servlet container to process a request. It is called for each client request and is responsible for generating the response.
3. **destroy()**: Called by the servlet container to destroy the servlet. It is called only once when the servlet is being removed from service.
4. **getParameter(String name)**: Retrieves the value of a request parameter by name. It is used to access form data submitted by the client.
5. **getParameterValues(String name)**: Retrieves an array of values for a request parameter. It is used to access multiple values submitted for the same parameter (e.g., checkboxes).
6. **getAttribute(String name)**: Retrieves an attribute value from the request, session, or application context. It is used to share data between servlets.
7. **setAttribute(String name, Object value)**: Sets an attribute value in the request, session, or application context. It is used to share data between servlets and JSPs.
8. **getSession()**: Retrieves the current session associated with the request. It is used to manage user sessions and store user-specific data.

#### ✅ Servlet API Use Case (Example)
```java
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        out.println("<h1>Hello from Servlet!</h1>");
    }
}
```

### **1.4 Servlet Interface**

The Servlet interface is the core interface of the Java Servlet API.
All servlets must implement this interface directly or indirectly. It defines the lifecycle methods that web containers use to interact with servlets.

#### ✅ Methods in Servlet Interface:

1. **init(ServletConfig config)**: Called when the servlet is initialized. Runs once when the servlet is first loaded.
2. **service(ServletRequest req, ServletResponse res)**: Called for each client request. Handles both GET, POST, etc. Processes the request and generates a response.
3. **destroy()**: Called when the servlet is about to be destroyed. Runs once when the servlet is being removed from service.
4. **getServletConfig()**: Returns the ServletConfig object. Contains initialization parameters and servlet context information.
5. **getServletInfo()**: Returns information about the servlet. Typically includes the servlet's name, version, and author.

#### ✅ Interface Syntax:
```java
public interface Servlet {
    public void init(ServletConfig config) throws ServletException;
    public ServletConfig getServletConfig();
    public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException;
    public String getServletInfo();
    public void destroy();
}
```

#### ✅ How We Use the Interface:
- Usually, we don’t implement Servlet interface directly.
- Instead, we extend one of the following:
    - **GenericServlet**: For protocol-independent servlets.
    - **HttpServlet**: For HTTP-specific servlets (most common).

#### ✅ Why Extend Instead of Implement?
- HttpServlet and GenericServlet already provide default implementations for some methods.
- You only need to override the methods you care about (e.g., doGet() or doPost()).

### **1.5 GenericServlet**
> PYQ: Generic Servlets (2021, 2.5 marks)

GenericServlet is an abstract class in the `javax.servlet` package. It implements the `Servlet` interface and provides default implementations for most of its methods. It is protocol-independent and can be used for creating servlets that work with different protocols (not just HTTP).

#### ✅ Key Features:

* Protocol-independent (can be used for any protocol, not just HTTP).
* Provides default implementations for all Servlet interface methods except `service()`.
* Stores the ServletConfig object and provides convenient access to its methods.

#### ✅ Why use GenericServlet?
- It reduces boilerplate code.
- It provides a base class for creating servlets that can work with different protocols (not just HTTP).
- There is only need to override the service() method instead of all 5 methods from the Servlet interface.

#### ✅ Common Methods in GenericServlet
1. **init(ServletConfig config)**: Called when the servlet is initialized. It is called only once when the servlet is first loaded.
2. **service(ServletRequest req, ServletResponse res)**: Main method for handle requests and send responses. Must be overridden in subclasses.
3. **destroy()**: Called when the servlet is about to be destroyed. It is called only once when the servlet is being removed from service.
4. **getInitParameter(String name)**: Returns the value of an initialization parameter defined in the `web.xml` file.
5. **getServletContext()**: Gets the `ServletContext` object (shared environment info) for the web application.
6. **getServletName()**: Returns the name of the servlet as defined in the `web.xml` file.
7. **log(String msg)**: Logs a message to the server log file. Useful for debugging and tracking servlet activity.

#### ✅ Example of Using GenericServlet
```java
import javax.servlet.*;
import java.io.*;

public class MyGenericServlet extends GenericServlet {
    public void service(ServletRequest req, ServletResponse res) throws IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        out.println("<h2>Hello from GenericServlet!</h2>");
    }
}
```

### **1.6 HttpServlet**

> PYQ: HTTP servlets (2022, 2.5 marks)

`HttpServlet` is an abstract class in the `javax.servlet.http` package. It extends `GenericServlet` and is specifically designed for handling HTTP protocol. It's the most commonly used servlet class for web applications. It provides built-in methods like: doGet(), doPost(), doPut(), doDelete().

#### ✅ When to Use HttpServlet?
- Use HttpServlet when you want to build web applications that handle browser requests using the HTTP protocol (GET, POST, etc.).

#### ✅Key Features:
- HTTP protocol-specific implementation of GenericServlet.
- Provides methods for handling HTTP methods like GET, POST, PUT, DELETE, etc.
- Automatically dispatches requests to the appropriate method handler.
- Simplifies the process of creating servlets for web applications.

#### ✅ Commonly Used Methods
- **doGet(HttpServletRequest req, HttpServletResponse res)**: Handles HTTP GET requests (like clicking a link).
- **doPost(HttpServletRequest req, HttpServletResponse res)**: Handles POST requests (like form submission).
- **doPut(HttpServletRequest req, HttpServletResponse res)**: Handles HTTP PUT requests. Updates a resource (used in REST APIs).
- **doDelete(HttpServletRequest req, HttpServletResponse res)**: Handles HTTP DELETE requests. Deletes a resource (used in REST APIs).
* **service(HttpServletRequest req, HttpServletResponse res)**: Dispatches to the appropriate method handler. Called automatically and dispatches to doGet(), doPost() based on request type.

#### ✅ Code Example - HttpServlet Implementation:

```java
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        out.println("<h1>Hello from HttpServlet!</h1>");
    }
}
```

#### ✅ Key Differences from GenericServlet
| Feature | `GenericServlet` | `HttpServlet` |
|--------|------------------|--------------|
| Protocol | Generic (any) | HTTP only |
| Main method | `service()` | `doGet()`, `doPost()` etc. |
| Used for | Custom protocols | Web apps over HTTP |
| Inheritance | Implements `Servlet` | Extends `GenericServlet` |
| Default methods | None | Provides HTTP methods (doGet, doPost) |

#### ✅ Comparison: Servlet vs GenericServlet vs HttpServlet
| Feature / Class         | `Servlet` (Interface)         | `GenericServlet` (Abstract Class)      | `HttpServlet` (Abstract Class)        |
|-------------------------|-------------------------------|-----------------------------------------|----------------------------------------|
| **Type**                | Interface                     | Abstract Class                          | Abstract Class                         |
| **Package**             | `javax.servlet`               | `javax.servlet`                         | `javax.servlet.http`                   |
| **Implements**          | Core interface                | Implements `Servlet`                    | Extends `GenericServlet`              |
| **Protocol**            | Protocol-independent          | Protocol-independent                    | HTTP-specific                          |
| **Usage**               | Base for all servlets         | Used for custom or generic protocols    | Most commonly used for web applications |
| **Method to Override**  | All 5 methods (`init`, `service`, `destroy`, etc.) | Only `service()    | `doGet()`, `doPost()`, etc.           |
| **Ease of Use**         | Least convenient              | Easier than `Servlet`                   | Easiest (for HTTP apps)               |
| **Supports HTTP**       | No                            | No                                      | Yes                                    |
| **Example Usage**       | Rare in practice              | For protocols like FTP, SMTP (rare)     | For handling web (browser) requests   |

### **1.7 Servlet Lifecycle**

> PYQ: What is Servlet? Explain the life cycle of Servlet. (2021, 15 marks; 2023, 7 marks; 2024, 15 marks)

The servlet lifecycle is the process by which a servlet is created, initialized, processed, and destroyed. The servlet container (like Apache Tomcat) manages this lifecycle.

#### ✅ **Lifecycle Phases**:

1. **Loading the Servlet Class**: The web container loads the servlet class.
   - This can happen when the server starts or when the servlet is first requested.
   - The class is loaded into memory.
2. **Creating an Instance**: The container creates an instance of the servlet.
    - The servlet class is instantiated using the default constructor.
    - The servlet instance is created only once for each servlet.
3. **Initialization**: The container calls the `init()` method.
    - This method is called only once when the servlet is first loaded.
    - It is used to perform one-time initialization tasks (e.g., loading configuration, establishing database connections).
4. **Request Processing**: The container calls the `service()` method for each request.
   - For `HttpServlet`, it internally calls `doGet()`, `doPost()`, etc.
   - This method handles the request and generates a response.
   - It is called for each client request and is handled in a separate thread.
5. **Destruction**: The container calls the `destroy()` method when the servlet is no longer needed.
    - This method is called only once when the servlet is being removed from service.
    - It is used to release resources (e.g., closing database connections, freeing memory).

#### ✅ **Diagram of Servlet Lifecycle**:

```
┌─────────────────────┐
│  Servlet Loaded     │  ← Container loads servlet class
│  (Class Loading)    │
└────────┬────────────┘
         │
┌────────▼────────────┐
│    Instantiation    │  ← Container creates servlet instance
│  (Object Creation)  │
└────────┬────────────┘
         │
┌────────▼────────────┐
│       init()        │  ← Called once for initialization
│  (Initialization)   │
└────────┬────────────┘
         │
┌────────▼────────────┐
│     service()       │  ← Called for each request
│ (Request Processing)│
└────────┬────────────┘
         │
┌────────▼────────────┐
│     destroy()       │  ← Called once for cleanup
└─────────────────────┘
```

#### ✅ Lifecycle Methods

#### 1. `init(ServletConfig config)`
- Called only once when the servlet is first loaded.
- Used to initialize servlet (e.g., DB connection).
  
```java
public void init(ServletConfig config) throws ServletException {
    // Initialization code
}
```

#### 2. `service(ServletRequest req, ServletResponse res)`
- Called for each client request to the servlet.
- For `HttpServlet`, it internally calls `doGet()`, `doPost()`, etc.

```java
public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
    // Request handling code
}
```

#### 3. `destroy()`
- Called only once before servlet is removed from memory.
- Used to **clean up resources** like closing DB connections.

```java
public void destroy() {
    // Cleanup code
}
```

#### ✅ **Code Example - Servlet Lifecycle**

```java
public class MyServlet extends HttpServlet {
    public void init() { System.out.println("Init called"); }

    protected void doGet(HttpServletRequest req, HttpServletResponse res) {
        System.out.println("Service (GET) called");
    }

    public void destroy() { System.out.println("Destroy called"); }
}
```

### **1.8 Servlet with IDE**

> PYQ: What is WAR File? (2023, 2.5 marks)

Using an **IDE (Integrated Development Environment)** makes servlet development easier. IDEs provide tools for:
- Project structure
- Build paths
- Server configuration (like Apache Tomcat)
- Auto-deployment
- Debugging     

#### ✅ 1. Using **Eclipse** for Servlet

##### 🔹 Steps:
1. Open Eclipse → `File` → `New` → `Dynamic Web Project`
2. Enter project name → Next
3. Select **Target Runtime** as **Apache Tomcat**
4. Click `Finish`
5. Right-click on `src` → New → `Servlet`
6. Eclipse will generate boilerplate servlet code.

##### 🔹 Folder Structure:
```
ProjectName/
├── WebContent/
│   └── WEB-INF/
│       └── web.xml
├── src/
│   └── MyServlet.java
```

##### 🔹 Run:
- Right-click project → `Run As` → `Run on Server`

#### ✅ 2. Using **MyEclipse**

- MyEclipse is a commercial IDE based on Eclipse with built-in support for Java EE.
- Servlet creation is similar but more **drag-and-drop friendly**.
- It includes visual tools to design `web.xml` and manage deployments.

##### 🔹 Benefits:
- Integrated support for Java EE
- Built-in Tomcat/JBoss
- UI for managing servlets and web.xml

#### ✅ 3. Using **NetBeans**

##### 🔹 Steps:
1. Open NetBeans → `New Project` → `Java Web` → `Web Application`
2. Enter name → Select Server (like GlassFish or Tomcat)
3. Create servlet via:
   - `Right-click` → New → Servlet
4. NetBeans auto-generates `web.xml` and project files.

##### 🔹 Run:
- Click `Run` ▶ button on the top menu bar

#### ✅ Comparison

| IDE        | Servlet Setup | Server Integration | Ease of Use | Notes                          |
|------------|----------------|--------------------|-------------|-------------------------------|
| Eclipse    | Manual setup   | Tomcat supported   | Easy        | Widely used for web dev       |
| MyEclipse  | Built-in tools | Built-in servers   | Very Easy   | Paid, powerful for Java EE    |
| NetBeans   | Guided wizards | GlassFish/Tomcat   | Beginner-friendly | Great for Java EE dev   |


#### ✅ WAR File (Web Application Archive)

A **WAR (Web Application Archive)** file is a special JAR file used to package and distribute Java web applications. It contains all components needed for a web application including servlets, JSP pages, HTML files, JavaScript, and other resources.

##### 🔹 Structure of a WAR File
```
MyWebApp.war
├── META-INF/
│   └── MANIFEST.MF       (Metadata about the archive)
├── WEB-INF/
│   ├── web.xml           (Deployment descriptor)
│   ├── classes/          (Compiled Java classes)
│   ├── lib/              (JAR dependencies)
│   └── tags/             (Custom JSP tag files)
├── index.jsp             (Web pages)
├── images/               (Static resources)
└── css/                  (Stylesheets)
```

##### 🔹 Key Characteristics
- **File Extension**: `.war`
- **Standar Format**: Based on ZIP/JAR compression fprmat
- **Purpose**: Package and deploy web applications to servlet containers
- **Portability**: Can be deployed on any Java web server (Tomcat, JBoss, etc.)
- **Security**: WEB-INF directory is protected from direct client access

##### 🔹 Creating a WAR File
- Using IDE: Most IDEs provide Export → WAR file option
- Using Maven: `mvn package` command
- Using Gradle: `gradle war` task
- Using command line: `jar -cvf MyWebApp.war -C webapps/MyWebApp .`

##### 🔹 Deploying a WAR File
- Copy the WAR to the server's deployment directory (e.g., `TOMCAT_HOME/webapps/`)
- The container automatically extracts and deploys the application

### **1.9 Servlet Request**

The `ServletRequest` interface represents the request made by the client to the servlet. It provides methods to access request parameters, attributes, headers, and other information related to the request.

#### ✅ Key Features
- Represents client request data.
- Provides methods to retrieve parameters, attributes, and headers.
- Supports different HTTP methods (GET, POST, etc.).
- Allows access to input streams for reading request body data.

#### ✅ Methods of ServletRequest Interface:
| Method                        | Description |
|-------------------------------|-------------|
| `getParameter(String name)`    | Retrieves the value of a request parameter by name |
| `getParameterValues(String name)` | Retrieves an array of values for a request parameter |
| `getAttribute(String name)`    | Retrieves an attribute value from the request |
| `setAttribute(String name, Object value)` | Sets an attribute value in the request |
| `getHeader(String name)`       | Retrieves the value of a specific header |
| `getMethod()`                 | Returns the HTTP method used (GET, POST) |
| `getInputStream()`            | Returns an input stream for reading binary data |
| `getReader()`                 | Returns a reader for reading character data |

#### ✅ Example Usage
```java
public class MyServlet extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String user = req.getParameter("username");
        PrintWriter out = res.getWriter();
        out.println("Hello " + user);
    }
}
```

### **1.10 Servlet Collaboration**
> PYQ: Explain how request dispatcher works in servlets? (2023, 8 marks)

Servlets can collaborate (communicate with each other) to handle complex requests and share data. This is useful for modular design, code reuse, and handling multi-step processing. There are several mechanisms for servlet collaboration.

#### ✅ Why Servlet Collaboration?
- To share data between servlets
- To reuse logic written in another servlet
- To break down complex tasks into smaller servlets
- To improve code organization and maintainability

#### ✅ Techniques for Servlet Collaboration:
| Method | Description | Used For |
|--------|-------------|----------|
| **RequestDispatcher** | For **including** or **forwarding** request from one servlet to another | Same app communication |
| **sendRedirect()** | Redirects client to another **URL or servlet** | Can redirect to other domains too |
| **ServletContext** | Stores data **shared by all servlets** in a web application | Application-wide data sharing |
| **HttpSession** | Stores data per **user session** | User-specific data sharing |
| **Servlet Chaining** | One servlet calls another servlet in a chain | Breaking down complex tasks |
| **Inter-Servlet Communication** | Servlets communicate using request parameters, attributes, and session data | Data sharing and collaboration |

#### ✅ 1. **RequestDispatcher**

- An interface that allows servlets to forward requests or include content from other servlets
- Obtained from `ServletRequest` using `getRequestDispatcher()` method
- Used for servlet collaboration within the same web application
- Provides two main operations:
    - **Forward**: Transfers control completely to another servlet
    - **Include**: Combines output of multiple servlets
- Not used for redirecting to external URLs

##### 🔹 Forward Request:
- Transfers control from one servlet to another (server-side).
- URL in browser does not change.

```java
RequestDispatcher rd = request.getRequestDispatcher("SecondServlet");
rd.forward(request, response);
```

##### 🔹 Include Content:
- Includes output of one servlet into another.
- Useful for modularizing code.

```java
RequestDispatcher rd = request.getRequestDispatcher("HeaderServlet");
rd.include(request, response);
```

#### ✅ 2. **sendRedirect()**

- Client-side redirect to another servlet or page.
- URL in browser changes to the new URL.

```java
response.sendRedirect("SecondServlet");
```

### ✅ 3. **ServletContext**

- Application-level sharing of data.
- Data is shared across all servlets in the same web application.

```java
ServletContext context = getServletContext();
context.setAttribute("msg", "Hello from First Servlet");
```

#### ✅ 4. **HttpSession**

- Used to pass data between servlets in same user session.
- Data is specific to a user session and can be accessed by any servlet in that session.

```java
HttpSession session = request.getSession();
session.setAttribute("user", "Deepak");
```
##### ✅ Example Flow Diagram

```
User → FirstServlet → (forward/include/redirect) → SecondServlet
```

#### ✅ 5. **Servlet Chaining**
- One servlet calls another servlet in a chain.
- Each servlet processes the request and passes it to the next servlet.

```java
RequestDispatcher rd = request.getRequestDispatcher("SecondServlet");
rd.forward(request, response);
```

#### ✅ 6. **Inter-Servlet Communication**
- Servlets can communicate using request parameters, attributes, and session data.
- This allows servlets to share data and collaborate on processing requests.

```java
// In FirstServlet
request.setAttribute("key", "value");
// In SecondServlet
String value = (String) request.getAttribute("key");
```

### **1.11 Servlet Configuration**

Servlet configuration involves defining how servlets are mapped to URLs and setting initialization parameters. This can be done using either the deployment descriptor (`web.xml`) or annotations.

#### 🔹 **What is ServletConfig?**

`ServletConfig` is an object provided by the **web container** to pass **initialization parameters** to a servlet. It is used to configure a servlet at the time of **deployment**.

#### ✅ **Key Points**
- It is **specific to a single servlet**.
- Values are defined in `web.xml` under `<init-param>`.
- Accessed using `getServletConfig()` method.
- Useful when servlet requires **config values like DB URL, username**, etc.
- It is created by the web container when the servlet is loaded.


#### ✅ **Methods of ServletConfig**

| Method | Description |
|--------|-------------|
| `getInitParameter(String name)` | Returns the value of a specific init parameter |
| `getInitParameterNames()` | Returns an enumeration of all init parameter names |
| `getServletName()` | Returns the name of the servlet |
| `getServletContext()` | Returns a reference to the `ServletContext` object |

#### ✅ Example: `web.xml` (for config)

```xml
<servlet>
  <servlet-name>MyServlet</servlet-name>
  <servlet-class>com.example.MyServlet</servlet-class>
  <init-param>
    <param-name>dbUser</param-name>
    <param-value=“deepak”</param-value>
  </init-param>
</servlet>

<servlet-mapping>
  <servlet-name>MyServlet</servlet-name>
  <url-pattern>/config</url-pattern>
</servlet-mapping>
```

#### ✅ Example: Java Servlet Using Config

```java
public class MyServlet extends HttpServlet {
    public void init(ServletConfig config) throws ServletException {
        String user = config.getInitParameter("dbUser");
        System.out.println("DB User: " + user);
    }
}
```

### **1.12 ServletContext**

ServletContext represents the web application and provides information about the environment in which the servlet is running. It's a way for servlets to communicate with the web container.        
`ServletContext` is an interface provided by the servlet container to allow **servlets to share information** with each other within a **web application**.     
It represents the **entire web application** and is **common to all servlets** in that application.

#### ✅ **Key Features:**
- **Shared Resources**: Provides access to shared resources like configuration information.
- **Application Scope**: Data stored in ServletContext is available to all servlets and JSPs.
- **Inter-Servlet Communication**: Allows servlets to share information.
- **Resource Access**: Provides access to static resources like HTML, images, etc.

#### ✅ **Common Use Cases**
- Sharing global information (e.g., app name, DB config)
- Getting absolute path of files/folders
- Logging messages
- Accessing resources (HTML, images, etc.)
- Setting application-wide attributes

#### ✅ **Important Methods of ServletContext**
1. `getInitParameter(String name)`- Gets a context param value
2. `getInitParameterNames ()` - Returns all context param names
3. `getAttribute(String name)` - Retrieves an attribute set in context
4. `setAttribute(String name, Object obj )` - Sets a new attribute in context
5. `removeAttribute(String name)` - Removes an attribute from context
6. `getRea1Path(String path)` - Converts a virtual path to actual path
7. `getContextPath ()` - Returns the base URL path of the web app
8. `getServletContextName()` - Returns the name of the web application

#### ✅ **Example: web.xml**

```xml
<context-param>
  <param-name>appName</param-name>
  <param-value>NotesNeo</param-value>
</context-param>
```

#### ✅ **Accessing ServletContext in Java Servlet**

```java
public class AppInfoServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        ServletContext context = getServletContext();
        String appName = context.getInitParameter("appName");
        response.getWriter().println("App Name: " + appName);
    }
}
```

#### ✅ Difference: `ServletContext` vs `ServletConfig`

| Feature             | ServletContext         | ServletConfig         |
|---------------------|------------------------|------------------------|
| Scope               | Entire web app         | One specific servlet   |
| Sharing             | Shared by all servlets | Not shared             |
| Defined in          | `<context-param>` tag  | `<init-param>` tag     |
| Use Case            | App-wide data          | Servlet-specific data  |
| Access Method       | `getServletContext()`  | `getServletConfig()`   |


### **1.13 Attributes in Servlet**
Attributes in servlets are **objects** used to **share data** between different **components (servlets, JSPs, filters)** during the processing of a single request or session or application. It allows servlets to pass data to each other without using request parameters or session variables.

Attributes are **key-value pairs** that can be set and retrieved using methods provided by the `ServletRequest`, `HttpSession`, and `ServletContext` interfaces.

They are stored in **scopes** like:
- **Request** (`ServletRequest`)
- **Session**   (`HttpSession`)
- **Application** (`ServletContext`)

#### ✅ **Types of Attribute Scopes**

| Scope | Interface | Lifetime | Use Case |
|-------|-----------|----------|----------|
| **Request** | `HttpServletRequest` | Until request is completed | Share data between servlets during forward/include |
| **Session** | `HttpSession` | Until session expires | Store user data (e.g. login info) |
| **Application** | `ServletContext` | Until app is running | Share global data between all servlets |


#### ✅ **Common Methods for Attributes**

| Scope | Set | Get | Remove |
|-------|-----|-----|--------|
| **Request** | `setAttribute()` | `getAttribute()` | `removeAttribute()` |
| **Session** | `setAttribute()` | `getAttribute()` | `removeAttribute()` |
| **Context** | `setAttribute()` | `getAttribute()` | `removeAttribute()` |

#### ✅ **Use Cases of Attributes**
- Pass data between servlets and JSPs
- Store user preferences or login state
- Store application-wide variables like counters

### **1.14 Session Management Techniques in Servlet**

HTTP is a stateless protocol, but web applications often need to maintain state across multiple requests from the same client. Servlets provide several techniques for session management. It allows web applications to track user sessions and maintain stateful interactions.

#### 🔹 What is a Session?
- A session represents a series of interactions between a user and a web application over time.
- Since HTTP is stateless, we need session management to track user activity between multiple requests.

#### ✅ Types of Session Management Techniques

| Technique | Description | Use Case |
|----------|-------------|----------|
| **HttpSession API** | Server-side session tracking | Most secure and commonly used |
| **Cookies** | Stores small data on client-side browser | Simple tracking (e.g., login ID) |
| **URL Rewriting** | Appends session ID/data in URL | For tracking when cookies are disabled |
| **Hidden Form Fields** | Stores data in hidden HTML fields | For form submissions |
| **Database** | Stores session data in a database | For large-scale applications |
| **Session Listener** | Listens to session events (creation, destruction) | For tracking user sessions |

##### 🔹 1. **HttpSession (Server-Side - Most Common)**
- Stores data on the server for each user session.
- Automatically managed by the servlet container.

```java
HttpSession session = request.getSession();
session.setAttribute("username", "deepak");
```

✅ **Pros**: Secure, scalable  
❌ **Cons**: Uses server memory

##### 🔹 2. **Cookies (Client-Side)**
- Small text files stored in the user's browser.
- Sent with every request to the server.

```java
Cookie c = new Cookie("username", "deepak");
response.addCookie(c);
```

✅ **Pros**: Lightweight, persists across sessions  
❌ **Cons**: Not secure, may be disabled

##### 🔹 3. **URL Rewriting**
- Appends session data in the URL as a query parameter.

```html
<a href="dashboard?user=deepak">Visit</a>
```

✅ **Pros**: Works even if cookies are disabled  
❌ **Cons**: Less secure, cluttered URLs

##### 🔹 4. **Hidden Form Fields**
- Data is stored in hidden fields of an HTML form and submitted with each request.

```html
<input type="hidden" name="username" value="deepak">
```

✅ **Pros**: Useful in multi-step forms  
❌ **Cons**: Works only with forms, not for all requests


##### 🔹 5. **Database**
- Session data is stored in a database (manual implementation).

✅ **Pros**: Persistent, scalable for distributed systems  
❌ **Cons**: Slower due to DB access


##### 🔹 6. **Session Listener**
- Listens to session creation/destruction events.

```java
public class MySessionListener implements HttpSessionListener {
   public void sessionCreated(HttpSessionEvent e) { ... }
   public void sessionDestroyed(HttpSessionEvent e) { ... }
}
```

✅ **Pros**: Good for logging, auditing, or cleanup  
❌ **Cons**: Only passive observation


### **1.15 Events and Listeners in Servlets**
#### 🔹 What are Servlet Events and Listeners?
- **Events**: Notifications that something has happened (e.g., session created, request initialized).
- **Listeners**: Special interfaces in Servlet API that **listen to events** and execute custom code automatically when an event occurs.
Events are generated by the servlet container, and listeners are classes that implement specific interfaces to handle those events.

#### ✅ Types of Events and Corresponding Listeners

| Event Type         | Listener Interface                          | Triggered When...                                  |
|--------------------|---------------------------------------------|-----------------------------------------------------|
| **ServletContext** | `ServletContextListener`                    | Web application starts/stops                        |
| **HttpSession**    | `HttpSessionListener`                       | Session is created or destroyed                     |
| **Request**        | `ServletRequestListener`                    | Request is received or completed                    |
| **Attribute**      | `ServletContextAttributeListener`           | Context attribute added/removed/modified            |
|                    | `HttpSessionAttributeListener`              | Session attribute added/removed/modified            |
|                    | `ServletRequestAttributeListener`           | Request attribute added/removed/modified            |

#### ✅ Example: HttpSessionListener

```java
@WebListener
public class MySessionListener implements HttpSessionListener {
    public void sessionCreated(HttpSessionEvent se) {
        System.out.println("Session Created: " + se.getSession().getId());
    }

    public void sessionDestroyed(HttpSessionEvent se) {
        System.out.println("Session Destroyed: " + se.getSession().getId());
    }
}
```

##### 🔹 How to Register a Listener

1. **Using `@WebListener` annotation** (preferred in modern applications)  
2. **Via `web.xml`** configuration:
```xml
<listener>
    <listener-class>com.example.MySessionListener</listener-class>
</listener>
```

#### ✅ Why Use Listeners?

- Logging
- Resource management
- Monitoring user sessions
- Cleaning up on session timeout
- Tracking user activity

### **1.16 Filters in Servlets**

#### 🔹 What is a Filter?

A **Filter** in Servlet is an object that perform **pre-processing** or **post-processing** on requests and responses in a web application.
- They are used to modify request and response objects, perform logging, authentication, input validation, etc.
- Filters are part of the servlet API and can be applied to servlets, JSPs, or static resources.
- They are defined in the `web.xml` file or using annotations.

> Think of a Filter like a security guard — it checks and modifies requests or responses as needed.

#### ✅ Uses of Filters
- **Authentication and Authorization**
- **Logging and Auditing**
- **Data Compression**
- **Input validation and sanitation**
- **Modifying request or response (e.g., headers, content)**

#### 🔹 Filter Lifecycle Methods

From the `javax.servlet.Filter` interface:

```java
public interface Filter {
    void init(FilterConfig config);      // Initialization (called once)
    void doFilter(ServletRequest req, ServletResponse res, FilterChain chain); // Core logic
    void destroy();                      // Cleanup (called once)
}
```

#### ✅ Filter Execution Flow

1. **Client request → Filter → Servlet**
2. **Servlet response → Filter → Client**

#### 🔹 Real-World Use Case
- A **login filter** checks if a user is authenticated. If not, redirect to login page.
- A **logging filter** records every request URL and timestamp for analytics.

### **1.17 CRUD Operations in Servlets**
> PYQ: CRUD operations (2022, 2.5 marks)    
> PYQ: Define CRUD (2023, 2.5 marks)

CRUD (Create, Read, Update, Delete) operations are the basic operations performed on data in a web application. In servlets, these operations can be implemented using HTTP methods like POST, GET, PUT, and DELETE.
CRUD operations are typically performed on a database or data source, and servlets act as the intermediary between the client and the data source.

**CRUD** stands for:
- **C**reate (Insert) - Insert new data
- **R**ead (Select) - Retrieve/view data
- **U**pdate - Modify existing data
- **D**elete - Remove data

In Servlets, CRUD operations are typically performed by connecting the servlet to a **database** (e.g., MySQL) using **JDBC**.

#### ✅ CRUD Operations Overview
| Operation | HTTP Method | URL Example |
|----------|-------------|-------------|
| **Create** | POST | `/createUser` |
| **Read**   | GET  | `/getUser?id=1` |
| **Update** | PUT  | `/updateUser?id=1` |
| **Delete** | DELETE | `/deleteUser?id=1` |

#### ✅ Simple Implementation Example

**1. Create (Insert)**
```java
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    String name = request.getParameter("name");
    Connection con = DBConnection.getConnection();
    PreparedStatement ps = con.prepareStatement("INSERT INTO users (name) VALUES (?)");
    ps.setString(1, name);
    ps.executeUpdate();
    response.sendRedirect("view");
}
```

**2. Read (View)**
```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    Connection con = DBConnection.getConnection();
    Statement stmt = con.createStatement();
    ResultSet rs = stmt.executeQuery("SELECT * FROM users");
    
    PrintWriter out = response.getWriter();
    while(rs.next()) {
        out.println(rs.getInt("id") + " " + rs.getString("name"));
    }
}
```

**3. Update**
```java
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    int id = Integer.parseInt(request.getParameter("id"));
    String name = request.getParameter("name");
    
    Connection con = DBConnection.getConnection();
    PreparedStatement ps = con.prepareStatement("UPDATE users SET name=? WHERE id=?");
    ps.setString(1, name);
    ps.setInt(2, id);
    ps.executeUpdate();
    
    response.sendRedirect("view");
}
```

**4. Delete**
```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    int id = Integer.parseInt(request.getParameter("id"));
    
    Connection con = DBConnection.getConnection();
    PreparedStatement ps = con.prepareStatement("DELETE FROM users WHERE id=?");
    ps.setInt(1, id);
    ps.executeUpdate();
    
    response.sendRedirect("view");
}
```

### **1.18 Pagination in Servlets**

#### 🔹What is Pagination?
- **Pagination** is the process of dividing a large dataset into smaller and manageable chunks (pages) to display limited records per page.
- It improves performance and user experience by loading only a subset of data at a time.
- Commonly used in web applications to display large lists of items (e.g., products, users, etc.).
> Example: Displaying 10 users per page from a database instead of all 100 users at once.
- Pagination is often implemented using query parameters in the URL to specify the current page and items per page.
> For example, `?page=2&size=10` means display the second page with 10 items per page.

#### ✅ Why Pagination?
- Improves **performance**
- Enhances **user experience**
- Reduces **server load**
- Simplifies **navigation**
- Makes data **more manageable**

#### 🔹 Key Concepts
- `limit` → Number of records per page
- `offset` → Starting point for each page

#### SQL Query for Pagination (MySQL):
```sql
SELECT * FROM users LIMIT 10 OFFSET 0;  -- Page 1
SELECT * FROM users LIMIT 10 OFFSET 10; -- Page 2
```

#### ✅ Example Implementation
```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    int page = Integer.parseInt(request.getParameter("page"));
    int size = Integer.parseInt(request.getParameter("size"));
    
    Connection con = DBConnection.getConnection();
    PreparedStatement ps = con.prepareStatement("SELECT * FROM users LIMIT ? OFFSET ?");
    ps.setInt(1, size);
    ps.setInt(2, (page - 1) * size);
    
    ResultSet rs = ps.executeQuery();
    PrintWriter out = response.getWriter();
    
    while(rs.next()) {
        out.println(rs.getInt("id") + " " + rs.getString("name"));
    }
}
```


### **1.19 Input and Output Streams**
Streams in Java represent a flow of data — either input (reading) or output (writing). In servlets, streams are used to read data from the request and write data to the response.
- **InputStream**: Used to read data from the client (e.g., file upload).
- **OutputStream**: Used to send data to the client (e.g., file download, image display).
Streams are essential for handling binary data, such as images, files, and other non-text data.

#### 🔸 Types of Streams

| Feature          | InputStream                  | OutputStream                |
|------------------|------------------------------|-----------------------------|
| Purpose          | Read binary data from client | Write binary data to client |
| Direction        | Client → Server              | Server → Client             |
| Usage            | File upload, read request    | File download, send images  |
| Servlet Type     | `request.getInputStream()`   | `response.getOutputStream()`|

**1. InputStream**
- Used to read data coming into the servlet (from the client).
- Often used when handling file uploads or raw POST data.
- Example: Uploading a file:
```java
InputStream in = request.getInputStream(); // Read uploaded data
byte[] buffer = new byte[1024]; // Buffer for reading data
int bytesRead = in.read(buffer); // Read data into buffer
```


**2. OutputStream**
- Used to send data from the servlet to the client.
- Typically used for downloads (PDFs, images, etc.).
- Example: Downloading a file:
```java
OutputStream out = response.getOutputStream(); // Send data to client
out.write(data); // Write data to output stream
```

#### 🔹 Key Classes in Java I/O
| Class             | Purpose                              |
|------------------|--------------------------------------|
| `InputStream`    | Abstract class for reading data      |
| `FileInputStream`| Reads data from a file               |
| `OutputStream`   | Abstract class for writing data      |
| `FileOutputStream`| Writes data to a file               |
| `ServletInputStream` | Reads binary data from request   |
| `ServletOutputStream`| Sends binary data in response    |


### **1.20 Annotations in Servlets**
#### 🔹 What Are Annotations?
- Annotations are a form of metadata in Java that provide additional information about the code. In servlets, annotations can be used to configure servlets without using the traditional web.xml file.

| Feature                  | With XML (`web.xml`)      | With Annotation            |
|--------------------------|---------------------------|----------------------------|
| Configuration Location   | Separate XML file         | Inside servlet class       |
| Easier to read           | ❌                        | ✅                        |
| Deployment flexibility   | More configurable         | Simpler for small apps     |
| Boilerplate code         | More verbose              | Less boilerplate           |
| Maintenance              | Harder to maintain        | Easier to maintain         |

- Annotations are introduced in Java 5 and are widely used in modern Java EE applications.
- They help reduce boilerplate code and make the code cleaner and easier to maintain.
- Annotations are processed at runtime by the servlet container.
- They are used to define servlet properties like URL mapping, initialization parameters, and more.
- Annotations are defined using the `@` symbol followed by the annotation name.
- Common annotations include `@WebServlet`, `@WebFilter`, `@WebListener`, etc.

#### 🔸 Why Use Annotations in Servlets?
- **Simplifies Configuration**: Reduces the need for XML configuration files (web.xml).
- **Improves Readability**: Makes the code cleaner and easier to understand.
- **Faster Development**: Speeds up development by reducing boilerplate code.
- **Easier Maintenance**: Changes can be made directly in the code without modifying XML files.
- **Reduced Boilerplate**: Less code to write and maintain for servlet configuration.

#### 🔸 Common Annotations
1. `@WebServlet`: Maps a servlet to a specific URL pattern.
   - Example: `@WebServlet("/hello")` maps the servlet to `/hello` URL.
2. `@WebFilter`: Maps a filter to a specific URL pattern.
   - Example: `@WebFilter("/secured/*")` applies the filter to all URLs under `/secured/`.
3. `@WebListener`: Registers a listener for servlet context or session events.
   - Example: `@WebListener` registers a session listener.
4. `@MultipartConfig`: Used for handling file uploads in servlets.
   - Example: `@MultipartConfig` enables multipart/form-data handling in the servlet.
5. `@WebInitParam`: Defines initialization parameters for a servlet.
    - Example: `@WebInitParam(name = "paramName", value = "paramValue")` defines an init parameter.

### **1.21 Single Thread Model**
> PYQ: Single thread model (2021, 2022; 2.5 marks)

#### 🔹 What is the SingleThreadModel?
`SingleThreadModel` is an **interface** provided by the Servlet API to ensure that **only one thread** can access the `service()` method of a servlet **at a time**.
It was used to **avoid thread-safety issues** by preventing concurrent access to a servlet instance.

#### 🔸 Declaration:
```java
public class MyServlet extends HttpServlet implements SingleThreadModel {
    // service() method here
}
```

> Note: This interface is deprecated since **Servlet 2.4** due to scalability issues.

#### 🔹 Why Was It Used?

In a typical servlet, multiple requests are handled by **multiple threads** using the **same servlet instance**, which can lead to **data inconsistency** if shared resources (e.g., instance variables) are modified without synchronization.

#### 🔸 Drawbacks of `SingleThreadModel`

| Limitation                     | Explanation                              |
|-------------------------------|------------------------------------------|
| ❌ **Poor performance**        | Only one thread can process at a time    |
| ❌ **Scalability issues**      | Blocks other requests                    |
| ❌ **Memory overhead**         | May create multiple servlet instances    |
| ❌ **Deprecated**              | Better alternatives exist                |

#### 🔹 Modern Approach
Instead of using `SingleThreadModel`, modern servlets should be designed to be **thread-safe** by following best practices for concurrency. This includes:
- Avoiding instance variables
- Using local variables in methods
- Synchronizing access to shared resources
- Using thread-safe classes from the `java.util.concurrent` package

| Method                | Description                                    |
|-----------------------|------------------------------------------------|
| ✅ **Avoid instance variables** | Use only local variables in methods      |
| ✅ **Use local variables**      | Keep data local to the method            |
| ✅ **Synchronization**         | Synchronize access to shared resources   |
| ✅ **Thread-safe classes**     | Use `AtomicInteger`, `ConcurrentHashMap`, etc. |


---

## **Section 2 : JSP**

### **2.1 Introduction to JSP**
> PYQ: What is JSP Technology? How does it work? Also explain JSP Objects? (2021, 15 marks)     
> PYQ: Explain JSP technology in detail. Also write its tags and objects. (2022, 15 marks)  
> PYQ: What is JSP, how it is different from servlet? Explain all the implicit objects of JSP. (2024, 15 marks)

#### ✅ What is JSP?

- **JSP** (JavaServer Pages) is a **server-side technology** for creating **dynamic web pages** using **Java** that **embeds Java code** in HTML pages
- JSP files have **.jsp extension** and are **compiled into servlets** by the JSP container, then processed like regular servlets
- It is part of the **Java EE** (Enterprise Edition) platform, works with the **Servlet API**, and is **platform-independent** (write once, run anywhere)
- It simplifies web development by allowing HTML and Java code to work together, making dynamic content creation easier

#### ✅ Why JSP?
- **Separation of concerns** - Separates the presentation logic (HTML) from business logic (Java)
- **Easier development** - More intuitive for web designers and developers compared to servlets
- **Reusability** - Supports component reuse through custom tags
- **Less code** - Reduces boilerplate code compared to servlets
- **MVC pattern** - Supports Model-View-Controller architecture
- **Rich tag libraries** - Supports JSTL (JavaServer Pages Standard Tag Library) for common tasks

#### ✅ Advantages of JSP over Servlets
> PYQ: What are the advantages of JSP over Servlets? (2023, 2.5 marks)

- **Ease of Development**: JSP allows developers to write HTML and Java code together, making it easier to create dynamic web pages.
- **Less Boilerplate Code**: JSP reduces the amount of code needed to generate HTML, as it automatically handles the response object.
- **Automatic Compilation**: JSP pages are automatically compiled into servlets by the container, reducing manual work.
- **Readability**: JSP pages are more readable and maintainable than servlets, which mix Java code with HTML.
- **Tag Libraries**: JSP supports custom tags and tag libraries (like JSTL), making it easier to create reusable components.

#### ✅ JSP vs Servlet
| Feature | JSP | Servlet |
|---------|-----|---------|
| **Primary Purpose** | Presentation (View) | Processing (Controller) |
| **File Extension** | `.jsp` | `.java` |
| **Compilation** | Compiled to servlet automatically | Compiled to bytecode manually |
| **Analogue** | Front-end | Back-end |
| **Code Style** | HTML/XML with Java code | Java with HTML code |
| **Ease of UI Development** | Easier | More difficult |
| **Good for** | Content-heavy pages | Processing-heavy tasks |
| **Learning Curve** | Easier for web designers | Steeper for non-Java developers |
| **Readability** | Higher for UI | Higher for logic |
| **Performance** | Slightly slower (due to translation) | Faster (direct Java code) |
| **Use Case** | Dynamic web pages | Business logic processing |

#### ✅ Example Use Cases for JSP
- Dynamic web applications (e-commerce, blogs)
- Form processing and display
- Database-driven websites
- User dashboards
- Content management systems
- Report generation
- Interactive web applications

### **2.2 Lifecycle of JSP**

#### ✅ What is the Lifecycle of JSP?
The lifecycle of a JSP page is similar to that of a servlet, as JSPs are internally converted into servlets by the JSP container. The lifecycle consists of several phases:

1. **Translation Phase**:
   - The JSP file is translated into a servlet by the JSP container.
   - This step happens only once unless the JSP file is modified.

2. **Compilation Phase**:
   - The generated servlet code is compiled into a `.class` file.

3. **Initialization Phase**:
   - The `jspInit()` method is called to initialize the JSP.
   - This is similar to the `init()` method in servlets. Called once when the JSP is loaded.

4. **Request Processing Phase**:
   - The `service()` method is called to handle client requests.
   - This method processes the request and generates a response.

5. **Destruction Phase**:
   - The `jspDestroy()` method is called when the JSP is removed from service.
   - This is used to release & cleanup of resources.

#### ✅ Lifecycle Methods in JSP
| Method         | Description                                      |
|----------------|--------------------------------------------------|
| `jspInit()`    | Called once during the initialization phase.     |
| `_jspService()`| Called for each request to process the response. |
| `jspDestroy()` | Called once before the JSP is destroyed.         |

#### ✅ Diagram of JSP Lifecycle
```plaintext
JSP File (.jsp)
    ↓
Translation → Servlet (.java)
    ↓
Compilation → .class file
    ↓
Initialization → jspInit()
    ↓
Request Processing → _jspService()
    ↓
Destruction → jspDestroy()
```

#### ✅ Example Code
```jsp
<%@ page language="java" %>
<html>
<body>
<%
    // This code runs during the request processing phase
    out.println("Hello, JSP Lifecycle!");
%>
</body>
</html>
```

### **2.3 JSP API**

#### ✅ What is JSP API?
The JSP API provides classes and interfaces to support the development of JSP pages. It is part of the Java Servlet API and includes the following key components:

1. **`javax.servlet.jsp` Package**:
   - Contains core interfaces and classes for JSP functionality (JSP scripting, lifecycle, and page behavior).

2. **`javax.servlet.jsp.tagext` Package**:
   - Provides classes and interfaces for creating custom tags (Tag Libraries like JSTL).

#### ✅ Important Interfaces in JSP API
1. **`JspPage`**: Defines the basic methods for JSP pages. Extends Servlet interface. Every JSP page implements this indirectly.
2. **`HttpJspPage`**: Extends `JspPage` for HTTP-specific methods.  Adds _jspService() method to handle requests.
3. **`JspWriter`**: Provides methods to write content to the response. Used to send output to the client (like out object). Similar to `PrintWriter` in servlets.
4. **`PageContext`**: Provides access to various page-level objects (request, response, session, etc.). It is a subclass of `ServletRequest` and `ServletResponse`. It allows access to implicit objects and attributes.
5. **`JspFactory`**: Factory class used to create `PageContext`, `JspEngineInfo`, and other JSP-related objects. It provides methods to get the current JSP page context.

##### ✅ Important Classes in JSP API
1. **`JspEngineInfo`**: Provides information about the JSP engine (version, vendor, etc.). 
2. **`JspWriter`**: Used to write output to the client. It is a subclass of `java.io.Writer` and provides methods like `print()`, `println()`, and `clear()`.
3. **`JspFactory`**: Factory class for creating `JspWriter` and `PageContext` objects. It provides methods to get the current JSP page context and create new instances.

#### ✅ Example Usage of `JspWriter`
```jsp
<%
    JspWriter out = pageContext.getOut();
    out.println("Welcome to JSP API!");
%>
```
#### 🔹 Commonly Used JSP API Components in Real Pages
| Component | Type | Purpose |
|-----------|------|---------|
| `out` | `JspWriter` | Writes output to the client. |
| `pageContext` | `PageContext` | Provides access to all JSP scopes and other objects. |
| `config` | `ServletConfig` | Servlet configuration object for initialization. |
| `application` | `ServletContext` | Represents the web application context. |
| `session` | `HttpSession` | Represents the user's session. |
| `request` | `HttpServletRequest` | Holds request data from the client. |
| `response` | `HttpServletResponse` | Used to send response data to the client. |
| `exception` | `Throwable` | Used in error pages to capture exceptions. |

### **2.4 Scripting Elements in JSP**

#### ✅ What are Scripting Elements?
Scripting elements in JSP allow embedding Java code directly inside HTML pages. They help in controlling page behavior, dynamic content generation, and interacting with server-side logic.

#### 🔷 Types of Scripting Elements in JSP

1. **Declarations** are for **fields/methods** – defined once and accessible globally in the JSP class.
2. **Scriptlets** are for logic – avoid putting business logic here; better use Servlets or JavaBeans.
3. **Expressions** are for output – directly writes result to the browser.

| Element Type | Syntax | Purpose |
|--------------|--------|---------|
| **Declaration** | `<%! ... %>` | Declares variables or methods. |
| **Scriptlet** | `<% ... %>` | Contains Java statements (logic). |
| **Expression** | `<%= ... %>` | Outputs the result of a Java expression. |

#### 🔹 1. **Declaration (`<%! ... %>`)**

- Used to declare variables or methods at the **class level**.
- Code written here is placed **outside** the `_jspService()` method.

**Example:**
```jsp
<%! int counter = 0;
    public int square(int x) {
        return x * x;
    }
%>
```

#### 🔹 2. **Scriptlet (`<% ... %>`)**

- Contains **Java code** that is executed inside the `_jspService()` method.
- Can be used for logic like loops, conditionals, etc.

**Example:**
```jsp
<%
    counter++;
    String user = request.getParameter("name");
%>
<p>Welcome, <%= user %></p>
```

#### 🔹 3. **Expression (`<%= ... %>`)**

- Directly outputs a value to the client (like `System.out.print()`).
- Must return a value (e.g., `String`, `int`).

**Example:**
```jsp
<p>Counter: <%= counter %></p>
```

### **2.5 Implicit Objects in JSP**

#### ✅ What are Implicit Objects?
Implicit objects are pre-defined objects provided by the JSP container. They are made available to every JSP page without needing to declare or instantiate them. They simplify access to common objects like request, response, session, and application.

#### ✅ List of Implicit Objects
| Object | Type | Purpose |
|--------|------|---------|
| **request** | `HttpServletRequest` | Holds data sent by the client (form data, parameters, headers). |
| **response** | `HttpServletResponse` | Used to send data to the client (redirects, content type, etc). |
| **out** | `JspWriter` | Sends content to the browser (like `System.out`). |
| **session** | `HttpSession` | Manages user session data (login info, preferences, etc). |
| **application** | `ServletContext` | Shared data across the entire web application. |
| **config** | `ServletConfig` | Servlet configuration object for the JSP/servlet. |
| **pageContext** | `PageContext` | Provides access to all scopes and JSP environment info. |
| **page** | `Object` | Refers to the current JSP page instance (`this` keyword). |
| **exception** | `Throwable` | Used in **error pages** only to handle exceptions. |

#### ✅ Common Usage Examples

#### 🔹 `request`
```jsp
<p>Hello, <%= request.getParameter("name") %></p>
```

#### 🔹 `session`
```jsp
<% session.setAttribute("user", "Deepak"); %>
```

#### 🔹 `application`
```jsp
<%= application.getInitParameter("AppVersion") %>
```

#### 🔹 `out`
```jsp
<% out.println("Welcome to JSP!"); %>
```

#### 🔹 `exception` (only in error page with `isErrorPage="true"`)
```jsp
<%= exception.getMessage() %>
```

### **2.6 Directive Elements in JSP**
> PYQ: Directive Elements of JSP (2024, 2.5 marks)

#### ✅ What are Directive Elements?
Directive elements provide global information to the JSP container about an entire JSP page. They control how the JSP page is processed, including importing packages, defining error pages, and specifying session usage. They are defined using the `<%@ ... %>` syntax and do not produce any output.

#### ✅ Types of Directive Elements
There are 3 types of directive elements in JSP:

1. **Page Directive**:
   - Provides page-level attributes such as language, content type, etc.
   - Syntax: ```<%@ page attribute="value" %> ```
   - Common attributes include `language`, `contentType`, `import`, `session`, and `errorPage`.
   - Example:
     ```jsp
     <%@ page language="java" contentType="text/html; charset=UTF-8" %>
     ```

2. **Include Directive**:
   - Used to include static files (HTML, JSP) at translation time (before JSP is compiled).
   - Syntax: ```<%@ include file="filename" %> ```
   - It is similar to the `#include` directive in C/C++.
   - `include` is compile-time, <jsp:include> is runtime. Both are used to include files, but `include` is static and `jsp:include` is dynamic.
   - Used for reusable content like headers, footers, menus, etc.
   - Example:
     ```jsp
     <%@ include file="header.jsp" %>
     ```

3. **Taglib Directive**:
   - Used to declare a tag library for custom tags (like JSTL).
   - Syntax: ```<%@ taglib uri="URI" prefix="prefix" %> ```
   - Example (JSTL core):
     ```jsp
     <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
     ```

### **2.7 Exception Handling in JSP**

#### ✅ What is Exception Handling in JSP?
Exception handling in JSP is the process of managing runtime errors that occur during the execution of a JSP page. It allows developers to gracefully handle errors and provide meaningful feedback to users.   

There are two main ways to handle exceptions in JSP:

#### 🔷 1. **Using `errorPage` and `isErrorPage` attributes**

JSP provides two page directive attributes to handle exceptions:

| Attribute | Purpose |
|-----------|---------|
| `errorPage` | Used in the main JSP to specify the path of the error handling JSP. |
| `isErrorPage` | Set to `true` in the JSP that will handle the error. |

#### ✅ Example:

**Main page (index.jsp):**
```jsp
<%@ page errorPage="error.jsp" %>
<%
   int a = 5 / 0;  // This will throw ArithmeticException
%>
```

**Error page (error.jsp):**
```jsp
<%@ page isErrorPage="true" %>
<h2>Error Occurred</h2>
<p>Message: <%= exception.getMessage() %></p>
```

- The `exception` object is available only when `isErrorPage="true"` is set.


#### 🔷 2. **Using `try-catch` block inside scriptlets**

You can also handle exceptions manually using traditional `try-catch`.

```jsp
<%
   try {
       int a = 10 / 0;
   } catch (Exception e) {
       out.println("Exception handled: " + e.getMessage());
   }
%>
```

✅ **Note**: This method is suitable for **simple, local error handling**, not global page-level exceptions.


### **2.8 Action Elements in JSP**
Action elements in JSP are predefined XML tags that perform specific tasks like forwarding requests, including files, creating objects, etc. These elements are processed at runtime and follow XML syntax, which makes them different from directives (which are compile-time).

#### ✅ Common Action Elements

| Action Element | Purpose |
|----------------|---------|
| `<jsp:include>` | Includes a resource (JSP/HTML) **at runtime**. |
| `<jsp:forward>` | Forwards the request to another resource. |
| `<jsp:param>` | Adds parameters to `include` or `forward`. |
| `<jsp:useBean>` | Instantiates a JavaBean. |
| `<jsp:setProperty>` | Sets properties in a bean. |
| `<jsp:getProperty>` | Retrieves properties from a bean. |
| `<jsp:plugin>` | Embeds Java applets (rarely used now). |

#### 🔹 1. `<jsp:include>`

**Runtime inclusion** of another file. Useful for dynamic content.

```jsp
<jsp:include page="header.jsp" />
```

You can pass parameters:

```jsp
<jsp:include page="welcome.jsp">
   <jsp:param name="username" value="Deepak" />
</jsp:include>
```

#### 🔹 2. `<jsp:forward>`

**Redirects** the request to another resource. Processing of the current page stops after this.

```jsp
<jsp:forward page="login.jsp" />
```

With parameter:

```jsp
<jsp:forward page="user.jsp">
   <jsp:param name="id" value="101" />
</jsp:forward>
```

#### 🔹 3. `<jsp:useBean>`

Used to create or locate a **JavaBean**.

```jsp
<jsp:useBean id="user" class="com.example.User" scope="session" />
```

#### 🔹 4. `<jsp:setProperty>`

Sets a value in a bean property.

```jsp
<jsp:setProperty name="user" property="name" value="Deepak" />
```

Or get value from request parameter:

```jsp
<jsp:setProperty name="user" property="*" />
```

#### 🔹 5. `<jsp:getProperty>`

Displays a value from a bean.

```jsp
<jsp:getProperty name="user" property="name" />
```

#### 🔹 6. `<jsp:plugin>` (Legacy)

Used to embed Java applets (now outdated).

### **2.9 Expression Language (EL)**

#### ✅ What is Expression Language (EL)?
**Expression Language (EL)** in JSP is used to **access and manipulate application data easily** without using complex Java code (scriptlets). It simplifies how you work with data stored in request, session, and other scopes.

Introduced in JSP **2.0**, EL improves **readability and maintainability** of JSP pages. It allows developers to access JavaBeans properties, request parameters, and collections using a simple syntax.

#### ✅ Basic Syntax: ```${expression}```
- For example: `${username}  // prints value of 'username' from any scope`

#### ✅ Common Uses of EL

| Expression | Description |
|-----------|-------------|
| `${param.name}` | Retrieves request parameter `name` |
| `${header["User-Agent"]}` | Retrieves a request header |
| `${cookie.user.value}` | Gets the value of a cookie named `user` |
| `${sessionScope.user}` | Gets an attribute `user` from session scope |
| `${requestScope.data}` | Gets an attribute `data` from request scope |
| `${user.name}` | Gets the `name` property of a bean or object |

#### ✅ EL Implicit Objects

| EL Object | Description |
|-----------|-------------|
| `param` | Request parameters |
| `paramValues` | All values of a multi-valued parameter |
| `header` | Request headers |
| `headerValues` | All values of a multi-valued header |
| `cookie` | Cookies |
| `initParam` | Context init parameters |
| `pageScope` | Page scope attributes |
| `requestScope` | Request scope attributes |
| `sessionScope` | Session scope attributes |
| `applicationScope` | Application (context) scope attributes |

#### ✅ EL Operators

| Type | Examples |
|------|----------|
| Arithmetic | `+`, `-`, `*`, `/`, `%` |
| Logical | `&&`, `||`, `!` |
| Relational | `==`, `!=`, `<`, `>`, `<=`, `>=` |
| Empty check | `empty user` (returns true if null or empty) |
| Conditional | `${condition ? val1 : val2}` |

#### ✅ Example in JSP

```jsp
<%
    request.setAttribute("username", "Deepak");
%>

<p>Hello, ${username}!</p> <!-- Output: Hello, Deepak! -->

<p>Your IP: ${pageContext.request.remoteAddr}</p>
```


### **2.10 MVC Architecture in JSP**
> PYQ: MVC in JSP (2021, 2.5 marks; 2022, 2.5 marks)    
> PYQ: Explain MVC in JSP. (2023, 15 marks)

#### ✅ What is MVC? 
MVC is an architectural/design pattern that divides an application into three main components:
1. **Model**: Represents the data and business logic (Java classes, JavaBeans, JDBC, Hibernate).
2. **View**: Represents the presentation layer (JSP, HTML, CSS).
3. **Controller**: Handles user input and interactions (Servlet).
This separation isolates business logic from the UI, making applications more scalable, maintainable, and easier to test.

JSP acts as the View component in MVC, responsible only for rendering UI and not for business logic.    
Many modern frameworks like Spring MVC also follow this architecture, building upon the same principles.

**Model**:
- Represents the data and business logic of the application.
- It can be a simple Java class, JavaBean, JDBC, or a more complex structure like an ORM entity.
- It is responsible for data retrieval, storage, and manipulation.
- It communicates with the database and performs CRUD operations.

**View**: 
- Represents the presentation layer of the application. 
- It is responsible for displaying data to the user.
- It can be a JSP page, HTML page, or any other UI component.
- It receives data from the Model and renders it for the user.

**Controller**:
- Acts as an intermediary between the Model and View.
- It handles user requests and determines which Model and View to use.
- It processes user input, updates the Model, and selects the appropriate View for rendering.
- It is typically implemented using Servlets or Spring Controllers.

#### ✅ Why Use MVC?
- Created by **Trygve Reenskaug** to manage complexity in large applications.
- Used extensively in **web development and mobile apps**.
- Provides:
    - Clear separation of concerns.
    - Control over HTML and URLs (good for SEO).
    - Support for Test-Driven Development (TDD).
    - Easier maintenance and teamwork.

#### MVC Architecture Diagram
> `Client (Request) → Controller → Model ↔ View → Controller → Client (Response)`

```plaintext
          ┌─────────────────┐
          │     Client      │
          │   (Browser)     │
          └────────▲────────┘
      HTTP Request |     
                   | HTTP Response
          ┌────────▼────────┐
          │   Controller    │
          │   (Servlet)     │
          └────────┬────────┘
       ┌───────────┴───────────┐
       │                       │
┌──────▼──────┐        ┌───────▼───────┐
│    Model    │        │     View      │
│  (JavaBean) ◄────────►    (JSP)      │
└──────▲──────┘        └───────────────┘
       │
┌──────▼──────┐
│   Database  │
└─────────────┘
```
The architecture of MVC works as follows:
1. **Client** sends an HTTP request (e.g., clicks a button)
2. **Controller** (Servlet) receives and processes the request
3. Controller interacts with the **Model** (JavaBeans/JDBC) for business logic
4. Model manages data, potentially accessing the **Database**
5. Controller selects the appropriate **View** (JSP) and passes data
6. View renders the UI using data from the Model
7. Controller returns the HTTP response to the Client

#### ✅ Real-World Example
In a bookstore application:
1. User clicks "Add to Cart" (View interaction)
2. Request goes to CartController servlet (Controller)
3. Controller calls CartService to update the cart (Model)
4. CartService updates the database
5. Controller forwards to cart.jsp (View)
6. cart.jsp displays the updated cart to the user

| Component      | Responsibility                                          | Example (Bookstore app)                        |
|----------------|--------------------------------------------------------|----------------------------------------------|
| **Model**      | Handles data logic and business rules.                  | Manages books data: title, author, price.      |
| **View**       | Displays UI elements and renders data.                  | Shows list of books, book details, UI forms.   |
| **Controller** | Processes user input, updates Model, and selects Views. | Handles search, add to cart, checkout actions. |

#### ✅ Benefits of MVC in JSP
- **Separation of Concerns**: Each component has a specific role, making the code easier to manage.
- **Reusability**: Models and views can be reused across different applications.
- **Maintainability**: Changes in one component do not affect others, making it easier to maintain.
- **Modularity**: Each component can be developed and maintained separately.
- **Scalability**: MVC architecture allows for better scalability as the application grows.
- **Flexibility**: Different views can be created for the same model, allowing for multiple user interfaces.
- **Collaboration**: Different teams can work on different components simultaneously.

#### ✅ Limitations of MVC in JSP
- **Complexity**: More components can lead to increased complexity in small applications.
- **Debugging**: Debugging can be more complex due to multiple layers of abstraction.
- **Configuration**: Requires additional configuration and setup compared to simpler architectures.
- **Performance**: May introduce overhead due to multiple layers of processing.
- **Dependency Management**: Managing dependencies between components can be challenging.

### **2.11 JSTL (JavaServer Pages Standard Tag Library)**

#### ✅ What is JSTL?
- JSTL (JavaServer Pages Standard Tag Library) is a collection of ready-to-use JSP tags that encapsulates core functionality common to many JSP applications. 
- It simplifies the development of JSP pages by providing tags for common tasks such as displaying content, iterating over collections, conditional logic, formatting, database access, XML handling, etc. 
- It removes the need for Java code in JSP, making pages cleaner and more readable.
- JSP tags are XML-based and can be used in JSP pages to perform various operations without writing Java code.

#### ✅ Benefits of Using JSTL

- **No need for scriptlets** (`<% %>`)
- Clean, maintainable JSP code
- Encourages **MVC architecture**
- Easy to use with **Expression Language (EL)**
- Built-in support for **internationalization** (i18n)
- Reduces boilerplate code
- Provides a standard way to handle common tasks

#### ✅ How to Use JSTL in JSP?

1. **Add JSTL JAR files** in your project:
   - `jstl.jar`
   - `standard.jar`

2. **Import the JSTL tag library** at the top of your JSP:

```jsp
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
```

#### ✅ JSTL Tag Libraries

| Prefix | Library | Purpose |
|--------|---------|---------|
| `c`    | Core    | Iteration, conditions, URL, etc. |
| `fmt`  | Formatting | Date, time, number formatting, i18n |
| `sql`  | SQL     | Execute SQL queries |
| `xml`  | XML     | XML data handling |
| `fn`   | Functions | String functions |

---

### **2.12 Custom Tags in JSP**
#### ✅ What are Custom Tags?

Custom tags are **user-defined tags** that can be used in JSP files just like built-in tags. They allow developers to encapsulate complex functionality into reusable components, making JSP pages cleaner and easier to maintain. Custom tags are defined in a **Tag Library Descriptor (TLD)** file, which describes the tag's name, attributes, and the Java class that implements it. Custom tags can be used to encapsulate complex logic, making JSP pages cleaner and easier to read.

#### ✅ Benefits of Custom Tags
- Cleaner JSPs (no Java code)
- Promotes **code reusability**
- Makes JSP pages **modular** and easier to maintain
- Ideal when the same logic is needed across multiple JSPs
- Integrates well with MVC design

#### ✅ Ways to Create Custom Tags
Custom tags can be created using Java classes (Tag Handlers) or tag files.
- **Tag Handlers**: Java classes that implement the `Tag` or `SimpleTag` interface.
- **Tag Files**: Simple text files with a `.tag` extension that contain JSP code.

#### ✅ 1. **Using Tag Handler Class (Java)**

#### 📌 Steps:

1. Create a class extending `TagSupport` or `SimpleTagSupport`
2. Write tag logic in `doTag()` method
3. Define a TLD (Tag Library Descriptor) file
4. Use the tag in JSP by importing the taglib

#### ✨ Example:

**CustomTag.java**
```java
public class CustomTag extends SimpleTagSupport {
    public void doTag() throws JspException, IOException {
        getJspContext().getOut().write("Hello from Custom Tag!");
    }
}
```

**tlds/custom.tld**
```xml
<tag>
  <name>greet</name>
  <tag-class>com.tags.CustomTag</tag-class>
  <body-content>empty</body-content>
</tag>
```

**JSP Usage:**
```jsp
<%@ taglib uri="/WEB-INF/tlds/custom.tld" prefix="my" %>
<my:greet />
```

#### ✅ 2. **Using Tag Files (Simple Way)**

#### 📌 Steps:

1. Create a `.tag` file in `WEB-INF/tags`
2. Write JSP-like logic in that file
3. Import and use in any JSP

#### ✨ Example:

**greet.tag** (placed in `WEB-INF/tags/`)
```jsp
<%@ tag description="Greet Tag" %>
Hello from Tag File!
```

**JSP Usage:**
```jsp
<%@ taglib prefix="my" tagdir="/WEB-INF/tags" %>
<my:greet />
```

### **2.13 Pagination in JSP**

#### ✅ What is Pagination?
Pagination is the process of dividing large content into smaller discrete pages, rather than showing all the data at once. It’s commonly used to display records from a database in a user-friendly, manageable format. It improves performance and user experience.

#### ✅ Why Use Pagination?
- **Performance**: Reduces load time by limiting data displayed at once.
- **Usability**: Makes it easier for users to navigate through large datasets.
- **Organization**: Keeps the UI clean and organized.
- **Scalability**: Handles large datasets efficiently.
- **User Experience**: Provides a better experience by allowing users to focus on a smaller set of data at a time.

#### ✅ How Pagination Works in JSP
The backend (e.g., Servlet + JDBC) fetches a specific range of records from the database based on:
- **Page Number**: The current page the user is on.
- **Page Size**: The number of records to display per page.
Then the JSP page displays the records and provides navigation links (Next, Previous, First, Last) to move between pages.

#### ✅ Implementing Pagination in JSP
1. Retrieve data from the database with a limit and offset.
2. Calculate the total number of pages based on the dataset size.
3. Display page links for navigation.

#### ✅ Example Code
```jsp
<%@ page import="java.sql.*, java.util.*" %>
<%
    int pageSize = 10;
    int pageNum = Integer.parseInt(request.getParameter("pageNum", "1"));
    int totalRecords = // query to get total records;
    int totalPages = (int) Math.ceil((double) totalRecords / pageSize);
    List<Data> dataList = // query to get data with limit and offset;

    for (Data data : dataList) {
        out.println(data.toString());
    }
%>
<a href="?pageNum=1">First</a>
<a href="?pageNum=<%= pageNum - 1 %>">Previous</a>
<a href="?pageNum=<%= pageNum + 1 %>">Next</a>
<a href="?pageNum=<%= totalPages %>">Last</a>
```

### **2.14 CRUD Operations in JSP**
#### ✅ What is CRUD?
CRUD stands for Create (Insert), Read (View), Update (Edit), and Delete (Remove). It represents the four basic operations that can be performed on data in a database.
In JSP, CRUD is implemented by connecting JSP pages with Servlets and JDBC/DAO for database interaction.

#### ✅ How CRUD Works in a JSP + Servlet Architecture
| Component   | Role                                   |
| ----------- | -------------------------------------- |
| **JSP**     | Frontend (UI) – forms, tables          |
| **Servlet** | Controller – handles logic and routing |
| **DAO**     | Data access – executes SQL queries     |
| **Model**   | Represents entity (like Student)       |
| **Database**| Stores data (MySQL, Oracle, etc.)      |

#### ✅ Implementing CRUD in JSP
1. **Create**: Insert new records into the database.
2. **Read**: Retrieve records from the database.
3. **Update**: Modify existing records in the database.
4. **Delete**: Remove records from the database.

#### ✅ Example Code for CRUD Operations
```jsp
<%@ page import="java.sql.*, java.util.*" %>
<%
    String action = request.getParameter("action");

    if ("create".equals(action)) {
        // Code to create a new record
    } else if ("read".equals(action)) {
        // Code to read records from the database
    } else if ("update".equals(action)) {
        // Code to update an existing record
    } else if ("delete".equals(action)) {
        // Code to delete a record from the database
    }
%>
```

### **2.15 JSTL Functions**

#### ✅ What are JSTL Functions?
JSTL Functions are built-in functions provided by JSTL for common tasks such as string manipulation, collection handling, conditionals logic and XML processing. JSTL Functions are part of the `fn` library and are used for string manipulation, similar to Java’s `String` class methods.

#### ✅ How to Use JSTL Functions

##### 🔸 Step 1: Import JSTL Functions Library

```jsp
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
```

##### 🔸 Step 2: Use functions in expressions

You use them with `${}` inside JSP.

#### 🔹 Common JSTL Functions

| Function                        | Description                            | Example                            |
| ------------------------------- | -------------------------------------- | ---------------------------------- |
| `fn:contains(str, substr)`      | Checks if substring exists             | `${fn:contains(name, "Neo")}`      |
| `fn:startsWith(str, prefix)`    | Checks if string starts with prefix    | `${fn:startsWith(email, "admin")}` |
| `fn:endsWith(str, suffix)`      | Checks if string ends with suffix      | `${fn:endsWith(email, ".com")}`    |
| `fn:length(str)`                | Returns length of string or collection | `${fn:length(name)}`               |
| `fn:toLowerCase(str)`           | Converts string to lowercase           | `${fn:toLowerCase(name)}`          |
| `fn:toUpperCase(str)`           | Converts string to uppercase           | `${fn:toUpperCase(name)}`          |
| `fn:trim(str)`                  | Removes leading/trailing whitespace    | `${fn:trim(name)}`                 |
| `fn:substring(str, begin, end)` | Returns substring                      | `${fn:substring(name, 0, 4)}`      |
| `fn:replace(str, a, b)`         | Replaces characters                    | `${fn:replace(name, "a", "x")}`    |
| `fn:split(str, delimiter)`      | Splits a string into array             | `${fn:split(name, ",")}`           |
| `fn:join(array, delimiter)`     | Joins array into string                | `${fn:join(arr, ",")}`             |

#### 💡 Example

```jsp
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="email" value="admin@neocode.com" />

<c:if test="${fn:endsWith(email, '.com')}">
  <p>Email is valid.</p>
</c:if>

<p>Domain: ${fn:substring(email, fn:indexOf(email, "@")+1, fn:length(email))}</p>
```

#### ✅ Why Use JSTL Functions?
* Avoids Java scriptlets in JSP
* Clean and readable syntax
* Helps in string validation and display formatting


### **2.16 Formatting in JSP**
Formatting in JSP allows developers to format data for display, such as dates, numbers, and currencies.

#### ✅ What is JSTL Formatting?

JSTL **Formatting tags** (from `fmt` taglib) are used to **format numbers, dates, messages, and locale-specific data** in JSP pages. These tags make internationalization (i18n) and localization (l10n) easier.


#### ✅ Import the JSTL Format Library

```jsp
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
```

#### ✅ Common JSTL Formatting Tags

| Tag                  | Description                                  | Example                                                     |
| -------------------- | -------------------------------------------- | ----------------------------------------------------------- |
| `<fmt:formatNumber>` | Formats numbers (currency, percent, decimal) | `${fmt:formatNumber value="12345.678" type="currency"}`     |
| `<fmt:formatDate>`   | Formats date/time                            | `${fmt:formatDate value="${now}" pattern="dd-MM-yyyy"}`     |
| `<fmt:setLocale>`    | Sets locale for formatting                   | `<fmt:setLocale value="en_US" />`                           |
| `<fmt:setBundle>`    | Sets the resource bundle for i18n            | `<fmt:setBundle basename="messages" />`                     |
| `<fmt:message>`      | Retrieves localized message from bundle      | `<fmt:message key="greeting" />`                            |
| `<fmt:parseNumber>`  | Parses string into number                    | `<fmt:parseNumber value="100" />`                           |
| `<fmt:parseDate>`    | Parses string into date                      | `<fmt:parseDate value="01-05-2025" pattern="dd-MM-yyyy" />` |


### **2.17 XML in JSP**

#### ✅ What is XML in JSP?
XML (eXtensible Markup Language) is a markup language used to store and transport data. In JSP, XML can be used to define data structures and exchange information between different systems.
JSTL provides an XML tag library (<c:...> and <x:...>) that allows developers to parse, navigate, and display XML data in JSP pages without using Java code directly.

#### ✅ JSTL XML Tag Library

To use XML tags, you must import:

```jsp
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml" %>
```

#### ✅ Common XML Tags in JSTL

| Tag                                       | Description                            |
| ----------------------------------------- | -------------------------------------- |
| `<x:parse>`                               | Parses XML data and stores it as a DOM |
| `<x:out>`                                 | Displays selected XML data             |
| `<x:forEach>`                             | Iterates over XML nodes                |
| `<x:choose>`, `<x:when>`, `<x:otherwise>` | Conditional XML-based logic            |
| `<x:set>`                                 | Sets a variable from XML data          |
| `<x:if>`                                  | Evaluates a condition in XML           |

#### ✅ Example XML Data

Suppose we have the following XML string:

```xml
<students>
  <student>
    <name>Deepak</name>
    <branch>CSE</branch>
  </student>
  <student>
    <name>Riya</name>
    <branch>IT</branch>
  </student>
</students>
```

#### ✅ Parsing XML in JSP

```jsp
<c:set var="xmlData">
  <![CDATA[
    <students>
      <student>
        <name>Deepak</name>
        <branch>CSE</branch>
      </student>
      <student>
        <name>Riya</name>
        <branch>IT</branch>
      </student>
    </students>
  ]]>
</c:set>

<x:parse var="doc" xml="${xmlData}" />
```

#### ✅ Displaying XML Data

```jsp
<x:forEach select="$doc/students/student" var="s">
  Name: <x:out select="$s/name" /> <br />
  Branch: <x:out select="$s/branch" /> <br /><br />
</x:forEach>
```

✅ **Output:**

```
Name: Deepak
Branch: CSE

Name: Riya
Branch: IT
```

#### ✅ Benefits of Using JSTL for XML in JSP

* No need for explicit Java code
* Easy and clean parsing and looping over XML
* Enables building XML-driven web pages (e.g., RSS feed readers)
* Great for **data separation** and **internationalization**

### **2.18 SQL Tags in JSP (JSTL SQL Tag Library)**

#### ✅ What are SQL Tags?
- The **JSTL SQL tag library** is used to perform **database operations (CRUD)** directly from JSP pages without writing JDBC code manually.
- It is part of JSTL and is **only recommended for prototyping or small apps**, not for large-scale applications (use JDBC/ORM in MVC pattern instead).

#### ✅ Importing SQL Tag Library

```jsp
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
```

#### ✅ Common JSTL SQL Tags

| Tag                   | Purpose                                                   |
| --------------------- | --------------------------------------------------------- |
| `<sql:setDataSource>` | Sets up the DB connection                                 |
| `<sql:query>`         | Executes SQL SELECT queries                               |
| `<sql:update>`        | Executes INSERT, UPDATE, DELETE                           |
| `<sql:param>`         | Sets parameters inside queries (like prepared statements) |
| `<sql:transaction>`   | Performs multiple operations as a transaction             |

### ✅ Advantages

* Easy to perform DB operations in JSP
* No need to write boilerplate JDBC code
* Good for **quick development and learning**

### ❌ Limitations

* Not recommended for real-world, large-scale applications
* Violates **MVC pattern** (mixing DB and view logic)
* Lacks flexibility and error handling control

---
*These notes were compiled by Deepak Modi, MDU (2026)*
*Contact: deepakmodidev@gmail.com*