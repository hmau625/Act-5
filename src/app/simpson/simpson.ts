import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'simpson',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './simpson.html',
  styleUrls: ['./simpson.scss']
})
export class Simpson {
  characters: any[] = [];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.http.get<any>('https://thesimpsonsapi.com/api/characters?limit=100')
      .subscribe(res => {
        this.characters = res.results;
        this.cdr.detectChanges();
      });
  }

  openCharacter(id: number) {
    this.router.navigate(['/simpson', id]);
  }
}
