const smile = ['&#129313;', '&#128125;', '&#128169;', '&#128123;', '&#128513;'];

const span = document.createElement('span');
document.body.appendChild(span);

const votes = [0, 0, 0, 0, 0];

const count = () => {
    for (let i = 0; i < smile.length; i++) {
        const div = span.querySelector(`.div${i + 1}`);
        div.innerHTML = `${smile[i]} ${votes[i]}`;
    }
};

const clickElem = (index) => {
    votes[index]++;
    count();
};

const divCreate = () => {
    for (let i = 1; i <= smile.length; i++) {
        const div = document.createElement('div');
        span.appendChild(div);
        div.classList.add(`div${i}`);
        div.innerHTML = `${smile[i - 1]}`;
        div.addEventListener('click', () => clickElem(i - 1));
    }
    count();
};

divCreate();
