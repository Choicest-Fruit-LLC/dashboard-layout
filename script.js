document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const appUrl = this.getAttribute('data-app');
    document.getElementById('app-frame').src = appUrl;
  });
});
