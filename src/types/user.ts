type UserName = {
	title: string;
	first: string;
	last: string;
};

type UserCoordinates = {
	latitude: string;
	longitude: string;
};

type UserTimezone = {
	offset: string;
	description: string;
};

type UserLocation = {
	street: {
		number: number;
		name: string;
	};
	city: string;
	state: string;
	postcode: string;
	coordinates: UserCoordinates;
	timezone: UserTimezone;
};

type UserLogin = {
	uuid: string;
	username: string;
	password: string;
	salt: string;
	md5: string;
	sha1: string;
	sha256: string;
};

type UserDob = {
	date: string;
	age: number;
};

type UserRegistered = {
	date: string;
	age: number;
};

type UserId = {
	name: string;
	value: string;
};

type UserPicture = {
	large: string;
	medium: string;
	thumbnail: string;
};

export type UserProps = {
	gender: string;
	name: UserName;
	location: UserLocation;
	email: string;
	login: UserLogin;
	dob: UserDob;
	registered: UserRegistered;
	phone: string;
	cell: string;
	id: UserId;
	picture: UserPicture;
	nat: string;
};
