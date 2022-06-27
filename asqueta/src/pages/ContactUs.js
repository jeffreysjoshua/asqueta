import React, { Component } from 'react';

const labelForm = {
  lineHeight: '2.7em',
  fontWeight: '700',
  color: '#08c9c9',
}

const textForm = {
  minHeight: '6.25rem',
  fontSize: '14px',
  width: '100%',
  paddingTop: '10px',
  paddingBottom: '10px',
  borderRadius: '5px',
  border: 'none',
  border: '2px solid #08c9c9',
  fontSize: '0.875rem',
  outline: 'none',
}

const inputForm = {
  width: '100%',
  paddingTop: '10px',
  paddingBottom: '10px',
  borderRadius: '5px',
  border: 'none',
  border: '2px solid #08c9c9',
  fontSize: '0.875rem',
  outline: 'none',
}

const submitButton = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  backgroundColor: 'white',
  border: '2px solid #08c9c9',
  borderRadius: '5px',
  fontSize: '1rem',
  fontWeight: '900',
  transition: '0.6s',
  color: '#2F4F4F',
}


const paragraphStyle = {
  border: '1.2rem',
  borderStyle: 'solid',
  borderColor: '#0bbdbd',
  padding: '1.5rem',
  width: '25rem',
  color: 'black',
  fontFamily: 'avantaGarde',
  fontSize: '0.7rem',
  lineHeight: '0.2rem',
  marginLeft:'auto',
  marginRight:'auto',
  marginBottom:'2rem',
  marginTop:'1rem'
}

const paragraphContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#F5FFFA',
  alignItems: 'center',
}

class ContactUs extends Component {
  render() {
    return (
      <>
      <div style={{backgroundColor: '#F5FFFA'}}>
      <br></br>
      <div style={paragraphContainerStyle}>
      <div style={paragraphStyle}>
      <h4 >For Commercial Inquiries Contact</h4>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p styl={paragraphStyle}>1408 2nd Street South</p>
      <p styl={paragraphStyle}>Nampa, ID 83651</p>
      <p styl={paragraphStyle}>P: (208) 466-2476</p>
      <p styl={paragraphStyle}>F: (208) 466-2446</p>
      <p styl={paragraphStyle}>E: lori@asquetaglass.com</p>
      </div>
      <div style={paragraphStyle}>
      <h4 >For Residential Inquiries Contact</h4>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p styl={paragraphStyle}>1408 2nd Street South</p>
      <p styl={paragraphStyle}>Nampa, ID 83651</p>
      <p styl={paragraphStyle}>P: (208) 466-2476</p>
      <p styl={paragraphStyle}>F: (208) 466-2446</p>
      <p styl={paragraphStyle}>E: lori@asquetaglass.com</p>
      </div>
      </div>
    <section style={{backgroundColor:'#F5FFFA', height: '100%'}}>
      <h2 style={{textAlign:'center', marginBottom:'1rem', color:'black', fontFamily: 'avantaGarde'}}>General Inquiry</h2>
      <div style={{maxWidth:'42rem', margin:'0 auto', padding:'1rem', borderRadius:'5px', boxShadow:'0 3px 10px #4682B4', position:'relative'}}>
        <div>
          <form action="https://formspree.io/f/xoqrjeyl" method="POST">
            <div class="form-control">
              <label style={labelForm} for="name">Name</label>
              <input
                style={inputForm}
                type="text"
                id="name"
                name="sender-name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div class="form-control">
              <label style={labelForm} for="email">Email</label>
              <input
                style={inputForm}
                type="email"
                id="email"
                name="sender-email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div class="form-control">
              <label style={labelForm} for="message">Message</label>
              <textarea style={textForm}
                id="message"
                cols="60"
                rows="10"
                placeholder="Enter Your Message"
                name="message"
                class="input-field"
                required
              ></textarea>
            </div>
            <input
              style={submitButton}
              type="submit"
              value="Submit"
              id="submit-btn"
              class="submit-btn"
            />
          </form>
        </div>
      </div>
    </section>
    </div>
      </>
      )
  }
}
export default ContactUs