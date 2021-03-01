function check(){
	let div = document.getElementById("input-checkbox");
	let checkbox = document.getElementById("accept-checkbox");
		if (checkbox.checked === false) {
			div.style.backgroundColor = "rgba(196, 196, 196, 0.4)";
		} else {
			div.style.backgroundColor = "#FFA800";
		}
}