import Contact from '@/components/Landing/Home/Contact';
import FAQ from '@/components/Landing/Home/FAQ';
import Hero from '@/components/Landing/Home/Hero';
import ItsWork from '@/components/Landing/Home/ItsWork';
import Review from '@/components/Landing/Home/Review';
import Services from '@/components/Landing/Home/Services';
import WhyChoose from '@/components/Landing/Home/WhyChose';
import ReviewBanner from '../../components/Landing/Home/ReviewBanner';

export default function page() {
  return (
    <div className='bg-background'>
      <div>
        <Hero />
        <ReviewBanner />
        <Services />
        <WhyChoose />
        <ItsWork />
        <Review />
        <FAQ />
        <Contact />

      </div>
    </div>
  )
}