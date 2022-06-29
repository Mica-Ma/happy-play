window.onload = function () {
  const unLis = Array.prototype.slice.call(document.querySelectorAll('.n-learning'))
  const curLi = unLis[0]
  if (curLi) {
    const a = curLi.getElementsByTagName('a')[0]
    if (a) {
      // a.click()
      const evt = document.createEvent("MouseEvents");
      evt.initEvent('click', true, true);
      a.dispatchEvent(evt); 
    }

    let timer

    process()
  
    function process() {
      clearTimeout(timer)
      timer = setTimeout(() => {
        const iframe = document.querySelector('.iframe')
        if (!iframe) {
          process()
        } else {
          init(iframe)
        }
      }, 1000);
    }

    function init(iframe) {
      const src = iframe.src
      const myOpener = window.open(src, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + 500 + ', height=' + 500 + ', top=' + 0 + ', left=' + 0)
      setInterval(() => {
        if (myOpener.closed) window.location.reload()
      }, 1000);
    }
  }
};

