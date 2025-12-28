import Feature from "./Feature"
export default function Features() {
    const features = [{
        id: 1,
        icon: '/car.png',
        title: 'Free Shipping',
        description: 'Free shipping on all your order'
    },
    {
        id: 2,
        icon: '/headphone.png',
        title: 'Customer Support 24/7',
        description: 'Instant access to Support'
    },
    {
        id: 3,
        icon: '/shopping-bag.png',
        title: '100% Secure Payment',
        description: 'We ensure your money is save'
    },
    {
        id: 4,
        icon: '/money.png',
        title: 'Money-Back Guarantee',
        description: '30 Days Money-Back Guarantee'
    },



];

    return (
        <div className="container grid grid-cols-4 gap-6 h-32 mx-auto p-10 bg-white rounded-lg shadow-[0px_8px_40px_0px_rgba(0,38,3,0.08)]">
        {
            features.map((feature) => (
                <Feature key={feature.id} icon={feature.icon}  title={feature.title} description={feature.description}  />
            ))
        }
       
            
        </div>
    )
}