import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter(){
    // Inisialisasi peta
    this.map = L.map('mapId').setView([35.76943, -5.80081], 10);

    // Basemap OpenStreetMap
    const openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // Basemap Satellite (ESRI World Imagery)
    const esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{x}/{y}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    const grayscale = L.tileLayer('https://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    });

    const watercolor = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
      attribution: '&copy; Stamen contributors'
    });

    const topoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenTopoMap contributors'
    });

    // Menambahkan layer control untuk memilih basemap
    const baseMaps = {
      'OpenStreetMap': openStreetMap,
      'Satellite': esriWorldImagery,
      'Grayscale': grayscale,
      'Watercolor': watercolor,
      'TopoMap': topoMap
    };

    L.control.layers(baseMaps).addTo(this.map);

    // Set default basemap
    openStreetMap.addTo(this.map);

    // Menambahkan marker dengan popup informasi
    const marker = L.marker([35.76943, -5.80081]).addTo(this.map)
      .bindPopup('<b>Hello world!</b><br>I am a popup.')
      .openPopup();
  }
}