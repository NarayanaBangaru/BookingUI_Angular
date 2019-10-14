import { Component, OnInit } from '@angular/core';
import Icustomer from './booking.interface';
import BookingService from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(public bookingService: BookingService) { }

  customers: Icustomer[];
 
  ngOnInit() {
    this.getCustomers();
  }
  
  getCustomers() {
    this.bookingService.getCustomerList().subscribe((data : any[])=>{
      this.customers= data;
    });
  }
  
  deleteCustomer(id: number, index: number) {
    this.bookingService.deleteCustomer(id).subscribe(() => {
      this.customers.splice(index, 1);
    });
  }

  reservationList() {
    const activeReservationCustomers: Icustomer[] = this.customers.filter((customer: Icustomer)=> {
      return customer.is_Active == true;
    })
    console.log(activeReservationCustomers);
  }
  
}
