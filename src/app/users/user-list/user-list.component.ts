import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [
    { id: 1, name: 'Kim Taehyung', profileImage: 'https://i.pinimg.com/564x/0a/ba/cc/0abacc3d66d2c2ae8be491e6a5f6931c.jpg', description: 'Ingeniero de Software' },
    { id: 2, name: 'Jane Foster', profileImage: 'https://i.pinimg.com/564x/f9/6b/a5/f96ba5d64c5dfb90e7fb7c97667aec51.jpg', description: 'Diseñadora Gráfica' },
    { id: 3, name: 'Loki Laufeyson', profileImage: 'https://i.pinimg.com/736x/6d/8b/d2/6d8bd2ca539a64b2178fe97f5b5db303.jpg', description: 'Gerente de Marketing' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showUserDetails(userId: number) {
    this.router.navigate(['/users', userId]);
  }
}
