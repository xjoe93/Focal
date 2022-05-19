const myBtn = document.getElementById("nav-btn");

const myNavList = document.getElementById("nav-list");

function showMe() {
    if (myNavList.style.display === "block") {
        myNavList.style.display = "none";
    } else {
        myNavList.style.display = "block";
    }
};

