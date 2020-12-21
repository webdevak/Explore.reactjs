import React from 'react'
import { Button } from '../Button'
import '../../App.css'



export default function SignUp() {
    return ( 
    <>
    <div className="input-areas">
        <h1 className='sign-up'>Subscribe</h1>
    
                    <form>
                        <input 
                        type="email" 
                        name="email"
                        placeholder="Your Email"
                        className="footer-input"
                        />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
        </>
    )
}


