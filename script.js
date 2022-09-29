const pocemon = {
    name: 'blacemon',
    health: 20,
    eat(){
       if(this.health > 80){
        this.health = 100;
       } else{
        this.health += 20;
       }
    },
    sayHi(){
        alert(this.name);
    },
    killer(){
        if(pocemon.health > 0){
            pocemon.health--
            document.querySelector('.health').innerHTML = `УРОВЕНЬ ЖИЗНИ:  ${pocemon.health}`;
        }else{
            clearInterval(hunter);
            document.querySelector('.health').innerHTML = 'Я СДОХ(((';
        }
    },
}

function create(){
    const pocBody = document.createElement('div');
    pocBody.className = 'tamagochi';
    document.querySelector('.container').append(pocBody);
    const hp = document.createElement('div');
    hp.className = 'health';
    pocBody.append(hp);
    hp.innerHTML = pocemon.health;
    const pic = document.createElement('div');
    pic.className = 'pic';
    pocBody.append(pic);
}

document.querySelector('#button').addEventListener('click', createPocemon);
document.querySelector('#feed').addEventListener('click', () => pocemon.eat());
document.querySelector('#hi').addEventListener('click', () => pocemon.sayHi());
document.querySelector('#kill').addEventListener('click', pocemon.killer);
document.querySelector('.health').innerHTML = pocemon.health;

document.querySelector('#created').addEventListener('click', create);

const hunter = setInterval(pocemon.killer, 1000);

function createPocemon(){
    console.log(pocemon);
}




