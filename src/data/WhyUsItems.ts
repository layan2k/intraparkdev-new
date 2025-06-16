import { FaChartLine } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoRocketSharp } from "react-icons/io5";
import React from "react";
import WhyUsItem from "./WhyUsInterface";


const WhyUsItems: WhyUsItem[] = [
    {
        title: "Expert Strategy",
        description: "Customized solutions backed by years of industry experience",
        icon: React.createElement(FaChartLine),
    },
    {
        title: "Dedicated Team",
        description: "Personal attention and support throughout your journey",
        icon: React.createElement(IoIosPeople),
    },
    {
        title: "Proven Results",
        description: "Track record of successful business transformations",
        icon: React.createElement(IoRocketSharp),
    },
];

export default WhyUsItems;