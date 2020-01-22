export class Shape {
    private id: number;
    x: number;
    y: number;
    constructor(id: number, x: number, y: number) {
        this.id = id
        this.move(x, y)
    }
    public move(x: number, y: number): void {
        this.x = x
        this.y = y
    }

    private draw(): void { }
}

let shape1: Shape = new Shape(1, 10, 20);

console.log(shape1);
shape1.move(50, 70);
console.log(shape1);

