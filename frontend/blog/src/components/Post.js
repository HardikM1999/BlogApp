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
                id: 0,
                name: '',
                author: {
                    user: 0,
                    name: '',
                    author_info: ''
                },
                blog_post: '',
                post_date: '',
                likes: -1,
                dislikes: -1
            },
            author: {
            },
            comments: []
        }
    }
    componentDidMount()
    {
        //console.log(this.props.location.pathname);
        axios.get('http://127.0.0.1:8000' + this.props.location.pathname).then((response)=> {
            //console.log(response);
            this.setState({ post: response.data[0]})
            this.setState({comments: response.data[0].comments})
            //console.log(this.state.comments);
            //console.log(this.state.post);
            // axios.get('http://127.0.0.1:8000/author/' + this.state.post.author).then((response) => {
            //     this.setState({author: response.data[0]})
            //     //console.log(this.state.author);
            // })
         })
    }
    render()
    {
        let comments = this.state.comments;
        return(
            <div className="bg-post">
                <Link className="text-dark" to="/"><b>Back</b></Link>
                <div className="post">
                    <h3 className="text-primary">
                        {this.state.post.name}
                    </h3>
                    <p>
                        <b>Author</b> : {this.state.post.author.name}
                    </p>
                    <p>
                        <b>Post</b>:<br />  {this.state.post.blog_post}
                    </p>
                    <p>
                        <b>Date</b> : {this.state.post.post_date}
                    </p>
                    <p>
                        <b>Likes</b> : {this.state.post.likes}
                    </p>
                    <p>
                        <b>Dislikes</b> : {this.state.post.dislikes}
                    </p>
                </div>
                <br />
                <div className="comments">
                <h4 className="text-primary">Comments</h4>
                    {
                        comments.map((com,index) =>
                            <div className="comment">
                                <Card className="card">
                                    <CardText><b>{index+1}</b>. {com.comment}</CardText>
                                    <CardText>Date: {com.post_date}</CardText>
                                </Card>
                                <br />
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}


export default Post;