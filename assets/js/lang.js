const translations = {
  en: {
    title: 'Oranos - A Web Developer',
    greeting: 'This is Abdellah aka ',
    greeting2: ' A Web Developer.',
    resume: 'Explore the Resume',
    resumeLink: '/En_resume_Abdellah_Garrag.pdf',
    loaderText: 'Shaping magic, almost there... ',
    scroll: 'Dive into my universe',
    langSwitch: 'Fr',
    projectTitle: 'Projects',
    skillTitle: 'Skills',
    skillTitle2: 'Languages & Skills',
    eduTitle1: 'Baccalaureate of Physics Science',
    eduTitle2: 'Associate Degree in Physics',
    eduTitle3: 'Diploma in Web Development (Full-Stack)',
    eduTitle4: 'Python Essentials 1',
    eduTitle5: 'Python Essentials 2',
    eduTitle6: 'Javascript Essentials 1',
    eduTitle7: 'Foundations of Project Management • Google',
    eduTitle8: 'Introduction to Web Development • IBM',
    eduTitle9: 'Computer Hardware Basics',
    eduLocal1: 'Youssef Ben Tachfine High School ',
    eduLocal2: 'Faculty of Sciences Semlalia ',
    eduLocal3: 'NTIC Institute ',
    eduLocal4: 'Issued by Cisco ',
    eduLocal5: 'Issued by Cisco ',
    eduLocal6: 'Issued by Cisco ',
    eduLocal7: 'Issued by Coursera ',
    eduLocal8: 'Issued by Coursera ',
    eduLocal9: 'Issued by Cisco ',
    ciscoCertificate: 'Check Certificate Validity',
    courseraCertificate: 'Check Certificate Validity',
    eduDate4: 'July 18, 2024',
    eduDate5: 'July 31, 2024',
    eduDate6: 'August 5, 2024',
    eduDate7: 'August 29, 2024',
    eduDate8: 'September 3, 2024',
    eduDate9: 'September 6, 2024',
    responsiveDesign: 'Responsive Design',
    scrollUp: 'Dive back to the top',
    footerRights: '© 2024 Oranos. All rights reserved.',
    footerParagraph: 'Crafting digital experiences that turn dreams into stunning realities. Every detail is designed to inspire and captivate.',
    footerFormTitle: 'Get in touch',
    submitBtn: 'Submit',
    name: 'Your Name', // placeholder
    email: 'Your Email', // placeholder
    message: 'Write a Message...' // placeholder
  },
  fr: {
    title: 'Oranos - Développeur Web',
    greeting: 'C\'est Abdellah alias ',
    greeting2: ' Un Développeur Web.',
    resume: 'Explorer le CV',
    resumeLink: '/Fr_resume_Abdellah_Garrag.pdf',
    loaderText: 'La magie se façonne, c\'est presque prêt...',
    scroll: 'Plongez dans mon univers',
    langSwitch: 'En',
    projectTitle: 'Projets',
    skillTitle: 'Compétences',
    skillTitle2: 'Langages & Compétences',
    eduTitle1: 'Baccalauréat en Sciences Physiques',
    eduTitle2: 'DEUG en Physique',
    eduTitle3: 'Diplôme en Développement Web (Full-Stack)',
    eduTitle4: 'Python Essentials 1',
    eduTitle5: 'Python Essentials 2',
    eduTitle6: 'Javascript Essentials 1',
    eduTitle7: 'Fondations de la Gestion de Projet • Google',
    eduTitle8: 'Introduction au Développement Web • IBM',
    eduTitle9: 'Bases du Matériel Informatique',
    eduLocal1: 'Lycée Youssef Ben Tachfine ',
    eduLocal2: 'Faculté des Sciences Semlalia ',
    eduLocal3: 'Institut NTIC ',
    eduLocal4: 'Délivré par Cisco ',
    eduLocal5: 'Délivré par Cisco ',
    eduLocal6: 'Délivré par Cisco ',
    eduLocal7: 'Délivré par Coursera ',
    eduLocal8: 'Délivré par Coursera ',
    eduLocal9: 'Délivré par Cisco ',
    ciscoCertificate: 'Vérifier la validité du certificat',
    courseraCertificate: 'Vérifier la validité du certificat',
    eduDate4: '18 Juillet 2024',
    eduDate5: '31 Juillet 2024',
    eduDate6: '5 Août 2024',
    eduDate7: '29 Août 2024',
    eduDate8: '3 Septembre 2024',
    eduDate9: '6 Septembre 2024',
    responsiveDesign: 'Design Responsive',
    scrollUp: 'Remontez en haut',
    footerRights: '© 2024 Oranos. Tous droits réservés.',
    footerParagraph: 'Création d\'expériences numériques qui transforment les rêves en réalités époustouflantes. Chaque détail est conçu pour inspirer et captiver.',
    footerFormTitle: 'Contactez-nous',
    submitBtn: 'Envoyer',
    name: 'Votre Nom', // placeholder
    email: 'Votre Email', // placeholder
    message: 'Écrivez un Message...' // placeholder
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Get the stored language from localStorage or default to 'en'
  let currentLang = localStorage.getItem('lang') || 'en';
  
  // Set the language on page load
  setLanguage(currentLang);

  // Set up the language switch button click event
  document.getElementById('langSwitch').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    // Toggle language
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    // Set new language
    setLanguage(currentLang);
    // Store the language in localStorage
    localStorage.setItem('lang', currentLang);
  });
  document.getElementById('sm-langSwitch').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    // Toggle language
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    // Set new language
    setLanguage(currentLang);
    // Store the language in localStorage
    localStorage.setItem('lang', currentLang);
  });
});





function setLanguage(lang) {

  document.title = translations[lang].title;
  document.getElementById('greeting').firstChild.textContent = translations[lang].greeting;
  document.getElementById('greeting').lastChild.textContent = translations[lang].greeting2;
  document.getElementById('resume').textContent = translations[lang].resume;
  document.getElementById('resume').href = translations[lang].resumeLink;
  document.getElementById('loader-text').textContent = translations[lang].loaderText;
  document.getElementById('scroll').firstChild.textContent = translations[lang].scroll;
  document.getElementById('langSwitch').textContent = translations[lang].langSwitch;
  document.getElementById('sm-langSwitch').textContent = translations[lang].langSwitch;
  // projects !!!!
  document.getElementById('projectTitle').textContent = translations[lang].projectTitle;
  document.getElementById('projectTitle2').textContent = translations[lang].projectTitle;
  // skills !!!!
  document.getElementById('skillTitle').textContent = translations[lang].skillTitle;
  document.getElementById('skillTitle2').textContent = translations[lang].skillTitle2;
  document.getElementById('responsiveDesign').textContent = translations[lang].responsiveDesign;
  // education !!!!
  document.getElementById('eduTitle1').textContent = translations[lang].eduTitle1;
  document.getElementById('eduTitle2').textContent = translations[lang].eduTitle2;
  document.getElementById('eduTitle3').textContent = translations[lang].eduTitle3;
  document.getElementById('eduTitle4').textContent = translations[lang].eduTitle4;
  document.getElementById('eduTitle5').textContent = translations[lang].eduTitle5;
  document.getElementById('eduTitle6').textContent = translations[lang].eduTitle6;
  document.getElementById('eduTitle7').textContent = translations[lang].eduTitle7;
  document.getElementById('eduTitle8').textContent = translations[lang].eduTitle8;
  document.getElementById('eduTitle9').textContent = translations[lang].eduTitle9;
  document.getElementById('eduLocal1').firstChild.textContent = translations[lang].eduLocal1;
  document.getElementById('eduLocal2').firstChild.textContent = translations[lang].eduLocal2;
  document.getElementById('eduLocal3').firstChild.textContent = translations[lang].eduLocal3;
  document.getElementById('eduLocal4').firstChild.textContent = translations[lang].eduLocal4;
  document.getElementById('eduLocal5').firstChild.textContent = translations[lang].eduLocal5;
  document.getElementById('eduLocal6').firstChild.textContent = translations[lang].eduLocal6;
  document.getElementById('eduLocal7').firstChild.textContent = translations[lang].eduLocal7;
  document.getElementById('eduLocal8').firstChild.textContent = translations[lang].eduLocal8;
  document.getElementById('eduLocal9').firstChild.textContent = translations[lang].eduLocal9;
  document.getElementById('ciscoCertificate').textContent = translations[lang].ciscoCertificate;
  document.getElementById('ciscoCertificate2').textContent = translations[lang].ciscoCertificate;
  document.getElementById('ciscoCertificate3').textContent = translations[lang].ciscoCertificate;
  document.getElementById('ciscoCertificate4').textContent = translations[lang].ciscoCertificate;
  document.getElementById('courseraCertificate').textContent = translations[lang].courseraCertificate;
  document.getElementById('courseraCertificate2').textContent = translations[lang].courseraCertificate;
  document.getElementById('eduDate4').textContent = translations[lang].eduDate4;
  document.getElementById('eduDate5').textContent = translations[lang].eduDate5;
  document.getElementById('eduDate6').textContent = translations[lang].eduDate6;
  document.getElementById('eduDate7').textContent = translations[lang].eduDate7;
  document.getElementById('eduDate8').textContent = translations[lang].eduDate8;
  document.getElementById('eduDate9').textContent = translations[lang].eduDate9;
  // footer !!!!
  document.getElementById('scrollUp').firstChild.textContent = translations[lang].scrollUp;
  document.getElementById('footerRights').textContent = translations[lang].footerRights;
  document.getElementById('footerParagraph').textContent = translations[lang].footerParagraph;
  document.getElementById('footerFormTitle').textContent = translations[lang].footerFormTitle;
  document.getElementById('submitBtn').textContent = translations[lang].submitBtn;
  // footer form placeholders !!!!
  document.getElementById('name').placeholder = translations[lang].name;
  document.getElementById('email').placeholder = translations[lang].email;
  document.getElementById('message').placeholder = translations[lang].message;
}

