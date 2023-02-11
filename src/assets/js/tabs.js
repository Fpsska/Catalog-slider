const categoriesElements = document.querySelectorAll('.categories-list__item');

// /. variables

categoriesElements.forEach(el => {
    el.addEventListener('click', () => {
        categoriesElements.forEach(el => {
            el.classList.remove('active');
        });

        el.classList.add('active');
    });
});
