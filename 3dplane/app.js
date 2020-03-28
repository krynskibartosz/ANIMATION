let mouve = document.querySelector('.card');

    mouve.addEventListener("mousemove", (e) => {
        let x = -e.clientX / 20
        let y = e.clientY / 22

        console.log(`l'axe X = ${x}`);
        console.log(`l'axe Y = ${y}`);
        if(x >= -30 && y >= 4.3){
            mouve.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`
            console.log('première condition');
            
        }
        else{
            mouve.style.transform = `rotateY(${y - 2}deg) rotateX(${x}deg)`
            console.log('else');
            
        }
    })

    mouve.addEventListener("mouseout", () => {
        mouve.style.transform = "none"
        mouve.style.transition = '.5s'
    })