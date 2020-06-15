const searchBtn = document.querySelector('.fa-search');
const search = document.querySelector('.search-input');

searchBtn.addEventListener ('click', () => {
  search.classList.toggle ('active')
})
