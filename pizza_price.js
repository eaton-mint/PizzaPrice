
let pieCount		= 0;


function newPie(){
	//creates a NewPie box
	++pieCount;
	newDivName = "Pie" + pieCount.toString();
	newPieDiv  = '<div class="pizzaPie" id=' + newDivName + '>' + newDivName + '\n</div>';
	document.getElementById("mainArea").innerHTML += newPieDiv;

	newPieElement = document.getElementById(newDivName);

	//data Entry Area
	newPieElement.innerHTML += "<table><tr><td>Size(inches)</td><td><input type=\"number\" step=\"1\" class=\"input\" id=\"size" + newDivName + "\"></td></tr><tr><td>Cost($)</td><td><input type=\"number\" step=\"0.01\" class=\"input\" id=\"price" + newDivName + "\"></td></tr></table>"

	//close button
	newPieElement.innerHTML += '<button class="button" onClick="this.parentElement.remove()">Remove</button>';

}//end drawBlueBox()


