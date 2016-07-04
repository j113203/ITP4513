function handle(data){
	
	function TryParseInt(str,defaultValue) {
		 var retValue = defaultValue;
		 if(str !== null) {
			 if(str.length > 0) {
				 if (!isNaN(str)) {
					 retValue = parseInt(str);
				 }
			 }
		 }
		 return retValue;
	}
	var Airline = {
		switchTo : function(callback){
			$("div#home").fadeOut(1000).animateCss("slideOutRight");			
			$("div#fliter").fadeOut(1000).animateCss("bounceOut");
			$("div#body").fadeOut(1000).animateCss("bounceOut");
			$("div#footer").fadeOut(1000).animateCss("slideOutDown");
			$("div#title").fadeOut(1000).animateCss("slideOutLeft");
			$("div#fliter > input#DepartureDateTime").datetimepicker('destroy');
			$("div#fliter > input#ArrivalDateTime").datetimepicker('destroy');
			setTimeout(function(){
				callback();
			}, 1000);
		},
		add : function(FlightNo,DepartureAirport,DepartureDateTime,ArrivalAirport,ArrivalDateTime,Class,Price,Tax){
			var ele = '<tr>'+
						'<td>'+FlightNo+'</td>'+
						'<td>'+DepartureAirport+' '+DepartureDateTime+'</td>'+
						'<td>'+ArrivalAirport+' '+ArrivalDateTime+'</td>'+
						'<td>'+Class+'</td>';				
			if (Tax){
				ele+='<td>'+'$'+Price+'('+Tax+')</td>';
			}else{
				ele+='<td>'+'$'+Price+'</td>';
			}			
			$(ele+'</tr>').appendTo("div#body>table>tbody");
		},
		hide : function(i , text){
			$("div#body>table>tbody>tr").each(function( index, element ) {
				if (element.children[i].innerText.indexOf(text)<0){
					$(element).hide();
				}
			});
		},
		hidePrice : function(price_){
			$("div#body>table>tbody>tr").each(function( index, element ) {
				var price = element.children[4].innerText;
				if (price.indexOf("(")<0){
					price = TryParseInt(price.substring(price.indexOf("$")+1),0);
				}else{
					price = TryParseInt(price.substring(price.indexOf("$")+1,price.indexOf("(")-price.indexOf("$")),0);
				}
				if (price_ && price>price_){
					$(element).hide();
				}
			});				
		},
		fliter : {
			FlightNo:"",
			DepartureAirport:"",
			DepartureDateTime:"",
			ArrivalAirport:"",
			ArrivalDateTime:"",
			Class:"",
			Price:"",
			Tax:"",
			query :function(FlightNo,DepartureAirport,DepartureDateTime,ArrivalAirport,ArrivalDateTime,Class,Price,Tax){
				if (FlightNo!=null){
					Airline.fliter.FlightNo=FlightNo;
				}
				if (DepartureAirport!=null){
					Airline.fliter.DepartureAirport=DepartureAirport;
				}
				if (DepartureDateTime!=null){
					Airline.fliter.DepartureDateTime=DepartureDateTime;
				}
				if (ArrivalAirport!=null){
					Airline.fliter.ArrivalAirport=ArrivalAirport;
				}
				if (ArrivalDateTime!=null){
					Airline.fliter.ArrivalDateTime=ArrivalDateTime;
				}
				if (Class!=null){
					Airline.fliter.Class=Class;
				}
				if (Price!=null){
					Airline.fliter.Price=Price;					
				}
				$("div#body>table>tbody>tr").each(function( index, element ) {
					$(element).show();
				});
				Airline.hide(0,Airline.fliter.FlightNo);
				Airline.hide(1,Airline.fliter.DepartureAirport);
				Airline.hide(1,Airline.fliter.DepartureDateTime);
				Airline.hide(2,Airline.fliter.ArrivalAirport);
				Airline.hide(2,Airline.fliter.ArrivalDateTime);
				Airline.hide(3,Airline.fliter.Class);
				Airline.hidePrice(Airline.fliter.Price);
			}
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
		$("div#home > i").click(function(){
			Airline.switchTo(function(){
				Controller.switchTo("Common/menu");				
			});
		});
		$("div#fliter > input#DepartureDateTime").datetimepicker({
			onChangeDateTime:function(dp,$input){
				Airline.fliter.query(null,null,$input.val());
			}
		});
		$("div#fliter > input#ArrivalDateTime").datetimepicker({
			onChangeDateTime:function(dp,$input){
				Airline.fliter.query(null,null,null,null,$input.val());
			}
		});
		$("div#body>table>tbody").animateCss("fadeInUp");
		$("input#FlightNo").bind('input', function(){
			Airline.fliter.query($(this).val());
		});
		$("input#DepartureAirport").bind('input', function(){
			Airline.fliter.query(null,$(this).val());
		});
		$("input#DepartureDateTime").bind('input', function(){
			Airline.fliter.query(null,null,$(this).val());
		});
		$("input#ArrivalAirport").bind('input', function(){
			Airline.fliter.query(null,null,null,$(this).val());
		});
		$("input#ArrivalDateTime").bind('input', function(){
			Airline.fliter.query(null,null,null,null,$(this).val());
		});
		$("input#FlightClass").bind('input', function(){
			Airline.fliter.query(null,null,null,null,null,$(this).val());
		});
		$("input#FlightPrice").bind('input', function(){
			Airline.fliter.query(null,null,null,null,null,null,$(this).val());					
		});
		
		Airline.add("A0001","HK","2015-01-01 10:00","US","2016-01-01 23:59","Businese","10","10%");
		Airline.add("A0002","HK","2015-01-01 10:00","US","2016-01-01 23:59","Businese","20");
		Airline.add("A0003","HK","2015-01-01 10:00","US","2016-01-01 23:59","Businese","30","10%");
		Airline.add("A0004","HK","2015-01-01 10:00","US","2016-01-01 23:59","Businese","40","10%");
		Airline.add("A0005","HK","2015-01-01 10:00","US","2016-01-01 23:59","Businese","50","10%");
		Airline.add("A0006","HK","2015-01-01 10:00","US","2016-01-01 23:59","Businese","60","10%");
	});
}