function exibirObjeto(idObj) {
    esconderObjetos();

    document.getElementById(idObj).style.display = '';
}

function esconderObjetos(){
    esconderObjeto('idteste1');
    esconderObjeto('idteste2');
    esconderObjeto('idteste3');
    esconderObjeto('idteste4');
    esconderObjeto('idteste5');
       
}

function esconderObjeto(idObj) {
    document.getElementById(idObj).style.display = 'none';
}