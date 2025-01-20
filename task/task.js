const arr=[
    {username:'ramin',age:12},
    {username:'eldar',age:20},
    {username:'vefadar',age:58},
    {username:'samir',age:48},
] 
const mesaj=document.querySelector(".mesaj");
arr.forEach(({username,age})=>{
    mesaj.innerHTML += `<li>${username} :${age}</li>`
})
console.log(mesaj);

/*1. Bir array-də, yalnız ədədi 3 ilə bölünən ədədləri çıxarıb qalanları toplamaqla bir nəticə əldə edin.*/
const array=[45,12,2,3,15,4]
let sum = 0;
array.forEach((num) => {
    // Əgər ədəd 3-ə bölünmrsə, onu cəmləyirik
    if (num % 3 !== 0) {
        sum += num;
    }
});
console.log("3e blunmeyen ededlerin cemi :", sum);

/*2. Bir stringdə, həm kiçik, həm də böyük hərflərin neçə dəfə təkrarladığını tapın.*/
const STRINGDE="MEN JS kursuna BU GUN gedirem"
// Bütün böyük və kicik herfleri saymaq
let kicikHrflerSay = 0;
let boyukHrflerSay = 0;
for (let i = 0; i < STRINGDE.length; i++) {
    const char = STRINGDE[i];
    if(char === char.toUpperCase() && char !== ' ') {
        boyukHrflerSay++; // Böyük hərfi yeni cümləyə əlavə et
    }else if (char === char.toLowerCase()&& char !== ' ') {
        kicikHrflerSay++;
    } // Əgər boşluq və ya başqa simvoldursa, olduğu kimi əlavə et
    
}
    console.log("Kicik hərflərin sayı:", kicikHrflerSay);
    console.log("Böyük hərflərin sayı:",boyukHrflerSay);
    
/*3. Bir array-dəki ən böyük iki ədədin cəm və hasilini tapın.*/
const aray=[45,12,2,3,15,4]
const sira=(aray.sort((a, b) => b - a)).slice(0, 2);// Array-i azalan sıraya görə sort et sonra  Ən böyük iki ədəd
let topla = sira[0] + sira[1];
let vur = sira[0] * sira[1];
console.log("Nəticə cem:", topla);
console.log("Nəticə hasil:", vur);


/*5. Verilmiş massivdəki bütün elementlərin ortalamasını hesablayın.*/
const massiv=[45,12,2,3,15,4]
let cem=0;
massiv.forEach(num => {
    cem += num; // Massivi cəmləyirik
});
const ortalama = cem / massiv.length;

console.log("Ortalama:", ortalama);

/*4. Bir stringdəki bütün böyük hərflərin sayını tapın, ardıcıl olaraq hər hansı kiçik hərflər varsa, onları silin.*/
const cumle="MEN JS kursuna BU GUN gedirem"
// Bütün böyük hərfləri tapmaq və saymaq
let HrflerSay = 0;
let yeniCumle = "";

// Hər bir xarakteri yoxlayaq
for (let i = 0; i < cumle.length; i++) {
    const char = cumle[i];
    // Əgər böyük hərfdirsə, sayını artırırıq
    if(char === char.toUpperCase() && char !== ' ') {
        HrflerSay++;
        yeniCumle += char;  // Böyük hərfi yeni cümləyə əlavə et
    }else if (char === char.toLowerCase()) {
        continue;
    } // Əgər boşluq və ya başqa simvoldursa, olduğu kimi əlavə et
    else {
        yeniCumle += char;
    }
}
    console.log("Böyük hərflərin sayı:", HrflerSay);
    console.log("Yeni cümle:", yeniCumle);