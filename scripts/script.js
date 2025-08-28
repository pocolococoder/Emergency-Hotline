const hearts = document.getElementsByClassName('heart-icon');

for(const heart of hearts){
    heart.addEventListener('click', function(){
        const heartCounting = parseInt(document.getElementById('love-increase').innerText);
        const increaseCounting = heartCounting + 1;
        document.getElementById('love-increase').innerText = increaseCounting;
    })
}





// container and  clear button section

const callButtons = document.querySelectorAll(".call-button");

const coinCounter = document.getElementById("coin-counter");


const historyContainer = document.querySelector(
  ".flex-1.mt-2.space-y-2.overflow-y-auto"
);



const clearBtn = document.getElementById("clear-Btn");

callButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.closest(".card-body");
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNum = card.querySelector(".service-num").innerText;

 
    let currentCoins = parseInt(coinCounter.innerText);

    if (currentCoins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }


    currentCoins -= 20;
    coinCounter.innerText = currentCoins;


    alert(`Calling ${serviceName} (${serviceNum})`);


    const now = new Date();
    const timeString = now.toLocaleTimeString(); // eg: 11:36:58 AM


    const historyItem = document.createElement("div");
    historyItem.className =
      "flex items-center justify-between p-3 bg-gray-100 rounded-lg";
    historyItem.innerHTML = `
      <div>
        <h4 class="font-semibold">${serviceName}</h4>
        <p class="text-sm text-gray-600">${serviceNum}</p>
      </div>
      <div class="text-sm text-gray-500">${timeString}</div>
    `;

    
    historyContainer.append(historyItem);
  });
});


clearBtn.addEventListener("click", function () {
  historyContainer.innerHTML = "";
});





const copyButtons = document.querySelectorAll(".btn i.fa-copy, .btn .fa-copy");


const navbarCopyCounter = document.querySelector(".bg-green-600 p, .bg-green-600 .font-bold");
let copyCount = 0;


copyButtons.forEach(function(button) {
  button.closest("button").addEventListener("click", function () {

    const card = button.closest(".card-body");
    const hotlineNumber = card.querySelector(".service-num").innerText;


    navigator.clipboard.writeText(hotlineNumber).then(() => {
    
      copyCount++;
      navbarCopyCounter.innerText = copyCount;

      alert(`Hotline Number ${hotlineNumber} copied!`);
    });
  });
});