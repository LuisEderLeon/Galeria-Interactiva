var submit = document.getElementById("submit");
var urlElement = document.getElementById("url");
var titleElement = document.getElementById("title");
var gallery = document.getElementById("gallery");
if (localStorage.getItem("gallery") != null){
    gallery.innerHTML = localStorage.getItem("gallery");
}
var buttonsDelete;
var buttonsInfo;

submit.addEventListener("click", () => {
    let url = urlElement.value;
    let title = titleElement.value;
    let picture = `<figure id="${title}">
    <h3>${title}</h3>
    <img src="${url}" alt="${title}">
    <nav>
        <button class="delete" id="${title}">Eliminar</button>
        <button class="info" id="${title}">Mas Info</button>
    </nav>
</figure>`
    gallery.innerHTML += picture
    localStorage.setItem("gallery",gallery.innerHTML)

    buttonsDelete = document.getElementsByClassName("delete");
    buttonsInfo = document.getElementsByClassName("info");
    console.log(buttonsInfo)
    updateButtons()
});

function updateButtons(){
    Array.from(buttonsDelete).forEach(button => {
        button.addEventListener("click", () => {
            let figures = document.getElementsByTagName("figure");
            Array.from(figures).forEach(figure => {
                if (figure.id === button.id) {
                    gallery.removeChild(figure);
                    localStorage.setItem("gallery",gallery.innerHTML)
                }
            });
        });
    });

    Array.from(buttonsInfo).forEach(button => {
        button.addEventListener("click", () => {
            let figures = document.getElementsByTagName("figure");
            Array.from(figures).forEach(figure => {
                if (figure.id === button.id) {
                    figure.classList.toggle("expand")
                    console.log("Expandido")
                }
            });
        })
    })
}