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
    this.load.image('bola', 'assets/bola.png');
}

function create() {

    // Crea la escena, añade un fondo
// this.add.image(400, 300, 'sky');
// añade la pelota
this.add.image(200, 200, 'bola');
}

function update() {
    // Lógica del juego que se ejecuta en cada frame
 /*   for (i = 1; i>50; 50) do
    {
        
    }
*/
    
}
