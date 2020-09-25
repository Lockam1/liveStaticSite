import React from "react"
import Layout from "../components/layout"
export default function Contact() {
  return (
    <Layout>
        <h1>Contact Us</h1>
        <div>
            <form name="contact" method="POST" data-netlify="true">
                <label>
                    Name
                    <input type="text" name="name" id="name" />
                </label>
                <label>
                    Email
                    <input type="email" name="email" id="email" />
                </label>
                <label>
                    Subject
                    <input type="text" name="subject" id="subject" />
                </label>
                <label>
                    Message
                    <textarea name="message" id="message" rows="5" />
                </label>
                <button type="submit">Send</button>
                <input type="reset" value="Clear" />
            </form>
        </div>
    </Layout>
  )
}