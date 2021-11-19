let map = L.map('map').setView([39.138070, -94.516234], 11.03);

// new code updated Dec. 1, 2020
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYmVsbGFicnVpeiIsImEiOiJja3czcHM0dmgyOGE4MnBwYWdveXJidmQ2In0.TzBhO8oTrDctNTDmnBiMXg'
}).addTo(map);

let marker1 = L.marker([39.18758587913208, -94.5311530554204]).addTo(map).bindPopup("<b>Penguin Park</b><br/>I spent a lot of my childhood here.").openPopup();

let marker2 = L.marker([39.145439, -94.573669]).addTo(map).bindPopup("<b>North Kansas City High School</b><br/>This was my high school.").openPopup();

let marker3 = L.marker([39.094903, -94.554610]).addTo(map).bindPopup("<b>18th and Vine</b><br/>This is a historic jazz district.").openPopup();

let marker4 = L.marker([39.043660, -94.582150]).addTo(map).bindPopup("<b>Nelson Atkins Museum of Art</b><br/>This was my childhood art museum.").openPopup();
