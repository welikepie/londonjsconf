var submitted = false;

setInterval(function() {
	//console.log("testing");
	if (submitted == true) {
		document.getElementById("MERGE0").value = null;
		submitted = false;
	}
}, 1000);

function formsubmit() {
	document.getElementById("success").innerHTML = "";
	document.getElementById("error").innerHTML = "";
	//console.log("being called");
	var x = document.forms["signup"]["MERGE0"].value;
	//console.log(x);

	if (x.length == 0) {
		//console.log("0");
		document.getElementById("error").innerHTML = "Seems like this is empty!";
		return false;
	} else if (x.indexOf("@") == -1) {
		//console.log("1");
		document.getElementById("error").innerHTML = "Seems like the '@' went missing!";
		return false;
	} else if (x.indexOf("@") == 0) {
		//console.log("2");
		document.getElementById("error").innerHTML = "Seems like there's no recipient!";
		return false;
	} else if (x.lastIndexOf(".") < x.indexOf("@")) {
		//console.log("3");
		document.getElementById("error").innerHTML = "Seems like there's no country extension!";
		return false;
	} else if ((x.lastIndexOf(".") - x.indexOf("@")) < 2) {
		//console.log("4");
		document.getElementById("error").innerHTML = "Seems like a domain is missing!";
		return false;
	}
	else if(x.lastIndexOf(".") == x.length-1){
		document.getElementById("error").innerHTML = "Seems like there's no country extension!";
		return false;
	}
	document.getElementById("success").innerHTML = "We seem to have a valid email! Check your email to confirm!";
	submitted = true;
	return true;
}
