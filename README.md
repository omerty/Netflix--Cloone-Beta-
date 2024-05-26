# Netflix Clone

This project is a Netflix clone built with React, Firebase, and Redux. It simulates the core functionalities of Netflix, including authentication, a home screen, and a profile screen.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication (Login/Logout) with Firebase
- Home Screen with movie listings
- Profile Screen for user details
- Routing using React Router

## Installation

1. Clone the repository:

```bash
git clone https://github.com/omerty/Netflix--Cloone-Beta-.git
cd Netflix--Cloone-Beta-
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Firebase configuration:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:

```bash
npm start
```

The app should now be running on `http://localhost:3000`.

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- You can register or log in using your Firebase credentials.
- Once logged in, you can browse the home screen and view the profile screen.

## Project Structure

```
Netflix--Cloone-Beta-
├── public
│   └── index.html
├── src
│   ├── app
│   │   └── store.js
│   ├── components
│   ├── features
│   │   └── UserSlice.js
│   ├── Screens
│   │   ├── HomeScreen.js
│   │   ├── LoginScreen.js
│   │   └── ProfileScreen.js
│   ├── firebase.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
```

## Technologies Used

- React
- Redux
- Firebase
- React Router
