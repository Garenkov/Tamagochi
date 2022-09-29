let lives = 0;

function Tamagochi(){
    const tmg = document.createElement('div');
    tmg.className = 'tmg';
    document.querySelector('.container').append(tmg);

    const hp = document.createElement('div');
    hp.className = 'hp';
    tmg.append(hp);

    const face = document.createElement('img');
    face.className = 'face';
    tmg.append(face);

    const btn = document.createElement('button');
    btn.className = 'btn';
    tmg.append(btn);
    btn.innerHTML = 'Save';
    btn.addEventListener('click', () => this.save());

    this.health = 100;
    this.killer = function(){
        if(this.health > 0){
            this.health--
            hp.style.width = this.health + 'px';
        } else {
            hp.style.opacity = 0;
            face.src = './img/RIP.png';
            tmg.removeEventListener('click', () => this.save());

            setTimeout(() => {
                tmg.style.opacity = 0;
                setTimeout(() => {
                    tmg.remove();
                }, 1000)
            }, 1000);
            lives++;
            document.querySelector('.count').innerHTML = 'Умерло: ' + lives;
            clearInterval(timer);
        }
    };
    this.save = function(){
        if(this.health > 90){
            this.health = 100;
        } else {
            this.health += Math.round(this.health * 0.2);
        }
    };
    this.face = function(){
        const faceArr = ['./img/tmg1.png', './img/tmg3.png', './img/tmg4.png', './img/tmg5.png', './img/tmg6.png', './img/tmg7.png'];
        face.src = faceArr[Math.floor(Math.random() * faceArr.length)];
    }
    const timer = setInterval(() => this.killer(), 100);
}

function createTmg(){
    const biba = new Tamagochi();
    biba.killer();
    biba.face();
}

document.querySelector('#createTmg').addEventListener('click', createTmg);