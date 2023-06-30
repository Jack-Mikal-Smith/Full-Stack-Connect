const loginFormHandler = async (event) => {
  event.preventDefault();

<<<<<<< HEAD
  const username = document.querySelector('#un-input-login').value.trim();
  const password = document.querySelector('#pw-input-login').value.trim();
  if (username && password) {
  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to login');
  }
}};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

=======
  console.log('Function started');

  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    const response = await fetch('/', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/main');
    } else {
      alert('Failed to log in.');
    }
  }
};
>>>>>>> a9baccc93ee06c835f17cebcf5fd5323a72d1bd4

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
