document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const images = [
      "images/banner/icon1.svg",
      "images/banner/icon2.svg",
      "images/banner/icon3.svg",
    ];

    const scroller = document.getElementById("scroller");
    const container = document.getElementById("scroller-container");

    if (!scroller || !container) return;

    images.concat(images).forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.className = "scroll-image";
      scroller.appendChild(img);
    });

    let scrollX = 0;
    let isPaused = false;
    const scrollSpeed = 1;
    let lastCenteredImg = null;

    function updateScroll() {
      if (!isPaused) {
        scrollX -= scrollSpeed;
        scroller.style.transform = `translateX(${scrollX}px)`;
      }

      if (Math.abs(scrollX) >= scroller.scrollWidth / 2) {
        scrollX = 0;
      }

      centerImageHighlight();
      requestAnimationFrame(updateScroll);
    }

    function centerImageHighlight() {
      const containerCenter = container.offsetWidth / 2;

      let closestImg = null;
      let closestDistance = Infinity;

      scroller.querySelectorAll(".scroll-image").forEach((img) => {
        const imgCenter = img.offsetLeft + img.offsetWidth / 2 - scrollX;
        const distance = Math.abs(containerCenter - imgCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestImg = img;
        }
      });

      // Set opacity
      scroller.querySelectorAll(".scroll-image").forEach((img) => {
        img.style.opacity = img === closestImg ? "1" : "0.6";
      });

      // Use center alignment tolerance = 1/3 of image width
      const imgWidth = closestImg.offsetWidth;
      const tolerance = imgWidth / 3;
      const isCentered =
        Math.abs(
          containerCenter - (closestImg.offsetLeft + imgWidth / 2 - scrollX)
        ) < tolerance;

      if (isCentered && !isPaused && closestImg !== lastCenteredImg) {
        isPaused = true;
        lastCenteredImg = closestImg;

        setTimeout(() => {
          isPaused = false;
        }, 2000); // Pause for 2 seconds
      }
    }

    updateScroll();
  }, 100);
    // bannerHeading
   setTimeout(() => {
     const headingElement = document.getElementById("bannerHeading");
     const dots = document.querySelectorAll("#dotContainer .dot");

     const textOptions = [
       {
         title: "Personalized One-to-One",
         subtitle: "Tutoring at Our Center",
       },
       { title: "Expert Guidance", subtitle: "for Every Student" },
       { title: "Achieve More", subtitle: "With Focused Learning" },
     ];

     let index = 0;

     function updateBannerText() {
       // Add fade-out class
       headingElement.classList.add("fade-out");

       setTimeout(() => {
         const { title, subtitle } = textOptions[index];

         headingElement.innerHTML = `
        ${title}<br/><span id="bannerSub" class="font-thin">${subtitle}</span>
      `;

         // Add fade-in
         headingElement.classList.remove("fade-out");
         headingElement.classList.add("fade");

         // Update dots
         dots.forEach((dot, i) => {
           dot.classList.remove("bg-primary");
           dot.classList.add("bg-drpColor");
           if (i === index) {
             dot.classList.remove("bg-drpColor");
             dot.classList.add("bg-primary");
           }
         });

         // Reset fade class after animation to ensure repeatability
         setTimeout(() => {
           headingElement.classList.remove("fade");
         }, 800);

         index = (index + 1) % textOptions.length;
       }, 700); // Wait for fade-out to complete
     }

     // Initial call
     updateBannerText();

     // Change every 3 seconds
     setInterval(updateBannerText, 3000);
   }, 400);

});



