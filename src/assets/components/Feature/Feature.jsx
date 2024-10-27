import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center ">
                <FaCheckCircle className="text-green-500 mr-4"></FaCheckCircle> {feature}</p>
        </div>
    );
};

export default Feature;