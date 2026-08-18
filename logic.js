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
        title: "Text Encryption",
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


// Creation of table and the headers of the table
const container = document.querySelector("#projects aside");
container.id = "log";
const projectForm = container.querySelector("#suggestions"); 

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

const headerActions = document.createElement("th");
headerActions.textContent = "Actions";
headerCointainer.appendChild(headerActions);



function renderTable(projectsToRender)
{
    table.replaceChildren();
    table.appendChild(headerCointainer);

    if (projectsToRender.length === 0)
    {
        const noDataRow = document.createElement("tr");
        const message = document.createElement("td");
        message.colSpan = 4;
        message.textContent = "No Projects Found";

        noDataRow.appendChild(message);
        table.appendChild(noDataRow);
        return;
    }

    projectsToRender.forEach(project => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = project.title;

    const statusCell = document.createElement("td");
    statusCell.textContent = project.status;

    const contributorsCell = document.createElement("td");
    contributorsCell.textContent = project.contributors;

    const deleteCell = document.createElement("td");
    if (project.userCreated === true)
    {
        const btnCancel = document.createElement("button");
        btnCancel.textContent = "❌";
        btnCancel.dataset.title = project.title;
        btnCancel.className = "deleteBtn";
        btnCancel.classList.add("deleteBtn");
        deleteCell.appendChild(btnCancel);
    }



    row.appendChild(titleCell);
    row.appendChild(statusCell);
    row.appendChild(contributorsCell);
    row.appendChild(deleteCell);
    table.appendChild(row);
});
}
renderTable(Projects);
container.insertBefore(table, projectForm);

//Filter section

const deployableMenu = document.getElementById("filter");
const applyContributors = document.getElementById("contibFilter");

function ApplyFilters()
{
    const value = deployableMenu.value;
    const contributors = applyContributors.checked;

    const projectsFiltered = Projects.filter(project => {
        const matchStatus = (value === "All" || project.status === value);
        const matchContributors = (contributors === false || project.contributors === "Yes");
        return matchStatus && matchContributors;
    });
    renderTable(projectsFiltered);

}
deployableMenu.addEventListener( ("change"), ApplyFilters);
applyContributors.addEventListener( ("change"), ApplyFilters);


const form = document.getElementById("suggestions");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const project = document.getElementById("title");
    const contributor = document.getElementById("participate");

    const projectName = project.value;
    const isContributor = contributor.checked ? "Yes" : "No";
    const newProject = {
          title: projectName,
        status: "In Progress",
        contributors: isContributor,
        userCreated: true
    }
    Projects.push(newProject);
    ApplyFilters()
    form.reset();    
});

// Delete section

table.addEventListener('click', (event) => {
    if (event.target.classList.contains("deleteBtn"))
    {
        const toEliminate = event.target.dataset.title;
        const index = Projects.findIndex(project => project.title === toEliminate)
        Projects.splice(index, 1);
        ApplyFilters();
    }
});


// DarkMode Section}


const darkModeBtn = document.getElementById("darkMode");
const bodyElement = document.body;

darkModeBtn.addEventListener("click", () => {
    const isDark = bodyElement.classList.toggle("dark-theme");

    darkModeBtn.setAttribute('aria-pressed', isDark);

    if (isDark)
    {
        darkModeBtn.textContent = "Light Mode";
    }
    else
    {
        darkModeBtn.textContent = "Dark Mode ";
    }

});

// Contact section

const contactForm = document.getElementById("contact-section");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formSuccess = document.getElementById("formSucces");

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";

    let flag = true;

    if (nameInput.value.trim() === "")
    {
        nameError.textContent = "Please enter your name.";
        flag = false;
    }

    const verifyEmail = emailInput.value.trim();
    if (verifyEmail === "")
    {
        emailError.textContent = "Please enter your email.";
        flag = false;
    } 
    else if (!verifyEmail.includes("@") || !verifyEmail.includes("."))
    {
        emailError.textContent = "Please enter a valid email adress.";
        flag = false;
    }

    if (messageInput.value.trim() === "")
    {
        messageError.textContent = "Please enter your message.";
        flag = false;
    }

    if (flag)
    {
        formSuccess.textContent = "Thank you! Your message has been succesfully.";
        contactForm.reset();
    }
});




// TODO
// Agregar un modo oscuro para que cambie toda la pagina
// Agregarle diseño a ambas tablas de la página
// Ver el tema del formularios
// Sería todo por ahora...