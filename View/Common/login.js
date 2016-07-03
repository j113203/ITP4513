function render(data){
	var layout =	'<div id="title">'+data.title+'</div>'+
					'<div id="login">'+
						'<label for="IDEmailInput">'+data.IDEmailInput+'</label>'+
						'<input class="u-full-width" type="email" placeholder="'+data.IDEmailInput+'" id="IDEmailInput">'+
						'<label for="Password">'+data.Password+'</label>'+
						'<input class="u-full-width" type="password" placeholder="######" id="Password">'+
						'<button class="button-primary u-full-width">'+data.Submit+'</button>'+
					'</div>'+
					'<div id="footer"><div id="airpant1"></div><div id="airpant2"></div></div>';
	var css    = 	"<style>div#login,div#title{background-color:rgba(0,0,0,.8);z-index:10;color:#fff;left:0}div#footer>div#airpant1,div#footer>div#airpant2{position:fixed;animation-iteration-count:infinite}html{height:100%;width:100%;background-color:#fff;overflow:hidden}div#title{font-family:'Poiret One';font-size:32px;position:fixed;top:20px;padding:10px}div#login{border-radius:10px;height:172px;width:250px;position:fixed;right:0;bottom:0;top:0;margin:auto;padding:50px 50px 100px}div#login>input{border-radius:0;border:none;border-bottom:1px solid #fff;background-color:transparent;color:#fff}div#footer{position:fixed;bottom:0;left:0;height:300px;width:100%;background-image:url(img/footer2.png);background-repeat:no-repeat;background-size:auto 100%}div#footer>div#airpant1{left:-182px;top:50px;width:182px;height:162px;background-image:url(img/bg1.png);background-size:182px 162px;animation-name:airpant1;animation-duration:60s}div#footer>div#airpant2{right:-142px;top:150px;width:142px;height:122px;background-image:url(img/bg2.png);background-size:142px 122px;animation-name:airpant2;animation-duration:40s}@keyframes airpant1{from{left:-182px;top:50px}to{left:100%;top:100px}}@keyframes airpant2{from{right:-142px;top:150px}to{right:100%;top:350px}}</style>";
	return layout+css;
}