const randomQuote = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch the data', undefined);
        }
    });

    request.open('GET', 'https://api.quotable.io/random');
    request.send();
};

randomQuote((err, data) => {
    if (err) {
        console.log(err);
    } else {
        let container = document.getElementById('container-div');
        let quote = document.createElement('h3');
        let author = document.createElement('p');
        let tagsDiv = document.createElement('p');

        quote.textContent = data.content;
        author.textContent = `-${data.author}`;

        container.appendChild(quote);
        container.appendChild(author);

        console.log(`${data.content}\n-${data.author}`);
        for (let tag of data.tags) {
            tagsDiv.textContent += ` #${tag}`
            console.log(`#${tag}`)
        }
        tagsDiv.setAttribute('id', 'tags-div')
        container.appendChild(tagsDiv)

    }
});



