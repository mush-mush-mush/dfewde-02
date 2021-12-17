import RestoAPI from '../../models/api';
import '../templates/components/_restaurantCard';
import renderLoading from '../templates/loading';
import renderError from '../templates/errorMessage';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const Home = {
  async render() {
    return `
      <header class="hero">
        <picture>
          <source media="(max-width: 960px)" srcset="./images/heros/hero-image_2-m.jpg" class="hero-img" alt="hero image">
          <source media="(max-width: 480px)" srcset="./images/heros/hero-image_2-s.jpg" class="hero-img" alt="hero image">
          <img src="./images/heros/hero-image_2.jpg" class="hero-img" alt="hero image">
        </picture>
        <div class="hero-container container">
            <h1 class="hero-title">Discover the best restaurant for you</h1>
        </div>
      </header>
      <div class="content container">
        <section class="section">
          <h2 class="section-heading">Explore Mushie’s Restaurants</h2>
          <div class="section-content restaurant-list">
          <
          </div>
          </div>
        </section>
      </div>
      `;
  },

  async afterRender() {
    const restaurantsList = document.querySelector('.restaurant-list');
    restaurantsList.innerHTML = renderLoading();

    try {
      const restaurants = await RestoAPI.listResto();
      restaurantsList.innerHTML = '';

      restaurants.map((item) => {
        const restaurantCard = document.createElement('restaurant-card');
        restaurantCard.data = item;
        restaurantsList.insertAdjacentElement('beforeend', restaurantCard);
      });
    } catch (error) {
      restaurantsList.innerHTML = '';
      restaurantsList.innerHTML = renderError(error.message);
    }
  },
};

export default Home;
