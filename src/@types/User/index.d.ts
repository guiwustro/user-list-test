interface IUser {
	id: {
		name: string;
		value: string;
	};
	cell: string;
	phone: string;
	dob: {
		age: number;
		date: string;
	};
	email: string;
	gender: "male" | "female";
	location: {
		street: {
			name: string;
			number: number;
		};
		city: string;
		country: string;
		postcode: number;
	};
	name: {
		title: string;
		first: string;
		last: string;
	};
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
}
