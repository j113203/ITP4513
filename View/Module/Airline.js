function render(data){
	var layout =	'<div id="title">'+data.title+'</div>'+
					'<div id="home"><i class="fa fa-home faa-wrench animated-hover" aria-hidden="true"></i></div>'+
					'<div id="fliter">'+
						'<label for="FlightNo">'+data.FlightNo.title+'</label>'+
							'<input class="u-full-width" type="text" placeholder="'+data.FlightNo.placeholder+'" id="FlightNo">'+
						'<label for="Departure">'+data.Departure.title+'</label>'+
							'<input class="u-full-width" type="text" placeholder="'+data.Departure.Airport+'" id="DepartureAirport">'+
							'<input class="u-full-width" type="text" placeholder="'+data.Departure.DateTime+'" id="DepartureDateTime">'+
						'<label for="Arrival">'+data.Arrival.title+'</label>'+
							'<input class="u-full-width" type="text" placeholder="'+data.Arrival.Airport+'" id="ArrivalAirport">'+
							'<input class="u-full-width" type="text" placeholder="'+data.Arrival.DateTime+'" id="ArrivalDateTime">'+
						'<label for="FlightClass">'+data.Class.title+'</label>'+
							'<input class="u-full-width" type="text" placeholder="'+data.Class.placeholder+'" id="FlightClass">'+						
						'<label for="FlightPrice">'+data.Price.title+'</label>'+
							'<input class="u-full-width" type="number" placeholder="'+data.Price.placeholder+'" id="FlightPrice">'+
							'<input type="checkbox" id="FlightPriceTax"/> '+data.Tax.title+
					'</div>'+
					'<div id="body"></div>'+
					'<div id="footer"><div id="airpant1"></div><div id="airpant2"></div></div>';
	var css    = 	"<style>div#home,div#title{top:20px;padding:10px;font-size:32px}div#fliter,div#home,div#title{background-color:rgba(0,0,0,.8);z-index:10;color:#fff}div#footer>div#airpant1,div#footer>div#airpant2{animation-iteration-count:infinite;position:fixed}html{height:100%;width:100%;background-color:#fff;overflow:hidden}div.container{margin-top:150px}div#title{font-family:'Poiret One';position:fixed;left:0}div#home{position:fixed;right:20px}div#fliter{padding:20px;width:180px;position:relative}div#fliter>input{border-radius:0;border:none;border-bottom:1px solid #fff;background-color:transparent;color:#fff}div#footer{position:fixed;bottom:0;left:0;height:300px;width:100%;background-image:url(img/footer2.png);background-repeat:no-repeat;background-size:auto 100%}div#footer>div#airpant1{left:-182px;top:50px;width:182px;height:162px;background-image:url(img/bg1.png);background-size:182px 162px;animation-name:airpant1;animation-duration:60s}div#footer>div#airpant2{right:-142px;top:150px;width:142px;height:122px;background-image:url(img/bg2.png);background-size:142px 122px;animation-name:airpant2;animation-duration:40s}@keyframes airpant1{from{left:-182px;top:50px}to{left:100%;top:100px}}@keyframes airpant2{from{right:-142px;top:150px}to{right:100%;top:350px}}</style>";
	return layout+css;
}