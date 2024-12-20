
# Reusable NextJs Components

This project is a reusable component library built with Next.js and styled. The library provides a collection of pre-built, customizable UI components designed for efficiency and ease of use. Each component includes:

- Interactive Code Previews: Displays the UI alongside its implementation code.
- One-Click Code Copy: Allows users to easily copy the code snippet for integration into their projects.


## Features

- Pre-built Components: Ready-to-use React components for rapid development.
- Code and UI Showcase: View both the rendered UI and its implementation code side by side.
- Code Copy Functionality: One-click copy to quickly reuse component code.
- Customizable: Easily extend and customize components to fit your project needs.
- Built with Next.js: Optimized for server-side rendering and performance.



## Tech Stack

- Framework: Next.js with App Router
- Next.js v15: The React framework for building the application.
- UI Components: Material-UI (MUI) for a sleek, responsive interface. For UI components like the side drawer, buttons, etc.


## Getting Started
Prerequisites

Ensure you have the following installed:

- Node.js v18.19.1
- Yarn or npm

Installation

1. Clone the repository

```bash
git clone https://github.com/pooja-webxpert/ReusableNextjsComponent
```
2. Navigate to the project directory:

```bash
cd my-app
```
3. Install dependencies:

```bash
npm install
# or
yarn install

```
## Environment Variables

Create a .env.local file in the root directory and add the following variables:

```bash
NEXTAUTH_URL=http://localhost:3000
SECRET=your_nextauth_secret
```

## Run Locally

To start the development server:

```bash
npm run dev
# or
yarn dev
```
Open http://localhost:3000 in your browser to view the app.



## Usage

- Browse Components: Navigate through the components in the app's interface.
- View Code and UI: See the rendered UI alongside its corresponding React code.
- Copy Code: Use the "Copy Code" button to copy the implementation snippet directly to your clipboard.
- Integrate into Your Project: Paste the copied code into your Next.js project and customize it as needed.

## Folder Structure
Here's a general overview of the folder structure:


```bash
├── components         # Reusable components (e.g., inputfields, textarea, datePicker,dateTimePicker,select, modal, skeleton,button,typography,etc)
├── pages              # Next.js pages
│   ├── form           # form/inputfields,select,radiobutton,checkbox,etx
│   ├── Others         # others/button,typography
│   └── Modal/Skeleton # modal,skeleton
├── public             # Public assets (e.g., images, icons)
├── styles             # Global and component-specific styles
└── utils              # Utility functions (e.g., route URLs)
```


## Tech Stack

- Next.js: Framework for server-rendered React applications.
- Material-UI (MUI): For styling and component library.
- SyntaxHighlighter React: For syntax highlighting in the code previews.
- Clipboard.js: For code copy functionality.

