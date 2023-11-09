//Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

//Images 


const Post = () => {

    return(
        <>
            <Header></Header>

            <section className="container">
                <h6 className="uppercase color-primary text-center">Games</h6>
                <h3 className="text-center">O que tem de novo no PS5 ?</h3>

                <div className="flex-center my-3">
                    <div className="profile">
                        <img src="profile/ny.jpg" className="profile-img"></img>
                    </div>
                    <div className="ml-2">
                        <h6 className="color-primary">Italo</h6>
                        <h6 className="color-gray">Author</h6>
                    </div>
                    <p className="ml-4">Aug 2, 2023 - 8 min read</p>
                </div>

                <div className="img-banner hidden">
                    <img src="img/05.png"></img>
                </div>

                <div className="row my-3">
                    <h4>Esse aqui é o primeiro título</h4>
                    <p className="mt-1">
                        Donec sagittis quam augue, a malesuada neque facilisis nec. 
                        Quisque suscipit dictum felis vel varius. Phasellus nec 
                        risus malesuada, semper tellus quis, dapibus enim.
                        Phasellus nec  risus malesuada.

                        Donec sagittis quam augue, a malesuada neque facilisis nec. 
                        Quisque suscipit dictum felis vel varius. Phasellus nec 
                        risus malesuada, semper tellus quis, dapibus enim.
                        Phasellus nec  risus malesuada.
                    </p>
                </div>

                <div className="row">
                    <div className="grid-3 disappear"></div>
                    <div className="grid-6 card">
                        <div className="row">
                            <div className="grid-3 flex-center pl-1">
                                <div className="prfile-big">
                                    <img src="profile/ny.jpg"></img>
                                </div>
                            </div>
                            <div className="grid-9">
                                <h6 className="color-primary">ítalo Fabrício</h6>
                                <h6 className="color-gray">Author</h6>
                                <p className="mt-1">
                                    Donec sagittis quam augue, a malesuada neque facilisis nec. 
                                    Quisque suscipit dictum felis vel varius. Phasellus nec 
                                    risus malesuada, semper tellus quis, dapibus enim.
                                    Phasellus nec  risus malesuada.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-3 disappear"></div>
                </div>
            </section>

            <Footer></Footer>
        </>
    );

}

export default Post;