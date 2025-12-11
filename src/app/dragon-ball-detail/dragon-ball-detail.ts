import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dragonball-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dragon-ball-detail.html',
  styleUrls: ['./dragon-ball-detail.scss']
})
export class DragonBallDetail {
  character: any = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    this.http.get(`https://dragonball-api.com/api/characters/${id}`)
      .subscribe(data => {
        this.character = data;
        this.cdr.detectChanges();
      });
  }
}
