import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetInformationComponent } from './planet-information.component';

describe('PlanetInformationComponent', () => {
  let component: PlanetInformationComponent;
  let fixture: ComponentFixture<PlanetInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
