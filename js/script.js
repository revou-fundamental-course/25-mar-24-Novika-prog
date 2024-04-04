function calculateBMI() {
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var age = parseInt(document.getElementById("age").value);

    if (gender && height && weight && age) {
        var bmi = weight / ((height / 100) ** 2);
        var interpretation;
        var backgroundColor;

        if (bmi < 18.5) {
            interpretation = "Berat badan kurang";
            backgroundColor = "pink";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            interpretation = "Berat badan normal";
            backgroundColor = "palevioletred";
        } else if (bmi >= 25 && bmi < 29.9) {
            interpretation = "Kelebihan berat badan";
            backgroundColor = "purple";
        } else {
            interpretation = "Obesitas";
            backgroundColor = "red";
        }

        var result = "BMI: " + bmi.toFixed(2) + " - " + interpretation;
        document.getElementById("result").innerText = result;
        document.body.style.backgroundColor = backgroundColor; // Menentukan warna latar belakang body
    } else {
        alert("Mohon lengkapi semua informasi!");
    }
}

function reset() {
    document.getElementById("male").checked = true;
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("age").value = "";
    document.getElementById("result").innerText = "";
    document.body.style.backgroundColor = "white"; // Mengembalikan warna latar belakang body ke default
}
