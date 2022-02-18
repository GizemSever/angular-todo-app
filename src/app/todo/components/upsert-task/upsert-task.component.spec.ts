import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertTaskComponent } from './upsert-task.component';

describe('UpsertTaskComponent', () => {
  let component: UpsertTaskComponent;
  let fixture: ComponentFixture<UpsertTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsertTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsertTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
