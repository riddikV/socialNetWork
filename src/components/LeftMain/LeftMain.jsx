import cls from './LeftMain.module.css';

const LeftMain = () => {
	return (
		<div className={`${cls.left__main} ${cls.left__main_style}`}>
			<div className={cls.left__main_logo}>
				<i className="fa-regular fa-eye"></i>
			</div>

			<div className={cls.main_navLinks}>
				<a href="/" className={`${cls.main_navLink} ${cls.active}`}>
					<div className={`${cls.cr} ${cls.main_navLin_a}`}>
						<i className="fa-solid fa-fire-flame-curved"></i>
					</div>
					<span className={cls.main_navLin_span}>
						исследовать
					</span>
				</a>
				<a href="/messang" className={cls.main_navLink}>
					<div className={`${cls.cr} ${cls.main_navLin_a}`}>
						<i className="cr fa-regular fa-comments"></i>
					</div>
					<span className={cls.main_navLin_span}>
						Чат
					</span>
				</a>
				<a href="/workshop" className={cls.main_navLink}>
					<div className={cls.main_navLin_a}>
						<i className="cr fa-solid fa-toolbox"></i>
					</div>
					<span className={cls.main_navLin_span}>
						Мастерская
					</span>
				</a>
				<a href="/reward" className={cls.main_navLink}>
					<div className={cls.main_navLin_a}>
						<i className="cr fa-regular fa-gem"></i>
					</div>
					<span className={cls.main_navLin_span}>
						награда
					</span>
				</a>
				<a href="/profile" className={cls.main_navLink}>
					<div className={cls.main_navLin_a}>
						<i className="cr fa-regular fa-user"></i>
					</div>
					<span className={cls.main_navLin_span}>
						Профиль
					</span>
				</a>
			</div>

			<div className={cls.left__main_bottom}>
				<a href="#" className={`${cls.cr} ${cls.main_discord} ${cls.size_i} ${cls.color_w_i}`}>
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