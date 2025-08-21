import Image from "next/image";
import image from "@/public/image1.jpg";


function Service() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-4xl h-screen flex items-center flex-col justify-center gap-10">
                <h1 className="text-4xl font-bold">Service</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-200 p-4 relative rounded w-40 h-40"> <Image src={image} fill={true} alt="image aashir" placeholder="blur" priority={false} blurDataURL="image" quality={75}/> </div>
                    <div className="bg-gray-200 p-4 rounded w-40 h-40"> <Image src="/image1.jpg" width={160} height={160} alt="image"/> </div>
                    <div className="bg-gray-200 p-4 rounded w-40 h-40"> <Image src="/image1.jpg" width={160} height={160} alt="image"/> </div>
                    <div className="bg-gray-200 p-4 rounded w-40 h-40"> <Image src="/image1.jpg" width={160} height={160} alt="image"/> </div>
                </div>
            </div>
        </div>
    )
}

export default Service;