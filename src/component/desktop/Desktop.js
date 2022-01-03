import React from 'react'
import './desktop.css'
import sombraneon from '../img/sombraneon.png'
import saludando from '../img/saludandoastronauta.jpg'
import fotoCv from '../img/fotoCv.jpg'
import Typed from 'react-typed'
import {
  AiFillHtml5,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from 'react-icons/ai'
import { DiSass } from 'react-icons/di'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { IoLogoJavascript } from 'react-icons/io'
import { GrReactjs } from 'react-icons/gr'
import { SiNodedotjs } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'

export const Desktop = () => {
  return (
    <div>
      <section className="section-1-background d-flex align-items-center">
        <div className="section-1-d container">
          <div className="section-neond">
            <img src={sombraneon} id="sombraneond" />
          </div>
          <div className="info-sectiond d-flex align-items-center row">
            <div className="col-6 text-center  section-fotod m-auto">
              <img src={fotoCv} alt="fotoCv" id="fotoCvd" />
            </div>
            <div className="col-6 w-50">
              <h2>Bienvenido a mi Portafolio</h2>
              <Typed
                strings={[
                  'Hola mi nombre es Ivan, tengo 21 años y soy de la provincia de Buenos Aires Argentina, me dedico al desarrollo Frontend',
                ]}
                typedSpeed={20}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="text-center mt-3">
            <h2>Herramientas</h2>
          </div>
          <div className="row herramientas-container container col-12 m-auto">
            <div className="col-6 row ">
              <div className="col-12 herramientasd">
                <h3 className="text-center">Diseño web</h3>
                <div className="col-12 d-flex justify-content-around mt-4">
                  <AiFillHtml5 size={80} className='html5'/>
                  <DiSass size={80} className='sass'/>
                  <BsFillBootstrapFill size={80} className='bootstrapd'/>
                </div>
              </div>

              <div className="col-12 scv-d">
                <h3 className="text-center">Sitema de Control de Version</h3>
                <div className="col-12 d-flex justify-content-evenly align-items-center mt-4">
                  <FaGitAlt size={80} className="col-3 git" />
                  <AiFillGithub size={80} className="col-3 github" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="col-12 herramientasd">
                <div>
                  <h3 className="text-center">FrontEnd</h3>
                </div>
                <div className="col-6 justify-content-around d-flex  mt-4 m-auto">
                  <IoLogoJavascript size={80}  className='js'/>
                  <GrReactjs size={80} className='react'/>
                </div>
              </div>
              <div className="col-12 herramientasd">
                <div>
                  <h3 className="text-center">BackEnd</h3>
                </div>
                <div className="col-6 text-center  mt-4 m-auto">
                  <SiNodedotjs size={80} className='nodejs'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='text-center mt-3'>
            <h2>Contacto</h2>
        </div>
        <div>
            <div className='text-center'>  
                <div>
                    <span>Telefono:<p>1136887781</p></span>
                </div>
                <div>
                    <span>Correo Electronico:<p>almendraivan210814@gmail.com</p></span>
                </div>
            </div>
            <div className='d-flex text-center col-6 m-auto justify-content-center'>
                <div className='d-grid col-3'>
                    <span>Whatsapp</span>
                    <a href='https://api.whatsapp.com/send?phone=541136887781'><AiOutlineWhatsApp className='whatsappD' size={80}/></a>
                </div>
                <div className='d-grid col-3'>
                    <span>LinkedIn</span>
                    <a href='https://www.linkedin.com/in/ivan-almendra-2000/'><AiFillLinkedin className='linkedinD' size={80}/></a>
                </div>
            </div>
        </div>
      </section>
      <section>
        <div className='row col-12 container-fluid d-flex justify-content-evenly m-auto mt-3'>
                <div className='text-center mt-3 mb-3'>
                    <h2>Algunos de mis Proyectos</h2>
                </div>
                <div className='col-2 row card-d text-center'>
                    <div><h3>Login</h3></div>
                    <div><p>version:<br/>Desktop</p></div>
                    <div><a href='https://github.com/FxIvan/login/tree/loginTerminado'>Login</a></div>
                    <div className='mt-4'><GrReactjs className='react' size={30}/> <BsFillBootstrapFill className='bootstrap' size={30}/> <AiFillHtml5 className='html5' size={30}/> </div>
                </div>
                <div className='col-2 row card-d text-center'>
                    <div><h3>Delivery Jet</h3></div>
                    <div><p>version: Desktop</p></div>
                    <div><a href='https://github.com/FxIvan/delivery-jet'>Delivery Jet</a></div>
                    <div className='mt-4'><GrReactjs className='react' size={30}/><BsFillBootstrapFill className='bootstrap' size={30}/><AiFillHtml5 className='html5' size={30}/></div>
                </div>
                <div className='col-2 row card-d text-center'>
                    <div><h3>Metalurgica Web</h3></div>
                    <div><p>version: Desktop</p></div>
                    <div><a href='https://github.com/FxIvan/delivery-jet'>Metalurgica Web</a></div>
                    <div className='mt-4'><AiFillHtml5 className='html5' size={30}/> <BsFillBootstrapFill className='bootstrap' size={30}/></div>
                </div>
                <div className='col-2 row card-d  text-center'>
                    <div><h3>Effort Tienda</h3></div>
                    <div><p>version: Desktop, Mobile</p></div>
                    <div><a href='https://effortindumentaria.000webhostapp.com/'>Effort Tienda</a></div>
                    <div className='mt-4'><AiFillHtml5 className='html5' size={30}/> <BsFillBootstrapFill className='bootstrap' size={30}/> <DiSass className='sass' size={30}/></div>
                </div>
        </div>
      </section>
    </div>
  )
}
