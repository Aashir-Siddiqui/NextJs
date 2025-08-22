import { User, Users, Star, TrendingUp, Mars, Venus } from "lucide-react";

const FetchServerComp = async (props) => {
    const searchParam = props.searchParams
    const userName = searchParam.name || "john"
    const res = await fetch(`https://api.genderize.io/?name=${userName}`)
    const userData = await res.json()

    const isMale = userData.gender === "male"
    const percent = (userData.probability || 0) * 100

    console.log(userData)

    if (!userName) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            No Name Provided
                        </h1>
                        <p className="text-gray-600">
                            Please add ?name=yourname to the URL
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4'>
            <div className={`bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full ${isMale ? 'border-l-4 border-blue-500' : 'border-l-4 border-pink-500'}`}>
                <div className="text-center flex items-center justify-center flex-col">
                    <div className={`${isMale ? 'bg-blue-500 border-blue-500' : 'bg-pink-500 border-pink-500'} mb-2 border-2 rounded-full p-2`}>
                        <User className="w-14 h-14" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-8">{userName.charAt(0).toUpperCase() + userName.slice(1)}</h1>
                    {userData.gender ? (<p className={`${isMale ? 'text-blue-500 bg-blue-200' : 'text-pink-500 bg-pink-200'} text-lg font-semibold mb-2 rounded-full w-fit px-4 py-0.5 flex items-center gap-1`}>
                        {isMale ? <Mars className='text-blue-500 w-5 h-5' /> : <Venus className='text-pink-500 w-5 h-5' />} {userData.gender.charAt(0).toUpperCase() + userData.gender.slice(1)}
                    </p>) : (
                        <p className="text-gray-500">Gender not found</p>
                    )}
                </div>

                <div className="space-y-4 my-2">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-600 flex items-center">
                                <Star className="w-4 h-4 mr-1" />
                                Confidence
                            </span>
                            <span className="text-sm font-bold text-gray-800">
                                {percent}%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                                className={`h-3 rounded-full transition-all duration-500 ${isMale
                                    ? "bg-gradient-to-r from-blue-400 to-blue-600"
                                    : "bg-gradient-to-r from-pink-400 to-pink-600"
                                    }`}
                                style={{ width: `${percent}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 my-2">
                    <div className={`rounded-lg p-4 ${percent >= 90 ? 'bg-green-100 border border-green-200' : percent >= 75 ? 'bg-yellow-100 border border-yellow-200' : percent >= 50 ? 'bg-purple-100 border border-purple-200' : 'bg-red-100 border border-red-200'}`}>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-600 flex items-center">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                Data Count
                            </span>
                            <span className="text-sm font-bold text-gray-800">
                                {userData.count.toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    className={`rounded-lg p-4 border-2 ${percent >= 90
                        ? "bg-green-50 border-green-200 text-green-800"
                        : percent >= 70
                            ? "bg-yellow-50 border-yellow-200 text-yellow-800"
                            : "bg-red-50 border-red-200 text-red-800"
                        }`}
                >
                    <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">
                            {percent >= 90
                                ? "High Accuracy"
                                : percent >= 70
                                    ? "Moderate Accuracy"
                                    : "Low Accuracy"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FetchServerComp