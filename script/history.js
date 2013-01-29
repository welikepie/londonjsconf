
if(supports_history_api()){
	console.log("history!");
}
else{
	console.log("Or not...");
}

function supports_history_api() {
  return !!(window.history && history.pushState);
}

