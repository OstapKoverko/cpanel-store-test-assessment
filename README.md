# Automated Tests using Playwright

## 📝 Author

Ostap Koverko

## 📌 Project Overview

This repository contains automated end-to-end (E2E) test using **Playwright** for cPanel Store website testing (https://store.cpanel.net/index.php). The test validate critical functionalities such as ordering license, adding add-on, and checking out.

## 🚀 Setup and Installation

### 1️⃣ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)
- [Playwright](https://playwright.dev/)

### 2️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 3️⃣ Install Dependencies

```sh
npm install
```

### 4️⃣ Install Playwright Browsers

```sh
npx playwright install
```

## 🎭 Running Test

### Run test

```sh
npx playwright test
```

### Run test in headed mode (with UI)

```sh
npx playwright test --headed
```

### Generate and view test report

```sh
npx playwright test --reporter=html
npx playwright show-report
```

## ⚙️ Project Structure

```
📂 CPANEL-STORE-TEST-ASSESSMENT/
├── 📂 app/                           # Application-related files
│   ├── 📂 fixtures/                  # Playwright test fixtures
│   │   ├── pageFixture.ts            # Defines test fixtures for page objects
│   │
│   ├── 📂 pages/                     # Page Object Model (POM) files
│   │   ├── AbstractPage.ts           # Base class for all pages
│   │   ├── CheckoutPage.ts           # Page object for the checkout process
│   │   ├── ConfigurePage.ts          # Page object for product configuration
│   │   ├── LicensesPage.ts           # Page object for license selection
│   │   ├── ReviewPage.ts             # Page object for reviewing the order
│
├── 📂 utils/                         # Utility functions
│   ├── priceUtils.ts                 # Utility functions for handling price values
│
├── 📂 node_modules/                  # Installed npm dependencies (ignored in Git)
│
├── 📂 playwright-report/             # Playwright test report (ignored in Git)
│
├── 📂 test-results/                  # Stores test result data (ignored in Git)
│
├── 📂 tests/                         # Test files
│   ├── orderLicenseAndAddon.spec.ts  # Test for ordering license and addon
│
├── 📜 .gitignore                     # Files and folders to exclude from Git
├── 📜 .prettierrc.json               # Prettier configuration for code formatting
├── 📜 bugReport.txt                  # Text file describing a reported bug
├── 📜 bugScreenshot.png              # Screenshot related to a reported bug
├── 📜 package-lock.json              # Auto-generated file for npm dependencies
├── 📜 package.json                   # Project dependencies and scripts
├── 📜 playwright.config.ts           # Playwright configuration file
├── 📜 tsconfig.json                  # TypeScript configuration file
├── 📜 README.md                      # Project documentation

```

## 🛠️ Configuration

### Configure Prettier

Ensure code consistency by installing Prettier:

```sh
npm install --save-dev prettier
```

### Sample `.gitignore`

```gitignore
node_modules/
/test-results/
/playwright-report/
/blob-report/
/playwright/.cache/
```

## 🐞 Bug Report: Monthly License Price Issue

A bug has been found on **Page 2: Review & Checkout** and **Page 3: Checkout** related to the **monthly license price**. The displayed price does not match the expected value.

For more details, please refer to:

- 📄 **bugReport.txt** – Detailed description of the issue
- 🖼️ **bugScreenshot.png** – Screenshot illustrating the problem
