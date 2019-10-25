class Player {
    constructor() {
        this.x = Math.floor(Math.random() * 35);
        this.y = Math.floor(Math.random() * 30);
        this.width = 1;
        this.height = 1;
        this.score = 0;
    }

    move(direction) {
        if (direction === 'up') {
            this.y -= this.height;
        }
        if (direction === 'down') {
            this.y += this.height;
        }
        if (direction === 'right') {
            this.x += this.width;
        }
        if (direction === 'left') {
            this.x -= this.width;
        }
    }
}

module.exports = Player;
