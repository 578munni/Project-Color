const generat = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;

}

const update = () => {
  const color = generat();
  const colorBox = document.getElementById('colorBox');
  const code = document.getElementById('code');
  
  colorBox.style.backgroundColor = color;
  code.innerText = color;

}

const copy = () => {
  const code = document.getElementById('code');
  const input = document.createElement('input');
  document.body.appendChild(input);
  input.value = code.innerText;

  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  alert('color copy to clipboard');
   
}

document.getElementById('btn').addEventListener('click', ()=> {
  copy();
});

update();