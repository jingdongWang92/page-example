import React, { Component} from 'react';

export default class MapIframe extends Component{

  componentDidMount() {
    const iframeMap = this.refs.iframe_map;
    iframeMap.children[0].srcdoc = this.props.code;
  }


  componentWillReceiveProps(nextProps) {
    const iframeMap = this.refs.iframe_map;
    iframeMap.children[0].srcdoc = nextProps.code;
  }

  iframe() {
    return {
      __html: this.props.iframe
    }
  }

  render() {
    return (
      <div style={{border: 'none'}} ref="iframe_map" dangerouslySetInnerHTML={ this.iframe() }>
      </div>
    );
  }
};
