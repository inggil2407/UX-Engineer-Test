import { ChannelsComponent } from './channels.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ChannelsComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [ChannelsComponent]
  }));

  it('should create the channels', () => {
    const fixture = TestBed.createComponent(ChannelsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
