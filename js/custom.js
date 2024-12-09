(function($) {
  'use strict';
  $(function() {
    // Code here executes when the DOM is loaded...

    // When the "View My Projects" button is clicked
    $('#openPortfolioBtn').on('click', function(e) {
      e.preventDefault(); // Prevent default action of the link

      // Manually trigger the Lity lightbox with the content of the portfolio
      lity('#portfolio .lightbox-content')  // Open the lightbox for the element with ID 'portfolio'
    });

    // Close the lightbox when clicking outside the content or on a close button
    $(document).on('click', '.lightbox', function(e) {
      if ($(e.target).is('.lightbox') || $(e.target).is('[data-lightbox-close]')) {
        $(this).fadeOut(300); // Close the lightbox
      }
    });

  });

  $(window).on('load', function() {
    // Code here executes when the page is loaded...
    console.log("Page loaded and ready.");
  });
}(jQuery));
