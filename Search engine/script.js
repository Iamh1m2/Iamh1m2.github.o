const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    
    searchResults.innerHTML = '';

    if (searchTerm.length > 0) {
        // Perform search logic here (e.g. fetch GitHub API to search for code)
        // Display search results in the searchResults <ul> element
        // You can use AJAX, Fetch API, or other methods to retrieve search results
    }
});
