export class Town {
  name: string;
  lat: number;
  lng: number;
  department: string;
  zipcode: string;
  region: string;

  constructor(name: string, lat = 0, lng = 0, department = '', zipcode = '', region = '') {
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.department = department;
    this.zipcode = zipcode;
    this.region = region;
  }
}
