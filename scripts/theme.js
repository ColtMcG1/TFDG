function setTheme(string) {
  document.documentElement.setAttribute("theme-data", string);
  localStorage.setItem("theme-data", string);
} //Saves the current theme to local storage

var saved = localStorage.getItem("theme-data"); //Loads the save theme on first run

if (!saved) { //If no saved data figure out is the system has one set
  var isPerferedLight = window.matchMedia( 
    "(prefers-color-scheme: light)"
  ).matches; //System prefers a scheme? Yes or no
  if (isPerferedLight) localStorage.setItem("theme-data", "light"); //System prefers light?
  else localStorage.setItem("theme-data", "dark"); //System prefers dark and or nothing selected so default to dark
}

saved = localStorage.getItem("theme-data"); //Loads the save theme again incase of change

document.documentElement.setAttribute("theme-data", saved); //Apply the loaded data

document.addEventListener("DOMContentLoaded", (event) => { //After load is complete
  var button = document.getElementById("theme-toggle-button");
  var icons = document.querySelectorAll("box-icon");

  if (!icons) {
    console.log("No icons found!"); //Should never happen
  }

  if (document.documentElement.getAttribute("theme-data") === "dark") { //Set the theme dark
    setTheme("dark");
    document.getElementById("theme-icon-light").classList.toggle("hide");
    document.getElementById("theme-icon-dark").classList.toggle("hide");

    icons.forEach((element) => {
      element.setAttribute(
        "color",
        getComputedStyle(document.documentElement).getPropertyValue(
          "--tfdg-text-color"
        )
      );
    });
  } else { //Set the theme light
    setTheme("light");
    document.getElementById("theme-icon-light").classList.toggle("hide");
    document.getElementById("theme-icon-dark").classList.toggle("hide");

    icons.forEach((element) => {
      element.setAttribute(
        "color",
        getComputedStyle(document.documentElement).getPropertyValue(
          "--tfdg-text-color"
        )
      );
    });
  }

  button.onclick = () => { //After click
    if (document.documentElement.getAttribute("theme-data") === "light") {
      setTheme("dark");
      document.getElementById("theme-icon-light").classList.toggle("hide");
      document.getElementById("theme-icon-dark").classList.toggle("hide");

      icons.forEach((element) => {
        element.setAttribute(
          "color",
          getComputedStyle(document.documentElement).getPropertyValue(
            "--tfdg-text-color"
          )
        );
      });
    } else {
      setTheme("light");
      document.getElementById("theme-icon-light").classList.toggle("hide");
      document.getElementById("theme-icon-dark").classList.toggle("hide");

      icons.forEach((element) => {
        element.setAttribute(
          "color",
          getComputedStyle(document.documentElement).getPropertyValue(
            "--tfdg-text-color"
          )
        );
      });
    }
  };
});
