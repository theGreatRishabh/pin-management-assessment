import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PinService {
  private storageKey = 'pins';

  getPins(): Observable<any[]> {
    const pins = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    return of(pins);
  }

  savePin(pin: any) {
    const pins = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    pins.push(pin);
    localStorage.setItem(this.storageKey, JSON.stringify(pins));
  }
}
