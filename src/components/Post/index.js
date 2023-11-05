import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import api from "../../services/api";

const Post = (props) => {

    const { idPost } = useParams();

    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        
        if(idPost){
            api.get('/articles/' + idPost)
            .then((response) => {
                setPost(response.data);

                api.get('/user/' + response.data.id_user)
                .then((response) => {
                    setUser(response.data);
                })
            })
        }
    }, [])

    return (
        <div className="post mx-2">
            <div className="img-post"></div>
            <h>{props.subtitle}</h>
            <Link to={"/articles/" + props.id}>
                <h3>{props.title}</h3>
            </Link>
            <p className="mt-1">
                {props.children}
            </p>
            <div className="flex pt-2">
                <div className="img-profile">

                </div>
                <div className="desc-profile ml-2">
                    <h6 className="color-blue">{props.author}</h6>
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default Post;