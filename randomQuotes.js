const getQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return data;
}

getQuote().then(data => {
    let container = document.getElementById('container-div');
    let quote = document.createElement('h3');
    let author = document.createElement('p');
    let tags = document.createElement('p');

    quote.textContent = data.content;
    author.textContent = `-${data.author}`;

    container.appendChild(quote);
    container.appendChild(author);

    console.log(`${data.content}\n-${data.author}`);
    for (let tag of data.tags) {
        tags.textContent += ` #${tag}`
        console.log(`#${tag}`)
    }
    tags.setAttribute('id', 'tags')
    container.appendChild(tags)
}).catch(err => console.log('could not fetch the data'));



