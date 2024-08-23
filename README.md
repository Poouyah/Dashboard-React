## Overview

This project is a feature-rich admin panel built with React.js. The dashboard is designed with modularity and scalability in mind, providing a strong foundation for creating various management interfaces. It includes several key features such as user management, product management, and real-time data visualization.

## Features

Responsive Design: The dashboard is fully responsive, ensuring a seamless experience across all devices.

User Management: CRUD operations (Create, Read, Update, Delete) for managing users within the system.

Product Management: Manage products with detailed information and track sales.

Analytics and Charts: Visualize data using various types of charts, powered by Recharts.

Custom Components: Reusable and easily customizable components such as Sidebar, Topbar, Widgets, and more.

Data Handling: Predefined datasets for users, products, and transactions to demonstrate functionality.

Navigation: Integrated routing system using React Router for easy navigation between different sections.

## Tech Stack

React.js - Core framework for building the UI.

React Router - Handles client-side routing.

Material-UI - UI components for consistent design.

Recharts - Library for rendering charts and graphs.

Axios - Used for making HTTP requests.

CSS Modules - Scoped and modular CSS for component-specific styling.

## Project Structure

Here's a detailed overview of the project structure:
```
Dashboard/
├── public/                   # Public assets
├── src/
│   ├── assets/               # Static assets like images and fonts
│   ├── components/           # Reusable components
│   │   ├── chart/            # Chart component for data visualization
│   │   ├── feature/          # Feature highlights and summaries
│   │   ├── sidebar/          # Sidebar navigation menu
│   │   ├── topBar/           # Top navigation bar
│   │   ├── widgetLg/         # Large widget component
│   │   └── widgetSm/         # Small widget component
│   ├── Datas/                # Mock data for users, products, and transactions
│   ├── pages/                # Different pages of the dashboard
│   │   ├── home/             # Home page (dashboard overview)
│   │   ├── newUser/          # Page for adding new users
│   │   ├── product/          # Detailed view of a single product
│   │   ├── products/         # Product listing and management
│   │   └── users/            # User listing and management
│   ├── App.js                # Main application component
│   ├── index.js              # Entry point of the application
│   ├── routes.js             # Route definitions
│   └── ...                   # Other configuration and utility files
├── package.json              # Project metadata and dependencies
└── README.md                 # This file
```
## Components Overview

Topbar (Topbar.jsx): The top navigation bar that includes branding and user account actions.

Sidebar (Sidebar.jsx): A collapsible sidebar menu that facilitates navigation between different sections of the dashboard.

Charts (Chart.jsx): Displays various charts to visualize data trends and statistics.

Widgets (WidgetLg.jsx, WidgetSm.jsx): Specialized components that display summarized information, such as recent transactions or new users.

## Pages Overview
Home (Home.js): The main dashboard page that aggregates data and displays key metrics through charts and widgets.

Users (Users.js): Displays a list of users and provides functionality to manage them.

Products (Products.js): Allows management of product listings, including viewing and editing product details.

New User (NewUser.js): Form page for adding a new user to the system.