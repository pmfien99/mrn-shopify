document.addEventListener('DOMContentLoaded', function() {
  var dropdownContainers = document.querySelectorAll('.product_dropdown');

  dropdownContainers.forEach(function(dropdownContainer) {
    dropdownContainer.addEventListener('click', function() {
      var dropdownContent = this.querySelector('.product_dropdown-drop');
      dropdownContent.classList.toggle('active'); 
    });
  });
});