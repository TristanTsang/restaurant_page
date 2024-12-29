const div = document.querySelector("#content");
function showContactPage() {
  div.innerHTML = "";
  const pageHeader = document.createElement("h1");
  pageHeader.innerText = "Contact Us!";

  const staffHeader = document.createElement("h2");
  staffHeader.innerText = "Staff:";

  const staff = document.createElement("div");
  staff.innerText =
    "Tristan Tsang (Founder and CEO) - 555-555-5555\nJoe Smith (Manager) - 555-555-5556\nJohn Doe (Head Chef) - 555-555-5557";

  const storeHeader = document.createElement("h2");
  storeHeader.innerText = "Store:";

  const store = document.createElement("div");
  store.innerText =
    "Store Phone Number: 555-5555-5558\nStore Email: 555-5555-5559";
  div.appendChild(pageHeader);
  div.appendChild(staffHeader);
  div.appendChild(staff);
  div.appendChild(storeHeader);
  div.appendChild(store);
}

export { showContactPage };
