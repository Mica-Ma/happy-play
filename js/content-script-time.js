setTimeout(() => {
  window.location.reload()
}, 1000 * 60 * 46);

setTimeout(() => {
  const isEmpty = document.body.childElementCount === 0
  if (isEmpty) window.location.reload()
}, 60000);
