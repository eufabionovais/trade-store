import "./loading.scoped.scss";
const Loading = () => {
    return (
        <>
            <div className="loading-wrapper">
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        </>
    )
}

export default Loading;