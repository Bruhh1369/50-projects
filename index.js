let projects = [
    {
        title: "Expanding Cards",
        link: "expanding-cards/main.html",
        deployedLink: "https://50-projects-pi.vercel.app/expanding-cards/main.html"
    },
    {
        title: "",
        link: "",
        deployedLink: ""
    },
    {
        title: "Progress Steps",
        link: "progress-steps/main.html",
        deployedLink: "https://50-projects-pi.vercel.app/progress-steps/main.html"
    }
]

document.getElementById("grid").innerHTML = projects.map(itm => {
    return `
        <a class="card" id="cards" href=${itm.link}>
            <h2>${itm.title}</h2>
            <iframe src="${itm.link || itm.deployedLink}"</iframe>
        </a>
    `
}).join("")