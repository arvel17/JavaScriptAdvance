//Tagged Template
// const nama = 'arvel';
// const umur = 20;

// function coba(strings, ...values){
//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }
// const str = coba `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


//Highlight
// const nama = 'arvel';
// const umur = 20;

// function highlight(strings, ...values){
//   return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
// }
// const str = highlight `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// document.body.innerHTML = str;


// //Sanitize
// function sanitize(strings, ...values) {
//   let result = '';
//   strings.forEach((string, i) => {
//     result += string;
//     if (values[i]) {
//       // Sanitasi nilai dengan mengganti karakter khusus HTML untuk menghindari script injection
//       result += values[i].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
//     }
//   });
//   return result;
// }

// let username = '<script>alert("Hello!")</script>';
// let message = 'Welcome to our website!';

// let sanitizedOutput = sanitize`<div><p>Hello, ${username}!</p><p>${message}</p></div>`;

// console.log(sanitizedOutput);

//translation
const translations = {
  en: {
    greeting: 'Hello!',
    instruction: 'Select your preferred language:'
  },
  fr: {
    greeting: 'Bonjour!',
    instruction: 'Sélectionnez votre langue préférée :'
  },
  es: {
    greeting: '¡Hola!',
    instruction: 'Seleccione su idioma preferido:'
  }
};

function translate(language) {
  document.getElementById('greeting').textContent = translations[language].greeting;
  document.getElementById('instruction').textContent = translations[language].instruction;
}

document.getElementById('languageSelector').addEventListener('change', function() {
  const selectedLanguage = this.value;
  translate(selectedLanguage);
});

// Set default language
translate('en');


