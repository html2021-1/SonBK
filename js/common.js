$(document).ready(function(){
  /* pc */
  $('#pcheader').on({
    'mouseenter focusin': function () {
      $(this).addClass('on');
    },
    'mouseleave focusout':function () {
      $(this).removeClass('on');
    }
  });
  });
