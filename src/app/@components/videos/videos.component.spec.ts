import { VideosComponent } from './videos.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('VideosComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [VideosComponent]
  }));

  it('should create the videos', () => {
    const fixture = TestBed.createComponent(VideosComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
