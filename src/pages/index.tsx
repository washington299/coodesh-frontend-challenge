import { queries } from "services/queries";
import { QUANTITY_OF_USERS } from "helpers";
import { UserProps } from "types/user";

import Main from "components/Main";
import TopBar from "components/TopBar";
import Header from "components/Header";

type HomeProps = {
	users: UserProps[];
};

const Home = ({ users }: HomeProps) => {
	return (
		<>
			<TopBar />
			<Header />
			<Main users={users} />
		</>
	);
};

export const getStaticProps = async () => {
	const { data } = await queries.getLimitUsers(QUANTITY_OF_USERS);

	return {
		props: {
			users: data.results,
		},
	};
};

export default Home;
