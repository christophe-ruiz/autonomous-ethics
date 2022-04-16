import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConstantStringsService} from '../../services/constant-strings.service';

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

  public userProfileForm : FormGroup = this.fb.group({
    age: [Validators.required, Validators.min(0)],
    gender: [Validators.required, Validators.pattern(/^[a-z][A-Z]$/)],
    religion: [Validators.required, Validators.pattern(/^[a-z][A-Z]$/)],
    political_orientation: [Validators.required, Validators.pattern(/^[a-z][A-Z]$/)],
    education: [Validators.required, Validators.pattern(/^[a-z][A-Z]$/)],
    income: [Validators.required, Validators.pattern(/^[a-z][A-Z]$/)],
    country: [Validators.required, Validators.pattern(/^[a-z][A-Z]$/)],
  })

  public userProfileFormData = new FormData();

  constructor(
    private session: SessionService,
    private fb: FormBuilder,
    private constants: ConstantStringsService,
  ) {
    this.constants.genders$.subscribe(g => this.genders = g);
    this.constants.religions$.subscribe(r => this.religions = r);
    this.constants.politics$.subscribe(p => this.political_orientations = p);
    this.constants.politics$.subscribe(p => this.political_orientations = p);
  }

  ngOnInit(): void {
  }

}
