export function ToggleComponent() {
    const toggleContainer = document.createElement("div");
    toggleContainer.classList.add("toggle-container");
    
    const toggleSwitch = document.createElement("div");
    toggleSwitch.classList.add("toggle-switch");
    
    toggleContainer.appendChild(toggleSwitch);
    
    toggleContainer.addEventListener("click", () => {
        toggleContainer.classList.toggle("active");
    });
    
    return toggleContainer;
}