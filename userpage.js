

function state ()
{
	var state_name = document.getElementById("selec").value;
	
	var a = "South india";
	var b = "North india";
	
	if(state_name == a)
	{
		document.getElementById("frame").style.display="inline";
		var sframe=document.getElementById("frame")
		sframe.setAttribute("src","south.html");
		
	}
	else if(state_name == b)	
	{
		document.getElementById("frame").style.display="inline";
		var sframe=document.getElementById("frame")
		sframe.setAttribute("src","north.html");
	}
	else
	{
		document.getElementById("frame").style.display="none";
	}
		
	
}


function north ()
{
	
		document.getElementById("mapframe").style.display="inline";
		var sframe=document.getElementById("mapframe")
		sframe.setAttribute("src","north.html");
	
}

function south ()
{
	
		document.getElementById("mapframe").style.display="inline";
		var sframe=document.getElementById("mapframe")
		sframe.setAttribute("src","south.html");
}

function out ()
{
	if (confirm("Are u sure wanna logout!"))
  {
    window.location.href = "./login.html";
  } 
  else 
  {
    alert("logout cancelled")
  }
	
};


