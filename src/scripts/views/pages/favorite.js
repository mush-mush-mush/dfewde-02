import '../templates/components/_restaurantCard';
import FavoriteRestoDB from '../../models/idb';
import renderLoading from '../templates/loading';
import renderError from '../templates/errorMessage';

const Favorite = {
  async render() {
    return `
    <header class="hero">
        <img src="./images/heros/hero-image_2.jpg" class="hero-img" alt="hero image">
        <div class="hero-container container">
            <h1 class="hero-title">Discover the best restaurant for you</h1>
        </div>
      </header>
    <div class="content container">
        <section class="section">
        <h2 class="section-heading">Your Favorite</h2>
          <div class="section-content favorite-list">
            <h1
          </div>
        </section>
        </div>
        `;
  },

  async afterRender() {
    const favoriteList = document.querySelector('.favorite-list');
    favoriteList.innerHTML = renderLoading();

    try {
      favoriteList.innerHTML = '';
      const restaurants = await FavoriteRestoDB.getAllResto();

      if (!restaurants) throw 'Failed to fetch';
      if (restaurants.length < 1) throw 'Nothing has been added';

      restaurants.map((item) => {
        const restaurantCard = document.createElement('restaurant-card');
        restaurantCard.data = item;
        favoriteList.insertAdjacentElement('beforeend', restaurantCard);
      });
    } catch (error) {
      console.log(error);
      favoriteList.innerHTML = '';
      favoriteList.innerHTML = renderError(error);
    }
  },
};

export default Favorite;
