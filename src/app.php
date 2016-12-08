<?php
require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../src/cloud.php';

/*
 * A simple Slim based sample application
 *
 * See Slim documentation:
 * http://www.slimframework.com/docs/
 */

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Slim\Views\PhpRenderer;
use \LeanCloud\Client;
use \LeanCloud\User;
use \LeanCloud\Storage\CookieStorage;
use \LeanCloud\Engine\SlimEngine;
use \LeanCloud\Query;
use \LeanCloud\Object;

$app = new \Slim\App();
// 禁用 Slim 默认的 handler，使得错误栈被日志捕捉
unset($app->getContainer()['errorHandler']);

Client::initialize(
    getenv("LC_APP_ID"),
    getenv("LC_APP_KEY"),
    getenv("LC_APP_MASTER_KEY")
);
// 将 sessionToken 持久化到 cookie 中，以支持多实例共享会话
Client::setStorage(new CookieStorage());
//Client::setStorage(new CookieStorage(60 * 60 * 24, "/"));

SlimEngine::enableHttpsRedirect();
$app->add(new SlimEngine());

// 使用 Slim/PHP-View 作为模版引擎
$container = $app->getContainer();
$container["view"] = function($container) {
    return new \Slim\Views\PhpRenderer(__DIR__ . "/views/");
};
function getIP() 
{ 
global $ip; 

if (getenv("HTTP_CLIENT_IP")) 
$ip = getenv("HTTP_CLIENT_IP"); 
else if(getenv("HTTP_X_FORWARDED_FOR")) 
$ip = getenv("HTTP_X_FORWARDED_FOR"); 
else if(getenv("REMOTE_ADDR")) 
$ip = getenv("REMOTE_ADDR"); 
else 
$ip = "Unknow"; 

return $ip; 
} 
$app->get('/', function (Request $request, Response $response) {
    return $response->withStatus(302)->withRedirect('/index');
});
$app->get('/index', function (Request $request, Response $response) {
    return $this->view->render($response, "index.phtml", array(
        "currentTime" => new \DateTime(),
        "ip" =>$_SERVER['HTTP_X_REAL_IP']
    ));
});
/*$app->get('/index', function (Request $request, Response $response) {
    return $this->view->render($response, "index.phtml", array(
        "currentTime" => new \DateTime(),
    ));
});

$app->get('/login[/{params:.*}]', function (Request $request, Response $response) {
	$user = User::getCurrentUser();
	if ($user) {
        return $response->withRedirect('/profile');
    }else {
    	$params = explode('/', $request->getAttribute('params'));
    	$parval = "";
    	if($params[0] == "error"){
    		$parval = "用户名或密码错误！";
    	}
	    return $this->view->render($response, "login.phtml", array(
	        "error" => $parval,
	    ));
    }
});
// 显示 todo 列表
$app->get('/todos', function(Request $request, Response $response) {
    $query = new Query("Todo");
    $query->descend("createdAt");
    try {
        $todos = $query->find();
    } catch (\Exception $ex) {
        error_log("Query todo failed!");
        $todos = array();
    }
    return $this->view->render($response, "todos.phtml", array(
        "title" => "TODO 列表",
        "todos" => $todos,
    ));
});

$app->post("/todos", function(Request $request, Response $response) {
    $data = $request->getParsedBody();
    $todo = new Object("Todo");
    $todo->set("content", $data["content"]);
    $todo->save();
    return $response->withStatus(302)->withHeader("Location", "/todos");
});
$app->post("/login", function(Request $request, Response $response) {
    $data = $request->getParsedBody();
    try {
        User::logIn($data["uname"], $data["pwd"]);
        // 跳转到个人资料页面
        return $response->withStatus(302)->withRedirect('/profile');
    } catch (Exception $ex) {
        //登录失败，跳转到登录页面
        return $response->withStatus(302)->withRedirect('/login/error');
    }
});
$app->get('/profile', function(Request $request, Response $response) {
    // 判断用户是否已经登录
    $user = User::getCurrentUser();
    if ($user) {
		$roleid = $user->get("role");
		$query = new Query("Rolelist");
		$rolelist = $query->get($roleid)->get("roleobject");
        // 如果已经登录，发送当前登录用户信息。
        //return $res->getBody()->write($user->getUsername());
        foreach($rolelist as $key => $value){
	        return $response->withRedirect($key);
		}
		// 没有登录，跳转到登录页面。
        return $response->withRedirect('/login');
    } else {
        // 没有登录，跳转到登录页面。
        return $response->withRedirect('/login');
    }
});
$app->get('/getajax', function(Request $request, Response $response) {
    // PSR-7 response is immutable
    //header("Access-Control-Allow-Origin:*");
    $res = $response->withHeader("Access-Control-Allow-Origin","*");
    $res = $res->withHeader("Content-Type","application/json;charset=utf-8");
    $res->getBody()->write(json_encode(array(
        "runtime" => "php-5.5",
        "version" => "custom"
    )));
    return $res;
});
$app->post('/loginajax', function(Request $request, Response $response) {
    $res = $response->withHeader("Access-Control-Allow-Origin","*");
    $res = $res->withHeader("Content-Type","application/json;charset=utf-8");
	$data = $request->getParsedBody();
	try {
        User::logIn($data["uname"], $data["pwd"]);
        if($data["long"] == 1){
			Client::setStorage(new CookieStorage(60 * 60 * 24, "/"));
		}
		$res->getBody()->write(json_encode(array(
	        "login" => "1"
	    )));
		return $res;
    } catch (Exception $ex) {
		$res->getBody()->write(json_encode(array(
	        "login" => "0"
	    )));
		return $res;
    }
});
$app->get('/bgmanagement', function (Request $request, Response $response) {
    $user = User::getCurrentUser();
    if ($user) {
		$roleid = $user->get("role");
		$query = new Query("Rolelist");
		$rolelist = $query->get($roleid)->get("roleobject");
	    return $this->view->render($response, "bgmanagement.phtml", array(
	        "rolelist" => $rolelist['bgmanagement'],
	    ));
    }else{
    	return $response->withRedirect('/login');
    }
});
$app->get('/management', function (Request $request, Response $response) {
    $user = User::getCurrentUser();
    if ($user) {
		$roleid = $user->get("role");
		$query = new Query("Rolelist");
		$rolelist = $query->get($roleid)->get("roleobject");
	    return $this->view->render($response, "management.phtml", array(
	        "rolelist" => $rolelist['management'],
	    ));
    }else{
    	return $response->withRedirect('/login');
    }
});
$app->get('/hello/{name}', function (Request $request, Response $response) {
    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello, $name");

    return $response;
});*/

$app->run();

