function handle(data){
	var iframe = {
		switchTo : function(callback){
			$("div#home").fadeOut(1000).animateCss("slideOutRight");			
			$("div#iframe").fadeOut(1000).animateCss("bounceOut");
			$("div#footer").fadeOut(1000).animateCss("slideOutDown");
			$("div#title").fadeOut(1000).animateCss("slideOutLeft");
			setTimeout(function(){
				callback();
			}, 1000);
		}
	};
	$("html").animate({
		backgroundColor: "#0091EA"
	},0,function(){
		$("div#footer > div").click(function(){
			var this_ = $(this);
			this_.fadeOut(1000,function(){
				this_.fadeIn(1000);
			});
		});
		$("div#title").animateCss("slideInLeft");
		$("div#footer").animateCss("slideInUp");
		$("div#iframe").animateCss("bounceIn");
		$("div#home > i").click(function(){
			iframe.switchTo(function(){
				Controller.switchTo("Common/menu");				
			});
		});
	});
}