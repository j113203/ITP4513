function handle(data){
	$("html").animate({
		backgroundColor: data.backgroundColor
	},0,function(){
		$("div.AirPlane:nth-of-type(1)").animate({
			"bottom": "-1000px"				
		},1000);
		$("div.AirPlane:nth-of-type(2)").animate({
			"bottom": "-1100px"					
		},2000);
		$("div.AirPlane:nth-of-type(3)").animate({
			"bottom": "-1200px"						
		},3000);
		$("div.AirPlane:nth-of-type(4)").animate({
			"bottom": "-1300px"						
		},4000,function(){
			$("div.AirPlane:nth-of-type(1)").animate({
				"bottom": "0px"				
			},1000,function(){
				$("div.AirPlane:nth-of-type(1)").fadeOut(1000);
			});
			$("div.AirPlane:nth-of-type(2)").animate({
				"bottom": "0px"				
			},2000,function(){
				$("div.AirPlane:nth-of-type(2)").fadeOut(1000);
			});
			$("div.AirPlane:nth-of-type(3)").animate({
				"bottom": "0px"				
			},3000,function(){
				$("div.AirPlane:nth-of-type(3)").fadeOut(1000);
			});
			$("div.AirPlane:nth-of-type(4)").animate({
				"bottom": "0px"				
			},4000,function(){
				$("div.AirPlane:nth-of-type(4)").fadeOut(1000);
				setTimeout(function(){
					data.callback();
				}, 500);
			});
		});					});
}	