import Navigation from "./Navigation.jsx";

function Layout() {
    return ( 
        <div className="layout">
            <Navigation/>

            <section className="body-cont">
                
                <div className="header">
                
                    <div className="header-one">

                        <div className="search-bar">
                            <i className="bi bi-search"></i>
                            <p>search anything</p>
                            <i className="bi bi-record-circle"></i>
                        </div>

                    </div>

                    <div className="header-two">
                        <i className="bi bi-circle-half"></i>

                        <div className="with-notif">    
                            <i className="bi bi-clock"></i> 
                            <span className="notif notif-one">
                                <p>7</p>
                            </span>
                        </div>
                        
                        <div className="with-notif">
                            <i class="bi bi-bell"></i>
                            <span className="notif notif-two">
                                <p>14</p>
                            </span>
                        </div>

                        <img src="/images/Me.jpeg" alt="Me" />
                    </div>
                
                </div>
            
            </section>
        </div>
    );
}

export default Layout;