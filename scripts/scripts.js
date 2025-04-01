function toggleMenu() {
    document.querySelector(".mobile-menu").classList.toggle("active");
    document.querySelector(".hamburger").classList.toggle("active");
}

//Close menu when resizing back to desktop

window.addEventListener("resize",function () {
    if(window.innerWidth > 768){
        document.querySelector(".mobile-menu").classList.remove("active");
        document.querySelector(".hamburger").classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", function (e) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});

// === FOOL'S FUEL DOT INDICATORS ===
document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("fuelGallery");
    const dotsContainer = document.getElementById("fuelDots");
  
    if (gallery && dotsContainer) {
      const drinks = gallery.querySelectorAll("img");
  
      // Create dots
      drinks.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
  
        dot.addEventListener("click", () => {
          drinks[index].scrollIntoView({ behavior: "smooth", inline: "start" });
        });
  
        dotsContainer.appendChild(dot);
      });
  
      const dots = dotsContainer.querySelectorAll(".dot");
  
      // Listen to scroll and update active dot
      gallery.addEventListener("scroll", () => {
        let closest = 0;
        let minDist = Infinity;
  
        drinks.forEach((img, i) => {
          const box = img.getBoundingClientRect();
          const dist = Math.abs(box.left - gallery.getBoundingClientRect().left);
          if (dist < minDist) {
            minDist = dist;
            closest = i;
          }
        });
  
        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[closest]) dots[closest].classList.add("active");
      });
    }
  });