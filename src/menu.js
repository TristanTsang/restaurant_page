const div = document.querySelector("#content");

function showMenuPage() {
  div.innerHTML = "";

  const menuHeader = document.createElement("h1");
  menuHeader.innerText = "Menu";
  const menuSection = document.createElement("div");
  menuSection.id = "menu-section";
  const toppingsHeader = document.createElement("h3");
  toppingsHeader.innerText = "Toppings: ";
  const toppings = document.createElement("div");
  toppings.innerText =
    "Boba Pearls - $1\n Butterfly Pearls $1.5\nLychee Jelly - $1.5\nPopping Mango Jelly -  $1.5\nCheese Foam $2";

  div.appendChild(menuHeader);

  const drinksHeader = document.createElement("h3");
  drinksHeader.innerText = "Drinks: ";
  const drinks = document.createElement("div");
  drinks.innerText =
    "Green Tea - $5\nOolong Tea - $5\nMango Green Tea - $5\nPink Lemonade Green Tea $5\nMatcha Latte $6\nBrown Sugar Milk Tea - $6\nMango Slush $7.5\n";

  const desertsHeader = document.createElement("h3");
  desertsHeader.innerText = "Food and Desert: ";
  const deserts = document.createElement("div");
  deserts.innerText =
    "Waffle With Ice Cream - $10\n Sugar Cookie - $2.5\nPork Bun - $2.5\nFruit Bowl - $4";
  menuSection.appendChild(drinksHeader);
  menuSection.appendChild(toppingsHeader);
  menuSection.appendChild(desertsHeader);

  menuSection.appendChild(toppings);
  menuSection.appendChild(drinks);
  menuSection.appendChild(deserts);
  div.appendChild(menuSection);
}

export { showMenuPage };
