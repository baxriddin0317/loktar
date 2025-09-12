<template>
  <AppHero />
  <section class="mt-8 md:mt-20">
    <div class="relative max-w-vw mx-auto w-full h-full">
      <span class="absolute dark:!bg-transparent -right-0  bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="975" height="29" viewBox="0 0 975 29" fill="none">
          <path d="M1017 0.99999L242.936 0.999989L215.094 28L1 28" stroke="url(#paint0_radial_1688_24293)" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
            <radialGradient id="paint0_radial_1688_24293" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(564.85 14.4702) rotate(-90) scale(388.46 400.571)">
              <stop offset="0.00094151" stop-color="#9A6CF4"/>
              <stop offset="1" stop-color="#CF52FE"/>
            </radialGradient>
          </defs>
        </svg>
      </span>
      <span class="absolute -left-0 -translate-x-[258px] top-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="1161" height="72" viewBox="0 0 1161 72" fill="none">
          <path d="M1160.5 11.6207L530.108 11.6207L479.029 11.6207L189 11.6207L162.5 71L-29.7133 71L-99.3711 1L-402 1" stroke="url(#paint0_radial_1688_24292)" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
            <radialGradient id="paint0_radial_1688_24292" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(315.934 36.1182) rotate(-90) scale(297.931 296.474)">
              <stop offset="0.00094151" stop-color="#CF52FE" stop-opacity="0"/>
              <stop offset="1" stop-color="#9A3AE0"/>
            </radialGradient>
          </defs>
        </svg>
      </span>
      <div class="max-w-8xl mx-auto px-5 flex items-center justify-end gap-2">
        <p class="text-brand-main dark:text-brand-gray-1 text-sm leading-[120%]">Как рассчитывается рейтинг</p>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M8 0.5C12.4183 0.5 16 4.08172 16 8.5C16 12.9183 12.4183 16.5 8 16.5C3.58172 16.5 0 12.9183 0 8.5C0 4.08172 3.58172 0.5 8 0.5ZM7.55859 7.21875C7.42551 7.23073 7.20166 7.27131 7.06152 7.30859C6.82186 7.37238 6.14542 7.58642 6.12012 7.60645C6.09299 7.63086 5.98187 8.05897 6.00293 8.05859C6.01701 8.05795 6.12821 8.03004 6.25098 7.99609C6.51679 7.9227 6.91445 7.91444 7.08887 7.97852C7.2567 8.04036 7.32124 8.16624 7.32129 8.43457C7.32129 8.70984 7.27462 8.89565 6.94629 9.92969C6.6476 10.8704 6.60616 11.0457 6.60059 11.3926C6.59612 11.6742 6.64464 11.8318 6.79688 12.0283C7.01915 12.315 7.39655 12.4706 7.92578 12.4951C8.38021 12.5161 8.66245 12.4689 9.25488 12.2705L9.75195 12.1035L9.81152 11.9199C9.90686 11.6246 9.90825 11.6275 9.68066 11.6953C9.25634 11.8216 8.79823 11.7967 8.62988 11.6387C8.56414 11.5769 8.54521 11.5172 8.53418 11.3447C8.5148 11.0418 8.55887 10.8542 8.90332 9.77637C9.18685 8.88928 9.20821 8.80081 9.22656 8.4502C9.24885 8.02439 9.21967 7.89097 9.05957 7.67773C8.79384 7.32398 8.24795 7.15662 7.55859 7.21875ZM9.35059 4.57715C9.14396 4.49609 8.71319 4.47434 8.50586 4.53418C7.72042 4.76128 7.48883 5.58394 8.07129 6.07812C8.30395 6.27552 8.52262 6.35103 8.86523 6.35156C9.09604 6.35189 9.18563 6.33694 9.3457 6.27148C9.616 6.16088 9.78522 6.02103 9.90039 5.81348C10.1545 5.35486 9.90565 4.79506 9.35059 4.57715Z" fill="#92909A"/>
          </svg>
        </span>
      </div>
    </div>
    <div class="max-w-8xl w-full mx-auto flex items-start gap-6 px-5 mt-6">
      <AppFilter />
      <AppTabs />
    </div>
  </section>
</template>



