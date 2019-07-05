function submitt() {
	
	var xhr = new XMLHttpRequest();
	
  	xhr.onreadystatechange = function() {
	    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
      		alert(xhr.responseText);
  		}
  	};

	xhr.open("POST", "http://localhost:3000/users/", false);
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.send(JSON.stringify({login:"thierry@bigsool.com",password:"qwe"}));

}