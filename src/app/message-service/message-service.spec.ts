import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageService } from './message-service';

describe('MessageService', () => {
  let component: MessageService;
  let fixture: ComponentFixture<MessageService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
