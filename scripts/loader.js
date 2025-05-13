// Load HTML sections dynamically
window.onload = () => {
  const sections = [
    "header",
    "banner",
    "story",
    "way",
    "subject",
    "prepare",
    "video",
    "master",
    "review",
    "questions",
    "blog",
    "footer",
  ];

  sections.forEach((section) => {
    fetch(`sections/${section}.html`)
      .then((res) => res.text())
      .then((html) => {
        document.getElementById(section).innerHTML = html;
      });
  });
};
// heder open
function openMenu() {
   
    const mobileMenu = document.getElementById("mobileMenu");

if(!mobileMenu) return
      mobileMenu.classList.toggle("hidden");
  
}
// dropDown
 let isOpen = false;

 function drpDown() {
   const dropDown = document.getElementById("dropElement");

   if (!isOpen) {
     dropDown.classList.remove("hidden");
   } else {
     dropDown.classList.add("hidden");
   }

   isOpen = !isOpen;
 }
// Show the hoverdShow section with dynamic content
function showHoverdSection(section) {
  const hoverdShow = document.getElementById('hoverdShow');
  const labels = [
    "Math",
    "Physics",
    ,
    "Chemistry",
    "Biology",
    "English",
    "Arabic",
    "Computer Science",
    "Civics",
    "Geography",
    "Economics",
    "History",
    "Politics",
  ];
  // Dynamically load the content for each section
  let html = "";

  labels.forEach((item) => {
    html += `
      <div class="flex items-center justify-between border-b border-black/20 p-3 text-black">
        ${item}
    
      </div>
    `;
  });


  hoverdShow.innerHTML = html;
 section === "section1" ? hoverdShow.classList.remove("hidden") : "";

}
// Hide the hoverdShow section when not hovering
function hideHoverdSection() {
  const hoverdShow = document.getElementById("hoverdShow");
  hoverdShow.classList.add("hidden");
}

 let faqOpen = false;

function toggleFaq(id) {
  const totalFaqs = 4; // update this if you have more
  for (let i = 1; i <= totalFaqs; i++) {
    const answer = document.getElementById(`faq-answer${i}`);
    const icon = document.getElementById(`faq-icon${i}`);
    if (!answer || !icon) continue;

    if (i === id) {
      const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";
      if (isOpen) {
        answer.style.maxHeight = "0px";
        icon.style.transform = "rotate(0deg)";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
      }
    } else {
      answer.style.maxHeight = "0px";
      icon.style.transform = "rotate(0deg)";
    }
  }
}


  // On page load, collapse all answers
  window.addEventListener("DOMContentLoaded", () => {
    const allAnswers = document.querySelectorAll("[id^='faq-answer']");
    allAnswers.forEach((el) => (el.style.maxHeight = "0px"));
  });