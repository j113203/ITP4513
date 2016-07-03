function handle(data){
	$("html").animate({
		backgroundColor: data.backgroundColor
	},1000,function(){
		$("div#home > i").click(function(){
			data.callback();
		});
	});	
}	