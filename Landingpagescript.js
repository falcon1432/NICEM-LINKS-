// =============================
// NICEM-LINKS Landing Page
// script.js
// =============================

// Sticky Navbar
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.10)";
    header.style.background = "#ffffff";
  } else {
    header.style.boxShadow = "none";
    header.style.background = "rgba(255,255,255,.95)";
  }
});

// =============================
// Reveal Animation
// =============================

const revealItems = document.querySelectorAll(
  ".service-box, .trust-card, .why-grid div, .step-grid div"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

revealItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(40px)";
  item.style.transition = "all .8s ease";
  observer.observe(item);
});

// =============================
// WhatsApp Contact Form
// =============================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !phone) {
    alert("Please enter your name and phone number.");
    return;
  }

  const text =
`Hello NICEM-LINKS,

My Name: ${name}
Phone Number: ${phone}
Email: ${email || "Not provided"}

Service Needed:
${service}

Message:
${message || "No message"}

I would like a FREE consultation.`;

  const url =
`https://wa.me/2348137303082?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");

  form.reset();
});

// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e){

    e.preventDefault();

    const target=document.querySelector(this.getAttribute("href"));

    if(target){

      target.scrollIntoView({

        behavior:"smooth"

      });

    }

  });

});

// =============================
// Floating WhatsApp Button
// =============================

const whatsapp = document.createElement("a");

whatsapp.href="https://wa.me/2348137303082";

whatsapp.target="_blank";

whatsapp.innerHTML='<i class="fab fa-whatsapp"></i>';

whatsapp.className="floating-whatsapp";

document.body.appendChild(whatsapp);

// =============================
// Back To Top Button
// =============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="back-top";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
