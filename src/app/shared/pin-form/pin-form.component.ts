import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
  styleUrls: ['./pin-form.component.scss'],
})
export class PinFormComponent implements OnInit {
  pinForm: FormGroup;
  customers: string[] = [
    'Customer 1',
    'Customer 2',
    'Customer 3',
    'Customer 4',
    'Customer 5',
  ];
  selectedFile: File | null = null;
  fileTouched = false;

  @Output() pinAdded = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.pinForm = this.fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      collaborators: ['', Validators.required],
      privacy: ['Public', Validators.required],
    });
  }

  ngOnInit(): void {}

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.pinForm.patchValue({ image: this.selectedFile.name });
    }
    this.fileTouched = true;
  }

  onSubmit(): void {
    if (this.pinForm.valid) {
      this.pinAdded.emit(this.pinForm.value);
      console.log(this.pinForm.value);
    }
  }
}
