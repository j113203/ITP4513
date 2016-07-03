function data(){
	return {
		backgroundColor : "rgb(51,51,51)",
		message : "This service is undergoing maintenance, please try again later.",
		callback : function(){
			Controller.switchTo("Common/login");
		}
	};
}