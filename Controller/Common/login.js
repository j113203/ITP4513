function handle(data){		
	$("html").animate({
		backgroundColor: data.backgroundColor
	},0,function(){
		$("div#footer > div").click(function(){			
			var this_ = $(this);
			this_.fadeOut(1000,function(){
				this_.fadeIn(1000);
			});
		});
		$("div#title").animateCss("slideInLeft");
		$("div#login").animateCss("bounceInRight");
		$("div#footer").animateCss("slideInUp");
		$("div#login > button").click(function(){
			if ($("#IDEmailInput").val() && $("#Password").val()){
				$("div#title").animateCss("slideOutLeft");
				$("div#footer").animateCss("slideOutDown");
				$("div#login").animateCss("bounceOutRight");
				setTimeout(function(){
					var fullname = $("#IDEmailInput").val();
					Controller.init("Loading/loading",function(){
						Controller.cache["Loading/loading"].model.callback = function(){
							Controller.init("Common/menu",function(){
								Controller.cache["Common/menu"].model.info.name = fullname;
								Controller.cache["Common/menu"].model.info.position = "Staff";
								Controller.show("Common/menu");
							});
						};
						Controller.show("Loading/loading");
					});					
				}, 1000);
			}else{
				$("div#login").animateCss("wobble");
			}				
		});
	})
}