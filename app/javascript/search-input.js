document.addEventListener("DOMContentLoaded", function () {
  const inputs=document.querySelectorAll("[data-behaviour]")
  inputs.forEach(function(input){
    input.addEventListener("input",function(event){
      const type=input.dataset.behaviour;
      debugger;
      console.log(`[${type}]:`,event.target.value);
    })
  })

});