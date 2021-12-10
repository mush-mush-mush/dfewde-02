const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <span>Add to Favorite</span> <i class="bi bi-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <span>Remove from Favorite</span> <i class="bi bi-heart-fill" aria-hidden="true"></i>
  </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
