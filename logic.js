const Projects = [
    {
        title: "Urjo",
        status: "Finished",
        contributors: "Yes"
    },
    {
        title: "Simple Scheduler",
        status: "Finished",
        contributors: "Yes"
    },
    {
        title: "Cifrado de texto",
        status: "In Progress",
        contributors: "No"
    },
    {
        title: "Scheduler Manager",
        status: "Finished",
        contributors: "Yes"
    },
    {
        title: "Hitori Puzzle",
        status: "Finished",
        contributors: "No"
    },
    {
        title: "Tabular Data Manager",
        status: "Finished",
        contributors: "Yes"
    }
]


const container = document.querySelector("#projects aside");
const gitHubLink = container.querySelector("p"); 

const table = document.createElement("table");
table.id = "projectsContainer";

const headerCointainer = document.createElement("tr");

const headerNames = document.createElement("th");
headerNames.textContent = "Project Name";
headerCointainer.appendChild(headerNames);

const headerStatus = document.createElement("th");
headerStatus.textContent = "Status";
headerCointainer.appendChild(headerStatus);

const headerContributors = document.createElement("th");
headerContributors.textContent = "Contributors";
headerCointainer.appendChild(headerContributors);

table.appendChild(headerCointainer);

Projects.forEach(project => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = project.title;

    const statusCell = document.createElement("td");
    statusCell.textContent = project.status;

    const contributorsCell = document.createElement("td");
    contributorsCell.textContent = project.contributors;

    row.appendChild(titleCell);
    row.appendChild(statusCell);
    row.appendChild(contributorsCell);
    table.appendChild(row);
});

container.insertBefore(table, gitHubLink);

// TODO
// Agregar el filtrado para la tabla creada
// Agregar un modo oscuro para que cambie toda la pagina
// Agregarle diseño a ambas tablas de la página
// Ver el tema del formulario
// Sería todo por ahora...