// Auth Guard
let isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");

if (isAdminLoggedIn !== "true") {

    window.location.href = "index.html";
}

let logOutBtn = document.querySelector('#logout')

logOutBtn.addEventListener("click",function(){
    localStorage.removeItem("isAdminLoggedIn")
     window.location.href = "index.html";
})



