function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("Usuario:", username);
    console.log("Contraseña:", password);
}

function goToSignUp() {
    window.location.href = "signup.html"; // Cambia "singup.html" por la URL real de tu formulario de registro
}

function goToNews() {
    window.location.href = "noticias.html"; // Cambia "noticias.html" por la URL real de tu página principal de noticias
}
function registerUser() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var stratum = document.getElementById("stratum").value;
    var birthdate = document.getElementById("birthdate").value;
    var bloodType = document.getElementById("bloodType").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var activities = document.querySelectorAll('input[name^="activity"]:checked');
    var activitiesArray = [];
    activities.forEach(function(activity) {
        activitiesArray.push(activity.value);
    });

    if (firstName && lastName && phone && stratum && birthdate && bloodType && gender && activitiesArray.length > 0) {
        var genderValue = gender.value === "male" ? "Hombre" : "Mujer";
        alert("Registro Exitoso:\nNombres: " + firstName + "\nApellidos: " + lastName + "\nTeléfono: " + phone + "\nEstrato: " + stratum + "\nFecha de Nacimiento: " + birthdate + "\nGrupo Sanguíneo: " + bloodType + "\nGénero: " + genderValue + "\nActividades Favoritas: " + activitiesArray.join(", "));
    } else {
        alert("Por favor complete todos los campos.");
    }
}

function goToAdminMenu() {
    window.location.href = "admin.html"; // Cambia "admin.html" por la URL real de tu menú Admin
}
function changeFontSize() {
    var textElement = document.getElementById("text");
    var currentSize = window.getComputedStyle(textElement).fontSize;
    var newSize = parseInt(currentSize) + 2 + "px"; // Aumenta el tamaño de letra en 2px
    textElement.style.fontSize = newSize;
}

function changeColor() {
    var textElement = document.getElementById("text");
    var currentColor = window.getComputedStyle(textElement).color;
    var newColor = currentColor === "rgb(255, 0, 0)" || currentColor === "red" ? "black" : "red"; // Cambia entre negro y rojo
    textElement.style.color = newColor;
}

// Función para asignar eventos de clic a los botones
function assignButtonClickEvents() {
    document.getElementById("changeFontSize").addEventListener("click", changeFontSize);
    document.getElementById("changeColor").addEventListener("click", changeColor);
}

// Llamar a la función después de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", assignButtonClickEvents);