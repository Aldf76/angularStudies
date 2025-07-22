import { ComponentFixture, TestBed } from '@angular/core/testing';

import { starWarsService } from './star-wars.service';

describe('StarWarsService', () => {
  let component: starWarsService;
  let fixture: ComponentFixture<starWarsService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [starWarsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(starWarsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
