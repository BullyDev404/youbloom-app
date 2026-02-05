# YouBloom Frontend Assessment

## Description
A simple React web application built for a frontend assessment. The app has 3 pages: a login page with phone number validation, a main page that displays a list of posts fetched from an API with a search feature, and a detail page to view individual posts.

## Tech Stack
- React
- Vite
- Tailwind CSS
- React-router
- React-hook-form
- React-hot-toast
- React Testing Library

## Features
- Mock authentication with phone number validation (+254712345678)
- Browse and search posts from JSONPlaceholder API in real-time
- View full post details on a dedicated page
- Responsive design that works on mobile, tablet, and desktop
- Error handling for failed API requests
- Persistent login state using localStorage
- Toast notifications for user feedback

## Installation & Setup

1. Clone the repository
   git clone https://github.com/BullyDev404/youbloom-app.git
   cd youbloom-app


2. Install dependencies
   npm install

3. Run the development server
   npm run dev
   The app will open at `http://localhost:5173`

## Running Tests

To run the unit tests:
npm test
     
## Usage
1. Login with phone number: `712345678`
2. Browse posts from the homepage
3. Use the search bar to filter posts by title
4. Click on a post to view its full details
5. Click "Go Back" to return to the homepage
6. Click "Log out" to logout

- Authentication is a mock, only +254712345678 is accepted
- Posts are fetched from the JSONPlaceholder API
- Login state is saved in the browser using localStorage
