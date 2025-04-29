# Mother's Day Tribute Blog Challenge

This document serves as a **planning guide** for the Mother's Day Tribute Blog Challenge. It details the steps to follow, tasks to complete, and the overall breakdown of the project.

## Overview
The goal of this project is to replicate the Figma design for a Mother's Day Tribute Blog. We’ll focus on building the frontend using **Next.js** and **Tailwind CSS**, and aim to implement additional features for extra creativity points.

### Features:
- **Hero Section** with a carousel.
- **Category Filter** to view articles by categories.
- **Recent Articles** with dynamic routing to individual stories.
- **Bonus Features**: Search bar, theme toggle, pagination, and scroll-to-top button.

---

## Roadmap

### Day 1: Build Core Features (UI, Functionality, and Basic Styling)

#### **Morning (6-7 hours)** – *Setting Up and Core Layouts*
1. **Set Up Project:**
   - Initialize Next.js project and Tailwind CSS.
   - Install dependencies and configure Tailwind settings.
   - Add placeholder images and set up global styles.

2. **Hero Section (Carousel):**
   - Create a hero section with a simple carousel (3-5 stories).
   - Implement next/prev navigation functionality.

3. **Explore by Category Section:**
   - Build cards for categories like Stories, Health, Inspiration.
   - Implement basic state management to filter articles based on category.

4. **Recent Articles Section:**
   - Create article cards with image, title, excerpt, reading time, and category.
   - Add a "Read More" button linking to individual article pages.

#### **Afternoon (5-6 hours)** – *Styling, Responsiveness, Sidebar, and Dynamic Pages*
5. **Sidebar:**
   - Design and implement a static sidebar with Author Profile and Destinations.
   - Ensure the sidebar is responsive (stack on mobile).

6. **Dynamic Story Detail Page:**
   - Implement dynamic routing with `[id].js` to load articles from local JSON.
   - Display full article content, title, author, date, category, and reading time.

7. **Responsiveness:**
   - Ensure that all sections (Hero, Article Cards, Sidebar) are responsive.
   - Test for different screen sizes: mobile, tablet, desktop.

8. **Basic CSS Styling (Tailwind):**
   - Polish layout and add spacing, font sizes, and colors for readability.
   - Focus on mobile-first design and overall UI refinement.

#### **Evening (2-3 hours)** – *Polish + Bonus Features Start*
9. **Bonus Feature - Search Bar:**
   - Implement a search bar to filter articles by title/excerpt.
   - Make it live search, filtering while typing.

10. **Test Core Features:**
    - Test all core functionality: carousel, category filter, dynamic routing.
    - Perform basic visual testing to ensure no bugs in UI components.

---

### Day 2: Add Extra Features, Polish, and Deploy

#### **Morning (4-5 hours)** – *Enhancements and Creativity Features*
1. **Add Pagination (Bonus Feature):**
   - Limit the number of articles shown per page (e.g., 4–6).
   - Implement "Next" and "Previous" buttons to paginate the Recent Articles.

2. **Theme Toggle (Bonus Feature):**
   - Add Light/Dark mode toggle using Tailwind’s built-in dark mode.
   - Implement state management to toggle theme.
   - Save the user's theme choice in `localStorage`.

3. **Scroll-To-Top Button (Bonus Feature):**
   - Add a button that allows the user to scroll to the top of the page.
   - Ensure smooth scrolling when the button is clicked.

4. **Reading Progress Bar (Bonus Feature):**
   - Add a progress bar that fills up as the user scrolls through the article.
   - Position the bar at the top of the article page for visibility.

---

#### **Afternoon (4-5 hours)** – *Testing, Cleanup, and Final Polish*
5. **Full Responsiveness Test:**
   - Ensure all layouts (Hero, Articles, Sidebar) are properly responsive on mobile, tablet, and desktop.
   - Make adjustments for any UI breakages.

6. **CSS Polish:**
   - Fine-tune spacing, hover effects, font styles, and color schemes for a refined look.
   - Optimize CSS for better performance and cleaner code.

7. **Test Bonus Features:**
   - Thoroughly test the **search bar**, **pagination**, and **theme toggle** to ensure everything is functioning as expected.

8. **README.md:**
   - Write a **README** detailing:
     - Project description.
     - Instructions for running the project locally.
     - Features implemented (mention bonus features).
     - Deployment link (if available).

---

#### **Evening (2 hours)** – *Deploy + Final Check*
9. **Final Deployment to Vercel:**
   - Push code to GitHub and deploy to **Vercel** (or **Netlify**).
   - Verify the deployment works without errors.

10. **Final Testing:**
    - Test the deployed version on multiple browsers (Chrome, Firefox, Edge).
    - Ensure that all core and bonus features work in the deployed environment.

---

## Deliverables
1. **GitHub Repository:**
   - Clear folder structure.
   - README.md file with:
     - Brief project description.
     - Setup instructions.
     - Features implemented.
     - Deployment link (if available).
  
2. **Live Deployment:**
   - Deploy the project using Vercel or Netlify.
   - Share the live link in your form submission.

---

## Bonus Features Checklist
- [ ] **Search Bar** (Live search functionality).
- [ ] **Pagination** (Limit articles per page).
- [ ] **Theme Toggle** (Light/Dark mode switch).
- [ ] **Scroll-to-Top Button**.
- [ ] **Reading Progress Bar**.

---

## Estimated Timeline
- **Day 1**: Core features and layout, Hero Section, Dynamic Story Page, Basic styling, Search Bar.
- **Day 2**: Extra features (pagination, theme toggle), full testing, polishing, and deployment.

---

## Notes
- Follow the **provided Figma design** closely for layout fidelity.
- Focus on **clean, maintainable code**.
- Prioritize **UI responsiveness** for mobile, tablet, and desktop.
- Aim to deploy by the end of Day 2 for final testing.

---

Good luck! 🚀
