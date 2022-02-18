import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {LocalStorageService} from '../../../core/local-storage/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-layout',
  templateUrl: './todo-layout.component.html',
  styleUrls: ['./todo-layout.component.scss']
})
export class TodoLayoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout()
      .subscribe(data => {
        this.localStorageService.removeItem('user');
        this.router.navigateByUrl(`/login`);
      });
  }
}
