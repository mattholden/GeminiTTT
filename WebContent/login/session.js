
var MY_SESSION = null;
var MY_PLAYERID = null;
var MY_USERNAME = null;
var POST_URL = "http://localhost:8080";

// Shorthand for posting and sending the data through our ghetto handler system
function post(postdata) { 
	// will be null if we haven't logged in yet
	if (MY_SESSION != null) { 
		postdata.session = MY_SESSION;
	}
	$.ajax({
		type:"POST",
		url:POST_URL, 
		data:"json="+postdata,
		dataType:"json",
		success:function(data, textStatus, thingy) { 
			alert(data);
			var messages = eval(data);
			messages.forEach(postCallback);
		}});
	alert("post done?");
};

// A function to call the correct handler for any message that comes in.
var postCallback = function(data, index, messages) { 
	document.write(data);
	alert(data);
	var action = data.action;
	var handler = SYSTEM_HANDLERS[action];
	if (handler != null) { 
		handler(data);
	}
	var handler2 = UI_HANDLERS[action];
	if (handler2 != null) { 
		handler2(data);
	}
	
};

// function to send the login message to the server
function login(user, pass) { 
	MY_USERNAME = user;
	var browser = navigator.userAgent;
	post('{"action":'+ACTIONS.login+',"username":"'+user+'","password":"'+pass+'","client":"'+browser+'"}');
};

// handler for the login message
SYSTEM_HANDLERS[ACTIONS.login] = function(data) { 
	MY_SESSION = data.session;
	MY_PLAYERID = data.playerid;
	alert(MY_SESSION);	
};

