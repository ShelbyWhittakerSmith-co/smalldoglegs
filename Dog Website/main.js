Html
	<!doctype html>
	<html lang=”en”>
		<meta charset=”utf-8” />
		<script src=”TheFileNameYouWantToUse.js”></script>
	</head>
	<body>
		<div id=”big_wrapper”>
			<p id=” tuna”>first</p>
			<p id=”bacon”>second</p>
			<p id=”tuna”>Third</p>
		</div>
	</body>
	</hmtl>


Javascript Doc //Query Selection
	function getStuff(){
		document.querySelector(‘tuna’).onclick=talk; //will only pull first tuna item
	}
	function talk(){
		Alert(‘Stuff and Such!’);
}
window.onload=getStuff; 

	var list = document.querySelectorAll(‘tuna’);
	list[1].onclick=talk;  //choose the selector
	for(var i=0; i<list.length; i++){  // cycles through all of them.
		list[i].onclick=talk; 
}
