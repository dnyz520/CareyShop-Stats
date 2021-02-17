(function() {
  var h = document.createElement('link');
  h.href = 'https://zh-static.oss-accelerate.aliyuncs.com/css/menu.css';
  h.setAttribute('rel','stylesheet');
  h.setAttribute('type','text/css');

  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(h, s);
})();

export function getSystemInfo() {
  console.log('当前站点 ' + document.domain + ' 使用 CareyShop商城后台管理系统 框架技术')
  console.log('宁波互明科技有限公司版权所有 www.careyshop.cn')
  console.log('CareyShop - StatsCS')
}
