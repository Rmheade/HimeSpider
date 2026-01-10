/*
- Favorite button
- Something with featured games: maybe popup with a button...
*/

const searchBar = document.getElementById("search")
const gridTemp = document.querySelector("[temp]")
const gridContainer = document.getElementById("items")
const gameTemp = document.querySelector("[temp2]")

let itemList = []

let favs = []

let favtoggle = false

if (localStorage.getItem("favs")){
	favs = JSON.parse(localStorage.getItem("favs"))
}else {
	favs = []
}

searchBar.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  itemList.forEach(item => {
    const isVisible =
      item.name.toLowerCase().includes(value)
    item.element.classList.toggle("hide", !isVisible)
  })
})

let sortedGames = [...baseGames].sort((a, b) =>
  a.name.localeCompare(b.name)
)

const render = () => {
	gridContainer.innerHTML = ""
	itemList = sortedGames.map(gridbox => {
	  const gridTempp = gridTemp.content.cloneNode(true).children[0]
	  const image = gridTempp.querySelector("[image]")
	  const text = gridTempp.querySelector("[text]")
	  const box = gridTempp.querySelector("[boxx]")
	  const butt = gridTempp.querySelector("[butt]")
	  image.src = gridbox.image.src
	  gridTempp.setAttribute('onclick', `beep("${gridbox.url}")`);
	  butt.addEventListener('click', (e) => {
		  fav(gridbox.name, e)
	  })

	  const svg = butt.querySelector('svg');
	  if (favs.includes(gridbox.name)){
		svg.classList.add("selected")
	  }else{
		svg.classList.remove("selected")
	  }
	  text.innerHTML = gridbox.name.replace(/\\n/g, '<br>')
	  gridContainer.append(gridTempp)
	  return { name: gridbox.name, image: gridbox.image, element: gridTempp }
	})
};

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

if (localStorage.getItem('sort')){
	changeSort(localStorage.getItem('sort'))
}

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

const toggleFavorites = () => {
	const heart  = document.getElementById("favheart")
	if (favtoggle == false){
		favtoggle = true
		heart.classList.add("selected")
		itemList.forEach(item => {
		    const isVisible = favs.includes(item.name);
		    item.element.classList.toggle("hide", !isVisible);
		})
	}else{
		favtoggle = false
		heart.classList.remove("selected")
		itemList.forEach(item => {
		    item.element.classList.remove("hide");
		})
	}
}

/*
searchBar.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  itemList.forEach(item => {
    const isVisible =
      item.name.toLowerCase().includes(value)
    item.element.classList.toggle("hide", !isVisible)
  })
})
*/

render()