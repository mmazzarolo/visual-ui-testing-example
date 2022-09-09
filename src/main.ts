import "./style.css";
import logo from "./logo.png";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <img src="${logo}" class="logo" />
    <h1>Hello world 👋!</h1>
  </div>
`;
