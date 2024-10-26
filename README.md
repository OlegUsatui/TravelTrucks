# TravelTrucks Project

## Overview
TravelTrucks is a web application for browsing, booking, and reviewing campervans. The project is built with React, Redux, and Vite, providing a fast and efficient platform to explore a variety of campervans available for travel. This README file will help you understand the project, how to set it up, and contribute to its development.

## Features
- **Catalog Page**: Users can browse available campervans, including viewing campervan details such as price, amenities, and reviews.
- **Favorites List**: Users can add campervans to their favorites and retain their list even after reloading the page.
- **Booking Form**: A form for users to book their selected campervan, including success notifications.
- **Tabs Navigation**: Camper details are organized with tabs for "Features" and "Reviews".
- **Filters**: Users can filter campervans based on various criteria, such as amenities, location, transmission type, and engine type.

## Technology Stack
- **Frontend**: React, Redux, Vite
- **Styling**: CSS Modules, `react-photo-view` for gallery management, `react-datepicker` for booking dates.
- **Routing**: React Router
- **HTTP Client**: Axios for API requests
- **State Management**: Redux with Redux Toolkit
- **Utilities**: `clsx` for conditional class names
- **Loading Indicators**: `react-loader-spinner` for showing loading animations

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/TravelTrucks.git
   ```
2. Navigate to the project directory:
   ```sh
   cd TravelTrucks
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```

## Project Structure
- **`src/components`**: Contains reusable components like `Header`, `ListingCard`, `CamperPrice`, etc.
- **`src/pages`**: Contains main pages like `HomePage`, `CatalogPage`, `CamperDetailsPage`, etc.
- **`src/redux`**: Contains Redux slices, including `campersSlice` and `favoritesSlice` for managing state.
- **`src/constants`**: Contains enums and other constants used throughout the project.
- **`src/styles`**: Contains global styles such as Typography.module.css and variables.css.

## How to Add to Favorites
Campervans can be added to the favorites list by clicking the "like" button on the camper listing. The favorites list is saved using local storage, allowing users to retain their selection after refreshing the page.

## Navigation Enhancements
- The `react-router-dom` library is used for managing routing and navigation between pages, including camper details.

## Custom Hooks and Utility Functions
- The project utilizes custom hooks and utility functions for improving code reusability, such as for handling date changes in the booking form and managing favorite campers.

## Contributions
We welcome contributions to improve the project! Please feel free to submit a pull request or open an issue to report any bugs or suggest new features.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
TravelTrucks is currently developed and maintained by Oleh Usatyi. If you have any questions or suggestions, feel free to reach out!

## Acknowledgments
- **React Photo View** for providing easy image gallery functionality.
- **React Datepicker** for simplifying the booking date selection.
- **Shields.io** for badges in the README (optional).

