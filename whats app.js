//                                                    Add message to screen
let send = document.getElementById('send') ;
let inp = document.getElementById('inp') ;
//  Array
let msg = [];
if(localStorage.msggg != null){
    msg=JSON.parse(localStorage.msggg)
    }else {
    msg = [];
}

send.onclick = function send() {
    let msgg = {
        inp : inp.value ,
    }
    msg.push(msgg);
    localStorage.setItem('msggg' , JSON.stringify(msg));
    console.log(msg);
    // clear data
    inp.value = '';
    showdata();

    
}
// show data in screen 
function showdata(){
    let show = '' ;
    for(let i = 0 ; i < msg.length ; i++){
        show += `
        <p id="rightclick">${msg[i].inp}</p>
        `
    }
    let screen = document.getElementById('screen') ;
    screen.innerHTML = show ;

}
showdata();

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


//                                                             listAccount()
function listAccount() {
let listPrivacy = document.getElementById('listPrivacy');
let listAccount = document.getElementById('listAccount');
let listAdd     = document.getElementById('listAdd');
let notification = document.getElementById('notification') ;
let Group = document.getElementById('Group') ;
let background = document.getElementById('background');


if (ulVisible) {
    listAccount.style.display = 'block';
    listPrivacy.style.display = 'none';
    listAdd.style.display = 'none';
    notification.style.display = 'none';
    storage.style.display = 'none';
    Group.style.display = 'none';
    background.style.display = 'none';


} else {
    listAccount.style.display = 'none';
    listAdd.style.display = 'none';
    listPrivacy.style.display = 'none';
    notification.style.display = 'none';
    storage.style.display = 'none';
    Group.style.display = 'none';
    background.style.display = 'none';

}
ulVisible = !ulVisible;         
}
//                                                             listPrivacy()
function listPrivacy() {
    let listPrivacy = document.getElementById('listPrivacy');
    let listAccount = document.getElementById('listAccount');
    let listAdd     = document.getElementById('listAdd');
    let notification = document.getElementById('notification') ;
    let Group = document.getElementById('Group') ;
    let background = document.getElementById('background');


    if (ulVisible) {
        listPrivacy.style.display = 'block';
        listAccount.style.display = 'none';
        listAdd.style.display = 'none';
        notification.style.display = 'none';
        storage.style.display = 'none';
        Group.style.display = 'none';
        background.style.display = 'none';


    } else {
        listPrivacy.style.display = 'none';
        listAdd.style.display = 'none';
        notification.style.display = 'none';
        listAccount.style.display = 'none';
        storage.style.display = 'none';
        Group.style.display = 'none';
        background.style.display = 'none';

    }
ulVisible = !ulVisible;  
}

function spannsone() {
    let spannsone = document.getElementById('spannsone');
    let spanscircleone = document.getElementById('spanscircleone');

    if (ulVisible) {
        // spanns.style.marginRight='100%';
        spanscircleone.style.transform ='translateX(100%)';
        spannsone.style.background = 'green' ;
    } else {
        spanscircleone.style.transform ='translateX(0%)';
        spannsone.style.background = 'red' ;
    }
ulVisible = !ulVisible;  
}

function spannstwo() {
    let spannstwo = document.getElementById('spannstwo');
    let spanscircletwo = document.getElementById('spanscircletwo');
    if (ulVisible) {
        spanscircletwo.style.transform ='translateX(100%)';
        spannstwo.style.background = 'green' ;
    } else {
        spanscircletwo.style.transform ='translateX(0%)';
        spannstwo.style.background = 'red' ;
    }
    ulVisible = !ulVisible;  
}

function spannsthree(){
    let spanscirclethree = document.getElementById('spanscirclethree');
    let spannsthree = document.getElementById('spannsthree');

    if (ulVisible) {
        spanscirclethree.style.transform ='translateX(100%)';
        spannsthree.style.background = 'green' ;
    } else {
        spanscirclethree.style.transform ='translateX(0%)';
        spannsthree.style.background = 'red' ;
    }
    ulVisible = !ulVisible;  
}

//                                                               list ADD()
function listAdd() {
    let listPrivacy = document.getElementById('listPrivacy');
    let listAccount = document.getElementById('listAccount');
    let listAdd     = document.getElementById('listAdd');
    let notification = document.getElementById('notification') ;
    let Group = document.getElementById('Group') ;
    let background = document.getElementById('background');

    if (ulVisible) {
        listAdd.style.display     = 'block';
        listAccount.style.display = 'none';
        listPrivacy.style.display = 'none';
        notification.style.display = 'none';
        storage.style.display = 'none';
        Group.style.display = 'none';
        background.style.display = 'none';

    } else {
        listAdd.style.display     = 'none';
        listAccount.style.display = 'none';
        listPrivacy.style.display = 'none';
        notification.style.display = 'none';
        storage.style.display = 'none';
        Group.style.display = 'none';
        background.style.display = 'none';
    }
ulVisible = !ulVisible; 
}

//                                                              notification
function notify() {
    let notification = document.getElementById('notification') ;
    let listPrivacy = document.getElementById('listPrivacy');
    let listAccount = document.getElementById('listAccount');
    let listAdd     = document.getElementById('listAdd');
    let storage = document.getElementById('storage');
    let Group = document.getElementById('Group') ;
    let background = document.getElementById('background');


    background.style.display = 'none';

    listPrivacy.style.display = 'none';
    listAccount.style.display = 'none';
    listAdd.style.display = 'none';
    storage.style.display = 'none';
    storage.style.display = 'none';
    Group.style.display = 'none';

    if (ulVisible) {
        notification.style.display = 'block';
    } else {
        notification.style.display  = 'none';
    }
ulVisible = !ulVisible; 

}

function Air() {
    let Airplan = document.getElementById('Airplan');
    let air = document.getElementById('air');
    if (ulVisible) {
        air.style.transform ='translateX(100%)';
        Airplan.style.background = 'green' ;
    } else {
        air.style.transform ='translateX(0%)';
        Airplan.style.background = 'red' ;
    }
    ulVisible = !ulVisible;  
}

//                                                               Storage()
function Storage() {
    let storage = document.getElementById('storage');
    let notification = document.getElementById('notification') ;
    let listPrivacy = document.getElementById('listPrivacy');
    let listAccount = document.getElementById('listAccount');
    let listAdd     = document.getElementById('listAdd');
    let background = document.getElementById('background');
    let Group = document.getElementById('Group') ;


    Group.style.display = 'none';
    background.style.display = 'none';
    notification.style.display = 'none';
    listPrivacy.style.display = 'none';
    listAccount.style.display = 'none';
    listAdd.style.display = 'none';


    if (ulVisible) {
        storage.style.display = 'block';
    } else {
        storage.style.display = 'none';
    }
    ulVisible = !ulVisible; 
}


//                                                     hide all the list
function screen () {
    var ul = document.getElementById('list-sett'); 
    let storage = document.getElementById('storage');
    let notification = document.getElementById('notification') ;
    let listPrivacy = document.getElementById('listPrivacy');
    let listAccount = document.getElementById('listAccount');
    let listAdd     = document.getElementById('listAdd');
    let Group = document.getElementById('Group') ;
    let background = document.getElementById('background');


    ul.style.display = 'none';
    storage.style.display = 'none';
    notification.style.display = 'none';
    listPrivacy.style.display = 'none';
    listAccount.style.display = 'none';
    listAdd.style.display = 'none';
    Group.style.display = 'none';
    background.style.display = 'none';

    if (ulVisible) {
        ul.style.display = 'none';
    }
    ulVisible = !ulVisible; 
}

//                                                              Group()
function Group() {
    let Group = document.getElementById('Group') ;
    let storage = document.getElementById('storage');
    let notification = document.getElementById('notification') ;
    let listPrivacy = document.getElementById('listPrivacy');
    let listAccount = document.getElementById('listAccount');
    let listAdd     = document.getElementById('listAdd');
    let background = document.getElementById('background');


    storage.style.display = 'none';
    notification.style.display = 'none';
    listPrivacy.style.display = 'none';
    listAccount.style.display = 'none';
    listAdd.style.display = 'none';
    background.style.display = 'none';

    if (ulVisible) {
        Group.style.display = 'block';
    }else{
        Group.style.display = 'none';
    }
    ulVisible = !ulVisible; 
}


//                                                           wall-paper
function WallPaper() {
    let Group = document.getElementById('Group') ;
    let storage = document.getElementById('storage');
    let notification = document.getElementById('notification') ;
    let listPrivacy = document.getElementById('listPrivacy');
    let listAccount = document.getElementById('listAccount');
    let listAdd     = document.getElementById('listAdd');
    let background = document.getElementById('background');

    storage.style.display = 'none';
    notification.style.display = 'none';
    listPrivacy.style.display = 'none';
    listAccount.style.display = 'none';
    listAdd.style.display = 'none';
    background.style.display = 'none';
    Group.style.display = 'none';


    if (ulVisible) {
        background.style.display = 'block';
    }else{
        background.style.display = 'none';
    }
    ulVisible = !ulVisible;
}




//  function addImage() {
//     var img = document.createElement('img');
//     img.src = 'https://www.example.com/your_image.jpg';
//     img.alt = 'Your image';
//     document.body.appendChild(img);
//  }


function Bodyphoto() {
    let BodyPhoto = document.getElementById('Downloadd-one');
    let screenphoto = document.getElementById('Downloadd-two');
    // let chatphoto = document.getElementById('Downloadd-three');

    screenphoto.style.display = 'none';
    // chatphoto.style.display = 'none';

    if (ulVisible) {
        BodyPhoto.style.display = 'block';
    }else{
        BodyPhoto.style.display = 'none';
    }
    ulVisible = !ulVisible;
}

function screenphoto() {
    let BodyPhoto = document.getElementById('Downloadd-one');
    let screenphoto = document.getElementById('Downloadd-two');
    // let chatphoto = document.getElementById('Downloadd-three');

    BodyPhoto.style.display = 'none';
    // chatphoto.style.display = 'none';

    if (ulVisible) {
        screenphoto.style.display = 'block';
    }else{
        screenphoto.style.display = 'none';
    }
    ulVisible = !ulVisible;
}
























//                                                                    change body wallpaper
let uploadd = document.getElementById("uploadd");
let upload_image =  " " ;
uploadd.addEventListener("change",function() {
    let reader = new FileReader();
    reader.addEventListener("load",()=>{
        upload_image = reader.result;

        localStorage.setItem('photoBody',JSON.stringify(reader.result));
        document.body.style.background = `url(${JSON.parse(localStorage.photoBody)})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPositionX = 'center';
        document.body.style.backgroundPositionY = 'center';
    });
    reader.readAsDataURL(this.files[0]);
});
function bbb(){
    document.body.style.background = `url(${JSON.parse(localStorage.photoBody)})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPositionX = 'center';
    document.body.style.backgroundPositionY = 'center';
};
bbb();



//                                                                    change screen wallpaper
let uploaddtwo = document.getElementById("uploaddtwo");
let screenn = document.getElementById("screen");
let upload_imaget =  " " ;
uploaddtwo.addEventListener("change",function() {
    let reader = new FileReader();
    reader.addEventListener("load",()=>{
        upload_imaget = reader.result;

        localStorage.setItem('photoscreen',JSON.stringify(reader.result));
        screenn.style.background = `url(${JSON.parse(localStorage.photoscreen)})`;
        screenn.style.backgroundSize = '100%';
        screenn.style.backgroundPositionX = 'center';
        screenn.style.backgroundPositionY = 'center';
    });
    reader.readAsDataURL(this.files[0]);
});
function sss(){
    screenn.style.background = `url(${JSON.parse(localStorage.photoscreen)})`;
    screenn.style.backgroundSize = '100%';
    screenn.style.backgroundPositionX = 'center';
    screenn.style.backgroundPositionY = 'center';
};
sss();






//                                                   Add the Enter key
let enter = document.getElementById('inp') ;
enter.addEventListener('onKeyup',(e)=>{
    if(e.keyCode === 13 ){
        console.log("healer");
    }

})


async function getMicrophoneStream() {
    try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Use the 'stream' object for further processing (e.g., recording, streaming).
    console.log('Microphone stream obtained:', stream);
    } catch (error) {
    console.error('Error accessing microphone:', error);
    }
}

  // Call the function to request permission
getMicrophoneStream(document.querySelector('.microphone'));













//  Add video

  // Check if the browser supports the mediaDevices API
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Request the user's permission to access the camera
    navigator.mediaDevices.getUserMedia({video: true})
    .then(function(stream) {
        // Assign the stream to the video element's srcObject property
        var video = document.getElementById("video");
        video.srcObject = stream;
    })
    .catch(function(error) {
        // Handle the error
        console.error(error);
    });
} else {
    // Display a message that the browser does not support the API
    alert("Your browser does not support the mediaDevices API");
}