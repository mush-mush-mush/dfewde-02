import CONFIG from '../../globals/config';
import renderReview from './reviewCard';

const renderDetail = (restaurant) => {
  let stars = '';

  for (let i = 0; i < Math.floor(restaurant.rating); i++) {
    stars += '<i class="bi-star-fill"></i>';
  }

  if (restaurant.rating % 1 > 0.7) {
    stars += '<i class="bi-star-fill"></i>';
  } else if (restaurant.rating % 1 > 0.3) {
    stars += '<i class="bi-star-half"></i>';
  } else if (restaurant.rating % 1 === 0) {
    stars += '';
  } else {
    stars += '<i class="bi-star"></i>';
  }

  return `
    <header class="hero">
    <img src="${CONFIG.BASE_IMAGE_URL_L}${restaurant.pictureId}" class="hero-img" alt="hero image">
  <div class="hero-container container">
            <h1 class="hero-title">${restaurant.name}</h1>
        </div>
  </header>
  <div class="content container">
    <section class="section">
      <h2 class="section-heading">Details</h2>
      <div class="section-content details">
      <div class="details__desc">
        <p>${restaurant.description}</p>
        </div>
      <div class="details__info">
      <ul class="details__info-list">
      <div class="likeBtn-container" id="likeBtnContainer"></div>
      <li class="list-item"><div class="info-rating">
      <div class="stars">
          ${stars}
      </div>
      <span>${restaurant.rating}</span>
  </div></li>
      <li class="list-item"><i class="bi-map"></i>${restaurant.address}, ${restaurant.city}</li>
  <li class="list-item">${restaurant.categories
    .map((category) => `<span class="pill">${category.name}</span>`)
    .join(' ')}</li>
      </ul>
      </div>
      </div>
    </section>
    <section class="section" aria-label="Menu">
      <h2 class="section-heading">Menu</h2>
      <div class="section-content menu">
      <div class="menu-list">
      <h3>Foods</h3>
      <ul>
      ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join(' ')}
      </ul>
      </div>
      <div class="menu-list">
      <h3>Drinks</h3>
      <ul>
      ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join(' ')}
      </ul>
      </div>
      </div>
    </section>
    <section class="section" aria-label="Reviews">
      <h2 class="section-heading">Reviews</h2>
      <div class="section-content">
      ${restaurant.customerReviews.map((review) => renderReview(restaurant, review)).join(' ')}
      </div>
      <div class="review-form">
        <h2>Write your review</h2>
        <form class="review-form__container" id="formReview">
          <div class="form-control">
            <label for="username">Name</label>
            <input type="text" name="username" id="username" required />
          </div>
          <div class="form-control">
            <label for="userReview">Review</label>
            <textarea rows="3" name="userReview" id="userReview" required></textarea>
          </div>
          <button type="submit">Submit <i class="bi bi-arrow-right"></i></button>
        </form>
      </div>
    </section>
  </div>
        `;
};

export default renderDetail;
