import { BeatLoader } from "react-spinners";


const Spinner = () => {
    return (
        <div
            className='
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
        ><BeatLoader size={64} color="rgb(255 107 107)" />
        </div>
    );
};

export default Spinner;