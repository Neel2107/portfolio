import React from 'react'
import "./EducationSection.scss";
const EducationSection = () => {
  return (
    <div>
        <div  className='EducationSection'>
        <div className='titleContainer'>
            <span className='titleName'>
                <span>04.</span>
                    Education
            </span>
            <div className='titleHrLine'></div>
        </div>
        <div className='educationSection'>
            <div className='upperTab'>
                <h4>2019 - 2023</h4>
                <p>Bachelor of Engineering</p>
            </div>


            <div className='hrLine'></div>
            <div className='lowerTab'>
            <span>Computer Engineering</span>
            <span>Government Engineering College, Dahod</span>
            <span>CGPA - 8.29</span>
            </div>
        </div>
      
        </div>
        <img src="#" alt="" />
    </div>
    
  )
}

export default EducationSection