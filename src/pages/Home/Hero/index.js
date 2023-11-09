import blog from "../../../svg/blog.svg"

import { Link } from "react-router-dom";


const Hero = () => {
    return(
        <>
           <section className="container flex-container">
                <div className="row mt-9">
                    <div className="grid-4">
                        <h1 className="h0">blog<span>.</span></h1>
                        <p>
                            Um blog para todos.
                            Escrever. Ler. Contribuir. Aprender. Conectar.
                        </p>
                        <Link to="/login" className="btn mt-2">Começar a escrever</Link>
                    </div>
                    <div className="grid-1"></div>
                    <div className="grid-6 flex-center">
                        <img src={blog} className="illustration"></img>
                    </div>
                    <div className="grid-1"></div>
                </div>
            </section>
        </>
    );
}

export default Hero;