# My Project Portfolio

A responsive Single Page Application built with React that allows users to create, search, and view projects in a personal portfolio.

## Project Description

This project was created as part of the Moringa School Summative Lab: Single Page Application (SPA) with React.

The application provides a simple portfolio platform where users can:

- View projects
- Add new projects dynamically
- Search for projects
- View individual project details
- Navigate between pages using React Router
- Use the application on desktop and mobile devices

## Features

### 1. Project Listing

The home page displays all projects that have been added to the application.

Each project is displayed using a reusable `ProjectCard` component.

### 2. Add Projects

Users can add a new project using the project form.

Each project contains:

- Project title
- Project description
- Unique project ID

The form prevents empty projects from being submitted.

### 3. Search Projects

Users can search for projects using the search bar.

The search feature checks both:

- Project title
- Project description

The search is case-insensitive.

### 4. Project Details

Each project has a `View Details` link.

React Router is used to navigate to an individual project page.

Example route:

`/projects/:id`

### 5. Responsive Design

The application uses CSS media queries to provide a responsive layout for:

- Desktop computers
- Tablets
- Mobile devices

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- React Router
- Vite
- React Testing Library
- Vitest
