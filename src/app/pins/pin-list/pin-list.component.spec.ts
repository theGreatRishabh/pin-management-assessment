import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { PinService } from 'src/app/services/pin.service';
import { MatDialog } from '@angular/material/dialog';
import { PinFormComponent } from 'src/app/shared/pin-form/pin-form.component';

import { PinListComponent } from './pin-list.component';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.scss'],
})

describe('PinListComponent', () => {
  let component: PinListComponent;
  let fixture: ComponentFixture<PinListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinListComponent],
    });
    fixture = TestBed.createComponent(PinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
