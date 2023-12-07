import { concatenation } from "./concatenation.js";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello!");
    });
}
function car(arg) {
    return console.log(arg);
}
car(5);
//# sourceMappingURL=index.js.map