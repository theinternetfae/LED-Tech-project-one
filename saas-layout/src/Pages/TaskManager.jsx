import { useEffect } from "react";

function TaskManager() {
    
    const calendarDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const calendarDates = [
        {
            blur: true,
            value: 26
        },
        {
            blur: true,
            value: 27
        },
        {
            blur: true,
            value: 28
        },
        {
            blur: true,
            value: 29
        },
        {
            blur: true,
            value: 30
        },
        {
            blur: true,
            value: 31
        },
        {
            blur: false,
            value: 1
        },
        {
            blur: false,
            value: 2
        },
        {
            blur: false,
            value: 3
        },
        {
            blur: false,
            value: 4
        },
        {
            blur: false,
            value: 5
        },
        {
            blur: false,
            value: 6
        },
        {
            blur: false,
            value: 7
        },
        {
            blur: false,
            value: 8
        },
        {
            blur: false,
            value: 9
        },
        {
            blur: false,
            value: 10
        },
        {
            blur: false,
            value: 11
        },
        {
            blur: false,
            value: 12
        },
        {
            blur: false,
            value: 13
        },
        {
            blur: false,
            value: 14
        },
        {
            blur: false,
            value: 15
        },
        {
            blur: false,
            value: 16
        },
        {
            blur: false,
            value: 17
        },
        {
            blur: false,
            value: 18
        },
        {
            blur: false,
            value: 19
        },
        {
            blur: false,
            value: 20
        },
        {
            blur: false,
            value: 21
        },
        {
            blur: false,
            value: 22
        },
        {
            blur: false,
            value: 23
        },
        {
            blur: false,
            value: 24
        },
        {
            blur: false,
            value: 25
        },
        {
            blur: false,
            value: 26
        },
        {
            blur: false,
            value: 27
        },
        {
            blur: false,
            value: 28
        },
        {
            blur: false,
            value: 29
        },
        {
            blur: false,
            value: 30
        },
        {
            blur: false,
            value: 31
        },
        {
            blur: true,
            value: 1
        },
        {
            blur: true,
            value: 2
        },
        {
            blur: true,
            value: 3
        },
        {
            blur: true,
            value: 4
        },
        {
            blur: true,
            value: 5
        },
    ]
    const today = new Date().getDate();

    return ( 
        <div className="task-manager">
            
            <section className="welcome-nav">
                
                <div className="initial">

                    <div className="welcome-message">
                        <h2>Welcome to Task Management!</h2>
                        <p>Easily manage and create tasks all in one place</p>
                    </div>

                    <button>
                        <i className="bi bi-play-circle"></i>
                        Watch tutorial    
                    </button>
                    
                    <div className="task-handler">
                        
                        <div className="display-format">
                            <i className="bi bi-grid"></i>
                            Grid
                        </div>
                        
                        <div className="add-task">
                            <i className="bi bi-plus-circle"></i>
                            Add Task
                        </div>

                    </div>
                
                </div>

                <div className="calendar-grid">
                    
                    <div className="calendar-cont">

                        <div className="grid-header">
                            {
                                calendarDays.map((d, i) => {
                                    return <span key={i}>{d}</span>
                                })
                            }
                        </div>
                        
                        <div className="grid-dates">
                            {
                                calendarDates.map((d, i) => {
                                    return <span key={i} className={`${d.value === today ? "text-[var(--accent)] border rounded-full" : ''} 
                                    ${d.blur ? 'text-[var(--muted-two)]' : ''}`}>
                                        {d.value}
                                    </span>
                                })
                            }
                        </div>

                    </div>

                </div>
            
            </section>
            
            <section className="task-status">
                
                <div className="stat-holder first">
                    <div className="about">
                        <p>Incomplete</p>
                        <i class="bi bi-three-dots-vertical"></i>
                    </div>

                    <div className="tasks-box">

                        <div className="task">

                            <div className="priority">
                                <p className="priority-status low">Low Priority</p>
                                <p className="company-name">U&C CO.</p>
                            </div>
                            
                            <p className="task-name">Company website redesign.</p>
                            
                            <div className="task-about">

                                <div className="comm-link">
                                    <div className="comment">
                                        <i className="bi bi-chat"></i>
                                        <span>3</span>
                                    </div>
                                    <div className="link">
                                        <i className="bi bi-link-45deg"></i>
                                        <span>2</span>
                                    </div>
                                </div>
                                
                                <div className="people">
                                    <i class="bi bi-plus-circle"></i>
                                    <img src="/images/Me.jpeg" alt="Me" />
                                </div>
                            
                            </div>
                        
                        </div>

                        <div className="task">

                            <div className="priority">
                                <p className="priority-status high">High Priority</p>
                                <p className="company-name">U&C CO.</p>
                            </div>
                            
                            <p className="task-name">Company website redesign.</p>
                            
                            <div className="task-about">

                                <div className="comm-link">
                                    <div className="comment">
                                        <i className="bi bi-chat"></i>
                                        <span>3</span>
                                    </div>
                                    <div className="link">
                                        <i className="bi bi-link-45deg"></i>
                                        <span>2</span>
                                    </div>
                                </div>
                                
                                <div className="people">
                                    <i class="bi bi-plus-circle"></i>
                                    <img src="/images/Me.jpeg" alt="Me" />
                                </div>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                </div>
                
                <div className="stat-holder second">
                    <div className="about">
                        <p>In progress</p>
                        <i class="bi bi-three-dots-vertical"></i>
                    </div>

                    <div className="tasks-box">

                        <div className="task">

                            <div className="priority">
                                <p className="priority-status high">High Priority</p>
                                <p className="company-name">U&C CO.</p>
                            </div>
                            
                            <p className="task-name">Company website redesign.</p>
                            
                            <div className="task-about">

                                <div className="comm-link">
                                    <div className="comment">
                                        <i className="bi bi-chat"></i>
                                        <span>3</span>
                                    </div>
                                    <div className="link">
                                        <i className="bi bi-link-45deg"></i>
                                        <span>2</span>
                                    </div>
                                </div>
                                
                                <div className="people">
                                    <i class="bi bi-plus-circle"></i>
                                    <img src="/images/Me.jpeg" alt="Me" />
                                </div>
                            
                            </div>
                        
                        </div>

                        <div className="task">

                            <div className="priority">
                                <p className="priority-status mid">Mid Priority</p>
                                <p className="company-name">U&C CO.</p>
                            </div>
                            
                            <p className="task-name">Company website redesign.</p>
                            
                            <div className="task-about">

                                <div className="comm-link">
                                    <div className="comment">
                                        <i className="bi bi-chat"></i>
                                        <span>3</span>
                                    </div>
                                    <div className="link">
                                        <i className="bi bi-link-45deg"></i>
                                        <span>2</span>
                                    </div>
                                </div>
                                
                                <div className="people">
                                    <i class="bi bi-plus-circle"></i>
                                    <img src="/images/Me.jpeg" alt="Me" />
                                </div>
                            
                            </div>
                        
                        </div>

                    </div>
                </div>

                <div className="stat-holder third">
                    <div className="about">
                        <p>Completed</p>
                        <i class="bi bi-three-dots-vertical"></i>                    
                    </div>

                    <div className="tasks-box">

                        <div className="task">

                            <div className="priority">
                                <p className="priority-status mid">Mid Priority</p>
                                <p className="company-name">U&C CO.</p>
                            </div>
                            
                            <p className="task-name">Company website redesign.</p>
                            
                            <div className="task-about">

                                <div className="comm-link">
                                    <div className="comment">
                                        <i className="bi bi-chat"></i>
                                        <span>3</span>
                                    </div>
                                    <div className="link">
                                        <i className="bi bi-link-45deg"></i>
                                        <span>2</span>
                                    </div>
                                </div>
                                
                                <div className="people">
                                    <i class="bi bi-plus-circle"></i>
                                    <img src="/images/Me.jpeg" alt="Me" />
                                </div>
                            
                            </div>
                        
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default TaskManager;