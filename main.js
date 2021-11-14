(function init() {
  const titleElem = document.querySelector(".title")
  const pElem = document.querySelector(".user_agent")
  const deviceElem = document.querySelector(".device")
  const userAgentObject = navigator.userAgent
  let isMobile = false
  let device = 'web'

  pElem.innerHTML = "" + userAgentObject

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgentObject)) {
    isMobile = true
    device = "tablet"
  }
  else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgentObject)) {
    isMobile = true
    device = "mobile"
  }

  if (isMobile) {
    alert("This device is " + device)
  }

  deviceElem.innerHTML = "" + device

  if (userAgentObject.indexOf('OPR') > 0) {
    titleElem.innerHTML = 'This web is Opera!'
    return
  }

  if (userAgentObject.indexOf('Edg') > 0) {
    titleElem.innerHTML = 'This web is Edge!'
    return
  }

  if (userAgentObject.indexOf('Firefox') > 0) {
    titleElem.innerHTML = 'This web is Firefox!'
    return
  }

  if (userAgentObject.indexOf('Chrome') > 0 && userAgentObject.indexOf('Safari') > 0) {
    titleElem.innerHTML = 'This web is Chrome!'
    return
  }

  if (userAgentObject.indexOf('Chrome') < 0 && userAgentObject.indexOf('Safari') > 0) {
    titleElem.innerHTML = 'This web is Safari!'
    return
  }
})()