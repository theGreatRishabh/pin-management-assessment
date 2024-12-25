import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private storageKey = 'customers';

  constructor() {}

  saveCustomer(customer: any) {
    const customers = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    customers.push(customer);
    localStorage.setItem(this.storageKey, JSON.stringify(customers));
    console.log('Customer saved:', customer);
  }

  getCustomers(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }
}
