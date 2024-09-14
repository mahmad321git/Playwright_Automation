# Playwright Automation for Demo E-commerce Website

This repository contains automated tests using [Playwright](https://playwright.dev) for the e-commerce demo website [Demoblaze](https://demoblaze.com/). The tests cover the **Signup**, **Login**, and **Cart Experience** functionalities.

## 🛠 Features

- Automated **Signup** process with verification
- Automated **Login** process with user validation
- **Cart** functionality testing (add item, verify item in cart)
- Cross-browser testing with Chromium, Firefox, and WebKit
- Configured for CI/CD integration
- HTML reports and video recording on test failure

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** installed. You can download it [here](https://nodejs.org/).

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/mahmad321git/Playwright_Automation


2. Navigate into the project directory:
    ```bash
    cd Playwright_Automation

3. Install the dependencies:
    ```bash
    npm install

4. Running the Tests
    To run all the tests, simply use:
    ```bash
    npx playwright test

5. You can also run individual test files:
    ```bash
    npx playwright test tests/signup.spec.js
    npx playwright test tests/login.spec.js
    npx playwright test tests/cart.spec.js


📊 Reports and Video
After test execution, an HTML report is generated in the playwright-report folder. To view the report:
bash
Copy code
npx playwright show-report
Video recordings of failed tests will be saved in the videos/ directory.

🧪 Running Tests in CI/CD
This project is configured to run tests in headless mode in CI/CD pipelines. To integrate with GitHub Actions, you can create a workflow in .github/workflows/playwright.yml:

yaml
Copy code
name: Playwright Tests

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run Playwright tests
        run: npx playwright test

📝 License
This project is licensed under the MIT License. See the LICENSE file for details.

---

