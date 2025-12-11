import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'rick-morty',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './rick-morty.html',
  styleUrls: ['./rick-morty.scss']
})
export class RickMorty {
  characters: any[] = [];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(data => {
        this.characters = data.results;
        this.cdr.detectChanges();
      });
  }

  openCharacter(id: number) {
    this.router.navigate(['/character', id]);
  }
}
