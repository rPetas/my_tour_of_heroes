import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloackingLoadDialogComponent } from './bloacking-load-dialog.component';

describe('BloackingLoadDialogComponent', () => {
  let component: BloackingLoadDialogComponent;
  let fixture: ComponentFixture<BloackingLoadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloackingLoadDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloackingLoadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
