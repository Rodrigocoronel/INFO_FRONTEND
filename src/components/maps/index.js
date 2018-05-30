import React, { Component } from 'react'

import './index.css';

// image from external URL
// const myIcon ='https://i.imgur.com/wVAJS8Tr.png';
// const myIcon ='https://i.imgur.com/y7qZQS3r.png';
// const myIcon ='https://i.imgur.com/eq69HEzr.png';
// const myIcon ='https://i.imgur.com/XQSbgpwr.png';
// const myIcon ='https://i.imgur.com/JlQiyAur.png';
// const myIcon ='https://i.imgur.com/P4Xm6Dsr.png';

const myIcon = [
  'https://i.imgur.com/wVAJS8Tr.png',
  'https://i.imgur.com/y7qZQS3r.png',
  'https://i.imgur.com/eq69HEzr.png',
  'https://i.imgur.com/XQSbgpwr.png',
  'https://i.imgur.com/JlQiyAur.png',
  'https://i.imgur.com/P4Xm6Dsr.png',
];


//preparing the image so it can be used as a marker
//https://developers.google.com/maps/documentation/javascript/reference#Icon
//includes hacky fix "size" to allow for wobble
// const catIcon = {
//   url: myIcon,
//   size: new window.google.maps.Size(60, 60),
//   scaledSize: new window.google.maps.Size(40, 40),
//   origin: new window.google.maps.Point(-15,0)
// }
const catIcon = () => {
  let random = (Math.floor((Math.random() * 6) + 1)) - 1;
  return {
    url: myIcon[random],
    size: new window.google.maps.Size(60, 60),
    scaledSize: new window.google.maps.Size(40, 40),
    origin: new window.google.maps.Point(-15,0)
  }
}

const RandomPoints = [
  { 'Lat': 31.8771006, 'Lng': -116.5801549 },
  { 'Lat': 31.85863726, 'Lng': -116.6232358 },
  { 'Lat': 31.8646896, 'Lng': -116.60353148 },
  { 'Lat': 31.85799114, 'Lng': -116.60567518 },
  { 'Lat': 31.84714073, 'Lng': -116.6123423 },
  { 'Lat': 31.87328723, 'Lng': -116.6063286 },
  { 'Lat': 31.84813505, 'Lng': -116.57414358 },
  { 'Lat': 31.84453748, 'Lng': -116.59968874 },
  { 'Lat': 31.8811268, 'Lng': -116.5803521 },
  { 'Lat': 31.8557635, 'Lng': -116.570348 },
  { 'Lat': 31.84522381, 'Lng': -116.6078782 },
  { 'Lat': 31.85416243, 'Lng': -116.56833136 },
  { 'Lat': 31.87177705, 'Lng': -116.62275667 },
  { 'Lat': 31.87912952, 'Lng': -116.62121184 },
  { 'Lat': 31.88970703, 'Lng': -116.59857231 },
  { 'Lat': 31.87745258, 'Lng': -116.5891767 },
  { 'Lat': 31.8608444, 'Lng': -116.6147064 },
  { 'Lat': 31.86731587, 'Lng': -116.60995547 },
  { 'Lat': 31.87647458, 'Lng': -116.575979 },
  { 'Lat': 31.86766533, 'Lng': -116.5870682 },
  { 'Lat': 31.85373244, 'Lng': -116.57868014 },
  { 'Lat': 31.85568273, 'Lng': -116.60280372 },
  { 'Lat': 31.86824325, 'Lng': -116.6097082 },
  { 'Lat': 31.8539233, 'Lng': -116.58906658 },
  { 'Lat': 31.84528036, 'Lng': -116.60781011 },
  { 'Lat': 31.86630906, 'Lng': -116.62521815 },
  { 'Lat': 31.8620478, 'Lng': -116.56556411 },
  { 'Lat': 31.87317694, 'Lng': -116.5854258 },
  { 'Lat': 31.87119218, 'Lng': -116.6269221 },
  { 'Lat': 31.8476398, 'Lng': -116.60994514 },
  { 'Lat': 31.85937598, 'Lng': -116.57326486 },
  { 'Lat': 31.86867943, 'Lng': -116.5896013 },
  { 'Lat': 31.84259519, 'Lng': -116.58427882 },
  { 'Lat': 31.84473187, 'Lng': -116.5883918 },
  { 'Lat': 31.85918002, 'Lng': -116.61945915 },
  { 'Lat': 31.85975927, 'Lng': -116.58233502 },
  { 'Lat': 31.86231457, 'Lng': -116.62745919 },
  { 'Lat': 31.86261447, 'Lng': -116.62063423 },
  { 'Lat': 31.86841238, 'Lng': -116.5705074 },
  { 'Lat': 31.87681172, 'Lng': -116.61652518 },
  { 'Lat': 31.88180626, 'Lng': -116.576374 },
  { 'Lat': 31.88593252, 'Lng': -116.61206094 },
  { 'Lat': 31.88352779, 'Lng': -116.5798446 },
  { 'Lat': 31.85488359, 'Lng': -116.58400091 },
  { 'Lat': 31.87280006, 'Lng': -116.6201869 },
  { 'Lat': 31.85348091, 'Lng': -116.58512595 },
  { 'Lat': 31.86413143, 'Lng': -116.5671756 },
  { 'Lat': 31.87229282, 'Lng': -116.568925 },
  { 'Lat': 31.87520851, 'Lng': -116.5933725 },
  { 'Lat': 31.86393329, 'Lng': -116.58239345 },
  { 'Lat': 31.86959207, 'Lng': -116.5940841 },
  { 'Lat': 31.86978537, 'Lng': -116.5907759 },
  { 'Lat': 31.85947946, 'Lng': -116.5912004 },
  { 'Lat': 31.87393093, 'Lng': -116.61572824 },
  { 'Lat': 31.87723344, 'Lng': -116.5816928 },
  { 'Lat': 31.84969274, 'Lng': -116.59913117 },
  { 'Lat': 31.8821492, 'Lng': -116.5893435 },
  { 'Lat': 31.87263371, 'Lng': -116.60843894 },
  { 'Lat': 31.86503199, 'Lng': -116.59149234 },
  { 'Lat': 31.86816569, 'Lng': -116.60317413 },
  { 'Lat': 31.85108769, 'Lng': -116.5879036 },
  { 'Lat': 31.86361363, 'Lng': -116.60153666 },
  { 'Lat': 31.86704706, 'Lng': -116.589785 },
  { 'Lat': 31.87656219, 'Lng': -116.60652039 },
  { 'Lat': 31.87695366, 'Lng': -116.61135607 },
  { 'Lat': 31.86533333, 'Lng': -116.5811809 },
  { 'Lat': 31.87948065, 'Lng': -116.5907825 },
  { 'Lat': 31.87591667, 'Lng': -116.5834656 },
  { 'Lat': 31.87076091, 'Lng': -116.5901688 },
  { 'Lat': 31.87610553, 'Lng': -116.5900095 },
  { 'Lat': 31.87060369, 'Lng': -116.59876281 },
  { 'Lat': 31.85871869, 'Lng': -116.59059947 },
  { 'Lat': 31.86908643, 'Lng': -116.5966101 },
  { 'Lat': 31.8559168, 'Lng': -116.58219915 },
  { 'Lat': 31.86866071, 'Lng': -116.5894998 },
  { 'Lat': 31.87972954, 'Lng': -116.6092846 },
  { 'Lat': 31.88322135, 'Lng': -116.59922169 },
  { 'Lat': 31.85863341, 'Lng': -116.58424588 },
  { 'Lat': 31.88435956, 'Lng': -116.5926225 },
  { 'Lat': 31.87772874, 'Lng': -116.5925520 },
  { 'Lat': 31.86494162, 'Lng': -116.6166680 },
  { 'Lat': 31.87804703, 'Lng': -116.580088 },
  { 'Lat': 31.87367752, 'Lng': -116.5784041 },
  { 'Lat': 31.87545991, 'Lng': -116.60811982 },
  { 'Lat': 31.86919593, 'Lng': -116.5946092 },
  { 'Lat': 31.86418998, 'Lng': -116.5843897 },
  { 'Lat': 31.87711775, 'Lng': -116.5981798 },
  { 'Lat': 31.85973466, 'Lng': -116.58805894 },
  { 'Lat': 31.85864146, 'Lng': -116.58171122 },
  { 'Lat': 31.85751667, 'Lng': -116.59563912 },
  { 'Lat': 31.85674568, 'Lng': -116.59431183 },
  { 'Lat': 31.86459454, 'Lng': -116.6040435 },
  { 'Lat': 31.8774984, 'Lng': -116.60969342 },
  { 'Lat': 31.85200224, 'Lng': -116.6032209 },
  { 'Lat': 31.87584366, 'Lng': -116.6007323 },
  { 'Lat': 31.85088101, 'Lng': -116.59805517 },
  { 'Lat': 31.87167788, 'Lng': -116.593831 },
  { 'Lat': 31.87140313, 'Lng': -116.5811183 },
  { 'Lat': 31.8720935, 'Lng': -116.60149899 },
  { 'Lat': 31.88039888, 'Lng': -116.58457 },

];

let map, markers = [];

export default class Map extends Component {

  constructor(props) {

    super(props)

    this.megusta = 0;
    this.meencanta = 0;
    this.medivierte = 0;
    this.measombra = 0;
    this.metrizte = 0;
    this.meenoja = 0;

  }

  componentWillReceiveProps(props) {

    map = new window.google.maps.Map(document.getElementById('map'), {
      center: new window.google.maps.LatLng(props.lat, props.long,13),
      zoom: props.zoom,
      mapTypeId: 'roadmap',
      styles: [
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#3c8cc5"
          }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": [
          {
            "visibility": "on"
          }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#3c8cc5"
          }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
          {
            "color": "#f2f2f2"
          }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [
          {
            "color": "#dff1ff"
          }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "labels",
          "stylers": [
          {
            "visibility": "on"
          }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
          {
            "visibility": "off"
          }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [
          {
            "visibility": "off"
          }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#3c8cc5"
          }
          ]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
          {
            "hue": "#ff0000"
          },
          {
            "visibility": "on"
          }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
          {
            "color": "#3c8cc5"
          }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
          {
            "visibility": "simplified"
          }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
          {
            "color": "#bbdaf0"
          }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels",
          "stylers": [
          {
            "visibility": "off"
          }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels",
          "stylers": [
          {
            "visibility": "on"
          }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
          {
            "visibility": "off"
          }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
          {
            "visibility": "off"
          }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry.stroke",
          "stylers": [
          {
            "color": "#e50606"
          }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels",
          "stylers": [
          {
            "visibility": "on"
          }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels",
          "stylers": [
          {
            "visibility": "on"
          }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
          {
            "color": "#96d2ff"
          },
          {
            "visibility": "on"
          }
          ]
        }
      ]
    });
    
    /*
    //If you want to do this without wobble animation no need for hacky fix
    var catIcon = {
      url: myIcon,
      size: new google.maps.Size(70, 60),
      scaledSize: new google.maps.Size(70, 60),
      origin: new google.maps.Point(0,0)
    }*/

    // for (var i = RandomPoints.length - 1; i >= 0; i--) {

    //   let random = RandomPoints[i];

      // let latLng = new window.google.maps.LatLng(random.Lat, random.Lng);
      // let marker = new window.google.maps.Marker({
      //   position:latLng,
      //   map: this.map,
      //   // set the icon as catIcon declared above
      //   icon: catIcon,
      //   // must use optimized false for CSS
      //   optimized: false,
      //   title: ':p'
      // });

    // }

    // primero generamos al random cuantas acciones
    let randomActions = Math.floor((Math.random() * 20) + 10);

    for (let i = randomActions - 1; i >= 0; i--) {
      
      let RandomPoint = (Math.floor((Math.random() * 20) + 1)) - 1;
      let duration = (Math.floor((Math.random() * 7) + 3));

      markers.push({
        ...RandomPoints[RandomPoint],
        duration: duration,
        obj: null,
      });

    }

    // pintamos las acciones
    for (let i = markers.length - 1; i >= 0; i--) {

      let tmp = markers[i];

      tmp.duration -= 1;

      let latLng = new window.google.maps.LatLng(tmp.Lat, tmp.Lng);

      tmp.obj = new window.google.maps.Marker({
        position:latLng,
        map: map,
        // set the icon as catIcon declared above
        icon: catIcon(),
        // must use optimized false for CSS
        optimized: false,
        title: ':p'
      });

    }

    // animations
    let loop = function() {
      setTimeout(() => {

    
        for (var i = markers.length - 1; i >= 0; i--) {
          let tmp = markers[i];

          tmp.duration -= 1;

          if(tmp.duration < 0) {
            markers[i].obj.setMap(null);
            markers.splice(i, 1);

            // add new actions
            let RandomPoint = (Math.floor((Math.random() * 20) + 1)) - 1;
            let duration = (Math.floor((Math.random() * 7) + 3));
            let latLng = new window.google.maps.LatLng(RandomPoints[RandomPoint].Lat, RandomPoints[RandomPoint].Lng);

            markers.push({
              ...RandomPoints[RandomPoint],
              duration: duration,
              obj: new window.google.maps.Marker({
                position:latLng,
                map: map,
                // set the icon as catIcon declared above
                icon: catIcon(),
                // must use optimized false for CSS
                optimized: false,
                title: ':p'
              }),
            });
            //

          }

        }


        loop();
      }, 1000*4);
    };


    loop();

    
    // Overlay view allows you to organize your markers in the DOM
    // https://developers.google.com/maps/documentation/javascript/reference#OverlayView
    let myoverlay = new window.google.maps.OverlayView();

    myoverlay.draw = function () {
      // add an id to the layer that includes all the markers so you can use it in CSS
      this.getPanes().markerLayer.id='markerLayer';
    };
    myoverlay.setMap(map);

  }

  render() {
    return (
      <div style={{ height: '500px', width: '100%' }}>
        <div style={{ height: '100%', width: '100%' }} id="map"></div>
      </div>
      )
  }

}