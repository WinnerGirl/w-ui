// 平台判断
export function browserRedirect() {
  const userAgentInfo = navigator.userAgent;
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod', 'Mobile'];
  let flag = true;
  for (let v = 0; v < Agents.length; v += 1) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag ? 'pc' : 'phone';
}
