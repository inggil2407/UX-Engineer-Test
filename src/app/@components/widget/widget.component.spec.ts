import { WidgetComponent } from './widget.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('WidgetComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [WidgetComponent]
  }));

  it('should create the widget', () => {
    const fixture = TestBed.createComponent(WidgetComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
