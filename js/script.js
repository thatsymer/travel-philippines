const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.mdb.modal', () => {
  myInput.focus()
})

// GOOGLE MAP API

let map;

function initMap() {
  const siargao = {lat: 9.856036270916261, lng: 126.04973252719375};
  const palawan = {lat: 9.469612035290139, lang: 118.40848115334043};
  const tagaytay = {lat: 14.11795298880045, lang: 120.96309257761561}
  

  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 12.372812838582878, lang: 122.7905248677026},
    zoom: 1,
  });

  // const marker = new google.maps.Marker({
  //   position: siargao,
  //   map: map,
  // });
}