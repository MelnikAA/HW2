import motorists from '/motorists.json' assert {type:'json'};
console.log(motorists);

for (var i = 0; i < motorists.length; i++) {
    var tr;
    tr = $('<tr/>');
    tr.append("<td>" + motorists[i].person.firstname + " " + motorists[i].person.lastname + "</td>");
    tr.append("<td>" + motorists[i].car.manufacturer + "</td>");
    tr.append("<td>" + motorists[i].car.model + "</td>");
    tr.append("<td>" + motorists[i].car.year + "</td>");
    $('#table').append(tr);
}
