$(document).ready(function () {
  /*LOOP AND GET VALUE OF CLICKED BTN*/
  // Bind the click event to a function using the form as a selector
  $('#raiting-form').click(function () {
    // Select all the elements with the
    // type of input and loop through them using each function
    $('#raiting-form input[type=button]').each(function () {
      //  put the value of the clicked btn inside a variable

      let ratingValue = event.target.value;
      //   $('input[value=' + ratingValue + ']').css('background-color', '#FB7413');

      console.log(ratingValue);
    });
  });
  // finish onclick
  /* start submit function
  $('#raiting-form').submit(function (event) {
    $('#rating').hide();
    $('#thank-you').show();

    event.preventDefault();
  });
     finish submit function*/
});

const rates = document.querySelectorAll('.rating__value');
rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    rate.style.color = 'white';

    let active = document.activeElement;
    console.log(active);
    active.style.color = 'blue';
  });

  console.log(rates);
});
