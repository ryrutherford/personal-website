import { MutableRefObject, useEffect, useRef } from "react";
import {Slide} from "react-awesome-reveal";
import SVGBox from "./SVGBox";
import AboutBox from "./AboutBox";
import Places from "./Places";
import svgs from "../images/sprite.svg"
import {aboutBoxInfo} from "../constants/constants";

const getAge = () => {
    const today = new Date();
    const birthDate = new Date('10 Jun 1999 00:00:00 EST');
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const About = () => {

    const aboutRef = useRef() as MutableRefObject<HTMLDivElement>;
    
    useEffect(() => {
        setTimeout(() => {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 1250);
    }, []);

    return(
        <section>
            <SVGBox steps={["About", 1500]} svgStyle="hexagon" bgColorClass="bgcolor-primary" colorClass="color-white"/>
            <div ref={aboutRef} className="about">
                <Slide triggerOnce={true} className="grid-full">
                    <div className="about-box bgcolor-grey-dark-1">
                        <div className="about-info-intro mw-50 text-align-center">
                            <span className="color-white">Hi, I'm Ry, a {getAge()} year old software developer currently living in Ottawa and working out of Montreal. Scroll down to learn more about my interests!</span>
                            <svg className="about-icon">
                                <use xlinkHref={`${svgs}#icon-me`}/>
                            </svg>
                        </div>
                    </div>
                </Slide>
                {aboutBoxInfo.map((info, index) => <AboutBox details={info} key={index}/>)}
                <Slide triggerOnce={true} className="grid-full">
                    <Places/>
                </Slide>
            </div>
        </section>
    );
}

export default About;