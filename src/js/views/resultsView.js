import View from './view.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _container = document.querySelector('.search-results');
  _toggleBtn = document.querySelectorAll('.toggle-btn');
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
  toggle() {
    this._container.classList.toggle('toggle');
  }
  showHideResults() {
    [...this._toggleBtn].forEach(btn =>
      btn.addEventListener('click', this.toggle.bind(this))
    );
  }
}

export default new ResultsView();
