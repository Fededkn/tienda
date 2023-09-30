import "bootstrap/dist/css/bootstrap.min.css";
import "./MainLayout.css"

const MainLayout = ({children}) => {
    return (
        <div>
            <main className="mainLayout">{children}</main>
        </div>
    )
}

export default MainLayout
