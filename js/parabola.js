const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }, // Añadimos gravedad para simular caída libre
        },
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
};

const game = new Phaser.Game(config);
let bola;
let initialX = 100;
let initialY = 500;
let velocityX = 200;  // Velocidad inicial en X
let velocityY = -500; // Velocidad inicial en Y (negativo para que vaya hacia arriba)
let timeElapsed = 0;  // Tiempo transcurrido en segundos

function preload() {
    this.load.image('bola', 'assets/bola.png'); // Asegúrate de colocar la ruta correcta
}

function create() {
    // Inicializamos la bola en una posición
    bola = this.physics.add.image(initialX, initialY, 'bola');
    bola.setCollideWorldBounds(true); // Colisión con los límites del mundo
    bola.body.allowGravity = true; // Aplicamos gravedad al cuerpo de la bola
}

function update(time, delta) {
    // Convertimos delta de milisegundos a segundos para mayor precisión
    timeElapsed += delta / 1000;

    // Calculamos la nueva posición usando las fórmulas de movimiento parabólico
    let newX = initialX + velocityX * timeElapsed;
    let newY = initialY + (velocityY * timeElapsed) + (0.5 * 300 * Math.pow(timeElapsed, 2)); // 300 es la gravedad

    // Establecemos la nueva posición de la bola
    bola.setPosition(newX, newY);

    // Reiniciar trayectoria si llega al límite inferior
    if (newY > config.height) {
        resetBolaPosition();
    }
}

function resetBolaPosition() {
    // Reiniciamos la posición y el tiempo para volver a empezar la parábola
    bola.setPosition(initialX, initialY);
    timeElapsed = 0;
}
