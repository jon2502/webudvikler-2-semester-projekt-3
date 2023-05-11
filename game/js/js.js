//html
const profileimgprint = document.getElementById('profileimgprint')
const registerSubmit = document.getElementById('registerSubmit')
const profilepic = document.getElementById('profilepic')
var selctedimg = true




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
            if(profilepic.value.length == 0){
                profilepic.setAttribute('value',`${data.imgurl[0].img}`)
            }else{
                profilepic.setAttribute('value',``)
                profilepic.setAttribute('value',`${data.imgurl[0].img}`)
            }
            }
            registerSubmit.addEventListener('click',submitUser())

            function submitUser() {
                fetch()
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