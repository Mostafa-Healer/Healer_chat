
//                                                                         Start   show and hide the ul
var ulVisible = true; // variable to track the visibility of the ul element
//                         Function to toggle the visibility of the ul element
function toggle() {
var ul = document.getElementById('list-sett'); // replace 'ul' with your ul element selector
if (ulVisible) {
    ul.style.display = 'none';
} else {
    // ulVisible = false ;
    ul.style.display = 'block';
}
ulVisible = !ulVisible;         // update the value of ulVisible
}

//                                                           End   show and hide the ul


//                                                     do the chat all screen & small  
let persoonn = document.getElementById('persoon-2');
function lll() {
let scr = document.getElementById("scr");
let leftSection =document.getElementById("leftSection")
if (ulVisible) {
    scr.style.width = '100%';
    leftSection.style.width = '0%' ;
} else {
    scr.style.width = '78%';
    leftSection.style.width = '20%' ;
}
// ulVisible = !ulVisible;        
}












//                                                                       show ul li by for Each
let p_from_setting = document.querySelectorAll('.Setting ul li p') ;
let ull = Array.from(document.querySelectorAll('.Setting ul li ul')) ;

p_from_setting.forEach(   (li)=> {
    li.addEventListener( "click" ,lists_ul ) ;
});

function lists_ul () {
    ull.forEach(   (ul)=>{
        ul.style.display="none" ;
        ul.currentTarget.style.display = "block" ;

    });
    // document.querySelectorAll('.Setting ul li ul').forEach((el)=>{
    //     el.style.display="block";
    // })
    // li.currentTarget.style.display = "block" ;
}
