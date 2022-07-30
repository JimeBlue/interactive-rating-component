// Add event listener to form submission

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get value of checked radio input
  const checked = document.querySelector('input[type=radio]:checked');
  let rating = checked.value;
  // Set value of rating to span in thank you section
  const selectedRating = document.querySelector('#selected-rating');
  selectedRating.innerHTML = rating;

  // Get rating and thank you sections
  const ratingSection = document.querySelector('#rating');
  const thankYouSection = document.querySelector('#thank-you');
  // Get class hide
  const hide = document.getElementsByClassName('hide');
  //Show only the thank you section
  ratingSection.setAttribute('class', 'hide');
  thankYouSection.removeAttribute('class', 'hide');
});
