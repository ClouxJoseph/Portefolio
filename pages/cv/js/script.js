var couleur = document.getElementById("bodycss");

function changecolor(){
	couleur.style.background = "url('https://images.unsplash.com/photo-1466428996289-fb355538da1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')";
	couleur.style.backgroundSize = "cover";
	couleur.style.transition = "1s";
	console.log(couleur);
}; 

function hide() {
	bodycss.classList.add("hidden")
};