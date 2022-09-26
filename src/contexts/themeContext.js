import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	const toggle = (value = null) => {
		switch (value) {
			case 'dark':
				setTheme('dark');
				break;
			case 'light':
				setTheme('light');
				break;
			default:
				setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, toggle }}>
			{children}
		</ThemeContext.Provider>
	);
};
