import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegionService } from 'src/app/services/region.service';

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
      console.log(this.customerForm.value);
      // Handle form submission
    }
  }
}
