class Box {
    constructor(x, y, z, size) {
        this.pos = createVector(x, y, z);
        this.size = size
    }
    show() {
        push()
        translate(this.pos.x, this.pos.y, this.pos.z);
        box(this.size)
        pop()
    }

    generate() {
        let boxes = []
        for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {
                for (let z = -1; z < 2; z++) {
                    let newSize = this.size / 3;
                    let adder = abs(x) + abs(y) + abs(z)
                    if (adder > 1) {
                        let newBox = new Box(this.pos.x + (x * newSize), this.pos.y + (y * newSize), this.pos.z + (z * newSize), newSize)
                        boxes.push(newBox)
                    }
                }
            }
        }
        return boxes
    }
}
let b
let sponge = []

function setup() {
    createCanvas(600, 600, WEBGL)
    b = new Box(0, 0, 0, 200)
    sponge.push(b)
    normalMaterial()
}
let a = 0.5

function draw() {
    background(0)
    stroke(0)
    fill(255, 150)
        // noStroke()
    rotateX(a)
    rotateY(a * 0.1)
    rotateZ(a * 1.1)
    for (let b of sponge) {
        b.show()
    }
    a = a + 0.01
}

function mousePressed() {
    let nextGen = [];
    for (let box of sponge) {
        let newBoxes = box.generate()
        nextGen = nextGen.concat(newBoxes)
    }
    sponge = nextGen

}