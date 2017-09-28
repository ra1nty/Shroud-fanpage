window.onbeforeunload = function(){ window.scrollTo(0,0); }
document.getElementById("nav-overview").classList.add("current");
var vid = document.getElementById("hpvideo");
var navbar = document.getElementById("navbar");
var description = document.getElementById("slider-description")

if(window.matchMedia('(prefers-reduced-motion)').matches){
    vid.removeAttribute("autoplay");
    vid.pause();
}

var ll = document.getElementsByClassName("nav-link")
for(let i = 0; i < ll.length; i++){
    (ll.item(i)).addEventListener("click", function(){
        let jid = (ll.item(i)).getAttribute('id').split("-")[1];
        document.querySelector("#"+jid).scrollIntoView({ 
            behavior: 'smooth' 
        });
    })
}

window.addEventListener('scroll', function(){
    var cat1 = document.getElementById("career").offsetTop-50;
    var cat2 = document.getElementById("news").offsetTop-50;
    var cat3 = document.getElementById("gallery").offsetTop-50;
    var cat4 = document.getElementById("links").offsetTop-50;
    if (document.body.scrollTop > cat4 || document.documentElement.scrollTop > cat4) {
        let ll = document.getElementsByClassName("nav-link")
        for(var i = 0; i < ll.length; i++){
            (ll.item(i)).classList.remove("current");
        }
        document.getElementById("nav-links").classList.add("current");
        document.getElementsByTagName("hr")[0].style.marginLeft = "80%";
        return;
    }
    if (document.body.scrollTop > cat3 || document.documentElement.scrollTop > cat3) {
        let ll = document.getElementsByClassName("nav-link")
        for(var i = 0; i < ll.length; i++){
            (ll.item(i)).classList.remove("current");
        }
        document.getElementById("nav-gallery").classList.add("current");
        document.getElementsByTagName("hr")[0].style.marginLeft = "60%";
        return;
    }
    if (document.body.scrollTop > cat2 || document.documentElement.scrollTop > cat2) {
        let ll = document.getElementsByClassName("nav-link")
        for(var i = 0; i < ll.length; i++){
            (ll.item(i)).classList.remove("current");
        }
        document.getElementById("nav-news").classList.add("current");
        document.getElementsByTagName("hr")[0].style.marginLeft = "40%";
        return;
    }
    if (document.body.scrollTop > cat1 || document.documentElement.scrollTop > cat1) {
        let ll = document.getElementsByClassName("nav-link")
        for(var i = 0; i < ll.length; i++){
            (ll.item(i)).classList.remove("current");
        }
        document.getElementById("nav-career").classList.add("current");
        document.getElementsByTagName("hr")[0].style.marginLeft = "20%";
        return;
    }
    if (document.body.scrollTop > 18 || document.documentElement.scrollTop > 18) {
        let ll = document.getElementsByClassName("nav-link")
        for(var i = 0; i < ll.length; i++){
            (ll.item(i)).classList.remove("current");
        }
        document.getElementById("navbar").classList.add("shrink");
        document.getElementById("nav-overview").classList.add("current");
        document.getElementsByTagName("hr")[0].style.marginLeft = "0";
        return;
    }

    let ll = document.getElementsByClassName("nav-link")
    for(var i = 0; i < ll.length; i++){
        (ll.item(i)).classList.remove("current");
    }
    document.getElementById("navbar").classList.remove("shrink");
    document.getElementById("nav-overview").classList.add("current");
    document.getElementsByTagName("hr")[0].style.marginLeft = "0";
    return;
}); 

vid.addEventListener('ended', function(){
    vid.pause();
    vid.classList.add("video-faded");
    navbar.classList.remove("invisible");
    description.classList.remove("invisible");
    document.body.style.overflow = "visible";
}); 
vid.addEventListener('click', function(){
    if(!vid.paused){
        vid.pause();
        vid.classList.add("video-faded");
        navbar.classList.remove("invisible");
        description.classList.remove("invisible");
        document.body.style.overflow = "visible";
    }else{
        vid.play()
    }
})

var csbtn = document.getElementById("crosshair-setting");
var mobtn = document.getElementById("mouse-setting");
var gebtn = document.getElementById("gear-setting");

csbtn.addEventListener('click', function(){
    document.getElementById("modal1").style.display = "block";
})
mobtn.addEventListener('click', function(){
    document.getElementById("modal2").style.display = "block";
})
gebtn.addEventListener('click', function(){
    document.getElementById("modal3").style.display = "block";
})

window.onclick = function(event) {
    if (event.target == document.getElementById("modal1")) {
        document.getElementById("modal1").style.display = "none";
    }
    if (event.target == document.getElementById("modal2")) {
        document.getElementById("modal2").style.display = "none";
    }
    if (event.target == document.getElementById("modal3")) {
        document.getElementById("modal3").style.display = "none";
    }
}


var counter = 0,
$items = document.querySelectorAll('.carousel figure'),
numItems = $items.length;
var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
    [].forEach.call( $items, function(el){
         el.classList.remove('show');
    });
    $items[itemToShow].classList.add('show');    
};
document.querySelector('.next').addEventListener('click', function() {
    counter++;
    showCurrent();
});
document.querySelector('.prev').addEventListener('click', function() {
    counter--;
     showCurrent();
});