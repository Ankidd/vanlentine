const layout1=document.querySelector(".layout1");
const layout2=document.querySelector(".layout2");
const layout3=document.querySelector(".layout3");
const layout4=document.querySelector(".layout4");
const layout5=document.querySelector(".layout5");
const layout6=document.querySelector(".layout6");
const layout7=document.querySelector(".layout7");
document.addEventListener("DOMContentLoaded",()=>{
const inputbar=document.querySelector("input");
const inputs=document.querySelectorAll("li");
const deletebtn=document.querySelector(".delete");
const enterbtn=document.querySelector(".enter");

inputs.forEach( (item)=>{item.addEventListener("click",()=>{
    inputbar.value += item.textContent;
})}); 
deletebtn.addEventListener("click",(event)=>{
    event.stopPropagation();
    inputbar.value=inputbar.value.slice(0,-1);
})
enterbtn.addEventListener("click",(event)=>{
    event.stopPropagation();
    if (inputbar.value === "180522") {
    // layout12();
    gsap.to(".layout1", {
        duration: 2,
        x: 500,
        opacity: 0,
        onComplete: () => {layout1.style.display = "none";}
    });
    layout2.style.display="flex";
    gsap.fromTo(".layout2",
        { y: 500, opacity: 0 },
        { duration: 2, opacity: 1, y: 0, }
    );
}

    else{
        alert("wrong password");
        inputbar.value="";
    }
});

window.addEventListener("keydown",(event)=>{
    event.stopPropagation();
    if(event.key==="Enter"){
        if (inputbar.value === "180522") {
        // layout12();
        gsap.to(".layout1", {
            duration: 2,
            x: 500,
            opacity: 0,
            onComplete: () => {layout1.style.display = "none";}
        });
        layout2.style.display="flex";
        gsap.fromTo(".layout2",
            { y: 500, opacity: 0 },
            { duration: 2, opacity: 1, y: 0, }
        );
    }

        else{
            alert("wrong password");
            inputbar.value="";
        }
}})
});
// layer2
const hourtime=document.querySelector(".hour");
const yeartime=document.querySelector(".year");
const monthtime=document.querySelector(".month");
const daytime=document.querySelector(".day");
function updateTime(){
const currentDate = new Date(); 
const targetDate = new Date("2022-05-18 00:00:00");

let years = currentDate.getFullYear() - targetDate.getFullYear();
let months = currentDate.getMonth() - targetDate.getMonth();
let days = currentDate.getDate() - targetDate.getDate();
let hours = currentDate.getHours() - targetDate.getHours();
let minutes = currentDate.getMinutes() - targetDate.getMinutes();
let seconds = currentDate.getSeconds() - targetDate.getSeconds();

// Adjust negative values
if (seconds < 0) {
    seconds += 60;
    minutes--;
}
if (minutes < 0) {
    minutes += 60;
    hours--;
}
if (hours < 0) {
    hours += 24;
    days--;
}
if (days < 0) {
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
}
if (months < 0) {
    months += 12;
    years--;
}
yeartime.innerHTML=`${years} <p>years</p>`;
monthtime.innerHTML=`${months} <p>months</p>`;
daytime.innerHTML=`${days} <p>days</p>`;
hourtime.innerHTML=`${hours} <p>hours</p>`;}
setInterval(updateTime,1000);

const nextbtn=document.querySelector(".nextbtn");
nextbtn.addEventListener("click",()=>{
    gsap.to(layout2,{x:500,duration:2,opacity:0});
    layout2.style.display="none";
    layout3.style.display="flex";
    gsap.fromTo(layout3,{y:500,opacity:0},{y:0,duration:2,opacity:1});

});
//  layout3
const cat=document.getElementById("cat");
const tags=document.querySelectorAll(".tag");

tags[0].addEventListener("click",()=>{
gsap.to(cat,{duration:3,x:-480,onComplete:()=>{
    gsap.to(layout3,{x:-500,duration:2,opacity:0,onComplete:()=>{layout3.style.display="none"}});
layout4.style.display="flex";
gsap.fromTo(layout4,{y:500,opacity:0},{y:0,opacity:1,duration:2})
}});
});
tags[1].addEventListener("click",()=>{
    gsap.to(cat,{duration:3,x:-320,onComplete:()=>{
        gsap.to(layout3,{x:500,duration:2,opacity:0,onComplete:()=>{
            layout3.style.display="none";
        }});
        layout6.style.display="flex";
        gsap.fromTo(layout6,{y:500,opacity:0},{y:0,opacity:1,duration:2})
    }})
}
);
tags[2].addEventListener("click",()=>{
    gsap.to(cat,{duration:2,x:-160,onComplete:()=>{
        gsap.to(layout3,{x:500,duration:2,opacity:0,onComplete:()=>{
            layout3.style.display="none";
        }});
        layout7.style.display="flex";
        gsap.fromTo(layout7,{y:500,opacity:0},{y:0,opacity:1,duration:2})
    }})
}
);
// layer4
const backbtnLayout4=document.querySelector(".layout4_backbtn");
backbtnLayout4.addEventListener("click",()=>{
    gsap.to(layout4,{y:500,duration:2,opacity:0,onComplete:()=>{layout4.style.display="none"}});
    layout3.style.display="flex";
    gsap.fromTo(layout3,{x:-500,opacity:0},{x:0,opacity:1,duration:2})
})
// each img in layout4
const img1=document.querySelector(".img1");
const img2=document.querySelector(".img2");
const img3=document.querySelector(".img3");
const container1=document.querySelector(".container1");
img1.addEventListener("click", () => {
    const tl=gsap.timeline();
    tl.set(layout4,{display:"none"});
    tl.set(layout5,{display:"flex"});
    });

    const backbtnLayout5 = document.querySelector(".layout5_backbtn");
    const bigimgContainer=document.querySelector(".bigimg-container");
    backbtnLayout5.addEventListener("click", () => {
        backbtnLayout5.addEventListener("click", () => {
            bigimgContainer.innerHTML=`<img src="img/hinh1.png" alt="" class="bigimg">`;
            const tl=gsap.timeline();
            tl.set(layout5,{display:"none"});
            tl.set(layout4,{display:"flex"});
            });
    });
    img2.addEventListener("click", () => {
        bigimgContainer.innerHTML=`<img src="img/urimg2.jpeg" alt="" class="bigimg">`;
        const tl=gsap.timeline();
        tl.set(layout4,{display:"none"});
        tl.set(layout5,{display:"flex"});
        });
    
        backbtnLayout5.addEventListener("click", () => {
            backbtnLayout5.addEventListener("click", () => {
                const tl=gsap.timeline();
                tl.set(layout5,{display:"none"});
                tl.set(layout4,{display:"flex"});
                });
        });

        img3.addEventListener("click", () => {
            bigimgContainer.innerHTML=`<img src="img/urimg1.webp" alt="" class="bigimg">`;
            const tl=gsap.timeline();
            tl.set(layout4,{display:"none"});
            tl.set(layout5,{display:"flex"});
            });
        
            backbtnLayout5.addEventListener("click", () => {
                backbtnLayout5.addEventListener("click", () => {
                    const tl=gsap.timeline();
                    tl.set(layout5,{display:"none"});
                    tl.set(layout4,{display:"flex"});
                    });
            });

            const backbtnLayout6=document.querySelector(".layout6_backbtn");
            backbtnLayout6.addEventListener("click",()=>{
                gsap.to(layout6,{y:500,duration:2,opacity:0,onComplete:()=>{layout6.style.display="none"}});
                layout3.style.display="flex";
                gsap.fromTo(layout3,{x:500,opacity:0},{x:0,opacity:1,duration:2})
            })
    const requestbtn=document.querySelectorAll(".layout7_input");
    const no=["are you sure","really really sure","one more chance","yes(no more chance baby)"];
    requestbtn[0].addEventListener("click",anotherlayout7);
    let i=0;
    requestbtn[1].addEventListener("click",()=>{
        requestbtn[1].value=no[i];
        i++;
        if(i>no.length ){anotherlayout7();}
    })
    const layout7container=document.querySelector(".layout7_container");

    function anotherlayout7(){
        layout7container.innerHTML=`
            <p>I just want to take a moment to thank you for being in this relationship with me. Honestly, it's not easy to say, but lately, I've sometimes felt like I'm not as good as I thought I was(as if I'm not truly worthy of this relationship). You are an incredible gift to me. You're beautiful, self-disciplined, hardworking, and responsible for your future. It feels like I could never find anyone as perfect as you. There may be many people like you, but you still chose to stay with me, and that means everything. That's why I want to give my best and do everything I can to become someone truly deserving of you. If possible, I hope we can go even further together, and for that, I need to be good enough to take care of you too.  <strong>I LOVE YOU!!</strong></p> 
        `
    }