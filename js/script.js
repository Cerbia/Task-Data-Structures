var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];


function readData(data){
	let content = "";
	for(i in data){
		content += generateBox(data[i]);
	}
	return content;
}

function generateBox(boxObj) {
	let classString = "";
	if(boxObj.categories.length>0) {

		for(let cat in boxObj.categories){
			classString+=`${boxObj.categories[cat]} `;
		}
		
	}
	return elementHTML = `<div class="box ${classString}" id=${boxObj.id}><header><title>${boxObj.title}</title></header>${boxObj.content}</div>`;
}

document.write(readData(data));
