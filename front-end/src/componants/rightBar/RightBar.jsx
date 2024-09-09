import React from 'react'
import me from "../../assets/me.png"
import "./rightBar.css";
import { useTheme } from '../theme/ThemeContext';


function RightBar() {
    const { theme } = useTheme();
    return (
        <div className={`rightBar ${theme}`}>
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className={`userInfo ${theme}`}>
                            <img src={me} alt="" />
                            <span>Ahmed Ben henda</span>
                        </div>

                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={me} alt="" />
                            <p>
                                <span>Ahmed Ben henda</span>
                                changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={me} alt="" />
                            <p>
                                <span>Ahmed Ben henda</span>
                                changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={me} alt="" />
                            <p>
                                <span>Ahmed Ben henda</span>
                                changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={me} alt="" />
                            <p>
                                <span>Ahmed Ben henda</span>
                                changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={me} alt="" />
                            <div className="online" />
                            <span>Ahmed Ben henda</span>
                        </div>

                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={me} alt="" />
                            <div className="online" />
                            <span>Ahmed Ben henda</span>
                        </div>

                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={me} alt="" />
                            <div className="online" />
                            <span>Ahmed Ben henda</span>
                        </div>

                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={me} alt="" />
                            <div className="online" />
                            <span>Ahmed Ben henda</span>
                        </div>

                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={me} alt="" />
                            <div className="online" />
                            <span>Ahmed Ben henda</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar