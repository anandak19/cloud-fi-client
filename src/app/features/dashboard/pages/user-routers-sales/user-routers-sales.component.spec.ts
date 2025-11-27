import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoutersSalesComponent } from './user-routers-sales.component';

describe('UserRoutersSalesComponent', () => {
  let component: UserRoutersSalesComponent;
  let fixture: ComponentFixture<UserRoutersSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRoutersSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRoutersSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
