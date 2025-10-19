import { API_URL, SER_PER_PAGE } from './config.js';
import { getJSON } from './helper.js';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: SER_PER_PAGE,
  },
  bookMark: JSON.parse(localStorage.getItem('bookMark')) || [],
};
export const loadRecipies = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    const { recipe } = data.data;
    state.recipe = {
      title: recipe.title,
      id: recipe.id,
      imageUrl: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      cookingTime: recipe.cooking_time,
    };
  } catch (error) {
    // ReThrowing the error...
    throw error;
  }
};
export const loadSearchResult = async function (query) {
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);
    state.search.results = data.data.recipes.map(res => {
      return {
        title: res.title,
        id: res.id,
        imageUrl: res.image_url,
        publisher: res.publisher,
      };
    });
  } catch (err) {
    throw err;
  }
};
export const UpdateServing = function name(newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};
export const searchPerPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * 10;
  const end = page * 10;
  return state.search.results.slice(start, end);
};
export const checkBookMark = function (isBookMarked) {
  // Convert to boolean just to be safe
  const bookmarked = Boolean(isBookMarked);

  if (bookmarked) {
    // ✅ Add bookmark
    state.recipe.bookMark = true;
    state.bookMark.push(state.recipe);
    console.log('✅ Added bookmark:', state.recipe);
  } else {
    // ❌ Remove bookmark
    state.recipe.bookMark = false;
    state.bookMark = state.bookMark.filter(
      bookmark => bookmark.id !== state.recipe.id
    );
    console.log('❌ Removed bookmark:', state.recipe);
  }

  // 🧠 Save to localStorage
  localStorage.setItem('bookMark', JSON.stringify(state.bookMark));
  console.log('Updated bookmarks:', state.bookMark);
};

