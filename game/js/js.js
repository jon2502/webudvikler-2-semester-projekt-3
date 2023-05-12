//html
const profileimgprint = document.getElementById('profileimgprint')
const userpic = document.getElementById('userpic')
var selctedimg = true
const logout = document.getElementById('logout')

// authetication

//index

//login

//register
    function showProfilPics(data){
        for(let objects of data.pics){
        const pics = document.createElement('div')
        pics.classList.add('pics')
        pics.innerHTML=`<img class="imgklik" id=${objects.id} src=${objects.img}>`
        profileimgprint.appendChild(pics)
        }
        let imgklik = document.querySelectorAll('.imgklik')
        imgklik.forEach(img =>{
            img.addEventListener("click",fetchimgData)

    function fetchimgData() {
        if(selctedimg == true) {
            this.classList.add("selectedImg")
            selctedimg = false
        } else {
            imgklik.forEach(img =>{
                img.className="imgklik"})
            this.classList.add("selectedImg")
        }
        fetch(`http://localhost:3000/profilePics/${this.id}`)
            .then(res=> res.json())
            .then((data) => printimginfo(data))

        function printimginfo(data){
            if(userpic.value.length == 0){
                userpic.setAttribute('value',`${data.imgurl[0].img}`)
            }else{
                userpic.setAttribute('value',``)
                userpic.setAttribute('value',`${data.imgurl[0].img}`)
            }
            }
    }
    })
}

//spil side
logout.addEventListener('click',logoutfunction)
async function logoutfunction() {
    fetch('http://localhost:3000/logout')
    .then(res => {
        console.log(res.url);
        window.location.replace(`${res.url}`)
      }).catch(err => {
        console.log('Error -', err);
      });
}


//andet
switch (window.location.pathname){
    case "/game/registrer.html":
        fetch('http://localhost:3000/profilePics')
            .then((res)=> res.json())
            .then((data) => showProfilPics(data))
        break;
    case "/game/gameselcect.html":
        fetch('http://localhost:3000/authentication')
    .then(res => {
        console.log(res);
        /*if (res.token == ""){
            window.location.replace(`${res.url}`)
        }*/
      }).catch(err => {
        console.log('Error -', err);
      });
        break;
    case "/game/gameselcect.html":
        fetch('http://localhost:3000/userinfo')
        .then((res)=> res.json())
        .then((data) => printprofile(data))
        break;
    default:
        break;
}

