import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  mySecondSnap!: FaceSnap;
  myThirdSnap!: FaceSnap;
  ngOnInit() {

    this.mySnap = {
      title: 'Hasbulla',
      description:
        "Mon meilleur ami qui n'as pas grandis depuis tout petit ! (Avec tous le respect)",
      createdDate: new Date(),
      imageUrl:
        'https://manofmany.com/wp-content/uploads/2022/04/Hasbulla-feature-1200x900.png',
      snaps: 0,
      location : "une table",
    };

    this.mySecondSnap = {
      title: 'Hasbulla 2',
      description: 'Hasbulla pas plus grand',
      createdDate: new Date(),
      imageUrl:
        'https://eu-images.contentstack.com/v3/assets/bltcd74acc1d0a99f3a/blte3c7e154cd386e52/63567412fb0e6b33cee1e94a/Hasbulla.jpg',
      snaps: 0,
    };

    this.myThirdSnap = {
      title: 'Hasbulla 3',
      description: 'Hasbulla bagareur',
      createdDate: new Date(),
      imageUrl:
        'https://www.thesun.co.uk/wp-content/uploads/2022/09/NINTCHDBPICT000660717613.jpg',
      snaps: 0,
      location : "le ring"
    };
  }
}
