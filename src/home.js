const div = document.querySelector("#content");

function showHomePage() {
  div.innerHTML = "";
  const pageHeader = document.createElement("h1");
  pageHeader.innerText = "Tristan's Tea Shop";

  div.appendChild(pageHeader);

  const aboutSection = document.createElement("div");
  const aboutHeader = document.createElement("h2");
  aboutHeader.innerText = "About";
  const about = document.createElement("div");
  about.innerText =
    "Tristan's Tea Shop was founded on December 28th, 2024 by Tristan Tsang. Coming from a long line of dedicated tea drinkers and brewers, Tristan sought to spread his expertise in tea to the world. Tristan's Tea shop uses only the finest ingredients in it's tea. Customers at this shop can be sure to find the healthiest, tastiest, and most refreshing tea any where in the world.";

  aboutSection.appendChild(aboutHeader);
  aboutSection.appendChild(about);

  const hoursSection = document.createElement("div");
  const hoursHeader = document.createElement("h2");
  hoursHeader.innerText = "Hours";
  const hours = document.createElement("div");
  hours.innerText =
    "Sunday: 6am - 10pm\nMonday: 6am - Midnight\nTuesday: 6am-Midnight\nWednesday: 6am - Midnight\nThursday: 6am - Midnight\nFriday: 6am - 10pm\nSaturday 6am - 10pm";
  hoursSection.appendChild(hoursHeader);
  hoursSection.appendChild(hours);

  const locationSection = document.createElement("div");
  const locationHeader = document.createElement("h2");
  locationHeader.innerText = "Location";
  const location = document.createElement("div");
  location.innerText = "123 Tea Rd, Teaville, Maryland";
  locationSection.appendChild(locationHeader);
  locationSection.appendChild(location);

  aboutSection.id = "about-section";
  hoursSection.id = "hours-section";
  locationSection.id = "location-section";
  div.appendChild(aboutSection);
  div.appendChild(hoursSection);
  div.appendChild(locationSection);
}

export { showHomePage };
