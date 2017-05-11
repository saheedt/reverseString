'use strict';

module.exports = {
	reverseString: (word)=>{
		
		if ('' == word) return null;

		let wordList = word.split(''),output = '', lenCountDown;

  		for(let count = 0; count < wordList.length; count++){

     		lenCountDown = wordList.length - (count + 1);

    		output= output + wordList[lenCountDown];
  		}

  		if (output === word) return true;
  		return output;
	}
}