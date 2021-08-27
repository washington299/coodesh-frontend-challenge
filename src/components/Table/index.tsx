const Table = () => {
	return (
		<table className="w-full table-fixed ">
			<thead>
				<th className="w-1/2 border-2 border-gray-500 py-2 bg-gray-400">Name</th>
				<th className="w-1/4 border-2 border-gray-500 py-2 bg-gray-400">Gender</th>
				<th className="w-1/4 border-2 border-gray-500 py-2 bg-gray-400">Birth</th>
				<th className="w-1/4 border-2 border-gray-500 py-2 bg-gray-400">Actions</th>
			</thead>

			<tbody>
				<tr className="bg-white">
					<td className="px-4 text-center border-2 border-gray-500 py-2">
						Washington Pimenta de Campos
					</td>
					<td className="px-4 text-center border-2 border-gray-500 py-2">Masculino</td>
					<td className="px-4 text-center border-2 border-gray-500 py-2">28 de maio de 2021</td>
					<td className="px-4 text-center border-2 border-gray-500 py-2">
						<button className="px-8 py-2 bg-gray-400 hover:bg-gray-600 text-white shadow rounded">
							View
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Table;
