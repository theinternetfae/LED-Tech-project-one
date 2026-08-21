function Navigation() {
    return (
        <div className="side-bar">
            <h1>EliteCo</h1>    
            
            <section className="nav-cont">
                
                <div className="nav">
                    <i className="bi bi-columns-gap"></i>
                    <p>Dashboard</p>
                </div>

                <div className="nav">
                    <i className="bi bi-clipboard2-check"></i>
                    <p>Task Management</p>
                </div>

                <div className="nav">
                    <i className="bi bi-piggy-bank"></i>
                    <p>Budget</p>
                </div>
                
                <div className="nav">
                    <i className="bi bi-chat-dots"></i>
                    <p>Communication</p>
                </div> 

                <div className="nav">
                    <i className="bi bi-easel2"></i>
                    <p>Event Management</p>
                </div>

                <div className="nav">
                    <i className="bi bi-people"></i>
                    <p>Vendor Management</p>
                </div> 
                 
                <div className="nav">
                    <i className="bi bi-envelope-paper"></i>
                    <p>Contracts</p>
                </div>

                <div className="nav">
                    <i className="bi bi-receipt-cutoff"></i>
                    <p>Invoices</p>
                </div>
            
            </section>
            
            <section className="quick-handler">
                
                <div className="acc-handler one">
                    <i className="bi bi-gear"></i>
                    <p>Settings</p>
                </div>
                
                <span className="divider"></span>

                <div className="acc-handler two">
                    <i className="bi bi-box-arrow-in-left"></i>
                    <p>Log Out</p>
                </div>
            
            </section>
        </div>
    )
}

export default Navigation;