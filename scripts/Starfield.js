class Star {
    constructor() {
        this.x = random(-width, width)
        this.y = random(-height, height)
        this.z = random(width)
        this.pz = this.z
    }
    show() {
        noStroke()
        let sx = map(this.x / this.z, 0, 1, 0, width)
        let sy = map(this.y / this.z, 0, 1, 0, height)
        let r = map(this.z, 0, width, 0, 5, 0)
        stroke(255)
        strokeWeight(1)
        let px = map(this.x / this.pz, 0, 1, 0, width)
        let py = map(this.y / this.pz, 0, 1, 0, height)
        this.pz = this.z
        fill(255);
        line(px, py, sx, sy)
            // ellipse(sx, sy, r)
    }
    update() {
        let speed = map(mouseX, 0, width, 0, 20)
        this.z -= speed
        if (this.z < 1) {
            this.z = random(width)
            this.x = random(-width, width)
            this.y = random(-height, height)
            this.pz = this.z
        }
    }

}
let stars = []

function setup() {
    createCanvas(600, 600)
    frameRate(60)

    for (let i = 0; i < 1000; i++) {
        stars.push(new Star())
    }
}

function draw() {
    background(0)
    translate(width / 2, height / 2)
    for (let star of stars) {
        star.show()
        star.update()

    }
}