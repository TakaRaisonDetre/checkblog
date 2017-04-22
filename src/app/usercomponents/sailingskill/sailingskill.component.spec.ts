/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SailingskillComponent } from './sailingskill.component';

describe('SailingskillComponent', () => {
  let component: SailingskillComponent;
  let fixture: ComponentFixture<SailingskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SailingskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SailingskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
