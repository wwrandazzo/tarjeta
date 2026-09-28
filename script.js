function cambiarColor() {
    // Genera un color al azar y se lo aplica al fondo de la tarjeta
    const colores = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff'];
    const colorAzar = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById('tarjeta').style.backgroundColor = colorAzar;
}
