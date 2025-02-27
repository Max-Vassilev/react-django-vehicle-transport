import smallCarImg from '../assets/images/small_car.jpg';
import bigCarImg from '../assets/images/big_car.jpg';
import suvImg from '../assets/images/suv.jpg';
import carTransporterImg from '../assets/images/car_transporter.jpg';

function Gallery() {
    return (
        <section className="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
            <div className="image relative bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={smallCarImg} alt="Small Car" className="w-full h-full object-cover" />
            </div>
            <div className="image relative bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={bigCarImg} alt="Big Car" className="w-full h-full object-cover" />
            </div>
            <div className="image relative bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={suvImg} alt="SUV" className="w-full h-full object-cover" />
            </div>
            <div className="image relative bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={carTransporterImg} alt="Car Transporter" className="w-full h-full object-cover" />
            </div>
        </section>
    );
}

export default Gallery;
