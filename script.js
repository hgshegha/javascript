

const bodyTwo = document.querySelector('body')

bodyTwo.innerHTML += `
    <div class="m">
            
    </div>

    
    <div class="message-wrapper animate__animated animate__slideInUp">
        <p  style="margin-block-start: 0; margin-block-end: 0; width: 100%; height:100%; overflow: show;"><iframe class="chatplicate-iframe"  src="https://app.chatplicate.com" width="100%" height="100%" scrolling="yes">Chatplicate</iframe></p>
    </div>
`

bodyTwo.innerHTML += `
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="module" src="script.js"></script>
`

$('.popup-button-jobs').click(function(e) {
    e.preventDefault();
    test.style.display = 'block'
    document.body.style.opacity = 0.9
    $('.message-wrapper').fadeIn(900);
    body.style.overflow = 'hidden'
    main.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: grey;
        top: 0;
        left: 0;
        opacity: 0.4;
    `
})


$(".m").click(function(e){
    $('.message-wrapper').fadeOut(100);
    $('.m').fadeOut(100);
    $('html').removeClass('noScroll')
})


const head = document.querySelector('head')

head.innerHTML += `
<link rel="stylesheet" href="main.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Unbounded:wght@200;300&display=swap" rel="stylesheet">
<link
rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
/>
`



let buttonJobs = document.querySelector('.popup-button-jobs');
let backColorbutton = buttonJobs.getAttribute('background-color-jobs-button');
let fontColorButton = buttonJobs.getAttribute('font-color-jobs-button');
let fontNameButton = buttonJobs.getAttribute('font-name-jobs-button');
let companyUrlButton = buttonJobs.getAttribute('company-url-jobs-button')


buttonJobs.style.cssText = `
    font-size: 15px;
    font: inter;
    font-weight: 600;
    border-radius: 5px;
    width: 150px;
    height: 45px;
    padding: 12,12,24,24;
    border: none;
    background-color: ${backColorbutton};
    color: ${fontColorButton};
    font-family: ${fontNameButton};
`

let chatplicateIframe = document.querySelector('.chatplicate-iframe');
chatplicateIframe.removeAttribute('src', 'https://app.chatplicate.com')
chatplicateIframe.setAttribute('src', companyUrlButton)




let test = document.querySelector('.message-wrapper')
let body = document.querySelector('body')
let main = document.querySelector('.m')
let message = document.querySelector('.message')
let chatplicate = document.querySelector('.chatplicate-iframe')

console.log(main)

test.style.cssText = `
     display: none;
     border: 1px solid white;
     position: fixed;
     top: 5%;
     left: 5%; 
     border-radius: 5px;
     background-color:white;
     z-index: 2;
     height: 90%;
     width: 90%;
     overflow:scroll;
     overflow-x:hidden;
`

main.style.zIndex = 1


message.style.cssText = `
    font-family: 'Roboto Condensed', sans-serif;
     border-radius: 10px;
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
     height: 100%;
`

chatplicate.style.border = 'none'