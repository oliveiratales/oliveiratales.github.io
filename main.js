// Navigation

const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
};

const aboutButton = document.querySelector('#about-button');
const skillsButton = document.querySelector('#skills-button');
const projectsButton = document.querySelector('#projects-button');
const curriculumButton = document.querySelector('#curriculum-button');
const mainBtn = document.querySelector('.main-btn');

aboutButton.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToSection('#about-section');
});

skillsButton.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToSection('#skills-section');
});

projectsButton.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToSection('#projects-section');
});

curriculumButton.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToSection('#curriculum-section');
});

mainBtn.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToSection('#about-section');
});

// Circle Button

const btnScrollToTop = document.querySelector('#scroll-to-top');

btnScrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Dropdown Button (Mobile)

var dropdownButton = document.querySelector('.dropdown-button');
var dropdownBox = document.querySelector('.dropdown-box');
var links = document.querySelectorAll('.links-list li a');

dropdownButton.addEventListener('click', function () {
  dropdownBox.classList.toggle('show');
});

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    dropdownBox.classList.remove('show');
  });
}
