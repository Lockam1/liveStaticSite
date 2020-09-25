import React from "react"
import Layout from "../components/layout"
export default function Contact() {
  return (
    <Layout>
        <h1>Contact Us</h1>
        <div>
            {/* <input type="hidden" name="form-name" value="name-of-form" />
            <form form-name="contact" name="contact" method="POST" data-netlify="true">
                
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                    </select></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
               
            </form> */}
                <form method="POST"  name="contactform" data-netlify="true" action="/contact" >
                <input type="hidden" name="contactform" value="contact" />
                <div className="field" >
                    <label>First Name</label>
                    <input type="text" name="Name" id="Name" required />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="Email" id="Email"  required />
                </div>
                <div className="field">
                    <label>Role</label>
                    <input type="text" name="Role" id="Role"   />
                </div>
                <div className="field">
                    <label>Message</label>
                    <textarea type="message" name="Message" id="Message"/>
                </div>
                    <button type="submit">Send</button>
                </form>
        </div>
    </Layout>
  )
}