//Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

//Images
import LogoBlog from '../../../svg/blog.svg'

const About = () => {

    return(
        <>

            <Header></Header>

            <section className="container flex-container">
                <div className="row mt-9">
                    <div className="grid-4">
                        <h1 className="h0">blog<span>.</span></h1>
                        <p>
                            O blog é um projeto desenvolvido em React.js
                            como prática do curso FrontPush.
                        </p>
                        <a href="" className="btn mt-2">Saber mais</a>
                    </div>
                    <div className="grid-1"></div>
                    <div className="grid-6 flex-center">
                        <img src={LogoBlog} className="illustration"></img>
                    </div>
                    <div className="grid-1"></div>
                </div>
            </section>

            <Footer></Footer>

        </>
    );

}

export default About;