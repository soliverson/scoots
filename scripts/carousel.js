// business spotlight slideshow code

let advertising = true;
const adsUrl = 'data/members.json';
const adsContainer = document.querySelector(".slide-card");
const advertisement = document.createElement('h3');
advertisement.classList.add('text');
const slideImg = document.createElement('img');
slideImg.classList.add('slide-img');

let members = [];

async function getAdvertisementData(url){
    const response = await fetch(url);
    const data = await response.json();
    members = await data.members;
    displayAdds(members);
    
}


function displayAdds(members){
    
        let index = Math.floor(Math.random() * (members.length-1));
        
        if (members[index].membership == 'Silver' || members[index].membership == 'Gold'){
            slideImg.setAttribute('src', members[index].image);
            slideImg.setAttribute('alt', members[index].name);
            advertisement.textContent = members[index].advertisement;
            adsContainer.appendChild(slideImg);
            adsContainer.appendChild(advertisement);            
        }

    setTimeout(function(){displayAdds(members)}, 3000);
} 

getAdvertisementData(adsUrl);



    