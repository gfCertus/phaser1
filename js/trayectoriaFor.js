const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
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
let targetX = 0; // posición inicial en X

function preload() {
    this.load.image('bola', '/assets/bola.png'); // Asegúrate de colocar la ruta correcta
}

function create() {
    // Agrega la bola en el centro de la pantalla, con una posición inicial en X
    bola = this.physics.add.image(targetX, 300, 'bola');
}

function update() {
    // Bucle for para mover la bola en el eje X
    for (let i = 0; i < 10; i++) {
        targetX += 1; // Ajusta el incremento para controlar la velocidad del bucle
    }
    
    // Actualiza la posición de la bola
    bola.setX(targetX);
}
