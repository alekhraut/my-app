declare var domtoimage: any;
declare var jsPDF: any;
import { Component } from'@angular/core';

@Component({
	selector:'export',
	templateUrl: './export.html'
})

export class ExportComponent {

	getBodyElement(){
		let node = document.getElementById('bodyId');

	console.log('node', node);

		new domtoimage.toPng(node)
	    .then(function (dataUrl) {
	        var img = new Image();
	        img.src = dataUrl;
	        document.body.appendChild(img);
	        console.log('img', img)


			var doc = new jsPDF()

			doc.setFontSize(40)
			doc.text(35, 25, 'jsPDF')
			doc.addImage(img, 'PNG', 15, 40, 180, 160);
			doc.save('a4.pdf')
	    })
	    .catch(function (error) {
	        console.error('oops, something went wrong!', error);
	    });


	}

	
};
