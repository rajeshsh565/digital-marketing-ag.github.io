// <------------------------------FORM SUBMISSION------------------------------>
const myForm = document.getElementById("contact-form");
const consentCheck = document.getElementById("consent");
const contactBtn = document.getElementById("contact-form-btn");
const email = document.getElementById("email");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

contactBtn.addEventListener("click", (e)=>{
    if(!consentCheck.checked){
        e.preventDefault();
        alert("Please consent!");
    }
    if(email.value === "" || firstName.value ==="" || lastName.value ===""){
        alert("Please provide all required fields!");
    }
    else{
        myForm.submit();
    }
})


// <------------------------------PROJECTS------------------------------>
const projectImg = document.getElementById("projects_img");
const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");

project1.addEventListener("click", (e)=>{
    const currActiveProject = document.querySelector(".activeProject");
    if(currActiveProject!=project1){
        currActiveProject.classList.remove("activeProject");
        project1.classList.add("activeProject");
        projectImg.src = "./assets/projects_img1.jpg";
    }
})
project2.addEventListener("click", (e)=>{
    console.log("click2");
    const currActiveProject = document.querySelector(".activeProject");
    if(currActiveProject!=project2){
        currActiveProject.classList.remove("activeProject");
        project2.classList.add("activeProject");
        projectImg.src = "./assets/projects_img2.jpg";
    }
})
project3.addEventListener("click", (e)=>{
    console.log("click3");
    const currActiveProject = document.querySelector(".activeProject");
    if(currActiveProject!=project3){
        currActiveProject.classList.remove("activeProject");
        project3.classList.add("activeProject");
        projectImg.src = "./assets/projects_img3.jpg";
    }
})


// <------------------------------SERVICES CAROUSEL------------------------------>
$('.service-carousel').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll:3,
    arrows: false,
    autoplay: true,
  autoplaySpeed: 2000,
  infinite:true,
    responsive: [
        {
            breakpoint: 992, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768, 
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576, 
            settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
  });

  $('.slide').append($("<div class='slide-content'><div><i class='fa-solid fa-laptop-code display-4 mb-2'></i></div><h4>WEB DEVELOPMENT</h4><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit sed tempore explicabo necessitatibus placeat.</p><a target='_blank' href='https://fylehq.com'>READ MORE  <span><i class='fa-solid fa-right-long'></i></span></a></div>"))