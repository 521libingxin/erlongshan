<?php
require __DIR__ . '/../vendor/autoload.php';

/*
 * A simple Slim based sample application
 *
 * See Slim documentation:
 * http://www.slimframework.com/docs/
 */

use \LeanCloud\Client;
use \LeanCloud\User;
use \LeanCloud\Storage\CookieStorage;
use \LeanCloud\Engine\SlimEngine;
use \LeanCloud\Query;
use \LeanCloud\Object;

Client::initialize(
    getenv("LC_APP_ID"),
    getenv("LC_APP_KEY"),
    getenv("LC_APP_MASTER_KEY")
);

try {
	User::logIn("123","456");
} catch (Exception $e) {
	echo "戳了";
}
