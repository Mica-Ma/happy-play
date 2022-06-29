const userNameEl = document.getElementById('userName')
const passwordEl = document.getElementById('password')
const loginEl = document.getElementById('registernext')

chrome.storage.sync.get('user', function (data) {
  const { user } = data
  const { name, password } = user
  userNameEl.value = name
  passwordEl.value = password
  if (name && password) loginEl.click()
});