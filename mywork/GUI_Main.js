

var context = null;

function Init()
{
	var canvas = document.getElementById("maincanvas");
	context = canvas.getContext("2d");

	test = new action();
	test2 = new action();
	
	test.initialize(10, 10, 10, 10, 'resc/test.png');
	test2.initialize(100, 100, 50, 50, 'resc/test.png');

	//Event Listeners
	canvas.addEventListener('mousedown', 	MouseEvent.bind(null, OnMouseDown), false);	
	canvas.addEventListener('mouseup',   	MouseEvent.bind(null, OnMouseUp), false);	
	canvas.addEventListener('mousemove',   	MouseEvent.bind(null, OnMouseMove), false);

	//loadImage('resc/test.png', 0);
}
function Update()
{
	ClearRect(0, 0, 400, 400);
	test.draw();
	test2.draw();
	DrawGUI();
}

setInterval(Update, 20);

