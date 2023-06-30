// alert("Dropdown.js is loaded and executed successfully!");


var button = document.getElementById('user-menu-button');
    var menu = document.getElementById('user-menu');
    var hideTimeout;
  
    button.addEventListener('mouseover', function() {
      clearTimeout(hideTimeout);
      menu.classList.remove('hidden');
      menu.classList.remove('invisible');
    });
  

    button.addEventListener('mouseout', function() {
      hideTimeout = setTimeout(function() {
        menu.classList.add('hidden');
        menu.classList.add('invisible');
      }, 200);
    });
  
    menu.addEventListener('mouseover', function() {
      clearTimeout(hideTimeout);
      menu.classList.remove('hidden');
      menu.classList.remove('invisible');
    });

  
    menu.addEventListener('mouseout', function() {
      hideTimeout = setTimeout(function() {
        menu.classList.add('hidden');
        menu.classList.add('invisible');
      }, 200);
    });

    // function selectOption(option) {
    //   console.log(option);
    //  var selectOpt= option;
    //   const dropdownBtn = document.querySelector('.dropdown-btn');
    //   dropdownBtn.textContent = option;
    // }
    