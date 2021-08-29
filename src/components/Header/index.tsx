const Header = () => {
	return (
		<header className="w-full h-16 flex justify-between items-center px-8 bg-white">
			<div className="flex items-center">
				<div className="w-12 h-12 bg-gray-300" />
				<h1 className="text-xl font-semibold ml-4">Company</h1>
			</div>

			<div>
				<div className="w-12 h-12 bg-gray-300 rounded-full" />
			</div>
		</header>
	);
};

export default Header;
