// Navigation

const aboutButton = document.querySelector('#about-button');
const skillsButton = document.querySelector('#skills-button');
const projectsButton = document.querySelector('#projects-button');
const curriculumButton = document.querySelector('#curriculum-button');
const mainBtn = document.querySelector('.main-btn');

const aboutSection = document.querySelector('#about-section');
aboutButton.addEventListener('click', (event) => {
  event.preventDefault();

  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

skillsButton.addEventListener('click', (event) => {
  event.preventDefault();

  const skillsSection = document.querySelector('#skills-section');

  skillsSection.scrollIntoView({ behavior: 'smooth' });
});

projectsButton.addEventListener('click', (event) => {
  event.preventDefault();

  const projectsSection = document.querySelector('#projects-section');

  projectsSection.scrollIntoView({ behavior: 'smooth' });
});

curriculumButton.addEventListener('click', (event) => {
  event.preventDefault();

  const curriculumSection = document.querySelector('#curriculum-section');

  curriculumSection.scrollIntoView({ behavior: 'smooth' });
});

mainBtn.addEventListener('click', (event) => {
  event.preventDefault();

  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// Circle Button

const btnScrollToTop = document.querySelector('#scroll-to-top');

btnScrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Dropdown

var dropdownButton = document.querySelector('.dropdown-button');
var dropdownBox = document.querySelector('.dropdown-box');
var links = document.querySelectorAll('.links-list li a');

dropdownButton.addEventListener('click', function() {
  dropdownBox.classList.toggle('show');
});

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    dropdownBox.classList.remove('show');
  });
}
