<script lang="ts">
  import html2canvas from "html2canvas";
  import Header from "./components/Header.svelte";
  import Section from "./components/Section.svelte";
  import SidePanel from "./components/SidePanel.svelte";

  const openInNewPage = () => {
    var prtContent = document.getElementById("resume-root");
    var el = document.createElement("p");
    el.appendChild(prtContent);
    var WinPrint = window.open(
      "",
      "",
      "left=0,top=0,width=850,height=1100,toolbar=0,scrollbars=0,status=0"
    );
    WinPrint.document.write(el.innerHTML);
    WinPrint.document.head.innerHTML = document.head.innerHTML;
    WinPrint.document.close();
    WinPrint.focus();
  };

  const savePDF = () => {
    html2canvas(document.getElementById("resume-root")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      // @ts-ignore
      const pdf = new window.jspdf.jsPDF({
        orientation: "portrait",
        unit: "in",
        format: "letter",
      });
      pdf.addImage(imgData, "JPEG", 0, 0, 8.5, 11);
      pdf.save(
        `Resume_${new Date().toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}`
      );
    });
  };
</script>

<div class="page-bg">
  <div class="button-bar">
    <button
      on:click|preventDefault={openInNewPage}
      on:keypress|stopPropagation={openInNewPage}
      class="save-pdf-button">Open in New Page</button
    >
    <button
      on:click|preventDefault={savePDF}
      on:keypress|stopPropagation={savePDF}
      class="save-pdf-button">Save as PDF</button
    >
  </div>

  <div class="page" id="resume-root">
    <SidePanel />
    <main class="main">
      <Header
        name="Nicholas Barnette"
        title="Frontend Developer"
        style="margin-block-end: 0.5rem;"
      />
      <section style="margin-block-end: 1rem;">
        <p class="profile-text">
          Passionate frontend software developer with 5+ years of experience
          developing accessible and responsive web applications. Strong bias
          towards writing simple, efficient, and maintainable code.
        </p>
      </section>
      <Section
        title="Experience"
        style="margin-block-end: 1.5rem;"
        items={[
          {
            header: "SAS Institute Inc.",
            date: { start: "April 2021", end: "Present" },
            title: "Senior Associate Software Developer",
            description: [
              "Architected theme infrastructure and built custom components (React).",
              "Created internal npm libraries to automate the distribution of design tokens/assets.",
              "Performed thorough code reviews to ensure code consistency, proper functionality, visual correctness, and performance.",
              "Serve as a developer liason.",
            ],
          },
          {
            header: "SAS Institute Inc.",
            date: { start: "July 2019", end: "March 2021" },
            title: "Associate Software Developer",
            description: [
              "Performed multiple code refactor projects to simplify CSS codebase (5% total code reduction).",
              "Led project to utilize CSS custom properties that yielded a 10x speed up in theme switching and 40x speed up in custom theme compilation.",
              "Participated in early stage research to recreate components/applications using React.",
            ],
          },
          {
            header: "SAS Institute Inc.",
            date: { start: "May 2016", end: " June 2019" },
            title: "Technical Intern",
            description: [
              "Implemented four custom themes across a library of 124 components.",
              "Developed new features, fixed more than 250 bugs.",
              "Worked with applications to ensure consistent themeing.",
            ],
          },
          {
            header: "VINCI LLC",
            date: { start: "October 2015", end: "June 2019" },
            title: "Full Stack Architect",
            description: [
              "Architected the MySQL database, developed a NodeJS server, and implemented client application (web and mobile).",
              "Oversaw three other developers and provided regular status updates to other members.",
            ],
          },
        ]}
      />
      <Section
        title="Education"
        items={[
          {
            header: "Universtiy of North Carolina at Chapel Hill",
            date: { start: "August 2015", end: "May 2019" },
            title: "Computer Science, Bachelor of Arts",
            description: [
              "Relevant Coursework: Foundation of Programming, Data Structures, Computer Organization, Files and Databases, Modern Web Programming, Internet Services and Protocols, Operating Systems, Digital Logic and Computer Design, Algorithms and Analysis",
            ],
          },
        ]}
      />
    </main>
  </div>
</div>

<style>
  .page-bg {
    display: flex;
    justify-content: center;
    background-color: var(--page-bg);
    padding: 5rem 0;
  }

  /* Normal paper == 8.5 by 11 */
  .page {
    height: 1100px;
    width: 850px;
    background-color: var(--bg);
    display: flex;
  }

  .main {
    flex-grow: 1;
    background-color: var(--bg);
    padding: 1rem 2rem;
  }

  .profile-text {
    font-size: 0.875rem;
  }

  .button-bar {
    position: fixed;
    inset-block-end: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(2rem, max-content));
    column-gap: 1rem;
    width: 100%;
    justify-content: flex-end;
    padding: 0 2rem;
  }

  .save-pdf-button {
    padding: 0.5rem 1rem;
    border: 1px solid var(--bd);
    background-color: var(--bg);
    box-shadow: 1px 1px rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }
</style>
