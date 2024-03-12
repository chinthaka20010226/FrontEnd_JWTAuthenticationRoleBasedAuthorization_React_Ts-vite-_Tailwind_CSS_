import { Routes, Route, Navigate } from 'react-router-dom';
import { PATH_DASHBOARD, PATH_PUBLIC } from './paths';
import AuthGuard from '../auth/AuthGuard';
import { allAccessRole, adminAccessRole } from '../auth/auth.utils';
import Layout from '../components/layout';

import AdminPage from '../pages/dashboard/AdminPage';
import AllMessagesPage from '../pages/dashboard/AllMessagesPage';
import DashboardPage from '../pages/dashboard/DashboardPage';
import InboxPage from '../pages/dashboard/InboxPage';
import MyLogsPage from '../pages/dashboard/MyLogsPage';
import SendMessagePage from '../pages/dashboard/SendMessagePage';
import SystemLogsPage from '../pages/dashboard/SystemLogsPage';
import UserPage from '../pages/dashboard/UserPage';
import UsersManagementPage from '../pages/dashboard/UsersManagementPage';
import HomePage from '../pages/public/HomePage';
import LoginPage from '../pages/public/LoginPage';
import NotFoundPage from '../pages/public/NotFoundPage';
import RegisterPage from '../pages/public/RegisterPage';
import UnauthorizedPage from '../pages/public/UnauthorizedPage';



const GlobalRouter = () => {
    return (
        <Routes>
            {/* <Route path='' element /> */}
            <Route element={<Layout />}>
                {/* Public routes */}
                <Route index element={<HomePage />} />
                <Route path={PATH_PUBLIC.register} element={<RegisterPage />} />
                <Route path={PATH_PUBLIC.login} element={<LoginPage />} />
                <Route path={PATH_PUBLIC.unauthorized} element={<UnauthorizedPage />} />

                {/* Protected routes */}
                <Route element={<AuthGuard roles={allAccessRole} />}>
                    <Route path={PATH_DASHBOARD.dashboard} element={<DashboardPage />} />
                    <Route path={PATH_DASHBOARD.sendMessage} element={<SendMessagePage />} />
                    <Route path={PATH_DASHBOARD.inbox} element={<InboxPage />} />
                    <Route path={PATH_DASHBOARD.myLogs} element={<MyLogsPage />} />
                    <Route path={PATH_DASHBOARD.user} element={<UserPage />} />
                </Route>

                <Route element={<AuthGuard roles={adminAccessRole} />}>
                    <Route path={PATH_DASHBOARD.admin} element={<AdminPage />} />
                    <Route path={PATH_DASHBOARD.usersManagement} element={<UsersManagementPage />} />
                    <Route path={PATH_DASHBOARD.allMessages} element={<AllMessagesPage />} />
                    <Route path={PATH_DASHBOARD.systemLogs} element={<SystemLogsPage />} />
                </Route>

                {/* Catch all 404 */}
                <Route path={PATH_PUBLIC.notFound} element={<NotFoundPage />} />
                <Route path='*' element={<Navigate to={PATH_PUBLIC.notFound} replace />}/>
            </Route>
        </Routes>
    )
}

export default GlobalRouter;