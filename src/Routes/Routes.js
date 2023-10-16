import * as Feature from "../Feature/index"

export const PUBLIC_ROUTES = [
    {
        index: 0 , 
        path : "/login", 
        element : Feature.LoginWithHOC
    },
    {
        index: 1 , 
        path : "/welcome", 
        element : Feature.Welcome
    },
    {
      index: 2 , 
      path : "/register", 
      element : Feature.Register
  }
]

export const PRIVATE_ROUTES = [
    {
        index: 0 , 
        path : "/home", 
        element : Feature.Home
    },
    {
        index: 1 , 
        path : "/about", 
        element : Feature.About
    }
    ,

    {
        index: 2 , 
        path : "/edituser", 
        element : Feature.Profile
    }
]
