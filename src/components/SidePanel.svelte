<script lang="ts">
  const contactInfo = [
    {
      icon: '<svg class="icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.34375 6.28125L6 3.1875L9.65625 6.28125V10.7812H6.84375V7.96875H5.15625V10.7812H2.34375V6.28125Z" fill="white"/><path d="M1.78343 5.72093C1.63004 5.56755 1.63841 5.31642 1.80166 5.17354L5.75306 1.71608C5.89444 1.59236 6.10556 1.59236 6.24694 1.71608L10.1984 5.17354C10.3616 5.31642 10.37 5.56755 10.2166 5.72093L10.1831 5.75445C10.0445 5.89302 9.8226 5.90153 9.67384 5.77399L6.24405 2.83419C6.10361 2.71382 5.89639 2.71382 5.75595 2.83419L2.32616 5.77399C2.17739 5.90153 1.95551 5.89302 1.81695 5.75445L1.78343 5.72093Z" fill="white"/><path d="M7.40625 1.875C7.40625 1.66789 7.57414 1.5 7.78125 1.5H8.15625C8.36336 1.5 8.53125 1.66789 8.53125 1.875V3.75H7.78125C7.57414 3.75 7.40625 3.5821 7.40625 3.375V1.875Z" fill="white"/></svg>',
      text: "1215 Belhaven Road Cary, NC, 27513",
    },
    {
      icon: '<svg class="icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.125 3.51677C1.125 3.43847 1.18847 3.375 1.26677 3.375C1.2965 3.375 1.32548 3.38435 1.34961 3.40172L5.78089 6.59224C5.91176 6.68648 6.08824 6.68648 6.21911 6.59224L10.6504 3.40172C10.6745 3.38435 10.7035 3.375 10.7332 3.375C10.8115 3.375 10.875 3.43847 10.875 3.51677V8.25C10.875 8.45711 10.7071 8.625 10.5 8.625H1.5C1.29289 8.625 1.125 8.45711 1.125 8.25V3.51677Z" fill="white"/><path d="M1.65719 3H10.3764C10.4447 3 10.5 3.05533 10.5 3.12359C10.5 3.16368 10.4806 3.20127 10.4478 3.22444L6.21675 6.22147C6.08689 6.31346 5.91311 6.31346 5.78325 6.22147L1.55215 3.22444C1.51944 3.20127 1.5 3.16368 1.5 3.12359C1.5 3.05533 1.55533 3 1.62359 3H1.65719Z" fill="white"/></svg>',
      text: "nickdbarnette@gmail.com",
    },
    {
      icon: '<svg class="icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.08004 2.52834C2.3476 2.26078 2.68416 2.07271 3.05226 1.98507L3.49776 1.87899C3.5603 1.86411 3.62523 1.89172 3.65789 1.94709L4.5813 3.51284C4.72343 3.75383 4.6845 4.06046 4.48665 4.25831L3.90713 4.83784C3.75398 4.99099 3.7036 5.2191 3.77802 5.4225C4.20855 6.59929 5.09704 7.55175 6.24113 8.06295L6.94407 8.37701L7.69991 7.62113C7.94179 7.37929 8.31664 7.3317 8.61124 7.50544L10.0859 8.3751C10.1413 8.40776 10.1689 8.47271 10.154 8.53522L10.0422 9.00495C9.95831 9.35723 9.77831 9.67931 9.52226 9.93536C8.9847 10.4729 8.18426 10.6518 7.48684 10.3492C6.33075 9.84754 4.59255 8.99539 3.65599 8.05883C2.74677 7.1496 2.03638 5.60411 1.6222 4.54245C1.34883 3.84169 1.54816 3.06022 2.08004 2.52834Z" fill="white"/></svg>',
      text: "(919) 538-3699",
    },
    {
      icon: '<svg class="icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3798 15.3038C18.3798 15.3038 19.4051 13.2532 22.481 12.5696C25.557 11.8861 27.9494 14.6202 27.9494 14.6202C27.9494 14.6202 29.7452 16.3291 29.7452 18.038V30H24.1899V20.0151C24.1899 20.0151 23.8481 17.0127 21.4557 17.0127C19.0633 17.0127 18.3798 19.7468 18.3798 19.7468V15.3038Z" fill="white"/><path d="M3.34176 12.9114H9.49366V30H3.34176V12.9114Z" fill="white"/><path d="M12.9114 12.9114H18.3797V30H12.9114V12.9114Z" fill="white"/><path d="M9.83544 6.41772C9.83544 8.30528 8.30528 9.83544 6.41772 9.83544C4.53017 9.83544 3 8.30528 3 6.41772C3 4.53017 4.53017 3 6.41772 3C8.30528 3 9.83544 4.53017 9.83544 6.41772Z" fill="white"/></svg>',
      text: "https://www.linkedin.com/in/nick-david-barnette",
    },
  ];

  const projects = [
    {
      icon: '<svg class="icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 10H11L5 16L11 22H9L3 16L9 10Z" fill="white"/><path d="M23 22H21L27 16L21 10L23 10L29 16L23 22Z" fill="white"/><path d="M16.6667 8H18L15.4222 24H14L16.6667 8Z" fill="white"/></svg>',
      text: "https://nicholasbarnette.com",
    },
    {
      icon: '<svg class="icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0178 2.05158C12.69 2.0482 9.46984 3.23 6.93427 5.3852C4.39871 7.54041 2.71351 10.5281 2.18069 13.813C1.64788 17.0978 2.30227 20.465 4.02659 23.3112C5.75091 26.1574 8.43245 28.2965 11.5907 29.3451C12.287 29.4741 12.5449 29.0357 12.5449 28.666C12.5449 28.2964 12.5449 27.4539 12.5449 26.2848C8.65069 27.1445 7.82543 24.4108 7.82543 24.4108C7.56595 23.5636 7.01469 22.8357 6.26949 22.3563C5.00582 21.4966 6.37264 21.4966 6.37264 21.4966C6.81561 21.5592 7.23853 21.7217 7.60938 21.972C7.98023 22.2222 8.2893 22.5535 8.51315 22.9408C8.70335 23.2857 8.95978 23.5896 9.26773 23.8352C9.57568 24.0807 9.9291 24.263 10.3077 24.3716C10.6863 24.4803 11.0826 24.5131 11.4738 24.4681C11.8651 24.4232 12.2437 24.3015 12.5878 24.1099C12.6418 23.4027 12.9467 22.7381 13.4475 22.2359C10.3356 21.8835 7.06895 20.68 7.06895 15.3158C7.04758 13.9258 7.56158 12.5807 8.50454 11.5592C8.08372 10.3507 8.13282 9.02812 8.64209 7.85415C8.64209 7.85415 9.81979 7.47591 12.4933 9.28974C14.789 8.65942 17.2122 8.65942 19.5079 9.28974C22.1814 7.47591 23.3505 7.85415 23.3505 7.85415C23.8651 9.02645 23.9173 10.35 23.4967 11.5592C24.4396 12.5807 24.9536 13.9258 24.9322 15.3158C24.9322 20.6972 21.657 21.8749 18.5365 22.1929C18.8711 22.5293 19.1295 22.9336 19.2941 23.3786C19.4588 23.8236 19.5258 24.2987 19.4907 24.7718C19.4907 26.6459 19.4907 28.1588 19.4907 28.6144C19.4907 29.07 19.74 29.4225 20.4535 29.2936C23.6018 28.235 26.2717 26.0925 27.9869 23.2482C29.7022 20.4039 30.3513 17.0428 29.8185 13.7643C29.2857 10.4859 27.6056 7.5033 25.0779 5.34857C22.5502 3.19385 19.3393 2.0071 16.0178 2V2.05158Z" fill="white"/></svg>',
      text: "https://github.com/nicholasbarnette",
    },
  ];

  const developments = [
    "HTML5",
    "CSS3 / LESS / SASS",
    "TypeScript / JavaScript",
    "Docker",
    "Python",
    "React / React Native / Svelte",
    "NodeJS / Flask",
    "SQL",
  ];

  const tools = [
    "Git",
    "Jenkins",
    "Microsoft Office Suite",
    "Windows / Mac OS X / Linux",
    "GitHub / GitLab / Gerrit",
  ];
</script>

<aside class="sidebar">
  <img
    class="logo"
    src="/imgs/Logo.svg"
    alt="Nicholas Barnette's personal logo."
  />
  <div class="content">
    <section class="section">
      <h3 class="section-header">Contact</h3>
      {#each contactInfo as contact (contact.text)}
        <div class="contact">
          <span>{@html contact.icon}</span>
          <span>{contact.text}</span>
        </div>
      {/each}
    </section>
    <section class="section">
      <h3 class="section-header">Projects</h3>
      {#each projects as project (project.text)}
        <div class="project">
          {@html project.icon}
          <span>{project.text}</span>
        </div>
      {/each}
    </section>
    <section class="section">
      <h3 class="section-header">Development</h3>
      {#each developments as development (development)}
        <span class="development">{development}</span>
      {/each}
    </section>
    <section class="section">
      <h3 class="section-header">Process</h3>
      {#each tools as tool (tool)}
        <span class="tool">{tool}</span>
      {/each}
    </section>
  </div>
</aside>

<style>
  .sidebar {
    width: 40%;
    height: 100%;
    background-color: var(--bg-alt);
    color: var(--fg-alt);
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
  }

  .content {
    display: grid;
    grid-auto-rows: auto;
    row-gap: 4rem;
  }

  .section {
    display: flex;
    flex-direction: column;
  }

  .section-header {
    margin-block-end: 0.5rem;
    font-weight: 600;
  }

  .logo {
    width: 100%;
    max-width: 15rem;
    align-self: center;
  }

  .contact,
  .project,
  .development,
  .tool {
    font-size: 0.875rem;
    margin-inline-start: 1rem;
    display: flex;
  }

  :global(.icon) {
    height: 1.25rem;
    width: 1.25rem;
    margin-inline-end: 0.5rem;
  }
</style>
