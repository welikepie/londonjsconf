function formSubmit(){
	 var xhReq = new XMLHttpRequest();
 xhReq.open("POST", "serverside/listSubscribe.php", true);
 xhReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhReq.send("EMAIL=" + document.getElementById("mce-EMAIL").value);
 xhReq.onreadystatechange = function() {
   if (xhReq.readyState != 4)  { return; }
   var serverResponse = xhReq.responseText;
   if(JSON.parse(serverResponse).response == "success"){
   	document.getElementById("mce-EMAIL").value = "subscribed";
   }
   else if(JSON.parse(serverResponse).response == "error"){
   	document.getElementById("mce-EMAIL").value = "oops";
	}
 };
	return false;
}
