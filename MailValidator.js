
async function mailValidator(toMail){
    const request = require('request');
  
  const options = {
    method: 'GET',
    url: `https://email-verifier-completely-free.p.rapidapi.com/email-verification/${toMail}`,
    headers: {
      'X-RapidAPI-Key': '963b4f9098mshe2ead1603a1625cp1eba46jsn6bbf69836d3a',
      'X-RapidAPI-Host': 'email-verifier-completely-free.p.rapidapi.com',
      useQueryString: true
    }
  };
  
  const validation  =await new Promise((resolve, reject) => {
    request(options, function (error, response, body) {
        if (error) {
            reject(error) 
      } 
        resolve(JSON.parse(body))
    });
  })
 
  
  return validation
  }
  module.exports=mailValidator