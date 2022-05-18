const popup =[
    {
        image:"https://i.gifer.com/origin/88/8874e9e1104e85d8e3369d739878aebe_w200.gif"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2b15ngpOGAowGULe9CFH3ej9oQijk0JUOA&usqp=CAU"
    },
    {
        image:"https://media1.giphy.com/media/xUPGcuGEScZBJd6B2M/200.gif"
    },
    {
        image:"https://www.ilincev.com/wp-content/uploads/2019/10/popups_3.gif"
    },
    {
        image:"https://media.sciencephoto.com/image/t4650268/800wm"
    },
    {
        image:"https://media1.giphy.com/media/l4pT1eckQBuaRkf1m/giphy.gif"
    }
]

let afis=null;

function init() {
    let elements = [];
    for (let i = 0; i < 5; i++) {
        const pp=popup[i];
        const element = document.createElement("div");
        const img = document.createElement('img');
        img.src = pp.image;

        img.style.position = 'fixed';
        img.style.top = (Math.random()*(window, innerHeight - 400)) + 'px';
        img.style.left = (Math.random()*(window, innerWidth - 400)) + 'px';
        img.style.maxHeight = "300px";
        img.style.maxWidth = "450px";
        
        element.append(img);
        elements.push(element);
    }
    const element = document.createElement("div");
    elements.push(element);
    for (let i = 0; i <= 5; i++) {

        let timeout = 12000 * i;
        setTimeout(() => { 
            afis?.remove();
            afis=elements[i];
            document.body.append(afis);
        }, timeout)
    }
    
}

window.onload=init;

