let projects = [
    {
        title: "Expanding Cards",
        link: "expanding-cards/main.html"
    }
]

document.getElementById("grid").innerHTML = projects.map(itm => {
    return `
        <a class="card" id="cards" href=${itm.link}>
            <h2>${itm.title}</h2>
        </a>
    `
}).join("")