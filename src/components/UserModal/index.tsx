import { UserProps } from "types/user";

type UserModalProps = {
	userInfo: UserProps;
};

const UserModal = ({ userInfo }: UserModalProps) => {
	return (
		<div className="bg-white p-8">
			<span>name: {userInfo?.name?.first}</span>
		</div>
	);
};

export default UserModal;
