import React, { useEffect } from "react";
import { FaEllipsisH, FaLaravel, FaMagento, FaWordpressSimple } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IconContext } from "react-icons";
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
        tl.from(".step", { opacity: 0, stagger: { each: 0.1 } }, "-=.25");
    });

    const Downloads = [
        {
            link: "",
            classname: "wordpress",
            text: "Download for WordPress",
            icon: <FaWordpressSimple />,
        },
        {
            link: "",
            classname: "magento",
            text: "Download for Magento",
            icon: <FaMagento />,
        },
        {
            link: "",
            classname: "laravel",
            text: "Download for Laravel",
            icon: <FaLaravel />,
        },
        {
            link: "",
            classname: "others",
            text: "Download for Other CMS",
            icon: <FaEllipsisH />,
        },
        {
            link: "",
            classname: "others",
            text: "Manual Install",
            icon: <FiDownload />,
        },
    ];

    var DownloadJSX = Downloads.map(({ link, classname, icon, text }, index) => {
        return (
            <li className="platform" key={index}>
                <a href={link} className={classname}>
                    {icon}
                    <span className="info">{text}</span>
                </a>
            </li>
        );
    });
    return (
        <div className="container-fluid">
            <div className="header_tag">
                <h3>Download/Plugins</h3>
            </div>

            <div className="row mt-4">
                <div className="r-c r-c-16">
                    <h4>Download our Plugin for Your Desired Platform</h4>
                </div>
                <div className="row-grid">
                    <ul className="platform-lists list-unstyled my-3">
                        <IconContext.Provider value={{ style: { color: "white" }, size: 50 }}>
                            {DownloadJSX}
                        </IconContext.Provider>
                    </ul>
                </div>
            </div>

            <div className="row mt-4 manual-install">
                <div className="r-c r-c-16">
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
