import React, { useEffect } from "react";
import { FaEllipsisH, FaLaravel, FaMagento, FaWordpressSimple } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TimelineLite, Power4 } from "gsap";
function Download_Plugins() {
    useEffect(() => {
        var tl = new TimelineLite({ duration: 0.25 });
        tl.from(".header_tag h3", { y: 20, opacity: 0 });
        tl.from(".r-c", { x: -20, opacity: 0, stagger: { each: 1 } }, "-=.2");
        tl.to(
            ".platform",
            { scale: 1, opacity: 1, stagger: { each: 0.125 }, ease: Power4 },
            "-=1.5"
        );
        tl.from(".manual", { opacity: 0 }, "-=.25");
        tl.from(".step", { opacity: 0, stagger: { each: 0.1 } }, "-=.1");
    });
    return (
        <div className="container-fluid">
            <div className="header_tag">
                <h3>Download/Plugins</h3>
            </div>

            <div className="row mt-4">
                <div className="r-c r-c-16">
                    <span className="rect"></span>
                    <h4>Download our Plugin for Your Desired Platform</h4>
                </div>
                <div className="row-grid">
                    <ul className="platform-lists list-unstyled my-3">
                        <li className="platform">
                            <a href="" className="wordpress">
                                <FaWordpressSimple size="50px" color="white" />
                                <span className="info">Download for WordPress</span>
                            </a>
                        </li>
                        <li className="platform">
                            <a href="" className="magento">
                                <FaMagento size="50px" color="white" />
                                <span className="info">Download for Magento</span>
                            </a>
                        </li>
                        <li className="platform">
                            <a href="" className="laravel">
                                <FaLaravel size="50px" color="white" />
                                <span className="info">Download for Laravel</span>
                            </a>
                        </li>
                        <li className="platform">
                            <a href="" className="others">
                                <FaEllipsisH size="50px" color="white" />
                                <span className="info">Download for Other CMS</span>
                            </a>
                        </li>
                        <li className="platform">
                            <a href="" className="others">
                                <FiDownload size="50px" color="white" />
                                <span className="info">Manual Install</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row mt-4 manual-install">
                <div className="r-c r-c-16">
                    <span className="rect"></span>
                    <h4>Manually Integrate Plugin</h4>
                </div>
                <span className="manual my-2 d-inline-block">
                    To manually integrate our Plugin, Please follow these Directions
                </span>
                <div className="steps">
                    <div className="step">
                        <h5>STEP 1</h5>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                            incidunt!
                        </p>
                    </div>
                    <div className="step">
                        <h5>STEP 2</h5>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                            incidunt!
                        </p>
                    </div>
                    <div className="step">
                        <h5>STEP 3</h5>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                            incidunt!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Download_Plugins;
