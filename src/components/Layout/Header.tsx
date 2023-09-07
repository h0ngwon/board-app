import React from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';

type Props = {};

const Header: React.FC = (props: Props) => {
	return (
		<>
			<header>
				<h1>
					<Link to='/'>게시판</Link>
				</h1>
				<nav>
					<ul className={styles.navbar}>
						<li>
							<NavLink
								to='/login'
								className={({
									isActive,
								}: {
									isActive: boolean;
								}): string | undefined =>
									isActive ? styles.active : undefined
								}
								end
							>
								로그인
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/board'
								className={({
									isActive,
								}: {
									isActive: boolean;
								}): string | undefined =>
									isActive ? styles.active : undefined
								}
							>
								글목록
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/write'
								className={({
									isActive,
								}: {
									isActive: boolean;
								}): string | undefined =>
									isActive ? styles.active : undefined
								}
							>
								글쓰기
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
