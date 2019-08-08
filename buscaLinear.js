/* Algoritmo de Busca Linear: 
 * O primeiro parâmetro deve ser um Array 
 * O segundo parâmetro é um valor que você deseja pesquisar dentro do seu Array
 */

//Estrutura para o algoritmo de Busca Linear
function conventionalLinearSearch(arr, value){
    if(!Array.isArray(arr)) 
        return 'O valor inserido no primeiro parâmetro, não é um array';

    for(let index = 0; index < arr.length; index++){
        if(arr[index] === value){
            return 'O item: '+ value + ' está no índice '+ index +' do Array!';
        }
    }
    return 'O item: '+ value + ' não foi encontrado no Array' ;
}

//Estrutura que pensei após analisar o algoritmo de Busca Linear
function linearSearch(arr, value){
    if(!Array.isArray(arr)) 
        return 'O valor inserido no primeiro parâmetro, não é um array';
    
    let result = arr.findIndex(v => v == value);
    return result != -1 ? 'O item: '+ value + ' está no índice '+ result +' do Array!' : 'O item: '+ value + ' não foi encontrado no Array';
}