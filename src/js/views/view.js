import icons from 'url:../../img/icons.svg';

export default class View {
  _data;
  _errorMsg = 'SomeThing went wrong. Please try another one!';
  _clear() {
    this._parentElement.innerHTML = '';
  }
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markUp = this._generateMarkUp();
    this._clear();
    console.log(markUp);
    console.log(this._parentElement);
    

    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }
  renderLoader() {
    const spinner = `
       <div class="spinner">
         <svg>
           <use href="${icons}#icon-loader"></use>
         </svg>
       </div> 
     `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', spinner);
  }
  renderError(message = this._errorMsg) {
    const markUp = `
         <div class="error">
           <div>
             <svg>
               <use href="${icons}#icon-alert-triangle"></use>
             </svg>
           </div>
           <p>${message}</p>
         </div> 
     `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }
  renderMessage(message = this._message) {
    const markUp = `
         <div class="message">
           <div>
             <svg>
               <use href="${icons}#icon-smile"></use>
             </svg>
           </div>
           <p>${message}</p>
         </div> 
     `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }
}
