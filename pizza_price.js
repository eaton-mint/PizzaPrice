
let pieCount		= 0;
let daemonActive	= false;



function newPie(){
	//creates a NewPie box
	++pieCount;
	newDivName = "Pie" + pieCount.toString();
	newPieDiv  = '<div class="pizzaPie" id=' + newDivName + '></div>';
	document.getElementById("mainArea").innerHTML += newPieDiv;

	newPieElement = document.getElementById(newDivName);

	//data Entry Area
	newPieElement.innerHTML += "<table><tr><td>Diameter(inches)</td><td><input type=\"number\" step=\"1\" class=\"input\" id=\"size" + newDivName + "\"></td></tr><tr><td>Cost($)</td><td><input type=\"number\" step=\"0.01\" class=\"input\" id=\"price" + newDivName + "\"></td></tr></table>"

	//result area
	newPieElement.innerHTML += "<div id=\"result" + newDivName + "\">  </div>  "

	//close button
	newPieElement.innerHTML += '<button class="button" onClick="this.parentElement.remove()">Remove</button>';

	//check to see if calculate daemon already created
	if(daemonActive){
		//create daemon
	} 
	
}//end newPie()



function calculatePrices(){
	//get a list of all pies in mainArea div
	//this will be all children in mainArea div with the class pizzaPie
	let allPies   = document.getElementsByClassName("pizzaPie");
	let allPrices = [];

	if(allPies.length !=0){
		for(let i =0; i < allPies.length; i++){
		//iterate over list of these pie divs
			
			let currentPie = allPies[i].id;
			
			//get size and price variables
			let price   = Number(document.getElementById("price" + currentPie).value);
			let radius  = Number(document.getElementById("size"  + currentPie).value) / 2;
			
			//is valid values?
			if((price > 0 && !isNaN(price)) || (radius > 0 && !isNaN(radius))){
				//calculate price/unit size
				let pieArea    = (3.14159) * radius * radius;
				let costResult = price / pieArea;

				//write this calculated value to output element
				document.getElementById("result" + currentPie).innerHTML = "Price/Sq.In. = $" + String(costResult.toFixed(2));
				allPrices[i] = costResult;
			} else {
				document.getElementById("result" + currentPie).innerHTML = "Price/Sq.In. = $ 0.00";
				allPrices[i] = 0;
			}
		}
	}

	//find best price
	highlightLowestPrice(allPies, allPrices);
}//end calculatePrices()



function highlightLowestPrice(pies, prices){
	//variables
	let currentLowest 	= 0;
	
	//find current lowest price 
	for(let i = 0;i<pies.length; i++){
		if(prices[i] == 0){
			//is this number 0?
			//do nothing
		} else if(currentLowest == 0 || prices[i] < currentLowest){
			currentLowest = prices[i];	
		} 
	}

	//change highlights
	if(currentLowest == 0){
		return 0;
	}
	for(let i =0; i<pies.length; i++){
		if(prices[i] == currentLowest){
			pies[i].classList.add("bestPricePie")
		}else if(pies[i].classList.contains("bestPricePie")){
			pies[i].classList.remove("bestPricePie")
		}
	}

}//end highlightLowestPrice()