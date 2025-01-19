# TravelTrucks - Camper Rental Platform

TravelTrucks is a modern web application designed to provide a seamless experience for browsing and renting campers. This project showcases a robust frontend implementation using React and related tools.

## Features

- **Responsive Design:** Optimized for desktop and mobile devices.
- **Dynamic Routing:** Supports multiple pages like catalog and camper details.
- **State Management:** Integrated Redux for efficient state handling.
- **Image Gallery:** Interactive camper image galleries.
- **Tab Navigation:** Feature and Reviews tabs for detailed camper descriptions.
- **Form Handling:** Booking forms with validations using `react-hook-form`.

## Tech Stack

- **Frontend:** React, React Router, Redux Toolkit
- **Styling:** CSS Modules
- **Utilities:** Axios, React Toastify, Lottie React
- **Build Tool:** Vite
- **Deployment:** Vercel

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/username/traveltrucks.git
   cd traveltrucks
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

## Deployment

The application is deployed on [Vercel](https://vercel.com/). Ensure you have the correct `vercel.json` configuration for client-side routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## Folder Structure

```plaintext
src/
├── assets/              # Static assets (images, icons, etc.)
├── components/          # Reusable React components
├── pages/               # Page components for routes
├── redux/               # State management (reducers, actions, etc.)
├── styles/              # Global and modular CSS files
├── App.jsx              # Main application component
├── main.jsx             # Entry point for React
```

## Key Components

### Hero Section

- Displays a prominent banner with a call-to-action button directing users to the catalog.

### Catalog Page

- Lists all available campers with filtering options.

### Camper Details Page

- Provides in-depth information, gallery, and reviews for a selected camper.

## Issues and Fixes

### Problem: `404: NOT_FOUND` on Direct Links

When navigating directly to routes like `/catalog/:id`, the application throws a `404` error.

**Solution:** Ensure the `vercel.json` file has proper rewrites to redirect all routes to the React SPA entry point.

### Problem: White Space Below Hero

Occurs due to incorrect height calculations or extra margins.

**Solution:**

1. Ensure `html, body` styles have `margin: 0; padding: 0; height: 100%;`.
2. Verify the height of `Hero` is set to `100vh`.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.
