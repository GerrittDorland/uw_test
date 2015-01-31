function loadImage(imagePath)
{
	var img = new Image();
	img.src = imagePath;

	return img;
}

function drawImages()
{
	var i = 0;

	while(imageBuffer[i])
	{
		//Don't draw if load is incomplete
		if(imageBuffer[i].complete && imageBuffer[i])
		{
			context.drawImage(imageBuffer[i], 0, 0);
		}

		i++;
	}
}

function DrawRect(x, y, width, height, filled, color)
{
    if (filled)
    {
        context.fillStyle = color;
        context.fillRect(x, y, width, height);
    }
    else
    {
        context.strokeStyle = color;
        context.strokeRect(x, y, width, height);
    }
}

function ClearRect(x, y, width, height)
{
    context.clearRect(x, y, width, height);
}

function DrawText(x, y, color, text, size, bold)
{
    boldText = "";
    if (bold)
    {
        boldText = "bold";
    }
    context.font = boldText + (size.toString() + "px Arial");
    context.fillStyle = color;
    context.fillText(text, x, y);
}


function DrawGUI()
{
    DrawRect(50, 100, 80, 20, true, "rgb(200, 20, 20)");
    
    ClearRect(60, 105, 60, 10);
    
    DrawRect(48, 98, 84, 24, false, "rgb(80, 100, 90)");
    
    DrawText(40, 70, "rgb(0, 0, 130)", "Hello", 20, false);
    DrawText(40, 90, "rgb(0, 130, 0)", "World!", 25, true);
}
