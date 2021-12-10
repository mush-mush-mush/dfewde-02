import UrlParser from '../../routes/url-parser';
import RestoAPI from '../../models/api';
import renderDetail from '../templates/detailTemplate';
import LikeButtonInitiator from '../../utils/likebutton-init';
import renderLoading from '../templates/loading';
import renderError from '../templates/errorMessage';

const Details = {
  async render() {
    return `
    <div class="detail-container">
    </div>
          `;
  },

  async afterRender() {
    const detailContainer = document.querySelector('.detail-container');
    detailContainer.innerHTML = renderLoading();
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const restaurant = await RestoAPI.detailResto(url.id);
      detailContainer.innerHTML = '';
      detailContainer.insertAdjacentHTML('beforeend', renderDetail(restaurant));

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeBtnContainer'),
        resto: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          city: restaurant.city,
          address: restaurant.address,
          categories: restaurant.categories,
          menus: restaurant.menus,
          rating: restaurant.rating,
          customerReviews: restaurant.customerReviews,
        },
      });
    } catch (error) {
      detailContainer.innerHTML = '';
      detailContainer.innerHTML = renderError(error.message);
    }

    const formReview = document.querySelector('#formReview');
    const username = document.querySelector('#username');
    const review = document.querySelector('#userReview');

    formReview.addEventListener('submit', (e) => {
      e.preventDefault();
      RestoAPI.postReview({ id: url.id, name: username.value, review: review.value });
      this.afterRender();
    });
  },
};

export default Details;
