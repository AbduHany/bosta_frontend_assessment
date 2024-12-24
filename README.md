# Shipment Tracking Page for Bosta

## Project Overview

This project is a shipment tracking application built using Next.js. The goal of the application is to allow users to search for shipment details using a tracking number, view shipment progress, and monitor delivery stages. The application adheres to the design specifications provided in the Figma file and integrates with the Bosta mock API.

## Features

### Core Features:

1. **Shipment Search:**

   - Search bar to input tracking numbers and fetch shipment details.

2. **Shipment Details:**

   - Displays:
     - Tracking Number
     - Current Status (e.g., Pending, Processing, Delivered)
     - Expected Delivery Date (or status if final state reached).

3. **Delivery Timeline:**

   - Progress timeline highlighting shipment stages:
     - Shipment Created
     - Picked Up
     - In Transit
     - Out for Delivery
     - Delivered
   - Visually indicates the current stage and timestamp.

4. **Localization:**

   - Support for English and Arabic languages.

5. **Error Handling:**

   - User-friendly messages for invalid or missing tracking numbers.
   - Graceful handling of network errors with fallback UI.

6. **Responsive Design:**
   - Fully responsive for mobile, tablet, and desktop views.

### Additional Features:

1. **Share Options:**

   - Share tracking link via WhatsApp.
   - Copy tracking URL to clipboard.

2. **Export Options:**
   - Export shipment details as a PDF.

## Installation

Follow these steps to set up and run the application locally:

```bash
# Clone the repository
git clone <URL TO REPO>

# Navigate to the project directory
cd <name of repo>

# Install dependencies
npm install

# Build the application
npm run build

# Start the application
npm start
```

## Assumptions

- The expected delivery date is replaced with the final status (e.g., Delivered or Returned) when the shipment reaches a terminal state.
- The mock API provides accurate and real-time data for testing.

## API Integration

The application integrates with the Bosta mock API:

- Endpoint: `https://tracking.bosta.co/shipments/track/:trackingNumber`
- Required Header: `x-requested-by: Bosta`
- Sample Tracking Numbers: `36406704`, `69171493`, `7234258`, `9442984`, `1094442`

## Evaluation Criteria (Addressed)

1. **Adherence to Design:**

   - Implemented all design elements as per the Figma file.

2. **Code Quality:**

   - Modular, clean, and well-documented code.

3. **User Experience:**

   - Smooth, intuitive, and responsive interface.

4. **Error Handling:**

   - Comprehensive edge case management and fallback UI.

5. **Performance Optimization:**

   - Efficient rendering and API handling.

6. **Creativity:**
   - Added extra features such as sharing via WhatsApp, copying URL, and exporting details as a PDF.

## Deliverables

1. GitHub repository containing the complete project.
2. Live URL for accessing the application.
3. This README file for setup and feature documentation.

---

Thank you for reviewing my submission! Feel free to reach out for any clarifications or further improvements.
