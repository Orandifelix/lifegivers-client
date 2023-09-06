import React from 'react';
import DonationCenter from './DonationCenter';

const DonationCenterList = () => {
    const [centers, setCenters] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000')
        .then((response) => response.json())
        .then((data) => setCenters(data));
    }, []);

  return (
    <div>
      <h1>Donation Centers</h1>
      {centers.map((center) => (
        <DonationCenter key={center.id} center={center} />
      ))}
    </div>
  );
};

export default DonationCenterList;
