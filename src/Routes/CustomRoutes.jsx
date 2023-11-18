import { Routes, Route} from 'react-router-dom'
import AllUsers from '../AllUsers/AllUsers';
import OneDetail from '../OneDetail/OneDetail';
import CreateUserForm from '../CreateUser/CreateUserForm';
import UpdateUserForm from '../updateuser/UpdateUserForm';
function CustomRoutes()
{
    return (
    <>
    <Routes>
          <Route path='/'  element={<AllUsers/>}/>
          <Route path={`/:id`}  element={<OneDetail/>}/>
          <Route path={`/createUser`}  element={<CreateUserForm/>}/>
          <Route path={`/updateUser/:id`}  element={<UpdateUserForm/>}/>
    </Routes>
    </>
    )
}
export default CustomRoutes;