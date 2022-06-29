chrome.runtime.onInstalled.addListener(function () {
  console.log("插件已被安装");
  // storage中设置值
  chrome.storage.sync.set({ user: { name: '', password: '' }}, function () {
    console.log('init user')
  });
  chrome.storage.sync.set({ reload: 'http://shzyjn.chinahrt.com/userStudyResource/studyResourceDetailInfo?goodsPackageId=c6f1d37ce7fa76c47e720f4c3987fac3&goodsId=19936cd2574945ffa0bb7fe719402be7goods&resourceId=19936cd2574945ffa0bb7fe719402be7&goodsType=016003&markedId=c6f1d37ce7fa76c47e720f4c3987fac3'}, function () {
    console.log('init reload')
  });
});
