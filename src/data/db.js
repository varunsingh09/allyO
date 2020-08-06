const bookings = [
  {
    "bookingReference": "412375",
    "name": "Michael Smith",
    "website":"www.bookings.com",
    "guest": {
      "name": "Michael Smith",
      "address": "14 Thames St, South Heights, Sydney NSW, Australia",
      "phone": "+61432565787",
      "email": "michael.smith@somewhere.com",
      "passportNumber": "PA61114343"
    },
    "room": {
      "roomNumber": "105",
      "roomType": "Standard",
      "bedCount": 1,
      "price": 700
    },
    "checkInDate": "2019-04-20",
    "checkOutDate": "2019-04-22",
    "paymentMethod": "Credit Card",
    "state": "checked_out"
  },
  {
    "bookingReference": "412376",
    "name": "Tim Wray",
    "website":"https://www.redbus.in/",
    "guest": {
      "name": "Tim Wray",
      "address": "Vesterbrogade 11 København V, Denmark",
      "phone": "+4512345678",
      "email": "tim.Wray@somewhere.com",
      "passportNumber": "PA45567890"
    },
    "room": {
      "roomNumber": "101",
      "roomType": "Superior",
      "bedCount": 2,
      "price": 1200
    },
    "checkInDate": "2019-05-06",
    "checkOutDate": "2019-05-07",
    "paymentMethod": "Credit Card",
    "state": "checked_in"
  },
  {
    "bookingReference": "412377",
    "name": "Anders Hvenegaard",
    "website":"https://www.makemytrip.com/",
    "guest": {
      "name": "Anders Hvenegaard",
      "address": "Englandsvej 162 København V, Denmark",
      "phone": "+4544567787",
      "email": "anders.hvenegaard@somewhere.com",
      "passportNumber": "DK78773819"
    },
    "room": {
      "roomNumber": "161",
      "roomType": "Standard",
      "bedCount": 1,
      "price": 850
    },
    "checkInDate": "2019-05-06",
    "checkOutDate": "2019-05-08",
    "paymentMethod": "Credit Card",
    "state": "checked_in"
  },
  {
    "bookingReference": "412378",
    "name": "Bastian van Meers",
    "website":"https://www.agoda.com/en-gb/",
    "guest": {
      "name": "Bastian van Meers",
      "address": "Spreeuwenpark 72 Amsterdam Noord, Nederlands",
      "phone": "+47675839849",
      "email": "bastiaan.van.meers@somewhere.com",
      "passportNumber": "NL67543290"
    },
    "room": {
      "roomNumber": "211",
      "roomType": "Superior",
      "bedCount": 2,
      "price": 1750
    },
    "checkInDate": "2019-05-06",
    "checkOutDate": "2019-05-09",
    "paymentMethod": "Credit Card",
    "state": "booked"
  }
]

export const getHotels = () => {
  return bookings;

}