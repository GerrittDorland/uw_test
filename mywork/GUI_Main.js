

var context = null;

function Init()
{
	var canvas = document.getElementById("maincanvas");
	context = canvas.getContext("2d");

	bottomBar = [];

	for(var i = 0; i < 10; i++)
	{
		bottomBar[i] = new HOTKEY_PLATE();
		bottomBar[i].initialize(20 + (i * 45), 100, 40, 40, false, "rgb(100, 100, 100)", 'resc/test.png');
	}

	//Event Listeners
	canvas.addEventListener('mousedown', 	MouseEvent.bind(null, OnMouseDown), false);	
	canvas.addEventListener('mouseup',   	MouseEvent.bind(null, OnMouseUp), false);	
	canvas.addEventListener('mousemove',   	MouseEvent.bind(null, OnMouseMove), false);

	//loadImage('resc/test.png', 0);
}
function Update()
{
	ClearRect(0, 0, 800, 400);
	for(var i = 0; i < 10; i++)
	{
		bottomBar[i].draw();
	}
	//DrawGUI();
}

setInterval(Update, 20);
