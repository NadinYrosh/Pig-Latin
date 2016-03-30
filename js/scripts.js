$(document).ready(function() {
  $("#translate").submit(function(event) {
    event.preventDefault();
    var word = $("#word").val().split("");

    var newWord = [];
    var vowels =["a", "e", "i", "o", "u"];

    for(i=0; i < word.length; i++){
      var currentLetter = word[i];
      console.log(currentLetter);
      for(j = 0; j < vowels.length; j++){
        if (currentLetter === vowels[j]){
          var pig = word.splice(i, (word.length -1));
          var wordArray = pig.concat(word);
          wordArray.push("ay");

          var pigWord = wordArray.join("");

          console.log(pigWord);
        }
      }
    }
    // for(var firstVowel = 0; firstVowel < vowels.length; firstVowel++) {
    //
    //
    //
    //
    // }
    // for(var i = 0; i < vowels.length; i++) {
    //   // console.log("hi")
    //     for(var x = 0; x < word.length; x++){
    //       if (word[x] === vowels[i]) {
    //         // console.log("hello")
    //         for (var y = x; y === word.length; y++) {
    //           newWord = newWord + word[y];
    //         }
    //     for (var z = 0; z < x; z++) {
    //       newWord = newWord + word[z];
    //     }
    //     // console.log("yay")
    //
    //     newWord.concat("ay");
    //
    //   $("#result").append(newWord);
    //     }
    //   }
    // }


  });
});
