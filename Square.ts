import { Rectangle } from "./Rectangle";
import { Resizeable } from "./resizeable";

export class Square extends Rectangle implements Resizeable {
  constructor(name: string, width: number) {
    super(width, width, name);
  }

  resize(input: number): number {
    this.width = (this.width * (100 + input)) / 100;
    return this.width;
  }
}
