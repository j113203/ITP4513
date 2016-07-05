function handle(data){	
	var Menu = {
		init : function(){
			Menu.item = Array.prototype.slice.call(arguments);
			Menu.add_();
		},
		add : function(page,callback){
			callback=callback || function(){};
			$('<div class="item '+page+'"><h1>'+page+'</h1></div>').appendTo("body>div.container").animateCss("bounceIn","0.5s",function(){				
				callback();
			});	
		},
		item : [],
		add_ : function(){
			if (Menu.item.length==0){
				$("div.item").hover(function(){			
					$(this).animateCss("jello");
				});
				$("div.item").click(function(){
					var this_ = $(this);
					Menu.switchTo(function(){
						Menu.action(this_.attr('class').split(' ')[1])();
					});
				});				
			}else{				
				Menu.add(Menu.item.shift(),function(){
					Menu.add_();
				});
			}
		},
		action : function(name){
			switch(name) {
				case "Airline":
					return function(){
						Controller.switchTo_("Module/"+name,"Loading/loading1");						
					};
				case "Hotel":
					return function(){
						Controller.switchTo_("Module/"+name,"Loading/loading2");
					};
				case "Hello":
					return function(){
						Controller.show_(name,"hello.html");
					};
				default:
					return function(){
						Controller.init("Loading/loading",function(){
							Controller.cache["Loading/loading"].model.callback = function(){
								Controller.init("Error/maintenance",function(){
									Controller.cache["Error/maintenance"].model.message="Thie "+name+" service is undergoing maintenance, please try again later.";
									Controller.cache["Error/maintenance"].model.callback=function(){
										Controller.switchTo("Common/menu");
									};
									Controller.show("Error/maintenance");
								});
							};	
							Controller.show("Loading/loading");
						});
					};
			}
		},
		switchTo : function(callback){
			$("div#info").fadeOut(1000).animateCss("slideOutRight");
			$("div#footer").fadeOut(1000).animateCss("slideOutDown");
			$("div.item").fadeOut(1000).animateCss("bounceOut");
			$("div#title").fadeOut(1000).animateCss("slideOutLeft");
			setTimeout(function(){
				callback();
			}, 1000);
		}
	};
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
		$("div#footer").animateCss("slideInUp");
		$("div#info").animateCss("slideInRight");
		$("body>div.container").append('<div class=".item"></div>');
		$("div#info > i").click(function(){
			Menu.switchTo(function(){
				Controller.switchTo("Common/login");
			});
		});
		
		Menu.init("Airline","Hotel","Order","Hello");
		
	});
}