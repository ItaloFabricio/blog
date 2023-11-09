const Banner = () => {
    return(
        <>
           
           <section className="container">
                <div className="img-banner hidden">
                    <img src="img/05.png"></img>
                </div>
                <div className="row mt-3">
                    <h6 className="color-gray text-center">01 NOV 2023</h6>
                    <a href="" className="link-title">
                        <h2 className="mt-1 text-center">
                            Ainda vale a pena o PS4 Pro em 2024 ?
                        </h2>
                    </a>

                    <p className="my-2 text-center">
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum.
                    </p>
                    <div className="flex-center">
                        <a href="" className="flex-center">Ler mais</a>
                    </div>
                </div>
           </section>

        </>
    );
}

export default Banner;