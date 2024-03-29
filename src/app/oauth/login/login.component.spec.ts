import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {SharedModule} from "../../shared/shared.module";
import {AuthService, StorageService, TokenService} from "@cemizm/smartmirror-shared";
import {SmartMirrorService} from "@cemizm/smartmirror-shared/services/smartmirror.service";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [SharedModule],
      providers: [AuthService, TokenService, StorageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
