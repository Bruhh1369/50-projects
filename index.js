let projects = [
    {
        title: "Expanding Cards",
        link: "expanding-cards/main.html",
        deployedLink: "https://50-projects-pi.vercel.app/expanding-cards/main.html"
    }
]

document.getElementById("grid").innerHTML = projects.map(itm => {
    return `
        <a class="card" id="cards" href=${itm.link}>
            <iframe src=${itm.deployedLink}</iframe>
            <h2>${itm.title}</h2>
        </a>
    `
}).join("")