let navOne = document.querySelector("#nav_1")

function hidenav() {
    navOne.innerHTML = ""
}
function openPopup() {
    var popup = document.querySelector(".popup");
    if (popup) {
        popup.style.display = "block";
    }
}

function closePopup() {
    var popup = document.querySelector(".popup");
    if (popup) {
        popup.style.display = "none";
    }
}
