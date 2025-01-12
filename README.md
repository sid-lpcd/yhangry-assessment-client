# yhangry Assessment Client

This repository contains the client-side code for the **yhangry assessment**, built using **Vite** and **React**. The application allows users to browse set menus, filter them by cuisine, and manage the number of guests dynamically.

## Features

- **Dynamic Filtering**: Filters menus based on cuisine types with real-time updates.
- **Guest Management**: Adjust the number of guests for personalized menu recommendations.
- **API Integration**: Fetches menu data from a backend server.
- **Reusable Components**: Modular design with components like `NumberGuests`, `FilterTag`, and `SetMenuCard`.

## Technologies Used

- **Vite**: For fast and efficient development.
- **React**: Component-based front-end library.
- **Sass**: Styling with modular and nested syntax.
- **UUID**: For generating unique keys.
- **Axios**: For API requests.

## Project Structure

```
src/
├── components/         # Reusable React components
│   ├── NumberGuests/   # Component for managing guest count
│   ├── FilterTag/      # Filter button for cuisines
│   └── SetMenuCard/    # Card displaying menu details
├── pages/
│   └── SetMenu/        # Main page for set menus
├── styles/             # Global and modular SCSS files
├── App.jsx             # Root component
└── main.jsx            # Entry point
```

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sid-lpcd/yhangry-assessment-client.git
   cd yhangry-assessment-client
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following:
   ```env
   VITE_BACKEND_URL=<your_backend_url>
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser at `http://localhost:5173`.

## Usage

1. Launch the application.
2. Browse the available set menus.
3. Use the filter options to refine the menu list by cuisine.
4. Adjust the number of guests to see menu options tailored for your party size.

## Future Improvements

- Add pagination for better performance with larger datasets.
- Enhance error handling for API requests.
- Introduce animations for a more dynamic user experience.
- Add responsiveness.
