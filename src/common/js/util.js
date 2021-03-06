/*
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345, a:b}
*/
export function urlParse() {
  let url = window.location.search;
  let obj = {};
  // ?匹配到[?&]，id匹配到[^?&]+（非?或&字符一个或多个），=匹配到=，123456匹配到[^?&]+，/g是全局匹配
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  // arr = ['?id=123456', '&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};
