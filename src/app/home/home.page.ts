import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;



  // Data museum dari JSON yang diberikan
  museums = [
    {
      "Museum": "Jogja National Museum",
      "Hari": "Monday - Sunday",
      "Jam": "10.00 am - 10.00 pm",
      "Harga": "Rp10.000 - Rp20.000",
      "Rating": "4.6",
      "latitude": -7.8001175,
      "longitude": 110.3534164
    },
    {
      "Museum": "Kekayon Museum",
      "Hari": "Monday - Saturday",
      "Jam": "08.30 am - 12.00 pm",
      "Harga": "Rp20.000",
      "Rating": "4.2",
      "latitude": -7.8145939,
      "longitude": 110.4130604
    },
    {
      "Museum": "Menara Benteng Vredeburg",
      "Hari": "Monday - Sunday",
      "Jam": "08.00 am - 06.00 pm",
      "Harga": "Rp15.000 - Rp30.000",
      "Rating": "5.0",
      "latitude": -7.8010478,
      "longitude": 110.3669562
    },
    {
      "Museum": "Museum of Dewantara Kirti Griya",
      "Hari": "Monday - Saturday",
      "Jam": "08.00 am - 01.00 pm",
      "Harga": "Rp3.000",
      "Rating": "4.7",
      "latitude": -7.8054438,
      "longitude": 110.3784719
    },
    {
      "Museum": "AMM Museum Building Yogyakarta",
      "Hari": "Monday - Saturday",
      "Jam": "08.00 am - 12.00 am",
      "Harga": "Free",
      "Rating": "5.0",
      "latitude": -7.8300857,
      "longitude": 110.4030718
    },
    {
      "Museum": "History Of Java Museum (HOJM)",
      "Hari": "Tuesday - Saturday",
      "Jam": "09.00 am - 06.00 pm",
      "Harga": "Rp35.000 - Rp50.000",
      "Rating": "4.5",
      "latitude": -7.8439029,
      "longitude": 110.362261
    },
    {
      "Museum": "Yogyakarta Batik Museum",
      "Hari": "Monday - Saturday",
      "Jam": "09.00 am - 03.00 pm",
      "Harga": "Rp20.000",
      "Rating": "5.0",
      "latitude": -7.7956668,
      "longitude": 110.3772607
    },
    {
      "Museum": "Yogyakarta Palace Batik Museum",
      "Hari": "Tuesday - Saturday",
      "Jam": "08.00 am - 02.00 pm",
      "Harga": "Rp15.000",
      "Rating": "4.6",
      "latitude": -7.8075139,
      "longitude": 110.3645895
    },
    {
      "Museum": "Under the Stairs Educational and Toy Museum",
      "Hari": "Tuesday - Sunday",
      "Jam": "08.00 am - 04.00 pm",
      "Harga": "Rp5.000",
      "Rating": "5.0",
      "latitude": -7.8001114,
      "longitude": 110.3679986
    },
    {
      "Museum": "Museum of Muhammadiyah",
      "Hari": "Monday - Saturday",
      "Jam": "09.00 am - 04.00 pm",
      "Harga": "Rp30.000",
      "Rating": "4.8",
      "latitude": -7.8339805,
      "longitude": 110.3837766
    },
    {
      "Museum": "Central Museum of the Air Force Dirgantara Mandala",
      "Hari": "Monday - Sunday",
      "Jam": "08.30 am - 04.00 pm",
      "Harga": "Free",
      "Rating": "4.6",
      "latitude": -7.7903029,
      "longitude": 110.415762
    },
    {
      "Museum": "Indonesian Women's Movement Museum Mandala Bhakti Wanitatama",
      "Hari": "Monday - Saturday",
      "Jam": "08.00 am - 12.00 pm",
      "Harga": "Rp2.000",
      "Rating": "4.8",
      "latitude": -7.7839154,
      "longitude": 110.3932776
    },
    {
      "Museum": "The Sidik Martowidjojo Museum",
      "Hari": "Monday - Sunday",
      "Jam": "10.00 am - 10.00 pm",
      "Harga": "Free",
      "Rating": "4.1",
      "latitude": -7.8084446,
      "longitude": 110.3629506
    },
    {
      "Museum": "Amri Museum and Gallery",
      "Hari": "Monday - Sunday",
      "Jam": "09.00 am - 04.00 pm",
      "Harga": "Free",
      "Rating": "4.4",
      "latitude": -7.7993231,
      "longitude": 110.3537702
    },
    {
      "Museum": "Tino Sidin Park",
      "Hari": "Monday - Saturday",
      "Jam": "09.00 am - 03.00 pm",
      "Harga": "Rp5.000 - Rp10.000",
      "Rating": "4.7",
      "latitude": -7.7995125,
      "longitude": 110.3449674
    },
    {
      "Museum": "Sonobudaya Museum Unit l",
      "Hari": "Tuesday - Sunday",
      "Jam": "08.00 am - 05.00 pm",
      "Harga": "Rp5.000 - Rp20.000",
      "Rating": "5.0",
      "latitude": -7.8024367,
      "longitude": 110.3643695
    },
    {
      "Museum": "UPY Museorium of History",
      "Hari": "Monday - Friday",
      "Jam": "08.00 am - 05.00 pm",
      "Harga": "Free",
      "Rating": "4.9",
      "latitude": -7.8059437,
      "longitude": 110.3410734
    },
    {
      "Museum": "Kraton Jogja",
      "Hari": "Tuesday - Sunday",
      "Jam": "08.00 am - 02.00 pm",
      "Harga": "Rp10.000 - Rp25.000",
      "Rating": "4.8",
      "latitude": -7.8069625,
      "longitude": 110.3639219
    },
    {
      "Museum": "Yogya Returns Monument",
      "Hari": "Tuesday - Sunday",
      "Jam": "08.00 am - 04.00 pm",
      "Harga": "Rp15.000",
      "Rating": "4.5",
      "latitude": -7.7495904,
      "longitude": 110.3696068
    },
    {
      "Museum": "Omah Jayeng Museum",
      "Hari": "Tuesday - Sunday",
      "Jam": "10.00 am - 10.00 pm",
      "Harga": "Free",
      "Rating": "4.9",
      "latitude": -7.7995418,
      "longitude": 110.3726691
    },
    {
      "Museum": "Omah UGM Kotagede Yogyakarta",
      "Hari": "Monday - Sunday",
      "Jam": "09.00 am - 05.00 pm",
      "Harga": "Free",
      "Rating": "4.7",
      "latitude": -7.8293112,
      "longitude": 110.3956256
    },
    {
      "Museum": "Wijilan Art",
      "Hari": "Tuesday - Sunday",
      "Jam": "08.00 am - 08.00 pm",
      "Harga": "Free",
      "Rating": "4.5",
      "latitude": -7.8066064,
      "longitude": 110.3666953
    }
  ];

  constructor() { }

  ngOnInit() { }

  ionViewDidEnter() {
    // Inisialisasi peta
    this.map = L.map('mapId').setView([-7.797068, 110.370529], 13);

    // Tambahkan layer basemap
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    osm.addTo(this.map);

    // Tambahkan marker untuk setiap mahasiswa
    this.museums.forEach(museum => {
      const customIcon = L.divIcon({
        html: '<i class="fa-solid fa-location-dot" style="font-size: 24px; color: red;"></i>',
        className: 'custom-div-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 24],
      });

      const marker = L.marker([museum.latitude, museum.longitude], { icon: customIcon })
        .addTo(this.map)
        .bindPopup(`
          <b>${museum.Museum}</b><br>
          <b>Open Hours:</b> ${museum.Hari} - ${museum.Jam}<br>
          <b>Price:</b> ${museum.Harga}<br>
          <b>Rating:</b> ${museum.Rating}<br>
        `);
    });
  }
}


//     // Menambahkan marker untuk setiap museum
//     this.museums.forEach(museum => {
//       const marker = L.marker([museum.latitude, museum.longitude]).addTo(this.map)
//         .bindPopup(`
//           <b>${museum.Museum}</b><br>
//           <b>Open Hours:</b> ${museum.Hari} - ${museum.Jam}<br>
//           <b>Price:</b> ${museum.Harga}<br>
//           <b>Rating:</b> ${museum.Rating}<br>
//         `);
//     });
//   }
// }
