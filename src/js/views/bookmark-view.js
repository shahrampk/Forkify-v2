import View from './view.js';

class bookMarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _generateMarkUp() {
    if (this._data.length <= 0) {
      return `
        <div class="message">
          <div>
            <svg>
              <use href="src/img/icons.svg#icon-smile"></use>
            </svg>
          </div>
          <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
        </div>
      `;
    } else {
      return this._data
        .map(
          recipeData =>
            `

            <li class="preview">
                <a class="preview__link" href="#${recipeData.id}">
                <figure class="preview__fig">
                    <img src="${recipeData.imageUrl}" alt="${recipeData.title}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${recipeData.title}</h4>
                    <p class="preview__publisher">${recipeData.publisher}</p>
                </div>
                </a>
            </li>`
        )
        .join('');
    }
  }
  loadWatchListMovie() {
    window.addEventListener('load', () => {
      const watchList = JSON.parse(localStorage.getItem('bookMark')) || [];

      if (watchList.length === 0) return; // nothing to render

      this.render(watchList);
    });
  }
}
export default new bookMarkView();
