// loading fade in animation
const observer = new IntersectionObserver((entries)=>{
   entries.forEach((entry)=>{
     console.log(entry)
     if(entry.isIntersecting){
       entry.target.classList.add('show')
     }else{
       entry.target.classList.remove('show')
 
     }
   })
 })
 const hiddenElements= document.querySelectorAll(".hidden")
 hiddenElements.forEach((el)=>observer.observe(el))
 
 
 

// scrolling progress bar 
/*
scroll indicator there was a consflict because you can't use 
two window.onscroll in the same code and the result was that only the last one will work 
That’s why I used window.addEventListener("scroll", function and it worked like a charm!!!!!
*/

let indicator=document.querySelector(".indicator");
window.addEventListener("scroll", function(){
  let documentHeight=document.documentElement.scrollHeight;
  let viewportHeight=document.documentElement.clientHeight;
  
  // to get the percentage of the scroll (scrollY is in px)
  console.log(scrollY)
  let percentageScrolled=(scrollY/(documentHeight - viewportHeight))*100;
  
  indicator.style.width=percentageScrolled+"%"
  
});







// the class name will be injected in the intersection with the section so that the css be recognized !!!!!
// education vertical bar
document.addEventListener('DOMContentLoaded', (event) => {
  const educationElements = document.querySelectorAll('.education');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.1
  });
  
  educationElements.forEach(element => {
    observer.observe(element);
  });
});





document.addEventListener('DOMContentLoaded', (event) => {
  const educationElements = document.querySelectorAll('.container-dot');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('dot-in-view');
      } else {
        entry.target.classList.remove('dot-in-view');
      }
    });
  }, {
    threshold: 0.1
  });
  
  educationElements.forEach(element => {
    observer.observe(element);
  });
});









// // the class name will be injected in the intersection with the section so that the css be recognized !!!!!
// // education
// document.addEventListener('DOMContentLoaded', (event) => {
//   const educationElement = document.querySelector('#education');
//   const containerElements = document.querySelectorAll('.container');
  
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         if (entry.target.id === 'education') {
//           entry.target.classList.add('in-view');
//         } else {
//           entry.target.classList.add('in-view');
//         }
//       } else {
//         if (entry.target.id === 'education') {
//           entry.target.classList.remove('in-view');
//         } else {
//           entry.target.classList.remove('in-view');
//         }
//       }
//     });
//   });
  
//   observer.observe(educationElement);
//   containerElements.forEach(element => {
//     observer.observe(element);
//   });
// });





// the class name will be injected in the intersection with the section so that the css be recognized !!!!!
// skills
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("skills");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("skills-section");
            } else {
                entry.target.classList.remove("skills-section");
            }
        });
    }, {
    });

    observer.observe(skillsSection);
});

// Get all elements with class 'dream'
let dreamElements = document.querySelectorAll('#dream');

function dreamer() {
  dreamElements.forEach(element => {
    element.classList.add('dream');
  });
}

function remove_dreamer() {
  dreamElements.forEach(element => {
    element.classList.remove('dream');
  });
}








// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }



document.getElementById('scrollUp').addEventListener('click', function scrollToTop() {
  const scrollInterval = setInterval(() => {
    document.documentElement.style.scrollSnapType = 'none';

    const currentScroll = window.scrollY;
    if (currentScroll > 0) {
      window.scrollBy(0, -50000); // Adjust the scroll amount as needed
    } else {
      clearInterval(scrollInterval); 
      document.documentElement.style.scrollSnapType = 'y mandatory'; // Restore the scroll snap type
    }
  },16); // Adjust the interval for smoother scrolling
});




// dive into my universe : scroll down
document.querySelector('.scroll').addEventListener('click', function() {
  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});


// the small navbar
const menuToggle=document.getElementById("menuToggle")
menuToggle.addEventListener("click",function (){
   menuToggle.classList.toggle('active');
   const smallNav=document.getElementById("sm-nav")
   if(menuToggle.classList.contains('active')){
      smallNav.classList.add("sm-nav")
   }else{
      smallNav.classList.remove("sm-nav")
   }
   
});
document.addEventListener("scroll",function (){
   const menuToggle=document.getElementById("menuToggle")
      menuToggle.classList.remove('active');
   const smallNav=document.getElementById("sm-nav")
   smallNav.classList.remove("sm-nav")
})



document.addEventListener("click", function(event) {
const menuToggle = document.getElementById("menuToggle");
const smallNav = document.getElementById("sm-nav");

// Check if the click target is inside the 'smallNav' element
if (smallNav && !smallNav.contains(event.target) && menuToggle && !menuToggle.contains(event.target)) {
    // The click is outside the 'sm-nav' element
    if (menuToggle) {
        menuToggle.classList.remove('active');
    }

    if (smallNav) {
        smallNav.classList.remove("sm-nav");
    }
}
});








// navbar links intersaction
let sections = document.querySelectorAll(".snap");
let largNavLinks = document.querySelectorAll("a.lg-links");
let smallNavLinks = document.querySelectorAll("a.sm-links");

window.addEventListener("scroll", function() => {
    sections.forEach(sect => {
        let top = window.scrollY;
        let offset = sect.offsetTop - 50; // Adjust offset if needed
        let height = sect.offsetHeight;
        let id = sect.getAttribute("id");

        
// large navbar
        if (top >= offset && top < offset + height) {
            largNavLinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector('a.lg-links[href*=' + id + ']');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }


// small navbar
        if (top >= offset && top < offset + height) {
          smallNavLinks.forEach(link => {
              link.classList.remove('active');
          });

          let activeLink = document.querySelector('a.sm-links[href*=' + id + ']');
          if (activeLink) {
              console.log(`Activating link: ${activeLink}`);
              activeLink.classList.add('active');
          }
      }






    });








});


// loader 
var body=document.getElementById("body");
var loader=document.querySelector(".loader");
var html=document.querySelector("html");
window.addEventListener("load",function(){
  loader.style.display="none";
  body.style.overflowY="visible"
  html.style.overflowY="visible"
})
