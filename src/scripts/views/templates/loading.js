const renderLoading = (msg = 'Loading ...') => `
  <div class="loading">
    <div class="spinner">
    </div>
    <h2>${msg}</h2>
  </div>
  `;

export default renderLoading;
