import React from 'react';

const ErrorAlert = ({ errorMessages }) => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                <div className="alert alert-danger" role="alert">
                    We encountered some errors while processing your request.
                    <ol>
                    {errorMessages.map(errMsg =>
                        <li key={errMsg}>{errMsg}</li>
                    )}
                    </ol>
                </div>
                </div>
            </div>
        </>
    );
};

export default ErrorAlert;
