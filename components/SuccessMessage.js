function SuccessMessage({ show, message, isError }) {
    try {
        if (!show) return null;

        return (
            <div 
                className={`fixed top-4 right-4 ${isError ? 'bg-red-500' : 'bg-green-500'} text-white px-6 py-3 rounded-md shadow-lg flex items-center`}
                data-name="success-message"
            >
                <i className={`fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'} mr-2`}></i>
                <span>{message}</span>
            </div>
        );
    } catch (error) {
        console.error('SuccessMessage error:', error);
        reportError(error);
        return null;
    }
}
