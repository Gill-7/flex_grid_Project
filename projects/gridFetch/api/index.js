async function getApi() {
    let response = await fetch('https://api.publicapis.org/entries')
    let data = await response.json()
    return data
}

function getApiHtml(myApis) {
    return `
    <div class='main'>
      <div class='api-name'>Api name: ${myApis.API}</div>
      <div class='api-category'>Category: ${myApis.API}</div>
      <div class='api-description'>Description: ${myApis.API}</div>
      <div class='api-auth'>Auth: ${myApis.API}</div>
      <div class='api-https'>Support Https: ${myApis.API}</div>
    </div> 
    `
}

function displayApi(myApi) {
    let myAPis = myApi.entries
    document.body.innerHTML = `
    <div class='my-api'>
        ${myAPis.map(getApiHtml).join('')} 
    </div>
    `
}

getApi()
    .then(displayApi)
    .catch(e => console.log(`Error: ${e}`))