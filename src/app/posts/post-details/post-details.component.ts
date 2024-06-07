import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const postId = +params['id']; 
      this.post = this.getPostById(postId);
    });
  }

  getPostById(id: number) {
    const posts = [
      { 
        id: 1, 
        title: 'Cómo mejorar la productividad en el trabajo', 
        body: 'En este artículo, exploramos diversas estrategias y herramientas para aumentar la productividad en el entorno laboral.', 
        imageUrl: 'https://i.pinimg.com/564x/5d/c2/1c/5dc21cc2e222069a3fefefa9036d1bcd.jpg',
        author: 'Juan Pérez',
        date: '2024-06-10',
        likes: 25,
        comments: [
          { user: 'María', comment: '¡Excelente artículo, gracias por compartir!' },
          { user: 'Pedro', comment: 'Me encantó la sección sobre técnicas de organización.' }
        ]
      },
      { 
        id: 2, 
        title: 'Recetas deliciosas para preparar en casa', 
        body: 'Descubre nuevas recetas caseras que deleitarán tu paladar y el de tu familia. Desde platos principales hasta postres irresistibles.', 
        imageUrl: 'https://i.pinimg.com/564x/c3/fa/27/c3fa2775ee1a2427ad9dde662a6a9614.jpg',
        author: 'Ana Gómez',
        date: '2024-06-12',
        likes: 32,
        comments: [
          { user: 'Luis', comment: '¡Qué buena pinta tienen esas recetas!' },
          { user: 'Elena', comment: 'Definitivamente voy a probar la receta de brownies.' }
        ]
      },
      { 
        id: 3, 
        title: 'Consejos para mantener un estilo de vida saludable', 
        body: 'Aprende cómo incorporar hábitos saludables en tu día a día, desde hacer ejercicio regularmente hasta mantener una alimentación balanceada.', 
        imageUrl: 'https://i.pinimg.com/564x/a7/51/90/a751906f41a1f9461f7a21c374f490d0.jpg',
        author: 'Carla Martínez',
        date: '2024-06-15',
        likes: 18,
        comments: [
          { user: 'David', comment: 'Gracias por los consejos, intentaré implementarlos en mi rutina.' },
          { user: 'Laura', comment: '¿Alguien sabe dónde puedo encontrar más información sobre este tema?' }
        ]
      }
    ];

    return posts.find(post => post.id === id);
  }
}
