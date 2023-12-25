let URL = "https://api.github.com/users/rishabh0777";
let pic = document.querySelector('#pic');
let userName = document.querySelector('#hero-profile h2');
let follower = document.querySelector('#follower p');
let following = document.querySelector('#following p');
let repo = document.querySelector('#repo p');
let loc = document.querySelector('#location p');
let themeBtn = document.querySelector('#theme');
let main = document.querySelector('#main');
let info = document.querySelectorAll('.info h3');
let darkLight = document.querySelector('i');


async function fetchUrl(){
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    pic.innerHTML = `<img src ="${data.avatar_url}" alt=""/>`
    userName.innerHTML = `${data.name}`;
    follower.innerHTML =`${data.followers}`;
    following.innerHTML = `${data.following}`;
    repo.innerHTML = `${data.public_repos}`;
    loc.innerHTML = `${data.location}`;
}

fetchUrl();
let Switch = 1;
themeBtn.addEventListener('click', ()=>{
    if(Switch===1){
        // main.style.background = '#fff';
        /*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=a195ac&c2=91bde2&gt=l&gd=dbr
*/
main.style.background = '#A195AC';
main.style.background = 'linear-gradient(315deg, #A195AC, #91BDE2)';
        userName.style.color = '#000';
        themeBtn.innerHTML = '<i class="ri-contrast-2-line" style="color:#000"></i>';
        // themeBtn.style.backgroundColor = '#000'
        info.forEach((e)=>{
            e.style.color = '#000';
        })
        Switch = 0;
    }else{
        main.style.background ='#010328';
        main.style.background = 'linear-gradient(270deg, #010328, #000000)';
        themeBtn.innerHTML = '<i class="ri-sun-fill"></i>';
        userName.style.color = '#fff';
        darkLight.style.color = '#000';
        info.forEach((e)=>{
            e.style.color = '#e3e4f2';
        });
        Switch = 1;
        
    }
})

