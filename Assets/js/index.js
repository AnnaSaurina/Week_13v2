let userName = document.getElementById('nameElement');
let urlImage = document.getElementById('urlElement');
let comment = document.getElementById('commentElement');
let button = document.querySelector('.buttonElement');
let chat = document.querySelector('.chat');

function checkedWord(word) {
    return (word.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '));
};

button.addEventListener('click', () => {

    let urlAvatar = urlImage.value;
    let user = userName.value;
    let finalFullName = checkedWord(user);
    let commentChat = comment.value;
    let chatSpam = commentChat.replace(/xxx/gi, '***').replace(/viagra/gi, '***');
    let now = new Date();

    chat.innerHTML = `
        <div id="message" class="message">
                    <p>Чат</p>
                    <img src=${urlAvatar}
                    alt="Аватар" class="avatar" />
                    <p class="userName">${now}</p> 
                    <p class="userName">${finalFullName}</p> 
                    <p class="text">${chatSpam}</p>
                </div>
                `;
});

