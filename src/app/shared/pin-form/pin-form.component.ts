import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { PinService } from 'src/app/services/pin.service';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
  styleUrls: ['./pin-form.component.scss'],
})
export class PinFormComponent implements OnInit {
  pinForm: FormGroup;
  customers: any[] = [];
  selectedFile: File | null = null;
  fileTouched = false;

  @Output() pinAdded = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private pinService: PinService,
  ) {
    this.pinForm = this.fb.group({
      title: ['', Validators.required],
      collaborators: ['', Validators.required],
      file: ['', Validators.required],
      privacy: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customers = this.customerService.getCustomers();
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.fileTouched = true;
    }
  }

  onSubmit(): void {
    if (this.pinForm.valid) {
      const pinData = this.pinForm.value;
      pinData.file = this.selectedFile;
      const pins = JSON.parse(localStorage.getItem('pins') || '[]');
      pins.push(pinData);
      localStorage.setItem('pins', JSON.stringify(pins));
      this.pinAdded.emit(pinData);
      console.log('Pin added:', pinData);
    }
  }
}
