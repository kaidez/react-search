import React from 'react'
import { render } from 'react-dom'

class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.buildForm = this.buildForm.bind(this);
  }

  buildForm(event) {
    console.log("build form");
    return;
  } // buildForm()

  handleChange(event) {
    const searchBox = document.getElementById('searchbox').value,
          searchBoxHasCharacters = searchBox.match(/^[a-z0-9]{3}/gi),
          searchBoxHasWhitespace = searchBox.match(/[\s]/gi);

    if(searchBox.length >= 3 && !searchBoxHasWhitespace) {
      this.buildForm()
    } else {
      if(searchBoxHasWhitespace) {
        console.log("sdafasdf")
      }
    }

  } // handleChange()

  componentDidMount() {
    fetch('data.json')
      .then(function(data) {
        console.log('status: ', data.status);
    });
  }

  render () {
    return(
      <form className="searchbox-container">
        <input
          id = "searchbox"
          className="searchbox__field"
          type="text"
          placeholder = "Find clients..."
          onChange={this.handleChange} />
      </form>
    )
  }
}

render(
  <Searchbox />,
  document.getElementById('app')
  )