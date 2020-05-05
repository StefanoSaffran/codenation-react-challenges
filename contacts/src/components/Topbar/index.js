import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Toggle from 'react-toggle';
import { ThemeContext } from 'styled-components';

import { useTheme } from '../../hooks/theme';
import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";

import { Container } from './styles';

function Topbar() {
		const { title } = useContext(ThemeContext);
		const { toggleTheme } = useTheme();

		return (
			<Container className="topbar" data-testid="topbar">
				<div className="container">
					<a href="/" className="topbar__logo">
						<LogoSvg alt="Logo Contacts" />
					</a>
					<Toggle
						checked={title === 'dark'}
						onChange={toggleTheme}
						className="toggle"
						icons={{
							checked: <FaMoon color="yellow" size={12} />,
							unchecked: <FaSun color="yellow" size={12} />,
						}}
					/>
				</div>
      </Container>
    );
}

export default Topbar;
