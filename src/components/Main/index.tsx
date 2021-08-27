import { UserProps } from "types/user";

import SearchField from "components/SearchField";
import Table from "components/Table";

type MainProps = {
	users: UserProps[];
};

const Main = ({ users }: MainProps) => {
	return (
		<main className="bg-gray-100">
			<div className="container py-6">
				<p className="mb-8 font-semibold text-gray-500">
					Ea do dolore in nisi id mollit magna officia id. Non do eiusmod duis enim. Quis duis Lorem
					duis pariatur excepteur cupidatat est minim nostrud consequat esse tempor. Veniam velit
					officia anim ipsum ad nostrud. Culpa consequat amet quis non mollit cillum.
				</p>

				<SearchField />
				<Table users={users} />
			</div>
		</main>
	);
};

export default Main;
