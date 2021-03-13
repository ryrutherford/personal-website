import { MutableRefObject, useEffect, useRef } from "react";
import SVGBox from "./SVGBox";
import AboutBox from "./AboutBox";


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
                <AboutBox triggerOnce={true} gridClass="grid-full" bgImageClass="bgimage-moto"
                    side="left" svgId="icon-moto" titleText="I like to ride"/>
                <AboutBox triggerOnce={true} gridClass="grid-full" bgImageClass="bgimage-music"
                    side="right" svgId="icon-headphones" titleText="I like to make music"/>
                <AboutBox triggerOnce={true} gridClass="grid-full" bgImageClass="bgimage-powerlift" mwClass="mw-50"
                    side="left" svgId="icon-powerlifting" titleText="I like to powerlift"/>
                <AboutBox triggerOnce={true} bgImageClass="bgimage-ball" mwClass="mw-66" fontClass="xxlarge-font-size"
                    side="right" svgId="icon-ball" titleText="I like to play basketball"/>
                <AboutBox triggerOnce={true} bgImageClass="bgimage-soccer" mwClass="mw-66" fontClass="xxlarge-font-size"
                    side="left" svgId="icon-soccer" titleText="And soccer too"/>
            </div>
        </section>
    );
}

export default About;