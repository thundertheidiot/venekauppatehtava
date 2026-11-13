const select = document.getElementById("boat-selector");
const params = new URLSearchParams(window.location.search);
const boat = params.get("boat");

select.selectedIndex = Number(boat);
