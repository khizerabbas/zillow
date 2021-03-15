function switchToAgentListings() {
    document.getElementById("agent-listings").classList.add('btn-primary');
    document.getElementById("custom-listings").classList.remove('btn-primary');
}

function switchToOtherListings() {
    document.getElementById("custom-listings").classList.add('btn-primary');
    document.getElementById("agent-listings").classList.remove('btn-primary');
}