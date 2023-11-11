import Logo from '../../svg/blog-logo.svg';

//Link
import { Link, useNavigate } from 'react-router-dom';

//Hooks
import { useState } from 'react';

const Header = () => {

    const initialValueForm = {
        search: ''
    }

    //Variaveis de estado
    const [form, setForm] = useState ([initialValueForm]);

    //useNavigate para redirecionar
    const navigate = useNavigate();

    function onChange(event){

        // Desestruturação do nome e valor da propriedade do input do campo
        const {value, name} = event.target;

        //Pegando o valor antigo e adicionando o caracter novo
        setForm({...form, [name]: value});

        console.log(form);

    }

    function handleSearch(e){
        e.preventDefault();

        navigate(`/search/${form.search}`);

    }

    return(
        <>
            <header className="py-1 px-2">
                <nav>
                    <div className="logo">
                        <Link to="/"><img src={Logo}></img></Link>
                    </div>
                    <ul className='menu'>
                        <li><Link to='/about' className='p-1'>Sobre</Link></li>
                        <li><Link  to='/contact' className='p-1'>Contato</Link></li>
                    </ul>
                </nav>
                <div className='bx'></div>
                <div className='flex-start-row'>
                        <div className='search'>
                            <form className='flex' onSubmit={handleSearch}>
                                <input type='text' name='search' placeholder="Buscar..." onChange={onChange}></input>
                                <button className="btn-search"></button>
                            </form>
                        </div>
                        <div className='cta-desktop-1 ml-3'>
                            <Link to='/login' className='btn'>Login</Link>
                        </div>
                        <div className='cta-mobile mr-1'>
                            <a href=''  className='link'></a>
                        </div>
                 </div>
                
            </header>





            <div className='relative'>
                <div className='menu-mobile'>
                    <ul className='nav-mobile'>
                        <li><Link to='/about' className='link-menu-mobile'>Sobre</Link></li>
                        <li><Link to='/contact' className='link-menu-mobile'>Contato</Link></li>
                        <li className='py-2 pl-2'>
                            <form className='flex'>
                                <input type='text' name='search' id='' placeholder='Buscar..'></input>
                                <button className='btn-search'></button>
                            </form>                           
                        </li>
                    </ul>
                    
                </div>
            </div>
        </>
    );
}

export default Header;