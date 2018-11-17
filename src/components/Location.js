import React from 'react';
import preload from './locations.json';
import LocationCard from './LocationCard';

const Location = (props) => {
  const { searchTerm } = props
  return (
    <div>
      <div>
        <div>
          <h2>Preferred Locations</h2>
        </div>
      </div>
      <div>
        {preload.data
          .filter(location => `${location.name} ${location.zone} ${location.region}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
          .map(location => <LocationCard key={location.id} {...location} />)}
      </div>
    </div>
  )
}
export default Location;
