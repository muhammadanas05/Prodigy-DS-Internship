## Prodigy_DS_02: Data Cleaning and Exploratory Data Analysis (EDA) on Titanic Dataset

This file contains code and CSV files used for performing data cleaning and exploratory data analysis (EDA) on the Titanic dataset. The analysis follows a structured approach to understand and prepare the data for further modeling.

### Overview

The analysis involves several key steps:

### Step 1: Understand the Data
- Explore the Dataset Description: Initial exploration of dataset documentation to understand features and the target variable.

### Step 2: Data Cleaning
1. Load the Data: Data is loaded into a DataFrame using pandas.
2. Check for Missing Values: Identification and handling of missing values through appropriate methods.
3. Handle Missing Values: Methods implemented for addressing missing data.
4. Check for Duplicates: Detection and removal of duplicate rows.
5. Correct Data Types: Ensuring columns have appropriate data types.
6. Handle Outliers: Identification and treatment of outliers in numerical data.
7. Normalize or Scale Data: Normalization or scaling of numerical features if required.

### Step 3: Exploratory Data Analysis (EDA)
1. Descriptive Statistics: Summary statistics for numerical and categorical features.
2. Data Visualization:
    - Histograms: Distribution of numerical features.
    - Box Plots: Outliers and distribution of numerical features.
    - Bar Plots: Frequency distribution of categorical features.
    - Heatmaps: Correlation between numerical features.
    - Pair Plots: Relationships between pairs of features.
    - Violin Plots: Distribution of data across categories.

### Step 4: Explore Relationships and Patterns
1. Correlation Analysis: Computation of correlation matrix to identify relationships between numerical variables.
2. Group By Analysis: Analysis of relationships between categorical variables and numerical outcomes.
3. Pivot Tables: Summarization and pattern discovery using pivot tables.
4. Feature Interaction: Investigation of interactions between features (e.g., survival rates based on combinations of features like gender, class, age).
5. Categorical Variable Analysis: Statistical methods to understand relationships between categorical variables.
6. Time-Series Analysis: Exploration of time-related features and trends if applicable.

### Step 5: Summarize Findings
1. Create Summary Reports: Documentation of key findings, patterns, and insights from the data.
2. Visual Summary: Creation of visual summaries to present findings effectively.

### Tools and Libraries
- Pandas: Data manipulation and cleaning.
- NumPy: Numerical operations.
- Matplotlib/Seaborn: Data visualization.
- SciPy/Statsmodels: Statistical analysis.
- Jupyter Notebook: Interactive coding and visualization environment.

This file includes all necessary code and CSV files used for the above analysis. For detailed results and visualizations, please refer to the code within this repository.