<?php
	Header("Content-type: image/PNG");
	$im = imagecreatefrompng("1.png");
	imagepng($im);
?>