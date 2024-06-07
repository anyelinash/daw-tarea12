import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { 
      id: 1, 
      title: 'Cómo mejorar la productividad en el trabajo', 
      body: 'En este artículo, exploramos diversas estrategias y herramientas para aumentar la productividad en el entorno laboral.' 
    },
    { 
      id: 2, 
      title: 'Recetas deliciosas para preparar en casa', 
      body: 'Descubre nuevas recetas caseras que deleitarán tu paladar y el de tu familia. Desde platos principales hasta postres irresistibles.' 
    },
    { 
      id: 3, 
      title: 'Consejos para mantener un estilo de vida saludable', 
      body: 'Aprende cómo incorporar hábitos saludables en tu día a día, desde hacer ejercicio regularmente hasta mantener una alimentación balanceada.' 
    }
  ];

  constructor() {}
}
