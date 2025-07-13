document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("search-input");
  input.addEventListener("input", function (event) {
    console.log("User typed:", event.target.value);
  });
});