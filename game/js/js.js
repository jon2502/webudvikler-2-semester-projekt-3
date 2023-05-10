//html
const profileimgprint = document.getElementById('profileimgprint')
const registerSubmit = document.getElementById('registerSubmit')
const profilepic = document.getElementById('profilepic')




//index

//login

//register
    function showProfilPics(data){
        console.log(data)
        for(let objects of data.pics){
        const pics = document.createElement('div')
        pics.classList.add('pics')
        pics.innerHTML=`<img class="imgklik" id=${objects.id} src=${objects.img}>`
        profileimgprint.appendChild(pics)
        }
        let imgklik = document.querySelectorAll('.imgklik')
        console.log(imgklik)
        imgklik.forEach(img =>{
            img.addEventListener("click",fetchimgData)

    function fetchimgData() {
        console.log(this.id)
        fetch(`http://localhost:3000/profilePics/${this.id}`)
            .then(res=> res.json())
            .then((data) => printimginfo(data))

        function printimginfo(data){
            console.log(data.imgurl[0].img)
            }
    }
    })
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