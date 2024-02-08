// PAswor 

// Minimum 8 characters  
// Atleast 1 special character 
// Atleast 3 numbers ?? ede bilmedim 

const passwordValidator = {

  newPassword: function (password) {

    if (!(password.length >= 8)){
      throw new Error("yanlisdir, en azi 8 herfden ibaret  olmalidir")
    }

    if (!(password.match ('[.!@#$%^&*()_]'))){
       throw new Error("yanlisdir, en azi 1 eded xususi simvol olmalidir");
    } 
    
    const digitMatches = password.match('[0-9]');
    
    if (digitMatches.length >= 3) {
      throw new Error("yanlisdir, en azi 3 eded reqem olmalidir");
    }
      
    // if (!(password.match ('[0-9]') >= 3)){
    //    throw new Error("yanlisdir, en azi 3 eded reqem olmalidir");
    // }
    
    return 'Yazdigin parol ugurludur !'
  }  
}

console.log (passwordValidator.newPassword("etiramhh@"))

