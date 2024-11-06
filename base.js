// Inicializa el juego
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    // Carga recursos, como imágenes
    this.load.image('sky', 'assets/fondo.jpg');
    this.load.image('avion', 'assets/avion.png');
}

function create() {
    // Crea la escena, añade un fondo
    this.add.image(400, 300, 'sky');

    this.add.image(200, 200, 'avion');
}

function update() {
    // Lógica del juego que se ejecuta en cada frame
}
