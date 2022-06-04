
var book = ePub("/just_poor.epub");
var rendition = book.renderTo("reader", {
	manager: "continuous",
	flow: "paginated",
	width: '100%', 
	height: '100%', 
	"allowScriptedContent": true
});


var displayed = rendition.display();
rendition.themes.default("book.css")

//--- NAV ELEMENTS ---//
var next = document.getElementById("next");
next.addEventListener("click", function(){
	rendition.next();
}, false);

var prev = document.getElementById("prev");
prev.addEventListener("click", function(){
	rendition.prev();
}, false);



//--- TOC ---//
book.loaded.navigation.then(function(toc){
	console.log(book);
	var $select = document.getElementById("toc"),
			docfrag = document.createDocumentFragment();

	console.log(toc)

	toc.forEach(function(chapter) {
		var option = document.createElement("option");
		option.textContent = chapter.label;
		option.setAttribute("ref", chapter.href);

		docfrag.appendChild(option);
	});

	$select.appendChild(docfrag);

	$select.onchange = function(){
			var index = $select.selectedIndex,
					url = $select.options[index].getAttribute("ref");
			
			rendition.display(url);
			window.location.hash = '#'+url;
			console.log(url)
			return false;
	};

	// Move to hash location
	var current_nav = decodeURI(window.location.hash).replace(/^#/i, '');
	console.log(current_nav)
	rendition.display(current_nav);

});

// var toc = document.querySelector("toc");
rendition.on("rendered", function(section){

	//book.navigation.toc.forEach(i => {
	//	toc
	//})

	var current = book.navigation && book.navigation.get(section.href);
	
	if (current) {
		var $select = document.getElementById("toc");
		var $selected = $select.querySelector("option[selected]");
		if ($selected) {
			$selected.removeAttribute("selected");
		}

		var $options = $select.querySelectorAll("option");
		for (var i = 0; i < $options.length; ++i) {
			let selected = $options[i].getAttribute("ref") === current.href;
			if (selected) {
				$options[i].setAttribute("selected", "");
			}
		}
	}

});


