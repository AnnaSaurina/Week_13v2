let userName = document.getElementById('nameElement');
let urlImage = document.getElementById('urlElement');
let comment = document.getElementById('commentElement');
let button = document.querySelector('.buttonElement');
let chat = document.querySelector('.chat');
let avatarImage = [ 'https://webmg.ru/wp-content/uploads/2022/06/i-226-1.jpeg',
                    'https://i.pinimg.com/originals/32/80/0d/32800da238d71a6c8a9c7d207fa2953f.jpg',
                    'https://yt3.ggpht.com/ytc/AKedOLRdDIsL8mWcqWbOvPP8bDPoC1sWrPT571fuDa2ZPw=s900-c-k-c0x00ffffff-no-rj',
                    'https://i.pinimg.com/originals/9d/af/02/9daf02c70c709f3cf83b580aff0a8492.jpg',
                    'https://yt3.ggpht.com/ytc/AKedOLS6dA4YNCbzaH6TQshoJOzGnuC4nNU0Vf_8burD=s900-c-k-c0x00ffffff-no-rj'
                ];


function checkedWord(word) {
    return (word.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')); 
};

button.addEventListener('click', () => {

    if (urlImage.value == '') {
        let avatarRandom = Math.floor(Math.random(avatarImage) * 5);
        console.log(avatarImage[avatarRandom]);
        let urlAvatar = avatarImage[avatarRandom];
    } else {
        let urlAvatar = urlImage.value;
    }

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

