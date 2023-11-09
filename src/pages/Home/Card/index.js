const Card = () => {
    return(
        <>
            <div className="grid-4 card hidden p-0">
                <div className="thumb hidden">
                    <a href="" className="p-0">
                        <img src="img/01.png"></img>
                    </a>
                </div>
                <div className="p-2">
                    <h6 className="color-gray">01 NOV 2023</h6>
                    <h6 className="uppercase color-primary">TECNOLOGIA</h6>
                    <a href="" className="link-title">
                        <h4 className="mt-1">Os novos macbooks M1</h4>
                    </a>

                    <p className="my-2">
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been.
                    </p>
                    <a href="" className="link p-0">Ler mais</a>
                </div>
            </div>
        </>
    );
}

export default Card;