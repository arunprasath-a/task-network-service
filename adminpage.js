
function fun (){
var key=localStorage.length;
for(var i=0; i<key; i++)
{
//var val=Object.assign({},JSON.parse(localStorage.getItem(i)));
var user = JSON.parse(localStorage.getItem(i));
document.getElementById("try").innerHTML +="<ul>"+"<li>"+"<b>"+"name:"+"</b>"+ user.name +" "+"<b>"+"pass:"+"</b>"+ user.passkey+" "+"<b>"+"status:"+"</b>"+ user.statu+"</li>"+"</ul>" ;
}
};
fun ();




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

function adminval ()
{
	var a=document.getElementById("admininp").value;
	alert(a);
}


function approve()
{
	document.getElementById("try").innerHTML="";
	var app="approved";
	var key=localStorage.length;
	for(var i=0; i<key; i++)
	{
	var values = JSON.parse(localStorage.getItem(i));
	values.statu ="approved";
	localStorage.setItem(i, JSON.stringify({name: values.name,passkey: values.passkey,statu:values.statu}));
	console.log(values);
	var user = JSON.parse(localStorage.getItem(i));
document.getElementById("try").innerHTML +="<ul>"+"<li>"+"<b>"+"name:"+"</b>"+ user.name +" "+"<b>"+"pass:"+"</b>"+ user.passkey+" "+"<b>"+"status:"+"</b>"+ user.statu+"</li>"+"</ul>" ;
	}
	
}


