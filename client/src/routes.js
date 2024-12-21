import Authorization from "./pages/Authorization"
import MainMenu from "./pages/MainMenu"
import AdminMenu from "./pages/menus/AdminMenu"
import TripMenu from "./pages/menus/TripMenu"
import ExcursionMenu from "./pages/menus/ExcursionMenu"
import EventMenu from "./pages/menus/EventMenu"
import ClassMenu from "./pages/menus/ClassMenu"
import AttendanceMenu from "./pages/menus/AttendanceMenu"
import EmployeeListMenu from "./pages/menus/EmployeeMenu"
import { ADMIN_ROUTE, ATTENDANCE_ROUTE, CLASSES_ROUTE, EVENTS_ROUTE, EXCURSIONS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, TRIPS_ROUTE, EMPLOYEES_ROUTE} from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminMenu
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Authorization
    },
    {
        path: EMPLOYEES_ROUTE,
        Component: EmployeeListMenu
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainMenu
    },
    {
        path: LOGIN_ROUTE,
        Component: Authorization
    },
    {
        path: TRIPS_ROUTE,
        Component: TripMenu
    },
    {
        path: EXCURSIONS_ROUTE,
        Component: ExcursionMenu
    },
    {
        path: EVENTS_ROUTE,
        Component: EventMenu
    },
    {
        path: CLASSES_ROUTE,
        Component: ClassMenu
    },
    {
        path: ATTENDANCE_ROUTE,
        Component: AttendanceMenu
    }
]