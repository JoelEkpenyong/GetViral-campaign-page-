const openSidebarBtn  = document.querySelector('#open-sidebar');
     const closeSidebarBtn  = document.querySelector('#close-sidebar');
     const sidebar_name  = document.querySelector('.side-bar__name');
     const aside = document.querySelector('aside');
     const body = document.body;
     closeSidebarBtn.addEventListener('click', () => {
      body.classList.toggle('collapse-sidebar');
      closeSidebarBtn.classList.remove('d-md-block')
      openSidebarBtn.classList.add('d-md-block')
   });
     openSidebarBtn.addEventListener('click', () => {
      body.classList.toggle('collapse-sidebar');
      closeSidebarBtn.classList.add('d-md-block');
      openSidebarBtn.classList.remove('d-md-block')
   })

   