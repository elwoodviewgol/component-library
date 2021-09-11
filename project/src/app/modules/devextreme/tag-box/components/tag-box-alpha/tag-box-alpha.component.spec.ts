import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagBoxAlphaComponent } from './tag-box-alpha.component';

describe('TagBoxAlphaComponent', () => {
  let component: TagBoxAlphaComponent;
  let fixture: ComponentFixture<TagBoxAlphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagBoxAlphaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagBoxAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
