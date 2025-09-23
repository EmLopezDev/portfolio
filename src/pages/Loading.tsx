import Loader from "../components/Loader/Loader";

function Loading() {
    return (
        <div className="loading">
            <Loader
                text="Loading"
                size="large"
            />
        </div>
    );
}

export default Loading;
