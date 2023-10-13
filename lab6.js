function imgleft() {
	document.getElementById("imdog").style.width = "10%";
	document.getElementById("imcat").style.width = "90%";
	document.getElementById("dog").style.width = "0px";
	document.getElementById("dog").style.padding = "10px 35px 90px 35px";
	document.getElementById("cat").style.width = "calc(100% - 20px)";
	document.getElementById("cat").style.padding = "10px 10px 90px 10px";
}

function imgright() {
	document.getElementById("imcat").style.width = "10%";
	document.getElementById("imdog").style.width = "90%";
	document.getElementById("cat").style.width = "0px";
	document.getElementById("cat").style.padding = "10px 35px 90px 35px";
	document.getElementById("dog").style.width = "calc(100% - 20px)";
	document.getElementById("dog").style.padding = "10px 10px 90px 10px";
}

function imgdefault() {
	document.getElementById("imdog").style.width = "50%";
	document.getElementById("imcat").style.width = "50%";
	document.getElementById("dog").style.width = "calc(100% - 20px)";
	document.getElementById("dog").style.padding = "10px 10px 90px 10px";
	document.getElementById("cat").style.width = "calc(100% - 20px)";
	document.getElementById("cat").style.padding = "10px 10px 90px 10px";
}