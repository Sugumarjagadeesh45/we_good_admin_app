# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EazyGo Admin Panel - A React-based administrative dashboard for managing a dual-service platform (ride-hailing and grocery delivery). Built with Create React App, Bootstrap, and React Icons.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Run tests in watch mode
npm test

# Build for production
npm run build
```

## Architecture

### Application Structure

This is a single-page application (SPA) using React Router for navigation. The app has two main service domains:

1. **Ride Service**: Driver management, ride tracking, live data
2. **Grocery/Product Service**: Product catalog, orders, inventory

### Core Components

- **App.js**: Main router configuration with all application routes
- **HomePage.jsx**: Dashboard with analytics, charts (using Recharts), and performance metrics
- **Sidebar.jsx**: Navigation component with collapsible menu and dropdown support
- **LoginPage.jsx** / **RegisterPage.jsx**: Authentication flows

### Page Components (src/components/Pages/)

Feature-specific pages implementing CRUD operations:
- **Orders.jsx**: Order management with status timeline and bulk operations
- **ProductData.jsx**: Product catalog management
- **RideData.jsx**: Ride history and tracking
- **LiveData.jsx**: Real-time service monitoring
- **SalesData.jsx**: Sales analytics
- **Settings.jsx**: Application configuration

### Shared Components

- **User.jsx**: User management with pagination, edit/delete operations
- **Drivers.jsx**: Driver onboarding and management
- **Modal.jsx**: Reusable modal component

## Backend Integration

### API Configuration (src/API/backendConfig.js)

Centralized API configuration with:
- Base URL via environment variable `REACT_APP_API_URL` (defaults to `http://localhost:5001`)
- Endpoint definitions for auth, orders, etc.
- Helper methods: `getHeaders()`, `storeAdminToken()`, `getAdminToken()`, `removeAdminToken()`

**NOTE**: The codebase has hardcoded backend URLs in components (e.g., `https://backend-besafe.onrender.com`) that bypass the centralized config. When modifying API calls, use `backendConfig` instead of hardcoding URLs.

### Authentication

- JWT tokens stored in localStorage as `token` and `adminToken`
- Role-based access stored as `role` in localStorage
- Authorization header format: `Bearer ${token}`
- Unauthenticated users redirected to `/` (login page)

## State Management

No global state management library (Redux, Zustand, etc.). Component state managed via:
- React hooks (`useState`, `useEffect`)
- localStorage for persistence
- Props drilling for shared state (e.g., sidebar state)

## Styling

- **Bootstrap 5**: Base styling and grid system
- **Inline styles**: Component-specific styles using `<style>` tags within JSX
- **CSS files**: Additional styles in `src/css/` directory
- **Styled Components**: Listed as dependency but minimal usage
- **Dark mode**: Toggle available but implementation varies by component

## Data Fetching Patterns

Components fetch data directly using `fetch()` or `axios`:
```javascript
const token = localStorage.getItem("token");
const response = await fetch(`${API_URL}/endpoint`, {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});
```

Error handling is inconsistent - some components show alerts, others use notification systems.

## Common Patterns

### Routing
- Protected routes require token verification
- Navigation uses `useNavigate()` hook
- Active route detection with `useLocation()` for sidebar highlighting

### Pagination
Implemented manually in components (e.g., User.jsx):
- `currentPage`, `totalPages`, `itemsPerPage` state
- Client-side or server-side pagination depending on component

### CRUD Operations
Pattern across most data management components:
1. Fetch data on mount
2. Display in table/grid with search/filter
3. Inline editing or modal-based editing
4. Optimistic UI updates or refetch after mutation
5. Notification/alert on success/error

## Environment Variables

Create `.env.local` file (gitignored) for local development:
```
REACT_APP_API_URL=http://localhost:5001
```

## Known Issues

1. **Duplicate API configuration**: Components use hardcoded URLs instead of `backendConfig`
2. **Inconsistent token keys**: Both `token` and `adminToken` used across codebase
3. **Mixed styling approaches**: Bootstrap + inline styles + CSS files
4. **No TypeScript**: JavaScript-only codebase despite `.tsx` references in comments
5. **Duplicate imports**: Some files have duplicate Bootstrap imports
6. **Sidebar toggle incomplete**: Toggle button exists but functionality not connected in some components

## Working with This Codebase

- When adding new API calls, use `backendConfig` utilities instead of hardcoding URLs
- Follow existing component patterns for consistency (especially CRUD operations)
- Authentication state is managed via localStorage - clear tokens on logout
- Charts use Recharts library - reference HomePage.jsx for implementation examples
- Icons use react-icons/fi (Feather Icons)
