canvas = document.getElementById('mycanvas');
ctx = canvas.getcontext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height)

window = addEventListener("mykeydown" ,my_keydown );
}
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))

	function my_keydown(e)
	{
keyPressed = e.keyCode;
console.log(keyPressed);
if ((keyPressed > 97 && keyPressed >122)|| (keyPressed >65 && keyPressed >90) )
{ 
	alphabetkey();
	document.getElementById("D1").innerHTML="you pressed alphabet key";
	console.log(alphabetkey);

	}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function alphabetkey()
{
img_image="Alpkey.png";
add();
}
function numberkey()
{
	
}
function arrowkey()
img_image="arrowkey.png";
add();
{
}
function specialkey()
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}