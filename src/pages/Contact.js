import React from "react"
import SlideToggle from "react-slide-toggle"


export default function Contact() {
    return (
        <main className="contact-container container center-align">

            <div className="row index-row-1">
                <h1>👨‍💻</h1>
            </div>

            <div className="row contact-row">
                <a href="https://www.linkedin.com/in/samuel-fox-tacoma/" target="_blank"><span className="link-btn">Linked
                        in</span></a>
            </div>

            <div className="row contact-row">
                <a href="https://github.com/samuelfox1" target="_blank"><span className="link-btn">GitHub</span></a>
            </div>

            <div className="row contact-row">

                <SlideToggle
                    duration={1000}
                    collapsed
                    render={({ toggle, setCollapsibleElement }) => (
                        <div>

                            <a
                                onClick={toggle}
                                id="contact-personal"
                            ><span className="link-btn">More</span></a>
                            {/* <div className="divider"></div> */}


                            <div
                                ref={setCollapsibleElement}
                                className="contact-row">
                                <div className="contact-item">
                                    <a href="tel:+2534486572" className="contact-item portfolio-link">☏ (253) 448-6572</a>
                                </div>

                                <div className="contact-item">
                                    <a href="mailto:samueljasonfox@gmail.com" className="contact-item portfolio-link">
                                        ❖ samueljasonfox@gmail.com</a>
                                </div>

                                <div className="contact-item">
                                    <a href="https://drive.google.com/file/d/1tCUOLkL3cPXool2wgQ8vxuJoYEIwJ46h/view?usp=sharing"
                                        target="_blank" className="contact-item portfolio-link">▷ Resume</a>
                                </div>
                            </div>

                        </div>
                    )}
                />
            </div>
        </main>
    )
}