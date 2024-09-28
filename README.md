# **Mechanical Keyboards E-commerce — Frontend**

## **Introduction**

Welcome to the frontend of the **Mechanical Keyboards E-commerce** website! This platform allows users to explore a wide variety of mechanical keyboards, manage their shopping carts, and complete purchases with ease. Built using modern technologies like **React** and **TypeScript**, with state management powered by **Redux Toolkit** and styled using **Tailwind CSS**, this project delivers a sleek and responsive user experience.

---

## **Features**

- **Product Listings**: Browse and search products with advanced filtering and sorting options.
- **Product Details**: View detailed information about each keyboard, including dynamic pricing and stock availability.
- **Cart Management**: Add items to the cart, adjust quantities, and calculate the total price.
- **Checkout Process**: Input shipping details and seamlessly process payments.
- **Stripe Integration**: Secure payment processing with Stripe.
- **Responsive Design**: Fully optimized for all device sizes, with animations for a modern UI feel.
- **Admin Dashboard**: Manage products, including adding, updating, and removing items from the catalog.

---

## **Technology Stack**

- **React**: User Interface Library
- **Redux Toolkit**: State Management
- **TypeScript**: Static Typing
- **Vite**: Fast Build Tool
- **Tailwind CSS**: Utility-first CSS Framework
- **React Router**: Client-side Routing
- **React Icons**: Icon Library for Enhanced UI
- **Sonner**: Toast Notifications for User Feedback

---

## **Installation Guide**

### **Prerequisites**

Before running the frontend, make sure you have the following installed:

- **Node.js** (v14+)
- **npm** or **yarn** (Package Manager)
- **Backend Server** (Refer to the backend README for setup instructions)

### **Steps to Install**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/mechanical-keyboards-ecommerce.git
   cd mechanical-keyboards-ecommerce/frontend
Install Dependencies:

bash
Copy code
npm install
Set Environment Variables:

bash
Copy code
VITE_BACKEND_URL=http://localhost:5000
STRIPE_PUBLIC_KEY=your_stripe_public_key
Run the Development Server:

bash
Copy code
npm run dev
Build the Project:

bash
Copy code
npm run build
Run the Development Server Again (if needed):

bash
Copy code
npm run dev