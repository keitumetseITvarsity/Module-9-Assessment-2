var timer = setInterval(displayWorldTime, 1000);

var cities = [
    {name: "Kabul", utcOffset: -4, flag: "Afghanistan.png"},
    {name: "New York City", utcOffset: -5, flag: "United-States-of-America.png"},
    {name: "Buenos Aires", utcOffset: -3, flag: "Argentina.png"},
    {name: "Lagos", utcOffset: 1, flag: "Nigeria.png"},
    {name: "Riyadh", utcOffset: 3, flag: "Saudi-Arabia.png"},
    {name: "Kyiv", utcOffset: 2, flag: "Ukraine.png"},
    {name: "Baku", utcOffset: 4, flag: "Azerbaijan.png"},
    {name: "Karachi", utcOffset: 5, flag: "Pakistan.png"},
    {name: "Krasnoyarsk", utcOffset: 7, flag: "Russia.png"},
    {name: "Seol", utcOffset: 2, flag: "Korea,-South.png"},
    {name: "Istanbul", utcOffset: 3, flag: "Turkey.png"},
    {name: "Tokyo", utcOffset: 9, flag: "Japan.png"},
    {name: "Rio De Janeiro", utcOffset: -3, flag: "Brazil.png"},
    {name: "Sydney", utcOffset: 11, flag: "Australia.png"},
    {name: "Vancouver", utcOffset: -8, flag: "Canada.png"},
    {name: "Beijing", utcOffset: 8, flag: "China.png"}
];

function compare(a, b) {
    var cityA = a.name;
    var cityB = b.name;

    var comparison = 0;
    if(cityA > cityB) {
        comparison = 1;

    } else if(cityA < cityB) {
        comparison = -1;
    }
    return comparison;
}

cities.sort(compare);


var utcTime = getUTCTime();

function getUTCTime() {
    var date = new Date();
    var utcOffset = date.getTimezoneOffset() * 60000;
    var utcTime = new Date(date.getTime() + utcOffset);
    return utcTime.getTime();

}



function getCurrentTime(utcOffset) {
    var mil = 1000 * 60 * 60;
    var time = new Date(getUTCTime() + utcOffset * mil);
    return time.toLocaleTimeString();
}


function displayWorldTime() {
    var date = new Date();

    document.getElementById("local").innerHTML = "Local Time: " + date.toLocaleTimeString();
    
    var output = `<table id="cities">`;
    output += `
        <tr>
            <th class="col1"></th>
            <th class="col2"></th>
            <th></th>

        </tr>`;

    for(i = 0; i < cities.length; i++) {
        output += `
        <tr>
            <td><img src="img/${cities[i].flag}"></td>
            <td>${cities[i].name}</td>
            <td>${getCurrentTime(cities[i].utcOffset)}</td>
        </tr>
        `;
    }

    output += `</table>`;
    document.getElementById("output").innerHTML = output;
}