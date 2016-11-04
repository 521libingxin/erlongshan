<?php

use \LeanCloud\Engine\Cloud;

/*
 * Define cloud functions and hooks on LeanCloud
 */

// /1.1/functions/sayHello
Cloud::define("sayHello", function($params, $user) {
    return "hello {$params['name']}";
});
Cloud::define("averageStars", function($params, $user) {
    error_log("123123"+$params);
    error_log("123123");
    return 0;
});
Cloud::afterUpdate("_User", function($article, $user) {
    // 输出日志到控制台
    error_log("afterUpdate_dfsdfs15153412sf");
});
Cloud::beforeUpdate("_User", function($article, $user) {
    // 输出日志到控制台
    error_log("beforeUpdate_dfsdfs15153412sf");
});
// /1.1/functions/sieveOfPrimes
Cloud::define("sieveOfPrimes", function($params, $user) {
    $n = isset($params["n"]) ? $params["n"] : 1000;
    error_log("Find prime numbers less than {$n}");
    $primeMarks = array();
    for ($i = 0; $i <= $n; $i++) {
        $primeMarks[$i] = true;
    }
    $primeMarks[0] = false;
    $primeMarks[1] = false;

    $x = round(sqrt($n));
    for ($i = 2; $i <= $x; $i++) {
        if ($primeMarks[$i]) {
            for ($j = $i * $i; $j <= $n;  $j = $j + $i) {
                $primeMarks[$j] = false;
            }
        }
    }

    $numbers = array();
    forEach($primeMarks as $i => $mark) {
        if ($mark) {
            $numbers[] = $i;
        }
    }
    return $numbers;
});
/*Cloud::afterSave("_User", function($userObj, $currentUser) {
	error_log('testBookingafterSave');
    $userObj->set("sex", "LeanCloud");
    try {
        $userObj->save();
    } catch (CloudException $ex) {
        throw new FunctionError("保存 User 对象失败: " . $ex->getMessage());
    }
});*/
Cloud::onLogin(function($user) {
	error_log('onloginuser');
	//$todo = new Object("Todo");
    /*$user ->set("sex","女的");
    $user->save();*/
    //error_log($todo);
    /*if ($user->get("blocked")) {
        // 用户无法登录
        throw new FunctionError("Forbidden");
    }*/
    // 如果正常执行，则用户将正常登录
});
/*Cloud::onLogin(function($user) {
	
    $todo = new Object("Todo");
    $todo->set("content", 132);
    $todo->save();
});*/
/*

Cloud::onLogin(function($user) {
    // reject blocker user for login
    if ($user->get("isBlocked")) {
        throw new FunctionError("User is blocked!", 123);
    }
});

Cloud::onInsight(function($params) {
    return;
});

Cloud::onVerified("sms", function($user){
    return;
});

Cloud::beforeSave("TestObject", function($obj, $user) {
    return $obj;
});

Cloud::beforeUpdate("TestObject", function($obj, $user) {
    // $obj->updatedKeys is an array of keys that is changed in the request
    return $obj;
});

Cloud::afterSave("TestObject", function($obj, $user, $meta) {
    // function can accepts optional 3rd argument $meta, which for example
    // has "remoteAddress" of client.
    return ;
});

*/
