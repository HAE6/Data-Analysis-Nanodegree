jQuery(document).ready(function(){
	
	jQuery(".box-close").click(function(){
		jQuery(this).parents(".box").hide();
			
	});
	jQuery(".answer").hide();
	jQuery(".question").click(function(){
		jQuery(this).next(".answer").slideToggle();
	});

	
	jQuery(".faq .question").addClass("pointer");
	jQuery(".question").append('<span class="icon">>></span>');

	
	jQuery("#more").click(function(){
	jQuery("#place-holder").load("more.html .more-items");
		return false;
		});
});