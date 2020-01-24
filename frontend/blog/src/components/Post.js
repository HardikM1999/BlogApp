import React,{Component} from 'react';
import {Jumbotron,Container,Button,Card,CardBody,CardTitle,CardText,Badge} from 'reactstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Post.css';
import {Link} from 'react-router-dom';

class Post extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            post: {
            },
            author: {
            }
        }
    }
    componentDidMount()
    {
        //console.log(this.props.location.pathname);
        axios.get('http://127.0.0.1:8000' + this.props.location.pathname).then((response)=> {
            this.setState({ post: response.data[0]})
            //console.log(this.state.post);
            axios.get('http://127.0.0.1:8000/author/' + this.state.post.author).then((response) => {
                this.setState({author: response.data[0]})
                //console.log(this.state.author);
                //console.log();
            })
         })
    }
    render()
    {
        return(
            <div className="bg-post">
                <Link to="/">Back</Link>
                <div className="post">
                    <h3 className="text-primary">
                        {this.state.post.name}
                    </h3>
                    <p>
                        <b>Author</b> : {this.state.author.name}
                    </p>
                    <p>
                        <b>Post</b> : {this.state.post.blog_post}
                    </p>
                    <p>
                        <b>Date</b> : {this.state.post.post_date}
                    </p>
                </div>
            </div>
        );
    }
}


export default Post;