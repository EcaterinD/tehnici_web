const galeria = [
    {
      title: 'La persistencia de la memoria',
      translate: "Persistența memoriei",
      image: "https://anamariaonisei.ro/wp-content/uploads/2021/01/1-1-768x518.jpeg",
      YearPublished: "1931",
    },
    {
      title: 'La metamorfosis de Narciso',
      translate: "Metamorfoza lui Narciso",
      image: "https://anamariaonisei.ro/wp-content/uploads/2021/01/6-2-768x639.jpg",
      YearPublished: "1937",
    },
    {
      title: 'Jirafa en llamas',
      translate: "Girafă în flăcări",
      image: "https://anamariaonisei.ro/wp-content/uploads/2021/01/10-2.jpg",
      YearPublished: "1937",
    },
    {
      title: 'Adolescence',
      translate: "Adolescent",
      image: "https://i.pinimg.com/originals/f8/d1/81/f8d181df627a2d0dbf2f8dfaf850ce94.jpg",
      YearPublished: "1941",
    },
    {
      title: 'La Tentation de Saint Antoine',
      translate: "Ispita Sfântului Antonie",
      image: "https://upload.wikimedia.org/wikipedia/en/c/c0/The_Temptation_of_St._Anthony.jpg",
      YearPublished: "1946",
    },
    {
      title: 'Cristo de San Juan de la Cruz',
      translate: "Hristos al Sfântului Ioan al Crucii",
      image: "https://anamariaonisei.ro/wp-content/uploads/2021/01/5-2-590x1024.jpg",
      YearPublished: "1951",
    },
    {
      title: 'Galatea de las esferas',
      translate: "Galatea Sferelor",
      image: "https://anamariaonisei.ro/wp-content/uploads/2021/01/7-721x1024.png",
      YearPublished: "1952",
    }
  ];
  
  let ArtId = 0;
  
  window.onload = () => {
    document.getElementById('addArt').onclick = addArt;
    document.getElementById('removeArt').onclick = removeArt;
    setInterval(() => {
      document.body.addEventListener('mouseout', handle);
  }, 7000);
  }
  
  function randomColor()
{
    const r=Math.floor(Math.random()*219)+ 106;
    const g=Math.floor(Math.random()*219)+ 106;
    const b=Math.floor(Math.random()*219)+ 106;

    return `rgb(${r},${g},${b})`;
}
function handle(event)
{
  event.preventDefault();
  let elem=[...document.getElementsByTagName('form')];
  elem[0].style.background=randomColor();
}

  function addArt() {
    const painting = galeria[ArtId];
    const pElement = document.createElement('div');
    pElement.classList.add('paint');
    pElement.title = 'Traducere: '+ painting.translate;
  
    const pContent = document.createElement('div');
    pContent.classList.add('content');
  
    const h1 = document.createElement('h1');
    h1.textContent = painting.title;
  
    const p = document.createElement('p');
    p.textContent = 'Anul apariției: ' + painting.YearPublished;
  
    pContent.append(h1, p);
  
    const img = document.createElement('img');
    img.src = painting.image;
  
    pElement.append(img, pContent);
  
    document.querySelector('#Container').append(pElement);
  
    ArtId = (ArtId + 1) % galeria.length;
  }
  
  function removeArt() {
    document.querySelector('#Container').lastChild?.remove();
  }
