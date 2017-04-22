/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BloglistsComponent } from './bloglists.component';

describe('BloglistsComponent', () => {
  let component: BloglistsComponent;
  let fixture: ComponentFixture<BloglistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloglistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloglistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
