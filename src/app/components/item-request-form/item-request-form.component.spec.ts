import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRequestFormComponent } from './item-request-form.component';

describe('ItemRequestFormComponent', () => {
  let component: ItemRequestFormComponent;
  let fixture: ComponentFixture<ItemRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
