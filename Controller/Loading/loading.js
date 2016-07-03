function handle(data){
	$("html").animate({
		backgroundColor: data.backgroundColor
	},1000,function(){
		$("div#loading").animate({
			"height": "300px",
			"width": "300px",
			"backgroundSize": "300px"
		},1000,function(){
			$("div#title").html(data.title).animateCss("slideInLeft","1s",function(){
				setTimeout(function(){
					$("div#title").animateCss("slideOutLeft","1s",function(){
						$("div#title").html("");
						$("div#loading").animate({
							"height": "0px",
							"width": "0px",
							"backgroundSize": "0px"
						},1000,function(){
							data.callback();
						});
					});
				},500);
			});
		});
	});
}