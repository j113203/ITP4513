function render(data){
	var layout =	'<div id="title">'+data.title+'</div>'+
					'<div id="info">'+data.info.name+' ('+data.info.position+') <i class="fa fa-sign-out faa-shake animated-hover" aria-hidden="true"></i></div>'+
					'<div id="footer"><div id="airpant1"></div><div id="airpant2"></div></div>';
	var css    = 	"<style>div#info,div#title{background-color:rgba(0,0,0,.8);top:20px;padding:10px;z-index:10;color:#fff}div#footer,div.item{background-repeat:no-repeat}div#footer>div#airpant1,div#footer>div#airpant2{animation-iteration-count:infinite;position:fixed}html{height:100%;width:100%;background-color:#fff;overflow:hidden}div.container{margin-top:150px}div#info{position:fixed;right:20px}div#title{font-family:'Poiret One';font-size:32px;position:fixed;left:0}div.item{position:relative;display:inline-block;width:200px;margin:10px;height:200px;border-radius:10px;background-position:center;background-color:rgba(255,255,255,1);background-size:100% auto;border:5px solid #000;z-index:3}div.item:hover{background-color:rgba(0,0,0,.5);background-image:none!important;border:5px solid #fff}div.item.Airline{background-image:url(img/Airline.png)}div.item.Hotel{background-image:url(img/Hotel.png)}div.item>h1{color:#fff;width:100%;visibility:hidden;text-align:center;vertical-align:middle;line-height:200px}div.item:hover>h1{visibility:visible}div#footer{position:fixed;bottom:0;left:0;height:300px;width:100%;background-image:url(img/footer2.png);background-size:auto 100%}div#footer>div#airpant1{left:-182px;top:50px;width:182px;height:162px;background-image:url(img/bg1.png);background-size:182px 162px;animation-name:airpant1;animation-duration:60s}div#footer>div#airpant2{right:-142px;top:150px;width:142px;height:122px;background-image:url(img/bg2.png);background-size:142px 122px;animation-name:airpant2;animation-duration:40s}@keyframes airpant1{from{left:-182px;top:50px}to{left:100%;top:100px}}@keyframes airpant2{from{right:-142px;top:150px}to{right:100%;top:350px}}</style>";
	return layout+css;
}