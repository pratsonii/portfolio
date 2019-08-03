export class UserIp {
  city: string;
  state: string;
  country: string;

  constructor(response: any) {
    this.city = response.city;
    this.state = response.region;
    this.country = response.country_name;
  }
}
