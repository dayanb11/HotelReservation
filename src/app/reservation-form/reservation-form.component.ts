import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {


  constructor(reservationForm: ReservationFormComponent,
    private reservation: Reservation,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.reservationForm({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id')

    if (id) {
      let reservation = this.reservationService.getReservation(id)

      if (reservation)
        this.reservationForm.patchValue(reservation)
    }




  }
}

onSubmit() {
  if (this.reservationForm.valid) {

    let reservation: Reservation = this.reservationForm.value;

    let id = this.activatedRoute.snapshot.paramMap.get('id')

    if (id) {
      // Update
      console.log(this.reservationService.updateReservation(id, reservation))

    } else {
      // New
      this.reservationService.addReservation(reservation);
      console.log(
        this.reservationService.addReservation(reservation))

    }

    this.router.navigate(['/list'])
  }
}


