let arr = ["яблуко", "мандарин", "апельсин", "лимон", "банан", "кокос"];

document.write(`<h4>Початковий масив фруктів:</h4> ${arr}<br>`);

arrNew = arr.slice();
arrNew.sort();

document.write(`<br> <br> <br><h4>Відсортований масив фруктів:</h4>`);
document.write(`<ul>`);
listArr(arrNew);
document.write(`</ul>`);

function listArr(arrNew) {
  let tmp;
  for (let i = 0; i < arrNew.length; i++) {
    tmp += document.write(`<li>${arrNew[i]}</li><br>`);
  }
  return tmp;
}

function result(name, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (name === arr[i]) {
      return i;
    } else continue;
  }
  return -1;
}

let name = prompt("Ведіть назву фрукту українською мовою").toLocaleLowerCase();

document.write(`<br> <br> <br>`);

document.write(`<h4>Результат(позиція фрукту в початковому масиві):</h4>${result(name, arr)}`);
