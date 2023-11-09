//Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

//Images
import Logo from "../../../svg/blog-logo2.svg"

const Login = () => {

    return(
        <>
            <Header></Header>

            <section className="container">
                <div className="row flex-center">
                    <img src={Logo} className="icon-l"></img>
                </div>

                <div className="row">
                    <div className="grid-4 disappear"></div>
                    <div className="grid-4">
                        <h6 className="text-center">Olá, faça o login para continuar.</h6>

                        <input type="text" className="mt-2" name="user" id="" placeholder="Digite aqui"></input>
                        <input type="password" className="mt-2" name="password" id="" placeholder="Digite aqui"></input>

                        <div className="card-danger p-2 my-1">
                            <h6 className="h7 color-red">Olá, isso é uma mensagem de erro.</h6>
                        </div>

                        <div className="card-success p-2 my-1">
                            <h6 className="h7 color-green">Olá, isso é uma mensagem de erro.</h6>
                        </div>

                        <div className="card-warning p-2 my-1">
                            <h6 className="h7 color-yellow">Olá, isso é uma mensagem de erro.</h6>
                        </div>

                        <div className="card-info p-2 my-1">
                            <h6 className="h7 color-primary">Olá, isso é uma mensagem de erro.</h6>
                        </div>

                        <button className="btn w-100 mt-2">Entrar</button>
                    </div>
                    <div className="grid-4 disappear"></div>
                </div>
            </section>

            <Footer></Footer>
        </>
    );

}

export default Login;