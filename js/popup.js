const nameEl = document.getElementById('name')
const passwordEl = document.getElementById('password')
const reloadEl = document.getElementById('reload')
const buttonLoginEl = document.getElementById('buttonLogin')
const buttonReloadEl = document.getElementById('buttonReload')

chrome.storage.sync.get('user', function (data) {
  const { user } = data
  const { name, password } = user
  nameEl.value = name
  passwordEl.value = password
});

chrome.storage.sync.get('reload', function (data) {
  const { reload } = data
  reloadEl.value = reload
});

buttonLoginEl.addEventListener('click', () => {
  const name = nameEl.value
  const password = passwordEl.value
  chrome.storage.sync.set({ user: { name, password }}, function () {
    console.log('保存成功')
    window.close()
  });
})

buttonReloadEl.addEventListener('click', () => {
  const reload = reloadEl.value
  chrome.storage.sync.set({ reload }, function () {
    console.log('保存成功')
    window.close()
  });
})