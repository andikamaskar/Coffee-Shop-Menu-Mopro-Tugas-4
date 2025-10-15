# ☕ Coffee Shop Menu App

![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

A simple **React Native (Expo)** application that displays a list of coffee menus fetched from a **FastAPI backend**.  
Users can view detailed coffee information, images, prices, and adjust quantity — all for learning and demonstration purposes.

---

## 📸 Demo

![App Preview](example.gif)

> The demo above shows the flow: viewing coffee list → selecting an item → viewing details and quantity interaction.

---

## 🚀 Features

- 📜 Display coffee list fetched from a FastAPI endpoint  
- 🖼️ Show coffee poster thumbnails and titles  
- 📱 Navigate to detail page using **Expo Router**  
- 💵 Quantity & Price simulation (UI only)  
- 🎨 Coffee-brown color theme with **Poppins** font  
- ⚡ Lightweight and fast, perfect for mobile learning projects

---

## 🧩 Tech Stack

| Area | Technology |
|------|-------------|
| Frontend | React Native (Expo) |
| Navigation | Expo Router |
| Styling | React Native StyleSheet |
| Backend | FastAPI (deployed on Vercel) |
| Font | Poppins |
| API Base URL | `https://coffee-shop-menu-backend.vercel.app/` |

---

## 🗂️ Project Structure

coffee-shop-app/
├── app/
│ ├── index.tsx # Home screen (list of coffee)
│ └── [id]/index.tsx # Detail screen for each coffee
├── components/
│ └── CoffeeCard.tsx # Coffee list item component
├── styles/
│ └── coffeeCard.ts # CoffeeCard styling
├── assets/
│ └── example.gif # Demo image/gif
├── package.json
├── App.tsx
└── README.md


---

## ⚙️ Installation & Running

Follow these steps to run the project locally.

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/coffee-shop-menu.git
cd coffee-shop-menu
```

```bash
npm install
```

```bash
yarn install
```

```bash
npx expo start
```

### BASE URL
```bash
https://coffee-shop-menu-backend.vercel.app/
```

### GET ALL COFFEE DATA
```bash
GET /coffee
```

### GET COFFEE BY ID
```bash
GET /coffee/{coffee_id}
```

### GET COFFEE IMAGE
```bash
GET /images/{filename}
```


---

### 🪄 Petunjuk Tambahan
1. Simpan file ini di root proyek sebagai `README.md`.  
2. Pastikan `example.gif` ada di root atau ubah path-nya jika kamu taruh di `assets/`.  
3. Ganti `your-username` di link GitHub sesuai username kamu.  