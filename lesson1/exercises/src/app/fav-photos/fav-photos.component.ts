import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Iconic SciFi Characters';
  image1 = 'https://i1.wp.com/www.blogtorwho.com/wp-content/uploads/2016/09/DW-UnicornWasp-Doctor1.jpg?fit=976%2C549&ssl=1';
  image2 = 'http://media.comicbook.com/2016/12/carrie-fisher-princess-leia-hoth-empire-221094.jpg';
  image3 = 'https://static01.nyt.com/images/2015/02/28/arts/28nimoy_video_hp/28nimoy_video_hp-videoSixteenByNine1050.jpg';

  constructor() { }

  ngOnInit() {
  }

}