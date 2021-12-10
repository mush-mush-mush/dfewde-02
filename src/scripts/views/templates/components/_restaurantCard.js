import CONFIG from '../../../globals/config';

class RestaurantCard extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  renderStars() {
    let stars = '';

    for (let i = 0; i < Math.floor(this._data.rating); i++) {
      stars += '<i class="bi-star-fill"></i>';
    }

    if (this._data.rating % 1 > 0.7) {
      stars += '<i class="bi-star-fill"></i>';
    } else if (this._data.rating % 1 > 0.3) {
      stars += '<i class="bi-star-half"></i>';
    } else if (this._data.rating % 1 === 0) {
      stars += '';
    } else {
      stars += '<i class="bi-star"></i>';
    }

    return stars;
  }

  render() {
    this.innerHTML = `
    <a href="#/detail/${this._data.id}" aria-label="${this._data.name}, location ${
      this._data.location
    }, rating ${this._data.rating}">
            <img src="${CONFIG.BASE_IMAGE_URL_S}${this._data.pictureId}" class="card-img" alt="${
      this._data.name
    }"  aria-hidden="true">
            <div class="card-body"  aria-hidden="true">
                <small class="card-body__subtitle">${this._data.city}</small>
                <h3 class="card-body__title">${this._data.name}</h3>
                <div class="card-body__rating">
                    <div class="stars">
                        ${this.renderStars()}
                    </div>
                    <span>${this._data.rating}</span>
                </div>
                <p class="card-body__desc">
                    ${this._data.description.slice(0, 100)}${
      this._data.description.length > 100 ? '...' : ''
    }
                </p>
            </div>
        </a>
    `;
  }
}

customElements.define('restaurant-card', RestaurantCard);
