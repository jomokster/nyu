const addForm = document.querySelector(".add-form");

function addEmployee() {
  const name = document.querySelector("#name").value;
  const salary = document.querySelector("#salary").value;

  fetch("http://localhost:3000/employees/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      salary,
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log("response", json));
}

function changeEventHandler(e) {
  if (!e.target.matches("input[type=checkbox]")) return;
  fetch(`http://localhost:3000/employees/${e.target.id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((json) => console.log("response", json));
}

function showEmployees(employees) {
  employees.map((employee) => {
    const li = document.createElement("li");
    li.innerHTML = `${employee.name} - $${employee.salary}
    <input type="checkbox" id=${employee.id} />`;
    document.querySelector("ul").appendChild(li);
  });
}

function getEmployees() {
  fetch("http://localhost:3000/employees/")
    .then((response) => response.json())
    .then((data) => {
      showEmployees(data);
    });
}

getEmployees();

document.addEventListener("change", changeEventHandler);
document.addEventListener("submit", addEmployee);
