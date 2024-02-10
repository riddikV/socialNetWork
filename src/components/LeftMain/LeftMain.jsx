import cls from './LeftMain.module.css';

import { NavLink } from "react-router-dom";

const LeftMain = () => {
	return (
		<div className={`${cls.left__main} ${cls.left__main_style}`}>
			<div className={cls.left__main_logo}>
				<i className="fa-regular fa-eye"></i>
			</div>

			<div className={cls.main_navLinks}>
				<NavLink to="/research" className={({ isActive, isPending }) =>
					isPending ? cls.main_navLink : isActive ? `${cls.main_navLink} ${cls.active}` : cls.main_navLink
				}>
					<div className={`${cls.cr} ${cls.main_navLin_a}`}>
						<i className="fa-solid fa-fire-flame-curved"></i>
					</div>
					<span className={cls.main_navLin_span}>
						исследовать
					</span>
				</NavLink>
				<NavLink to="/messang" className={({ isActive, isPending }) =>
					isPending ? cls.main_navLink : isActive ? `${cls.main_navLink} ${cls.active}` : cls.main_navLink
				}>
					<div className={`${cls.cr} ${cls.main_navLin_a}`}>
						<i className="cr fa-regular fa-comments"></i>
					</div>
					<span className={cls.main_navLin_span}>
						Чат
					</span>
				</NavLink>
				<NavLink to="/workshop" className={({ isActive, isPending }) =>
					isPending ? cls.main_navLink : isActive ? `${cls.main_navLink} ${cls.active}` : cls.main_navLink
				}>
					<div className={cls.main_navLin_a}>
						<i className="cr fa-solid fa-toolbox"></i>
					</div>
					<span className={cls.main_navLin_span}>
						Мастерская
					</span>
				</NavLink>
				<NavLink to="/reward" className={({ isActive, isPending }) =>
					isPending ? cls.main_navLink : isActive ? `${cls.main_navLink} ${cls.active}` : cls.main_navLink
				}>
					<div className={cls.main_navLin_a}>
						<i className="cr fa-regular fa-gem"></i>
					</div>
					<span className={cls.main_navLin_span}>
						награда
					</span>
				</NavLink>
				<NavLink to="/profile" className={({ isActive, isPending }) =>
					isPending ? cls.main_navLink : isActive ? `${cls.main_navLink} ${cls.active}` : cls.main_navLink
				}>
					<div className={cls.main_navLin_a}>
						<i className="cr fa-regular fa-user"></i>
					</div>
					<span className={cls.main_navLin_span}>
						Профиль
					</span>
				</NavLink>
			</div>

			<div className={cls.left__main_bottom}>
				<a href="#c" className={`${cls.cr} ${cls.main_discord} ${cls.size_i} ${cls.color_w_i}`}>
					<i className="fa-brands fa-discord"></i>
				</a>
				<div className={cls.left_line}>
					<span className={cls.left_line_s}></span>
				</div>
				<div className={`${cls.cr} ${cls.left_line_b} ${cls.color}`}>
					<i className="fa-regular fa-circle-dot"></i>
				</div>
			</div>
		</div>
	)
}

export default LeftMain;