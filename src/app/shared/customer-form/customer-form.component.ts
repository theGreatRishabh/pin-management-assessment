import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegionService } from 'src/app/services/region.service';
import { CustomerService } from 'src/app/services/customer.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  customerForm: FormGroup;
  regions: string[] = [];
  countries: string[] = [];

  constructor(
    private fb: FormBuilder,
    private regionService: RegionService,
    private customerService: CustomerService,
    private dialogRef: MatDialogRef<CustomerFormComponent>,
  ) {
    this.customerForm = this.fb.group({
      title: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      region: ['', Validators.required],
      country: [''],
    });
  }

  ngOnInit() {
    this.regionService.getRegions().subscribe((data) => {
      this.regions = data;
    });
  }

  onRegionChange() {
    const selectedRegion = this.customerForm.get('region')?.value;
    this.regionService.getCountries(selectedRegion).subscribe((data) => {
      this.countries = data;
    });
  }

  onSubmit() {
    if (this.customerForm.valid) {
      const customerData = this.customerForm.value;
      this.customerService.saveCustomer(customerData);
      console.log('Customer saved:', customerData);
      this.dialogRef.close();
    }
  }
}
