import Loader from "../components/Loader/Loader";

function LoadingPage() {
    return (
        <div className="page__loading">
            <Loader
                text="Loading"
                size="large"
            />
        </div>
    );
}

export default LoadingPage;
