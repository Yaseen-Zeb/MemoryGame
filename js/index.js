// VARIABLES----------->>>
let card = document.querySelectorAll(".card"),
   card1 = "",
   card2 = "",
   filps = 0,
   time = 60,
   start = false,
   game = true,
   matched = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
arr = arr.sort(() => Math.random() > 0.5 ? -1 : 1);

card.forEach((e, i) => {
   e.querySelector("img").src = `./images/img-${arr[i]}.png`;
   e.addEventListener("click", () => {
      if (game) {
         start = true;
         if (card1 == '') {
            card1 = e
            card1.classList.add("flip")
         } else if (card2 == '' && card1 != '') {
            filps++;
            document.querySelector(".flip_counter").textContent = filps;
            card2 = e
            card2.classList.add("flip")
            if (card1.querySelector("img").src != card2.querySelector("img").src) { // cards not matched
               setTimeout(() => {
                  card1.classList.add("shake")
                  card2.classList.add("shake")
                  setTimeout(() => {
                     card1.classList.remove("flip")
                     card2.classList.remove("flip")
                     card1.classList.remove("shake")
                     card2.classList.remove("shake")
                     card1 = card2 = "";
                  }, 300);
               }, 500);
            } else { // cards matched
               matched++;
               card1 = card2 = "";
            }
         }
      } else {
         document.querySelector(".details").classList.add("shake");
         setTimeout(() => {
            document.querySelector(".details").classList.remove("shake");
         }, 400);

      }

   })
});

setInterval(() => {
   if (matched == 8) {
      start = false;
      game = false;
      document.querySelector(".game_over").textContent = " || You Win";
      document.querySelector(".game_over").style.display = 'block';
   }
   if (start == true) {
      if (time != 0) {
         time--;
         document.querySelector(".time").textContent = time;
      } else {
         card.forEach((e) => {
            game = false
            document.querySelector(".game_over").style.display = 'block';
         })
         document.querySelector(".time").textContent = 0;
      }
   }
}, 1000);

function restart() {
   window.location.href = window.location.href;
}