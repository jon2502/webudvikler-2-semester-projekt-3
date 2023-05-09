//html
const profileimgprint = document.getElementById('profileimgprint')
const registerSubmit = document.getElementById('registerSubmit')


//index

//login

//register
    function showProfilPics(data){
        console.log(data)
        for(let objects of data.pics){
        console.log(objects)
        const pics = document.createElement('div')
        pics.classList.add('pics')
        pics.innerHTML=`<img src=${objects.img}>`
        profileimgprint.appendChild(pics)
        }
    }

    
//spil side

//andet
switch (window.location.pathname){
    case "/game/registrer.html":
        fetch('http://localhost:3000/profilePics')
            .then((res)=> res.json())
            .then((data) => showProfilPics(data))
        break;
}