"use client"

export function AuthPage ({isSignin}: {
    isSignin: boolean
}){
    return <div>
        <div>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Password"/>

            <button onClick={()=>{

            }}>{isSignin? "Sign in" : "Sign up"}</button>
        </div>
    </div>
}