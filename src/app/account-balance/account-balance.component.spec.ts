import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBalanceComponent } from './account-balance.component';

describe('AccountBalanceComponent', () => {
  let component: AccountBalanceComponent;
  let fixture: ComponentFixture<AccountBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
