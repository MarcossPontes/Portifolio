function calcular(tipo, conteudo) {

    if (tipo === 'funcao') {

        if (conteudo === 'c') {
            document.getElementById('resultado').value = ''
        }else if (conteudo === '+' || conteudo === '-' || conteudo === '*' || conteudo === '/' || conteudo === '.') {
            document.getElementById('resultado').value += conteudo
        }else if (conteudo === '=') {

            var valor_resultado = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_resultado

        }

    } else if (tipo === 'valor') {
        
        document.getElementById('resultado').value += conteudo
    }

}