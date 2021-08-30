import { useState } from "react";

import { UserProps } from "types/user";

import { parseDate } from "utils/parsers";

import ModalWrapper from "components/ModalWrapper";
import UserModal from "components/UserModal";

type TableProps = {
	users: UserProps[];
};

const Table = ({ users }: TableProps) => {
	const [userInfo, setUserInfo] = useState<UserProps>({} as UserProps);

	return (
		<>
			{Object.keys(userInfo).length > 0 && (
				<ModalWrapper>
					<UserModal userInfo={userInfo} setUserInfo={setUserInfo} />
				</ModalWrapper>
			)}
			<table className="w-full table-auto">
				<thead>
					<tr className="bg-gray-400">
						<th className="w-1/2 border-2 border-gray-500 py-2">Name</th>
						<th className="w-1/4 border-2 border-gray-500 py-2">Gender</th>
						<th className="w-1/4 border-2 border-gray-500 py-2">Birth</th>
						<th className="w-1/4 border-2 border-gray-500 py-2">Actions</th>
					</tr>
				</thead>

				<tbody>
					{users.map(user => (
						<tr key={`${user.name.first} ${user.name.last}`} className="bg-white">
							<td className="px-4 text-center border-2 border-gray-500 py-2">{`${user.name.first} ${user.name.last}`}</td>
							<td className="px-4 text-center border-2 border-gray-500 py-2">{user.gender}</td>
							<td className="px-4 text-center border-2 border-gray-500 py-2">
								{parseDate(user.dob.date)}
							</td>
							<td className="px-4 text-center border-2 border-gray-500 py-2">
								<button
									className="px-8 py-2 bg-gray-400 hover:bg-gray-600 text-white shadow rounded"
									onClick={() => setUserInfo(user)}
								>
									View
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Table;
