# TravelTrucks Project

## Overview

TravelTrucks is a web application for browsing, booking, and reviewing campervans. The project is built with React, Redux, and Vite, providing a fast and efficient platform to explore a variety of campervans available for travel. This README file will help you understand the project, how to set it up, and contribute to its development.

## Features

- **Catalog Page**: Users can browse available campervans, including viewing campervan details such as price, amenities, and reviews.
- **Favorites List**: Users can add campervans to their favorites and retain their list even after reloading the page.
- **Booking Form**: A form for users to book their selected campervan, including success notifications.
- **Tabs Navigation**: Camper details are organized with tabs for "Features" and "Reviews".
- **Price Formatting**: Prices are displayed with two decimal places (e.g., `8000,00`).
- **Filters**: Users can filter campervans based on various criteria, such as amenities, location, transmission type, and engine type.
- **Load More Feature**: On the catalog page, users can load additional campervan cards using the "Load More" button.
- **Reviews Section**: On the campervan details page, users can view other users' reviews and ratings on a five-star scale.

## Technology Stack

- **Frontend**: React, Redux, Vite
- **Styling**: CSS Modules, `react-photo-view` for gallery management, `react-datepicker` for booking dates, `normalize.css` for CSS normalization.
- **Routing**: React Router
- **State Management**: Redux with Redux Toolkit
- **Utilities**: `clsx` for conditional class names, `react-hot-toast` for notifications
- **HTTP Client**: Axios for API requests
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
- **`src/styles`**: Contains global styles such as `Typography.module.css`, `variables.css`, and `normalize.css`.

## Key Components

- **`Gallery`**: Utilizes `react-photo-view` to display campervan images with zoom functionality.
- **`BookingForm`**: Allows users to book a campervan. After successful submission, the form is cleared, and a success message is shown using a toast notification (`react-hot-toast`).
- **`DateInput`**: Uses `react-datepicker` for selecting a booking date.
- **`InternalNavigation`**: Provides tabs for navigating between camper features and reviews, including smooth animations.

## How to Add to Favorites

Campervans can be added to the favorites list by clicking the "like" button on the camper listing. The favorites list is saved using local storage, allowing users to retain their selection after refreshing the page.

## Navigation Enhancements

- Camper details navigation includes a smooth scroll to the reviews section after clicking the "Reviews" link.
- The `react-router-dom` library is used for managing routing and navigation between pages, including nested routes for camper details.

## Custom Hooks and Utility Functions

- The project utilizes custom hooks and utility functions for improving code reusability, such as for handling date changes in the booking form and managing favorite campers.


## API Endpoints

- **GET `/campers`**: Retrieves a list of all campervans (supports filtering parameters).
- **GET `/campers/:id`**: Retrieves details for a specific campervan by its ID.

## Pages

- **Home Page (`/`)**: Displays a banner with a call to action and a link to view the camper catalog.
- **Catalog Page (`/catalog`)**: Displays a list of available campervans with options to filter based on location, amenities (AC, kitchen, bathroom, etc.), and vehicle type. Includes options to add to favorites and load more campervans.
- **Camper Details Page (`/catalog/:id`)**: Displays detailed information about a specific campervan, including a gallery, features, user reviews, and a booking form. Features include:
  - **Vehicle Equipment**: Lists characteristics such as transmission, engine type, AC, bathroom, etc.
  - **Vehicle Details**: Lists specifics like form, length, width, height, tank capacity, and fuel consumption.
  - **Reviews**: User-generated reviews with ratings.
  - **Booking Form**: Allows users to reserve the campervan with successful submission notifications.

## Functional Requirements

- **Navigation**: Users can navigate to the catalog from the home page by clicking "View Now".
- **Filtering**: Users can filter campers by:
  - **Location** (text field)
  - **Vehicle type** (single selection)
  - **Amenities** (e.g., AC, kitchen, bathroom)
- **Favorites**: Users can add campers to a favorites list, which is saved even after page refresh.
- **Price Display**: Prices are shown with two decimal places (e.g., `8000,00`).
- **Load More Button**: Users can click "Load More" on the catalog page to see additional campers.
- **Booking Notification**: Users receive a success notification after booking a camper using the booking form.

## Deployment

The project is deployed and can be accessed online via Vercel or Netlify for live testing.

## Issues and Troubleshooting

- **Content Security Policy (CSP) Errors**: If CSP errors occur, try disabling browser extensions that might be injecting scripts.
- **Favorites Not Updating Properly**: Ensure that local storage is enabled in your browser settings.
- **Dynamic Import Issues**: If dynamic imports fail, check that the imported component paths are correct.

## Contributions

We welcome contributions to improve the project! Please feel free to submit a pull request or open an issue to report any bugs or suggest new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

TravelTrucks is currently developed and maintained by Oleh Usatyi. If you have any questions or suggestions, feel free to reach out!

## Acknowledgments

- **React Photo View** for providing easy image gallery functionality.
- **React Datepicker** for simplifying the booking date selection.
- **React Hot Toast** for providing an easy-to-use notification system.
- **React Loader Spinner** for displaying loading indicators.

