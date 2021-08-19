// Query Selectors
const qs = e => document.querySelector( e );
const qsa = e => document.querySelectorAll( e );

// Variables
	// Left
	let vote = qs( '.content-left-1 span' );
	let position = qs( '.content-left-2 span' );
	let numbers = qs( '.content-left-3' );
	let description = qs( '.content-left-4 ' );
	let warn = qs( '.info' );
	let whiteVote = false;

	// Right
	let contentRight = qs( '.content-right' );

	// Control System
	let actualStage = 0;
	let typedNumber = '';

	function beginStage() {
		let stage = politicsJSON[actualStage];
		numbers.style.display = 'block';
		let htmlNumber = '';

		for (let i = 0; i < stage.numbers; i++) {
			if (i === 0) {
				htmlNumber += '<span class="number blink"></span>'
			} else {
				htmlNumber += '<span class="number"></span>'
			}
		}

		vote.style.display = 'none';
		position.innerHTML = stage.title;
		description.innerHTML = '';
		warn.style.display = 'none';
		contentRight.innerHTML = '';
		numbers.innerHTML = htmlNumber;
	}

// Functions
function updateInterface() {
	let stage = politicsJSON[ actualStage ];
	let politician = stage.politics.filter( item => {
		if ( item.number === typedNumber ) {
			return true;
		} else {
			return false;
		}
	});

	if (politician.length > 0){
		politician = politician[0];
		vote.style.display = 'block';
		description.innerHTML = `Nome: ${politician.name} </br> Partido: ${politician.party}`;
		warn.style.display = 'block';

		let htmlPhotos = '';

		for (let i in politician.photo) {
			htmlPhotos += 
				`<div class="right-image ${politician.photo[i].class}">
					<img src="assets/images/${politician.photo[i].url}" alt="${politician.photo[i].legend}">
					${politician.photo[i].position}
				</div>`
;		}

		contentRight.innerHTML = htmlPhotos;
	} else {
		vote.style.display = 'block';
		warn.style.display = 'block';
		description.innerHTML = '<div class="big-warn blink">Voto Nulo</div>'
	}

	console.log( politician )
}

function clicked( n ) {
	let number = qs( '.number.blink' );
	
	if (number !== null) {
		number.innerHTML = n;
		typedNumber += n;

		number.classList.remove( 'blink' );
		
		if (number.nextElementSibling !== null) {
			number.nextElementSibling.classList.add( 'blink' );
		} else {
			updateInterface();
		}
	}
}


function white() {
	if (typedNumber === '') {
		whiteVote = true;
		vote.style.display = 'block';
		warn.style.display = 'block'
		numbers.style.display = 'none';
		description.innerHTML = '<div class="big-warn blink">Voto em branco</div>'
	}
}

function del() {
	beginStage();
}


function confirm() {
	let stage = politicsJSON[ actualStage ];
	let confirmedVote = false

	if (whiteVote === true) {
		confirmedVote = true;
		console.log('Voto Branco');
	} else if (typedNumber.length === stage.numbers) {
		confirmedVote = true;
		console.log('Voto confirmado')
	}

	if (confirmedVote) {
		actualStage++;
		
		if (politicsJSON[actualStage] !== undefined) {
			typedNumber = '';
			beginStage();
		} else {
			qs( '.screen' ).innerHTML = '<div class="end blink">Fim</div>' ;
		}
	}
}

// Function Execution
beginStage();