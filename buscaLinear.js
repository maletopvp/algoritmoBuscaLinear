/* Algoritmo de Busca Linear: 
 * O primeiro parâmetro deve ser um Array 
 * O segundo parâmetro é um valor que você deseja pesquisar dentro do seu Array
*/

//Estrutura para o algoritmo de Busca Linear
function conventionalLinearSearch(arr, value){
    let result = false;

    for(let index = 0; index < arr.length; index++){
        if(arr[index] === value){
            result = true;
        }
    }
    return result;
}

//Estrutura que pensei após analisar o algoritmo de Busca Linear
function linearSearch(arr, value){
    if(!Array.isArray(arr)) return false;
    return arr.filter(index => index == value).length > 0;
}