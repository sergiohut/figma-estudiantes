import "./Navigation.css"

const Navigation = () =>{
    //Más adelante convertirlo en un Navlink al dashboard
    return (
        <aside>
            <button className="dashBtn">
                <img className="statIcon" src="https://res.cloudinary.com/ddu2qdsdp/image/upload/v1678441902/Ucademy/table_chart_view_FILL0_wght400_GRAD0_opsz48_w53s9v.png" alt="stat icons"/>
                <h4>Dashboard</h4>
            </button>
        </aside>
    )
}

export default Navigation;