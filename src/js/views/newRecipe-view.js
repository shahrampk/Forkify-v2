import View from './view.js';
class AddNewRecipeView extends View {
  #addRecipeBtn = document.querySelector('.nav__btn--add-recipe');
  #addRecipeWindow = document.querySelector('.add-recipe-window');
  #overlay = document.querySelector('.overlay');
  #btnCloseModal= document.querySelector('.btn--close-modal');
  _generateMarkUp() {
    return `
        <div class="add-recipe-window ">
            <button class="btn--close-modal">&times;</button>
            <form class="upload">
              <div class="upload__column">
                <h3 class="upload__heading">Recipe data</h3>
                <label>Title</label>
                <input placeholder="Enter Title" required name="title" type="text" />
                <label>URL</label>
                <input placeholder="Enter Recipe URL" required name="sourceUrl" type="text" />
                <label>Image URL</label>
                <input placeholder="Enter Image URL" required name="image" type="text" />
                <label>Publisher</label>
                <input placeholder="Enter Publisher Name" required name="publisher" type="text" />
                <label>Prep time</label>
                <input placeholder="Enter Preperation Time" required name="cookingTime" type="number" />
                <label>Servings</label>
                <input placeholder="Enter Servings" required name="servings" type="number" />
              </div>
        
              <div class="upload__column">
                <h3 class="upload__heading">Ingredients</h3>
                <label>Ingredient 1</label>
                <input type="text" required name="ingredient-1" placeholder="Format: 'Quantity,Unit,Description'" />
                <label>Ingredient 2</label>
                <input type="text" name="ingredient-2" placeholder="Format: 'Quantity,Unit,Description'" />
                <label>Ingredient 3</label>
                <input type="text" name="ingredient-3" placeholder="Format: 'Quantity,Unit,Description'" />
                <label>Ingredient 4</label>
                <input type="text" name="ingredient-4" placeholder="Format: 'Quantity,Unit,Description'" />
                <label>Ingredient 5</label>
                <input type="text" name="ingredient-5" placeholder="Format: 'Quantity,Unit,Description'" />
                <label>Ingredient 6</label>
                <input type="text" name="ingredient-6" placeholder="Format: 'Quantity,Unit,Description'" />
              </div>
        
              <button class="btn upload__btn">
                <svg>
                  <use href="src/img/icons.svg#icon-upload-cloud"></use>
                </svg>
                <span>Upload</span>
              </button>
            </form>
          </div>`;
  }
  showForm() {
    this.#addRecipeBtn.addEventListener('click', () => {
      this.#addRecipeWindow.classList.remove('hidden');
      this.#overlay.classList.remove('hidden');
    });
    
  }
  hideForm() {
    this.#btnCloseModal.addEventListener('click', () => {
      this.#addRecipeWindow.classList.add('hidden');
      this.#overlay.classList.add('hidden');
    });
  }
}

export default new AddNewRecipeView();
