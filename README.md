# OpenMRS EMR Test Automation

Automated **functional and regression test suite** for **OpenMRS EMR** using [Playwright](https://playwright.dev/) with **JavaScript**.  
The framework is built with the **Page Object Model (POM)** design pattern for scalability and maintainability.  

---

## ✅ Test Scenario Overview
This suite simulates real-world user journeys within OpenMRS:

### 🔹 Login Module
- Launch the OpenMRS application  
- Enter valid credentials  
- Verify successful login  

### 🔹 Home Module
- Set the user’s **location**  
- Navigate through the main dashboard  
- Create a **new patient** record  

### 🔹 Laboratory Module
- Access Laboratory section  
- Validate laboratory order workflows  

### 🔹 Patient List Module
- Search for patients  
- View and validate patient details  
- Confirm patient records exist  

### 🔹 Regression Suite
- Execute combined scenarios across modules  
- Validate system stability after changes  

---

## 🔧 Tech Stack
- **JavaScript (Node.js)** – Test scripting language  
- **Playwright** – Browser automation & testing framework  
- **Page Object Model (POM)** – Test design pattern  
- **Visual Studio Code** – IDE for development  
- **Playwright Test Runner** – For execution & reporting  

---

## 📊 Reports & Artifacts
- **Playwright HTML Report** – Interactive test report  
- **Screenshots / Videos / Traces** – Captured for failed tests  

---

## 🚀 How to Run
1. Install dependencies:
   ```bash
   npm install

