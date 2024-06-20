import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { minLengthArray } from './validators/min-length-array.validator';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})


export class ReactiveFormsComponent {
  //forma antiga
  // constructor(private _formBuilder: FormBuilder) {}

  //forma nova
  _formBuilder = inject(FormBuilder)

  profileForm = this._formBuilder.group({
    name: ['', Validators.minLength(5)],
    skills: this._formBuilder.group({
      frontEnd: ['', Validators.minLength(5)],
      backEnd: ['', Validators.minLength(5)]
    }),
    favoriteMovies: this._formBuilder.array([], [Validators.required, minLengthArray(1)])
  })
  
  addMovie(inputMovie: HTMLInputElement) {
    console.log('chamou addMovie')
    const moviesArray = this.profileForm.get('favoriteMovies') as FormArray

    const newMovie = new FormControl(inputMovie.value)

    moviesArray.push(newMovie)
    inputMovie.value = ''

    return moviesArray
  }

  submitForm() {
    console.log(this.profileForm.valid)
    if(this.profileForm.valid) {
      console.log(this.profileForm.value)
    }
  }
}
