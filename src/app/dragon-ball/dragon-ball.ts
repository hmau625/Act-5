import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'dragon-ball',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dragon-ball.html',
  styleUrls: ['./dragon-ball.scss']
})
export class DragonBall {
  characters: any[] = [];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.http.get<any>('https://dragonball-api.com/api/characters')
      .subscribe(data => {
        this.characters = data.items;
        this.cdr.detectChanges();
      });
  }

  openCharacter(id: number) {
    this.router.navigate(['/dragonball', id]);
  }
}
