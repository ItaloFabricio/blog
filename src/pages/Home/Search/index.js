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
    const [form, setForm] = useState ([]);

    useEffect(() =>{

        if(word){
            api.get(`/posts?q=${word}`)
            .then((response) => {
                setSearch(response.data);
            })
        }

    }, [word])

    function onChange(event){

        // Desestruturação do nome e valor da propriedade do input do campo
        const {value, name} = event.target;

        //Pegando o valor antigo e adicionando o caracter novo
        setForm({...form, [name]: value});

        console.log(form);

    }

    function handleSearch(e){
        e.preventDefault();

        setWord(form.search);
    }

    

    return(
        <>
            <Header></Header>

            
            <section className="container">

                <h6 className="uppercase color-primary text-center">
                    {search.length} resultados.
                </h6>

                <h4 className="text-center">"{word}"</h4>

                <form onSubmit={handleSearch}>
                    <div className="row">
                        <div className="grid-2 disappear"></div>
                        <div className="grid-8 disappear flex-center">
                            <input type="text" name="search" placeholder="Buscar..." onChange={onChange}></input>
                            <button className="btn ml-2">Buscar</button>
                        </div>
                        <div className="grid-2 disappear"></div>
                    </div>
                </form>

                
                <div className="row">


                    {
                        search.map((item) => {
                             return <Card key={item.id} content={item}></Card>
                        })
                    }
                        

                </div>
            </section>
            

            <Footer></Footer>
        </>
    );

}

export default Search;