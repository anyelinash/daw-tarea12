import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  userId: number | undefined;
  users = [
    { id: 1, name: 'Kim Taehyung', profileImage: 'https://i.pinimg.com/564x/0a/ba/cc/0abacc3d66d2c2ae8be491e6a5f6931c.jpg', description: 'Ingeniero de Software' },
    { id: 2, name: 'Jane Foster', profileImage: 'https://i.pinimg.com/564x/f9/6b/a5/f96ba5d64c5dfb90e7fb7c97667aec51.jpg', description: 'Diseñadora Gráfica' },
    { id: 3, name: 'Loki Laufeyson', profileImage: 'https://i.pinimg.com/736x/6d/8b/d2/6d8bd2ca539a64b2178fe97f5b5db303.jpg', description: 'Gerente de Marketing' }
  ];
  selectedUser: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = parseInt(params.get('id') || '');
      this.loadUserDetails();
    });
  }

  loadUserDetails() {
    // Buscar el usuario correspondiente al userId en la lista de usuarios
    this.selectedUser = this.users.find(user => user.id === this.userId);
  }
}
