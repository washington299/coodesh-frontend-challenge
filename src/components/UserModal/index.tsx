import { Dispatch, SetStateAction } from "react";
import { RiCloseFill } from "react-icons/ri";
import Image from "next/image";

import { parseDate } from "utils/parsers";

import { UserProps } from "types/user";

type UserModalProps = {
	userInfo: UserProps;
	setUserInfo: Dispatch<SetStateAction<UserProps>>;
};

const UserModal = ({
	userInfo: { picture, name, email, gender, dob, phone, nat, location, id },
	setUserInfo,
}: UserModalProps) => {
	return (
		<div className="relative bg-white px-16 pt-24 pb-16">
			<RiCloseFill
				size={30}
				style={{ position: "absolute", top: 0, right: 0, cursor: "pointer" }}
				onClick={() => setUserInfo({} as UserProps)}
			/>

			<div className="absolute -top-20 left-1/2" style={{ transform: "translateX(-50%)" }}>
				<Image
					src={picture.large}
					alt={`${name.first} ${name.last}`}
					width={150}
					height={150}
					className="rounded-full"
				/>
			</div>

			<h1 className="text-center text-xl mb-4">{`${name.first} ${name.last}`}</h1>

			<p>{`E-mail: ${email}`}</p>
			<p>{`Gender: ${gender}`}</p>
			<p>{`Date of birth: ${parseDate(dob.date)}`}</p>
			<p>{`Phone: ${phone}`}</p>
			<p>{`Nationality: ${nat}`}</p>
			<p>{`Address: ${location.street.name}`}</p>
			{id.value && <p>{`Id: ${id.value}`}</p>}
		</div>
	);
};

export default UserModal;
