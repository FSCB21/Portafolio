
import {
  Switch,
  Route
} from "react-router-dom";


import Home from '../components/HomeP'
import Perfil from '../components/Perfil'
import Estudios from '../components/Estudios'
import Experiencia from '../components/Experiencia'
import Error404 from '../components/Error404'

const Router = () => {
  
    return (
        
        <Switch>

        <Route exact path="/" component={Home} />

        <Route exact path="/perfil" component={Perfil} />

        <Route exact path="/estudios" component={Estudios} />

        <Route exact path="/experiencia" component={Experiencia} />
        
        <Route>
            <Error404 />
        </Route>

        </Switch>

    )
}

export default Router
