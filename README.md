# 🌍 Currency Converter App (React + Custom Hook)

A modern, fast, and fully dynamic **Currency Converter Web App** built using **React.js** and a **Custom Hook (`useCurrencyInfo`)** to fetch real-time exchange rates.  
This project demonstrates clean React architecture, reusable hooks, dynamic dropdowns, API fetching, and organized component structure.

---

## 🚀 Features

✔ **Real-time currency conversion** using live exchange rate API  
✔ **Custom React Hook** (`useCurrencyInfo`) to fetch rates  
✔ **Dynamic currency dropdown** (auto-loads all currencies)  
✔ **Swap currencies** feature (USD ↔ INR etc.)  
✔ **Clean UI** using Tailwind CSS  
✔ **Beginner-friendly & production-level structure**  
✔ **No external libraries** except React & Tailwind  
✔ **Fast & responsive** Vite-powered project  

---

## 🛠️ Technologies Used

- **React.js**  
- **Custom Hooks**  
- **Vite**  
- **Tailwind CSS**  
- **Open Exchange Rate API** (`open.er-api.com`)  

---

## 📦 Folder Structure


```
src/
├── hooks/
│ └── useCurrencyInfo.js # Custom hook to fetch rates
├── App.jsx # Main application UI + logic
├── main.jsx # Entry point
└── index.css # Tailwind imports
```

---

## 🧠 How the Custom Hook Works

The **custom hook (`useCurrencyInfo`)**:

- Accepts a base currency (`USD`, `INR`, `EUR`, etc.)
- Fetches the latest exchange rates for that currency
- Returns a clean object of rates to the component

Hook signature:

```js
const currencyInfo = useCurrencyInfo(fromCurrency);
```

## 🌐 API Used

This project uses the free exchange rate API:

```
https://open.er-api.com/v6/latest/{currency}
