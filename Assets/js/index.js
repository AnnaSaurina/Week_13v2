let checkUserName = document.querySelector('.checkboxName');
let guestName = document.getElementById('nameElement');
let urlImage = document.getElementById('urlElement');
let comment = document.getElementById('commentElement');
let button = document.querySelector('.buttonElement');
let chat = document.querySelector('.chat');
let avatarImage = [ 
    'https://webmg.ru/wp-content/uploads/2022/06/i-226-1.jpeg',
    'https://i.pinimg.com/originals/32/80/0d/32800da238d71a6c8a9c7d207fa2953f.jpg',
    'https://webmg.ru/wp-content/uploads/2022/06/i-262-1.jpeg',
    'https://i.pinimg.com/originals/9d/af/02/9daf02c70c709f3cf83b580aff0a8492.jpg',
    'https://i.pinimg.com/originals/ee/60/46/ee6046b157ba7c1fff38ab06a2cc7f5d.jpg'
    ];


function checkedWord(word) {
    return (word.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')); 
};



button.addEventListener('click', () => {
    let url = '';
    if (!urlImage.value) {
        let avatarRandom = Math.floor(Math.random(avatarImage) * 5);
        console.log();
        url = avatarImage[avatarRandom];
    } else {
        url = urlImage.value;
    }

    let visitor = '';
    if (!guestName.value) {
        visitor = guestName.value;
        // console.log('user');
    } else {
        visitor = 'username'; 
        // console.log('link');
    }

    // let checkName = checkUserName.value;
    // if (document.querySelector('.checkboxName').checked) {
    //     document.querySelector('.checkboxName').innerHTML = checkName;

    // }
    // else {
    //     document.querySelector('.checkboxName').innerHTML = '';
    // }


    let urlAvatar = urlImage.value;
    let user = guestName.value;
    let finalFullName = checkedWord(user);
    let commentChat = comment.value;
    let chatSpam = commentChat.replace(/xxx/gi, '***').replace(/viagra/gi, '***');
    let now = new Date();
    

    chat.innerHTML = `
        <div id="message" class="message">
                    <p>Чат</p>
                    <img src=${url}
                    alt="Аватар" class="avatar" />
                    <p class="date">${now}</p> 
                    <p class="userName">${finalFullName}</p> 
                    <p class="text">${chatSpam}</p>
                </div>
                `;
});

