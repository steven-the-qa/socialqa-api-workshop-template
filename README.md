# API Test Automation with Playwright

Welcome to the API Test Automation project using Playwright! This project is designed for students to learn how to automate API testing using Playwright's powerful testing framework.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
  - Download: [Node.js Official Website](https://nodejs.org/)
- npm (Node package manager)
  - npm is included with Node.js installation. You can verify the installation by running `npm -v` in your terminal after installing Node.js.
- Git (version 2.0 or higher)
  - Download: [Git Official Website](https://git-scm.com/downloads)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/api-test-automation-playwright.git
   cd api-test-automation-playwright

2. Install dependencies
    ```bash
    npm i
    ```

3. Run tests
    ```bash
    npx playwright test
    ```

## Project Structure

```yaml
tests/ (tests & test utilities)
|
|-- helpers/ (request templates & type definitions)
|
|-- spec files/ (API tests)

.env (API key)

playwright.config.ts (API test configurations)
```

## Workshop Exercises

Add the following scenarios to this API test suite:

1. **Valid Search Query**
   - **Description**: Test the API with a valid movie title.

2. **Invalid Search Query**
   - **Description**: Test the API with an invalid movie title.

3. **Empty Search Query**
   - **Description**: Test the API with an empty search query.

4. **Special Characters in Search Query**
   - **Description**: Test the API with special characters in the movie title.

5. **Pagination Test**
   - **Description**: Test the API with pagination by requesting the second page of results.

6. **Check Response Format**
   - **Description**: Validate the structure of the response.

7. **Rate Limiting Test**
   - **Description**: Test the API's response to rapid successive requests.

8. **Valid API Key**
   - **Description**: Test the API with a valid API key.

9. **Invalid API Key**
   - **Description**: Test the API with an invalid API key.

10. **Check for Non-Existent Movie**
    - **Description**: Test the API with a movie title that does not exist.