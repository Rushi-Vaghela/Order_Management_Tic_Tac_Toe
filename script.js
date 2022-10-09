const popup = document.querySelector(".hide1");
let i=0;
let j=0;

function popupfun(){
  document.querySelector('.hide1').classList.remove('hidden1');
  document.querySelector('.hide1').classList.add('showing');
  document.querySelector(".bellicon").style.color="blue";
}

function unpopupfun(){
  document.querySelector('.hide1').classList.remove('showing');
  document.querySelector('.hide1').classList.add('hidden1');
  document.querySelector(".bellicon").style.color="black";
}

function mainfn(){
  i++;
  if(i%2 === 0){
    unpopupfun();

  }
  else{
    popupfun();
  }
}

function popupalld(oid, mno, address, paymeth){
  window.confirm("Order id : " +  oid +  "Mobile No : " + mno + "Address : " + address + "Payment Method : " + paymeth);
}