window.onload=function(){
  let text="Iam a frontend developer";
  let i=0;
  let speed=100;
  let element= document.getElementById("text");
  function typing(){
    if(i < text.length) {
        element.innerHTML +=text.charAt(i);
        i++;
        setTimeout(typing,speed);
    }
  }
  typing();

};
// script.js

// Smooth scroll for nav links
document.querySelectorAll('.navlist a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent jump
    const targetId = this.getAttribute('href').slice(1); // Remove "#"
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form validation feedback
document.querySelector('form').addEventListener('submit', function(e) {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  if (!name.value || !email.value || !message.value) {
    e.preventDefault();
    alert('Please fill out all fields before submitting.');
  } else {
    alert('Thank you for contacting us, ' + name.value + '!');
  }
});

// Highlight nav item on scroll
const sections = document.querySelectorAll("section, div[id='Services'], div[id='Skills'], div[id='Contact']");
const navLinks = document.querySelectorAll(".navlist a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});



