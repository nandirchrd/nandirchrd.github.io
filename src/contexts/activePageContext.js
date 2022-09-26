import { createContext, useState } from 'react';

export const ActivePageContext = createContext(null);

export const ActivePageProvider = ({ children }) => {
	const [page, setPage] = useState(null);

	const handlePage = (value) => {
		switch (value) {
			case 'home':
				setPage(value);
				break;
			case 'photos':
				setPage(value);
				break;
			case 'blogs':
				setPage(value);
				break;
			default:
				break;
		}
	};

	return (
		<ActivePageContext.Provider value={{ page, setPage: handlePage }}>
			{children}
		</ActivePageContext.Provider>
	);
};
