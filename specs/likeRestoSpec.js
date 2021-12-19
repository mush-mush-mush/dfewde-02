/* eslint-disable no-undef */
import FavRestaurantIdb from '../src/scripts/models/idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Add to favorite', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the add button when the restaurant has not been added before', async () => {
    await TestFactories.createLikeButtonRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="add to favorite"]')).toBeTruthy();
  });

  it('should not show the remove button when the restaurant has not been added before', async () => {
    await TestFactories.createLikeButtonRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="remove from favorite"]')).toBeFalsy();
  });

  it('should be able to add the restaurant', async () => {
    await TestFactories.createLikeButtonRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavRestaurantIdb.getResto(1);

    expect(restaurant).toEqual({ id: 1 });
    FavRestaurantIdb.deleteResto(1);
  });

  it('should not add a restaurant again when its already added', async () => {
    await TestFactories.createLikeButtonRestaurant({ id: 1 });

    await FavRestaurantIdb.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavRestaurantIdb.getAllResto()).toEqual([{ id: 1 }]);

    FavRestaurantIdb.deleteResto(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavRestaurantIdb.getAllResto()).toEqual([]);
  });
});
