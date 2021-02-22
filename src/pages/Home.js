import React from "react"

export default function Home() {
    return (
        // <div className="container center">
        //     <h1>Home</h1>
        // </div>


        <main class="about-container">
            <div class="row index-row-1">
                <h1>Welcome 👋</h1>
            </div>
            <div class="col-12 container">
                <div class="row index-row-2 bg-color">
                    <div>
                        <img class="shadow rounded portrait" src="https://i.imgur.com/7TOJf0l.jpg" width="250"
                            alt="profile picture" />
                        <hr />
                        <p>Hello, my name is Samuel. I live in Tacoma, Washington and am from the Pacific Northwest. I spent
                        the last decade developing a variety of hands on trade skills. I am now pursuing a Bachelors
                        Degree
                        in Computer Sciences and am currently enrolled in the University of Washington's <a
                                href="https://bootcamp.uw.edu/coding/" target="_blank" class="portfolio-link">Fullstack
                            Flex</a> Coding Bootcamp.
                    </p>
                        <hr />
                        <ul class="list">
                            <li><span id="skills">Skills</span></li>
                        </ul>
                        <hr />
                        <ul class="list">
                            <li>▷ Mechanics</li>
                            <li>▷ Engineering</li>
                            <li>▷ Critical thinking</li>
                            <li>▷ Creative problem solving</li>
                            <li>▷ Management</li>
                        </ul>
                        <hr />
                        <div class="technologies">
                            <p>❯ Technologies ❮</p>
                            <img src="https://img.shields.io/badge/-HTML5-blue?logo=html5" alt="HTML5" />
                            <img src="https://img.shields.io/badge/-javascript-yellow?logo=javascript" alt="JavaScript" />
                            <img src="https://img.shields.io/badge/-CSS-red?logo=css3" alt="CSS" />
                            <img src="https://img.shields.io/badge/-node.js-339933?logo=node.js&logoColor=white"
                                alt="node.js" />
                            <img src="https://img.shields.io/badge/-Express-000000?logo=JavaScript&logoColor=yellow"
                                alt="ExpressJS" />
                            <img src="https://img.shields.io/badge/-MySQL-4479A1?logo=MySQL&logoColor=white" alt="MySQL" />
                            <img src="https://img.shields.io/badge/-handlebars.js-FF7D00" alt="handlebars.js" />
                            <img src="https://img.shields.io/badge/-Bootstrap-7952B3?logo=Bootstrap&logoColor=white"
                                alt="BootstrapCSS" />
                            <img src="https://img.shields.io/badge/-MaterializeCSS-FF7F7F?logo=Material%20Design&logoColor=white"
                                alt="MaterializeCSS" />

                            <a href="https://youtu.be/DLzxrzFCyOs" class="link" target="_blank">

                                <img
                                    src="https://img.shields.io/badge/-JustForFun-white?logo=YouTube&logoColor=red"
                                    alt="rickroll" />
                            </a>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </main>


    )
}