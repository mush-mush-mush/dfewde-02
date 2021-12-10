const renderReview = (restaurant, review) => `
      <div class="card" aria-label="">
          <div class="card-body"  >
              <small class="card-body__subtitle" aria-label="restaurant name ${restaurant.name}">${restaurant.name}</small>
              <h3 class="card-body__title">${review.review}</h3>
              <div class="user" aria-label="review by ${review.name} on ${review.date}">
                  <div class="user-icon">
                      <i class="bi-person"></i>
                  </div>
                  <div class="user-profile">
                      <h4 class="user-profile__name">${review.name}</h4>
                      <small class="user-profile__location">
                          <i class="bi bi-geo-alt"></i> ${review.date}
                      </small>
                  </div>
              </div>
          </div>
      </div>
      `;

export default renderReview;
