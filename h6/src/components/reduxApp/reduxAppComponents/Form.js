import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { createPost } from './redux/actions'

class Form extends React.Component{
  state = {
    title:'',
  }

  onSubmit = (event) => {
    event.preventDefault()

    const { title } = this.state;
    // const { addNewPost } = this.props;
    // if (!title.trim()) {
    //   return
    // }
    
    const newPost = {
      title,
      id: Date.now().toString(),
    };

    this.props.createNewPost(newPost);

    this.setState({title : ''})
  }

  inputHandler = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render() {
    return (
      <form
        className='redux-form'
        onSubmit={this.onSubmit}
      >
        <h2>Title Post</h2>
        <input
          type='text'
          placeholder='Enter text'
          value={this.state.title}
          onChange={this.inputHandler}
          name='title'
        />
        <button type='submit'>Create Post</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewPost: (data) => {
      dispatch(createPost(data))
    }
  }
}

export default connect(mapDispatchToProps)(Form)