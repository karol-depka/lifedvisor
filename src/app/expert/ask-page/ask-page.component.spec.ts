import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskPageComponent } from './ask-page.component';

describe('AskPageComponent', () => {
  let component: AskPageComponent;
  let fixture: ComponentFixture<AskPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
