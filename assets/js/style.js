let po=document.querySelector(".po");
    document.addEventListener("mousemove",(e)=>{
        po.style.left= e.clientX+"px";
        po.style.top= e.clientY+"px";
    });

let a=0;
function men(){
    
    if(a%2==0){
        document.getElementById("nav").style.left="0%";
        document.getElementById("nav").style.width="310px";
        a++;
    }
    else{
        document.getElementById("nav").style.left="-25%";
        document.getElementById("nav").style.width="0";
        a++;
    }
    
}

const links = document.querySelectorAll(".navbar a");
links.forEach(e => {
    e.addEventListener("click", function() {
        // Remove active from all
        links.forEach(l => l.classList.remove("active"));
        // Add active to clicked
        this.classList.add("active");
    });
});



// ____________skill


 let circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
        let percent = circle.getAttribute("per");
        let span = circle.querySelector("span");
        let start = 0;

        let interval = setInterval(() => {
            if(start >= percent){
                clearInterval(interval);
            } else {
                start++;
                let degree = start * 3.6; // 100% -> 360deg
                circle.style.background = `conic-gradient( #eeeeee0c ${degree*0.09}deg, #0053a3 ${degree}deg, #eeeeee0c ${degree}deg)`;
                span.innerText = start + "%";
            }
        }, 20);
    });



    // ____________     https://demo.templatemonster.com/demo/253125.html