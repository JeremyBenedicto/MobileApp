import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialMediaPage } from './social-media.page';

describe('SocialMediaPage', () => {
  let component: SocialMediaPage;
  let fixture: ComponentFixture<SocialMediaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SocialMediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
