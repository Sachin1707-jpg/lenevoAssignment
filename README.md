# Simple Student App Using React

A modern, component-based React application designed to manage student records. This project demonstrates core React concepts such as state management, functional components, JSX syntax, and dynamic UI rendering.

## 🌟 Features

- **Create Reusable Components:** Architected with modularity in mind using `StudentForm`, `StudentList`, and `StudentItem` components.
- **Dynamic List Rendering:** View a list of student records including their name, age, and enrolled course.
- **Form Integration:** Add new students seamlessly via a responsive form with built-in validation.
- **Delete Functionality:** Remove students from the list interactively.
- **Premium UI/UX:** Styled using a sleek dark-mode design system with subtle micro-animations and Google Inter typography.

## 🛠️ Technologies Used

- **React.js** (via Vite)
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3** (Custom Modern Design System)

## 📚 Learning Outcomes

By completing this assignment, the following concepts were solidified:
- Understanding React component structure and hierarchical data flow.
- Ability to use JSX and create functional components.
- Managing and updating data using React's `useState` hook.
- Rendering dynamic list data conditionally in the UI.

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-github-repo-url>
   ```

2. **Navigate to the project directory:**
   ```bash
   cd student-app
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to the local host URL provided in the terminal (typically `http://localhost:5173/`) to view the app!

## 📂 Project Structure

```text
student-app/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── StudentForm.jsx    # Component handling new student inputs
│   │   ├── StudentItem.jsx    # Individual student card and delete logic
│   │   └── StudentList.jsx    # Renders the dynamic array of students
│   ├── App.jsx                # Main container & state management
│   ├── index.css              # Custom styling and design system
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML template with SEO tags and fonts
├── package.json               # Dependencies and scripts
└── vite.config.js             # Vite bundler configuration
```
