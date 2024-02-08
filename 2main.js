// name
const fullName = {

    name: function (letters) {
  
      if(!(letters.match ('[a-z A-Z]'))){
        throw new Error("İsminiz yalnız hərflərdən ibarət olmalıdır");
        
      }
  
      if (letters.match('[0-9]')){
        throw new Error("İsminiz yalnız hərflərdən ibarət olmalıdır");
      }
  
      return "Yazdiginiz isim ugurludur !"
    }
  }
  
  console.log(fullName.name("jkli56"))



  // phone Number

// const phoneNumber = {

//   number: function (numbers) {

//     if(!(numbers.match ('[0-9]'))){
//       throw new Error("Telefon nomresi yalnız hərflərdən ibarət olmalıdır");

//       }

//     if (!(numbers.length === 7)){
//     throw  new Error("Telefon nomresi 7 reqmden ibaret olmalıdır"); 

//     }

//     return "Yazdiginiz nomre ugurludur !"

//   }
// }

// console.log(phoneNumber.number("12345679"))




  // zip code

 const zipCode = {

   code: function (numbers){

     if ( !(numbers.match ("[0-9]"))){
       throw new Error("Zip kodu yalnız hərflərdən ibarət olmalıdır");
     }
     if ( !(numbers.length === 5) ){
       throw new Error("Zip kodu 5 reqmden ibaret olmalıdır");
     }

     return "Yazdiginiz kod ugurludur !"
   }
 }

console.log(zipCode.code("123456"))
