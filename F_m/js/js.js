// JavaScript Document


$(document).ready(function(e) {
    
	
	$("#index header .search img").click(function(){
		if($(".header-search").is(":hidden")){
			$(".g_souq").hide();
			$(".header-search").show();	
		}else{
			$(".g_souq").show();
			$(".header-search").hide();		
		}	
	})
	
	
	
	
});