let num = document.getElementsByClassName('num')
let res = document.querySelector("div#display")
let op = document.getElementsByClassName("operator")
let v1 = ''
let v2 = ''
var sinais = ''
var sign = 0
let list = []
res.innerHTML = ''
for(let x = 0; x < num.length; x++){
    // list.push(num[x].value)
    let n = num[x]
    n.addEventListener('click', add)
    let val = num[x].value
    function add(){
        let len = resLength()
        if(len < 11){
            res.innerHTML += `${val}`
            valNum(val)
            
        }else{

            window.alert("Não é possível inserir mais de 11 dígitos!")
        }
    
    }

}

for(sign; sign < op.length; sign++){
    let operator = op[sign]
    operator.addEventListener('click',calc)
    function calc(){
        let sin = operator.value
        sinais += operator.value
        if(sinais.length == 1){
            res.innerHTML += `${sin}`
        }else{
            calcular()    
            
        }
        // valores = ''
        console.log(sinais.length)
        console.log(sinais)
        console.log(sin)
    }
}
// function clear(newValue,oldValue){
//     newValue = oldValue
//     newValue = 0
    

// }

function valNum(val){
    
    // valores = ''
    if (sinais.length == 0){
        list = []
        v1 += val
        console.log(v1)
    
        

    }else{
        v2 += val
        console.log(v2)
    
    }
        // console.log(list)

    }
// function valNum(val){
//         console.log(list)
//         if(sinais.length == 0){
//             list = []
//             valores += val
//             list.push(valores)
//             console.log(list)
//         }else{  
//             for(let c = 1; c <= sinais.length; c++){
//                 valores = ''
//                 while(sinais.length > c){
//                     valores += val

//                 }
//                 list.push(valores)
//                 console.log(list)
//                 console.log(c)
    
//             }
//         }
        
//     }

function resLength(){
    let value1 = res.innerHTML.length
    // console.log(value1)
    return value1


}
function deletar(){
    res.innerHTML = ''
    v1 = ''
    v2 = ''
    sinais = ''

}
function calcular(){
    for(let c in sinais){
        let nv1 = 0
        nv1 += Number(v1)
        let nv2 = 0
        nv2 += Number(v2)
        switch(sinais){
            case '+':
                let soma = nv1 + nv2
                res.innerHTML = soma
                console.log(soma)
                nv1 = soma
                v1 = nv1
                nv2 = 0
                v2 = ''
                console.log(nv1)
                break
            case '*':
                let mult = nv1 * nv2
                res.innerHTML = mult
                nv1 = mult
                v1 = nv1
                nv2 = 0
                v2 = ''
                break
            case '/':
                let div = nv1 / nv2
                res.innerHTML = div
                nv1 = div
                v1 = nv1
                nv2 = 0
                v2 = ''
                break
            case '-':
                let sub = nv1 - nv2
                res.innerHTML = sub
                nv1 = sub
                v1 = nv1
                nv2 = 0
                v2 = ''
                break
            }
        sinais = ''
    }
}