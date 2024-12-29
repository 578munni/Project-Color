const generat = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;

}

const update = () => {
  const color = generat();
  const colorBox = document.getElementById('colorBox');
  colorBox.style.backgroundColor = color;
}

update();