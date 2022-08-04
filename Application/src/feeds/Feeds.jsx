import React, { Component } from 'react';
import { GetAllPosts } from "../services/PostsService"
import UserImg from '../assets/images/user.jpg'
import { Link } from 'react-router-dom'
import './feeds.css'
class Feeds extends Component {

      constructor() {
            super()
            this.state = {
                  posts: []
            }
      }

      loadPosts = page => {
            GetAllPosts(page).then(allPosts => {
                  console.log(allPosts)
                  this.setState({ posts: allPosts });
            });
      };

      componentDidMount() {
            this.loadPosts(this.state.page);
      }

      //small cards of all users with dafault image
      renderPosts = posts => {
            return (
                  <div className="row">
                        {posts.map((post, i) => {
                              const sender = post.sender
                                    ? post.sender
                                    : "Random User";

                              return (
                                    <div className="card col-md-6" key={i}>
                                          <div className="card-body">
                                                <img src={`${UserImg}`}
                                                      className="img-thunbnail mb-3"
                                                      style={{ height: "200px", width: "100%" }}
                                                />
                                                <p className="font-italic mark">
                                                      The Sender {" "}
                                                      {sender}{" "}
                                                </p>
                                                <p className="card-text">
                                                      The Message: {post.message}
                                                </p>
                                                <br />

                                                <h6>The Content Publish to all users</h6>
                                          </div>
                                    </div>
                              );
                        })}
                  </div>
            );
      };

      render() {
            const { posts } = this.state;
            return (
                  <div className="container">
                        <Link
                              to={`/newPost/`}
                              className="btn btn-primary custumBtn">
                              Create New Feed
                        </Link>
                        <h2 className="mt-5 mb-5">
                              {!posts.length ? "Waiting to data from Server.." : "All The Feeds"}
                        </h2>
                        {this.renderPosts(posts)}

                  </div>
            );
      }
}

export default Feeds;