import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsService } from './star-wars.service';

describe('StarWarsService', () => {
  let component: StarWarsService;
  let fixture: ComponentFixture<StarWarsService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarWarsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarWarsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
