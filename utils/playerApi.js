async function validatePlayerTag(tag) {
    try {
        // Remove # if present and ensure proper format
        const formattedTag = tag.startsWith('#') ? tag : `#${tag}`;
        
        // Simple validation - just check if it starts with #
        if (formattedTag.startsWith('#') && formattedTag.length > 1) {
            return {
                isValid: true,
                playerName: formattedTag
            };
        } else {
            return {
                isValid: false,
                error: 'You silly baka check your playertag again'
            };
        }
    } catch (error) {
        return {
            isValid: false,
            error: 'You silly baka check your playertag again'
        };
    }
}
