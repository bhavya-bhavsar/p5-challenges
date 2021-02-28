class Drop {
    constructor() {
        this.x = random(width)
        this.y = random(-250, -50)
        this.z = random(20)
        this.weight = random(2, 5)
        this.length = map(this.z, 0, 20, 10, 60)
        this.color = color(random(255), random(255), random(255))
    }
    show() {
        strokeWeight(this.weight)
        stroke(this.color)
        line(this.x, this.y, this.x, this.y + this.length)
    }

    update() {
        this.y += (0.98 * this.weight) * map(this.z, 0, 20, 2, 5)
        if (this.y > height) {
            this.x = random(width)
            this.y = random(-150, -50)
            this.z = random(20)

            this.weight = random(2, 5)
            this.length = map(this.z, 0, 20, 10, 60)
            this.color = color(random(255), random(255), random(255))
        }
    }
}
let rain = []

function setup() {
    createCanvas(600, 600)
    for (let i = 0; i < 1000; i++) {
        rain.push(new Drop())
    }
}

function draw() {
    background(200)
    for (let drop of rain) {
        drop.show()
        drop.update()
    }
}