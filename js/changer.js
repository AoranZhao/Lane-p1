var image = document.getElementById('img');
var img_style = image.style;

/* availabel action list */
var items1 = document.getElementById('items1');
Sortable.create(items1, {
	group: 'omega',
	onAdd: function(evt) {
		itemEl = evt.item;
		change1(itemEl);
	}
});

/* applied action list */
var items2 = document.getElementById('items2');
Sortable.create(items2, {
	group: 'omega',
	onAdd: function(evt) {
		itemEl = evt.item;
		change2(itemEl);
	}
});

/* use FIleReader to upload image */
function readURL() {
	console.log(uploadedImage);
	path = document.getElementById('uploadedImage').value;
	if (typeof FileReader == 'undefined') {
		alert("Browser not support FileReader, please change a browser.");
	} else {
		var reader = new FileReader();
		reader.readAsDataURL(document.getElementById('uploadedImage').files[0]);
		reader.onload = function(e) {
			image.src = this.result;
		}
	}
}

/* triggered when drag action into Applied Actions List */
function change2(obj) {
	if (obj.id) {
		switch(obj.id) {
			case "rotate":
				img_style.transform += "rotate(45deg) ";
				break;
			case "translate":
				img_style.transform += "translateX(-40px) ";
				break;
			case "scale":
				img_style.transform += "scale(0.5, 0.5) ";
				break;
			case "opacity":
				img_style.opacity = "0.5";
				break;
			default:
				break;
		}
	}
	
}

/* triggered when drag action back into Available Actions List */
function change1(obj) {
	if (obj.id) {
		switch(obj.id) {
			case "rotate":
				temp = img_style.transform.split("rotate(45deg)").join("").trim();
				img_style.transform = temp;
				break;
			case "translate":
				temp = img_style.transform.split("translateX(-40px)").join("").trim();
				img_style.transform = temp;
				break;
			case "scale":
				temp = img_style.transform.split("scale(0.5, 0.5)").join("").trim();
				img_style.transform = temp;
				break;
			case "opacity":
				img_style.opacity = "1";
				break;
			default:
				break;
		}
	}
}