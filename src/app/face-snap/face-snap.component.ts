import { Component,OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})


export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  snapTitle! : string;



  ngOnInit() {
    this.snapTitle = "Oh snaps"
  }


  toggleSnap(){
    if(this.faceSnap.snaps >= 1){
      this.faceSnap.snaps = 0;
      this.snapTitle = "Oh Schnaps !";
    } else {
      this.faceSnap.snaps++
      this.snapTitle = "Like";
    }
  }
}
