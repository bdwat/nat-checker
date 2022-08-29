function dizer() {
	let nationality = document.querySelector("#nat");
	let res = document.querySelector(".result");
	let nac = nationality.value;
	let nat = nac.toLowerCase();
	if (nat == "brasileiro") {
		res.innerText = "5 copas";
	} else {
		res.innerText = "VAZA DAQUI GRINGO SAFADO";
	}
}
