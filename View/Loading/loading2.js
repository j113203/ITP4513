function render(data){
	var layout =	'<div id="HotelLine"></div>'+
					'<div id="HotelLayour"></div>';										
	var css    = 	"<style>body,html{height:100%}html{width:100%;background-color:#fff;overflow:hidden}div.container{height:100%;margin-top:150px}div#HotelLayour,div#HotelLine{position:fixed;width:0;height:125px;top:50%;margin-top:-65.5px}div#HotelLine{left:0;background:url(img/loading2.png) repeat-x;background-size:655px 125px}div#HotelLayour{left:50%;margin-left:-50%;background-color:#0091EA}</style>";
	return layout+css;
}