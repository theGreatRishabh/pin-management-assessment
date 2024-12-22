import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  private apiUrl = 'https://api.first.org/data/v1/countries';

  constructor(private http: HttpClient) {}

  getRegions(): Observable<string[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => {
        const countries = Object.values(response.data);
        const regions = Array.from(
          new Set(countries.map((country: any) => country.region)),
        );
        return regions.filter((region) => region);
      }),
    );
  }

  getCountries(region: string): Observable<string[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => {
        const countries = Object.values(response.data);
        return countries
          .filter((country: any) => country.region === region)
          .map((country: any) => country.country);
      }),
    );
  }
}
