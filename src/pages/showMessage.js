/* eslint-disable*/
export function showMessage(message, type) {
  Toastify({
    text: message,
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: 'top', // `top` or `bottom`
    position: 'left', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type === 'success' ? 'black' : 'red',
    },
    onClick() {}, // Callback after click
  }).showToast();
}
