chrome.storage.sync.get('reload', function (data) {
  const { reload } = data
  window.location.href = reload
});