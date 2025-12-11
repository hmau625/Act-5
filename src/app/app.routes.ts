import { Routes } from '@angular/router';

import { RickMorty } from './rick-morty/rick-morty';
import { CharacterDetail } from './character-detail/character-detail';

import { DragonBall } from './dragon-ball/dragon-ball';
import { DragonBallDetail } from './dragon-ball-detail/dragon-ball-detail';

import { Simpson } from './simpson/simpson';
import { SimpsonDetail } from './simpson-detail/simpson-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'simpsons', pathMatch: 'full' },

  // Rick & Morty
  { path: 'rick-morty', component: RickMorty },
  { path: 'character/:id', component: CharacterDetail },

  // Simpsons
  { path: 'simpsons', component: Simpson },
  { path: 'simpson/:id', component: SimpsonDetail },

  // Dragon Ball
  { path: 'dragon-ball', component: DragonBall },
  { path: 'dragonball/:id', component: DragonBallDetail },

  // Default
  { path: '**', redirectTo: 'simpsons' }
];
