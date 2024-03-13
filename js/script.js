$(document).ready(function(){
	if ($(".partners__grid").length) {
		$('.partners__grid').webTicker({
			startEmpty:false,
			hoverpause:false,
			speed:120,
			duplicate:true
		});
	}
	$('.scrollable__link').on("click" ,function(e){
		e.preventDefault();
		let curr = $(this).attr("data-scroll");
		$('html').animate({ 
    	    scrollTop: $(curr).offset().top 
        }, 900
        );
	});
});