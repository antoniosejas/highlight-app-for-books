var texto = ' \n\
/// <reference path="typings/angular2/angular2.d.ts" />\n\
import {\n\
	Component,\n\
	NgFor,\n\
	View,\n\
	bootstrap,\n\
} from "angular2/angular2";\n\
@Component({\n\
	selector: \'hola-mundo\'\n\
})\n\
@View({\n\
	directives: [NgFor],\n\
	template: `\n\
	<ul>\n\
		<li *ng-for="#nombre of nombres">Hola {{ nombre }}</li>\n\
	</ul>\n\
	`\n\
})\n\
class HolaMundo {\n\
	nombres: Array<string>;\n\
	constructor() {\n\
		this.nombres = [\'Javier\', \'Merche\', \'Octavio\', \'Palet Express\'];\n\
	}\n\
}\n\
bootstrap(HolaMundo);\n\
';

function htmlEntities(str) {
	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
// 
document.addEventListener("DOMContentLoaded", function() {
	console.log('dom ready');
	document.getElementById("code").innerHTML = htmlEntities(texto || document.getElementById("code").innerHTML);
	hljs.initHighlightingOnLoad();
});