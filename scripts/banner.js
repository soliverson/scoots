const banner = document.querySelector('.banner');

const weekDay = new Date().getDay();


if (weekDay == 1 || weekDay == 2 || weekDay == 3){
    const button = document.createElement('button');
    button.textContent = '❌';
    const img = document.createElement('img');
    img.setAttribute('src', 'images/chamber.webp');
    img.setAttribute('alt', 'Meeting image');
    const invitation = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = `Idaho Falls Chamber of Commerces's Meet and Greet. Wednesday at 7:00 p.m.`;
    banner.appendChild(button);
    banner.appendChild(img);
    invitation.appendChild(title);
    banner.appendChild(invitation);
    button.addEventListener('click', () =>{
        banner.classList.add('closed-banner')
    })
}
else{
    banner.setAttribute('style', 'display: none');
}