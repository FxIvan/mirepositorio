import React from 'react'
import {Link} from 'react-router-dom'
import './principal.css'
import logo from '../img/logo.png'
import fotoCv from '../img/fotoCv.jpg'
import { AiFillHtml5, AiFillGithub , AiOutlineWhatsApp , AiFillLinkedin } from 'react-icons/ai'
import { DiSass } from 'react-icons/di'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { IoLogoJavascript } from 'react-icons/io'
import { GrReactjs } from 'react-icons/gr'
import { SiNodedotjs } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import {Type} from './Type'

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
            <p><Type/></p>
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
                    <AiFillHtml5 className='html5'/>
                  </span>
                  <span>HTML</span>
                </div>
                <div className="d-grid">
                  <span>
                    <DiSass className='sass'/>
                  </span>
                  <span>SASS</span>
                </div>
                <div className="d-grid">
                  <span>
                    <BsFillBootstrapFill className='bootstrap'/>
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
                      <IoLogoJavascript className='javascript'/>
                    </span>
                    <span>JS</span>
                  </div>
                  <div className="d-grid">
                    <span>
                      <GrReactjs className='react'/>
                    </span>
                    <span>React</span>
                  </div>
                </div>
              </div>
              <div className="col-5 text-center">
                <h3>Backend</h3>
                <div className="d-grid">
                  <span>
                    <SiNodedotjs className='node'/>
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
                      <AiFillGithub className='github'/>
                    </span>
                    <span>GitHub</span>
                  </div>
                  <div className='d-grid col-6'>
                    <span>
                      <FaGitAlt className='git'/>
                    </span>
                    <span>Git</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container mt-3'>
          <div className='section-3'>
            <div className='text-center mt-3'>
              <h2>Contacto</h2>
            </div>
            <div>
              <span>Telefono:<p>1136887781</p></span>
              <span>Correo Electronico:<p>almendraivan210814@gmail.com</p></span>
            </div>
            <div className='row text-center'>
              <div className='d-flex'>
                <div className='d-grid me-2 col-6 ps-5'>
                  <span>Whatsapp</span>
                  <a href='https://api.whatsapp.com/send?phone=541136887781'><AiOutlineWhatsApp className='whatsapp'/></a>
                </div>
                <div className='d-grid col-6 pe-5'>
                  <span>LinkedIn</span>
                  <a href='https://www.linkedin.com/in/ivan-almendra-2000/'><AiFillLinkedin className='linkedin'/></a>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section className='container mt-3'>
        <div className='section-4'>
          <div className='text-center mt-3'>
            <h2>Algunos de Mis Proyectos</h2>
          </div>

            <div className='container'>
              <div className='mt-3'>
                <h3>Login</h3>
                <p>version: Desktop</p>
                <h4>Tecnologia usada:</h4>
                <div className='row'>
                  <div className='col-3'>
                    <GrReactjs  className='react'/>
                  </div>
                  <div className='col-3'>
                    <BsFillBootstrapFill className='bootstrap'/>  
                  </div>
                  <div className='col-3'>
                    <AiFillHtml5  className='html5'/>
                  </div>
                </div>
                <div className='text-center mt-4'>
                  <a href='https://github.com/FxIvan/login/tree/loginTerminado'>Login</a>
                </div>
      
                <div className='mt-3'>
                  <h3>Delivery Jet</h3>
                  <p>version: Desktop</p>
                  <h4>Tecnologia usada:</h4>
                <div className='row'>
                  <div className='col-3'>
                    <GrReactjs className='react'/>
                  </div>
                  <div className='col-3'>
                    <BsFillBootstrapFill className='bootstrap'/>  
                  </div>
                  <div className='col-3'>
                    <AiFillHtml5 className='html5'/>
                  </div>
                </div>
                <div className='text-center mt-4'>
                  <a href='https://github.com/FxIvan/delivery-jet'>Delivery Jet</a>
                </div>

                <div className='mt-3'>
                  <h3>Metalurgica Web</h3>
                  <p>version: Desktop</p>
                  <h4>Tecnologia usada:</h4>
                <div className='row'>
                  <div className='col-3'>
                    <AiFillHtml5 className='html5'/>
                  </div>
                  <div className='col-3'>
                    <BsFillBootstrapFill className='bootstrap'/>
                  </div>
                </div>
                <div className='text-center mt-4'>
                  <a href='https://github.com/FxIvan/delivery-jet'>Metalurgica Web</a>
                </div>
                </div>

                <div className='mt-3'>
                  <h3>Effort Tienda</h3>
                  <p>version: Desktop, Mobile</p>
                  <h4>Tecnologia usada:</h4>
                <div className='row'>
                  <div className='col-3'>
                    <AiFillHtml5 className='html5'/>
                  </div>
                  <div className='col-3'>
                    <BsFillBootstrapFill className='bootstrap'/>  
                  </div>
                  <div className='col-3'>
                    <DiSass className='sass'/>
                  </div>
                </div>
                <div className='text-center mt-4'>
                  <a href='https://effortindumentaria.000webhostapp.com/'>Effort Tienda</a>
                </div>
                </div>
                <div className='mas-proyecto-en text-center mt-4'>
                  <h4>Mas proyectos en</h4>
                  <a href='github.com/FxIvan'>github.com/FxIvan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='text-center footer-container'>
        <div>
          <img src={logo} alt='logo'/>
        </div>
        <div>
          <p>© Almendra Ivan | 2022 </p>
        </div>
      </footer>

    </div>
  )
}
