
const thead = document.getElementById("tableHead");
const heading = ["id", "name", "surname", "email", "phonenumber", "city"];

heading.forEach((head) => {
    thead.innerHTML += `<th>${head.toUpperCase()}</th>`;
});

const users = [
    {id: 0, name: "Leanne", surname: "Graham", email: "leanne@example.com", phonenumber: "1-770-736-8031", city: "Gwenborough"},
    {id: 1, name: "Ervin", surname: "Howell", email: "ervin@example.com", phonenumber: "010-692-6593", city: "Wisokyburgh"},
    {id: 2, name: "Carmen", surname: "Beck", email: "carmen@example.com", phonenumber: "781-329-8637", city: "Meyersville"},
    {id: 3, name: "Anna", surname: "Smith", email: "anna.smith@example.com", phonenumber: "1-800-555-1234", city: "Springfield"},
    {id: 4, name: "John", surname: "Doe", email: "john.doe@example.com", phonenumber: "1-800-555-5678", city: "Centerville"},
    {id: 5, name: "Olivia", surname: "Johnson", email: "olivia.johnson@example.com", phonenumber: "1-800-555-2345", city: "Lakeside"},
    {id: 6, name: "Emma", surname: "Miller", email: "lucas.miller@example.com", phonenumber: "1-800-555-6789", city: "Centerville"},
    {id: 7, name: "Emma", surname: "Taylor", email: "emma.taylor@example.com", phonenumber: "1-800-555-5432", city: "Centerville"}
];

const tbody = document.getElementById("tableBody");

// Funksiya: İstifadəçiləri cədvəldə göstərmək
const showUsers = (filteredUsers) => {
    tbody.innerHTML = "";
    filteredUsers.forEach((user) => {
        tbody.innerHTML += `
            <tr class="${(user.id % 2 === 0) ? 'even' : 'odd'}">
                <th>${user.id + 1}</th>
                <th>${user.name}</th>
                <th>${user.surname}</th>
                <th>${user.email}</th>
                <th>${user.phonenumber}</th>
                <th>${user.city}</th>
            </tr>
        `;
    });
};

// İlk olaraq bütün istifadəçiləri göstərmək
showUsers(users);

// Yeni istifadəçi əlavə etmək
const newbtn = document.getElementById("newbtn");
newbtn.onclick = () => {
    const name = prompt("Adı əlavə et");
    const surname = prompt("Soyadı əlavə et");
    const email = prompt("E-maili əlavə et");
    const phone = prompt("Telefon nömrəsini əlavə et ('-' ilə)");
    const city = prompt("Şəhəri əlavə et");
    const obj = {
        id: users.length,
        name,
        surname,
        email,
        phonenumber: phone,
        city
    };
    users.push(obj);
    showUsers(users);
};

// Axtarış filtrini tətbiq etmək
const search_name = document.getElementById("search-name");
const search_surname = document.getElementById("search-surname");
const search_email = document.getElementById("search-email");
const search_phonenumber = document.getElementById("search-phonenumber");
const search_city = document.getElementById("search-city");
const search = document.getElementById("search");
search_name.oninput = (event) => {
    const val = event.target.value.toUpperCase(); // istifadecinin verdiyi 
    const filterUsers = users.filter((u) => u.name.toUpperCase().includes(val)); 
    showUsers(filterUsers);  // Filtrələnmiş istifadəçiləri göstərmək
};
search_surname.oninput = (event) => {
    const val = event.target.value.toUpperCase();  
    const filterUsers = users.filter((u) => u.surname.toUpperCase().includes(val)); 
    showUsers(filterUsers);  
};
search_email.oninput = (event) => {
    const val = event.target.value.toUpperCase();  
    const filterUsers = users.filter((u) => u.email.toUpperCase().includes(val)); 
    showUsers(filterUsers);  
};

        const search_phone = document.getElementById('search_phone');
        search_phonenumber.oninput = (event) => {
            const val = event.target.value.toUpperCase();  
            const filterUsers = users.filter((u) => u.phonenumber.toUpperCase().includes(val));  
            showUsers(filterUsers); 
        };

        search_city.oninput = (event) => {
            const val = event.target.value.toUpperCase();  
            //console.log("Daxil edilən dəyər:", val);
            const filterUsers = users.filter((u) => u.city.toUpperCase().includes(val)); 
            showUsers(filterUsers);  
        };
        search.oninput = (event) => {
            const val = event.target.value.toUpperCase();  
            const filterUsers = users.filter((u) => {
                return (
                    u.name.toUpperCase().includes(val) || 
                    u.surname.toUpperCase().includes(val) || 
                    u.email.toUpperCase().includes(val) || 
                    u.phonenumber.toUpperCase().includes(val) || 
                    u.city.toUpperCase().includes(val)
                );
            });
            showUsers(filterUsers);  
        };

