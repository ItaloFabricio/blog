const Banner = ( {content} ) => {
    return(
        <>
           
           <section className="container">
                <div className="img-banner hidden">
                    <img src={content.imageUrl}></img>
                </div>
                <div className="row mt-3">
                    <h6 className="color-gray text-center">{content.date}</h6>
                    <a href="" className="link-title">
                        <h2 className="mt-1 text-center">
                            {content.title}
                        </h2>
                    </a>

                    <p className="my-2 text-center">
                        {content.resume}
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