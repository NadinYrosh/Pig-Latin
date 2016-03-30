$(document).ready(function() {
  $("#translate").submit(function(event) {
    event.preventDefault();
    var word = $("#word").val().split("");

    var newWord = [];
    var vowels =["a", "e", "i", "o", "u"];
    var quSplit = ["q","u"];
 // debugger;
    for(i=0; i < word.length; i++){
      var currentLetter = word[i];
      // console.log(currentLetter);
      for(j = 0; j < vowels.length; j++){
        if (word[i] === "u" && word[i-1] === "q") {
          var pig = word.splice(word[i]-1, (word[i]));
          console.log(pig);
          var wordArray = pig.concat(word);
          wordArray.push("ay");

          var pigWord = wordArray.join("");

          // console.log(pigWord);

        }

       else if (currentLetter === vowels[j]){
          var pig = word.splice(i, (word.length -1));
          var wordArray = pig.concat(word);
          wordArray.push("ay");

          var pigWord = wordArray.join("");

          console.log(pigWord);

          $("#result").text(pigWord);
        }
      }
    }
  });
});
