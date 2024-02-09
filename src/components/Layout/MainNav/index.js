import "./main-nav.scoped.scss"
import menuData from "./main-menu.js";


const MainNav = () => {
    return(
        <div className="main-nav-container">
            <div className="container">
                <nav className="main-nav">
                    <ul>
                        {
                            menuData.map((menuItem) => {
                                return (
                                    <li key={JSON.stringify(menuItem)}>
                                        <a href="/">
                                            <img src={menuItem.icon} alt="" />
                                            <span className="text">{menuItem.title}</span>
                                        </a>

                                        {

                                            menuItem.submenu &&

                                            <div className="submenu">
                                            <div className="row">
                                            {
                                                menuItem.submenu && menuItem.submenu.map((submenuItem) => {
                                                    return (
                                                        <div className="col-4" key={JSON.stringify(submenuItem)}>
                                                            <p>{submenuItem.title}</p>
                                                            {
                                                                submenuItem.items.slice(0,3).map((item) => {
                                                                        return (
                                                                            <a key={JSON.stringify(item)} href={item.path}>{item.title}</a>
                                                                        )
                                                                })
                                                            }
                                                            {
                                                                submenuItem.items.length > 3 && <a href="#" className='show-more'>+ ver mais</a>
                                                            }
                                                        </div>)
                                                })
                                            }
                                            </div>
                                        </div>

                                        }
                                        

                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                </nav>
            </div>
        </div>
    )   
}

export default MainNav;