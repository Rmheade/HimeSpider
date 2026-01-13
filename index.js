/*
- Favorite button
- Something with featured games: maybe popup with a button...
*/

const searchBar = document.getElementById("search")
const gridTemp = document.querySelector("[temp]")
const gridContainer = document.getElementById("items")

let searchValue = ""

let itemList = []

let favs = []

let favtoggle = false

//Sorts the games alphebetically
let sortedGames = [...baseGames].sort((a, b) =>
  a.name.localeCompare(b.name)
)

//This changes the sorting method between A-Z, Z-A, or Recent
const changeSort = (selectedValue) => {
	var selectBox = document.getElementById("sort");
	localStorage.setItem('sort', selectedValue)
	if (selectedValue == 'az'){
		sortedGames = [...baseGames].sort((a, b) =>
		  a.name.localeCompare(b.name)
		)
		render()
	}else if (selectedValue == 'za'){
		sortedGames = [...baseGames].sort((a, b) =>
		  a.name.localeCompare(b.name)
		)
		sortedGames.reverse();
		render()
	}else if (selectedValue == 'ra'){
		sortedGames = [...baseGames].reverse()
		render()
	}
};



//This draws the games
const render = () => {
	gridContainer.innerHTML = ""
	//This renders all of the grid boxes onto the screen
	itemList = sortedGames.map(gridbox => {
	  const gridTempp = gridTemp.content.cloneNode(true).children[0]
	  const image = gridTempp.querySelector("[image]")
	  const text = gridTempp.querySelector("[text]")
	  const butt = gridTempp.querySelector("[butt]")
	  image.src = gridbox.image
	  gridTempp.setAttribute('onclick', `beep("${gridbox.url}")`);
	  butt.addEventListener('click', (e) => {
		  fav(gridbox.name, e)
	  })

	  //This determines if the heart is red or not
	  const svg = butt.querySelector('svg');
	  if (favs.includes(gridbox.name)){
		svg.classList.add("selected")
	  }else{
		svg.classList.remove("selected")
	  }
	  text.innerHTML = gridbox.name.replace(/\\n/g, '<br>')
	  gridContainer.append(gridTempp)
	  

	  //The rest will determine what shows and what doesn't.
	  let isVisible = true

	  if (searchValue && !gridbox.name.toLowerCase().includes(searchValue)){
		isVisible = false
	  }

	  if (favtoggle){
		isVisible = favs.includes(gridbox.name);
	  }
	 
	  gridTempp.classList.toggle("hide", !isVisible)

	  return { name: gridbox.name, image: gridbox.image, element: gridTempp }
	})
};

//Detects the searchbar
searchBar.addEventListener("input", e => {
  searchValue = e.target.value.toLowerCase()
  render()
})

//This allows the user to favorite
const fav = (choicegame, e) => {
	e.stopPropagation()
	if (favs.includes(choicegame)){
		favs.splice(favs.indexOf(choicegame), 1)
		localStorage.setItem("favs", JSON.stringify(favs));
	}else{
		favs.push(choicegame)
		localStorage.setItem("favs", JSON.stringify(favs));
	}
	render()
}

//This button only shows favorites
const toggleFavorites = () => {
	const heart  = document.getElementById("favheart")
	if (favtoggle == false){
		favtoggle = true
		heart.classList.add("selected")
	}else{
		favtoggle = false
		heart.classList.remove("selected")
	}
	render()
}



//sorry about the name, but I had to. This just fullscreens the game. It used to be more complicated, so it feels small now.
const beep = (url) => {
	game = document.querySelector("[game]");
	game.src = url
	game.requestFullscreen?.();
}

//this clears the iframe to make it so it doesn't lag in the background
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    document.querySelector("[game]").src = "";
  }
});

//Sets the favorites list upon load
if (localStorage.getItem("favs")){
	favs = JSON.parse(localStorage.getItem("favs"))
}else {
	favs = []
}

//This grabs what the most recent sort mode was on load
if (localStorage.getItem('sort')){
	changeSort(localStorage.getItem('sort'))
}

render()