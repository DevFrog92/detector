(function init() {
  const titleElem = document.querySelector(".title")
  const pElem = document.querySelector(".user_agent")
  const userAgentObject = navigator.userAgent

  pElem.innerHTML = `${userAgentObject}`

  if (userAgentObject.indexOf('OPR') > 0) {
    titleElem.innerHTML = 'This web is Opera!'
    return
  }

  if (userAgentObject.indexOf('Edg') > 0) {
    titleElem.innerHTML = 'This web is Edge!'
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
}())