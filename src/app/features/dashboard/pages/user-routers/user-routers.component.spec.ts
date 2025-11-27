import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoutersComponent } from './user-routers.component';

describe('UserRoutersComponent', () => {
  let component: UserRoutersComponent;
  let fixture: ComponentFixture<UserRoutersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRoutersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRoutersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
