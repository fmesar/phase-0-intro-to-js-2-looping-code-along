// Code your solutions in this file

const cards = ["Guadalupe", "Ollie", "Aki"]
function writeCards(cards){
    const array=[];
    for(let i = 0; i < cards.length; i++ )
    {
      array.push('Thank you, ' + cards[i] +', for the wonderful surprise gift!');
    
    
    }
 
    return array
}



function countDown(){
    for(let i = 0; i < 11; i++ )

    console.log(i);
}