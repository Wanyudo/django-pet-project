window.onload = function () {
	var on_mouse_over = function() {
		this.className = this.className + "hovered";
	}
	var on_mouse_out = function() {
		this.className = this.className.replace("hovered", "");
	}
	var items = document.getElementsByTagName('li');
	for (var i = 0; i < items.length; i++){
		items[i].addEventListener('mouseover', on_mouse_over);
		items[i].addEventListener('mouseout', on_mouse_out);
	}
    if (document.getElementById("medlink")){
        document.getElementById("medlink").style.backgroundColor = 'grey';
        document.getElementById("medlink").childNodes[0].innerHTML = 'Load liberal press';
    }
};