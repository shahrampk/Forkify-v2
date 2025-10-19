import View from './view.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _message;
  _generateMarkUp() {
    return this._data.map(this._generateMarkupCards).join('');
  }
  _generateMarkupCards(cardData) {
    if (!cardData) return;
    const id = window.location.hash.slice(1);
    return `
      <li class="preview">
        <a class="preview__link ${
          id === cardData.id ? 'preview__link--active' : ''
        }" href="#${cardData.id}">
          <figure class="preview__fig">
            <img src="${cardData.imageUrl}" alt="${cardData.title}" />
          </figure>
          <div class="preview__data">
            <h4 title="${cardData.title}" class="preview__title">${
      cardData.title
    }</h4>
            <p class="preview__publisher">${cardData.publisher}</p>
            <div class="preview__user-generated hidden">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`;
  }
}

export default new ResultsView();
