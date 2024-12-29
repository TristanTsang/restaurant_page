import { showHomePage } from "./home";
import { showMenuPage } from "./menu";
import { showContactPage } from "./contact";
import "./styles.css";

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

console.log("Running");

showHomePage();

homeButton.addEventListener("click", showHomePage);
menuButton.addEventListener("click", showMenuPage);
contactButton.addEventListener("click", showContactPage);
