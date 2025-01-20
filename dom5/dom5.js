/*1. modele gore filter edin,masinin sekli olsun 
ustune vuranda hemin modeller gelsin
ele buna dark light mode qosun*/
const links = [
    { id: 0, title: "cars" }, 
    { id: 1, title: "admin" }, 
    { id: 2, title: "connect" }];

const navbar = document.querySelector(".navbar");
const carsBox = document.querySelector(".carsBox");
const cars = document.querySelector(".cars");
const admin = document.querySelector(".admin");  // this is  admin section
const connect = document.querySelector(".connect");  // this is  connect section
const container = document.querySelector(".container");

let activeTab = 0;

// Function to update the navbar styles
const updateNavbar = () => {
    navbar.innerHTML = '';  // Clear navbar content
    links.forEach((link) => {
        activeTab === link.id ? 'active' : 'link';//aktivtab=dirse link id sine active klas ver
        navbar.innerHTML += `
            <a href="#" 
               class="${activeTab}" 
               onclick="setActiveTab(${link.id})">${link.title}</a>`;//onklick edende setactiv link asagidaki idni goturur admin yada digeer a teqindeki soz yazilir
    });
};updateNavbar();
//funksiya 
const updateContent = () => {
    if (activeTab === 0) {
        carsBox.style.display = "block"; //0da cars carsbox gorunecek digerleri yox 
        cars.style.display = "grid";  //cedvel kimi olsun   
         admin.style.display = "none";
         connect.style.display = "none";
    } else if (activeTab === 1) {
        carsBox.style.display = "none"; //1de sadece admin blok olacaq 
        cars.style.display = "none";     
        admin.style.display = "block"; 
    } else if (activeTab === 2) {
        carsBox.style.display = "none";  
        cars.style.display = "none"; 
        admin.style.display = "none";   
        connect.style.display = "block"; //sadece connect gorunecek
    }
}
updateContent();
const setActiveTab = (id) => {
    activeTab = id;
    updateNavbar();
    updateContent();
};


const fa_sun = document.querySelector(".fa-sun");
const fa_moon = document.querySelector(".fa-moon");

fa_sun.onclick = () => {
    fa_sun.classList.toggle("fa-moon");//icon deyisir
     document.body.classList.toggle("dark-mode");//sadece cssde sytle verdiyimiz htmlde yazmadigimiz dark-mode klasini cagirirq
     
};
    

const car =[
    { "id": 1, "year": 2020, "model": "Toyota Camry", "color": "Black", "image":"./foto/image1.jpeg" },
    { "id": 2, "year": 2021, "model": "Honda Civic", "color": "White", "image": "./foto/image2.jpeg" },
    { "id": 3, "year": 2022, "model": "Ford Mustang", "color": "Red", "image": "./foto/image3.jpeg" },
    { "id": 4, "year": 2023, "model": "Honda Civic", "color": "Blue", "image": "./foto/image4.jpeg" },
    { "id": 5, "year": 2021, "model": "Ford Mustang", "color": "Silver", "image": "./foto/image5.jpeg" },
    { "id": 6, "year": 2020, "model": "Honda Civica", "color": "Silver", "image": "./foto/image6.jpeg" },
    { "id": 7, "year": 2022, "model": "Ford Mustang", "color": "Silver", "image": "./foto/image7.jpg" },
    { "id": 8, "year": 2021, "model": "Toyota Camry", "color": "Green", "image": "./foto/image8.jpeg" }
  ]
//once arrayi ekranda yazdiraq-showcars
const showCars=()=>{
car.forEach((c)=>{
    cars.innerHTML+=`<div class="car">
                    <img src="${c.image}" >
                  <h2>model: ${c.model}</h2>
                  <h3>year: ${c.year}</h3>
                  <h4>color:${c.color}</h4>
                </div>`

}
)};
showCars();
  

//renge-ile gore search edek
const searchimp = document.querySelector(".searchImp");

searchimp.addEventListener("input", (e) => {
    const user_search = e.target.value.toLowerCase(); // user daxil etdiyi

  const filteredCars = car.filter((c) => { 
        return (
            c.color.toLowerCase().includes(user_search) ||  // color
            c.year.toString().toLowerCase().includes(user_search)  // Search year
        );
    });

    showFilterCars(filteredCars); 
  });

  
// Filtrelenmisleri ekranda göstermek
const showFilterCars = (filteredCars) => {
    cars.innerHTML = ''; // Clear  content
    filteredCars.forEach((car) => {
        cars.innerHTML += `
            <div class="car">
                <img src="${car.image}">
                <h2>Model: ${car.model}</h2>
                <h3>Year: ${car.year}</h3>
                <h4>Color: ${car.color}</h4>
            </div>`
    });
};



//modelin butonunu vuranda ekrana hemin modeller cixsin
const all_models = [,"./foto/toyota.jpeg", "./foto/honda.png", "./foto/mustang.png"];

const models = document.querySelector(".models"); // containeri çagırırıq
let active_models = 0; // Seçili modelin başlanğıc indexi

// Model şəkilləri ekranda göstərmək
const setModel = () => {
    models.innerHTML = ""; // Model şəkillərini təzələyirik
    all_models.forEach((m, index) => {
        models.innerHTML += `
            <button onclick="showModels(${index})">
                <img src="${m}">
            </button>`;
    });
};
setModel(); // Model şəkillərini birinci dəfə göstəririk

// Seçilən modelə əsasən filtrasiya etmək
const showModels = (modelindex) => {
    active_models =modelindex; // Seçilen modelin index'ini qeyd edirik
    const filterCars = car.filter((car) =>{
        if(modelindex = 0){
            return car;
        }else{
        // Modelin uyğun avtomobillərini filtrasiyası
        return car.model === all_models[modelindex];
    }});
    showFilterCars(filterCars); // modele gore Filtrasiya olunmuş avtomobilləri göstəririk
    setModel();
};




