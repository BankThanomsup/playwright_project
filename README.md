Playwright Testing Framework for Web Automation
This repository contains a Playwright project for automated end-to-end testing of the web application SauceDemo. The project demonstrates the usage of Playwright for testing login functionality, error handling, and URL navigation. It also includes tools for debugging, tracing, and taking screenshots on test failures.

🚀 Features
Reusable Page Objects: Modular and maintainable code structure using the Page Object Model.
End-to-End Testing: Automated tests covering user login, error validation, and page navigation.
Debugging and Traceability:
Test tracing for easy debugging using Playwright Trace Viewer.
Screenshots captured automatically on test failures.
Configurable Testing:
Headless and non-headless browser modes supported.
Base URL configuration for easy navigation during tests.
📋 Requirements
Before running tests, make sure you have the following installed:

Node.js (v12 or higher)
Playwright (installed via npm)
🛠️ Setup Instructions
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install the necessary dependencies:
bash
Copy code
npm install
To run the tests:
bash
Copy code
npx playwright test
📂 Folder Structure
The project follows a structured approach for better code organization:

bash
Copy code
src/
├── tests/           # Test cases (located here)
├── pages/           # Page objects for modularization
├── utils/           # Utility functions for code reuse
🧑‍💻 How to Contribute
Fork the repository to your GitHub account.
Create a new branch for your feature or bug fix.
Submit a pull request once your changes are ready.
⚙️ Configuration
You can modify the playwright.config.js file to update the base URL or other settings specific to your testing environment. By default, the tests are set up for SauceDemo.

🖼️ Screenshots & Tracing
Screenshots: Automatically captured for every test failure.
Traces: Use Playwright's Trace Viewer to examine the trace logs for debugging failed tests.
📚 Documentation
Playwright Documentation
Playwright Trace Viewer
📝 License
This project is licensed under the MIT License
