import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LeftMain from './components/LeftMain/LeftMain';

import Chat from './components/Content/Chat/Chat';
import ProFile from './components/Content/ProFile/ProFile';
import Research from './components/Content/Research/Research';
import Reward from './components/Content/Reward/Reward';
import WorkShop from './components/Content/WorkShop/WorkShop';


function App() {
  return (
	<BrowserRouter>
		<div className='wrapper'>
			<LeftMain />
			<div class="content content_style">
				<Routes>
					<Route path='/messang' element={ <Chat /> } />
					<Route path='/profile' element={ <ProFile /> } />
					
					<Route path='/' element={ <Research /> }/>

					<Route path='/reward' element={ <Reward /> }/>
					<Route path='/workshop' element={ <WorkShop /> } />
				</Routes>
			</div>
		</div>
	</BrowserRouter>  );
}

export default App;
