function savePlayerTag(tag) {
    try {
        return trickleCreateObject('playerTag', {
            tag: tag,
            submittedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error('Failed to save player tag:', error);
        throw error;
    }
}

function getPlayerTags() {
    try {
        return trickleListObjects('playerTag', 100, true);
    } catch (error) {
        console.error('Failed to get player tags:', error);
        throw error;
    }
}
