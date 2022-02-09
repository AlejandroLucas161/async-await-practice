// Promises
/* */
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`)
    if (location === 'Google') {
      resolve('Google says hi')
    } else {
      reject('We can only talk to Google')
    }
  })
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing request') 
    resolve(`Extra information + ${response}`)
  })
}

/*
makeRequest('Google').then(response => {
  console.log('Response received');
  return processRequest(response);
}).then(processedResponse => {
  console.log(processedResponse);
}).catch(error => {
  console.log(error);
})
*/

// Async await

const doWork = async function()  {
  try {
    const response = await makeRequest('Google');
    console.log('Response received');
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (error) {
    console.log(error);
  }
}

doWork()