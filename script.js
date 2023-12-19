function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText = 'I said ASK ME A QUESTION'
        document.getElementById('response-text-2').innerText = ''
        document.getElementById('response-text').classList = 'text-danger display-4'
        document.getElementById('response-img').src = 'img/HEYSTOPTHAT.png'
    } else if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    } else {
        document.getElementById('response-text').innerText = `Your Question Was: ${question}`
        document.getElementById('response-text').classList = 'display-4'
        document.getElementById('response-img').src = 'img/Magic-8-Ball.png'
        giveResult();
    }
}

function giveResult() {
    const responseText = document.getElementById('response-text-2')
    let randomNumber = Math.floor(Math.random() * 8);
    switch (randomNumber) {
        case 0:
            responseText.innerText = 'Yes'
            responseText.classList = 'display-4 text-success'
            break;
        case 1:
            responseText.innerText = 'answer2'
            responseText.classList = 'display-4 text-success'
            break;
        case 2:
            responseText.innerText = 'answer3'
            responseText.classList = 'display-4 text-success'
            break;
        case 3:
            responseText.innerText = 'answer4'
            responseText.classList = 'display-4 text-success'
            break;
        case 4:
            responseText.innerText = 'answer5'
            responseText.classList = 'display-4 text-success'
            break;
        case 5:
            responseText.innerText = 'answer6'
            responseText.classList = 'display-4 text-success'
            break;
        case 6:
            responseText.innerText = 'answer7'
            responseText.classList = 'display-4 text-success'
            break;
        case 7:
            responseText.innerText = 'answer8'
            responseText.classList = 'display-4 text-success'
            break;
    }
}