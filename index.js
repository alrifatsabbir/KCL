const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarClose = document.getElementById('sidebarClose');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
});


sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
});


document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggle = sidebarToggle.contains(event.target);
    
    if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});




const canvas = document.getElementById('kclCanvas');
const ctx = canvas.getContext('2d');

function drawKCLBranch(x1, y1, x2, y2, label, color, offX = 0, offY = 0) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();

    const angle = Math.atan2(y2 - y1, x2 - x1);
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - 12 * Math.cos(angle - Math.PI / 7), y2 - 12 * Math.sin(angle - Math.PI / 7));
    ctx.lineTo(x2 - 12 * Math.cos(angle + Math.PI / 7), y2 - 12 * Math.sin(angle + Math.PI / 7));
    ctx.closePath();
    ctx.fill();

    ctx.font = "bold 11px Arial";
    ctx.fillText(label, x1 + offX, y1 + offY);
}

ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.arc(200, 150, 6, 0, Math.PI * 2);
ctx.fillStyle = "black";
ctx.fill();
ctx.fillText("M", 195, 170);

drawKCLBranch(80, 70, 195, 145, "I1(in)", "blue", -20, 20); 
drawKCLBranch(80, 230, 195, 150, "I4(in)", "blue", -40, 10);

drawKCLBranch(205, 145, 350, 70, "I2(out)", "red", 145, -75);
drawKCLBranch(205, 150, 350, 150, "I3(out)", "red", 145, 5);
drawKCLBranch(205, 155, 340, 250, "I5(out)", "red", 90, 110);



