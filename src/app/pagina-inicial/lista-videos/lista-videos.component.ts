import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videos } from '../videos';

@Component({
  selector: 'app-lista-videos',
  templateUrl: './lista-videos.component.html',
  styleUrls: ['./lista-videos.component.scss'],
})
export class ListaVideosComponent implements OnInit {
  videos!: Videos;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.videos = this.activatedRoute.snapshot.data['videos'];
    });
  }
}
