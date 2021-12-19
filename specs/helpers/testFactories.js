import LikeButtonInitiator from '../../src/scripts/utils/likebutton-init';
import FavRestaurantIdb from '../../src/scripts/models/idb';

const createLikeButtonRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavRestaurantIdb,
    resto: restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonRestaurant };
