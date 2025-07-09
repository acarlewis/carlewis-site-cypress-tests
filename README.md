# 🚀 Personal Website E2E Tests with Cypress + Cucumber

![Cypress](https://img.shields.io/badge/Cypress-Testing-brightgreen?logo=cypress)
![BDD](https://img.shields.io/badge/BDD-Cucumber-ff69b4?logo=cucumber)
![Status](https://img.shields.io/badge/Project-Active-blueviolet)
![License](https://img.shields.io/badge/License-MIT-blue)

> End-to-end (E2E) test suite for my personal/professional website, built with **Cypress** and **Cucumber (BDD)**.  
> It ensures that key user flows such as navigation, form submissions, and UI elements work flawlessly.

---

## 📌 Table of Contents

- [🚀 Project Overview](#-project-overview)
- [🧰 Tech Stack](#-tech-stack)
- [⚙️ Installation](#️-installation)
- [🧪 Running Tests](#-running-tests)
- [📁 Project Structure](#-project-structure)
- [🧠 Features Tested](#-features-tested)
- [🛠️ Contributing](#️-contributing)
- [📄 License](#-license)
- [🌐 Live Site](#-live-site)

---

## 🚀 Project Overview

This project contains automated tests for my personal portfolio site. It uses:

- **Cypress**: A powerful, modern E2E test framework.
- **Cucumber**: To define BDD-style Gherkin feature files.
- **TypeScript**: For writing clean and type-safe test logic.

---

## 🧰 Tech Stack

- 🧪 [Cypress](https://www.cypress.io/)
- 🍀 [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- 🟦 TypeScript
- 🔤 Gherkin syntax for BDD

---

## ⚙️ Installation

1. **Clone the repo**

```bash
git clone https://github.com/acarlewis/carlewis-site-cypress-tests.git
cd carlewis-site-cypress-tests
```

2. **Install dependencies**

```bash
npm install
```

3. (Optional) **Install Cypress globally**

```bash
npm install -g cypress
```

---

## 🧪 Running Tests

### ▶️ Headless mode (CI, terminal)

```bash
npx cypress run
```

### 🧭 Interactive mode (Cypress UI)

```bash
npx cypress open
```

Choose a browser and run your features interactively.

---

## 📁 Project Structure

```
.
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   ├── homepage.feature
│   │   │   └── contact.feature
│   │   └── step_definitions/
│   │       └── commonSteps.ts
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🧠 Features Tested

- ✅ Homepage loads successfully
- ✅ Navigation menu and section scroll
- ✅ Contact form validation and submission
- ✅ Footer and social media links
- ✅ Responsive layout on desktop/mobile
- ✅ SEO meta tags and accessibility basics

---

## 🛠️ Contributing

This project is tailored to test my own site, but you’re welcome to fork it or suggest improvements.

```bash
# Clone → Customize → Test → PR
```

---

## 📄 License

This project is open-sourced under the [MIT License](LICENSE).

---

## 🌐 Live Site

🔗 [https://cyclone.42web.io/](https://cyclone.42web.io/)

---

## 🙌 Acknowledgments

- [Cypress Docs](https://docs.cypress.io/)
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
