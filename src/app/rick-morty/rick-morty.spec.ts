import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMorty } from './rick-morty';

describe('RickMorty', () => {
  let component: RickMorty;
  let fixture: ComponentFixture<RickMorty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickMorty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickMorty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
