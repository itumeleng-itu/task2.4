
const componentInfo = {
cpu: {
    title: "Central Processing Unit (CPU)",
    content: "The CPU is the brain of the computer that executes instructions and performs calculations. It processes data and controls the operations of all other components in the system.",
    image:"images/cpu.png"
},
cmos: {
    title: "Complementary Metal-Oxide-Semiconductor (CMOS)",
    content: "CMOS is a battery-powered memory chip that stores system configuration data and keeps track of time and date even when the computer is powered off.",
    image:"images/cmos.png"
},
power: {
    title: "Power Supply Unit (PSU)",
    content: "The PSU converts AC power from the wall outlet into DC power that computer components can use. It provides stable power distribution throughout the system.",
    image:"images/psu.png"
},
rom: {
    title: "Read-Only Memory (ROM)",
    content: "ROM contains permanent instructions that don't change, such as the computer's startup instructions (BIOS/UEFI). Data in ROM persists even without power.",
    image:"images/rom.png"
},
storage: {
    title: "Storage Device",
    content: "Storage devices like hard drives and HDDs provide long-term data storage. They retain information even when the computer is powered off, storing the operating system, programs, and user files.",
    image:"images/storage.png"
},
ram: {
    title: "Random Access Memory (RAM)",
    content: "RAM provides temporary, high-speed storage for data and programs currently in use. It allows the CPU to quickly access frequently needed information.",
    image:"images/ram.png"
}
};

function showInfo(component) {
const infoDisplay = document.getElementById('display');
const infoTitle = document.getElementById('title');
const infoContent = document.getElementById('content');

if (componentInfo[component]) {
    infoTitle.textContent = componentInfo[component].title;
    infoContent.textContent = componentInfo[component].content;
    infoImage.src = componentInfo[component].image;
    infoDisplay.classList.add('active');
}
}
document.addEventListener('DOMContentLoaded', function() {
const infoDisplay = document.getElementById('display');
infoDisplay.classList.add('active');
});