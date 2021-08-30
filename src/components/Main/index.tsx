import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";

import { queries } from "services/queries";
import { UserProps } from "types/user";

import SearchField from "components/SearchField";
import SelectField from "components/SelectField";
import Table from "components/Table";

type MainProps = {
	users: UserProps[];
};

const Main = ({ users }: MainProps) => {
	const [userList, setUserList] = useState(users);

	const handleClick = async () => {
		const quantityOfUsers = 50;

		const { data } = await queries.getLimitUsers(quantityOfUsers);
		setUserList(userList.concat(data.results));
	};

	return (
		<main className="bg-gray-100">
			<div className="container py-6">
				<p className="mb-8 font-semibold text-gray-500">
					Ea do dolore in nisi id mollit magna officia id. Non do eiusmod duis enim. Quis duis Lorem
					duis pariatur excepteur cupidatat est minim nostrud consequat esse tempor. Veniam velit
					officia anim ipsum ad nostrud. Culpa consequat amet quis non mollit cillum.
				</p>

				<SearchField users={userList} setUserList={setUserList} />
				<SelectField users={userList} setUserList={setUserList} />
				<Table users={userList} />

				<div className="flex justify-center items-center mt-8 cursor-pointer" onClick={handleClick}>
					<AiOutlineReload size={30} />
					<p className="ml-4 text-xl">Loading more...</p>
				</div>
			</div>
		</main>
	);
};

export default Main;
