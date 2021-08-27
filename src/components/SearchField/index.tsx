import { RiUserSearchLine } from "react-icons/ri";

const SearchField = () => {
	return (
		<div className="w-full flex items-center mb-8 px-4 py-2 bg-white border-2 border-gray-300 rounded  text-gray-500">
			<input className="w-full outline-none" type="text" placeholder="Searching" />
			<RiUserSearchLine style={{ cursor: "pointer" }} size={20} />
		</div>
	);
};

export default SearchField;
