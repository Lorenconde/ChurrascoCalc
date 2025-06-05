function calcular() {
    
    var homens = parseInt(document.getElementById('homens').value) || 0;
    var mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    var criancas = parseInt(document.getElementById('criancas').value) || 0;

    var carneBovina = (homens * 500 + mulheres * 300 + criancas * 200) / 1000;
    var frango = (homens * 200 + mulheres * 200 + criancas * 100) / 1000;
    var linguica = (homens * 200 + mulheres * 200 + criancas * 200) / 1000;
    var refrigerante = (homens * 300 + mulheres * 400 + criancas * 200) / 1000;
    var cerveja = (homens * 800 + mulheres * 500) / 1000;

    var resultado = 
        '<h2>Quantidades Necessárias:</h2>' +
        '<p>Carne Bovina: ' + carneBovina.toFixed(1) + ' kg</p>' +
        '<p>Frango: ' + frango.toFixed(1) + ' kg</p>' +
        '<p>Linguiça: ' + linguica.toFixed(1) + ' kg</p>' +
        '<p>Refrigerante: ' + refrigerante.toFixed(1) + ' L</p>' +
        '<p>Cerveja: ' + cerveja.toFixed(1) + ' L</p>';

    document.getElementById('resultado').innerHTML = resultado;
}