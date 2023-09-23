const newsButtons = document.querySelectorAll('.news__button');
const newsButtonsWrapper = document.querySelector('.news__buttons-wrapper');

const setUpNewsButton = (evt) => {
  const activeButton = evt.target.closest('.news__button');
  if (activeButton.classList.contains('news__button--active')) {
    return;
  }
  newsButtons.forEach((button) => button.classList.remove('news__button--active'));
  activeButton.classList.add('news__button--active');
};

const setNewsButton = () => {
  newsButtonsWrapper.addEventListener(('click'), setUpNewsButton);
};

export {setNewsButton};
