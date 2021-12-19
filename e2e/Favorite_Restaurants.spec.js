/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/fav');
});

Scenario('showing empty favorite list', ({ I }) => {
  I.see('Nothing has been added.', '.error h2');
});

Scenario('adding one restaurant', async ({ I }) => {
  I.see('Nothing has been added.', '.error h2');

  I.amOnPage('/');

  I.seeElement('.card-body__title');

  const firstResto = locate('.card-body__title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/fav');
  I.seeElement('restaurant-card');
  const likedRestoTitle = await I.grabTextFrom('.card-body__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('removing one restaurant', async ({ I }) => {
  I.see('Nothing has been added.', '.error h2');

  I.amOnPage('/');

  I.seeElement('.card-body__title');

  const firstResto = locate('.card-body__title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/fav');
  I.seeElement('restaurant-card');
  const likedResto = locate('.card-body__title').first();
  const likedRestoTitle = await I.grabTextFrom(likedResto);

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.click(likedResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/fav');

  I.see('Nothing has been added.', '.error h2');
});
