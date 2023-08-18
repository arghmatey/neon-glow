// Using hsl instead of rbg or hex avoids using conversion math

export const getCSSOutput = hue => (
`color: hsl(${hue}, 100%, 90%);
text-shadow:
    0px 0px 5px hsl(${hue}, 100%, 90%),
    0px 0px 10px hsl(${hue}, 100%, 70%),
    0px 0px 10px hsl(${hue}, 100%, 70%),
    0px 0px 15px hsl(${hue}, 100%, 50%),
    0px 0px 20px hsl(${hue}, 100%, 50%),
    0px 0px 30px hsl(${hue}, 100%, 50%),
    0px 0px 30px hsl(${hue}, 100%, 50%),
    0px 0px 30px hsl(${hue}, 100%, 50%);`
)

export const getInlineStyle = hue => {
    let textOutput = document.querySelector('.text-output');
    textOutput.style.color = `hsl(${hue}, 100%, 90%`;
    textOutput.style.textShadow =
        `0px 0px 5px hsl(${hue}, 100%, 90%),
    0px 0px 10px hsl(${hue}, 100%, 70%),
    0px 0px 10px hsl(${hue}, 100%, 70%),
    0px 0px 15px hsl(${hue}, 100%, 50%),
    0px 0px 20px hsl(${hue}, 100%, 50%),
    0px 0px 30px hsl(${hue}, 100%, 50%),
    0px 0px 30px hsl(${hue}, 100%, 50%),
    0px 0px 30px hsl(${hue}, 100%, 50%)`;
}
