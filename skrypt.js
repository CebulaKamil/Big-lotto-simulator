//I'm downloading a button from the page
const buttonReset = document.getElementById("reset");
const allDiv = document.querySelectorAll("div");

//Create arrays
const resultCheck = [];
const divArray = [];
const divArrayCheck = [];
const divArrayCheckNumber = [];


//Random function
const randomSixNumbers = function() {
	function getRandomNumbers ( amount = 6 ) {
		const result = [];
		while ( result.length < amount ) {
			const score = Math.floor( Math.random() * 49 + 1 );
			if ( !result.includes( score ) ) {
				result.push(score);
			}
		}
	return result.sort();
	}
	function displayNumbers ( numbers, container = document.body ) {
		numbers.forEach( ( number ) => {
			const div = document.createElement( 'div' );
			divArray.push(div);
			div.textContent = number;
			container.appendChild( div );
		} );	
	}
	displayNumbers( getRandomNumbers() );
}

//Check function
const check = function() {
			function getRandomNumbers ( amount = 6 ) {
				while ( resultCheck.length < amount ) {
					const score = Math.floor( Math.random() * 49 + 1 );
					if ( !resultCheck.includes( score ) ) {
						resultCheck.push(score);
					}
				}
				return resultCheck.sort();
			}
		function displayNumbers ( numbers, container = document.body ) {
			numbers.forEach( ( number ) => {
				const div = document.createElement( 'div' );
				div.textContent = number;
				div.className = ("check");
				divArrayCheck.push(div);
				container.appendChild( div );
			} );  
		}
		displayNumbers( getRandomNumbers() );
		for ( i=0; i<6; i++) {
				let divContentasd = parseInt(divArray[i].textContent);
				divArrayCheckNumber.push(divContentasd);
					if ( divArrayCheckNumber.includes(resultCheck[i])) {
						divArrayCheck[i].className = ("hit");
					}	
			}
}

//Function reload
const reset = function() {
    location.reload()
}

buttonReset.addEventListener("click",reset);
window.onload = randomSixNumbers();
window.onload = check();