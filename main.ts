import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";
import { Resizeable } from "./resizeable";

let array: Resizeable[] = [];
array.push(new Circle("Circle 1", 10));
array.push(new Rectangle(12, 14, "Rect 1"));
array.push(new Square("Square 1", 20));

array.forEach((item) => {
  let i = Math.round(Math.random() * 100);
  console.log("Trước thay đổi: ");
  console.log(item);
  item.resize(i);
  console.log("Sau thay đổi: ");
  console.log(item);
});
