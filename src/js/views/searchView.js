class SearchView {
  _parentEl = document.querySelector(
    `${window.screen.availWidth < 600 ? '.search-side' : '.search-main'}`
  );
  constructor() {
    console.log(this._parentEl);
  }

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
