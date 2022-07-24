const names = ["Guadalupe", "Ollie", "Aki"];

const writeCardsArray = [] 

function writeCards(names) {
  for (let i = 0; i < names.length; i++) {
    writeCardsArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    
  }

  return writeCardsArray 


}

function countDown(number){
    while (number >= 0){
    console.log(number)
    number--
    }

}