/*1. ekranda rengli duymeler var,her duymeye click etdikde hemin reng ekrana yazilsin*/
const buttonlar = document.getElementsByClassName("button");
const h2 = document.querySelector("h2"); 
for (let button of buttonlar) {
    button.onclick = () => {
        h2.innerText = `Rengin kodu:${getComputedStyle(button).backgroundColor}`;
        
    };
}

//2.ekranda mehsullari gostereceksiniz
const thead = document.getElementById("tableHead");
const heading=["id","name","price"];

heading.forEach((head)=>{
    thead.innerHTML += `<th>${head.toUpperCase()}</th>`
});
const arrs = [    
    {id:0,
    name:"Phone",
    price:"100 AZN"
    },
    {id:1,
    name:"Computer",
    price:"200 AZN"
    },
    {id:2,
    name:"Computer",
    price:"700 AZN"
    },
    {id:3,
    name:"Phone",
    price:"300 AZN"
    }
]
const tbody = document.getElementById("tableBody")
const showarrs=()=>{
    tbody.innerHTML="";
arrs.forEach((arr,id)=>{
    tbody.innerHTML +=`<tr>
            <th>${arr.id+1}</th>
            <th>${arr.name}</th>
            <th>${arr.price}</th>
        </tr>`
})
}
showarrs();
const newbtn=document.getElementById("newbtn")
newbtn.onclick=()=>{
    const name=prompt("product daxil et-computer/phone ")
    const price=prompt("qiymet daxil et.")
    const obj ={
        id:arrs.length +1,
        name,
        price: `${price} AZN`,
    };
    arrs.push(obj);
    showarrs(); 
};
