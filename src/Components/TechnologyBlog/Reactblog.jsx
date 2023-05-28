import React from 'react'
import Style from './Blog.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Reactblog() {
  return (
    <>
    <Header />
     <main>
        <section>
            <div className={Style.blogContainer}>
                <div className={Style.blogDiv}>
                     <div className={Style.reactHeading}>
                        <h6>We will talk about making a React App.</h6>

                         <div className={Style.reactBlog}>
                         <p>Is CRA (Create React App) dead? Most developers are asking.
                            The truth is that CRA is not dead; it still exists.
                            It is easy for beginners who want to learn, react, upgrade their javascript skills, and learn new tools.
                             But there are a few things that make Vite more better than CRA. </p>
                          <p>I want to highlight the points. It's my opinion because I have worked with both tools.</p>
                         </div>

                         <div className={Style.reactPoints}>
                            <ul>
                                <li>1) CRA is laggy when we install it. It takes a lot of time.</li>
                                <li>2) It is not good for optimization.</li>
                                <li>3) For big projects, it is not recommended now.</li>
                                <li>4) Also, it does not support Webpack, Bundler, etc.</li>
                            </ul>
                         </div>

                         <div className={Style.vitePoints}>
                              <h6>Where is Vite?</h6>
                               <ul>
                                   <li>1) Good for large and complex</li>
                                   <li>2) It is much fatser than CRA.</li>
                                   <li>3) Good for optimization</li>
                                   <li>4) It supports the Webpack bundler.</li>
                               </ul>
                               <p>npm run build command bundles the file in one folder that is dist build for production.</p>
                         </div>
                     </div>
                </div>
            </div>
        </section>
        </main>
        <Footer />
    </>
  )
}

export default Reactblog