const politicsJSON = [
	// First Stage
	{
		title: 'Vereador',
		numbers: 5,
		politics: 
		[
			// First Politician
			{
				number: '49222',
				name: 'Politics 1',
				party: 'A',
				photo:
				[
					{ url: '../images/biden.jpg', legend: 'Biden', class: 'big', position: 'Vereador' }
				]
			},
			// Second Politician
			{
				number: '88333',
				name: 'Politics 2',
				party: 'B',
				photo:
				[
					{ url: '../images/obama.jpg', legend: 'Obama', class: 'big', position: 'Vereador' }
				]
			}
		]
	},

	// Second Stage
	{
		title: 'Prefeito',
		numbers: 2,
		politics: 
		[
			// First Politician
			{
				number: '12',
				name: 'Politics 3',
				party: 'A',
				vice: 'Obama',
				photo:
				[
					{ url: '../images/biden.jpg', legend: 'Biden', big: true, position: 'Prefeito' },
					{ url: '../images/obama.jpg', legend: 'Obama', small: true, position: 'Vice-Prefeito' }
				]
			},
			// Second Politician
			{
				number: '24',
				name: 'Politics 4',
				party: 'B',
				vice: 'Biden',
				photo:
				[
					{ url: '../images/obama.jpg', legend: 'Obama', big: true, position: 'Prefeito' },
					{ url: '../images/biden.jpg', legend: 'Biden', small: true, position: 'Vice-Prefeito'}
				]
			}
		]
	}
];