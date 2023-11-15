import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashBoardPage } from './dash-board.page';

describe('DashBoardPage', () => {
  let component: DashBoardPage;
  let fixture: ComponentFixture<DashBoardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DashBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
