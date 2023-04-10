import { Shape } from "./Shape";
import { Resizeable } from "./resizeable";

export class Circle extends Shape implements Resizeable {
  radius: number;

  constructor(name: string, radius: number) {
    super(name);
    this.radius = radius;
  }

  resize(input: number): number {
    this.radius = (this.radius * (100 + input)) / 100;
    return this.radius;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  calculatePerimeter(): number {
    return Math.PI * this.radius * 2;
  }
}
