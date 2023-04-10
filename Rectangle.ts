import { Shape } from "./Shape";
import { Resizeable } from "./resizeable";

export class Rectangle extends Shape implements Resizeable {
  width: number;
  height: number;

  constructor(width: number, height: number, name: string) {
    super(name);
    this.width = width;
    this.height = height;
  }

  resize(input: number): number {
    this.width = (this.width * (100 + input)) / 100;
    return this.width;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return (this.width + this.height) * 2;
  }
}
