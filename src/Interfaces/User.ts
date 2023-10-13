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
  login: Login;
}

interface Login {
  uuid: string;
  username?: string;
  password?: string;
  salt?: string;
  md5? :string;
  sha1? :string;
  sha256?: string;
}
