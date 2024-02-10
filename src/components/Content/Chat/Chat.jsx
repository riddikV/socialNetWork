import cls from './Chat.module.css';

const Chat = () => {
	return (
		<div className={cls.dialogs}>
			<div className={cls.dialogs__user}>
				
				<div className={cls.chat__header}>
					<div className={cls.chat__header_title}>
						<h2>Чат</h2>
					</div>

					<div className={cls.chat__header_i_w}>
						<div className={cls.chat__header_input}>
							<input type="text" placeholder='text'/>
						</div>
					</div>
				</div>

				<div className={cls.chat__chats}>fasdfasdf</div>
			</div>


			<div className={cls.dialogs__chat}>chat</div>
		</div>
	)
}

export default Chat;