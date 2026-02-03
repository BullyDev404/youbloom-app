Instructions for 

Objective
This task is designed to assess your ability to build a simple React web application using best
practices such as functional components, Hooks, API integration, and clean UI design.
App Overview
You are required to build a React application with the following three pages:
1. Login Page
2. Main Page (List View with Search)
3. Detail Page
Requirements
General
● Use JavaScript with React
● Use React Hooks, Context API, or Redux Toolkit for state management
● Fetch data from a public REST API such as https://jsonplaceholder.typicode.com
● Build a responsive and clean UI using Material UI, Tailwind CSS, or custom CSS
● Submit your code via GitHub (preferred) or as a ZIP file and send the link to
● Include a short README file explaining the project setup
● Testing: At least one unit test using Jest and React Testing Library
Page Features
1. Login Page
● A phone number input field with basic validation (e.g., required field, starts with country
code like +254)
● A login button that uses mock logic (e.g., accept +254712345678 as valid)
● On success, redirect to the Main Page
● Show error messages for invalid input
2. Main Page
● Display a list of items from a public API (e.g., list of users or posts)
● Include a search bar that filters the list dynamically as the user types
● Clicking an item should open the Detail Page for that item
3. Detail Page
● Show detailed information about the selected item
● Include a button or link to return to the Main Page
Technical Guidelines
● Use functional components and clean code practices
● Handle loading and error states when fetching data
● Use a modular file structure (e.g., components, pages, services)
● Use localStorage to maintain login state (optional)
Testing Requirements
● Add at least one unit test for a component or function
● Use Jest and React Testing Library or any preferred tool