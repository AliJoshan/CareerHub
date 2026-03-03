# CareerHub – Job Board Application

CareerHub is a modern job board application built with **React** and **TypeScript**.  
It fetches real-time job listings from the **Adzuna API** and provides a clean, responsive interface with filtering, detailed job views, and saved jobs functionality.

This project focuses on scalable frontend architecture, state management with Zustand, type safety, and production-level development practices.

---

## 🛠 Tech Stack

- React
- TypeScript
- Vite
- Zustand (State Management)
- React Router
- CSS / Tailwind CSS (update if needed)
- Adzuna API

---

## 📌 Features

### 1. Real-Time Job Listings
- Fetches job data from the **Adzuna API**
- Displays structured job cards
- Handles loading and error states properly

### 2. Job Details Page
- Dynamic routing using job IDs
- Displays full job description and metadata
- Clean and readable layout

### 3. Saved Jobs Functionality
- Users can save and remove jobs
- State managed globally with **Zustand**
- Persistent storage (if implemented using localStorage)

### 4. Filtering System
- Filter jobs based on criteria (e.g., location, keywords, job type)
- Client-side filtering logic
- Optimized rendering

### 5. Responsive Design
- Fully responsive across mobile, tablet, and desktop
- Clean UI structure
- Accessible and semantic markup

---

## 🧠 Architecture & Design Decisions

### State Management

- Global state managed with **Zustand**
- Centralized store for jobs, filters, and saved jobs
- Lightweight and scalable state architecture
- Improved performance compared to prop drilling or complex context usage

---

### API Integration

- Uses the **Adzuna API** to retrieve job listings
- Centralized data fetching logic
- Proper handling of:
  - Loading states
  - Error states
  - Empty results
- Defensive coding with TypeScript interfaces

---

## ⚠️ Challenges & Solutions

### 1. Handling External API Data

**Challenge:**  
API responses may contain missing or inconsistent fields.

**Solution:**  
- Defined strict TypeScript types
- Used optional chaining
- Added fallback UI rendering

---

### 2. Global State Complexity

**Challenge:**  
Managing saved jobs and filters across multiple components.

**Solution:**  
- Implemented **Zustand** for simple and scalable state management
- Reduced prop drilling
- Improved maintainability

---

### 3. UI Stability During Data Fetching

**Challenge:**  
Preventing UI crashes during asynchronous requests.

**Solution:**  
- Implemented loading indicators
- Structured error handling
- Conditional rendering