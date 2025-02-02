export function Button({ text, onClick, type = "primary" }) {
    // Use template literals for class assignment based on type
    const buttonClass = type === "primary"
      ? "bg-purple-500 text-white hover:bg-purple-600"
      : "bg-gray-700 text-gray-300 hover:bg-gray-600";
    
    return `
      <button class="w-full py-3 rounded-lg ${buttonClass} focus:outline-none focus:ring-2 focus:ring-purple-300" 
              onclick="${onClick}">
        ${text}
      </button>
    `;
  }
  