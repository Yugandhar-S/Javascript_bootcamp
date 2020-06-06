const data = {
  locations: [],
  get location() {
    return this.city;
  },

  set location(place) {
    this.city = place.trim();
    this.locations.push(this.city);
  },
};

//code that uses the data object

data.location = "   Goa";
data.location = " Mumbai  ";
console.log(data);
