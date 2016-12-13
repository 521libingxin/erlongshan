abcreturn = {
		id:"xttz",
		model_main:`
			<input type="button" id="sendmsg" value="发送系统消息" />
			<div class="body_box" style="overflow-y:auto;">
				<table style="width:100%;text-align:center;">
					<tr><th>消息ID</th><th>消息内容</th><th>消息级别</th><th>消息发送时间</th></tr>
					<tbody id="table_msg_body">
					</tbody>
				</table>
			</div>
		`,
		model_main_list:`<tr><td>{ID}</td><td>{content}</td><td>{level}</td><td>{time}</td></tr>`,
		model_alert:`
			<div class="bg_alert_hover"></div>
			<div class="bg_alert">
				<div class="remove_alert">X</div>
				<textarea id="editor_id" style="width:100%;height:400px;visibility:hidden;resize: none;"></textarea>
				<button class="sendmsg">发送系统消息</button>
			</div>
		`,
		start:function(){
			var t_this = this;
			$("#body_right_body_id").html(t_this.model_main);
			var t_html_child = t_this.model_main_list;
			$.ajax({
				type:"get",
				url:"http://erlongshan.sinaapp.com/Lean/back/getmsglist.php",
				success:function(back){
					var t_string_msg = "";
					for(var i in back){
						t_string_msg += t_html_child.format2({
							ID:back[i].ID,
							content:back[i].username,
							level:back[i].level,
							time:back[i].time.Format("yyyy-MM-dd hh:mm:ss")
						});
					}
					$("#table_msg_body").html(t_string_msg);
					$(".loading").removeClass("show");
				}
			});
			$("#sendmsg").click(function(){
				t_this.showalert();
			});
		},
		showalert:function(){
			$("#alertbox").html(this.model_alert);
			var editor1 = KindEditor.create('#editor_id', {
				resizeType:0,
				items:['undo', 'redo', '|', 'code', 'cut', 'copy', 'paste',
                    'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                    'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
                    'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
                    'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                    'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat'
				]
			});
		}
	}
