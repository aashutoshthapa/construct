function TagForm({ onSubmit }) {
    try {
        const [playerTag, setPlayerTag] = React.useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            if (playerTag.trim()) {
                onSubmit(playerTag);
                setPlayerTag('');
            }
        };

        return (
            <form onSubmit={handleSubmit} className="w-full max-w-md" data-name="tag-form">
                <div className="form-container p-6 rounded-lg shadow-xl">
                    <div className="mb-4" data-name="input-group">
                        <label htmlFor="playerTag" className="block text-blue-300 mb-2 text-sm font-medium">
                            Player Tag
                        </label>
                        <input
                            type="text"
                            id="playerTag"
                            value={playerTag}
                            onChange={(e) => setPlayerTag(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            placeholder="Enter your player tag"
                            data-name="player-tag-input"
                        />
                    </div>
                    <button
                        type="submit"
                        className="submit-button w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        data-name="submit-button"
                    >
                        <i className="fas fa-paper-plane mr-2"></i>
                        Submit
                    </button>
                </div>
            </form>
        );
    } catch (error) {
        console.error('TagForm error:', error);
        reportError(error);
        return null;
    }
}
