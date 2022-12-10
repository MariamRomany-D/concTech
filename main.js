// ---------------Nav bar -------------- 
const navBar = document.querySelector('nav');
window.addEventListener("scroll", function()
{
    console.log(window.scrollY); //180
    if (window.scrollY >= 180) {
        
        navBar.style.backgroundColor = 'rgba(0, 0, 0, 0.9) ';

    }else 
    {
        navBar.style.backgroundColor = 'transparent';
        
    }
})
//-------------------------SidNavBar----------------------
const sidNavIcon = document.querySelector('#icon');
const showSidNav = document.querySelector('.sidNav');
const closeSid = document.querySelector('.sidLogoAndClosIcon i');
const ulTwoLi = document.querySelector('.navUl2 #section72');
const ulUl = document.querySelector('.sidIco');
sidNavIcon.addEventListener('click',function()
{ 
    showSidNav.style.display ='block' ;

});
closeSid.addEventListener('click',function()
{ 
    showSidNav.style.display ='none' ;

});
ulTwoLi.addEventListener('click',function()
{ 
    ulUl.style.display ='block' ;

});
ulTwoLi.addEventListener('dblclick',function()
{ 
    ulUl.style.display ='none' ;

});

// ---------------Random Background -------------- 
let section = document.querySelector('.sectionOne');
let imgArr = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"]

console.log(imgArr);
setInterval(() => {

    let randomImg = imgArr[Math.floor(Math.random() * imgArr.length)];

    console.log( {randomImg} )
    section.style.backgroundImage = 'url("./css/assets/background/' + randomImg + '")';

}, 5000)

// ---------------Nav li select -------------- 
let selectA = document.querySelectorAll('.navUl li  a ')
console.log(selectA);
selectA.forEach((a) => {

    a.addEventListener('click', removeActiv2)
});
function removeActiv2() {
    selectA.forEach((a) => {
        a.classList.remove('Active1');
        this.classList.add('Active1')
    });
}



// ------------------------ my work Filter ----------------

let selectLi = document.querySelectorAll('.select li');
let images = document.querySelectorAll('.gallery img');
let bigImg = document.querySelectorAll('.newTapImg img ');
console.log(bigImg);
console.log(images);

selectLi.forEach((li) => {

    li.addEventListener('click', removeActiv);
    li.addEventListener('click', selectImage);

});
function removeActiv() {
    selectLi.forEach((li) => {
        li.classList.remove('Active');
        this.classList.add('Active');
    });
}
// -----------****************************
function selectImage() {
    images.forEach((img) => {
        img.style.display = 'none';
    });

    // console.log(document.querySelectorAll(this.dataset.cat));
    document.querySelectorAll(this.dataset.cat).forEach((li) => {
        li.style.display = 'block';
    });
}
// ----------------------Popup of Gallery section  -------------

let pop = document.querySelectorAll('#section4 .sec4Gallery .items'); //.sec4Gallery.items(.item img) 
let popImg  =document.querySelectorAll('.sec4Gallery .items .item img');

let im = document.querySelector('.popUpGallery');
let srcImg = document.querySelector('.popUpGallery img');

pop.forEach(img => {
    img.addEventListener('click', function(e) {
        console.log('clicked', srcImg.src);
        im.style.display = 'block';
      let  srcPopImg = e.target.src ;
      console.log(srcPopImg);
        srcImg.setAttribute('src', img.querySelector('img').src);
        console.log(popImg);
      
    })   
})

// ******CLOSE*******
let close = document.querySelector('.popUpGallery i');
close.addEventListener('click',function(){
    im.style.display = 'none';
})



// ------------------------ POST Form ----------------

const form = document.getElementById('Form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

const formData = new FormData(this) ;
    // console.log(formData.get('FirstName'));
    // console.log(formData.get('message'));
const data = Object.fromEntries(formData);
    // console.log(data);
fetch('http://localhost:8000/blogs', {

    method:'POST',
    headers:{
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(data)

}).then(response => response.json())  
  .then(data => console.log(data))
  .catch(error => console.error(error));
});




console.log(a);
// console.log(b);

var a = 'varrr';//undefined
let b = "lettt"






















