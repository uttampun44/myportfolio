import React from 'react'
import style from './Main.module.css'
import { Link } from 'react-router-dom'


function Main() {

  return (
        <main>

            <section className='heroSection'>
                  <div className={style.heroContainer}>
                     <div className={style.heroTitle}>
                        <p>Hello, I'm</p>
                        <h2>Uttam Pun</h2>
                        <p><span></span>Developer</p>
                     </div>
                     <div className={style.heroImage}>
                         <div className={style.image}>
                              <img src='/assets/portrait-1.webp'/>
                         </div>
                     </div>
                  </div>
            </section>
            <section className={style.blankSection}>
              <div className={style.blankRow}>

              </div>
            </section>


            <section>
                <div className={style.aboutContainer}>
                  <div className={style.about}>
                     <h3>About me:</h3>
                     <p>Hi, my name is Uttam Pun, i am a Front End Developer, React Developer, and Php developer. I have honed my skills in Web Development and advance i have core understanding of advance UI design principles.
Here are the major skiills i have. </p>
                  </div>

                  <div className={style.experienceSection}>
                        <div className={style.five}>
                        <p>1<span>+</span></p>
                        </div>
                        <div className={style.experience}>
                          <p>Years of experience. Specialised in building apps, while ensuring a seamless
web experience for end users.</p>
                        </div>
                  </div>

                  <div className={style.technologyContainer}>
                   <p>My Tech Stack</p>
                     <div className={style.technologyRow}>
                        <div className={style.logoOne}><img src='/assets/html.svg'/></div>
                        <div className={style.logoTwo}><img src='/assets/type.svg'/></div>
                        <div className={style.logoThree}><img src='/assets/js.svg'/></div>
                        <div className={style.logoFour}><img src='/assets/bootstrap.svg'/></div>
                        <div className={style.logoFive}><img src='/assets/tailwind.svg'/></div>
                        <div className={style.logoSix}><img src='/assets/react.svg'/></div>
                        <div className={style.logoSeven}><img src='/assets/git.svg'/></div>
                        <div className={style.logoEight}><img src='/assets/PHP-logo.webp'/></div>
                     </div>
                  </div>
                </div>
            </section>



            <section>
                   <div className={style.projectsContainer}>
                   <div className={style.headingProjects}>
                      <h4>Projects</h4>
                      <p>I’ve built so far</p>
                   </div>
                    <div className={style.projectscardBody}>
                        <div className={style.projectOne}>
                            <img src='/assets/hostinger.webp'/>
                            <div className={style.card}>
                                <h5>Hostinger Clone (HTML, CSS and Javascript)</h5>
                                <div className={style.projectLink}>
                                   <Link to='https://github.com/uttampun44'>View Projects</Link>
                                   <Link to='https://github.com/uttampun44' style={{backgroundColor: '#181824', border: '1px solid #7562E0'}}>View Repositories</Link>
                                </div>
                                <div className={style.overlay}>
                                <div className={style.text}><p>Click View Projects</p></div>
                                </div>
                            </div>
                        </div>
                        <div className={style.projectOne}>
                            <img src='/assets/amazonPrime.webp'/>
                            <div className={style.card}>
                                <h5>Amazon Prime Clone <br></br>(React Project)</h5>
                                <div className={style.projectLink}>
                                   <Link to='https://prime-clone-1884d.web.app/'>View Projects</Link>
                                   <Link to='https://github.com/uttampun44' style={{backgroundColor: '#181824', border: '1px solid #7562E0'}}>View Repositories</Link>
                                </div>
                                <div className={style.overlay}>
                                <div className={style.text}><p>Click View Projects</p></div>
                                </div>
                            </div>
                        </div>
                        <div className={style.projectOne}>
                            <img src='/assets/amazonclone.webp'/>
                            <div className={style.card}>
                                <h5>Amazon Clone (React project with redux)</h5>
                                <div className={style.projectLink}>
                                   <Link to='https://clone-df336.firebaseapp.com/' >View Projects</Link>
                                   <Link to='https://github.com/uttampun44' style={{backgroundColor: '#181824', border: '1px solid #7562E0'}}>View Repositories</Link>
                                </div>
                                <div className={style.overlay}>
                                <div className={style.text}><p>Click View Projects</p></div>
                                </div>
                            </div>
                        </div>
                        <div className={style.projectOne}>
                            <img src='/assets/fazzabeauty.webp'/>
                            <div className={style.card}>
                                <h5>Fazza Beauty (React Project)</h5>
                                <div className={style.projectLink}>
                                   <Link to='https://fazzabeauty-34b06.firebaseapp.com/' >View Projects</Link>
                                   <Link to='https://github.com/uttampun44' style={{backgroundColor: '#181824', border: '1px solid #7562E0'}}>View Repositories</Link>
                                </div>
                                <div className={style.overlay}>
                                <div className={style.text}><p>Click View Projects</p></div>
                                </div>
                            </div>
                        </div>
                        <div className={style.projectOne}>
                            <img src='/assets/uttamstore.webp'/>
                            <div className={style.card}>
                                <h5>Uttam Store (React Project)</h5>
                                <div className={style.projectLink}>
                                   <Link to='https://uttam-store-69d6e.firebaseapp.com/' >View Projects</Link>
                                   <Link to='https://github.com/uttampun44' style={{backgroundColor: '#181824', border: '1px solid #7562E0'}}>View Repositories</Link>
                                </div>
                                <div className={style.overlay}>
                                <div className={style.text}><p>Click View Projects</p></div>
                                </div>
                            </div>
                        </div>
                        <div className={style.projectOne}>
                            <img src='/assets/aionintel.webp'/>
                            <div className={style.card}>
                                <h5>Aionintel (Wordpress project)</h5>
                                <div className={style.projectLink}>
                                   <Link to='https://aionintel.com/'>View Projects</Link>
                                   <Link to='https://aionintel.com/' style={{backgroundColor: '#181824', border: '1px solid #7562E0'}}>View Repositories</Link>
                                </div>
                                <div className={style.overlay}>
                                    <div className={style.text}>
                                    <p>Click View Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
            </section>
        </main>
  )
}

export default Main