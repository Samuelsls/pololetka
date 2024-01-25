let users = JSON.parse(localStorage.getItem('users')) || [];


function showRegistrationForm() {
  hideAllForms();
  document.getElementById('registrationForm').style.display = 'block';
}

function showLogin() {
  hideAllForms();
  document.getElementById('loginForm').style.display = 'block';
}

function showUserList() {
  hideAllForms();
  document.getElementById('userList').style.display = 'block';
  displayUserList();
}

function hideAllForms() {
  document.getElementById('registrationForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('userList').style.display = 'none';
}

function registerUser() {
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const status = document.getElementById('status').checked ? 'aktivní' : 'neaktivní';

  const newUser = {
    name,
    surname,
    username,
    password,
    age,
    gender,
    status
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  alert('Uživatel úspěšně zaregistrován!');
  document.getElementById('userRegistrationForm').reset();
}

function displayUserList() {
    const userOutput = document.getElementById('userOutput');
    userOutput.innerHTML = '';
  
    users.forEach(user => {
      const userInfo = document.createElement('div');
      userInfo.innerHTML = `<strong>${user.username}</strong> - ${user.name} ${user.surname} (${user.age} let, ${user.gender}), Status: ${user.status}`;
      userOutput.appendChild(userInfo);
    });
  }
  

function loginUser() {
  const loginUsername = document.getElementById('loginUsername').value;
  const loginPassword = document.getElementById('loginPassword').value;

  const storedUsers = JSON.parse(localStorage.getItem('users'));
  if (storedUsers) {
    const user = storedUsers.find(u => u.username === loginUsername);
    if (user) {
      if (user.password === loginPassword) {
        alert('Úspěšné přihlášení!');
      } else {
        alert('Nesprávné heslo!');
      }
    } else {
      alert('Uživatelské jméno neexistuje!');
    }
  } else {
    alert('Neexistují žádní registrovaní uživatelé.');
  }
}
if (storedUsers) {
    const user = storedUsers.find(u => u.username === loginUsername);
    if (user) {
      if (user.password === loginPassword) {
        alert('Úspěšné přihlášení!');
      } else {
        alert('Nesprávné heslo!');
      }
    } else {
      alert('Uživatelské jméno neexistuje!');
    }
  } else {
    alert('Neexistují žádní registrovaní uživatelé.');
  }
  if (!window.localStorage) {
    alert('Tento prohlížeč nepodporuje Local Storage. Prosím, použijte moderní prohlížeč.');
  }
