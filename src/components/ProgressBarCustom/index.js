import ProgressBar from 'react-bootstrap/ProgressBar';
import "./progress-bar-custom.scss";
const ProgressBarCustom = () => {
    return (
        <div className="progress-bar-wrapper">
            <ProgressBar className="progress-bar-custom" now={50} />
        </div>
    )
}

export default ProgressBarCustom;