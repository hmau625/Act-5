import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'character-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail.html',
  styleUrls: ['./character-detail.scss']
})
export class CharacterDetail {
  character: any = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    this.http.get(`https://rickandmortyapi.com/api/character/${id}`)
      .subscribe(data => {
        this.character = data;

        // Forzar actualización manual de la vista
        this.cdr.detectChanges();
      });
  }
}
