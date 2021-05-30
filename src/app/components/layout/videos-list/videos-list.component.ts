import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {

  constructor(
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.videoService.getVideos().subscribe(res => console.log(res));
  }

}
