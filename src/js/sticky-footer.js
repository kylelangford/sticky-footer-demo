'use strict';

const sticky = function(element) {

  // Set Options
  this.delay = 2000;
  this.closeSelector = '.sticky--close';
  this.activeClass = 'is-pinned';
  this.element = document.querySelector(element);
  this.closeButton = this.element.querySelector(this.closeSelector);
  
  // Close Button Event
  this.closeButton.addEventListener('click', () => {
    close(this);
  });

  // Open Survey
  open(this);

  function open(sticky) {

    // Debug 
    if (sessionStorage.getItem('sticky-footer')) {
      console.log('Already opened, clear network data.');
    }

    /* Test for sesssion variable
       Do not show if variable is present */
    if (!sessionStorage.getItem('sticky-footer')) {

      // Set Timer Delay
      setTimeout(function() {

        // Get height of sticky footer
        var height = sticky.element.offsetHeight;

        // Add class to reveal sticky footer
        sticky.element.classList.add(sticky.activeClass);

        /* This will add margin matching the height to the sticky container 
           to the bottom of the page. This will prevent the sticky footer from covering
           any footer element. (Optional)  */
        document.querySelector('body').style.marginBottom = height;

        console.log('open');

      }, sticky.delay);
    }
  }

  function close(sticky) {

    sticky.element.classList.remove(sticky.activeClass);
    sessionStorage.setItem('sticky-footer', '1'); // Session Storage

    // Remove extra margin
    document.querySelector('body').style.marginBottom = '0px';
  }

  return {
    open: open,
    close: close,
  };

};



