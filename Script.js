let programURL;
let codeURL;
let certURL;

function menuTagOut(icon){
    let tag;
    let id = null;
    if(icon == "home"){
        tag = document.getElementById("homeTxt");
    }else if(icon == "resume"){
        tag = document.getElementById("resumeTxt");
    }else if(icon == "work"){
        tag = document.getElementById("workTxt");
    }else if(icon == "award"){
        tag = document.getElementById("awardsTxt");
    }
    let pos = 0;
    let op = 0;
    clearInterval(id);
    id = setInterval(frame, 3);
    function frame(){
        if (pos == 100) {
            clearInterval(id);
        } 
        else{
            pos++;  
            op += 1;
            tag.style.left = pos + "px"; 
            tag.style.opacity = op + "%";
        }
    }
}

function menuTagIn(icon){
    let tag;
    let id = null;
    if(icon == "home"){
        tag = document.getElementById("homeTxt");
    }else if(icon == "resume"){
        tag = document.getElementById("resumeTxt");
    }else if(icon == "work"){
        tag = document.getElementById("workTxt");
    }else if(icon == "award"){
        tag = document.getElementById("awardsTxt");
    }
    let pos = 100;
    let op = 100;
    clearInterval(id);
    id = setInterval(frame, 3);
    function frame(){
        if (pos == 0) {
            clearInterval(id);
        } 
        else{
            pos--;  
            op -= 1;
            tag.style.left = pos + "px"; 
            tag.style.opacity = op + "%";
        }
    }
}

function displaySample(sample){
    let program;
    let code;

    let sampleOne;
    let sampleTwo;
    let sampleThree;

    program = document.getElementById("programPic");
    code = document.getElementById("codePic");
    text = document.getElementById("sampleDescription");

    sampleOne = document.getElementById("sampleOne");
    sampleTwo = document.getElementById("sampleTwo");
    sampleThree = document.getElementById("sampleThree");

    sampleOne.style.opacity = "100%";
    sampleTwo.style.opacity = "100%";
    sampleThree.style.opacity = "100%";

    document.getElementById("tempFill").style.visibility = "hidden";
    document.getElementById("sideFill").style.visibility = "visible";
    document.getElementById("mainFill").style.visibility = "visible";
    document.getElementById("descriptionFill").style.visibility = "visible";
    document.getElementById("websiteLink").style.display = "none";

    if(sample == 1){
        programURL = "Resources/Work Samples/Game Website Picture.png";
        codeURL = "Resources/Work Samples/Game Website Code Picture.png";
        text.textContent = "This is a website I created as part of a group video game project. The website informs viewers about the game and the background of creating it. If you are interested in viewing the website and possibly interested in installing and trying the game a link to it is located below.";
        document.getElementById("websiteLink").style.display = "flex";
        
        sampleOne.style.opacity = "50%";
    }else if(sample == 2){
        programURL = "Resources/Work Samples/Binary Clock Picture.png";
        codeURL = "Resources/Work Samples/Binary Clock Code Picture.png";
        text.textContent = "This is an application I created as an extra credit assignment in Visual Basic. The application is simply a clock with lights that glow based on the current time in binary format.";

        sampleTwo.style.opacity = "50%";
    }else if(sample == 3){
        programURL = "Resources/Work Samples/Comic Convention Picture.png";
        codeURL = "Resources/Work Samples/Comic Convention Code Picture.png";
        text.textContent = "This is an application I created for an assignment in Visual Basic. The application takes a number of people that are planning to attend a comic convention and calculates the registration cost depending on the entry type that is selected.";

        sampleThree.style.opacity = "50%";
    }

    program.src = programURL;
    code.src = codeURL;

    program.style.visibility = "visible";
    code.style.visibility = "visible";
}

function displayPopup(img){
    let popupImg = document.getElementById("popupPic");
    let background = document.getElementById("popupBackground");
    let container = document.getElementById("popupContainer");
    
    if (img == 1){
        popupImg.src = programURL;
    }
    else if (img == 2){
        popupImg.src = codeURL;
    }else if (img == 3){
        popupImg.src = certURL;
    }

    background.style.visibility = "visible";
    container.style.visibility = "visible";
}

function closePopup(){
    let background = document.getElementById("popupBackground");
    let container = document.getElementById("popupContainer");

    background.style.visibility = "hidden";
    container.style.visibility = "hidden";
}

function displayAwardTxt(award){

    document.querySelectorAll('.awardItem').forEach(function(el) {
        el.classList.remove('show');
    });

    document.getElementById('award' + award).classList.add('show');
    document.getElementById('cert' + award).classList.add('show');

    if (award == 1){
        certURL = "Resources/Cert Images/HTML and CSS.png";
    }else if (award == 2){
        certURL = "Resources/Cert Images/JavaScript.png";
    }else if (award == 3){
        certURL = "Resources/Cert Images/Python.png";
    }else if (award == 4){
        certURL = "Resources/Cert Images/OSHA.png";
    }else if (award == 5){
        certURL = "Resources/Cert Images/Databases.png";
    }else if (award == 6){
        certURL = "Resources/Cert Images/Software Development.png";
    }
}