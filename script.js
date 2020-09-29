const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
]

let jogadorPosicaoY = 9
let jogadorPosicaoX = 1
let jogador = document.createElement("div")
jogador.setAttribute("id", "jogador")

for (i = 0; i < 15; i++) {
    let linha = document.createElement("div")
    linha.setAttribute("id", "linha" + [i])
    linha.setAttribute("class", "linha")
    document.body.appendChild(linha)
    for (j = 0; j < 21; j++) {
        let cell = document.createElement("div")
        cell.setAttribute("id", "linha" + [i] + "cell" + [j])
        if (map[i][j] === "W") {
            cell.setAttribute("class", "wall")
        }
        else if (map[i][j] === " " || map[i][j] === "S") {
            cell.setAttribute("class", "grass")
        }

        else {
            cell.setAttribute("class", "portal")
        }
        linha.appendChild(cell)
    }
} +

    document.getElementById("linha9cell1").appendChild(jogador)

document.addEventListener('keydown', (event) => {
    const keyName = event.key
    if (keyName === "ArrowDown") {
        if (jogadorPosicaoY >= 0 && jogadorPosicaoY < 14) {
            let checharProxPosicao = document.getElementById("linha" + (jogadorPosicaoY + 1) + "cell" + jogadorPosicaoX)
            if (checharProxPosicao.className === "grass" || checharProxPosicao.className === "portal") {
                jogadorPosicaoY++
                let checarPosicao = document.getElementById("linha" + (jogadorPosicaoY) + "cell" + jogadorPosicaoX)
                checarPosicao.appendChild(jogador)
                checkWin()
            }
            else {
                console.log("Bruxos Não atravessam paredes.")
            }
        }
    }


    if (keyName === "ArrowUp") {
        if (jogadorPosicaoY > 0 && jogadorPosicaoY <= 14) {
            let checharProxPosicao = document.getElementById("linha" + (jogadorPosicaoY - 1) + "cell" + jogadorPosicaoX)
            if (checharProxPosicao.className === "grass" || checharProxPosicao.className === "portal") {
                jogadorPosicaoY--
                let checarPosicao = document.getElementById("linha" + (jogadorPosicaoY) + "cell" + jogadorPosicaoX)
                checarPosicao.appendChild(jogador)
                checkWin()
            }
            else {
                console.log("Bruxos Não atravessam paredes.")
            }
        }
    }

    if (keyName === "ArrowLeft") {
        if (jogadorPosicaoX > 0 && jogadorPosicaoY <= 20) {
            let checharProxPosicao = document.getElementById("linha" + jogadorPosicaoY + "cell" + (jogadorPosicaoX - 1))
            if (checharProxPosicao.className === "grass" || checharProxPosicao.className === "portal") {
                jogadorPosicaoX--
                let checarPosicao = document.getElementById("linha" + (jogadorPosicaoY) + "cell" + jogadorPosicaoX)
                checarPosicao.appendChild(jogador)
                checkWin()
            }
            else {
                console.log("Bruxos Não atravessam paredes.")
            }
        }
        if (jogadorPosicaoX === 0) {
            console.log("Vocẽ não pode desistir de um contrato.")
        }
    }

    if (keyName === "ArrowRight") {
        console.log(jogadorPosicaoY)
        if (jogadorPosicaoX >= 0 && jogadorPosicaoY < 20) {
            let checharProxPosicao = document.getElementById("linha" + jogadorPosicaoY + "cell" + (jogadorPosicaoX + 1))
            if (checharProxPosicao.className === "grass" || checharProxPosicao.className === "portal") {
                jogadorPosicaoX++
                let checarPosicao = document.getElementById("linha" + jogadorPosicaoY + "cell" + jogadorPosicaoX)
                checarPosicao.appendChild(jogador)
                checkWin()
            }
            else {
                console.log("Bruxos Não atravessam paredes.")
            }
        }
    }
})

function checkWin() {
    if (jogadorPosicaoY === 8 && jogadorPosicaoX === 20) {
        console.log("Parabéns, você chegou ao portal.")
    }
}