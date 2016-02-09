$(document).ready(function() {   
    $('a[name=modal]').click(function(e) {
	    e.preventDefault();
	    var modal = $(this).attr('href');
	  
	    $('.j-modal-mask').css({'display':'block'}).fadeTo("slow",0.8);
	    $('body').addClass('open-modal');

	    $(modal).fadeIn(100); 
  
   });
  
    $('.modal button').click(function (e) {
		e.preventDefault();
    	$('.j-modal-mask, .modal').hide();
    	$('body').removeClass('open-modal');
    }); 
 
    $('.j-modal-mask').click(function () {
    	$(this).hide();
    	$('.modal').hide();
    	$('body').removeClass('open-modal');
    });
  
});
