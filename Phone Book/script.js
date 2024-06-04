const CONTACTS = [
  {
    lastName: "Ameye",
    firstName: "Amandine",
    birthDate: new Date("1998-02-21"),
    phone: "0475635821",
  },
  {
    lastName: "Dujardin",
    firstName: "Jeanne",
    birthDate: new Date("1985-03-31"),
    phone: "0484488664",
  },
  {
    lastName: "Vanbel",
    firstName: "Jacques",
    birthDate: new Date("1995-04-16"),
    phone: "0487635921",
  },
  {
    lastName: "Dutronc",
    firstName: "Tim",
    birthDate: new Date("1983-06-02"),
    phone: "0484253058",
  },
  {
    lastName: "Dos Santos",
    firstName: "Estelle",
    birthDate: new Date("2007-05-18"),
    phone: "0466125897",
  },
  {
    lastName: "Dumoulin",
    firstName: "Eric",
    birthDate: new Date("1975-08-13"),
    phone: "0475306894",
  },
];

const PHONE_BOOK = document.querySelector("tbody");
const UP_ARROWS = document.querySelectorAll("span.croissant");
const DOWN_ARROWS = document.querySelectorAll("span.décroissant");
const INPUT = document.querySelector("input");

createAndDisplay(CONTACTS);

function createAndDisplay(list) {
  PHONE_BOOK.innerHTML = "";
  list.forEach((contact) => {
    const CONTACT_ROW = document.createElement("tr");
    const LASTNAME = document.createElement("td");
    const FIRSTNAME = document.createElement("td");
    const BIRTHDATE = document.createElement("td");
    const PHONE = document.createElement("td");

    CONTACT_ROW.append(LASTNAME, FIRSTNAME, BIRTHDATE, PHONE);
    PHONE_BOOK.appendChild(CONTACT_ROW);

    LASTNAME.innerText = contact.lastName;
    FIRSTNAME.innerText = contact.firstName;
    BIRTHDATE.innerText = contact.birthDate.toLocaleDateString("fr-BE");
    PHONE.innerText = contact.phone;
  });
}

UP_ARROWS.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    CONTACTS.sort(function (a, b) {
      switch (index) {
        case 0:
          return a.lastName.localeCompare(b.lastName);
        case 1:
          return a.firstName.localeCompare(b.firstName);
        case 2:
          return a.birthDate - b.birthDate;
      }
    });
    createAndDisplay(CONTACTS);
  });
});

DOWN_ARROWS.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    CONTACTS.sort(function (a, b) {
      switch (index) {
        case 0:
          return b.lastName.localeCompare(a.lastName);
        case 1:
          return b.firstName.localeCompare(a.firstName);
        case 2:
          return b.birthDate - a.birthDate;
      }
    });
    createAndDisplay(CONTACTS);
  });
});

INPUT.addEventListener("input", () => {
console.log(INPUT.value);
  const FILTERED_CONTACTS = CONTACTS.filter(function (contact) {
    return contact.lastName.toLowerCase().includes(INPUT.value.toLowerCase()) || contact.firstName.toLowerCase().includes(INPUT.value.toLowerCase()) || contact.phone.toLowerCase().includes(INPUT.value.toLowerCase());
  });

//   const filtred = [];
//   CONTACTS.forEach(contact => {
//     if(contact.lastName.includes(INPUT.value) || contact.firstName.includes(INPUT.value) || contact.phone.includes(INPUT.value)){
//         filtred.push(contact);
//     }
//   })
  createAndDisplay(FILTERED_CONTACTS);
});
