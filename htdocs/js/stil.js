   const tooltip = document.getElementById('tooltip');
   const paths = document.querySelectorAll('path');
   paths.forEach(path => {
     path.addEventListener('mouseover', (e) => {
       const tooltipText = path.id || 'Tooltip not defined';
       tooltip.style.display = 'block';
       tooltip.innerText = tooltipText;
     });
     path.addEventListener('mousemove', (e) => {
       tooltip.style.left = e.pageX + 10 + 'px';
       tooltip.style.top = e.pageY + 10 + 'px';
     });
     path.addEventListener('mouseout', () => {
       tooltip.style.display = 'none';
     });
   });
