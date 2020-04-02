<script>
  import router, { curRoute, curId } from "./router.js";
  import OmoNavbar from "./quants/Omo-Navbar.svelte";
  import { onMount } from "svelte";

  let currentId;

  onMount(() => {
    curRoute.set(window.location.pathname);
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("id")) {
      curId.set(urlParams.get("id"));
      currentId = urlParams.get("id");
    }
    if (!history.state) {
      window.history.replaceState(
        { path: window.location.pathname },
        "",
        window.location.href
      );
    }
  });

  function handlerBackNavigation(event) {
    curRoute.set(event.state.path);
  }

  const db = {
    wishes: [
      {
        id: "1",
        title: "Wunsch 1",
        content: "Regelmäßig zusammen kochen und essen"
      },
      {
        id: "2",
        title: "Wunsch 2",
        content: "Einmal die Woche Schachspielen"
      },
      {
        id: "3",
        title: "Wunsch 3",
        content: "Öfters in die Natur spazieren gehen"
      }
    ],
    schwierigkeiten: [
      {
        id: "1",
        tag: "hören"
      },
      {
        id: "2",
        tag: "sehen"
      },
      {
        id: "3",
        tag: "laufen"
      },
      {
        id: "4",
        tag: "essen"
      },
      {
        id: "5",
        tag: "reden"
      }
    ],
    leidenschaften: [
      {
        id: "1",
        tag: "stricken"
      },
      {
        id: "2",
        tag: "fischen"
      },
      {
        id: "3",
        tag: "kochen"
      },
      {
        id: "4",
        tag: "backen"
      },
      {
        id: "5",
        tag: "Schach spielen"
      }
    ],
    cities: [
      {
        id: 0,
        name: "Neue Stadt gründen",
        image: "/images/addcity.jpg"
      },
      {
        id: 1,
        name: "Heidelberg",
        image: "https://source.unsplash.com/Yfo3qWK2pjY"
      },
      {
        id: 2,
        name: "Berlin",
        image: "https://source.unsplash.com/pN684G33h_M"
      },
      {
        id: 3,
        name: "Memmingen",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/22/Memmingen-Marktplatz.JPG"
      }
    ],
    enkels: [
      {
        id: 0,
        name: "Emma",
        image: "https://source.unsplash.com/rDEOVtE7vOs",
        story:
          "Eines der schönsten Momente meines Lebens habe ich mit Onkel Josef-Dieter gehabt",
        city: 2
      },
      {
        id: 1,
        name: "Jakob",
        image: "https://source.unsplash.com/7YVZYZeITc8",
        story:
          "Eines der schönsten Momente meines Lebens habe ich mit Onkel Josef-Dieter gehabtf",
        city: 1
      },
      {
        id: 2,
        name: "Volker",
        image: "https://source.unsplash.com/rriAI0nhcbc",
        story:
          "Eines der schönsten Momente meines Lebens habe ich mit Onkel Josef-Dieter gehabt",
        city: 2
      },
      {
        id: 3,
        name: "Adele",
        image: "https://source.unsplash.com/xe68QiMaDrQ",
        story:
          "Eines der schönsten Momente meines Lebens habe ich mit Onkel Josef-Dieter gehabt",
        city: 3
      }
    ],
    dreams: [
      {
        id: 1,
        name: "Oma Erna",
        dream: "als ältester Mensch einen Marathon zu laufen",
        leidenschaften: [1, 2, 3],
        schwierigkeiten: [1, 2],
        wishes: [1, 2, 3],
        color: "bg-ci-2",
        image: "https://source.unsplash.com/y0I85D5QKvs",
        city: 1
      },
      {
        id: 2,
        name: "Tante Inge",
        dream: "noch einmal an die Nordsee zu fahren",
        color: "bg-ci",
        city: 2,
        leidenschaften: [1, 2, 3],
        schwierigkeiten: [1, 2],
        wishes: [1, 2, 3],
        image: "https://source.unsplash.com/MTg6nH8_lOY"
      },

      {
        id: 3,
        name: "Onkel Otto",
        dream: "ins Stadion des Champions League Finales gehen",
        color: "bg-ci-2",
        city: 3,
        leidenschaften: [1, 2, 3],
        schwierigkeiten: [1, 2],
        wishes: [1, 2, 3],
        image: "https://source.unsplash.com/xSOfm3S2QQg"
      }
    ],
    blog: [
      {
        id: 1,
        title: "Alf und Emmy,",
        subtitle: "eine wundersame Begegnung",
        excerpt:
          "Letzte Woche haben sich zum ersten mal zwicshen Alf und Emmy ein Generationen Tandem gebildet. Sie waren gemeinam auf dem Weg zum Schachspielen als es geschah...",
        image: "https://source.unsplash.com/random?sig=123/800x800/",
        cities: [1, 2, 3]
      },
      {
        id: 2,
        title: "Wie alles began,",
        subtitle: "die ersten Tage von Opa Franz",
        excerpt:
          "Peter, Philipp und Samuel hatten eines Tages den Geistesblitz Opa Franz für Memmingen zu entwickeln. Innerhalb von 24 Stunden bauten sie gemeinsam den ersten...",
        image: "https://source.unsplash.com/random?sig=321/800x800/",
        cities: [1, 2, 3]
      }
    ]
  };
</script>

<style>

</style>

<svelte:window on:popstate={handlerBackNavigation} />
<div id="pageContent" class="app overflow-y-scroll">
  <div class="sticky top-0" style="z-index:100000">
    <OmoNavbar />
  </div>
  <svelte:component this={router[$curRoute]} {db} {currentId} />
</div>
