import {Second} from "../screens/second/Second"

const PublicRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" component={<App/>}></Route>
                <Route path="/second" component={Second}></Route>
            </Routes>
        </>
    )
}

export default PublicRoutes;