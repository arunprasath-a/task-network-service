
function fn_user_login()
{
	var key= localStorage.length;

	var cred={
		uname : document.getElementById("inp1").value,
		upass : document.getElementById("inp2").value,
	}
	
	//console.log(cred);
	//var data={};
	//values=JSON.parse(localStorage.getItem);
	//JSON.parse(localStorage.getItem("users"));	
	//var arun=JSON.parse(localStorage);
	//console.log(arun);
	for(var i=0; i<key; )
		{
			var localval = Object.assign({}, JSON.parse(localStorage.getItem(i)));
			//console.log(data);
				if(localval.name == cred.uname && localval.passkey == cred.upass && localval.statu != "Not Approved")
				{
					alert("successful");
					window.location.href = "./userpage.html";
					return false;
				}
				else
				{
					i++;
				}
		}
	alert("wrong credentials");

};

function fn_user_signup()
{
	var key= localStorage.length;
	
	var cred={
		uname : document.getElementById("inp1").value,
		upass : document.getElementById("inp2").value,
	}
	
	for(var i=0; i<key; )
		{
			var localval = Object.assign({}, JSON.parse(localStorage.getItem(i)));
			//console.log(data);
				if(localval.name == cred.uname)
				{
					alert("same name");
					return false;
				}
				else
				{
					i++;
				}
		}
	localStorage.setItem(key, JSON.stringify({name: cred.uname,passkey: cred.upass,statu:"Not Approved"}));
	
};

function fn_admin_login()
{
	var name="arun";
	var pass="arun";
	var key= localStorage.length;
	
	//localStorage.setItem(key, JSON.stringify({name: name,passkey: pass}));
	
	var cred={
		uname : document.getElementById("inp3").value,
		upass : document.getElementById("inp4").value,
	}
	
	if(name == cred.uname && pass == cred.upass)
	{
		alert("success");
		window.location.href = "./adminpage.html";
	}
	else
	{
		alert("not success");
	}
	
}


function fn_admin_signup() 
{
	
	var name="arun";
	var pass="arun";
	
	var key= localStorage.length;
	
	
	
	var cred={
		uname : document.getElementById("inp3").value,
		upass : document.getElementById("inp4").value,
	}
	
	
	for(var i=0; i<key; )
		{
			var localval = Object.assign({}, JSON.parse(localStorage.getItem(i)));
			//console.log(data);
				if(localval.name == cred.uname)
				{
					alert("same name");
					return false;
				}
				else
				{
					i++;
				}
		}
	localStorage.setItem(key, JSON.stringify({name: name,passkey: pass,statu:""}));
	
		
};


