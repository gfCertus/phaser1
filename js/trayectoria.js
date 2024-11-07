const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }, // Sin gravedad
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
let cursors;

function preload() {
    this.load.image('bola', '/assets/bola.png'); // Coloca la ruta de tu imagen aquí
}

function create() {
    // Agrega la pelota al centro de la pantalla
    bola = this.physics.add.image(400, 300, 'bola');

    // Habilita las teclas de flechas para el movimiento
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Restablece la velocidad de la pelota en cada cuadro
    bola.setVelocity(0);

    // Control de movimiento con las teclas
    if (cursors.left.isDown) {
        bola.setVelocityX(-200);
    } else if (cursors.right.isDown) {
        bola.setVelocityX(200);
    }

    if (cursors.up.isDown) {
        bola.setVelocityY(-200);
    } else if (cursors.down.isDown) {
        bola.setVelocityY(200);
    }
}
