// // Function to update the position of the cursor dot
// let isHovering = false;
// function updateCursor(e) {
//     const cursorDot = document.getElementById('cursor-dot');
//     cursorDot.style.left = e.clientX + 'px';
//     cursorDot.style.top = e.clientY + 'px';
// }


// // Function to handle hover effect on .hover-this elements
// function handleHover(e) {
//     isHovering = true
//     const cursorDot = document.getElementById('cursor-dot');
//     const cursorOutline = document.getElementById('cursor-outline');
//     cursorDot.style.transform = 'translate(-50%, -50%) scale(8)';
//     cursorOutline.style.opacity=0
//     cursorOutline.style.borderColor="#2f2f2f"
//     cursorDot.style.background="#fff"
// }

// // Function to reset cursor dot scale when not hovering
// function resetCursor() {
//     isHovering = false
//     const cursorOutline = document.getElementById('cursor-outline');
//     const cursorDot = document.getElementById('cursor-dot');
//     cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
//     cursorOutline.style.opacity=1
//     cursorOutline.style.borderColor="#2f2f2f"
//     cursorDot.style.background="#2f2f2f"
//     // on darkmode
//     const darkCursorDot = document.querySelector('.dark #cursor-dot');
//     const darkCursorOutline = document.querySelector('.dark #cursor-outline');
//     if (darkCursorDot && darkCursorOutline) {
//         darkCursorOutline.style.borderColor = "#e4e4e4ca";
//         darkCursorDot.style.background = "#e4e4e4ca";
//     }
// }
// // Handle the touch start event
// document.addEventListener("mousedown", function () {
//     const cursorOutline = document.getElementById('cursor-outline');
//     cursorOutline.style.width = "50px";
//     cursorOutline.style.height = "50px";
//     cursorOutline.style.transition = "0.3s ease-in";
    
// });

// // Handle the touch end event
// document.addEventListener("mouseup", function () {
//     const cursorOutline = document.getElementById('cursor-outline');
//     cursorOutline.style.width = "26px";
//     cursorOutline.style.height = "26px";
//     cursorOutline.style.transition = "0.1s ease-out";
// });


// // 
// document.addEventListener('mousemove', (e) => {
//     const cursorOutline = document.getElementById('cursor-outline');
//     const cursorDot = document.getElementById('cursor-dot');
//     const padding = 15; // Adjust the padding as needed
  
//     // Get viewport dimensions
//     const vw = window.innerWidth;
//     const vh = window.innerHeight;
  
//     // Check if cursor is near the edges
//     const nearLeftEdge = e.clientX <= padding;
//     const nearRightEdge = e.clientX >= vw - padding;
//     const nearTopEdge = e.clientY <= padding;
//     const nearBottomEdge = e.clientY >= vh - padding;
    
//     // Hide the cursor outline if near any edge
//     if (nearLeftEdge || nearRightEdge || nearTopEdge || nearBottomEdge) {
//       cursorOutline.style.opacity = '0';
//       cursorDot.style.opacity = '0';
//     } else if (!isHovering){
//         cursorOutline.style.opacity = '1';
//         cursorDot.style.opacity = '1';
//     }
  
   
//   });
//   // 







// // Add event listeners to update cursor position
// document.addEventListener('mousemove', updateCursor);

// // Add event listeners to handle hover effect
// const hoverElements = document.querySelectorAll('.hover-this');
// hoverElements.forEach(element => {
//     element.addEventListener('mouseover', handleHover);
//     element.addEventListener('mouseout', resetCursor);
// });






// //cursor animation
// const cursor_dot=document.getElementById("cursor-dot");
// const cursor_outline=document.getElementById("cursor-outline");

// window.addEventListener("mousemove", (e)=>{
//     const posX=e.clientX;
//     const posY=e.clientY;
//     cursor_dot.style.left=posX+"px";
//     cursor_dot.style.top=posY+"px";
    
//     // cursor_outline.style.left=posX+"px";
//     // cursor_outline.style.top=posY+"px";

//     cursor_outline.animate({
//         left: posX+"px",
//         top: posY+"px"}
//     , {duration: 200, fill: "forwards" });

// })





// Function to detect if the device is a touch device
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

// Run the code only if it's not a touch device
if (!isTouchDevice()) {
    // Function to update the position of the cursor dot
    let isHovering = false;
    function updateCursor(e) {
        const cursorDot = document.getElementById('cursor-dot');
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    }

    // Function to handle hover effect on .hover-this elements
    function handleHover(e) {
        isHovering = true;
        const cursorDot = document.getElementById('cursor-dot');
        const cursorOutline = document.getElementById('cursor-outline');
        cursorDot.style.transform = 'translate(-50%, -50%) scale(8)';
        cursorOutline.style.opacity = 0;
        cursorOutline.style.borderColor = "#2f2f2f";
        cursorDot.style.background = "#fff";
    }

    // Function to reset cursor dot scale when not hovering
    function resetCursor() {
        isHovering = false;
        const cursorOutline = document.getElementById('cursor-outline');
        const cursorDot = document.getElementById('cursor-dot');
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.opacity = 1;
        cursorOutline.style.borderColor = "#2f2f2f";
        cursorDot.style.background = "#2f2f2f";
        
        // Handle dark mode
        const darkCursorDot = document.querySelector('.dark #cursor-dot');
        const darkCursorOutline = document.querySelector('.dark #cursor-outline');
        if (darkCursorDot && darkCursorOutline) {
            darkCursorOutline.style.borderColor = "#e4e4e4ca";
            darkCursorDot.style.background = "#e4e4e4ca";
        }
    }

    // Handle the mousedown event
    document.addEventListener("mousedown", function () {
        const cursorOutline = document.getElementById('cursor-outline');
        cursorOutline.style.width = "50px";
        cursorOutline.style.height = "50px";
        cursorOutline.style.transition = "0.3s ease-in";
    });

    // Handle the mouseup event
    document.addEventListener("mouseup", function () {
        const cursorOutline = document.getElementById('cursor-outline');
        cursorOutline.style.width = "26px";
        cursorOutline.style.height = "26px";
        cursorOutline.style.transition = "0.1s ease-out";
    });

    // Handle mousemove event for cursor outline
    document.addEventListener('mousemove', (e) => {
        const cursorOutline = document.getElementById('cursor-outline');
        const cursorDot = document.getElementById('cursor-dot');
        const padding = 15; // Adjust the padding as needed

        // Get viewport dimensions
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        // Check if cursor is near the edges
        const nearLeftEdge = e.clientX <= padding;
        const nearRightEdge = e.clientX >= vw - padding;
        const nearTopEdge = e.clientY <= padding;
        const nearBottomEdge = e.clientY >= vh - padding;

        // Hide the cursor outline if near any edge
        if (nearLeftEdge || nearRightEdge || nearTopEdge || nearBottomEdge) {
            cursorOutline.style.opacity = '0';
            cursorDot.style.opacity = '0';
        } else if (!isHovering) {
            cursorOutline.style.opacity = '1';
            cursorDot.style.opacity = '1';
        }
    });

    // Add event listeners to update cursor position
    document.addEventListener('mousemove', updateCursor);

    // Add event listeners to handle hover effect
    const hoverElements = document.querySelectorAll('.hover-this');
    hoverElements.forEach(element => {
        element.addEventListener('mouseover', handleHover);
        element.addEventListener('mouseout', resetCursor);
    });

    // Cursor animation
    const cursorDot = document.getElementById("cursor-dot");
    const cursorOutline = document.getElementById("cursor-outline");

    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.left = posX + "px";
        cursorDot.style.top = posY + "px";

        cursorOutline.animate({
            left: posX + "px",
            top: posY + "px"
        }, { duration: 200, fill: "forwards" });
    });
}
