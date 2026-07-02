# GitHub Profile Analyzer

A web application that analyzes public GitHub profiles and provides repository statistics, language distribution, and developer insights using the GitHub REST API.

## Live Demo

**Frontend:** [https://your-vercel-url.vercel.app](https://git-scope-jade.vercel.app/)

---

## Features

* Search any public GitHub profile
* View detailed user information
* Display repository statistics
* Language distribution with interactive pie chart
* Search, filter, and sort repositories
* View top repositories based on stars
* Developer insights dashboard
* Responsive design for desktop and mobile
* Real-time data from the GitHub REST API

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS v4
* Axios
* Recharts
* React Icons

### API

* GitHub REST API

### Deployment

* Vercel

---

## How It Works

The application fetches data from the GitHub REST API using a public username.

It retrieves:

* User profile information
* Public repositories

The repository data is then processed to calculate:

* Total repositories
* Total stars
* Total forks
* Language distribution
* Top repositories by stars

The processed data is displayed through an interactive dashboard using charts and tables.

---

## Project Structure

```text
github-profile-analyzer/
│
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Running the Project

### Clone the repository

```bash
git clone https://github.com/your-username/github-profile-analyzer.git
cd github-profile-analyzer
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application runs on:

```text
http://localhost:5173
```

---

## Future Improvements

* Compare multiple GitHub profiles
* Repository commit analytics
* GitHub contribution heatmap
* Export dashboard as PDF
* Bookmark favorite profiles
* Repository trend analysis

---

## What I Learned

* Working with the GitHub REST API
* Managing API requests using Axios
* Building reusable React components
* Data visualization with Recharts
* State management using React Hooks
* Responsive UI development with Tailwind CSS
* Deploying React applications using Vercel

---

## Author

**Divanshu Sharma**

Computer Science & Engineering

GitHub: https://github.com/Typisch-Div
