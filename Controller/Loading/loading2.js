function handle(data){
	$("html").animate({
		backgroundColor: data.backgroundColor
	},0,function(){
		$("div#HotelLine").animate({
			"width" : "100%"
		},10000,function(){
			$("div#HotelLine").fadeOut(5000);
			$("div#HotelLayour").animate({
				"width" : "100%"
			},5000,function(){
				data.callback();
			});		
		});				
	});
}	