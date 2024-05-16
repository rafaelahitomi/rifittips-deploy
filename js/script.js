function atualizarObjetivo() {
    var objetivo = document.getElementById('objetivo').value;
    var subObjetivoElojob = document.getElementById('subObjetivoElojob');
    var subObjetivoCoach = document.getElementById('subObjetivoCoach');
    var outrosObjetivo = document.getElementById('outrosObjetivo');
    var coachOutroDescricao = document.getElementById('coachOutroDescricao');
    var orcamento = document.getElementById('orcamento');

    subObjetivoElojob.style.display = 'none';
    subObjetivoCoach.style.display = 'none';
    outrosObjetivo.style.display = 'none';
    coachOutroDescricao.style.display = 'none';
    orcamento.innerText = 'R$0,00';

    switch (objetivo) {
        case 'elojob':
            subObjetivoElojob.style.display = 'block';
            break;
        case 'coach':
            subObjetivoCoach.style.display = 'block';
            break;
        case 'outros':
            outrosObjetivo.style.display = 'block';
            orcamento.innerText = 'Seu orçamento será analisado e enviado por e-mail.';
            break;
        default:
            break;
    }
}

function atualizarValor() {
    var objetivo = document.getElementById('objetivo').value;
    var elojob = document.getElementById('elojob').value;
    var coach = document.getElementById('coach').value;
    var orcamento = document.getElementById('orcamento');
    var valor = 0;

    if (objetivo === 'elojob') {
        switch (elojob) {
            case 'esmeraldaI':
                valor = 500.00;
                break;
            case 'esmeraldaII':
                valor = 450.00;
                break;
            case 'esmeraldaIII':
                valor = 400.00;
                break;
            case 'esmeraldaIV':
                valor = 350.00;
                break;
            case 'diamanteI':
                valor = 300.00;
                break;
            case 'diamanteII':
                valor = 250.00;
                break;
            case 'diamanteIII':
                valor = 200.00;
                break;
            case 'diamanteIV':
                valor = 150.00;
                break;
            case 'mestre':
                valor = 600.00;
                break;
            case 'grao-mestre':
                valor = 700.00;
                break;
            case 'desafiante':
                valor = 800.00;
                break;
            default:
                valor = 0.00;
        }
    } else if (objetivo === 'coach') {
        switch (coach) {
            case 'mindset':
                valor = 100.00;
                break;
            case 'macro':
                valor = 150.00;
                break;
            case 'micro':
                valor = 200.00;
                break;
            case 'wave':
                valor = 250.00;
                break;
            case 'coachOutro':
                valor = 0.00; // Valor pode ser definido após análise
                document.getElementById('coachOutroDescricao').style.display = 'block';
                break;
            default:
                valor = 0.00;
        }
    }

    if (valor > 0) {
        orcamento.innerText = 'R$' + valor.toFixed(2);
    }
}

document.getElementById('objetivo').addEventListener('change', atualizarObjetivo);
document.getElementById('elojob').addEventListener('change', atualizarValor);
document.getElementById('coach').addEventListener('change', atualizarValor);
