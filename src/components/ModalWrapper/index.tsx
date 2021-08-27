type ModalWrapperProps = {
	children: JSX.Element;
};

const ModalWrapper = ({ children }: ModalWrapperProps) => {
	return (
		<div
			className="fixed inset-0 z-10 flex justify-center items-center"
			style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
		>
			{children}
		</div>
	);
};

export default ModalWrapper;
