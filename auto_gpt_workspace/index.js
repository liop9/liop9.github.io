const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const promptInput = document.querySelector('#prompt-input');
    const promptOutput = document.querySelector('#prompt-output');
    promptOutput.innerText = 'Loading...';
    const response = await fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt_input: promptInput.value })
    });
    const data = await response.json();
    promptOutput.innerText = data.generated_prompt;
});