function Dashboard() {
    return ( 
        <div className="dashboard">
            
            <section className="dash-one">
                <div className="welcome">
                    <h2>Welcome Onboard!</h2>
                    <p>Let's create your first campaign, organize vendor tasks and event planning in one place.</p>
                </div>
                <button>Create event campaign</button>
            </section>

            <section className="dash-two">

                <div className="instant-stat">
                    <i className="bi bi-calendar-week-fill"></i>
                    
                    <div className="stat">
                        <p className="quantifier">456</p>
                        <p className="label">Active events</p>
                    </div>
                </div>

                <div className="instant-stat">
                    <i className="bi bi-check-circle-fill"></i>
                    
                    <div className="stat">
                        <p className="quantifier">100</p>
                        <p className="label">Completed events</p>
                    </div>
                </div>
            
                <div className="instant-stat">
                    <i className="bi bi-person-fill-check"></i>

                    <div className="stat">
                        <p className="quantifier">576</p>
                        <p className="label">Active vendors</p>
                    </div>
                </div>

                <div className="instant-stat">
                    <i className="bi bi-file-earmark-minus-fill"></i>
                    
                    <div className="stat">
                        <p className="quantifier">45</p>
                        <p className="label">Pending tasks</p>
                    </div>
                </div>

            </section>

            <section className="dash-three">
                
                <div className="activity-one">
                    <h3>Recent Activity</h3>

                    <div className="notifs-cont">
                        <div className="notif">
                            
                            <div className="notif-info">
                                <i className="bi bi-chat-square-dots"></i>
                                <div>
                                    <p className="title">New message from Decor Vendor</p>
                                    <p className="subtitle">Updated quote and layout sent</p>
                                </div>
                            </div>
                            
                            <p className="time">• 12 mins ago</p>
                        
                        </div>

                        <div className="notif">
                            
                            <div className="notif-info">
                                <i className="bi bi-chat-square-dots"></i>
                                <div>
                                    <p className="title">Invoice upload</p>
                                    <p className="subtitle">Your invoice has been uploaded successfully</p>
                                </div>
                            </div>
                            
                            <p className="time">• 14 mins ago</p>
                        
                        </div>

                        <div className="notif">
                            
                            <div className="notif-info">
                                <i className="bi bi-chat-square-dots"></i>
                                <div>
                                    <p className="title">New message from Decor Vendor</p>
                                    <p className="subtitle">Updated quote and layout sent</p>
                                </div>
                            </div>
                            
                            <p className="time">• 20 mins ago</p>
                        
                        </div>

                        <div className="notif">
                            
                            <div className="notif-info">
                                <i className="bi bi-chat-square-dots"></i>
                                <div>
                                    <p className="title">Contract pending approval</p>
                                    <p className="subtitle">Approve pending contract</p>
                                </div>
                            </div>
                            
                            <p className="time">• 25 mins ago</p>
                        
                        </div>
                    
                        <div className="notif">
                            
                            <div className="notif-info">
                                <i className="bi bi-chat-square-dots"></i>
                                <div>
                                    <p className="title">New message from Decor Vendor</p>
                                    <p className="subtitle">Updated quote and layout sent</p>
                                </div>
                            </div>
                            
                            <p className="time">• 29 mins ago</p>
                        
                        </div>
                    </div>
                </div>
                
                <div className="activity-two">
                    <h3>Upcoming events</h3>

                    <div className="notifs-cont">

                        <div className="notif">

                            <div className="notif-info">
                                <p className="title">Meeting with a client</p>
                                <p className="duration">
                                    <span>•23rd July</span>
                                    <span>•10:00 - 11:00</span>
                                </p>
                                <p className="location">Fillinging</p>
                            </div>

                            <p className="status">Confirmed</p>

                        </div>

                        <div className="notif">

                            <div className="notif-info">
                                <p className="title">Meeting with a client</p>
                                <p className="duration">
                                    <span>•23rd July</span>
                                    <span>•10:00 - 11:00</span>
                                </p>
                                <p className="location">Fillinging</p>
                            </div>

                            <p className="status">Confirmed</p>

                        </div>

                        <div className="notif">

                            <div className="notif-info">
                                <p className="title">Meeting with a client</p>
                                <p className="duration">
                                    <span>•23rd July</span>
                                    <span>•10:00 - 11:00</span>
                                </p>
                                <p className="location">Fillinging</p>
                            </div>

                            <p className="status">Confirmed</p>

                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
}

export default Dashboard;