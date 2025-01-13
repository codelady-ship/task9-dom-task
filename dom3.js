
const thead = document.getElementById("tableHead");
const heading=["id","name","surname","email"," phonenumber","city",];

heading.forEach((head)=>{
    thead.innerHTML += `<th>${head.toUpperCase()}</th>`
});
const users=[
    {id:0,
      name: "Leanne",
      surname: "Graham",
      email: "leanne@example.com",
      phonenumber: "1-770-736-8031",
      city: "Gwenborough"
    },
    {id:1,
      name: "Ervin",
      surname: "Howell",
      email: "ervin@example.com",
      phonenumber: "010-692-6593",
      city: "Wisokyburgh"
    },
    {id:2,
      name: "Carmen",
      surname: "Beck",
      email: "carmen@example.com",
      phonenumber: "781-329-8637",
      city: "Meyersville"
    },
    {id:3,
      name: "Anna",
      surname: "Smith",
      email: "anna.smith@example.com",
      phonenumber: "1-800-555-1234",
      city: "Springfield"
    },
    {id:4,
      name: "John",
      surname: "Doe",
      email: "john.doe@example.com",
      phonenumber: "1-800-555-5678",
      city: "Centerville"
    },
    {id:5,
      name: "Olivia",
      surname: "Johnson",
      email: "olivia.johnson@example.com",
      phonenumber: "1-800-555-2345",
      city: "Lakeside"
    },
    {id:6,
      name: "Emma",
      surname: "Miller",
      email: "lucas.miller@example.com",
      phonenumber: "1-800-555-6789",
      city: "Centerville"
    },
    
    {id:7,
      name: "Emma",
      surname: "Taylor",
      email: "emma.taylor@example.com",
      phonenumber: "1-800-555-5432",
      city: "Centerville"
    }
  ];
  const tbody = document.getElementById("tableBody");
const showusers=()=>{
    tbody.innerHTML="";
    users.forEach((user)=>{
    tbody.innerHTML +=`<tr>
            <th>${user.id+1}</th>
            <th>${user.name}</th>
            <th>${user.surname}</th>
            <th>${user.email}</th>
            <th>${user.phonenumber}</th>
            <th>${user.city}</th>
            </tr>`
})
};
showusers();


const newbtn=document.getElementById("newbtn")
newbtn.onclick=()=>{
    const name=prompt("add name")
    const surname=prompt("add surname")
    const email=prompt("add email")
    const phone=prompt("add phone with '-'")
    const city =prompt("add city")
    const obj ={
        id:users.length +1,
        name,
        surname,
        email,
        phone,
        city
    };
    users.push(obj);
    showusers(); 
};