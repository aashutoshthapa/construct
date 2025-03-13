function App() {
    try {
        const [notification, setNotification] = React.useState({
            show: false,
            message: '',
            isError: false
        });

        const handleSubmit = async (playerTag) => {
            try {
                const validation = await validatePlayerTag(playerTag);
                
                if (validation.isValid) {
                    await savePlayerTag(playerTag);
                    setNotification({
                        show: true,
                        message: `${validation.playerName} is added to tracking`,
                        isError: false
                    });
                } else {
                    setNotification({
                        show: true,
                        message: validation.error,
                        isError: true
                    });
                }
                
                setTimeout(() => setNotification({ show: false, message: '', isError: false }), 3000);
            } catch (error) {
                console.error('Failed to submit player tag:', error);
                setNotification({
                    show: true,
                    message: 'Failed to submit player tag. Please try again.',
                    isError: true
                });
                setTimeout(() => setNotification({ show: false, message: '', isError: false }), 3000);
            }
        };

        return (
            <div className="construction-bg min-h-screen flex flex-col items-center justify-center p-4" data-name="app-container">
                <div className="text-center mb-12" data-name="header">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-effect" data-name="title">
                        <i className="fas fa-tools mr-3"></i>
                        Under Construction
                    </h1>
                    <p className="text-blue-300 text-xl mb-8" data-name="opening-date">
                        Expected Opening: April 1st
                    </p>
                    <p className="text-gray-400 max-w-xl mx-auto" data-name="description">
                        Submit your player tag below to join our tracking list!
                    </p>
                </div>

                <TagForm onSubmit={handleSubmit} />
                <SuccessMessage 
                    show={notification.show} 
                    message={notification.message} 
                    isError={notification.isError}
                />

                <footer className="absolute bottom-4 text-center text-gray-500 text-sm" data-name="footer">
                    <p className="flex items-center justify-center">
                        Made with <i className="fas fa-heart text-red-500 mx-1"></i> by Aashutosh
                    </p>
                </footer>
            </div>
        );
    } catch (error) {
        console.error('App error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
