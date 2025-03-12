let amigos = [];

function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value.trim();
    
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }

    amigos.push(nombreAmigo);

    const lista = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombreAmigo;
    nuevoAmigo.className = 'name-item';

    lista.appendChild(nuevoAmigo);

    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();

    document.getElementById('resultado').innerHTML = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Debe agregar al menos un amigo para realizar el sorteo');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = '';
    
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `¡${amigoSeleccionado} es tu amigo secreto!`;
    itemResultado.className = 'result-item';
    
    resultadoLista.appendChild(itemResultado);
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});