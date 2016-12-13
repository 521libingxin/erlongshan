var abcreturn = "";
String.prototype.format2 = function ()
{
  	var t_obj = arguments[0],temS = this;
  	for(var i in t_obj){
  		temS = temS.replace(new RegExp("\\{" + i + "\\}", "g"), t_obj[i]);
  	}
  	return temS;
};
String.prototype.Format = function (fmt) {
	var newdate = new Date(parseInt(this+"000"));
    var o = {
        "M+": newdate.getMonth() + 1, //月份 
        "d+": newdate.getDate(), //日 
        "h+": newdate.getHours(), //小时 
        "m+": newdate.getMinutes(), //分 
        "s+": newdate.getSeconds(), //秒 
        "q+": Math.floor((newdate.getMonth() + 3) / 3), //季度 
        "S": newdate.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (newdate.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
var t_json = {
	消息通知:{
		"t_css":"msg_icon",
		"list":[
		{"name":"客户反馈","urls":"kufk"},
		{"name":"系统通知","urls":"xttz"},
		{"name":"在线消息","urls":"zxxx"}
		]
	},
	会员管理:{
		"t_css":"user_icon",
		"list":[
		{"name":"查看会员","urls":"ckhy"},
		{"name":"实名认证","urls":"smrz"},
		{"name":"VIP管理","urls":"vipgl"}
		]
	},
	员工管理:{
		"t_css":"admin_icon",
		"list":[
		{"name":"查看员工","urls":"ckyg"},
		{"name":"操作记录","urls":"czjl"}
		]
	},
	权限设置:{
		"t_css":"root_icon",
		"list":[
		{"name":"操作权限","urls":"czqx"},
		{"name":"系统设置","urls":"xtsz"}
		]
	}
}
var url_json = {
	kufk:{
		parent:"kufk",
		jsurl:"../../public/JS/kufk.js"
	},
	xttz:{
		parent:"kufk",
		jsurl:"../../public/JS/xttz.js"
	},
	zxxx:{
		parent:"kufk",
		jsurl:"../../public/JS/zxxx.js"
	},
	ckhy:{
		parent:"ckhy",
		jsurl:"../../public/JS/ckhy.js"
	},
	smrz:{
		parent:"ckhy",
		jsurl:"../../public/JS/smrz.js"
	},
	vipgl:{
		parent:"ckhy",
		jsurl:"../../public/JS/vipgl.js"
	},
	ckyg:{
		parent:"ckyg",
		jsurl:"../../public/JS/ckyg.js"
	},
	xtsz:{
		parent:"ckyg",
		jsurl:"../../public/JS/xtsz.js"
	},
	czqx:{
		parent:"czqx",
		jsurl:"../../public/JS/czqx.js"
	},
	xtsz:{
		parent:"czqx",
		jsurl:"../../public/JS/xtsz.js"
	}
}
var t_string_l = `
	<div id="{t_id}_left" urls="{t_id}" class="list_public bg_list {t_class}">
		<span class="{t_css}"></span>
		{name}
	</div>
	<div class="list_line"></div>
`;
var t_string = '<div urls="{t_id}" class="list_public body_r_t_list {t_class}">';
	t_string += '{name}';	
	t_string += '<div class="b_r_l_line"></div>';	
	t_string += '</div>';
var t_html_str = "";
for(var i in t_json){
	console.log(t_json[i]);
	t_html_str += t_string_l.format2({
		t_id:t_json[i]["list"][0]['urls'],
		t_class:'',
		t_css:t_json[i]["t_css"],
		name:i
	});
}
$("#left_div").html(t_html_str);



function getright(t_url,c_url){
	if(t_url == undefined){
		c_url = t_json["消息通知"]['list'][0]['urls'];
		t_url = url_json[c_url];
	}
	var t_parent = t_url["parent"];
	$(".bg_hover").removeClass("bg_hover");
	$("#"+t_parent+"_left").addClass("bg_hover");
	var key = $("#"+t_parent+"_left").text();
	getdata($.trim(key),c_url);
}
function getdata(key,t_url){
	var title_list = t_json[key]["list"];
	var t_index = 0;
	var t_html_re = "";
	for(var i in title_list){
		var t_class = "";
		if(title_list[i]["urls"] == t_url){
			t_class = "body_r_t_l_hover";
		}
		t_index++;
		t_html_re += t_string.format2({
			name:title_list[i].name,
			t_id:title_list[i]["urls"],
			t_class:t_class
		})
	}
	$("#body_right_top").html(t_html_re);
	$(".loading").addClass("show");
	getmsg(t_url);
}
function getmsg(t_url){
	$("#body_right_body_id").html("");
	var t_now_page = controllers[t_url];
	if(t_now_page == undefined){
		$.ajax({
			type:"get",
			url:"../../public/JS/"+t_url+".js",
			async:false,
		});
		if(abcreturn["id"] == t_url){
			controllers[t_url] = abcreturn;
			abcreturn.start();
		}
	}else{
		t_now_page.start();
	}
}

var controllers = {
}
