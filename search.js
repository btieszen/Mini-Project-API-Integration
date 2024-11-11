// Get the dropdown element
var dropdown = document.getElementById("dropdown");

// Add event listener to redirect when option is selected
dropdown.addEventListener("change", function() {
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  if (selectedOption !== "") {
    window.location.href = selectedOption;
  }
});