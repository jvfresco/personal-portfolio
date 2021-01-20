import React, {useState, useRef, useEffect, useReducer} from 'react'
import {useChain} from 'react-spring'
import Modal from './components/Modal/Modal'
import Octogon from './components/Octogon/Octogon'
import OctogonBorder from './components/Octogon/OctogonBorder/OctogonBorder'
import CircuitLines from './components/Octogon/CircuitLines/CircuitLines'
import Background from './components/Background/Background'
import About from './components/About/About'
import './App.css'
import githubLogo from './assets/github2.svg'
import liveLogo from './assets/live.svg'
import mailLogo from './assets/mail.svg'
import IconLink from './components/IconLink/IconLink'

//TODO: change positioning of octogon to use grid

function reducer (state, action){
  switch (action.type) {
    case 'LOAD_PROJECT':
      return {...state, index: action.index, showModal: true, animate: true}
    case 'OPEN_MODAL':
      return {...state, index: 6, showModal: true}
    case 'UNLOAD_PROJECT':
      return {...state, showModal: false, animate: false}
    case 'CLOSE_MODAL': 
      return {...state, showModal: false, animate: null}
    default:
      return null
  }
}

const App = () => {

  const [{showModal, animate, index},dispatch] = useReducer(reducer, {showModal: false, animate: false, index: null})
  const [projects, setProjects] = useState()
  
  //Fetching data
  useEffect(()=> {
    async function getProjects(){
      const projectsResponse = await fetch('data/data.json')
      console.log(projectsResponse)
      const projects = await projectsResponse.json()
      setProjects(projects.projects)
    } 
    getProjects() 
  },[])
  
  //References for each element to be animated
  const modalRef = useRef()
  const borderRef = useRef()
  const circuitRef = useRef()
  const backRef = useRef()
  const aboutRef = useRef()
  const octogonRef = useRef()
  
  //Define the animation based on the state
  function createAnimation(){
    if(animate){
      return {animation: [borderRef, circuitRef, octogonRef, aboutRef, backRef, modalRef], timeStep: [0, 1.5, 1.5, 3.5, 3.5, 4]}
    }
    if((!animate && showModal) || (animate === null && !showModal)){
      return {animation: [modalRef], timeStep: [0]}
    }
    if(animate === false && !showModal){
      return {animation: [modalRef, backRef, circuitRef, octogonRef, borderRef, aboutRef], timeStep: [0, 0.5, 0.5, 0.5, 3, 5]}
    }
  }
  //Animation
  useChain(createAnimation().animation, createAnimation().timeStep)

  return (
    <div className="App">
      <Background
        ref={backRef}
        animate={animate}
        color={index !== null && projects[index].colors.primary}
      >
        <About ref={aboutRef} animate={showModal} onClick={dispatch} />
        <Modal
          ref={modalRef}
          show={showModal}
          modalClosed={() =>
            animate
              ? dispatch({ type: "UNLOAD_PROJECT" })
              : dispatch({ type: "CLOSE_MODAL" })
          }
          colors={index !== null && projects[index].colors}
          title={index !== null && projects[index].title}
          
        >
          <span dangerouslySetInnerHTML={{__html: index !== null && projects[index].text}} />
          <div className='modal__footer' style={{display:'flex', justifyContent:'center'}}>
                <IconLink href={index !== null && projects[index].urlGithub} image={githubLogo} alt="Visit on Github" color={index !== null && projects[index].colors.filter}/>
                <IconLink href={index !== null && projects[index].urlLive} image={index===6 ? mailLogo : liveLogo} alt="Visit live version" color={index !== null && projects[index].colors.filter}/>
          </div> 
        </Modal>
        {projects ? (
          <Octogon
            projects={projects}
            onClick={dispatch}
            showModal={showModal}
            ref={octogonRef}
            animate={animate}
            colors={index !== null && projects[index].colors}
          />
        ) : null}

        <CircuitLines
          ref={circuitRef}
          animate={animate}
          color={index !== null && projects[index].colors.secondary}
        />
        <OctogonBorder
          ref={borderRef}
          animate={animate}
          color={index !== null && projects[index].colors.secondary}
        />
      </Background>
    </div>
  );
}

export default App;
