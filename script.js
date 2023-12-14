function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText = 'I said ASK ME A QUESTION'
        document.getElementById('response-text').classList = 'text-danger display-4'
        document.getElementById('response-text').src = ''
    } else if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    } else {
        document.getElementById('response-text').innerText = `Your Question Was: ${question}`
        document.getElementById('response-text').classList = 'display-4'
    }
}