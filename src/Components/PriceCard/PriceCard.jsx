import Feature from "../feature/feature";


const PriceCard = ({price}) => {

    return (
        <div className='bg-purple-100 rounded-md mt-4 p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-800 text-5xl font-bold' > {price.price} </span>
                <span className='text-2xl font-bold text-gray-500' >/ items</span>
            </h2>
            <h5 className='text-2xl my-6 text-center font-bold'>{price.name}</h5>       
            <p className='underline font-bold text-xl'>features : </p>
            {
                price.features.map( (feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature> )
            }
            <button className="w-full mt-auto hover:bg-purple-800 bg-purple-500 text-white p-4  font-bold rounded-md">Buy Now</button>
        </div>
    );
};

export default PriceCard;