function render(){
	var layout =	'<div class="AirPlane"></div>'+
					'<div class="AirPlane"></div>'+
					'<div class="AirPlane"></div>'+
					'<div class="AirPlane"></div>';		
	var css    = 	"<style>body,html{height:100%}div.AirPlane{position:fixed;background-repeat:no-repeat}html{width:100%;background-color:#fff;overflow:hidden}div.container{height:100%;margin-top:150px}div.AirPlane{display:inline-block;width:117px;height:1644px;bottom:-1644px;background-image:url(img/loading1.png);background-size:117px 1644px}div.AirPlane:nth-of-type(1){left:20%}div.AirPlane:nth-of-type(2){left:35%}div.AirPlane:nth-of-type(3){right:35%}div.AirPlane:nth-of-type(4){right:20%}</style>";
	return layout+css;
}