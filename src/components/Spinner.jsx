import React from 'react';

const Spinner = () => {
    return (
        <div className="my-5 animate-spin inline-block border-8 h-32 w-32 border-current border-t-transparent text-coral rounded-full" role="status" aria-label="loading">
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Spinner;