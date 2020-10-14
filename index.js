//const MemoriaRam = ['a', 'b', 'a', 'c', 'a', 'x', 'i']
const MemoriaRam = ['m', 'a', 'r', 'c', 'o', 's', 2, 3]
const MemoriaSecundaria = [-1, -1, -1, -1]
var problemaDePaginacao = 0

function algoritmoSimuladorProblemaPaginacaoFifo() {
    for (let i = 0; i <= MemoriaRam.length; i++) {
        i = 0;
        for (let j = 0; j <= MemoriaSecundaria.length; j++) {
            if (MemoriaSecundaria.indexOf(MemoriaRam[i]) > 0) {
                MemoriaRam.shift()
                break;
            }
            else {
                problemaDePaginacao++
                MemoriaSecundaria.unshift(MemoriaRam[i])
                MemoriaSecundaria.pop()
                MemoriaRam.shift()
                break;
            }
        }
    }
    console.log(`Ocorreu ${problemaDePaginacao} problemas de paginação`)
}
algoritmoSimuladorProblemaPaginacaoFifo()