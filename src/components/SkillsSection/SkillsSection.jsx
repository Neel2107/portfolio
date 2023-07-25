import React from 'react'
import "./SkillsSection.scss"

const SkillsSection = () => {
  return (
    <div className='skillsSection' id="skills">
        <div className="scContainer">
            <div className="titleContainer hidden show">
                <span className="tabNames">
                    <span>03.</span>
                    Technologies I've worked with
                </span>
                <div className="titleHrLine"></div>
            </div>
           
            <div className="skillCard hidden show">
                <div className="skillName">
                <span>HTML</span>
                </div>
                <div className="indicatorContainer">
                    <div className="indicator">
                        <div className='animate__animated animate__slideInLeft' style={{width:"80%", height:"10px", backgroundColor:"rgb(25,132,197)", borderRadius:"5px", zIndex:"100"}}></div>
                    </div>
                </div>
                <span className="scoreContainer">
                    8/10
                </span>
                    
                 
               
            </div>

            <div className="skillCard hidden show">
                <div className="skillName">
                <span>CSS3/SCSS</span>
                </div>
                <div className="indicatorContainer">
                    <div className="indicator">
                        <div className='animate__animated animate__slideInLeft' style={{width:"80%", height:"10px", backgroundColor:"rgb(209, 209, 209)", borderRadius:"5px", zIndex:"100"}}></div>
                    </div>
                </div>
                <span className="scoreContainer">
                    8/10
                </span>
                    
                 
               
            </div>
            
            <div className="skillCard hidden show">
                <div className="skillName">
                <span>ReactJS</span>
                </div>
                <div className="indicatorContainer">
                    <div className="indicator">
                        <div className='animate__animated animate__slideInLeft' style={{width:"70%", height:"10px", backgroundColor:"rgb(194, 197, 25)", borderRadius:"5px", zIndex:"100"}}></div>
                    </div>
                </div>
                <span className="scoreContainer">
                    7/10
                </span>
                    
                 
               
            </div>
            
            <div className="skillCard hidden show">
                <div className="skillName">
                <span>Javascript</span>
                </div>
                <div className="indicatorContainer">
                    <div className="indicator">
                        <div className='animate__animated animate__slideInLeft'  style={{width:"70%", height:"10px", backgroundColor:"rgb(197, 25, 25)", borderRadius:"5px", zIndex:"100"}}></div>
                    </div>
                </div>
                <span className="scoreContainer">
                    7/10
                </span>
                    
                 
               
            </div>
            
            <div className="skillCard hidden show">
                <div className="skillName">
                <span>Node Js</span>
                </div>
                <div className="indicatorContainer">
                    <div className="indicator">
                        <div className='animate__animated animate__slideInLeft'  style={{width:"50%", height:"10px", backgroundColor:"rgb(25, 197, 25)", borderRadius:"5px", zIndex:"100"}}></div>
                    </div>
                </div>
                <span className="scoreContainer">
                    5/10
                </span>
                    
                 
               
            </div>
            
            <div className="skillCard hidden show">
                <div className="skillName">
                <span>Tailwind CSS</span>
                </div>
                <div className="indicatorContainer">
                    <div className="indicator">
                        <div className='animate__animated animate__slideInLeft'  style={{width:"70%", height:"10px", backgroundColor:"rgb(25,132,197)", borderRadius:"5px", zIndex:"100"}}></div>
                    </div>
                </div>
                <span className="scoreContainer">
                    7/10
                </span>
                    
                 
               
            </div>
            
            
          
            <div className="skillCard hidden show">
                <div className="skillName">
                <span>Github</span>
                </div>
                <div className="indicatorContainer">
                    <div className="indicator">
                        <div  className='animate__animated animate__slideInLeft' style={{width:"80%", height:"10px", backgroundColor:"RGB(255, 165, 0)", borderRadius:"5px", zIndex:"100"}}></div>
                    </div>
                </div>
                <span className="scoreContainer">
                    8/10
                </span>
                    
                 
               
            </div>
            
            <div className="skillCard hidden show">
                <div className="skillName">
                <span>OOPS</span>
                </div>
                <div className="indicatorContainer">
                    <div className="indicator">
                        <div  className='animate__animated animate__slideInLeft' style={{width:"60%", height:"10px", backgroundColor:" RGB(255, 110, 199)", borderRadius:"5px", zIndex:"100"}}></div>
                    </div>
                </div>
                <span className="scoreContainer">
                    6/10
                </span>
                    
                 
               
            </div>
            
            
            <div className="skillCard hidden show">
                <div className="skillName">
                <span>Figma</span>
                </div>
                <div className="indicatorContainer">
                    <div className="indicator">
                        <div  className='animate__animated animate__slideInLeft' style={{width:"60%", height:"10px", backgroundColor:"RGB(0, 255, 255)", borderRadius:"5px", zIndex:"100"}}></div>
                    </div>
                </div>
                <span className="scoreContainer">
                    6/10
                </span>
                    
                 
               
            </div>
            

        </div>
    </div>
  )
}

export default SkillsSection