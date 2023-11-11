//Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

//Card
import Card from "../Card";

//Paramentros da URL
import { useParams } from "react-router-dom";

//Hooks
import { useState, useEffect } from "react";

//API
import api from "services/api";

const Search = () => {

    const {word_search} = useParams();

    //Variaveis de estado
    const [word, setWord] = useState(word_search);
    const [search, setSearch] = useState([]);

    useEffect(() =>{

        if(word){
            api.get(`/posts?q=${word}`)
            .then((response) => {
                setSearch(response.data);
            })
        }

    }, [word])

    return(
        <>
            <Header></Header>

            <div className="bg-section">
                <section className="container">
                    <h3 className="ml-2 mb-3">Pesquisa</h3>
                    <div className="row">


                        {
                            search.map((item) => {
                                return <Card key={item.id} content={item}></Card>
                            })
                        }
                        

                    </div>
                </section>
            </div>

            <Footer></Footer>
        </>
    );

}

export default Search;