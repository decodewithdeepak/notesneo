# Unit 2: Struts and Mail API

**Author: Deepak Modi**    

**Syllabus :**      
**Struts:** Introduction, features, models, components, struts2 architecture, action, configuration, interceptors, validation method, aware Interfaces, stuts2withI18N, zero configuration, struts2withtiles, hibernate with struts2, spring with struts2, UI tags.     
**Mail API:** Java mail introduction, methods of sending email, sending mail by Gmail, receiving email, sending attachment, receiving attachment, sending html, forwarding, deleting email.

## MDU PYQs:
### Struts Framework  

1. **Struts Short Questions**
   - UI tags (2021, 2.5 marks)
   - Interceptors in Struts (2024, 2.5 marks)

2. **Struts Architecture & Features** (2021-2024) - **HIGH PRIORITY**
   - Explain the features/core components/architecture of Struts and Struts 2. (2021, 2022, 2023, 15 marks)
   - Explain MVC model and Struts 2 architecture in detail. (2024, 15 marks)

### Java Mail API  

1. **Java Mail Short Questions**
   - Uses of mail API (2024, 2.5 marks)

2. **Mail API Implementation** (2021-2024) - **HIGH PRIORITY**
   - What is Java mail API? Write the methods for sending and receiving mail using Java Mail API. (2021, 2022, 2024, 15 marks)
   - Write a program displaying steps to delete an email using Java Mail API. (2023, 15 marks)

---

## **Section 1 : Struts**

### **1.1 : Introduction to Struts**

Struts is an open-source web application framework that extends the Java Servlet API and employs a Model-View-Controller (MVC) architecture. It was originally created by Craig McClanahan and donated to the Apache Foundation in 2000.

**Key Points:**
- Struts is a framework for building Java EE web applications
- It follows the MVC architectural pattern
- The latest version is Struts 2 (a merger of WebWork and Struts 1)
- WebWork is a popular framework for building web applications in Java
- Designed to streamline the development process of web applications

**Evolution of Struts:**
- **Struts 1.x**: Original version based on Servlet/JSP
- **Struts 2.x**: Complete rewrite based on WebWork

### **1.2 : Features of Struts**
> PYQ: Explain the features/core components/architecture of Struts and Struts 2. (2021, 2022, 2023, 15 marks)

Struts provides several features that enhance the development of web applications:
1. **MVC Architecture**: Separates application logic, presentation, and control flow.
2. **Tag Libraries**: Simplifies JSP development with custom tags for form handling, iteration, and data display.
3. **Internationalization (I18N)**: Supports multiple languages and locales.
4. **Validation Framework**: Built-in validation mechanism for user input.
5. **Interceptors**: Pre- and post-processing of requests, allowing for cross-cutting concerns like logging and security.
6. **Integration with Other Frameworks**: Easily integrates with Hibernate, Spring, and other Java EE technologies.
7. **Convention over Configuration**: Reduces the need for extensive XML configuration files.
8. **Extensible Architecture**: Customizable components and extensible framework.
9. **Support for RESTful Web Services**: Facilitates the development of RESTful APIs.
10. **Support for AJAX**: Enhances user experience with asynchronous requests.

### **1.3 : Models in Struts**

Struts is based on the MVC (Model-View-Controller) architectural pattern that divides an application into three interconnected components:

**1. Model:**
- Represents application data and business logic
- Maintains the state of the application
- Responds to instructions to change state
- Implements the business rules

**2. View:**
- Renders the model into a form suitable for interaction
- In Struts, typically JSP pages or templates
- Multiple views can exist for a single model

**3. Controller:**
- Processes incoming requests
- Orchestrates user input
- Manipulates the model and selects views
- In Struts 2, the controller is implemented using actions and interceptors

**MVC Flow in Struts 2:** Client sends HTTP request → FilterDispatcher receives it → Interceptors pre-process → Action executes business logic → Model updated → View renders response → Client receives HTTP response.

The MVC pattern in Struts 2 promotes:
- **Separation of concerns**: Each component has a distinct responsibility
- **Code reusability**: Models and views can be reused across actions
- **Testability**: Each component can be tested independently
- **Maintainability**: Changes to one component have minimal impact on others

### **1.4 : Components of Struts**

Struts 2 consists of several key components that work together:

**1. Actions**
- Core component handling user requests
- Contains business logic
- Provides data for views

Example of a simple Action class:
```java
public class HelloWorldAction extends ActionSupport {
    private String message;
    
    public String execute() {
        message = "Hello, World!";
        return SUCCESS;
    }
    
    public String getMessage() {
        return message;
    }
}
```

**2. Interceptors**
- Cross-cutting concerns like validation and logging
- Executed before and after action execution
- Can be chained together in "stacks"

**3. Results**
- Represents the response to a request
- Examples: JSP, FreeMarker template, JSON, etc.
- Configured in struts.xml or via annotations

**4. Value Stack / OGNL**
- Expression language for accessing data
- Manages data throughout request processing
- Used in JSPs and other templates

**5. Configuration Files**
- struts.xml: Main configuration file
- struts.properties: Properties configuration
- validation.xml: Validation rules

**6. Tag Libraries**
- UI tags for form elements
- Control tags for iteration and conditionals
- Data tags for accessing model data

### **1.5 : Struts 2 Architecture**
> PYQ: Explain the features/core components/architecture of Struts and Struts 2. (2021, 2022, 2023, 15 marks)
> PYQ: Explain MVC model and Struts 2 architecture in detail. (2024, 15 marks)

Struts 2 architecture is built on the MVC pattern and consists of several components that work together to process requests and generate responses.

```
                      ┌──────────────┐
                      │   Browser    │
                      └──────┬───────┘
                             │
                      ┌──────▼───────────┐
                      │ FilterDispatcher │
                      │(Front Controller)│
                      └──────┬───────────┘
                             │
                      ┌──────┴───────┐
                      │              │
               ┌──────▼───────┐ ┌────▼─────┐
               │ Interceptors │ │  Action  │
               └──────┬───────┘ └────┬─────┘
                      │              │
                      │         ┌────▼─────┐
                      │         │  Model   │
                      │         └────┬─────┘
                      │              │
            ┌─────────▼──────────────▼────┐
            │      Result / View          │
            │     (JSP / HTML etc.)       │
            └─────────────────────────────┘
```

**Struts 2 Architecture Workflow:**

1. **Client Request**: Browser sends HTTP request to the server
2. **FilterDispatcher**: Entry point for Struts 2 applications that processes all requests
3. **Interceptors**: Process the request before and after action execution
4. **Action**: Contains business logic and handles the request
5. **Model**: Contains data and business logic
6. **Result/View**: Generates the response (JSP, FreeMarker, etc.)

The key components work together in a pipeline:
- The request is first processed by the FilterDispatcher
- Various interceptors handle cross-cutting concerns like validation and authentication
- The action is executed to process the request and modify the model
- The result component generates the response based on the action's return value
- The response is sent back to the client

**1.6 : Actions in Struts 2**

Actions are the core components in Struts 2 that handle user requests and contain the business logic of the application. It is the entry point for processing requests and generating responses.

**Characteristics of Actions:**
- POJO (Plain Old Java Object) classes
- Contain business logic
- Return result strings to select views
- Can implement interfaces or extend classes
- Can have multiple methods for different actions

**Ways to Create Actions:**

**1. Implementing Action Interface:**
```java
public class LoginAction implements Action {
    public String execute() {
        return SUCCESS;
    }
}
```

**2. Extending ActionSupport Class (Recommended):**
```java
public class RegisterAction extends ActionSupport {
    private User user;
    
    public String execute() {
        userService.register(user);
        return SUCCESS;
    }
    
    // Getters and setters
}
```

**3. Any POJO with execute() Method:**
```java
public class SimpleAction {
    public String execute() {
        return "success";
    }
}
```

**Multiple Action Methods:**
```java
public class UserAction extends ActionSupport {
    // Default method
    public String execute() {
        return SUCCESS;
    }
    
    // Additional methods
    public String add() { return SUCCESS; }
    public String delete() { return SUCCESS; }
}
```

**Result Constants:**
- SUCCESS = "success"
- ERROR = "error"
- INPUT = "input"
- LOGIN = "login"
- NONE = "none"

### **1.7 : Configuration in Struts 2**

Struts 2 supports multiple ways to configure actions and results:

**1. XML Configuration (struts.xml):**
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE struts PUBLIC 
    "-//Apache Software Foundation//DTD Struts Configuration 2.5//EN" 
    "http://struts.apache.org/dtds/struts-2.5.dtd">
<struts>
    <package name="default" namespace="/" extends="struts-default">
        <action name="hello" class="com.example.HelloWorldAction">
            <result name="success">/success.jsp</result>
            <result name="error">/error.jsp</result>
        </action>
    </package>
</struts>
```

**2. Annotation-based Configuration:**
```java
@Namespace("/user")
@Results({
    @Result(name="success", location="/user/success.jsp"),
    @Result(name="input", location="/user/input.jsp")
})
public class UserAction extends ActionSupport {
    @Action(value="register")
    public String register() {
        // Registration logic
        return SUCCESS;
    }
    
    @Action(value="login")
    public String login() {
        // Login logic
        return SUCCESS;
    }
}
```

**3. Convention Plugin:**
- Uses naming conventions to minimize configuration
- Actions in specific packages automatically mapped to URLs
- Result pages expected in conventional locations

**4. Configuration Files Hierarchy:**
- struts.xml (main)
- struts.properties
- struts-default.xml
- web.xml (for servlet container)

### **1.8 : Interceptors in Struts 2**
> PYQ: Interceptors in Struts (2024, 2.5 marks)

Interceptors are a powerful feature in Struts 2 that is used to preprocess and postprocess requests. They are similar to filters in Servlet API but are more flexible and integrated into the Struts framework.

**Common Interceptors:**
1. **params**: Populates action properties from request parameters
2. **validation**: Handles validation of action data
3. **workflow**: Manages action execution workflow
4. **fileUpload**: Handles file upload functionality
5. **exception**: Handles uncaught exceptions
6. **i18n**: Internationalization support
7. **logger**: Logs action invocations
8. **timer**: Measures action execution time

**Interceptor Stack:**
- A collection of interceptors applied in a specific order
- Defined in struts.xml configuration
- The defaultStack is used if no specific stack is assigned
- Custom stacks can be created by combining existing interceptors

**Example Code:**
```java
// Basic custom interceptor pattern
public class LoggingInterceptor extends AbstractInterceptor {
    @Override
    public String intercept(ActionInvocation invocation) throws Exception {
        // Pre-processing logic
        String result = invocation.invoke(); // Execute the action
        // Post-processing logic
        return result;
    }
}
```

### **1.9 : Validation Methods in Struts 2**

Struts 2 provides a robust validation framework to ensure that user input is valid before processing it. This helps ensure that the data is clean and meets the application's requirements. Validation can be done in several ways:

**1. validate() Method:**
- Override the validate() method from ActionSupport
- Invoked automatically before the execute() method
- Can add field errors using addFieldError() method
- Returns to input result if errors are found

```java
@Override
public void validate() {
    if (StringUtils.isEmpty(username)) {
        addFieldError("username", "Username is required");
    }
}
```

**2. Validation XML File:**
- Create a validation.xml file in the same package as the action class
- Define validation rules using XML tags
- Automatically applied based on action name

```xml
<validators>
    <field name="username">
        <field-validator type="requiredstring">
            <message>Username is required</message>
        </field-validator>
    </field>
</validators>
```

**3. Annotations:**
- Use annotations to define validation rules directly in the action class
- Requires the struts2-validation plugin

```java
@Validations(
    requiredFields = {
        @RequiredFieldValidator(fieldName = "username", message = "Username is required")
    }
)
public class RegisterAction extends ActionSupport {
    // Action properties and methods
}
```

**4. Custom Validators:**
- Create custom validators by implementing the Validator interface
- Can be reused across multiple actions

### **Validation Framework Benefits:**
1. Centralized validation logic
2. Easy to maintain and extend
3. Supports internationalization of error messages
4. Integration with Struts 2 interceptors

### **1.10 : Aware Interfaces in Struts 2**

Aware interfaces allow actions to access Struts 2 components and services. They provide a way to inject dependencies into action classes.

**Common Aware Interfaces:**
1. **ActionAware**: Provides access to the ActionContext.
2. **SessionAware**: Provides access to the session map.
3. **ServletRequestAware**: Provides access to the HttpServletRequest.
4. **ServletResponseAware**: Provides access to the HttpServletResponse.
5. **ApplicationAware**: Provides access to the application context.
6. **LocaleAware**: Provides access to the user's locale.
7. **ValidationAware**: Provides access to validation results and messages.

**Example of Using Aware Interfaces:**
```java
public class MyAction extends ActionSupport implements SessionAware, ServletRequestAware {
    private Map<String, Object> session;
    private HttpServletRequest request;

    @Override
    public void setSession(Map<String, Object> session) {
        this.session = session;
    }

    @Override
    public void setServletRequest(HttpServletRequest request) {
        this.request = request;
    }

    public String execute() {
        // Access session and request here
        return SUCCESS;
    }
}
```

### **1.11 : Struts 2 with Internationalization (I18N)**

Struts 2 provides robust support for creating multilingual applications through internationalization (I18N). It allows developers to create applications that can be easily localized for different languages and regions.

**Key Concepts:**
1. **Resource Bundles**: Properties files that contain key-value pairs for localized strings.
2. **Locale**: Represents a specific geographical, political, or cultural region.
3. **OGNL (Object-Graph Navigation Language)**: Used to access properties in resource bundles.

**Configuration Steps:**
1. Create properties files for different languages (e.g., messages_en.properties, messages_fr.properties).
2. Configure the resource bundle in struts.xml:
```xml
<constant name="struts.custom.i18n.resources" value="messages"/>
```
3. Use the `s:text` tag to access localized strings in JSP:
```jsp
<s:text name="welcome.message"/>
```
4. Set the locale in the action or interceptor:
```java
Locale locale = new Locale("fr");
ActionContext.getContext().setLocale(locale);
```

**Example of Resource Bundle:**
```properties
# messages_en.properties
welcome.message=Welcome to our website!

# messages_fr.properties
welcome.message=Bienvenue sur notre site Web!
```

**Benefits of I18N:**
1. Improved user experience for global users
2. Simplified localization process
3. Centralized management of language resources
4. Easy to add support for new languages


### **1.12 : Zero Configuration in Struts 2**

Zero configuration (or "convention over configuration") is a feature in Struts 2 that allows developers to minimize the amount of XML configuration required. It uses naming conventions to automatically map actions, results, and views.

**Key Concepts of Zero Configuration:**
1. **Convention-based Action Mapping**: Actions are automatically mapped based on class names and method names.
2. **Default Result Types**: Struts 2 uses default result types (like JSP) based on naming conventions.
3. **Automatic View Resolution**: Views are resolved based on action names, reducing the need for explicit configuration.
4. **Package Structure**: Actions can be organized in packages, and Struts will automatically detect them.

**Example of Zero Configuration:**
```java
public class UserAction extends ActionSupport {
    public String register() {
        // Registration logic
        return SUCCESS; // Automatically maps to /user/register.jsp
    }
}
```

**Zero Configuration Benefits:**
1. Reduced boilerplate code
2. Faster development cycle
3. Easier to maintain and understand
4. Less XML configuration
5. Encourages best practices and conventions

**Limitations:**
- May not be suitable for complex applications with custom routing
- Less explicit control over action mappings
- Can lead to confusion if conventions are not followed
- Requires a good understanding of Struts 2 conventions

### **1.13 : Struts 2 with Tiles**

Apache Tiles is a templating framework that allows developers to create reusable page layouts and components. It integrates seamlessly with Struts 2, enabling the creation of consistent and modular web applications.

**Benefits of Tiles:**
1. Consistent layouts across pages
2. Reusable page components
3. Reduced duplication
4. Better maintainability
5. Simplified page composition

**Configuration Steps:**
1. Add Tiles dependencies to your project.
2. Create a tiles.xml configuration file to define templates and layouts.
3. Configure Struts 2 to use Tiles as the view technology.

**Example of tiles.xml:**
```xml
<tiles-definitions>
    <definition name="baseLayout" template="/WEB-INF/layouts/baseLayout.jsp">
        <put-attribute name="title" value="My Application"/>
        <put-attribute name="header" value="/WEB-INF/headers/defaultHeader.jsp"/>
        <put-attribute name="footer" value="/WEB-INF/footers/defaultFooter.jsp"/>
    </definition>
    
    <definition name="homePage" extends="baseLayout">
        <put-attribute name="content" value="/WEB-INF/pages/home.jsp"/>
    </definition>
</tiles-definitions>
```

**Example of JSP using Tiles:**
```jsp
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>

<tiles:insertDefinition name="homePage">
    <tiles:putAttribute name="title" value="Welcome Home!"/>
</tiles:insertDefinition>
```

**Tiles Integration Benefits:**
1. Modular page design
2. Improved code reusability
3. Centralized layout management
4. Simplified JSP development
5. Enhanced maintainability

### **1.14 : Struts 2 with Hibernate**

Integrating Struts 2 with Hibernate provides a complete MVC framework with ORM capabilities. It allows developers to manage database interactions seamlessly while maintaining a clean separation of concerns.

**Integration Benefits:**
1. Hibernate ORM for data persistence
2. Transaction management
3. Database-driven content
4. Simplified data access layer
5. Separation of concerns between web and data layers

**Implementation Steps:**

**1. Include Dependencies:**
```xml
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>${hibernate.version}</version>
</dependency>
```

**2. Create Hibernate Configuration:**
```xml
<hibernate-configuration>
    <session-factory>
        <property name="hibernate.connection.driver_class">com.mysql.jdbc.Driver</property>
        <property name="hibernate.connection.url">jdbc:mysql://localhost:3306/mydb</property>
        <!-- Entity mappings -->
        <mapping class="com.example.model.User"/>
    </session-factory>
</hibernate-configuration>
```

**3. Create Entity Class:**
```java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    // Getters and setters
}
```

**4. Create DAO Layer:**
```java
public class UserDAO {
    public void save(User user) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        session.save(user);
        tx.commit();
        session.close();
    }
}
```

**5. Integration with Struts Action:**
```java
public class RegisterAction extends ActionSupport {
    private User user = new User();
    private UserDAO userDAO = new UserDAO();
    
    public String execute() {
        userDAO.save(user);
        return SUCCESS;
    }
    // Getters and setters
}
```

### **1.15 : Struts 2 with Spring**

Integrating Struts 2 with Spring brings together Spring's dependency injection with Struts' web framework. It allows for better management of application components and promotes a clean separation of concerns.

**Integration Benefits:**
1. Dependency injection for Struts actions
2. Spring-managed action beans
3. Integration with Spring services, AOP, and transactions
4. Simplified configuration and management of beans
5. Improved testability and maintainability

**Basic Implementation:**

1. **Add Dependencies:**
```xml
<dependency>
    <groupId>org.apache.struts</groupId>
    <artifactId>struts2-spring-plugin</artifactId>
    <version>${struts2.version}</version>
</dependency>
```

2. **Configure Spring Context:**
```xml
<beans>
    <bean id="userService" class="com.example.service.UserServiceImpl"/>
    
    <bean id="registerAction" class="com.example.actions.RegisterAction" scope="prototype">
        <property name="userService" ref="userService"/>
    </bean>
</beans>
```

3. **Create Spring-Aware Struts Action:**
```java
public class RegisterAction extends ActionSupport {
    private UserService userService;
    
    public String execute() {
        userService.registerUser(user);
        return SUCCESS;
    }
    
    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}
```

With this integration, actions can easily access Spring-managed services while maintaining Struts' request handling capabilities.

### **1.16 : Struts 2 UI Tags**
> PYQ: UI tags (2021, 2.5 marks)

UI tags are custom JSP tags provided by Struts 2 to simplify the creation of user interfaces. They allow developers to create form elements, display data, and manage user interactions without writing extensive Java code.

**Tag Categories:**
Struts 2 provides a comprehensive tag library for form generation and UI controls. The tags are categorized into several groups based on their functionality:

**1. Form Tags:**
- **textfield**: Creates text input field
- **password**: Creates password field
- **textarea**: Creates multi-line text input
- **checkbox**: Creates a single checkbox
- **submit**: Creates form submit button
- **reset**: Creates form reset button
- **file**: Creates file upload field
- **form**: Creates HTML form with Struts 2 integration

**2. Select Input Tags:**
- **select**: Dropdown selection list
- **radio**: Radio button group
- **checkboxlist**: Multiple checkbox group
- **doubleselect**: Two-tier selection (cascading dropdowns)
- **combobox**: Combination of textbox and dropdown

**3. Date and Time Tags:**
- **datetimepicker**: Date and time selection control
- **datepicker**: Date-only selection control

**4. Control Tags:**
- **if/elseif/else**: Conditional output
- **iterator**: Loop through collections
- **generator**: Create collection for iteration
- **append**: Combine collections
- **merge**: Merge collections
- **sort**: Sort a collection

**5. Data Tags:**
- **property**: Display property value
- **set**: Set variable value
- **push**: Push value onto value stack
- **bean**: Create JavaBean instance
- **action**: Execute an action
- **include**: Include content from another page

**6. UI Themes:**
- **simple**: Minimal HTML with no styling
- **xhtml**: Standard HTML with CSS classes
- **css_xhtml**: XHTML with CSS styling
- **bootstrap**: Twitter Bootstrap styling (with plugin)

**UI Tag Example:**
```jsp
<%@ taglib prefix="s" uri="/struts-tags" %>

<s:form action="login">
    <s:textfield name="username" label="Username"/>
    <s:password name="password" label="Password"/>
    <s:submit value="Login"/>
</s:form>
```

**Benefits of Struts 2 Tags:**
- Automatic data binding with action properties
- Theme-based styling and layout
- Internationalization support
- Validation integration
- Centralized error handling
- AJAX support

---


## **Section 2 : Mail API**

### **2.1 : Introduction to Mail API**
> PYQ: What is Java mail API? Write the methods for sending and receiving mail using Java Mail API. (2021, 2022, 2024, 15 marks)
> PYQ: Uses of mail API (2024, 2.5 marks)

#### ✅ What is Java Mail API?
- **JavaMail API** is an API provided by Oracle that enables Java applications to send and receive electronic mail.
- It provides a platform and protocol-independent framework for building mail and messaging applications.
- The JavaMail API is an optional package (extension library) for reading, composing, and sending electronic messages.
- It defines classes like `Message`, `Session`, `Transport`, and `Store` for handling mail functionality.
- JavaMail supports various email protocols including **SMTP (Simple Mail Transfer Protocol)**, **POP3 (Post Office Protocol)** and **IMAP (Internet Message Access Protocol)**.
- The API is designed to be protocol-independent, allowing applications to work with different mail servers.
- It's part of the Java EE platform but can also be used with standard Java SE.

#### ✅ Key Features of JavaMail
- **Platform-independent** - Works on any Java-supporting platform
- **Protocol-independent** - Works with SMTP, POP3, IMAP, etc.
- **Easy to use** - Simple API for sending and receiving emails
- **Supports attachments** - Can send and receive file attachments
- **Support for HTML** - Allows sending stylized email content
- **MIME support** - Handles Multipurpose Internet Mail Extensions format
- **Authentication** - Supports username/password authentication
- **Secure connections** - Supports SSL/TLS for encrypted communication

#### ✅ Application of JavaMail
- Sending automated emails (notifications, alerts)
- Sending bulk emails (newsletters, promotions)
- Receiving and processing emails (inbox management)
- Building email clients (desktop or web-based)
- Integrating email functionality in web applications
- Sending emails with attachments (reports, documents)
- Sending HTML formatted emails (rich content)

#### ✅ Core Components of JavaMail

| Component | Description |
|-----------|-------------|
| **Session** | Central class that manages configuration properties and authentication |
| **Message** | Represents an email message with headers and content |
| **Address** | Represents email addresses (From, To, CC, BCC) |
| **Transport** | Handles the actual sending of messages (outgoing mail) |
| **Store** | Represents a message store and its folders (incoming mail) |
| **Folder** | Contains messages in the message store (like inbox, sent items) |
| **Part** | Interface implemented by Message for MIME handling |

#### ✅ Required JAR Files
To use the JavaMail API, you need to include these JAR files in your project:

1. **javax.mail.jar** - Core JavaMail API
2. **activation.jar** (or javax.activation-api.jar) - Java Activation Framework, required by JavaMail

#### ✅ Basic Steps for Using JavaMail
1. Set up mail server properties
2. Create a mail session
3. Create a message (with from, to, subject, body)
4. Send the message using Transport

#### ✅ Basic Project Setup for JavaMail
```java
// Add these libraries to your project
// - javax.mail.jar
// - activation.jar

// Import required packages
import javax.mail.*;
import javax.mail.internet.*;
import java.util.Properties;
```

### **2.2 : Methods of Sending Email**
> PYQ: What is Java mail API? Write the methods for sending and receiving mail using Java Mail API. (2021, 2022, 2024, 15 marks)

#### ✅ Protocols for Sending Email
- **SMTP (Simple Mail Transfer Protocol)**: The standard protocol for sending emails. It is used to send messages from a client to a server or between servers.
- **IMAP (Internet Message Access Protocol)**: Used for retrieving emails from a server. It allows multiple devices to access the same mailbox.
- **POP3 (Post Office Protocol)**: Another protocol for retrieving emails. It downloads emails from the server to the client and usually deletes them from the server.

#### ✅ Different Ways to Send Email in Java
There are several ways to send emails using Java, each with its own advantages:

1. **JavaMail API**: The standard way to send emails in Java, providing a rich set of features and support for various protocols.
2. **Apache Commons Email**: A wrapper around JavaMail that simplifies the process of sending emails.
3. **Spring Framework**: Provides a convenient way to send emails using JavaMail with Spring's dependency injection and configuration.
4. **Third-party libraries**: Libraries like **Simple Java Mail** or **Javamail API** that provide additional features and simplified APIs.
5. **SMTP Client Libraries**: Libraries like **Apache James** or **GreenMail** that provide SMTP server functionality for testing and development.

#### ✅ Steps for Sending Email with JavaMail API

1. **Set SMTP Properties**: Configure the SMTP server properties (host, port, authentication).
2. **Create a Session**: Create a mail session with the properties and authentication.
3. **Compose the Message**: Create a `Message` object, set the sender, recipient, subject, and body.
4. **Send the Message**: Use the `Transport` class to send the message.
5. **Handle Exceptions**: Catch any `MessagingException` that may occur during the process.

#### ✅ Example Code for Sending Email using JavaMail API

```java
import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;

public class SendEmail {
    public static void main(String[] args) {
        final String username = "your_email@gmail.com"; // sender email
        final String password = "your_password";         // app-specific password

        // 1. SMTP Properties
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        // 2. Create Session
        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            // 3. Compose the Message
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(
                    Message.RecipientType.TO, InternetAddress.parse("receiver_email@gmail.com"));
            message.setSubject("Test Email from Java");
            message.setText("Hello, this is a test mail sent using JavaMail API!");

            // 4. Send the Message
            Transport.send(message);
            System.out.println("Email sent successfully!");

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
```

### **2.3 : Sending Mail by Gmail**

#### ✅ Gmail SMTP Configuration
Gmail offers SMTP services that allow you to send emails using your Gmail account. To use Gmail's SMTP server, you need to:

1. **Enable "Less secure apps" or use App Passwords** (if 2FA is enabled)
2. Configure JavaMail to use Gmail's SMTP settings
3. Ensure your network allows connections to Gmail's SMTP ports

#### ✅ Gmail SMTP Settings

| Setting | Value |
|---------|-------|
| **SMTP Server** | smtp.gmail.com |
| **TLS Port** | 587 |
| **SSL Port** | 465 |
| **Username** | Your Gmail address |
| **Password** | Your Gmail password or App Password |
| **Authentication** | Required |
| **TLS/SSL** | Required |

#### ✅ Steps for Sending Email via Gmail
1. Set Gmail SMTP properties (host, port, authentication).
2. Create a mail session with Gmail's SMTP settings.
3. Compose the email message (from, to, subject, body).
4. Send the email using the `Transport` class.
5. Handle any exceptions that may occur.
6. Close the session and transport.

#### ✅ Security Considerations
- Never hardcode Gmail credentials in your application
- Use environment variables or secure configuration for sensitive data
- Consider using OAuth 2.0 instead of password authentication for better security

#### ✅ Troubleshooting Gmail SMTP
- **Authentication Failure**: Make sure to enable "Less secure apps" in your Google account settings or use App Passwords if 2FA is enabled
- **Connection Issues**: Ensure you're using the correct port (587 for TLS or 465 for SSL)
- **Quota Limits**: Gmail limits sending to 500 emails per day for regular accounts
- **Security Blocks**: Google may block sign-in attempts from apps it deems less secure

### **2.4 : Receiving Email**
> PYQ: What is Java mail API? Write the methods for sending and receiving mail using Java Mail API. (2021, 2022, 2024, 15 marks)

#### ✅ Protocols for Receiving Email
There are two main protocols for retrieving emails:

1. **POP3 (Post Office Protocol)**
   - Downloads emails from server to client
   - Usually removes messages from server after download
   - Good for single-device email access
   - Default ports: 110 (non-secure), 995 (SSL/TLS)
   - Stateless protocol, maintains minimal server state
   - Better for limited server storage situations

2. **IMAP (Internet Message Access Protocol)**
   - Synchronizes emails between server and client
   - Keeps messages on server
   - Better for multi-device access
   - Default ports: 143 (non-secure), 993 (SSL/TLS)
   - Supports folders and message flags
   - Allows searching messages on server side
   - More resource-intensive but provides better user experience

#### ✅ Steps for Receiving Email using JavaMail API
1. **Set POP3/IMAP Properties**: Configure the mail server properties (host, port, authentication).
2. **Create a Session**: Create a mail session with the properties and authentication.
3. **Connect to the Mail Server**: Use the `Store` class to connect to the mail server.
4. **Open the Inbox Folder**: Access the inbox folder using the `Folder` class.
5. **Fetch Messages**: Retrieve messages from the inbox folder.
6. **Process Messages**: Iterate through the messages and process them (read, save, etc.).
7. **Close Resources**: Close the folder and store to release resources.

##### ✅ Example Code for Receiving Email using JavaMail API

```java
import java.util.Properties;
import javax.mail.*;

public class ReceiveEmail {
    public static void main(String[] args) {
        String host = "pop.gmail.com";
        String username = "your_email@gmail.com";
        String password = "your_password";

        // 1. Set Properties
        Properties props = new Properties();
        props.put("mail.store.protocol", "pop3");
        props.put("mail.pop3.host", host);
        props.put("mail.pop3.port", "995");
        props.put("mail.pop3.ssl.enable", "true");

        try {
            // 2. Create Session
            Session session = Session.getDefaultInstance(props);
            Store store = session.getStore("pop3s");

            // 3. Connect to Server
            store.connect(host, username, password);

            // 4. Open INBOX folder
            Folder inbox = store.getFolder("INBOX");
            inbox.open(Folder.READ_ONLY);

            // 5. Fetch Messages
            Message[] messages = inbox.getMessages();
            System.out.println("Total Messages: " + messages.length);

            for (int i = 0; i < Math.min(5, messages.length); i++) {
                System.out.println("Subject: " + messages[i].getSubject());
            }

            // 6. Close
            inbox.close(false);
            store.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### **2.5 : Sending Attachments**

#### ✅ Understanding Email Attachments
- Email attachments are files sent along with the email message
- MIME (Multipurpose Internet Mail Extensions) protocol enables attachments
- JavaMail uses MIME to handle attachments
- Each part of the email (text and attachments) is encoded separately

#### ✅ Key Classes for Handling Attachments
- **MimeMultipart**: Container that holds multiple body parts
- **MimeBodyPart**: Individual parts of the message (text or attachment)
- **DataHandler**: Handles data content and MIME type
- **FileDataSource**: Sources data from a file on the file system
- **ByteArrayDataSource**: Sources data from a byte array in memory

#### ✅ Types of Attachments Supported
- Document files (PDF, DOC, XLS, etc.)
- Image files (JPEG, PNG, GIF, etc.)
- Audio/video files
- Compressed files (ZIP, RAR)
- Any other file type with appropriate MIME type

#### ✅ Steps to Send an Email with Attachment
1. Create a `Session` for sending mail
2. Create a `MimeMessage`
3. Create a `MimeMultipart` to hold different parts of the message
4. Create a `MimeBodyPart` for the text content
5. Create a `MimeBodyPart` for each attachment
6. Add all parts to the multipart
7. Set the multipart as the message content
8. Send the message

#### ✅ Common Attachment Handling
- **Setting MIME Type**: Helps email clients correctly process the attachment
- **Filename Preservation**: Setting the original filename for the receiver
- **Content-Disposition**: Specifies how the attachment should be displayed
- **Multiple Attachments**: Add multiple MimeBodyParts to the multipart
- **Size Limitations**: Be aware of email provider size limitations

#### ✅ Best Practices
- Avoid large attachments (typically stay under 10MB)
- Use consistent encoding (UTF-8 recommended)
- Set appropriate content-type headers
- Handle potential encoding and transfer errors
- Consider compression for large files

### **2.6 : Receiving Attachments**

#### ✅ Identifying Email Attachments
- Email attachments are part of multipart messages
- Can be identified by Content-Disposition header
- Usually have a filename attribute
- May have a specific MIME type
- Located in MimeBodyPart objects within a Multipart message

#### ✅ Steps to Receive and Save Attachments
1. Connect to the mail server (POP3 or IMAP)
2. Access the inbox folder
3. Retrieve messages of interest
4. Check if a message has multipart content
5. Iterate through each part of the multipart
6. Identify parts with Content-Disposition set to "attachment"
7. Extract attachment data using getInputStream()
8. Save the data to a file or process it in memory
9. Close all resources

#### ✅ Types of Email Attachments
- **Explicit Attachments**: Content-Disposition is "attachment"
- **Inline Attachments**: Content-Disposition is "inline" (often images in HTML emails)
- **Message Attachments**: Forwarded or embedded email messages

#### ✅ Handling Different Attachment Types
- **Text Files**: Can be read as strings
- **Binary Files**: Need to be handled as raw bytes
- **Images**: Can be processed with Java imaging APIs
- **Office Documents**: May require specialized libraries
- **ZIP/Compressed Files**: Can be extracted with compression libraries

#### ✅ Best Practices for Receiving Attachments
- **Validate Filenames**: Clean up potentially malicious filenames
- **Check File Sizes**: Set limits to prevent out-of-memory issues
- **Scan for Viruses**: Consider security scanning before processing
- **Use Streams**: Process attachments as streams for efficiency
- **Handle Encoding Issues**: Account for different character encodings
- **Create Unique Filenames**: Avoid overwriting existing files

#### ✅ Key JavaMail Methods for Attachments
- **getDisposition()**: Returns "attachment" for attachments
- **getFileName()**: Gets the name of the attached file
- **getInputStream()**: Gets a stream to read the attachment content
- **getContentType()**: Returns the MIME type of the attachment


### **2.7 : Sending HTML Email**

HTML emails allow you to create visually appealing messages with formatting and rich content.

#### HTML Email Basics
- HTML emails use HTML markup to format content
- Content type must be set to "text/html"
- You can include formatting (bold, colors), images, links, and tables

#### HTML Email Structure   
- **HTML Header**: Contains metadata and styles
- **HTML Body**: Contains the main content of the email
- **Inline CSS**: Styles applied directly to HTML elements
- **Images**: Can be embedded or linked
- **Links**: Hyperlinks to external resources
- **Tables**: For structured layouts
- **Fonts**: Custom fonts can be used with web-safe alternatives

#### Creating HTML Email in JavaMail
```java
import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;

public class SendHTMLEmail {
    public static void main(String[] args) {
        String from = "youremail@gmail.com";
        String to = "receiver@gmail.com";
        String password = "yourpassword";

        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");

        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(from, password);
            }
        });

        try {
            Message msg = new MimeMessage(session);
            msg.setFrom(new InternetAddress(from));
            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
            msg.setSubject("HTML Email");
            msg.setContent("<h3>Hello from Java</h3><p>This is an <b>HTML</b> email.</p>", "text/html");

            Transport.send(msg);
            System.out.println("Email sent!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### **2.8 : Forwarding Email**
Email forwarding is the process of receiving an email and sending it to additional recipient(s). There are two main approaches:

1. **Automatic Forwarding** - Done by the mail server (through settings or filters)
2. **Manual Forwarding** - Programmatically forwarding using JavaMail

#### ✅ Steps to Forward an Email
1. Connect to the mail server and retrieve the message to forward
2. Create a new message
3. Set its content from the original message
4. Set new recipients
5. Optionally add comments
6. Send the new message

#### ✅ Example: Forwarding an Email
```java
import javax.mail.*;
import javax.mail.internet.*;
import java.util.Properties;

public class ForwardEmail {
    public static void main(String[] args) {
        String from = "youremail@gmail.com";
        String password = "yourpassword";
        String forwardTo = "newreceiver@gmail.com";

        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");

        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(from, password);
            }
        });

        try {
            // Simulated original message (normally fetched using IMAP/POP3)
            MimeMessage original = new MimeMessage(session);
            original.setSubject("Original Subject");
            original.setText("This is the original email content.");

            // Create new message for forwarding
            MimeMessage forward = new MimeMessage(session);
            forward.setSubject("Fwd: " + original.getSubject());
            forward.setFrom(new InternetAddress(from));
            forward.setRecipients(Message.RecipientType.TO, InternetAddress.parse(forwardTo));

            // Add original content as body
            MimeBodyPart bodyPart = new MimeBodyPart();
            bodyPart.setText("Forwarded message:\n\n" + original.getContent().toString());

            Multipart multipart = new MimeMultipart();
            multipart.addBodyPart(bodyPart);

            forward.setContent(multipart);
            Transport.send(forward);

            System.out.println("Email forwarded successfully.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### **2.9 : Deleting Email**
> PYQ: Write a program displaying steps to delete an email using Java Mail API. (2023, 15 marks)

Deleting emails is a common operation in email management. JavaMail provides methods to delete emails from mail folders. The deletion behavior depends on the protocol used (POP3 vs IMAP), the flags set on the message, and the folder's settings.

#### ✅ How to Delete Emails
JavaMail provides methods to delete emails from mail folders. The deletion behavior depends on:
1. The protocol used (POP3 vs IMAP)
2. The flags set on the message
3. The folder's settings

#### ✅ Steps to Delete an Email
1. Connect to the mail server
2. Open the folder with READ_WRITE access (not READ_ONLY)
3. Mark message for deletion with the DELETE flag
4. Expunge the folder to permanently remove deleted messages
5. Close the folder and store

#### ✅ Example: Deleting an Email
```java
import javax.mail.*;
import java.util.Properties;

public class DeleteEmail {
    public static void main(String[] args) {
        String host = "imap.gmail.com";
        String user = "youremail@gmail.com";
        String password = "yourpassword";

        Properties props = new Properties();
        props.put("mail.store.protocol", "imaps");

        try {
            Session session = Session.getInstance(props);
            Store store = session.getStore();
            store.connect(host, user, password);

            Folder inbox = store.getFolder("INBOX");
            inbox.open(Folder.READ_WRITE);

            Message[] messages = inbox.getMessages();
            if (messages.length > 0) {
                messages[messages.length - 1].setFlag(Flags.Flag.DELETED, true);
                System.out.println("Last message marked for deletion.");
            } else {
                System.out.println("No messages to delete.");
            }

            inbox.close(true); // true = expunge deleted messages
            store.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

#### ✅ Important Notes About Email Deletion
- **POP3**: Deleted messages are removed from the server immediately.
- **IMAP**: Deleted messages are marked but not removed until the folder is expunged.
- **Expunge**: Permanently removes messages marked for deletion.
- **Folder Access**: Use `READ_WRITE` access to delete messages.
- **Error Handling**: Always handle exceptions when dealing with email operations.

---

*These notes were compiled by Deepak Modi, MDU (2026)*
*Contact: deepakmodidev@gmail.com*