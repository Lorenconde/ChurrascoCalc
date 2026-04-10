const adultosInput = document.getElementById("adultos")
const criancasInput = document.getElementById("criancas")
const resultado = document.getElementById("resultado")
const botaoCalcular = document.getElementById("btnCalcular")
const botaoSalvar = document.getElementById("btnSalvar")
const toggleTema = document.getElementById("toggleTema")

botaoCalcular.addEventListener("click", calcular)
botaoSalvar.addEventListener("click", salvarLista)
toggleTema.addEventListener("click", alternarTema)

function calcular(){

const adultos = Number(adultosInput.value)
const criancas = Number(criancasInput.value)

 if(adultos === 0 && criancas === 0){
resultado.innerHTML = "Informe ao menos 1 pessoa"
return
}
const carnesSelecionadas = document.querySelectorAll('input[type="checkbox"]:checked')
const carneTotal =(adultos * 0.4) + (criancas * 0.2)
const carnePorTipo = carneTotal /carnesSelecionadas.length

let lista = ""

carnesSelecionadas.forEach(carne =>{

lista +=`🥩 ${carne.value}:${carnePorTipo.toFixed(2)} kg <br>`
})

const cerveja = adultos * 1.5
const refri = (adultos + criancas) * 1
const carvao = (adultos + criancas) * 0.8

lista += `<br>
🍺 Cerveja:${cerveja.toFixed(1)} L<br>
🥤 Refrigerante:${refri.toFixed(1)} L<br>
🔥 Carvão:${carvao.toFixed(1)} kg
`

resultado.innerHTML = lista

localStorage.setItem("listaChurrasco", lista)

}

function salvarLista(){

const lista = localStorage.getItem("listaChurrasco")

if(lista){
alert("Lista salva com sucesso!")

}else{
alert("Faça o cálculo primeiro!")
}

}

function alternarTema(){

document.body.classList.toggle("light-mode")

if(document.body.classList.contains("light-mode")
){

 localStorage.setItem("tema","light"
)

}else{
 localStorage.setItem("tema","dark")
}

}

window.onload = () => {

const temaSalvo = localStorage.getItem("tema")

if(temaSalvo === "light"){
document.body.classList.add("light-mode")
}

}