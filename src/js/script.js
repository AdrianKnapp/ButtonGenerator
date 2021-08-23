const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
const userEvents = ['change', 'keyup', 'input'];

userEvents.forEach(event => controles.addEventListener(event, handleChange));


const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  paddingLeftRight(value) {
    this.element.style.paddingRight = value + 'px';
    this.element.style.paddingLeft = value + 'px';
  },
  paddingTopBottom(value) {
    this.element.style.paddingTop = value + 'px';
    this.element.style.paddingBottom = value + 'px';
  },
  text(value) {
    this.element.innerText = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
}

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);

  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  localStorage.setItem(name, value);
}

function setValues() {
  const properties = Object.keys(localStorage);

  properties.forEach(propertie => {
    const localStorageValue = localStorage.getItem(propertie);

    if (handleStyle[propertie]) {
      handleStyle[propertie](localStorageValue);
      controles.elements[propertie].value = localStorageValue;
    }
  });
  showCss()
}
setValues();

function showCss() {
  cssText.innerHTML = '<span> ' + btn.style.cssText.split(';').join(';</span><span>');
}











/* const contato = document.querySelector('#contato');
const dados = {};

function handleKeyUp(e) {
  inputName = e.target.name;
  inputValue = e.target.value;

  dados[inputName] = inputValue;

  console.log(dados);
}

contato.addEventListener('change', handleKeyUp); */