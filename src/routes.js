import React  from "react";
import { Switch, Route } from "react-router-dom";
import Hoc from "./Components/Hoc";




const RoutesArr =  [
  
  { 
    path: "/",
    exact: true,
    component: Hoc, 
  },

  {
    path: "/Search",
    exact: true,
    component: Hoc, 
  },

];

const  Routes =(props)=>{
 

  return (  
               
    <Switch>
                  
      {RoutesArr.map(({ path, exact, component: Component, ...rest }) => (
        <Route key={path} path={path} exact={exact} render={(props) => (
          <Component {...props} {...rest} />
        )} />
      ))}
    </Switch>  
  );
    

};

export default Routes;
