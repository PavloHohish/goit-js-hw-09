const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
  const { email, message } = JSON.parse(savedState);
  emailInput.value = email;
  messageTextarea.value = message;
}

form.addEventListener('input', () => {
  const currentState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = emailInput.value;
  const message = messageTextarea.value;

  console.log({ email, message });

  localStorage.removeItem('feedback-form-state');
  form.reset();
});
