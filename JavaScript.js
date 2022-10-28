var frm = document.querySelector("form")
var div = document.getElementById('log');
var texto = `Você vai passsar no ITA-IME amiguinho`;

frm.addEventListener("submit", (e) => {
    e.preventDefault();     // evita o envio do form

    const nome = frm.inNome.value;
    texto += ` ${nome}`;

    function escrever(str, el) {
        var char = str.split('').reverse();
        var typer = setInterval(function() {
            if (!char.length) return clearInterval(typer);
            var next = char.pop();
            el.innerHTML += next;
        }, 100);
    }
    
    escrever(texto, div);
})