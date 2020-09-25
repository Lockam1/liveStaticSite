import React from "react"
import Layout from "../components/layout"
export default function Contact() {
  return (
    <Layout>
        <h1>Contact Us</h1>
        <div>
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
                <input type="hidden" name="contact" value="contact" />
            </form>
        </div>
    </Layout>
  )
}