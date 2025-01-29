import { ThreeDots } from 'react-loader-spinner';
import scss from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={scss.loader_container}>
            <ThreeDots
            height="110" 
            width="110" 
            radius="9"
            color="#FFC700" 
            ariaLabel="three-dots-loading"
            visible={true}
            />
        </div>
    )

};

export default Loader;