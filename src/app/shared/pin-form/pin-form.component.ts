import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
  base64Image: string | null = null;

  @Output() pinAdded = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private pinService: PinService,
    private dialogRef: MatDialogRef<PinFormComponent>,
  ) {
    this.pinForm = this.fb.group({
      title: ['', Validators.required],
      collaborators: ['', Validators.required],
      file: [''],
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

      const reader = new FileReader();
      reader.onload = () => {
        this.base64Image = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit(): void {
    if (this.pinForm.valid) {
      const pinData = this.pinForm.value;
      pinData.file = this.base64Image;
      pinData.collaborators = Array.isArray(pinData.collaborators)
        ? pinData.collaborators
        : [pinData.collaborators];
      this.pinService.savePin(pinData);
      this.pinAdded.emit(pinData);
      console.log('Pin added:', pinData);
      this.dialogRef.close();
    }
  }
}
