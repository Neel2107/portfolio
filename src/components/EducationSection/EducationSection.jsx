import React from 'react'
import "./EducationSection.scss";
const EducationSection = () => {
  return (
    <div className='EducationWrapper' id='education' > 
        <div  className='EducationSection' >
        <div className='titleContainer'>
            <span className='titleName'>
                <span>04.</span>
                    Education
            </span>
            <div className='titleHrLine'></div>
        </div>
        <div className='educationSection'>
            <div className='upperTab'>
                <h4 className='years'>2019 - 2023</h4>
                <p className='course'>Bachelor of Engineering</p>
            </div>


            <div className='hrLine'></div>
            <div className='lowerTab'>
            <span className='department' >Computer Engineering</span>
            <span className='institute'>Government Engineering College, Dahod</span>
            <span className='cgpa'>CGPA - 8.29</span>
            </div>
        </div>
        <div className='educationSection'>
            <div className='upperTab'>
                <h4 className='years'>2018 - 2019</h4>
                <p className='course'>Higher Secondary</p>
            </div>


            <div className='hrLine'></div>
            <div className='lowerTab'>

            <span className='institute'>AB School</span>
            <span className='cgpa'>Percentage - 63.69%</span>
            </div>
        </div>

        <div className='educationSection'>
            <div className='upperTab'>
                <h4 className='years'>2016 - 2017</h4>
                <p className='course'>Secondary</p>
            </div>


            <div className='hrLine'></div>
            <div className='lowerTab'>
            
            <span className='institute'>AB School</span>
            <span className='cgpa'>Percentage - 85.16%</span>
            </div>
        </div>
      
        </div>
        <img className='gifImg  ' src="./education.gif" alt="" />
    </div>
    
  )
}

export default EducationSection