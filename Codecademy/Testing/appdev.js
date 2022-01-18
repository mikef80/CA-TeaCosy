/* A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.
 
Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:
 
encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
In both methods, any character outside the alphabet should remain the same.
But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z. */
 
class ShiftCipher {
    constructor(shift) {
      this.shift = shift;
    }
  
  
  
  
  
  
  
  
    encrypt(string) {
      let array = []
      let length = string.length;
   




      
      for (let i = 0; i < length; i++) {
        
        // LETTER TO LOWER CASE
        let ltr = string[i].toLowerCase();
        console.log(ltr);


        // CONVERT TO CHAR ASCII CODE, ADD 1 AND SAVE TO VARIABLE
        let outputCode = ltr.charCodeAt(0) + 1;
        // console.log(outputCode);

        // CHECK IF ASCII CODE IS ABOVE 'z', IF SO LOOP AROUND TO A
        if (outputCode > 122) {
          outputCode = (outputCode % 122) + 96;
          outputCode = String.fromCharCode(outputCode);

          console.log(`OP:` + outputCode);
        } else {
          outputCode = String.fromCharCode(outputCode);

          console.log(outputCode);
        }
  
  
  
  
  
  
  
  
  
        /* array[i] = String.fromCharCode(outputCode);
        console.log(array[i]); */
      }
      return array.join('');
    }
  
  
  
  
  
  
  
  
  
  
  
  
   
   
  }
   
  const cipher = new ShiftCipher(1);
  let encode = cipher.encrypt(' World!z');
  // let decode = cipher.decrypt('LIPPS, WSVPH!');
  // console.log(encode);
  // console.log(decode);