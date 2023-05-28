import React, { useState, useRef } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import style from './Footer.module.css'
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';


function Footer() {

     const form = useRef();

     const[data, setData] = useState({
          fullname: '',
          email: '',
          message: '',
     })

     const inputForm = (e) =>{
          console.log(e.target.value)
          setData({...data, [e.target.name]:  e.target.value})
     }

     const formSubmit = (event) =>{
          setData({fullname: '', email: '', message: ''})
           event.preventDefault();
          if(data.fullname == ""){
               alert("please fill the name")
          }else if(data.email === ""){
               alert("please fill the email")
          }else if(data.message == ""){
               alert("please fill the message box")
          }else{
               window.dataLayer.push({'event': 'formSubmit'})
               emailjs.sendForm('service_z02de54', 'template_3x3memj', form.current, 'mls-XN3XlB9jkl3ri')
               .then((result) => {
                  alert(`Message sent success !`)
               }, (error) => {
                   console.log(error.text);
               });
          }
     }

  return (
    <footer>
       {/* form section */}

       <section>
                    <div className={style.formContainer}>
                         <div className={style.formRow}>
                              <div className={style.formControl}>
                                   <div className={style.formHeading}>
                                      <h6>Connect with me:</h6>
                                      <p>Satisfied with me? Please contact me</p>
                                      <div className={style.socialmediaLink}>
                                          <LinkedInIcon style={{color:'#7562E0'}}></LinkedInIcon>
                                          <FacebookIcon style={{color:'#7562E0'}}></FacebookIcon>
                                          <InstagramIcon style={{color:'#7562E0'}}></InstagramIcon>
                                          <GitHubIcon style={{color:'#7562E0'}}></GitHubIcon>
                                      </div>
                                   </div>

                                   <div className={style.form}>
                                        <p>Contact me, let’s make magic together</p>
                                        <div className={style.formColumn}>
                                           <form  method='POST' ref={form}>
                                              <div className={style.formInput} >
                                                  <input placeholder='Name :' type='text' name='fullname' onChange={inputForm} value={data.fullname}/>
                                                  <input placeholder='Email' type='email' name='email' onChange={inputForm} value={data.email}/>
                                                  <textarea placeholder='Message' type='text' name='message' onChange={inputForm} value={data.message}></textarea>
                                                  <button type='submit' name='submit' onClick={formSubmit}>Submit</button>
                                              </div>
                                           </form>
                                        </div>
                                   </div>
                              </div>

                         </div>
                         <div className={style.copyrightsContainer}>
                              <div className={style.copyrightsRow}>
                                    <div className={style.copyrights}>
                                        <p>2023@copyrights</p>
                                    </div>
                                <div className={style.footerLink}>
                                    <Link to='/'>Home</Link>
                                    <Link to='/'>About Me</Link>
                                    <Link to='/'>Projects</Link>
                                    <Link to='/'>Contact us</Link>
                                 </div>
                              </div>
                         </div>
                    </div>
               </section>
    </footer>
  )
}

export default Footer