import { Outlet } from 'react-router-dom';

const CamperDetailsPage = () => {
  return (
    <div>
      <div>Camper Details Page</div>
      <Outlet />
    </div>
  );
};

export default CamperDetailsPage;