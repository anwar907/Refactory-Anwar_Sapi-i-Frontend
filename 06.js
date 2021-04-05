<script type = "text/javascript">
      const findMissLetter = (listArray) => {
          for (let i = 1; i < listArray.length; i++){
              const before = listArray[i - 1].charCodeAt();
              const current = listArray[i].charCodeAt();
              if(current - before !== 1){
                  return String.fromCharCode(before +1);
              }
          }
          return null;
      }
document.write("list_letters_first = " + findMissLetter(["c","d","e","g","h"]));
document.write("<br>list_letters_second = " +findMissLetter(["X","Z"]));
      </script>
