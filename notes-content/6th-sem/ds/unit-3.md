# Unit 3: Data Science Methodology

---

**Syllabus :** *\[PEC-CSE-320G\]*                                            
**Compiled By:** *Deepak Modi (223100)*  
**Data Science Methodology:** Business Understanding, Analytic Approach, Data Requirements, Data Collection, Data Understanding, Data Preparation, Modeling, Evaluation, Deployment, Feedback.  
---

## **Data Science Methodology**

Data Science Methodology is a **step-by-step process** used to solve real-world problems using **data**. It helps in making **data-driven decisions** by following a structured process.

### **Why is it Important?**

 ✅ Ensures a **systematic** approach to handling data.  
 ✅ Helps in making **accurate** and **reliable** predictions.  
 ✅ Increases **efficiency** in solving business problems.  
 ✅ Reduces **errors** and **bias** in decision-making.

### **Steps in Data Science Methodology**

The **Data Science Lifecycle** follows **ten major steps**:

1. Business Understanding \- Identify the problem or challenge at hand.  
2. Analytic Approach \- Determine the type of analysis required.  
3. Data Requirements \- Identify the data needed to perform the analysis.  
4. Data Collection \- Gather data from appropriate sources.  
5. Data Understanding \- Explore data for meaningful insights.  
6. Data Preparation \- Clean and preprocess data.  
7. Modeling \- Apply ML algorithms.  
8. Evaluation \- Measure model accuracy and performance.  
9. Deployment- Integrate into production.  
10. Feedback & Improvement \- Update and refine model.

### **1\. Business Understanding**

Business Understanding is the **first step in the Data Science Methodology**. It involves understanding **what problem needs to be solved**.

#### **❓ Key Questions:**

* What is the goal of the project?  
* What are we trying to solve?  
* Who are the stakeholders?  
* How will this analysis help the business?

#### **📌 Example:**

A telecom company wants to **predict customer churn** (i.e., customers leaving). The business goal is to **increase customer retention** by understanding the reasons behind churn.

#### **🔹 Importance of Business Understanding**

 ✅ Ensures that the data science project aligns with **business goals**.  
 ✅ Helps in selecting **relevant data** for analysis.  
 ✅ Saves time by **focusing on the right problem**.  
 ✅ Provides **real-world value** rather than just technical insights.

#### **🔹 Steps in Business Understanding**

##### **1️⃣ Define the Problem**

* Clearly state the **business problem**.  
* Understand the **objectives** of the organization.  
* Identify **key stakeholders** (who will use the results).

✅ **Example:**  
 A telecom company wants to **reduce customer churn** (customers leaving their service).

##### **2️⃣ Identify Business Objectives**

* What is the **goal** of the analysis?  
* How will solving this problem **benefit the company**?  
* What are the **key performance indicators (KPIs)?**

✅ **Example:**  
 The goal is to **increase customer retention** by **predicting which customers might leave** and offering them discounts or better service.

##### **3️⃣ Understand Business Constraints**

* Are there **budget limitations**?  
* Are there **time constraints** for delivering results?  
* Are there **regulatory restrictions** on data usage?

✅ **Example:**  
 The company has **limited customer service staff**, so they need to **target only high-risk customers** for retention offers.

##### **4️⃣ Establish Success Criteria**

* How will we measure success?  
  What **metrics** will indicate that our model is useful?

✅ **Example:**  
 Success is measured by:  
 ✔ **Reduced churn rate** (fewer customers leaving).  
 ✔ **Higher customer satisfaction** (positive feedback).  
 ✔ **Increased revenue** (more customers retained).

#### **🔹 Example: Business Understanding in a Retail Store**

A **retail store** wants to **increase sales** using data science.

✅ **Problem Statement:**  
 Sales have dropped by 15% in the last quarter.

✅ **Business Objective:**  
 Identify **factors affecting sales** and suggest improvements.

✅ **Constraints:**

* Data is available only for the last **12 months**.  
* Budget for new marketing campaigns is **limited**.

✅ **Success Criteria:**

* **Increase sales by 10%** in the next 6 months.  
* **Improve customer engagement** through better promotions.

### **2\. Analytic Approach**

The **Analytic Approach** is the process of deciding **how** to solve a problem using data science techniques. It involves choosing the **type of analysis** and the **mathematical or machine learning approach** that best fits the business problem.

#### **✅ Importance of the Analytic Approach**

 ✔ Ensures we use the **right method** to solve the problem.  
 ✔ Helps in selecting **appropriate data and tools**.  
 ✔ Determines whether we need **descriptive, predictive, or prescriptive analytics**.

#### **🔹 Types of Analytic Approaches**

There are three main types of **analytics approaches**:

##### **1️⃣ Descriptive Analytics – “What happened?”**

* **Summarizes past data** to understand trends.  
* Uses **charts, graphs, and reports**.  
* No predictions, only insights.

✅ **Example:**  
 A retail store analyzes **past sales data** to see which months had the highest sales.

##### **2️⃣ Predictive Analytics – “What will happen?”**

* Uses **historical data** to make **future predictions**.  
* Uses **machine learning models**.

✅ **Example:**  
 A telecom company predicts **which customers are likely to churn** using past data.

##### **3️⃣ Prescriptive Analytics – “What should we do?”**

* Suggests **best actions** to improve outcomes.  
* Uses **AI and optimization techniques**.

✅ **Example:**  
 An **e-commerce** site recommends **discount offers** to customers based on their past purchases.

#### **🔹 Choosing the Right Approach**

| Problem Type | Best Analytic Approach | Example |
| :---- | :---- | :---- |
| Understanding past trends | Descriptive Analytics | Sales reports of last year |
| Forecasting future events | Predictive Analytics | Predicting customer churn |
| Making data-driven decisions | Prescriptive Analytics | Suggesting best product price |

#### **🔹 Example: Analytic Approach for Customer Churn**

📌 **Business Problem:** A telecom company wants to **reduce customer churn**.

📌 **Possible Approaches:**  
 1️⃣ **Descriptive Analytics** – Identify past churn trends. Ex: How many customers left in the last 6 months?  
 2️⃣ **Predictive Analytics** – Build a machine learning model to predict future churn. Ex: Which customers are likely to leave next month?  
 3️⃣ **Prescriptive Analytics** – Suggest loyalty offers to at-risk customers. Ex: What strategies can reduce churn?

🚀 **Final Decision:** Use **Predictive Analytics** to forecast churn and then apply **Prescriptive Analytics** to take action.

### **3\. Data Requirements**

Data requirements define **what kind of data** is needed for a data science project. It ensures that the collected data is **relevant, sufficient, and of high quality** to achieve the desired outcomes.

🔹 **Example:** If we are building a sales prediction model, we need **past sales data, customer demographics, and seasonal trends** to make accurate predictions.

#### **🔹 Importance of Data Requirements**

✅ Helps in collecting **only necessary data**, avoiding unnecessary storage costs.  
 ✅ Ensures the **right data types and formats** for easy analysis.  
 ✅ Helps in **better decision-making** by focusing on high-quality data.  
 ✅ Reduces **errors and biases** in machine learning models.

#### **🔹 Key Factors in Data Requirements**

| Factor | Description | Example |
| :---- | :---- | :---- |
| **Relevance** | Data should be useful for solving the problem. | For predicting rainfall, we need weather data, not stock prices. |
| **Completeness** | Data should have no missing values. | A dataset of students’ marks should include all subjects. |
| **Accuracy** | Data should be correct and reliable. | Customer email addresses should be valid. |
| **Consistency** | Data should follow a uniform format. | Dates should be in the same format (YYYY-MM-DD). |
| **Timeliness** | Data should be up-to-date. | Stock market predictions need recent data, not old data. |

#### **🔹 Types of Data Required in Data Science**

1️⃣ **Structured Data**  
 📌 Organized and stored in tables or databases.  
 ✅ **Example:** Excel sheets, SQL databases.  
 🔹 **Use Case:** Sales records, customer details, financial reports.

2️⃣ **Unstructured Data**  
 📌 Data that does not follow a fixed structure.  
 ✅ **Example:** Images, videos, social media posts.  
 🔹 **Use Case:** Sentiment analysis, facial recognition, chatbots.

3️⃣ **Quantitative Data (Numerical Data)**  
 📌 Data that can be measured in numbers.  
 ✅ **Example:** Age, temperature, sales figures.  
 🔹 **Use Case:** Forecasting trends, statistical analysis.

4️⃣ **Qualitative Data (Categorical Data)**  
 📌 Data that represents categories or labels.  
 ✅ **Example:** Gender (Male/Female), customer feedback (Positive/Negative).  
 🔹 **Use Case:** Classification problems in Machine Learning.

5️⃣ **Historical Data**  
 📌 Past data used for trends and pattern recognition.  
 ✅ **Example:** Last 5 years' stock market data for price prediction.

6️⃣ **Real-time Data**  
 📌 Data that is continuously updated.  
 ✅ **Example:** Live traffic updates, sensor readings.

#### **🔹 Steps to Define Data Requirements**

##### **1️⃣ Identify the Business Problem**

🔹 Understand the goal of the project.  
 ✅ **Example:** Predict customer churn for a telecom company.

##### **2️⃣ Determine the Data Needed**

🔹 Identify what data is required for the analysis.  
 ✅ **Example:** Customer usage history, complaints, and billing records.

##### **3️⃣ Identify Data Sources**

🔹 Decide where to collect the data from (databases, APIs, web scraping, etc.).  
 ✅ **Example:** Telecom company CRM, customer feedback surveys.

##### **4️⃣ Define Data Format and Storage**

🔹 Structure the data in a useful format (CSV, JSON, SQL).  
 ✅ **Example:** Store customer data in a **relational database** for easy access.

##### **5️⃣ Ensure Data Quality and Integrity**

🔹 Check for missing values, duplicate records, and inconsistencies.  
 ✅ **Example:** Remove incorrect customer phone numbers.

#### **🔹 Challenges in Data Requirements**

 ⚠ **Incomplete Data** – Missing values can lead to inaccurate predictions.  
 ⚠ **Data Redundancy** – Duplicate records increase storage costs.  
 ⚠ **Privacy Concerns** – Handling sensitive user data carefully (GDPR, CCPA compliance).  
 ⚠ **Data Compatibility Issues** – Different formats (CSV vs. JSON) may require conversion.

#### **🔹 Best Practices for Defining Data Requirements**

 ✅ **Collect only necessary data** – Avoid unnecessary storage costs.  
 ✅ **Ensure high-quality data** – Remove duplicates and missing values.  
 ✅ **Standardize data formats** – Use consistent naming conventions.  
 ✅ **Follow legal and ethical guidelines** – Protect user privacy.  
 ✅ **Regularly update data** – Keep datasets fresh and relevant.

### **4\. Data Collection**

Data collection is the process of **gathering relevant data** from various sources to be used in data analysis, machine learning, or AI applications. It is a **crucial step** because the quality of a data science project depends on the **accuracy, completeness, and reliability** of the data collected.

#### **🔹 Importance of Data Collection**

 ✅ The **accuracy** of predictions depends on high-quality data.  
 ✅ Ensures **relevant insights** by gathering the right information.  
 ✅ Helps in **detecting trends and patterns** in business.  
 ✅ Essential for **training machine learning models** effectively.

#### **🔹 Types of Data Sources**

Data can be collected from different sources, categorized into:

| Type | Description | Examples |
| ----- | ----- | ----- |
| **Primary Data** | Data collected first-hand for a specific purpose. | Customer feedback, online surveys, IoT sensors. |
| **Secondary Data** | Pre-existing data collected by someone else. | Government reports, company databases, research papers. |
| **Structured Data** | Organized data in a fixed format (tables, databases). | Excel sheets, SQL databases, financial records. |
| **Unstructured Data** | Data without a predefined format. | Images, videos, social media posts. |
| **Real-Time Data** | Continuously generated data. | Live weather updates, stock market data, streaming logs. |

#### **🔹 Methods of Data Collection**

### **1️⃣ Manual Data Entry**

📌 Humans input data into spreadsheets, forms, or databases.  
 ✅ **Example:** Customer survey responses entered manually.

### **2️⃣ Web Scraping**

📌 Extracting information from websites using scripts.  
 ✅ **Example:** Collecting product prices from e-commerce websites.  
 🔹 **Python Example:** Scraping news headlines

**`import`** `requests`    
**`from`** `bs4 import BeautifulSoup`  

`url = "https://www.bbc.com/news"`    
`response = requests.get(url)`    
`soup = BeautifulSoup(response.text, "html.parser")`  

`headlines = soup.find_all("h3")`    
**`for`** `headline in headlines[:5]:`    
    `print(headline.text)`  

📌 **Use Cases:** Price monitoring, competitor analysis, stock market trends.

### **3️⃣ API Calls**

📌 APIs allow us to fetch data from external services.  
 ✅ **Example:** Getting weather data from an API.  
 🔹 **Python Example:** Fetching weather data from OpenWeather API

**`import`** `requests`  

`api_url = "http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=your_api_key"`    
`response = requests.get(api_url)`    
`data = response.json()`  

`print("Temperature:", data["main"]["temp"])`  

📌 **Use Cases:** Social media analytics, financial data retrieval.

### **4️⃣ Sensor Data Collection**

📌 IoT devices generate real-time data from the environment.  
 ✅ **Example:** A smartwatch collecting heart rate data.  
 🔹 **Use Cases:** Smart cities, health monitoring, industrial automation.

### **5️⃣ Database Queries**

📌 Extracting data from databases using SQL queries.  
 ✅ **Example:** Getting customer details from a company database.  
 🔹 **SQL Query Example:**

`SELECT name, email FROM customers WHERE city = 'Mumbai';`

📌 **Use Cases:** Business intelligence, CRM systems, transaction monitoring.

### **6️⃣ Crowdsourcing**

 📌 Collecting data from a large group of people via the internet.  
 ✅ **Example:** Wikipedia edits, online surveys, citizen science projects.  
 🔹 **Use Cases:** Image labeling for AI models, sentiment analysis datasets.

#### **🔹 Challenges in Data Collection**

 ⚠ **Data Quality Issues** – Incomplete, inconsistent, or incorrect data.  
 ⚠ **Data Privacy Concerns** – Handling sensitive information responsibly.  
 ⚠ **Legal and Ethical Issues** – Following data collection laws (GDPR, CCPA).  
 ⚠ **Storage and Processing Costs** – Managing large volumes of data efficiently.

#### **🔹 Best Practices for Effective Data Collection**

 ✅ **Ensure Data Accuracy** – Remove duplicate or incorrect data.  
 ✅ **Use Automation** – Reduce human errors with scripts and APIs.  
 ✅ **Follow Legal Regulations** – Respect privacy laws and permissions.  
 ✅ **Use Secure Storage** – Encrypt sensitive data to prevent leaks.  
 ✅ **Regularly Update Data** – Keep the dataset fresh and relevant.

### **5\. Data Understanding**

Data Understanding is the process of **exploring and analyzing** the collected data to check its **quality, structure, and patterns** before using it for modeling.

#### **✅ Why is Data Understanding Important?**

 ✔ Helps in identifying **missing, inconsistent, or incorrect data**.  
 ✔ Ensures that the **right data** is used for analysis.  
 ✔ Helps in **choosing the correct data preprocessing techniques**.

#### **🔹 Steps in Data Understanding**

### **1️⃣ Data Exploration (Basic Overview of Data)**

* Check **size and shape** of data.  
* Identify **columns (features) and rows (records)**.  
* Check **data types** (numerical, categorical, text, etc.).

✅ **Example in Python (Using Pandas):**

**`import`** `pandas as pd`  

*`# Load dataset`*    
`df = pd.read_csv("customer_data.csv")`  

*`# Check first 5 rows`*    
`print(df.head())`  

*`# Get dataset shape (rows, columns)`*    
`print(df.shape)`  

*`# Get column names and data types`*    
`print(df.info())`  

🔹 This helps in getting a quick overview of the dataset.

### **2️⃣ Checking for Missing Values**

* Missing values can cause problems in analysis.  
* Identify and handle them using **imputation (filling with mean, median, mode, etc.)**.

✅ **Example in Python:**

*`# Check for missing values`*  
`print(df.isnull().sum())`

🔹 If missing values exist, we can **fill them** or **remove rows/columns**.

### **3️⃣ Identifying Outliers (Extreme or Unusual Values)**

* Outliers can **distort the analysis and predictions**.  
* Use **box plots** or **statistical methods** to detect them.

✅ **Example in Python:**

**`import`** `matplotlib.pyplot as plt`  

*`# Box plot to check for outli`*`ers`    
`df.boxplot(column=['income'])`    
`plt.show()`

🔹 If extreme values are found, we can **remove them** or **replace them**.

### **4️⃣ Understanding Data Distribution**

* Analyze **how data is spread** using histograms.  
* Helps in deciding **scaling or normalization techniques**.

✅ **Example in Python:**

**`import`** `seaborn as sns`  

*`# Histogram of income column`*    
`sns.histplot(df['income'], bins=30, kde=True)`    
`plt.show()`

🔹 Helps in understanding **skewness** and **distribution shape**.

### **5️⃣ Finding Correlations Between Features**

* Identifies relationships between different variables.  
* Useful for **feature selection** (removing redundant features).

✅ **Example in Python:**

*`# Correlation matrix`*    
`print(df.corr())`

*`# Heatmap visualization`*    
`sns.heatmap(df.corr(), annot=True, cmap="coolwarm")`  
`plt.show()`

🔹 Helps in deciding which features are **important** for modeling.

#### **🔹 Example: Data Understanding for Customer Churn Prediction**

📌 **Business Problem:** A telecom company wants to predict **customer churn**.

📌 **Steps in Data Understanding:**  
 ✔ **Check dataset size & structure** – Number of customers, available features.  
 ✔ **Check missing values** – Fill missing call duration values with the average.  
 ✔ **Identify outliers** – Remove extreme cases of unusually high data usage.  
 ✔ **Analyze correlations** – See if high call drop rates lead to churn.

#### **🔹 Challenges in Data Understanding**

 🔴 **Large datasets** – Too many records and features can be difficult to analyze.  
 🔴 **Messy data** – Duplicate, inconsistent, or wrongly labeled data.  
 🔴 **Skewed distributions** – Data may not be evenly distributed.  
 🔴 **Hidden patterns** – Some relationships may not be obvious without visualization.

### **6\. Data Preparation**

Data Preparation is the process of **cleaning, transforming, and organizing raw data** into a format that can be used for analysis and machine learning models.

##### **✅ Why is Data Preparation Important?**

 ✔ **Removes errors and inconsistencies** to improve accuracy.  
 ✔ **Handles missing values and outliers** to avoid bias.  
 ✔ **Transforms raw data** into a structured and meaningful format.

#### **🔹 Steps in Data Preparation**

### **1️⃣ Handling Missing Data**

* Missing values can **skew results** or make models inaccurate.  
* **Ways to handle missing data:**  
   ✔ **Remove missing values** (if very few).  
   ✔ **Fill (impute) missing values** with mean, median, or mode.

✅ **Example in Python:**

**`import`** `pandas as pd`  
**`from`** `sklearn.impute import SimpleImputer`  

*`# Load dataset`*    
`df = pd.read_csv("data.csv")`  

*`# Check for missing values`*    
`print(df.isnull().sum())`  

*`# Fill missing values with mean`*    
`imputer = SimpleImputer(strategy='mean')`    
`df[['salary']] = imputer.fit_transform(df[['salary']])`  

🔹 **Alternative:** Use median for skewed data, mode for categorical data.

### **2️⃣ Handling Outliers**

* Outliers can **affect model performance** and **mislead analysis**.  
  **Ways to handle outliers:**  
   ✔ **Remove extreme values** if they are errors.  
   ✔ **Transform data using logarithms** to reduce impact.

✅ **Example in Python:**

**`import`** `matplotlib.pyplot as plt`  
**`import`** `seaborn as sns`  

*`# Box plot to identify outliers`*    
`sns.boxplot(df['income'])`    
`plt.show()`  

*`# Remove outliers using IQR (Interquartile Range)`*  
`Q1 = df['income'].quantile(0.25)`  
`Q3 = df['income'].quantile(0.75)`  
`IQR = Q3 - Q1`  

`df = df[(df['income'] >= Q1 - 1.5*IQR) & (df['income'] <= Q3 + 1.5*IQR)]`

🔹 **IQR method** keeps data within reasonable limits.

### **3️⃣ Encoding Categorical Data**

* Machine learning models work better with **numerical data**.

* Convert **text labels** into **numbers**.

* **Methods:**  
   ✔ **Label Encoding** – Assigns a number to each category.  
   ✔ **One-Hot Encoding** – Creates separate columns for each category.

✅ **Example in Python:**

**`from`** `sklearn.preprocessing import LabelEncoder, OneHotEncoder`    
*`# Label Encoding`*    
`label_encoder = LabelEncoder()`    
`df['gender'] = label_encoder.fit_transform(df['gender'])`    
*`# One-Hot Encoding`*    
`df = pd.get_dummies(df, columns=['city'], drop_first=True)`

🔹 **Use One-Hot Encoding** for unordered categories like city names.

### **4️⃣ Scaling and Normalization**

* Different features may have **different scales**, affecting model performance.  
* **Scaling** makes sure all features have the same importance.  
* **Methods:**  
   ✔ **Standardization** – Converts data to **zero mean and unit variance**.  
   ✔ **Normalization** – Converts data to a **0 to 1 range**.

✅ **Example in Python:**

**`from`** `sklearn.preprocessing import StandardScaler, MinMaxScaler`    
*`# Standardization`*    
`scaler = StandardScaler()`    
`df[['salary', 'age']] = scaler.fit_transform(df[['salary', 'age']])`    
*`# Normalization`*    
`minmax_scaler = MinMaxScaler()`    
`df[['salary', 'age']] = minmax_scaler.fit_transform(df[['salary', 'age']])`

🔹 **Standardization** is used for **normal distributions**, **Normalization** for skewed data.

### **5️⃣ Splitting Data into Training and Testing Sets**

* Splitting data ensures that the model is **tested on unseen data**.  
* **Training set** – Used to train the model (80%).  
* **Testing set** – Used to evaluate performance (20%).

✅ **Example in Python:**

**`from`** `sklearn.model_selection import train_test_split`  

*`# Features (X) and target variable (y)`*    
`X = df.drop(columns=['churn'])`    
`y = df['churn']`  

*`# Split data`*    
`X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)`  

`print("Training Data:", X_train.shape)`    
`print("Testing Data:", X_test.shape)`

🔹 **Random State** ensures the split is reproducible.

#### **🔹 Example: Data Preparation for House Price Prediction**

📌 **Business Problem:** A real estate company wants to predict **house prices**.

📌 **Steps in Data Preparation:**  
 ✔ **Handle Missing Values** – Fill missing house sizes with the median.  
 ✔ **Remove Outliers** – Remove extreme high/low prices.  
 ✔ **Encode Categorical Data** – Convert house types into numbers.  
 ✔ **Scale Data** – Normalize square footage and price.  
 ✔ **Split Data** – 80% for training, 20% for testing.

#### **🔹 Challenges in Data Preparation**

 🔴 **Large datasets** – Cleaning millions of records is time-consuming.  
 🔴 **Messy data** – Duplicates, incorrect values, and typos need correction.  
 🔴 **Imbalanced data** – If one class dominates (e.g., 90% non-churn, 10% churn), predictions may be biased.

✅ **Solution:** Use techniques like **SMOTE (Synthetic Minority Over-sampling Technique)** for balancing classes.

### **7\. Modeling**

Modeling is the process of applying **machine learning (ML) algorithms** to structured data to recognize patterns and make predictions.

##### **✅ Why is Modeling Important?**

✔ Helps in making **accurate predictions**.  
 ✔ Automates **decision-making**.  
 ✔ Extracts **meaningful insights** from data.

#### **🔹 Steps in the Modeling Process**

##### **1️⃣ Choosing the Right Model**

Different problems require different types of ML models:  
 ✔ **Regression** → Predicts continuous values (e.g., house prices, stock prices).  
 ✔ **Classification** → Predicts categories (e.g., spam or not spam).  
 ✔ **Clustering** → Groups similar data (e.g., customer segmentation).  
 ✔ **Recommendation** → Suggests products (e.g., Netflix movie recommendations).

##### **2️⃣ Training the Model**

* **Training** involves feeding the model with **labeled data** so it can learn patterns.  
* The model **adjusts its parameters** to minimize errors.

✅ **Example: Training a Linear Regression Model**

**`from`** `sklearn.linear_model import LinearRegression`    
**`import`** `numpy as np`  

*`# Training data (Square feet vs. Price in Lakhs)`*    
`X = np.array([[500], [1000], [1500], [2000], [2500]])`    
`y = np.array([50, 100, 150, 200, 250])`  

*`# Create and train model`*    
`model = LinearRegression()`    
`model.fit(X, y)`  

*`# Predict price for 1800 sq.ft`*    
`predicted_price = model.predict([[1800]])`    
`print(f"Predicted Price: {predicted_price[0]} Lakhs")`

🔹 The model **learns** the relationship between square feet and price.

##### **3️⃣ Evaluating the Model**

* Once trained, we test the model’s accuracy using **unseen test data**.  
* Common evaluation metrics:  
   ✔ **Regression** → Mean Squared Error (MSE), R-squared  
   ✔ **Classification** → Accuracy, Precision, Recall, F1-score

✅ **Example: Checking Accuracy for a Classification Model**

**`from`** `sklearn.metrics import accuracy_score`    
*`# Actual vs Predicted values`*    
`y_test = [1, 0, 1, 1, 0, 1]`    
`y_pred = [1, 0, 1, 0, 0, 1]`  

*`# Calculate accuracy`*    
`accuracy = accuracy_score(y_test, y_pred)`    
`print(f"Model Accuracy: {accuracy * 100:.2f}%")`

🔹 Higher accuracy means a **better model**.

##### **4️⃣ Hyperparameter Tuning**

* Hyperparameters control how the model learns (e.g., learning rate, number of trees).  
* Adjusting them **improves model performance**.

✅ **Example: Using GridSearchCV for Tuning**

**`from`** `sklearn.model_selection import GridSearchCV`    
**`from`** `sklearn.ensemble import RandomForestClassifier`  

*`# Define model and parameters`*    
`model = RandomForestClassifier()`    
`params = {'n_estimators': [10, 50, 100], 'max_depth': [None, 10, 20]}`  

*`# Perform Grid Search`*    
`grid_search = GridSearchCV(model, params, cv=5)`    
`grid_search.fit(X_train, y_train)`  

`print("Best Parameters:", grid_search.best_params_)`

🔹 Finds the **best combination of hyperparameters** for better performance.

##### **5️⃣ Deploying the Model**

* Once trained and optimized, the model is deployed in **real-world applications**.  
* Example: Predicting **loan approvals** in banking, **disease diagnosis** in healthcare.

✅ **Example: Saving and Loading a Trained Model**

**`import`** `joblib`  

*`# Save trained model`*    
`joblib.dump(model, "final_model.pkl")`  

*`# Load model later`*    
`loaded_model = joblib.load("final_model.pkl")`  

🔹 Allows the model to be **used anytime without retraining**.

#### **🔹 Example: Modeling for Customer Churn Prediction**

📌 **Business Problem:** A telecom company wants to predict **which customers will leave**.

📌 **Steps in Modeling:**  
 ✔ **Choose Model** – Logistic Regression (since churn is Yes/No).  
 ✔ **Train Model** – Feed past customer data into the model.  
 ✔ **Evaluate** – Check accuracy using test data.  
 ✔ **Fine-Tune** – Adjust parameters for better performance.  
 ✔ **Deploy** – Use the model to **predict future churn cases**.

#### **🔹 Challenges in Modeling**

🔴 **Overfitting** – Model learns **too much** from training data and performs poorly on new data.  
 🔴 **Underfitting** – Model is **too simple** and misses important patterns.  
 🔴 **Imbalanced Data** – One class (e.g., fraud cases) dominates the dataset, making predictions biased.

✅ **Solutions:**  
 ✔ Use **cross-validation** to avoid overfitting.  
 ✔ Try **different algorithms** to improve accuracy.  
 ✔ **Balance data** using oversampling (SMOTE).

### **8\. Evaluation in Data Science Methodology**

#### **🔹 What is Model Evaluation?**

Model evaluation is the process of **measuring the performance** of a trained machine learning model. It helps us understand:  
 ✔ **How well the model is performing** on unseen data.  
 ✔ **Whether it is overfitting or underfitting.**  
 ✔ **If improvements are needed** before deployment.

#### **🔹 Why is Evaluation Important?**

✅ Ensures the model makes **accurate predictions**.  
 ✅ Helps in **choosing the best model**.  
 ✅ Prevents **errors in real-world applications**.

#### **🔹 Evaluation Process**

Before evaluation, we divide the dataset into:  
 ✔ **Training Set** → Used to train the model.  
 ✔ **Testing Set** → Used to evaluate the model’s performance.

✅ **Example: Splitting Data (80% Training, 20% Testing)**

**`from`** `sklearn.model_selection import train_test_split`    
**`from`** `sklearn.datasets import load_iris`  

*`# Load dataset`*    
`iris = load_iris()`    
`X, y = iris.data, iris.target`  

*`# Split dataset`*    
`X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)`  

`print("Training Data Shape:", X_train.shape)`    
`print("Testing Data Shape:", X_test.shape)`

🔹 This prevents the model from seeing the test data **during training**, ensuring fair evaluation.

#### **🔹 Metrics for Model Evaluation**

Different types of models require different evaluation metrics.

##### **📌 A. Regression Models (Predicting Continuous Values)**

Regression models predict numerical values (e.g., **house prices, stock prices**).

#### **✅ Common Evaluation Metrics:**

✔ **Mean Squared Error (MSE)** – Measures average squared difference between actual and predicted values.  
 ✔ **Root Mean Squared Error (RMSE)** – Square root of MSE for easier interpretation.  
 ✔ **Mean Absolute Error (MAE)** – Average absolute difference between actual and predicted values.  
 ✔ **R² Score (Coefficient of Determination)** – Measures how well the model explains variation in data.

✅ **Example: Evaluating a Regression Model**

**`from`** `sklearn.metrics import mean_squared_error, r2_score`    
**`from`** `sklearn.linear_model import LinearRegression`    
**`import`** `numpy as np`  

*`# Sample data`*    
`X = np.array([[1], [2], [3], [4], [5]])`    
`y = np.array([2, 4, 6, 8, 10])`  

*`# Train model`*    
`model = LinearRegression()`    
`model.fit(X, y)`  

*`# Predictions`*    
`y_pred = model.predict(X)`  

*`# Evaluation`*    
`mse = mean_squared_error(y, y_pred)`    
`r2 = r2_score(y, y_pred)`  

`print(f"MSE: {mse}")`    
`print(f"R² Score: {r2}")`

🔹 **Lower MSE \= Better Model**, **Higher R² \= Better Fit**.

##### **📌 B. Classification Models (Predicting Categories \- Yes/No, Spam/Not Spam)**

Classification models predict categories (e.g., **pass/fail, spam/not spam**).

#### **✅ Common Evaluation Metrics:**

✔ **Accuracy** – Measures overall correctness of predictions.  
 ✔ **Precision** – Measures how many positive predictions were correct.  
 ✔ **Recall (Sensitivity)** – Measures how many actual positives were predicted correctly.  
 ✔ **F1-Score** – Balances precision and recall (best when classes are imbalanced).  
 ✔ **Confusion Matrix** – Shows TP, FP, TN, FN.

✅ **Example: Evaluating a Classification Model**

from sklearn.metrics import accuracy\_score, classification\_report, confusion\_matrix    
from sklearn.linear\_model import LogisticRegression  

*`# Sample data`*    
`X_train = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]`    
`y_train = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1]`  

*`# Train model`*    
`model = LogisticRegression()`    
`model.fit(X_train, y_train)`  

*`# Test data`*    
`X_test = [[4.5], [7.5]]`    
`y_test = [1, 1]`  

*`# Predictions`*    
`y_pred = model.predict(X_test)`  

*`# Evaluation`*    
`print("Accuracy:", accuracy_score(y_test, y_pred))`    
`print("Classification Report:\n", classification_report(y_test, y_pred))`    
`print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred))`

🔹 **Higher Accuracy, Precision, Recall, and F1-Score \= Better Model**.

##### **🔹 Overfitting vs Underfitting**

| Issue | What Happens? | Solution |
| ----- | ----- | ----- |
| **Overfitting** | Model learns training data too well but fails on new data | Use **cross-validation**, **regularization**, **more data** |
| **Underfitting** | Model is too simple and doesn’t capture patterns | Use a **complex model**, add **more features**, **train longer** |

✅ **Solution: Use Cross-Validation**

**`from`** `sklearn.model_selection import cross_val_score`    
**`from`** `sklearn.tree import DecisionTreeClassifier`  

*`# Train model using Cross-Validation`*    
`model = DecisionTreeClassifier()`    
`scores = cross_val_score(model, X_train, y_train, cv=5)`  

`print("Cross-Validation Scores:", scores)`    
`print("Average Score:", scores.mean())`

🔹 Cross-validation **prevents overfitting** by testing on different subsets.

### **9\. Deployment in Data Science Methodology**

#### **🔹 What is Deployment?**

Deployment is the process of **integrating a trained machine learning model** into a real-world system so that users can interact with it and make predictions on new data.

✅ **Example Scenarios:**  
 ✔ A **recommendation system** in an e-commerce website suggesting products.  
 ✔ A **fraud detection model** running in a banking system.  
 ✔ A **spam filter** used in email services.

##### **🔹 Why is Deployment Important?**

✔ **Brings the model into real-world applications**  
 ✔ **Allows users to make predictions on live data**  
 ✔ **Helps businesses automate tasks and improve decision-making**

#### **🔹 Deployment Process**

##### **1️⃣ Choose the Right Deployment Strategy**

There are different ways to deploy a machine learning model:

| Deployment Type | Description | Example |
| ----- | ----- | ----- |
| **Batch Processing** | Model runs on a schedule to process data in bulk | Fraud detection on bank transactions every night |
| **Real-Time API** | Model provides instant predictions via an API | Chatbot responding to customer queries |
| **Edge Deployment** | Model runs on local devices (mobile, IoT) | AI in smart cameras or fitness trackers |
| **Embedded in Applications** | Model is integrated directly into software | Spam filter inside an email service |

✅ **Example: Deploying a Spam Filter as a Web API**  
 📌 The model will predict if an email is spam or not in real-time.

##### **2️⃣ Save the Trained Model**

Before deployment, the trained model needs to be saved so it can be reused.  
 ✅ **Saving Model Using Joblib**

**`import`** `joblib`  

*`# Save model`*    
`joblib.dump(model, "spam_classifier.pkl")`  

`✅ Load the Model When Needed`  
*`# Load saved model`*    
`loaded_model = joblib.load("spam_classifier.pkl")`  

##### **3️⃣ Deploy as a REST API Using Flask**

A **REST API** allows applications to send data to the model and receive predictions.

✅ **Install Flask:**

`pip install flask`

✅ **Create an API (app.py):**

**`from`** `flask import Flask, request, jsonify`    
**`import`** `joblib`  

*`# Load trained model`*    
`model = joblib.load("spam_classifier.pkl")`  

`app = Flask(__name__)`  

`@app.route('/predict', methods=['POST'])`    
**`def`** `predict():`    
    `data = request.get_json()  # Get input data`    
    `prediction = model.predict([data['email_text']])  # Predict`    
    `return jsonify({"Spam Prediction": "Spam" if prediction[0] == 1 else "Not Spam"})`  

**`if`** `__name__ == '__main__':`    
    `app.run(debug=True)`  

✅ **Run the API:**

`python app.py`

📌 Now, the model can receive email text and classify it as spam or not spam.

##### **4️⃣ Deploy the API on Cloud (AWS, Heroku, or Vercel)**

After creating the API, deploy it on cloud platforms like:  
 ✔ **AWS Lambda** – Serverless deployment for real-time predictions.  
 ✔ **Google Cloud AI Platform** – Scalable AI model hosting.  
 ✔ **Heroku / Vercel** – Quick API deployment.

✅ Deploy on Heroku (Example)  
 1️⃣ Install Heroku CLI  
`pip install gunicorn`

2️⃣ Create a Procfile:  
`web: gunicorn app:app`

3️⃣ Deploy to Heroku

`git init`  
`git add .`  
`git commit -m "Deploy ML API"`  
`heroku create my-ml-api`  
`git push heroku master`

Now, the API is **live and accessible**.

##### **5️⃣ Monitor Model Performance**

After deployment, monitor the model to ensure accuracy remains high.  
 ✅ **Key Monitoring Metrics:**  
 ✔ **Response Time** – How fast predictions are made.  
 ✔ **Accuracy Drift** – If predictions become less accurate over time.  
 ✔ **User Feedback** – If users are satisfied with model predictions.

📌 Example: Store user feedback to improve future models.

##### **6️⃣ Update and Retrain the Model**

As new data comes in, retrain the model periodically.  
 ✅ **Automate Retraining with New Data:**

*`# Load new data`*  
`new_data = load_new_data()`

*`# Retrain model`*  
`model.fit(new_data['features'], new_data['labels'])`

*`# Save updated model`*  
`joblib.dump(model, "updated_model.pkl")`

🔹 **Schedule retraining every few weeks** to improve predictions.

### **10\. Feedback & Improvement**

#### **🔹 What is Feedback in Data Science?**

Feedback is the process of **monitoring the performance of a deployed machine learning model and improving it** based on new data, user feedback, and real-world performance.

✅ **Why is Feedback Important?**  
 ✔ Ensures the model remains **accurate and relevant** over time.  
 ✔ Helps in **detecting biases, errors, and performance drops**.  
 ✔ Enables **continuous learning and model updates**.

#### **🔹 Types of Feedback in Data Science**

| Type | Description | Example |
| ----- | ----- | ----- |
| **User Feedback** | Users provide ratings, corrections, or suggestions. | A spam filter incorrectly marks an important email as spam, and the user marks it as "Not Spam". |
| **Model Performance Metrics** | Tracking accuracy, precision, recall, and errors over time. | An e-commerce recommendation system's accuracy drops from 85% to 70%. |
| **Real-Time Monitoring** | Checking response times, system errors, and load handling. | A chatbot model starts responding slowly during high traffic hours. |
| **Data Drift Detection** | Identifying changes in incoming data patterns. | A fraud detection model trained on 2023 transaction data performs poorly in 2025 due to changes in fraud tactics. |

#### **🔹 Feedback Collection Methods**

##### **1️⃣ User Feedback Mechanisms**

🔹 Allow users to give direct input on predictions.  
 ✅ **Example: Getting User Feedback on a Spam Filter**

`feedback = input("Was this email correctly classified? (yes/no): ")`    
**`if`** `feedback == "no":`    
    `print("Thank you! We will improve the model.")`  

📌 This helps collect **real-world corrections** to improve future predictions.

##### **2️⃣ Monitoring Model Performance**

✅ **Track key metrics regularly:**  
 ✔ **Accuracy** – Is the model still predicting correctly?  
 ✔ **Response Time** – Is the system getting slower?  
 ✔ **Error Rate** – Are incorrect predictions increasing?

✅ **Example: Monitoring Accuracy Drop in a Classification Model**

**`from`** `sklearn.metrics import accuracy_score`  

*`# Actual labels vs. Predicted labels`*    
`y_actual = [1, 0, 1, 1, 0, 0, 1]`    
`y_predicted = [1, 0, 1, 0, 0, 1, 1]`  

*`# Calculate accuracy`*    
`accuracy = accuracy_score(y_actual, y_predicted)`    
`print(f"Current Model Accuracy: {accuracy * 100:.2f}%")`  

📌 If accuracy **drops significantly**, it’s time to **retrain the model**.

##### **3️⃣ Detecting Data Drift**

🔹 **Data drift** occurs when the statistical properties of incoming data **change over time**, making the model less effective.  
 ✅ **Example: Checking If New Data Has Different Distribution**

**`import`** `numpy as np`    
**`from`** `scipy.stats import ks_2samp`  

*`# Old data distribution`*    
`old_data = np.random.normal(50, 10, 1000)`  

*`# New incoming data`*    
`new_data = np.random.normal(60, 10, 1000)`  

*`# Perform Kolmogorov-Smirnov test`*    
`stat, p_value = ks_2samp(old_data, new_data)`    
**`if`** `p_value < 0.05:`    
    `print("Data drift detected! Need model retraining.")`    
**`else`**`:`    
    `print("No significant data drift detected.")`  

📌 If data drift is detected, **collect new data** and **retrain the model**.

#### **🔹 Improving the Model Based on Feedback**

##### **1️⃣ Retraining the Model with New Data**

✅ **Steps to Improve a Model:**  
 1️⃣ Collect feedback and new data.  
 2️⃣ **Clean & preprocess** new data.  
 3️⃣ Retrain the model.  
 4️⃣ Evaluate and compare with the old model.  
 5️⃣ Deploy the improved model.

`✅ Example: Retraining a Model on New Data`  
*`# Load new dataset`*  
`new_data = load_new_data()`

*`# Train model again`*  
`model.fit(new_data['features'], new_data['labels'])`

*`# Save the updated model`*  
`joblib.dump(model, "updated_model.pkl")`

📌 This ensures the model **adapts to new trends and patterns**.

##### **2️⃣ Hyperparameter Tuning for Better Performance**

Instead of training the same model, adjust **hyperparameters** to find the best-performing version.  
 ✅ **Example: Using Grid Search for Hyperparameter Tuning**

**`from`** `sklearn.model_selection import GridSearchCV`    
**`from`** `sklearn.ensemble import RandomForestClassifier`  

*`# Define hyperparameters`*    
`param_grid = {`    
    `'n_estimators': [10, 50, 100],`    
    `'max_depth': [None, 10, 20],`    
`}`  

*`# Perform Grid Search`*    
`grid_search = GridSearchCV(RandomForestClassifier(), param_grid, cv=5)`    
`grid_search.fit(X_train, y_train)`  

`print("Best Parameters:", grid_search.best_params_)`  

📌 This helps **optimize model performance** without collecting new data.

##### **3️⃣ A/B Testing for Model Comparison**

Instead of replacing a model immediately, run **two versions** side by side.  
 ✅ **Example: Testing a New Model Against the Old One**

**`from`** `sklearn.metrics import f1_score`  

*`# Old and New Model Predictions`*    
`y_old_pred = old_model.predict(X_test)`    
`y_new_pred = new_model.predict(X_test)`  

*`# Compare F1-Scores`*    
`old_f1 = f1_score(y_test, y_old_pred, average='weighted')`    
`new_f1 = f1_score(y_test, y_new_pred, average='weighted')`  

**`if`** `new_f1 > old_f1:`    
    `print("New model performs better! Deploying it now.")`    
**`else`**`:`    
    `print("Old model is still better. No change needed.")`  

📌 **Choose the best model** based on performance.

#### **🔹 Automating Feedback & Model Improvement**

Instead of manually monitoring performance, automate the process.  
 ✅ **Example: Using a Scheduled Job for Model Retraining**

**`import`** `schedule`    
**`import`** `time`  

**`def`** `retrain_model():`    
    `print("Retraining model...")`    
    `new_data = load_new_data()`    
    `model.fit(new_data['features'], new_data['labels'])`    
    `joblib.dump(model, "updated_model.pkl")`    
    `print("Model retrained and saved!")`  

*`# Schedule retraining every week`*    
`schedule.every().week.do(retrain_model)`  

**`while`** `True:`    
    `schedule.run_pending()`    
    `time.sleep(3600)  # Check every hour`  

📌 This ensures the **model stays updated** without manual intervention.