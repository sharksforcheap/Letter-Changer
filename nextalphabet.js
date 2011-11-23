var nextalphabet = function(old_letters){
    var digits = 'abcdefghijklmnopqrstuvwxyz';
    var alphabet_to_numbers = {};
    var numbers_to_alphabet = {};
    for(var i = 0; i < digits.length; i++){
      alphabet_to_numbers[digits[i]] = i;
      numbers_to_alphabet[i] = digits[i];
    }

    var letters_array = old_letters.split("");
    var moved_left = true;
    if (letters_array[letters_array.length-1] === digits[digits.length-1]){
	var kept_carrying_the_loopover = true;
    }else{
	var kept_carrying_the_loopover = false;
    }
    var new_letters = [];
    var letter_changer = function(letter){
	if (letter === digits[digits.length-1]){
	    return 'a';
	} else {
	    return numbers_to_alphabet[alphabet_to_numbers[letter]+1];
	}
    };
    
    var letter_index_mover = function(i){
	i--;
	var current_letter = letters_array[i];	
	if (i >= 0 ){
       	    if (i === 0 && current_letter === digits[digits.length-1] && kept_carrying_the_loopover){
		new_letters.push('a','a');
	    }else if (letter_changer(current_letter) === 'a' && moved_left){
		new_letters.push(letter_changer(current_letter));
		letter_index_mover(i);
	    }else {
		if (moved_left){
		    new_letters.push(letter_changer(current_letter));
		    moved_left = false;
		    kept_carrying_the_loopover = false;
		    letter_index_mover(i);
		} else {
		    new_letters.push(current_letter);
		    letter_index_mover(i);
		}
	    }
	}
    }

    letter_index_mover(letters_array.length);
    return new_letters.reverse().join("");
};
