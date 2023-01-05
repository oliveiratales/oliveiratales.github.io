$( document ).ready(function() {

let navBtn = $('.nav-item');

  let homeSection = $('#mainbody');
  let aboutSection = $('#about');
  let skillsSection = $('#skills');
  let projectsSection = $('#projects');
  let curriculum = $('#curriculum');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if(btnId == 'skills-menu') {
      scrollTo = skillsSection;
    } else if(btnId == 'projects-menu') {
      scrollTo = projectsSection;
    } else if(btnId == 'curriculum-menu') {
      scrollTo = curriculum;
    } else {
      scrollTo = homeSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 120
    }, 1500);
  });

});

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}

// Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
// function typeWriter(elemento) {
//   const textoArray = elemento.innerHTML.split('');
//   elemento.innerHTML = '';
//   for(let i = 0; i < textoArray.length; i++) {
//     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
//   }
// }

const titulo = document.querySelector('.animated');
typeWriter(titulo);

