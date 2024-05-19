import {Html} from "@react-three/drei";
import {TailSpin} from "react-loader-spinner";

const Loader = () => {
  return (
    <Html>
      <span className='canvas-load'></span>
      <TailSpin
        visible={true}
        height='80'
        width='80'
        color='#4fa94d'
        ariaLabel='tail-spin-loading'
        radius='1'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </Html>
  );
};

export default Loader;
