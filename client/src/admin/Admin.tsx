import { Route, Routes } from 'react-router-dom';
import StudentList from './StudentList'
import AddEvent from './AddEvent'
import EventList from './EventList'
import EditEvent from './EditEvent';
import Dashboard from './Dashboard';
import Layout from './Layout';
import TransactionList from './TransactionList';
import Defaulters from './Defaulters';
import Attendance from './Attendance';

const Admin = () => {
  return (
    <div>
        <Layout>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/students" element={<StudentList />} />
                <Route path="/events" element={<EventList />} />
                <Route path="/transactions" element={<TransactionList />} />
                <Route path="/add-event" element={<AddEvent />} />
                <Route path="/edit-event/:eventId" element={<EditEvent />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/defaulter" element={<Defaulters />} />
            </Routes>
        </Layout>
    </div>
  )
}

export default Admin