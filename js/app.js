const customer = [
  {
    fname: "laylo",
    lname: "kmdur",
    phones: "0123",
    region: "tashkent",
    budget: true,
  },

  {
    fname: "john",
    lname: "nmadur",
    phones: "234",
    region: "samarqand",
    budget: false,
  },

  {
    fname: "toby",
    lname: "aliyev",
    phones: "0123",
    region: "tashkent",
    budget: true,
  },

  {
    fname: "yela",
    lname: "samugjanova",
    phones: "0asdf3",
    region: "jizzax",
    budget: false,
  },
];

const form = document.querySelector(".form");
const tbody = document.querySelector(".tbody");
const region = document.querySelector("#region");
const budget = document.querySelector("#budget");
const fname = document.querySelector("#fname");
const sname = document.querySelector("#sname");

function sortingString(value, type) {
  if (value === "descending") {
    customer.sort((a, b) => {
      let first = a[type].toLowerCase();
      let second = b[type].toLowerCase();
      if (second > first) return 1;
      if (second < first) return -1;
      return 0;
    });
  } else if (value === "ascending") {
    customer.sort((a, b) => {
      let first = a[type].toLowerCase();
      let second = b[type].toLowerCase();
      if (second > first) return -1;
      if (second < first) return 1;
      return 0;
    });
  }
  createTableData(customer);
}

fname.addEventListener("change", (e) => {
  sortingString(e.target.value, "fname");
});

sname.addEventListener("change", (e) => {
  sortingString(e.target.value, "lname");
});

function filterString(value, type) {
  if (value === "all") {
    createTableData(customer);
  } else {
    let filterUsers = customer.filter((user) => user[type] === value);
    // console.log(filterUsers);
    createTableData(filterUsers);
  }
}

budget.addEventListener("change", (e) => {
  filterString(e.target.value === "true", "budget");
});

region.addEventListener("change", (e) => {
  filterString(e.target.value, "region");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = document.querySelector("#name__input");
  const userSurname = document.querySelector("#input__surname");
  const userPhone = document.querySelector("#input__phone");
  const userRegion = document.querySelector("#input__region");
  const userBudget = document.querySelector("#input__budget");

  const newObj = {
    fname: userName.value,
    lname: userSurname.value,
    phones: userPhone.value,
    region: userRegion.value,
    budget: userBudget.value,
  };

  customer.push(newObj);
  createTableData(customer);
  form.reset(); // Reset the form after submission
});

function createTableData(info) {
  tbody.innerHTML = ""; // Clear previous table data

  info.forEach((value) => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
      <td>${value.fname}</td>
      <td>${value.lname}</td>            
      <td>${value.phones}</td>
      <td>${value.region}</td>
      <td>${value.budget}</td>
    `;
    tbody.appendChild(tableRow);
  });
}
