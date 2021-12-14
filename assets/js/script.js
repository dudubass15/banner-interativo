// Buttons
const btnPrimary    = document.querySelector('#btn-primary');
const btnSecondary  = document.querySelector('#btn-secondary');
const btnTerciary   = document.querySelector('#btn-terciary');
const btnComprar    = document.querySelector('#btn-comprar');

// Display
const displayColor  = document.querySelector('#display-color-banner');

// Modal
const modal         = document.querySelector('#modal');
const btnCloseModal =  document.querySelector('#btn-closed');

// Variaveis de cores
const bol1          = '#383840';
const bol2          = '#F3BF3A';
const bol3          = '#EB5757';

// Variaveis cores ativos
const class1          = 'btn-active-primary';
const class2          = 'btn-active-secondary';
const class3          = 'btn-active-terciary';

btnPrimary.addEventListener('click', () => {
    this.trocarCorDisplay(bol1);
    this.trocarCorBotao(bol1);
    this.ativarBotao(btnPrimary, class1);
});

btnSecondary.addEventListener('click', () => {
    this.trocarCorDisplay(bol2);
    this.trocarCorBotao(bol2);
    this.ativarBotao(btnSecondary, class2);
});

btnTerciary.addEventListener('click', () => {
    this.trocarCorDisplay(bol3);
    this.trocarCorBotao(bol3);
    this.ativarBotao(btnTerciary, class3);
});

btnComprar.addEventListener('click', () => {
    this.abrirModal();
});

btnCloseModal.addEventListener('click', () => {
    this.fecharModal();
});

function trocarCorDisplay(cor) {
    displayColor.style.backgroundColor = cor;
}

function trocarCorBotao(cor) {
    btnComprar.style.backgroundColor = cor;
}

function ativarBotao(elemento, classe) {
    this.removeClassesAplicadas();

    elemento.classList.add(classe);
}

function removeClassesAplicadas() {
    btnPrimary.classList.remove(class1);
    btnSecondary.classList.remove(class2);
    btnTerciary.classList.remove(class3);
}

function abrirModal() {
    modal.classList.add('open');
}

function fecharModal() {
    modal.classList.remove('open');
    modal.classList.add('close');

    setTimeout(() => {
        modal.classList.remove('close');
    }, 2000);
}