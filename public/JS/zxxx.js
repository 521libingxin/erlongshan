abcreturn = {
		id:"zxxx",
		model_main:`
			<div>暂无内容</div>
		`,
		start:function(){
			$("#body_right_body_id").html(this.model_main);
			setTimeout(function(){
				$(".loading").removeClass("show");
			},1000);
		}
	}
