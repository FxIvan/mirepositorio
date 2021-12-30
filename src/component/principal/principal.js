import React from 'react'
import './principal.css'
import fotoCv from '../img/fotoCv.jpg'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { DiSass } from 'react-icons/di'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { IoLogoJavascript } from 'react-icons/io'
import { GrReactjs } from 'react-icons/gr'
import { SiNodedotjs } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'

export const Principal = () => {
  return (
    <div>
      <div className="col-12 text-center">
        <h1>Titulo</h1>
      </div>
      <section className="container">
        <div className="row m-auto d-flex align-items-center section-1 mt-3 pt-3">
          <div className="fotoCv col-4">
            <img src={fotoCv} alt="fotoCv" />
          </div>
          <div className="col-8">
            <h2>Bievenido a mi portafolio</h2>
            <p>
              Hola mi nombre es ivan, tengo 21 años y soy de la provincia de
              Buenos aires Argentina, me dedico al desarollo FrontEnd
            </p>
          </div>
        </div>
      </section>

      <section className="container mt-3">
        <div className="section-2">
          <div className="text-center mt-3">
            <h2>Herramientas</h2>
          </div>
          <div className="row text-center mt-4">
            <div className=" col-12 text-center">
              <h3>Diseño Web</h3>
              <div className="d-flex justify-content-around">
                <div className="d-grid">
                  <span>
                    <AiFillHtml5 />
                  </span>
                  <span>HTML</span>
                </div>
                <div className="d-grid">
                  <span>
                    <DiSass />
                  </span>
                  <span>SASS</span>
                </div>
                <div className="d-grid">
                  <span>
                    <BsFillBootstrapFill />
                  </span>
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-around container mt-2">
              <div className="col-7 text-center">
                <h3>Frontend</h3>
                <div className=" d-flex justify-content-around">
                  <div className="d-grid">
                    <span>
                      <IoLogoJavascript />
                    </span>
                    <span>JS</span>
                  </div>
                  <div className="d-grid">
                    <span>
                      <GrReactjs />
                    </span>
                    <span>React</span>
                  </div>
                </div>
              </div>
              <div className="col-5 text-center">
                <h3>Backend</h3>
                <div className="d-grid">
                  <span>
                    <SiNodedotjs />
                  </span>
                  <span>Node</span>
                </div>
              </div>
            </div>
            <div className='mt-2'>
              <h3>SCV</h3>
              <div className="row gitGitHub m-auto">
                <div className="d-grid col-12 d-flex text-center">
                  <div className='d-grid col-6'>
                    <span>
                      <AiFillGithub />
                    </span>
                    <span>GitHub</span>
                  </div>
                  <div className='d-grid col-6'>
                    <span>
                      <FaGitAlt />
                    </span>
                    <span>Git</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
          
      </section>

    </div>
  )
}
