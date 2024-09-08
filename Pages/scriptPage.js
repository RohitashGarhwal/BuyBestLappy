document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('mode-toggle');
    const modeIcon = document.getElementById('mode-icon');
    let isDarkMode = false;

    modeToggle.addEventListener('click', () => {
      isDarkMode = !isDarkMode;
      document.body.classList.toggle('dark-mode', isDarkMode);
      modeIcon.classList.toggle('fa-sun', !isDarkMode);
      modeIcon.classList.toggle('fa-moon', isDarkMode);
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const flexContainer = document.querySelector('.flex-container');
    galleryData.forEach(item => {
      const flexItem = document.createElement('div');
      flexItem.classList.add('flex-item');

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.text;

      const textbox = document.createElement('div');
      textbox.classList.add('textbox');
      textbox.textContent = item.text;

      flexItem.appendChild(img);
      flexItem.appendChild(textbox);
      flexContainer.appendChild(flexItem);
    });
  });
