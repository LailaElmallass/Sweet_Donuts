# Sweet_Donuts

A simple e-commerce shopping cart for a donut shop built with **React** and **Redux Toolkit**. Users can browse donuts, add them to the cart, adjust quantities, and remove items.

## 🚀 Features
- View a list of available donuts.
- Filter donuts by category.
- Add items to the shopping cart.
- Increase or decrease item quantity.
- Remove items from the cart.
- Display total price of cart items.

## 🛠️ Installation

1. Clone the repository:
   ```sh
   git clone "https://github.com/LailaElmallass/Sweet_Donuts.git"
   ```
2. Navigate to the project folder:
   ```sh
   cd React-bakery-page
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## 📂 Project Structure
```
.
├── src
│   ├── components
|   |   ├── Layout.js
│   │   ├── Navbar.js
│   │   ├── DonutsList.js
│   │   ├── DonutsCard.js
│   │   ├── Cart.js
│   ├── features
│   │   ├── CartSlice.js
│   │   ├── DonutsSlice.js
│   ├── style
│   │   ├── Cart.css
│   │   ├── DonutsCard.css
│   │   ├── DonutsList.css
│   │   ├── Layout.css
│   ├── App.js
│   ├── index.js
├── package.json
└── README.md
```

## 📌 Usage
1. Click on a donut category to filter items.
2. Click the **Add to Cart** button to add a donut to the cart.
3. In the cart, use **+** and **-** buttons to adjust the quantity.
4. Click the **trash icon** to remove an item from the cart.
5. View the total price of selected items at the bottom.

## 🏗️ Built With
- React
- Redux Toolkit
- Lucide-React (for icons)
- CSS Modules

## 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## 📜 License
This project is licensed under the MIT License.

---
### ✨ Enjoy your donuts! 🍩



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
