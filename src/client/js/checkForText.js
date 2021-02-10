// Valid text
function validText() {
  let text = document.getElementById("text")
  let textLength = text.value.length

  if (textLength < 10) {
    alert('Too short! Please copy a longer text to analyse or an URL')
    throw error('Text must be at least 10 characters long')
  } else {
     return true
  }
}

// Valid URL
function validUrl(url) {
  let regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

  if (regex.test(url)) {
      return true
  } else {
      return false
  }
}

export { 
  validText, 
  validUrl 
}