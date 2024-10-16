import { useAuth0 } from "@auth0/auth0-react";

const LogOutButton = () =>{
    
    const {logOut, isAuthenticated} = useAuth0()

    
    return(
        
        isAuthenticated && (
            <button onClick={() => logOut()}>
                
                Sign Out
            </button>
    

        )
        
    
    )
}

export default LogOutButton