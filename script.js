// ======================================
// MUSIC
// ======================================

const music = document.getElementById("bgMusic");

// ======================================
// FOTO
// ======================================

const photos = [
    "images/WhatsApp Image 2026-07-24 at 09.59.10.jpeg",
    "images/WhatsApp Image 2026-04-28 at 17.55.56.jpeg",
    "images/WhatsApp Image 2026-04-13 at 11.16.05.jpeg",
    "images/waa.jpg",
    "images/download.jpg"
];

const captions = [
    "🌸 My Beautiful Journey",
    "✨ Keep Smiling",
    "🎂 Happy Birthday To Me",
    "💖 Thank You For Everything",
    "❤️ The Best Is Yet To Come"
];

let currentPhoto = 0;

// ======================================
// START
// ======================================

function startJourney(){

    music.play();

    document.getElementById("home").classList.add("hidden");

    document.getElementById("letter").classList.remove("hidden");

}

// ======================================
// OPEN GALLERY
// ======================================

function openGallery(){

    document.getElementById("letter").classList.add("hidden");

    document.getElementById("gallery").classList.remove("hidden");

}

// ======================================
// NEXT PHOTO
// ======================================

function nextPhoto(){

    currentPhoto++;

    if(currentPhoto < photos.length){

        const img = document.getElementById("photo");

        img.style.opacity = 0;

        setTimeout(function(){

            img.src = photos[currentPhoto];

            img.style.opacity = 1;

            document.getElementById("caption").innerHTML =
            captions[currentPhoto];

        },400);

    }

    else{

        document.getElementById("gallery").classList.add("hidden");

        document.getElementById("ending").classList.remove("hidden");

        startFireworks();

    }

}

// ======================================
// FIREWORKS
// ======================================

const canvas = document.getElementById("fireworks");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle{

    constructor(x,y,color){

        this.x=x;
        this.y=y;

        this.color=color;

        this.radius=3;

        this.speedX=(Math.random()-0.5)*8;
        this.speedY=(Math.random()-0.5)*8;

        this.life=100;

    }

    update(){

        this.x+=this.speedX;
        this.y+=this.speedY;

        this.life--;

    }

    draw(){

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

        ctx.fillStyle=this.color;

        ctx.fill();

    }

}

function explode(x,y){

    const colors=[
        "#ff4d6d",
        "#ffd166",
        "#4dabf7",
        "#51cf66",
        "#ffffff",
        "#ff99c8"
    ];

    for(let i=0;i<120;i++){

        particles.push(

            new Particle(

                x,
                y,
                colors[Math.floor(Math.random()*colors.length)]

            )

        );

    }

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{

        p.update();

        p.draw();

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animate);

}

animate();

// ======================================
// START FIREWORKS
// ======================================

function startFireworks(){

    setInterval(function(){

        explode(

            Math.random()*canvas.width,

            Math.random()*canvas.height/2

        );

    },700);

}