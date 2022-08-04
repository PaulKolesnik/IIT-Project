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
                                                <img
                                                      src={`${process.env.REACT_APP_API_URL
                                                            }/post/photo/${post._id}`}
                                                      alt={post.title}
                                                      onError={i =>
                                                            (i.target.src = `${UserImg}`)
                                                      }
                                                      className="img-thunbnail mb-3"
                                                      style={{ height: "200px", width: "100%" }}
                                                />
                                                <h5 className="card-title">{post.title}</h5>
                                                <p className="card-text">
                                                      {post.message}
                                                </p>
                                                <br />
                                                <p className="font-italic mark">
                                                      Posted by{" "}

                                                      {sender}{" "}

                                                </p>
                                                <Link
                                                      to={`/post/${post._id}`}
                                                      className="btn btn-raised btn-secondary btn-sm">
                                                      Edit Feed
                                                </Link>
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