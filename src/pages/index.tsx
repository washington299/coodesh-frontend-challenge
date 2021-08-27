import { queries } from "services/queries";

import { UserProps } from "types/user";

import Main from "components/Main";

type HomeProps = {
	users: UserProps[];
};

const Home = ({ users }: HomeProps) => {
	return <Main users={users} />;
};

export const getStaticProps = async () => {
	const quantityOfUsers = 50;
	const { data } = await queries.getLimitUsers(quantityOfUsers);

	return {
		props: {
			users: data.results,
		},
	};
};

export default Home;
