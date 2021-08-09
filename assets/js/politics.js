const politicsJSON = [
	// First Stage
	{
		title: 'Vereador',
		numbers: 5,
		politics: 
		[
			// First Politician
			{
				number: 49222,
				name: 'Politics 1',
				party: 'A',
				photo:
				[
					{
						url: '../images/biden.jpg'
					}
				]
			},
			// Second Politician
			{
				number: 88333,
				name: 'Politics 2',
				party: 'B',
				photo:
				[
					{
						url: '../images/obama.jpg'
					}
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
				number: 12,
				name: 'Politics 3',
				party: 'A',
				vice: 'Obama',
				photo:
				[
					{ url: '../images/biden.jpg' },
					{ url: '../images/obama.jpg', small: true }
				]
			},
			// Second Politician
			{
				number: 24,
				name: 'Politics 4',
				party: 'B',
				vice: 'Biden',
				photo:
				[
					{ url: '../images/obama.jpg' },
					{ url: '../images/biden.jpg', small: true }
				]
			}
		]
	}
];