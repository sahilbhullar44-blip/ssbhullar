import Navbar from '@/components/Navbar';
import CategorySlider from '@/components/CategorySlider';
import HeroSlider from '@/components/HeroSlider';
import ProductShowcase from '@/components/ProductShowcase';
import RuixenBentoCards from '@/components/ui/ruixen-bento-cards';
import FavoriteSlider from '@/components/FavoriteSlider';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import { Preview as TextRotateDemo } from '@/components/text-rotate-demo';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Categories Slider */}
      {/* <CategorySlider /> */}

      {/* Main Hero Slider */}
      <HeroSlider />

      {/* Bento Layout Highlight Section */}
      <RuixenBentoCards />
      {/* Product Showcase Cards */}
      <ProductShowcase />
      {/* Favorite Products Fixed Slider */}
      <FavoriteSlider />

      {/* Text Rotate Demo Section */}
      <TextRotateDemo />

      {/* Map Section */}
      <MapSection />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
