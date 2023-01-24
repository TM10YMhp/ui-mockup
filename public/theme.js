const theme = window.localStorage.getItem("data-theme");

function updateTheme(newTheme) {
  document.querySelector("html").setAttribute("data-theme", newTheme);
  window.localStorage.setItem("data-theme", newTheme);
}

if(theme) {
  updateTheme(theme)
} else {
  updateTheme("default")
}
