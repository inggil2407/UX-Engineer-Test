import { ActivityComponent } from './activity.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ActivityComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [ActivityComponent]
  }));

  it('should create the activity', () => {
    const fixture = TestBed.createComponent(ActivityComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
