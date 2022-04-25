import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConstantStringsService} from '../../services/constant-strings.service';
import {UserProfileService} from '../../services/user-profile.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public genders : String[] = [];
  public religions : String[] = [];
  public political_orientations : String[] = [];
  public education : String[] = [];
  public income : String[] = [];
  public countries : String[] = [];

  public userProfileForm : FormGroup = this.fb.group({
    age: [Validators.required, Validators.min(0)],
    gender: [Validators.required, Validators.pattern(/^[a-zA-Z$,0-9 \-]+$/)],
    religion: [Validators.required, Validators.pattern(/^[a-zA-Záʼí$,0-9 \-]+$/)],
    politics: [Validators.required, Validators.pattern(/^[a-zA-Z$,0-9 \-]+$/)],
    education: [Validators.required, Validators.pattern(/^[a-zA-Z$,0-9 \-]+$/)],
    income: [Validators.required, Validators.pattern(/^[a-zA-Z$,0-9 \-]+$/)],
    country: [Validators.required, Validators.pattern(/^[a-zA-Z$,0-9 \-]+$/)],
  })

  public userProfileFormData = new FormData();

  public requestedValidation: boolean = false;

  constructor(
    private session: SessionService,
    private fb: FormBuilder,
    private constants: ConstantStringsService,
    private userProfileService: UserProfileService,
    private router: Router,
  ) {
    this.constants.genders$.subscribe(g => this.genders = g);
    this.constants.religions$.subscribe(r => this.religions = r);
    this.constants.politics$.subscribe(p => this.political_orientations = p);
    this.constants.education$.subscribe(e => this.education = e);
    this.constants.income$.subscribe(i => this.income = i);
    this.constants.countries$.subscribe(c => this.countries = c);
  }

  ngOnInit(): void {
    document.body.style.backgroundColor = "var(--black)";
  }

  ngOnDestroy(): void {
    document.body.style.backgroundColor = "white";
  }

  submitForm() : void {
    this.requestedValidation = true;

    if (this.userProfileForm.invalid) return;
    console.log('valid')
    this.userProfileFormData.set('age', this.userProfileForm.get('age')!.value);
    this.userProfileFormData.set('gender', this.userProfileForm.get('gender')!.value);
    this.userProfileFormData.set('religious_level', this.userProfileForm.get('religion')!.value);
    this.userProfileFormData.set('education_level', this.userProfileForm.get('education')!.value);
    this.userProfileFormData.set('politics', this.userProfileForm.get('politics')!.value);
    this.userProfileFormData.set('income_bracket', this.userProfileForm.get('income')!.value);
    this.userProfileFormData.set('country', this.userProfileForm.get('country')!.value);

    if (this.userProfileService.storeUser(this.userProfileFormData)) this.letsJudge();
  }

  letsJudge() {
    this.router.navigate(['/judge']);
  }
}
