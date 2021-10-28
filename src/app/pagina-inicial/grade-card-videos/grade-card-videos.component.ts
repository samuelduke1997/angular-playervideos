import { Component, OnInit, Input } from '@angular/core';
import { Videos } from '../videos';

@Component({
  selector: 'app-grade-card-videos',
  templateUrl: './grade-card-videos.component.html',
  styleUrls: ['./grade-card-videos.component.scss'],
})
export class GradeCardVideosComponent implements OnInit {
  @Input() videos!: Videos;

  constructor() {}

  ngOnInit(): void {
    console.log(this.videos);
  }
}
