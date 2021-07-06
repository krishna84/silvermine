import * as moment from 'moment';
export class ParkingService {
   date = moment().format('lll');
   getParkingService() {
      return [
         {
           category: "Women",
           color:'pink',
           lot: "P1",
           slots: [{
             slotId: 1,
             status: 'Booked',
             bookedBy: 'Krishna',
             category: 'Women',
             date: this.date
           }, {
             slotId: 2,
             status: 'Booked',
             bookedBy: 'Raj',
             category: 'Women',
             date: this.date
           }, {
             slotId: 3,
             status: 'Booked',
             bookedBy: 'John',
             category: 'Women',
             date: this.date
           }]
         }, {
            category: "Accessibility",
            color:'yellow',
            lot: "P2",
           slots: [{
             slotId: 1,
             status: 'Booked',
             bookedBy: 'Joe',
             category: 'Accessibility',
             date: this.date
           }, {
             slotId: 2,
             status: 'Booked',
             bookedBy: 'Krishna',
             category: 'Accessibility',
             date: this.date
           }, {
             slotId: 3,
             status: 'Booked',
             bookedBy: 'David',
             category: 'Accessibility',
             date: this.date
           }]
         },
         {
            category: "Elderly",
            color:'grey',
            lot: "P3",
           slots: [{
             slotId: 1,
             status: 'Booked',
             bookedBy: 'Joe',
             category: 'Elderly',
             date: this.date
           }, {
             slotId: 2,
             status: 'Booked',
             bookedBy: 'Krishna',
             category: 'Elderly',
             date: this.date
           }, {
             slotId: 3,
             status: 'Booked',
             bookedBy: 'David',
             category: 'Elderly',
             date: this.date
           }]
         },
         {
            category: "General",
            color:'white',
            lot: "P4",
           slots: [{
             slotId: 1,
             status: 'Booked',
             bookedBy: 'Joe',
             category: 'General',
             date: this.date
           }, {
             slotId: 2,
             status: 'Booked',
             bookedBy: 'Krishna',
             category: 'General',
             date: this.date
           }, {
             slotId: 3,
             status: 'Booked',
             bookedBy: 'David',
             category: 'General',
             date: this.date
           }]
         },
         {
            category: "Women_2",
            color:'pink',
           lot: "P5",
           slots: [{
             slotId: 1,
             status: 'Booked',
             bookedBy: 'Krishna',
             category: 'Women_2',
             date: this.date
           }, {
             slotId: 2,
             status: 'Booked',
             bookedBy: 'Raj',
             category: 'Women_2',
             date: this.date
           }, {
             slotId: 3,
             status: 'Booked',
             bookedBy: 'John',
             category: 'Women_2',
             date: this.date
           }]
         },
         {
            category: "Accessibility_2",
            color:'yellow',
            lot: "P6",
           slots: [{
             slotId: 1,
             status: 'Booked',
             bookedBy: 'Joe',
             category: 'Accessibility_2',
             date: this.date
           }, {
             slotId: 2,
             status: 'Booked',
             bookedBy: 'Krishna',
             category: 'Accessibility_2',
             date: this.date
           }, {
             slotId: 3,
             status: 'Booked',
             bookedBy: 'David',
             category: 'Accessibility_2',
             date: this.date
           }]
         },
         {
            category: "Elderly_2",
            color:'grey',
            lot: "P7",
           slots: [{
             slotId: 1,
             status: 'Booked',
             bookedBy: 'Joe',
             category: 'Elderly_2',
             date: this.date
           }, {
             slotId: 2,
             status: 'Booked',
             bookedBy: 'Krishna',
             category: 'Elderly_2',
             date: this.date
           }, {
             slotId: 3,
             status: 'Booked',
             bookedBy: 'David',
             category: 'Elderly_2',
             date: this.date
           }]
         },
         {
            category: "General_2",
            color:'white',
            lot: "P8",
           slots: [{
             slotId: 1,
             status: 'Booked',
             bookedBy: 'Joe',
             category: 'General_2',
             date: this.date
           }, {
             slotId: 2,
             status: 'Booked',
             bookedBy: 'Krishna',
             category: 'General_2',
             date: this.date
           }, {
             slotId: 3,
             status: 'Booked',
             bookedBy: 'David',
             category: 'General_2',
             date: this.date
           }]
         }
      ]
   }
}