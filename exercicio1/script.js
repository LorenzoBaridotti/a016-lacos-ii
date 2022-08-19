const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]
// VERSÃO COM FOR IN E FOR OF

for(let i in array){
      let jogador = `Jogador ${+i + 1}: `
      for(let j of array[i]){
        jogador += `${[j]} `
      }
  console.log(jogador)
    }

//VERSÃO COM FOR COMUM

    for(let i = 0; i < array.length; i++){
      console.log(`Jogador ${i + 1}: ${array[i]}`)
  }