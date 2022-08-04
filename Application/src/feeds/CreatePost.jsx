import React, { Component } from 'react';
import { AddPost } from '../services/PostsService';
import { Redirect } from 'react-router-dom';


import './feeds.css'

class CreatePost extends Component {
      constructor() {
            super()
            this.state = {
                  sender: '',
                  message: '',
                  imageUrl: '',
                  fileSize: 0,
                  loading: false,
                  isSuccessPost: false
            }
      }


      componentDidMount() {
            this.postData = new FormData()
            this.setState({ user: "user" })
      };

      isFieldsOk = () => {

            const { message, fileSize } = this.state
            if (message.length === 0) {
                  this.setState({ error: "All fields are required, Fill Message", loading: false })
                  return false;
            }
            if (fileSize > 100000) {
                  this.setState({ error: "File size should be less than 100Kb", loading: false })
                  return false;
            }

            return true;
      }

      handleChange = (name) => (event) => {
            this.setState({ error: "" })
            const value = name === 'imageUrl' ? event.target.files[0] : event.target.value;
            const fileSize = name === 'imageUrl' ? event.target.files[0].size : 0;
            this.postData.set(name, value);
            if (name === 'imageUrl') {
                  this.setState({ [name]: value.name, fileSize: fileSize })
            }
            else {
                  this.setState({ [name]: value, fileSize: fileSize })
            }
      };

      clickSubmit = (event) => {
            event.preventDefault();
            this.setState({ loading: true })

            if (this.isFieldsOk()) {

                  AddPost(localStorage.getItem("email")
                        , this.state.message, this.state.imageUrl)
                        .then(data => {
                              console.log(data)
                              this.setState({ isSuccessPost: true })
                        });
            }
      };

      newPostForm = () => (
            <form>
                  <div className="form-group">
                        <label className="text">Message</label>
                        <input onChange={this.handleChange("message")} type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                        <label className="text">Add Image</label>
                        <input onChange={this.handleChange("imageUrl")} type="file" accept="image/*" className="form-control" />
                  </div>

                  <button onClick={this.clickSubmit} className="btn btn-raised btn-primary">Create post</button>
            </form>
      )


      render() {
            const {
                  sender,
                  message,
                  error,
                  loading,
                  isSuccessPost
            } = this.state;

            if (isSuccessPost) {
                  return <Redirect to={`/feeds`} />
            }

            return (
                  <div className="container">
                        <h2 className="mt-5 mb-5">Create a new post</h2>
                        <div className="alert alert-danger"
                              style={{ display: error ? "" : "none" }}>
                              {error}
                        </div>

                        {loading
                              ? <div className="text-center"><h2>Load Data...</h2></div>
                              : ""}
                        {this.newPostForm()}
                  </div>
            );
      }
}

export default CreatePost;