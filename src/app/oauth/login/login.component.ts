import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "@cemizm/smartmirror-shared";
import {Md5} from "ts-md5/dist/md5";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private form: FormGroup;
  private redirect_uri: string;
  private state: string;
  private client_id: string;

  constructor(private svc: AuthService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = new FormGroup({
      user: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.redirect_uri = params['redirect_uri'];
      this.client_id = params['client_id'];
      this.state = params['state'];
    });

  }

  login() {
    if (!this.form.valid)
      return;

    this.form.disable();

    const val = this.form.value;

    this.svc.login(val.user, <string>Md5.hashStr(val.password)).subscribe(res=> {

      window.location.href = this.redirect_uri + "?state=" + this.state + "&code=" + res.accessToken;

    }, err=> {
      this.form.enable();
    });
  }

}
