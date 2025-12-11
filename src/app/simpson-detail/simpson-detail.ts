import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'simpson-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './simpson-detail.html',
  styleUrls: ['./simpson-detail.scss']
})
export class SimpsonDetail {
  character: any = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    this.http.get(`https://thesimpsonsapi.com/api/characters/${id}`)
      .subscribe(data => {
        this.character = data;
        this.cdr.detectChanges();
      });
  }
}
