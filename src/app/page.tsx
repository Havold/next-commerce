import ProductsList from "@/components/ProductsList";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="h-full flex flex-col gap-20">
      {/* SLIDERS */}
      <Slider />

      {/* FEATURED PRODUCTS */}
      <div className="h-full flex flex-col gap-4 px-2 md:px-16 lg:px-32 xl:px-48">
        <span className="text-[18px] font-medium">Featured Products</span>
        <ProductsList />
      </div>
    </div>
  );
}
