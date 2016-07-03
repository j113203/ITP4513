function render(data){
	var layout =	'<div id="message">'+
						'<p>'+data.message+'</p>'+
					'</div>'+
					'<div id="home">'+
						'<i class="fa fa-home faa-wrench animated-hover" aria-hidden="true"></i>'+
					'</div>'+
					'<div id="footer"></div>';
	var css    = 	"<style>html{background-color:#fff;overflow:hidden}div#message{color:#fff;margin-top:350px}div#footer{position:fixed;top:-80px;left:0;height:373px;width:100%;background-image:url(img/dev.png);background-repeat:repeat;background-size:auto 373px}div#home{background-color:rgba(0,0,0,.8);position:fixed;color:#fff;top:20px;right:20px;padding:10px;font-size:32px;z-index:10}</style>";
	return layout+css;
}