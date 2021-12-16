const createLikeButtonTemplate = () => `
  <button id="likeButton" class="like" aria-label="add to favorite">
    <span>Add to Favorite</span> <i class="bi bi-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button id="likeButton" class="like" aria-label="remove from favorite">
    <span>Remove from Favorite</span> <i class="bi bi-heart-fill" aria-hidden="true"></i>
  </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
