export interface User {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  dob: {
    date: string;
    age: number;
  };
  cell: string;
  email: string;
}
