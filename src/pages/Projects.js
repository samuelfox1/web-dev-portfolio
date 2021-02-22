import React from "react"
import SlideToggle from "react-slide-toggle"
import { render } from "react-dom"

// SlideToggle is modified from https://codesandbox.io/s/react-slide-toggle-y3tpn?file=/src/index.js

export default function Projects() {
    return (
        <div className="container center">
            <h1>Projects</h1>

            <SlideToggle
                duration={800}
                render={({ toggle, setCollapsibleElement, progress }) => (
                    <div>
                        <a
                            onClick={toggle}>
                            toggle
                        </a>
                        <div ref={setCollapsibleElement}>
                            <div
                                style={{ transform: `translateY(${Math.round(20 * (-1 + progress))}px)` }}
                            >
                                <p>
                                    Collapsible content, you can reverse the toggle before it has
                                    finished.</p>
                                <a href="https://github.com/kunukn/react-slide-toggle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    react slide toggle - github</a>
                            </div>
                        </div>
                    </div>
                )}
            />
            <hr />
            <SlideToggle
                duration={800}
                render={({ toggle, setCollapsibleElement, progress }) => (
                    <div>
                        <a
                            onClick={toggle}>
                            toggle
                                        </a>
                        <div ref={setCollapsibleElement}>
                            <div
                                style={{ transform: `translateY(${Math.round(20 * (-1 + progress))}px)` }}
                            >
                                <p>
                                    Collapsible content, you can reverse the toggle before it has
                                                    finished.</p>
                                <a href="https://github.com/kunukn/react-slide-toggle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    react slide toggle - github</a>
                            </div>
                        </div>
                    </div>
                )}
            />
        </div>

        //     <main class="portfolio-container">
        //         <div class="col-12 container">
        //             <div class="row row-cols-1 row-cols-md-2 g-4 text-center">
        //                 <div class="col portfolio-card-l top-card">
        //                     <div class="card p-3 mt-4 rounded bg-color">
        //                         <a>
        //                             <img src="https://github.com/samuelfox1/Voicely/raw/dev-branch/mockups/screenshot.png"
        //                                 class="card-img-top shadow p-3 mb-5 bg-color2 rounded" alt="Voicely screenshot">
        //                     </a>
        //                             <div class="card-body">
        //                                 <h5 class="card-title">Voicely</h5>
        //                                 <div style="display: none;">
        //                                     <p class="card-text">Online notepad that recognizes and transcribes
        //                                     voice into text, with the ability to parse matching text to emoji. Winner of the
        //                                     Best Functionality and People's Choice awards for the Winter 2020 University of
        //                                 Washington coding bootcamp. <a class="portfolio-link"
        //                                             href="https://github.com/samuelfox1/Voicely" target="_blank">Learn More</a></p>
        //                                     <a href="https://chomieu.github.io/Voicely/" target="_blank"><span
        //                                         class="link-btn active">App</span></a>
        //                                 </div>
        //                             </div>
        //                 </div>
        //                     </div>
        //                     <div class="col portfolio-card-r">
        //                         <div class="card p-3 mt-4 rounded bg-color">
        //                             <a>
        //                                 <img src="https://res.cloudinary.com/dl5nddb9b/image/upload/v1612572338/qlfzrzmwnwovge0ywkma.png"
        //                                     class="card-img-top shadow p-3 mb-5 bg-color2 rounded"
        //                                     alt="Team Page Generator screenshot">
        //                     </a>
        //                                 <div class="card-body">
        //                                     <h5 class="card-title">memoryBank</h5>
        //                                     <div style="display: none;">
        //                                         <p class="card-text">Pause and reflect on your daily horoscope and mental space. Save
        //                                 each day's reflection as a memory in your memory bank. <a class="portfolio-link"
        //                                                 href="https://github.com/samuelfox1/memoryBank" target="_blank">Learn
        //                                     More</a></p>
        //                                         <a href="https://memorybank2021.herokuapp.com/" target="_blank"><span
        //                                             class="link-btn active">App</span></a><br><br>
        //                         </div>
        //                     </div>
        //                                     </div>
        //                                 </div>
        //                                 <div class="col portfolio-card-l">
        //                                     <div class="card p-3 mt-4 rounded bg-color">
        //                                         <a>
        //                                             <img src="https://res.cloudinary.com/dl5nddb9b/image/upload/v1612572711/vcrcijmlmrjot7t0btuk.png"
        //                                                 class="card-img-top shadow p-3 mb-5 bg-color2 rounded"
        //                                                 alt="Team Page Generator screenshot">
        //                     </a>
        //                                             <div class="card-body">
        //                                                 <h5 class="card-title">Team Page Generator</h5>
        //                                                 <div style="display: none;">
        //                                                     <p class="card-text">Easily build a professional webpage with color codeded contact
        //                                 cards for each employee or team member.<a class="portfolio-link"
        //                                                             href="https://github.com/samuelfox1/team-profile-generator"
        //                                                             target="_blank">Learn
        //                                     More</a></p>
        //                                                     <a href="https://samuelfox1.github.io/team-profile-generator/" target="_blank"><span
        //                                                         class="link-btn active">Example Page</span></a><br><br>
        //                                                             <a href="https://drive.google.com/file/d/1WzvSdJ5hEFK0hBjxLI3c3xGqTGapBHTu/view"
        //                                                                 target="_blank"><span class="link-btn active">Demo Video</span></a>
        //                         </div>
        //                     </div>
        //                                                 </div>
        //                                             </div>
        //                                             <div class="col portfolio-card-r">
        //                                                 <div class="card p-3 mt-4 rounded bg-color">
        //                                                     <a>
        //                                                         <img src="https://github.com/samuelfox1/Weather-e-Port/blob/main/Assets/ScreenShots/01-LaptopView-danger-UV.png?raw=true"
        //                                                             class="card-img-top shadow p-3 mb-5 bg-color2 rounded" alt="Weather-e-port screenshot">
        //                     </a>
        //                                                         <div class="card-body">
        //                                                             <h5 class="card-title">Weather e.Port</h5>
        //                                                             <div style="display: none;">
        //                                                                 <p class="card-text">Enter a location to check the current weather and 5 day forecast.
        //                                                                 Also reports today's UV-index, color coded to help you
        //                                                                 stay safe out there.Works anywhere worlwide!
        //                                 <a class="portfolio-link" href="https://github.com/samuelfox1/Weather-e-Port"
        //                                                                         target="_blank">Learn More</a>
        //                                                                 </p>
        //                                                                 <a href="https://samuelfox1.github.io/Weather-e-Port/" target="_blank"><span
        //                                                                     class="link-btn active">App</span></a>
        //                                                             </div>
        //                                                         </div>
        //                 </div>
        //                                                 </div>
        //                                                 <div class="col portfolio-card-l">
        //                                                     <div class="card p-3 mt-4 rounded bg-color">
        //                                                         <a>
        //                                                             <img src="https://i.imgur.com/hUpSwBD.png"
        //                                                                 class="card-img-top shadow p-3 mb-5 bg-color2 rounded" alt="Daily Planner screenshot">
        //                     </a>
        //                                                             <div class="card-body">
        //                                                                 <h5 class="card-title">Daily Planner</h5>
        //                                                                 <div style="display: none;">
        //                                                                     <p class="card-text">Stay on track of each day with this handy schedule app. Enter the
        //                                                                     taks for each hour and follow along as the colors change over time. A grey colored
        //                                 box indicates a past time slot, red indicates the current and green is the future.<a
        //                                                                             class="portfolio-link" href="https://github.com/samuelfox1/Daily-Planner"
        //                                                                             target="_blank">Learn
        //                                     More</a></p>
        //                                                                     <a href="https://samuelfox1.github.io/Daily-Planner/" target="_blank"><span
        //                                                                         class="link-btn active">App</span></a>
        //                                                                 </div>
        //                                                             </div>
        //                 </div>
        //                                                     </div>
        //                                                 </div>
        //                                             </div>
        // </main>
    )
}