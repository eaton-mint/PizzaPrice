
let pieCount		= 0;




function newPie(){
	//creates a NewPie box
	++pieCount;
	newDivName = "Pie" + pieCount.toString();
	newPieDiv  = '<div class="pizzaPie" id=' + newDivName + '>' + newDivName + '\n</div>';
	document.getElementById("mainArea").innerHTML += newPieDiv;

	newPieElement = document.getElementById(newDivName);

	//data Entry Area
	newPieElement.innerHTML += "<table><tr><td>Size(inches)</td><td></td></tr><tr><td>Cost($)</td><td></td></tr></table>"

	//close button
	newPieElement.innerHTML += '<button class="pieButton" onClick="this.parentElement.remove()">Remove</button>';

}//end drawBlueBox()


