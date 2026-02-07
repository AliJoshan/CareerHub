type JobsErrorProps = {
    message: string;
};

function JobsError({ message }: JobsErrorProps) {
    return (
        <div className="lg:col-span-3">
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-1">
                    Something went wrong
                </h3>
                <p className="text-sm mb-4">{message}</p>

                <button
                    onClick={() => window.location.reload()}
                    className="text-sm font-medium text-red-700 underline"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}

export default JobsError;
