//Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";


//Components
import Hero from "./Hero";
import Banner from "./Banner";
import Card from "./Card";
import Main from "./Main";

//Figuras
import star from "../../svg/icon-star.svg"

//API
import api from "services/api";

//Hooks
import { useState, useEffect } from "react";

const Home = () => {

    //Variaveis de estado
    const [main, setMain] = useState([]);
    const [mostseen, setMostseen] = useState([]);
    const [banner, setBanner] = useState([]);


    //Faça isso quando o componente montar
    useEffect(() => {

        //Requisição para posts com nota star = 5
        api.get('/posts?star=5&_limit=2&order=desc')
        .then((r) => {
            setMain(r.data);
        })

        //Requisição para banner
        api.get('/posts?_sort=date&_order=desc&_limit=1')
        .then((r) => {
            setBanner(r.data);
        })

        //Requisição para posts mais vistos
        api.get('/posts?_limit=3&order=desc')
        .then((r) => {
            setMostseen(r.data);
        })

    }, [])


    return(
        <>
            <Header></Header>

            <Hero></Hero>

            <section className="container">
                <div className="row">
                    <div className="grid-5 pt-5 pb-3">
                        <img src={star} className="icon-l"></img>
                        <h2 className="mt-1">Os melhores e mais bem votados posts do mês.</h2>
                        <p className="mt-2">
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard.
                        </p>
                    </div>
                    <div className="grid-7">
                        
                        {
                        main.map((item) => {
                            return <Main key={item.id} content={item}></Main>
                        })
                        }
                        
                    </div>
                </div>
            </section>




            <div className="bg-section">
                <section className="container">
                    <h3 className="ml-2 mb-3">Mais vistos</h3>
                    <div className="row">


                        {
                            mostseen.map((item) => {
                                return <Card key={item.id} content={item}></Card>
                            })
                        }
                        

                    </div>
                </section>
            </div>

                    
            {
                banner.map((item) => {
                    return <Banner key={item.id} content={item}></Banner>
                })
            }

            <Footer></Footer>

        </>
    );
}

export default Home;