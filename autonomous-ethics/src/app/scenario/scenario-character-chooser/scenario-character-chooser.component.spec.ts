import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioCharacterChooserComponent } from './scenario-character-chooser.component';

describe('ScenarioCharacterChooserComponent', () => {
  let component: ScenarioCharacterChooserComponent;
  let fixture: ComponentFixture<ScenarioCharacterChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioCharacterChooserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioCharacterChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
