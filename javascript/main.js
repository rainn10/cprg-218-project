console.log('Hello, World!');

/* Dynamic Copyright Date */
document.getElementById("footer-year").textContent = new Date().getFullYear();


/* Interactive Button */
const button = document.getElementById('intButton');
let colorIndex = 0;
const colors = ['#F0B7B3', '#BFCC94', '#D1ADFF', '#F4FEC1', '#A1CDF4'];

button.addEventListener('click', function() {
  this.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

/* Emoji API */
const emojiContainer = document.getElementById('emojiContainer');

function generateRandomEmoji() {
    emojiContainer.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        fetch('https://emojihub.yurace.pro/api/random')
            .then(response => response.json())
            .then(data => {
                const emoji = data.htmlCode[0];
                const emojiElement = document.createElement('div');
                emojiElement.classList.add('emoji');
                emojiElement.innerHTML = emoji;
                emojiContainer.appendChild(emojiElement);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}

const emojiButton = document.getElementById('emojiButton');
emojiButton.addEventListener('click', generateRandomEmoji);

