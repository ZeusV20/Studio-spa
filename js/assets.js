function initMap() {
    var ubicacionNegocio = {lat: 18.252452881530562, lng: -93.22473396845227}; // Reemplaza estas coordenadas con la ubicación real de tu negocio
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15, // Ajusta el zoom según tus necesidades
      center: ubicacionNegocio
    });
    var marker = new google.maps.Marker({
      position: ubicacionNegocio,
      map: map,
      title: 'Tu Negocio' // Añade el nombre de tu negocio aquí
    });
  }