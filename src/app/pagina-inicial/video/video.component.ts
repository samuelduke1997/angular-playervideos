import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  private urlOriginal = '';

  @Input() title = '';

  @Input() set id(id: string) {
    this.urlOriginal = `https://img.youtube.com/vi/${id}.jpg`;
  }

  get url(): string {
    return this.urlOriginal;
  }

  constructor() {}

  ngOnInit(): void {}
}
