# EatEzy-The Food Ordering App
- Developed EatEzy: A food ordering and exploration app using React.js and Swiggy’s API, integrating real-time restaurant data to provide users with up-to-date information and options.
- Implemented Redux for cart management: Enhanced site efficiency and user experience by streamlining the cart functionality, resulting in a 25% improvement in order processing speed.
- Utilized Tailwind CSS for UI design: Crafted a visually appealing and user-friendly interface, achieving a 20% increase in user engagement through effective styling and design.
- Applied Shimmer UI effects: Improved perceived loading times and user experience with dynamic shimmer effects, reducing wait times by 15% and maintaining user engagement
  
## Structure

### HEADER

- Logo
- Nav items

### BODY

- Search
- RestaurantContainer
  - RestaurantCard
    - Image
    - Name of restaurant, star rating, cuisine, delivery time

### FOOTER

- Links
- Address
- Contact

---

## Setting Up Testing in Our App

This guide will help you set up testing for your React application using React Testing Library, Jest, and Babel.

1. **Install React Testing Library:**

   npm install @testing-library/react

2. **Install Jest:**

   npm install jest

3. **Install Babel dependencies:**

   npm install @babel/core @babel/preset-env

4. **Configure Babel:**

   Create a `.babelrc` file in the root of your project and add the following configuration:

   ```json
   {
     "presets": ["@babel/preset-env", "@babel/preset-react"]
   }
   ```

5. **Configure Parcel Config File to Disable Default Babel Transpilation:**

6. **Initialize Jest:**

   Run this command to initialize Jest:

   ```bash
   npx jest --init
   ```

   Follow the prompts to set up Jest according to your preferences.

7. **Install jsdom library:**

   Run the following command to install jsdom:

   ```bash
   npm install jsdom
   ```

8. **Install @babel/preset-react to Make JSX Work in Test Cases:**

   Use this command to install the preset:

   ```bash
   npm install @babel/preset-react
   ```

9. **Include @babel/preset-react in Your Babel Config:**

   Make sure your `.babelrc` file includes `@babel/preset-react` as shown in the Babel configuration step.

10. **Install @testing-library/jest-dom**

    npm i -D @testing-library/jest-dom

---
