import React, {Component} from 'react'

export default class Copyright extends Component {
  render() {
    return (
      <footer className="copyright">
        Data &copy;{new Date().getFullYear()} <a target="_blank" href="https://utk.edu">UTK</a> and <a target="_blank"
                                                                                 href="http://www.uky.edu/UKHome/">UKY</a>
      </footer>
    )
  }
}

