let num = Number.parseFloat(prompt("Введите температуру в Цельсиях: "));
let far = (Number.parseFloat((9/5)* num + 32)).toFixed(1);
alert(`Температура по Цельсию: ${num}. Температура по Фаренгейту: ${far}`);