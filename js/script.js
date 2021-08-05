const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.mdb.modal', () => {
  myInput.focus()
})

var map, maps , mapt;
function initMap() {
  map1 = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 9.856036270916261, lng: 126.04973252719375 },
  });

  maps = new google.maps.Map(document.getElementById("map2"), {
    zoom: 5,
    center: {lang: 9.472558932859268, lat: 118.43423970452797},
  });
  

  mapt = new google.maps.Map(document.getElementById("map3"), {
    zoom: 13,
    center: {lang: 14.119950697447722, lat: 120.96618248249298},
  });
  }


