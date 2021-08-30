import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { queries } from "services/queries";

import { UserProps } from "types/user";

type SelectFieldProps = {
	users: UserProps[];
	setUserList: Dispatch<SetStateAction<UserProps[]>>;
};

const SelectField = ({ users, setUserList }: SelectFieldProps) => {
	const handleSelectChange = async (e: ChangeEvent<HTMLSelectElement>) => {
		const quantityOfUsers = 50;

		if (e.target.value === "none") {
			const { data } = await queries.getLimitUsers(quantityOfUsers);
			setUserList(data.results);
			return;
		}

		const usersFilteredByGender = users.filter(user => user.gender === e.target.value);
		setUserList(usersFilteredByGender);
	};

	return (
		<section className="flex flex-col">
			<label htmlFor="gender" className="font-semibold text-gray-500">
				Filter by gender:
			</label>
			<select
				id="gender"
				className="w-64 h-8 mb-8 border-2 border-gray-300 rounded text-gray-500 outline-none"
				onChange={handleSelectChange}
			>
				<option value="none">None</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
		</section>
	);
};

export default SelectField;
