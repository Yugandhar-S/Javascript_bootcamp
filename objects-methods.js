let restaurant = {
  name: "BBQ Nations",
  guestCapacity: 75,
  guestCount: 0,

  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },

  //seatparty-takes partysize + guestcount
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },

  //removeParty- guest count-partysizeleaving the restuarant
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
