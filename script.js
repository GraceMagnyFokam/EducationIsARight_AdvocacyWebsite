var factGenerator = document.getElementById("factGenerator");
factGenerator.addEventListener("click", sendFact);

var clickCount = 0; 


function sendFact(){
clickCount = clickCount+1;

  if (clickCount == 1) {
    sendFact1();
  }

  if (clickCount == 2){
    sendFact2();
  }

  if (clickCount == 3) {
    sendFact3();
  }

  if (clickCount == 4) {
    sendFact4();
  }

  if (clickCount == 5) {
    sendFact5();
  }

  if (clickCount == 6) {
    sendFact6();
  }

  if (clickCount == 7) {
    sendFact7();
    resetClickCount();
  }
}

function sendFact1() {
  document.getElementById("funFacts").innerHTML = "In many African countries, far more boys attend school than girls. But in South Africa, primary school enrollment rates are roughly equal: from 2008-2012, the primary school enrollment rate for boys was 89.7 percent; for girls, it was 90.9 percent.";
}

function sendFact2() {
  document.getElementById("funFacts").innerHTML = "According to UNESCO, if in the countries of sub-Saharan Africa all women received at least a primary education, the mortality of children during childbirth would decrease by 70% (these are 50,000 small lives).";
}

function sendFact3() {
  document.getElementById("funFacts").innerHTML = "In Somalia, 95% of girls never went to school, 78% in Nigeria. The top ten countries where women’s education is in a deplorable state include Mali, Yemen, and Pakistan.";
}

function sendFact4() {
  document.getElementById("funFacts").innerHTML = "Girls’ schools are targeted three times more often than boys’ schools and attacks on girls’ schools increased 17-fold between 2000 and 2014.";
}

function sendFact5() {
  document.getElementById("funFacts").innerHTML = "The United Nations Educational and Scientific Cultural Organization (UNESCO) works to ensure that every person has access to a quality education. The continent of Africa and gender equality are two of UNESCO’s top global priorities, and UNESCO is active in promoting gender equality in South Africa’s education system.";
}

function sendFact6() {
  document.getElementById("funFacts").innerHTML = "Girls from poor families are more than three times more likely to marry before 18 as girls from wealthier families.";
}

function sendFact7() {
  document.getElementById("funFacts").innerHTML = "Globally, girls are being married off at a rate of 33,000 a day.";
}
function resetClickCount() {
  clickCount = 0;
}