var names = ["Milos", "Dejan", "Martina", "Borko", "Stefan", "Andjela", "Luka", "Ema", "Viki", "Dragan"];
var ages = [23, 50, 26, 30, 31, 40, 22, 18, 25, 29];
var table = document.getElementById("table");
var tableBody = table.getElementsByTagName("tbody")[0];
var i = 0;

function sum() {
    var tot = 0;
    for (var r = 1, n = table.rows.length; r < n; r++) {
        var el = Number(table.rows[r].cells[2].innerHTML);
        tot = tot + el;
        }
    document.getElementById("sum").innerHTML = "Total: " + tot;
    return tot;
}
function aver() {
    var avg = sum() / tableBody.rows.length;
    document.getElementById("aver").innerHTML = "Average: " + parseInt(avg);
}
function mini() {
    var min = Number(table.rows[1].cells[2].innerHTML);
    for (var r = 1, n = table.rows.length; r < n; r++) {
        var el = Number(table.rows[r].cells[2].innerHTML);
        if (min > el) {
        min = el;
        }
    }
    document.getElementById("mini").innerHTML = "Minimum: " + min
}
function maxi() {
    var max = Number(table.rows[1].cells[2].innerHTML);
    for (var r = 1, n = table.rows.length; r < n; r++) {
        var el = Number(table.rows[r].cells[2].innerHTML);
        if (max < el) {
        max = el;
        }
    }
    document.getElementById("maxi").innerHTML = "Maximum: " + max
}
function addRow() {
    var newRow = tableBody.insertRow(-1);
    var newCell1 = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);
    var newCell3 = newRow.insertCell(2);
    var iPlus = 1 + i++;
    newCell1.innerHTML = iPlus;
    newCell2.innerHTML = prompt("Insert Name");
    newCell3.innerHTML = prompt("Insert Age");
    if(isNaN(newCell3.innerHTML)) {
        alert("Please insert NUMBER of age!");
        newCell3.innerHTML = prompt("Insert Age");
    }
    mini();
    maxi();
    sum();
    aver();
}
function main() {
    for (i=0; i < ages[i]; i++) {
    var newRow = tableBody.insertRow(-1);
    var newCell1 = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);
    var newCell3 = newRow.insertCell(2);
    newCell1.innerHTML = i + 1;
    newCell2.innerHTML = names[i];
    newCell3.innerHTML = ages[i];
    }
    mini();
    maxi();
    sum();
    aver();
}
main();