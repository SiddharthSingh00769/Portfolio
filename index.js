gsap.from(".navbar", {opacity: 0 , duration: 3})
gsap.to(".sid", {duration: 1.5, text: "Siddharth", delay: .5})
gsap.to("#frontend", {duration: 2.5, text: "I'm a Front End Developer.", delay: 1.5});
const bar = document.getElementsByClassName('bar')[0];
const insideBar = document.getElementById('insidebar');
const b= document.getElementById('mainbody');
let isOpen = false;
  
bar.addEventListener('click', () => {
    if (isOpen) {
      bar.innerHTML = `<i class="menu_btn bi bi-list text-2xl"></i>`;
      insideBar.classList.add('hidden');
      insideBar.classList.remove('flex');
      isOpen = false;
      } else {
        bar.innerHTML = `<i class="menu_btn bi bi-x text-2xl"></i>`;
        insideBar.classList.remove('hidden');
        insideBar.classList.add('flex');
        isOpen = true;
      }
    });

  

   