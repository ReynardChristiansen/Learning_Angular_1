import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular-tutorial-1';
  filter: FormGroup;
  students: Array<any> = [
    {
      "name": "Paul Spencer",
      "city": "Fort Freidafield",
      "studentImage": "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      "state": "",
      "country": "",
      "physics": 11,
      "chemistry": 21,
      "math": 8,
      "computer": 5
    },
    {
      "name": "Anna Bell",
      "city": "Riverside",
      "studentImage": "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
      "state": "California",
      "country": "USA",
      "physics": 15,
      "chemistry": 25,
      "math": 18,
      "computer": 20
    },
    {
      "name": "John Doe",
      "city": "Springfield",
      "studentImage": "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
      "state": "Illinois",
      "country": "USA",
      "physics": 12,
      "chemistry": 22,
      "math": 16,
      "computer": 10
    },
    {
      "name": "Jane Smith",
      "city": "Metro City",
      "studentImage": "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
      "state": "New York",
      "country": "USA",
      "physics": 10,
      "chemistry": 20,
      "math": 15,
      "computer": 25
    },
    {
      "name": "Emily Davis",
      "city": "Centerville",
      "studentImage": "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
      "state": "Texas",
      "country": "USA",
      "physics": 14,
      "chemistry": 19,
      "math": 22,
      "computer": 12
    },
    {
      "name": "Michael Brown",
      "city": "Lakeside",
      "studentImage": "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
      "state": "Florida",
      "country": "USA",
      "physics": 13,
      "chemistry": 23,
      "math": 14,
      "computer": 18
    },
    {
      "name": "Laura Wilson",
      "city": "Hilltown",
      "studentImage": "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
      "state": "Ohio",
      "country": "USA",
      "physics": 16,
      "chemistry": 26,
      "math": 19,
      "computer": 14
    }
  ];

  filteredStudents: Array<any>;

  constructor(private fb: FormBuilder) {
    this.filter = this.fb.group({
      searchInput: ['']
    });

    this.filteredStudents = this.students;

    this.filter.get('searchInput')!.valueChanges.subscribe(value => {
      this.filterStudents(value);
    });
  }

  onSubmit(): void {
    const searchTerm = this.filter.get('searchInput')!.value.toLowerCase();
    this.filteredStudents = this.students.filter(student =>
      student.name.toLowerCase().includes(searchTerm) 
    );
  }

  filterStudents(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredStudents = this.students;
    } else {
      this.filteredStudents = this.students.filter(student =>
        student.name.toLowerCase().includes(searchTerm)
      );
    }
  }
}
