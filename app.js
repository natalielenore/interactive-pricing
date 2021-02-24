var slider = document.getElementById("myRange");
var output = document.getElementById("pv-num");
var monies = document.getElementById("dollars");
var checkbox = document.getElementById("check");



document.getElementById("myRange").oninput = function () {
    var value = ((this.value - this.min) / (this.max - this.min)) * 100;
    this.style.background =
        "linear-gradient(to right, var(--soft_cyan) 0%, var(--soft_cyan) " +
        value +
        "%, var(--light_gray_blue) " +
        value +
        "%, var(--light_gray_blue) 100%)";

};




function change_values(discount, cur) {


		switch (true) {
		case cur < 100:
			output.innerHTML = "10K";
			monies.innerHTML = "$8.00";
			dis = "$6.00";
			break;
		case cur < 200:
			output.innerHTML = "50K";
			monies.innerHTML = "$12.00";
			dis = "$9.00";
			break;
		case cur < 300:
			output.innerHTML = "100K";
			monies.innerHTML = "$16.00";
			dis = "$12.00";
			break;
		case cur < 400:
			output.innerHTML = "500K";
			monies.innerHTML = "$24.00";
			dis = "$18.00";
			break;
		case cur == 400:
			output.innerHTML = "1M";
			monies.innerHTML = "$36.00";
			dis = "$27.00";
			break;
		}
		console.log(discount)
		
		if (discount) {
			console.log("hi")
			monies.innerHTML = dis;
		}
}





function main() {

	checkbox.addEventListener('change', () => change_values(checkbox.checked, slider.value));
	slider.addEventListener("input", () => change_values(checkbox.checked, slider.value));
}


main();









