import { BrowserRouter, Route, Routes as AppRoutes } from 'react-router-dom';

import Main from './pages/Main';
import Article from './pages/Article';

const Routes = () => (
    <BrowserRouter> 
        <AppRoutes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/articles/:id" element={<Article />}></Route>
        </AppRoutes>
    </BrowserRouter>
)

export default Routes;