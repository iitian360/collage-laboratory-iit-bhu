// navbar////////
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.documentElement.scrollTop > 80) {
        document.getElementById("bar").style = "background: #141E30"
    } else {
        document.getElementById("bar").style = "background:inherit";

    }
}
// BURGER/// side bar
const burger=document.getElementById('bur');
burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
   
})

//  animation on head text//

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.head');
      const square2=entry.target.querySelector('.sec_text');
  
      if (entry.isIntersecting) {
        square.classList.add('active_animation');
        square2.classList.add('active2');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('active_animation');
      square2.classList.remove('active2');
    });
  });
  
  observer.observe(document.querySelector('.content'));

  // side bar

  