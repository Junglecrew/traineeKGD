import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    zoom: 14
  };

  render() {
    console.log(this.props.point)
    const center = { lat: this.props.point.latitude, lng: this.props.point.longitude}
    const key = 'AIzaSyCC16ZdepSH2Jzu2yxG9_fFf_HjNBJPwaw'
    return (
      <div style={{ height: '300px', width: '110%', margin: '0 -15px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key}}
          defaultCenter={center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.point.latitude}
            lng={this.props.point.longitude}
            text={'маркер'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;