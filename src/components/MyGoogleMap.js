import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MyGoogelMap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBv2CZ0YFCtjb2D9tsd_FDW9fbBeseZTLY&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 16.981085, lng: 96.1480009 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 16.981085, lng: 96.1480009 }} />
    )}
  </GoogleMap>
));

export default MyGoogelMap;
// ReactDOM.render(<MyMapComponent isMarkerShown />,
// document.getElementById('root'));

