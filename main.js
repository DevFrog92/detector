(function init() {
  const titleElem = document.querySelector(".title")
  const pElem = document.querySelector(".user_agent")
  const deviceElem = document.querySelector(".device")
  const deviceElemForIE = document.querySelector(".device_IE")
  const userAgentObject = navigator.userAgent
  let isMobile = false
  let device = 'web'
  let allowedBrowserState = true

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
    alert("This device is " + device+"We're not allowed access to our web site by mobile or tablet!! sorry!")
    window.close()
  }

  deviceElem.innerHTML = "" + device

  if (userAgentObject.indexOf('OPR') > 0) {
    allowedBrowserState = false
    titleElem.innerHTML = 'This web is Opera!'
    return
  }

  if (userAgentObject.indexOf('Edg') > 0) {
    allowedBrowserState = false
    titleElem.innerHTML = 'This web is Edge!'
    return
  }

  if (userAgentObject.indexOf('Firefox') > 0) {
    allowedBrowserState = false
    titleElem.innerHTML = 'This web is Firefox!'
    return
  }

  if (userAgentObject.indexOf('Whale') > 0) {
    allowedBrowserState = false
    titleElem.innerHTML = 'This web is Whale!'
    return
  }

  if (userAgentObject.indexOf('Chrome') > 0 && userAgentObject.indexOf('Safari') > 0) {
    allowedBrowserState = false
    titleElem.innerHTML = 'This web is Chrome!'
    return
  }

  if (userAgentObject.indexOf('Chrome') < 0 && userAgentObject.indexOf('Safari') > 0) {
    allowedBrowserState = false
    titleElem.innerHTML = 'This web is Safari!'
    return
  }

  if (allowedBrowserState) {
    alert("현재 브라우저는 지원하지 않습니다. Chrome, Edge, FireFox, Opera 및 Whale 브라우저를 이용해주세요. 감사합니다.")
    window.close()
  }
})()