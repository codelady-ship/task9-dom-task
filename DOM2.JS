//1. node list ile html collection ferqi nedir?
const thead = document.getElementById("tableHead");
const heading=["NOD LIST","HTML COLLECTION"];

heading.forEach((head)=>{
    thead.innerHTML += `<th>${head.toUpperCase()}</th>`
});
const arrs = [    
    {
    NOD_LIST:`DOM düyünü (yeni ,node)-text node(teqde yazdigimiz her hansi metn:"salam dunya!"),<br/> element node(div,p,a teqleri nezerde tutur),<br/> comment node(//bu bir kommentdir) və s.təmsil edən kolleksiyadır.`,
    HTML_COLLECTION:`Yalnız HTML elementlərini təmsil edən kolleksiyadır.element node(div,p,a teqleri nezerde tutur)`,
    },
    {
    NOD_LIST:`document.querySelectorAll() kimi metodlarla əldə edilir.(document.getAttribut(),document.setAttribut(),document.removeAttribut()-atribut novleri ile deyisiklik ede bilerik) `,
    HTML_COLLECTION:`document.getElementsByTagName(), document.getElementsByClassName(), element.children kimi metodlarla əldə edilir. `,
    },
    {
    NOD_LIST:`Həm HTML elementləri ilə həm də digər növ düyünlərlə (məsələn, şərh və mətn düyünləri) işləməyə imkan verir.`,
    HTML_COLLECTION:`HTMLCollection yalnız elementləri ehtiva edir`,
    },
    {
    NOD_LIST:`dinamikdir-yəni DOM-da dəyişikliklər olduqca bu kolleksiya avtomatik yenilənir. `,
    HTML_COLLECTION:`çox vaxt statik olur`,
    },
    {
    NOD_LIST:`Dövr etmək üçün forEach metodu , for dövrü ilə də iterasiya edilə bilər`,
    HTML_COLLECTION:`Dövr etmək üçün for dövrü ilə iterasiya edilə bilər`,
    },
    {
    NOD_LIST:`.length xüsusiyyətinə malikdir, lakin NodeList özünü bir array (siyahı) kimi qəbul etmək mümkün deyil. Onun üzərində metodlar işlətmək üçün məsələn, Array.from() lazım ola bilər.`,
    HTML_COLLECTION:`HTMLCollection-da .length xüsusiyyətinə malikdir `,
    }
]

const tbody = document.getElementById("tableBody")
const showarrs=()=>{
    tbody.innerHTML="";
arrs.forEach((arr)=>{
    tbody.innerHTML +=`<tr>
            <th>${arr.NOD_LIST}</th>
            <th>${arr.HTML_COLLECTION}</th>
        </tr>`
})
}
showarrs();


//2. mobile menu yazin
const mobilemenu = document.querySelector("#mobilemenu");
const bars = document.querySelector("#bars");
let isshowmenu = false; // Menü statusu

// Menü və ikonun vəziyyətini dəyişən funksiya
const showhidemenu = () => {
    if (isshowmenu) {
        bars.classList.add("fa-x");  // Bars ikonuna 'fa-x' sinifi əlavə et
        mobilemenu.classList.remove("hide");  // Menünü göstər
    } else {
        bars.classList.remove("fa-x");  // Bars ikonundan 'fa-x' sinifini çıxar
        mobilemenu.classList.add("hide");  // Menünü gizlət
    }
};

// Bars elementinə kliklədikdə menünü və ikonu dəyişdiririk
bars.onclick = () => {
    isshowmenu = !isshowmenu;  // Menü vəziyyətini dəyişirik
    showhidemenu();  // Yeni vəziyyəti tətbiq edirik
};

//3. Calculator yazin
const display = document.getElementById("display");
function Display(value) {
    display.value += value; // Daxil edilən dəyəri ekrana əlavə edir
}
// Hesablama nəticəsini tapmaq
function calculateResult() {
        display.value = eval(display.value); 
}
// Display-i sıfırlamaq
function clearDisplay() {
    display.value = ""; }// Display-i təmizləyir

//4. Faktoriali hesablayan proqram

 /* document.getElementById("submit").onclick = function() {
    const faktorial_input = document.getElementById("faktorial_input").value;
    function factorial(n) {
        return (n === 0 || n === 1) ? 1 : n * factorial(n - 1);
    }
    }//onclick
  
document.getElementById("reset").onclick = function() {
    document.getElementById("faktorial_input").value = "";  // Inputu sıfırlamaq
  };*/

  const faktorial_input = document.getElementById("faktorial_input");
  const reset=document.getElementById("reset");
  const submit= document.getElementById("submit");
  function factorial(n) {
    return (n === 0 || n === 1) ? 1 : n * factorial(n - 1);
}
    submit.onclick = function() {
        let number = +(faktorial_input.value); // İstifadəçi daxil etdiyi ədəd
    if (isNaN(number) || number < 0) {
        faktorial_input.value = "sadece müsbət ədəd daxil et!";// Əgər daxil edilən ədəd qeyri-rəqəmdirsə və ya mənfidirsə, istifadəçiyə xəbərdarlıq veririk
    } else {
        let fact = factorial(number); // Faktorialı hesablayırıq
        let calculationString = `${number}!`;
        // Hesablama misalını hazırlayırıq
        for (let i = number; i > 1; i--) {
            fact ;
        }
        // Nəticəni input sahəsində göstəririk
        faktorial_input.value = `${calculationString} = ${fact}`;
    }
};
// Reset düyməsinə basıldıqda inputu sıfırlamaq
reset.onclick = function() {
    faktorial_input.value = "";
};


//5.lampa
/*const btn=document.querySelector("#btn");
const lamp=document.querySelector("#lamp")
btn.onclick=()=>{
    const islamp=lamp.getAttribute("src")
    if (islamp === "./foto/pic_bulbon.gif") {
        lamp.setAttribute("src", "./foto/pic_bulboff.gif");
      } else {
        lamp.setAttribute("src", "./foto/pic_bulbon.gif");
      }
    };*/

const btn=document.querySelector("#btn");
const lamp=document.querySelector("#lamp");
let isturnof=true;
btn.onclick=()=>{
    const islamp=lamp.getAttribute("src")
    if (isturnof) {
        isturnof=false;
        btn.innerText="sondür";
        lamp.setAttribute("src", "./foto/pic_bulboff.gif");
      } else {
        isturnof=true;
       btn.innerText="yandir"
        lamp.setAttribute("src", "./foto/pic_bulbon.gif");
      }
    };