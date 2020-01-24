import React,{Component} from 'react';
import {Jumbotron,Container,Button,Card,CardBody,CardTitle,CardText,Badge} from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props){
    super(props);
        this.state = {
        data: [
        ],
        };
    }
    componentDidMount() {
    axios.get('http://127.0.0.1:8000/posts/').then((response) => {
        //console.log(response.data);  
        this.setState({data: [...response.data]});
        //
        //console.log(this.state.data);
    })
    }
    renderPosts()
    {
        let array = this.state.data;
        return(
        <div>
            <h3 className="head-text"><Badge color="primary">Recent Posts</Badge></h3>
            {
            array.map(obj =>
            <div className="post">
                <br />
                <Card>
                <CardBody>
                    <CardTitle><b><Link to={{ pathname: "/post/" + obj.id, aboutProps: { id: obj.id } }} params={{ id: obj.id }}>{obj.name}</Link></b></CardTitle>
                    <CardText>
                    {/* <b>Author</b> = {obj.author}
                    <br /> */}
                    <b>BlogPost</b> = {obj.blog_post}
                    <br />
                    <b>Date</b> = {obj.post_date}
                    </CardText>
                </CardBody>
                </Card>
            </div>
            )
    } 
      </div>
    )
  }
    render()
    {
        return(
            <div>
                {this.renderPosts()}
            </div>
        );
    }
}




export default Home;