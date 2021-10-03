const ItemsMovie = [];

const addMovie= (text) => {
  const Movie = {
    text: text,
    checked: false,
    id: Date.now()
  }
  ItemsMovie.push(Movie));
  renderMovie(Movie);
  console.log(ItemsMovie);
}

//mapeando formulario do html 
const form = document.querySelector ('js.form');
console.log(form);

//escutando a solicitacao do botao submit
form.addEventListener('submit',(evento) => {
  evento.preventDefault();
  console.log(evento);

  //selecionando os inputs
const input = document.querySelector('nome');
const input = document.querySelector('img');
const input = document.querySelector('genero');
const input = document.querySelector('nota');

//selecionado o value do elemento input
const text = input.value;
console.log(text);

//selecionado o texto digitado mandando para a funcão addMovie
if (text !== '') {
  addMovie(text);
  input.value = '';
  input.focus();
}
const renderMovie = (Movie) => {
  
  const listMovie = document.querySelector('list');
  console.log(listMovie);

  const movieExist = document.querySelector(`[data-key='${movie.id}']`);
  console.log('elemento que achou', movieExist);

  const listItem = document.createElement("li");

  const isCheck = movie.checked ? 'done' : '';

  listItem.setAttribute('class', `movie-item ${isCheck}`);

  listItem.setAttribute('data-key', movie.id);
  listItem.innerHTML = `
  <input id=${movie.id} type="checkbox"/>
  <label for=${movie.id} class="tick js-tick" onClick="toogleDone(${movie.id})"></label>
  <label for=${movie.id} class="tick js-tick"></label>
  <span>${todo.text}</span>
  <button class="delete-todo js-delete-todo">
    <svg>
      <use href="#delete-icon"></use>
    </svg>
  </button>
`;
list.append(listItem);



















































