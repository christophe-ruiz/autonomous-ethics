import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {Router} from '@angular/router';
import {SessionService} from '../../services/session.service';

@Component({
  selector: 'app-sumup',
  templateUrl: './sumup.component.html',
  styleUrls: ['./sumup.component.scss']
})
export class SumupComponent implements OnInit {

  constructor(
    private session: SessionService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    document.body.style.backgroundColor = "var(--black)";
  }

  ngOnDestroy(): void {
    document.body.style.backgroundColor = "white";
  }

  deleteStats(): void {
    this.session.deleteStats();
    this.router.navigate(['/judge'])
  }

}
