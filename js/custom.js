function switchToAgentListings() {
    document.getElementById("agent-listings").classList.add('btn-primary');
    document.getElementById("custom-listings").classList.remove('btn-primary');
    document.getElementById("others-listing-list").classList.add('d-none');
    document.getElementById("agent-listing-list").classList.remove('d-none');
}

function switchToOtherListings() {
    document.getElementById("custom-listings").classList.add('btn-primary');
    document.getElementById("agent-listings").classList.remove('btn-primary');
    document.getElementById("agent-listing-list").classList.add('d-none');
    document.getElementById("others-listing-list").classList.remove('d-none');
}