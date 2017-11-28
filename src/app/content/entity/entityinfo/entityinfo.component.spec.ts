import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityinfoComponent } from './entityinfo.component';

describe('EntityinfoComponent', () => {
  let component: EntityinfoComponent;
  let fixture: ComponentFixture<EntityinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
