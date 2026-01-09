import StatisticsStrip from '../components/StatisticsStrip';
import Hero from '../components/home/Hero';
import Consultancy from '../components/home/Consultancy';
import CoreCapabilities from '../components/home/CoreCapabilities';
import Discretion from '../components/home/Discretion';
import ThreatLandscape from '../components/home/ThreatLandscape';
import Training from '../components/home/Training';
import CTA from '../components/home/CTA';

export default function Home() {
    return (
        <div className="bg-white">
            <Hero />
            <StatisticsStrip />
            <Consultancy />
            <CoreCapabilities />
            <Discretion />
            <ThreatLandscape />
            <Training />
            <CTA />
        </div>
    );
}
