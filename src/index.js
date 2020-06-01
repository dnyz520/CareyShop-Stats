(function() {
  var h = document.createElement('link');
  h.href = 'https://zh-static.oss-accelerate.aliyuncs.com/css/menu.css';
  h.setAttribute('rel','stylesheet');
  h.setAttribute('type','text/css');

  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(h, s);
})();
