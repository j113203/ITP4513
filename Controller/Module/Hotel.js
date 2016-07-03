function handle(data){
	var Airline = {
		switchTo : function(callback){
			$("div#home").fadeOut(1000).animateCss("slideOutRight");			
			$("div#fliter").fadeOut(1000).animateCss("bounceOut");
			$("div#footer").fadeOut(1000).animateCss("slideOutDown");
			$("div#title").fadeOut(1000).animateCss("slideOutLeft");
			$("div#fliter > input#DepartureDateTime").datetimepicker('destroy');
			$("div#fliter > input#ArrivalDateTime").datetimepicker('destroy');
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
		$("div#home").animateCss("slideInRight");
		$("div#fliter").animateCss("bounceIn");
		$("div#fliter > input#DepartureDateTime").datetimepicker();
		$("div#fliter > input#ArrivalDateTime").datetimepicker();
		$("div#home > i").click(function(){
			Airline.switchTo(function(){
				Controller.switchTo("Common/menu");				
			});
		});
	});
}