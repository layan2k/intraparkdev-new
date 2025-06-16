# IntraSpark.Dev

IntraSpark.Dev is a comprehensive consulting platform designed to transform businesses through strategic consulting excellence. This project includes various features such as client portals, onboarding processes, service packages, and more.

## Table of Contents

- [IntraSpark.Dev](#intrasparkdev)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)

## Features

- **Home Page**: Introduction to the services offered.
- **About Page**: Information about the company, its values, and team members.
- **Client Portal**: Dashboard for clients to manage their projects and view updates.
- **Contact Page**: Form for potential clients to get in touch.
- **Onboarding Page**: Step-by-step process for new clients to onboard.
- **Service Packages**: Detailed information about the different service packages offered.
- **Sign In Page**: Authentication for clients to access their dashboard.
- **Policies**: Privacy Policy and Terms and Conditions.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/layan2k/intrasparkdev-new.git
    cd intraparkdev-new
    ```

2. Install dependencies:

    ```sh
    yarn install
    ```

3. Start the development server:

    ```sh
    yarn dev
    ```

4. Build the project:

    ```sh
    yarn build
    ```

5. Preview the build:

    ```sh
    yarn preview
    ```

## Usage

- Navigate to `http://localhost:5173` to view the application.
- Use the navigation bar to explore different sections of the website.
- Sign in to access the client portal and manage projects.

## Project Structure

```plaintext
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── About/
│   │   ├── Common/
│   │   └── LandingPageComponents/
│   ├── data/
│   │   ├── OurProcessCardInterface.ts
│   │   ├── OurProcessCardItems.tsx
│   │   ├── Packages.ts
│   │   ├── WhyUsInterface.ts
│   │   └── WhyUsItems.ts
│   ├── layouts/
│   │   ├── dashboardLayout/
│   │   └── rootLayout/
│   ├── pages/
│   │   ├── about/
│   │   ├── client-portal/
│   │   ├── contactPage/
│   │   ├── homePage.tsx/
│   │   ├── onboardingPage/
│   │   ├── policies/
│   │   └── signInPage/
│   ├── index.css
│   ├── main.tsx
│   ├── routes.tsx
│   └── vite-env.d.ts
├── .gitignore
├── .hintrc
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
