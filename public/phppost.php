<?php  
$resp = $_POST['resp'];
/*$opts = array (  
	'api_key' => '1d5eadc411d715941838a41edbf7efd5',
	'response' => '4QykXSMAwJBKgslrzBXr9Q20pCxx2a0qwYE9V-V5Xogiarp3mwMSLHINyLnA_OMto6sIJ1Z2NbeJnGM7mfwsgo4jzErR-J6qWxvrEtXvg0OQR_DL3KGd55mWIR_xztEWGsW3mEX7A3Z_XThNvXX8qWbGBqdXsp4Y0srRe_dGSvsrOzfGyXDoYdg9smBYwJb5edH9MC7uJwO1TEU9a3rV6sJM8GJ5Geo-clEEbj19ndtoc4bXxwjlXg'
);

//生成请求的句柄文件  
$context = stream_context_create($opts);  
echo $context;
$html = file_get_contents('https://captcha.luosimao.com/api/site_verify', false, $context);  
echo json_encode($html);*/
function send_post($url, $post_data) {  
  
  $postdata = http_build_query($post_data);  
  $options = array(  
    'http' => array(  
      'method' => 'POST',  
      'header' => 'Content-type:application/x-www-form-urlencoded',  
      'content' => $postdata,  
      'timeout' => 15 * 60 // 超时时间（单位:s）  
    )  
  );  
  $context = stream_context_create($options);  
  $result = file_get_contents($url, false, $context);  
  
  return $result;  
}  
  
//使用方法  
$post_data = array (  
	'api_key' => '1d5eadc411d715941838a41edbf7efd5',
	'response' => $resp
);
$html = send_post('https://captcha.luosimao.com/api/site_verify', $post_data);
echo $html;
?>