const button = document.querySelector('button');
const input = document.querySelector('input');
button.addEventListener("click", () => {
    getGeneratedText(`The following is a list of 10 dishes you can make with these ingredients: ${input.value}.`)
        .then(generatedText => {
            console.log(generatedText)
        });
});

