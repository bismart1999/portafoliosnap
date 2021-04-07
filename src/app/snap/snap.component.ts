import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snap',
  templateUrl: './snap.component.html',
  styleUrls: ['./snap.component.scss']
})
export class SnapComponent implements OnInit {
  Listimg:any=[
    {url:'../assets/img/demon.jpg',identificador:'img1'},
    {url:'../assets/img/fate.jpg',identificador:'img2'},
    {url:'../assets/img/titanes.jpg',identificador:'img3'},
    {url:'../assets/img/tokio.jpg',identificador:'img1'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
