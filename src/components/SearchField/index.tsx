import { Dispatch, SetStateAction, useState } from "react";
import { RiUserSearchLine } from "react-icons/ri";

import { queries } from "services/queries";
import { QUANTITY_OF_USERS } from "helpers";
import { UserProps } from "types/user";

type SearchFieldProps = {
	users: UserProps[];
	setUserList: Dispatch<SetStateAction<UserProps[]>>;
};

const SearchField = ({ users, setUserList }: SearchFieldProps) => {
	const [text, setText] = useState("");

	const handleSearchFieldClick = async () => {
		if (!text) {
			const { data } = await queries.getLimitUsers(QUANTITY_OF_USERS);
			setUserList(data.results);
			return;
		}

		const usersFiltered = users.filter(
			user =>
				user.name.first.toLowerCase().includes(text.toLowerCase()) ||
				user.name.last.toLowerCase().includes(text.toLowerCase()) ||
				user.nat.toLowerCase().includes(text.toLowerCase()),
		);
		setUserList(usersFiltered);
	};

	return (
		<div className="w-full flex items-center mb-8 px-4 py-2 bg-white border-2 border-gray-300 rounded  text-gray-500">
			<input
				className="w-full outline-none"
				type="text"
				placeholder="Searching"
				value={text}
				onChange={e => setText(e.target.value)}
			/>
			<RiUserSearchLine style={{ cursor: "pointer" }} size={20} onClick={handleSearchFieldClick} />
		</div>
	);
};

export default SearchField;
