# Bank Management System (Frontend Only)

## Live Demo

* **Live Link:** https://bank-management-system-gilt.vercel.app/

---

## Very Important – First Time Setup (Required Before Login)

Since this project does not use a backend and stores authentication data in **localStorage**, you must initialize the admin credentials manually once.

### Steps

* Open the live website.
* Press **Ctrl + Shift + I** to open Developer Tools.
* Go to the **Console** tab.
* Paste the code below and press **Enter**:

```js
const adminData = {
    username: "admin@123",
    password: "1234"
};
localStorage.setItem("adminData", JSON.stringify(adminData));
```

* Refresh the page once.
* Now proceed to login.

---

## Admin Login Credentials

* **Username:** `admin@123`
* **Password:** `1234`

---

## Features

### Admin Panel Capabilities

* Add new bank users
* View all users
* Update existing user details
* Delete users
* Basic login authentication system

---

## Technical Details

* Built using **HTML, CSS, JavaScript**
* Entire project runs on the **Frontend**
* No backend or database used
* Data persistence handled via **Browser LocalStorage**
* Deployed using **Vercel**

---

## Note

* This project is intended for **learning and demonstration purposes only**.
* LocalStorage-based authentication is **not secure** for production banking systems.
