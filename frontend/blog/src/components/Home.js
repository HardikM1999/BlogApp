import React,{Component} from 'react';
import {Jumbotron,Container,Button,Card,CardBody,CardTitle,CardText,Badge,Pagination,PaginationItem,PaginationLink} from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Home.css';
import {browserHistory} from 'react-router';
class Home extends Component {
    constructor(props){
    super(props);
        this.state = {
        data: [
        ],
        };
    }
    componentDidMount() {
    //console.log(this.props.location);
        if(this.props.location != null)
        {
            //console.log(this.props.location.pathname);
            axios.get('http://127.0.0.1:8000/posts' + this.props.location.pathname).then((response) => {
                //console.log(response.data);  
                // this.setState({data : []});
                //console.log(response.data); 
                this.setState({data: [...response.data]});
                //
                //console.log(this.state.data);
            })
        }
        else
        {
            axios.get('http://127.0.0.1:8000/posts/' + 'date').then((response) => {
                //console.log(response.data); 
                // this.setState({data : []}); 
                //console.log(response.data);
                this.setState({data: [...response.data]});
                //
                //console.log(this.state.data);
            })
        }
    }
    renderPosts()
    {
        let array = this.state.data;
        return(
        <div>
            <h3 className="head-text"><Badge color="info">Posts</Badge></h3>
            <div className="posts_view">
            <div className="pagination">
                <Pagination>
                    <PaginationItem>
                        <PaginationLink href="/date">
                            Most Recent
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/likes">
                            Most Liked
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/dislikes">
                            Most Disliked
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </div>
            {
            array.map(obj =>
                <div className="post_view">
                <br />
                <Card className="post_card">
                <CardBody>
                    <CardTitle><h5><b><Link to={{ pathname: "/post/" + obj.id, aboutProps: { id: obj.id } }} params={{ id: obj.id }}>{obj.name}</Link></b></h5></CardTitle>
                    <CardText>
                    {/* <b>Author</b> = {obj.author}
                    <br /> */}
                    <b>BlogPost</b> = {obj.blog_post.substr(0,40) + '...'}
                    <br />
                    <b>Date</b> = {obj.post_date}
                    </CardText>
                </CardBody>
                </Card>
                </div>
            )}
            </div>
      </div>
    )
  }
    render()
    {
        return(
            <div className="posts_view">
                {this.renderPosts()}
            </div>
        );
    }
}




export default Home;