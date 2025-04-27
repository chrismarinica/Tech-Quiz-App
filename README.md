# Tech Quiz App

## Description

The **Tech Quiz App** is a web application built using the **MERN** stack (MongoDB, Express, React, Node.js) that allows users to take a tech quiz, test their knowledge, and improve their skills. The quiz consists of ten random questions, and users can see their score after completing the quiz. The app allows users to start a new quiz after completing one.

This project also includes **Cypress** for both **component** and **end-to-end** testing, ensuring that the app functions as expected across its features.

## Features

- Take a tech quiz with 10 random questions
- Answer multiple-choice questions
- See your score at the end of the quiz
- Start a new quiz after finishing
- Use Cypress for automated testing

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Testing**: Cypress (for component and end-to-end testing)
- **Bundler**: Vite (for development server)

## Getting Started

### Prerequisites

Before running the project, make sure you have the following installed on your local machine:

- **Node.js** (with npm)
- **MongoDB** (or use a cloud MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Cypress** (for testing)

## Folder Structure
├── client/                # The client-side (React) app
├── cypress/               # Cypress folder for tests
│   ├── component/         # Component tests
│   ├── e2e/               # End-to-end tests
│   ├── fixtures/          # Test fixtures
│   ├── tsconfig.json      # TypeScript configuration for Cypress
├── server/                # The server-side (Node.js/Express) app
├── .env.example           # Example environment variables file
├── package.json           # Main project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation

## Issues
If you find any bugs or have feature requests, please open an issue.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
