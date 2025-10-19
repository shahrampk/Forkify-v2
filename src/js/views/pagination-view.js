import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerBtn(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      console.log(btn);
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
  _generateMarkUp() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const curPage = this._data.page;

    //   if we are on page 1 and other pages...
    if (curPage === 1 && numPages > 1) {
      return `
         <button data-goto='${
           curPage + 1
         }' class="btn--inline pagination__btn--next">
            <span>page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }
    //   if we are on last page...
    if (curPage === numPages && numPages > 1) {
      return `
         <button data-goto='${
           curPage - 1
         }' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>page ${curPage - 1}</span>
          </button>
      `;
    }
    //   if we are on other pages...
    if (curPage < numPages) {
      return `
        <button data-goto='${
          curPage - 1
        }' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>page ${curPage - 1}</span>
          </button>
          <button data-goto='${
            curPage + 1
          }' class="btn--inline pagination__btn--next">
            <span>page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
        `;
    }
    //   if we are on page 1 and no other pages...
    return ``;
  }
}

export default new PaginationView();
