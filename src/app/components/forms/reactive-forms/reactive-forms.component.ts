import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    skills: new FormGroup({
      frontEnd: new FormControl(''),
      backEnd: new FormControl('')
    }),
    favoriteMovies: new FormArray([])
  })

  setName() {
  }

  addMovie(movieName: string) {
    const moviesArray = this.profileForm.get('favoriteMovies') as FormArray
    const newMovie = new FormControl(movieName)

    moviesArray.push(newMovie)

    return moviesArray
  }
}
