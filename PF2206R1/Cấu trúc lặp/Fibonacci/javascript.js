function cal(){
  let num = parseInt(document.getElementById('num').value);
  let output = document.getElementById('output');
  let fbnci = [0, 1];
  let i = 1;
  while(i < num) {
    fbnci.push(fbnci[i] + fbnci[i-1]);
    i++;
  }
  output.innerText = fbnci;
}


function cancel(){
  document.getElementById('num').value = '';
  document.getElementById('output').innerText = '';
}
// f1 = 1;
// f2 = 1;
// f3 = f1+f2; //1+1 = 2;
// f4 = f3+f2; //2+1 = 3;
// f5 = f4+f3; //3+2 = 5;