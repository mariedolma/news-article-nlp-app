const handleSubmit = async (event) => {
  document.getElementById('text').addEventListener('click', handleSubmit)
  event.preventDefault()
  
  const formText = document.getElementById('text').value
  const uri = '&lang=en&of=json&txt=' + encodeURI(formText)
  const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='

  Client.validText(formText)
  Client.validUrl(formText)
  const apiKey = await Client.getApiKey()
  const nlp = await Client.getNlp(baseURL, apiKey, uri)
  // Add data
  .then (function(data) { 
    console.log('Fetching sentiment analysis', data)
    
    let toSave = {}
    toSave['agreement'] = data.agreement
    toSave['subjectivity'] = data.subjectivity
    toSave['confidence'] = data.confidence
    toSave['irony'] = data.irony

    Client.postData(toSave)
    Client.updateUI(toSave)
    })
  }

// Async POST
const postData = async (data = {}) => {
  console.log('What is being sent: ', data)

  const res = await fetch('http://localhost:8088/addNlp', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type match "Content-Type" header
  })
  try {
    const newData = await res.json()
    return newData
  } catch (error) {
    console.log("error", error)
  }
}

const updateUI = async (allData) => {
  console.log(allData)
  document.getElementById('agreement').innerHTML = 'Agreement: ' + allData.agreement
  document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + allData.subjectivity
  document.getElementById('confidence').innerHTML = 'Confidence: ' + allData.confidence
  document.getElementById('irony').innerHTML = 'Irony: ' + allData.irony
 
}

export { 
  updateUI,
  postData,
  handleSubmit
}