import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadesPage } from './novedades.page';

describe('NovedadesPage', () => {
  let component: NovedadesPage;
  let fixture: ComponentFixture<NovedadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovedadesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovedadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
