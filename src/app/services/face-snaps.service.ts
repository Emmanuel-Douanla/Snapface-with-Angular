import { Injectable } from "@angular/core";
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id : 1,
      title:'Archibald',
      description :'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps : 350,
      location: 'Paris'
    },
    {
      id: 2,
      title:'The Rock House Mountain',
      description:'Un bon en droit pour les randonnées',
      imageUrl:'https://i.pinimg.com/originals/cc/af/54/ccaf54d5808dce29dbe8b449dd3891c8.jpg',
      createdDate: new Date(),
      snaps: 6,
      location: 'La montagne' 
    },  
    {
      id: 3,
      title: 'Un bon repas',
      description: 'Mmmmh que c\'est bon !',
      imageUrl:'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0,
    }
  ];



  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapsById(faceSnapId: number): FaceSnap{
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
    const faceSnap = this.getFaceSnapsById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}