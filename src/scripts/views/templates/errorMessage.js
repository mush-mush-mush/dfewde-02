const renderError = (msg) => `
  <div class="error">
    <i class="bi bi-exclamation-diamond"></i>
    <h2>${msg}.<br/>Please check your internet connection.</h2>

  </div>
  `;

export default renderError;
