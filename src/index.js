const form = document.querySelector('form');
      fullName = document.querySelector('#full_name'),
      clientNumber = document.querySelector("#client_number"),
      stayTime = document.querySelector('#stay_time'),
      bookingTime = document.querySelector('#booking_time'),
      guestCount = document.querySelector('#guests_count'),
      comments = document.querySelector('#comments');






console.log(fullName)
console.log(clientNumber)
console.log(stayTime)
console.log(bookingTime)
console.log(guestCount)
console.log(comments)


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);

    

})

